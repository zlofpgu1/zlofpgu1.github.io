import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { getSpotById } from '../data/campingSpots'
import { saveSpot, removeSpot, isSpotSaved, saveReview, getReviews, getAverageRating } from '../utils/offlineStorage'
import './SpotDetail.css'

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

function SpotDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const spot = getSpotById(id)
  const [isSaved, setIsSaved] = useState(false)
  const [userRating, setUserRating] = useState(0)
  const [comment, setComment] = useState('')
  const [userName, setUserName] = useState('')
  const [reviews, setReviews] = useState([])
  const [averageRating, setAverageRating] = useState(spot?.averageRating || 0)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!spot) return

    const loadData = async () => {
      const saved = await isSpotSaved(id)
      setIsSaved(saved)
      
      const spotReviews = await getReviews(id)
      setReviews(spotReviews)
      
      const avgRating = await getAverageRating(id)
      if (avgRating > 0) {
        setAverageRating(avgRating)
      }
    }
    
    loadData()
  }, [id, spot])

  if (!spot) {
    return (
      <div className="spot-detail">
        <div className="error-message">
          <h2>Spot not found</h2>
          <Link to="/">Back to Map</Link>
        </div>
      </div>
    )
  }

  const handleSaveToggle = async () => {
    if (isSaved) {
      await removeSpot(id)
    } else {
      await saveSpot(spot)
    }
    setIsSaved(!isSaved)
  }

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    if (userRating === 0) {
      alert('Please select a rating')
      return
    }
    
    setSubmitting(true)
    await saveReview(id, userRating, comment, userName || 'Anonymous')
    
    // Reload reviews and average rating
    const spotReviews = await getReviews(id)
    setReviews(spotReviews)
    const avgRating = await getAverageRating(id)
    setAverageRating(avgRating)
    
    // Reset form
    setUserRating(0)
    setComment('')
    setUserName('')
    setSubmitting(false)
  }

  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'filled' : ''} ${interactive ? 'interactive' : ''}`}
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
            onMouseEnter={() => interactive && onRatingChange && onRatingChange(star)}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className="spot-detail">
      <div className="detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <button
          className={`save-btn ${isSaved ? 'saved' : ''}`}
          onClick={handleSaveToggle}
        >
          {isSaved ? '⭐ Saved' : '💾 Save for Offline'}
        </button>
      </div>

      <div className="detail-content">
        <div className="spot-info">
          <h1>{spot.name}</h1>
          <p className="spot-location">{spot.state}</p>
          
          <div className="rating-section">
            <div className="average-rating">
              <span className="rating-label">Average Rating:</span>
              {renderStars(Math.round(averageRating * 2) / 2)}
              <span className="rating-value">({averageRating.toFixed(1)})</span>
            </div>
            <p className="review-count">{reviews.length} review{reviews.length !== 1 ? 's' : ''}</p>
          </div>

          <div className="description">
            <h2>Description</h2>
            <p>{spot.description}</p>
          </div>

          {spot.amenities && spot.amenities.length > 0 && (
            <div className="amenities">
              <h2>Amenities</h2>
              <div className="amenity-tags">
                {spot.amenities.map((amenity, idx) => (
                  <span key={idx} className="amenity-tag">{amenity}</span>
                ))}
              </div>
            </div>
          )}

          <div className="map-section">
            <h2>Location Map</h2>
            <div className="mini-map">
              <MapContainer
                center={[spot.lat, spot.lng]}
                zoom={12}
                style={{ height: '300px', width: '100%' }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[spot.lat, spot.lng]}>
                  <Popup>{spot.name}</Popup>
                </Marker>
              </MapContainer>
            </div>
            <p className="coordinates">
              Coordinates: {spot.lat.toFixed(4)}, {spot.lng.toFixed(4)}
            </p>
          </div>

          <div className="reviews-section">
            <h2>Reviews & Ratings</h2>
            
            <form className="review-form" onSubmit={handleSubmitReview}>
              <div className="form-group">
                <label>Your Rating:</label>
                {renderStars(userRating, true, setUserRating)}
              </div>
              
              <div className="form-group">
                <label htmlFor="userName">Your Name (optional):</label>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Anonymous"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="comment">Your Review:</label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience, tips, or advice about this spot..."
                  rows="4"
                />
              </div>
              
              <button type="submit" className="submit-btn" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>

            <div className="reviews-list">
              {reviews.length === 0 ? (
                <p className="no-reviews">No reviews yet. Be the first to review this spot!</p>
              ) : (
                reviews
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((review) => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <span className="reviewer-name">{review.userName}</span>
                        <span className="review-date">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="review-rating">
                        {renderStars(review.rating)}
                      </div>
                      {review.comment && (
                        <p className="review-comment">{review.comment}</p>
                      )}
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpotDetail

