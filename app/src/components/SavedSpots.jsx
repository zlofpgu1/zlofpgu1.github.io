import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getSavedSpots } from '../utils/offlineStorage'
import './SavedSpots.css'

function SavedSpots() {
  const [savedSpots, setSavedSpots] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const loadSavedSpots = async () => {
      try {
        const spots = await getSavedSpots()
        setSavedSpots(spots)
      } catch (error) {
        console.error('Error loading saved spots:', error)
      } finally {
        setLoading(false)
      }
    }
    loadSavedSpots()
  }, [])

  if (loading) {
    return (
      <div className="saved-spots">
        <div className="loading">Loading your saved spots...</div>
      </div>
    )
  }

  return (
    <div className="saved-spots">
      <div className="saved-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1>⭐ My Saved Spots</h1>
        <p className="offline-note">
          These spots are saved for offline access. You can view them even without internet!
        </p>
      </div>

      <div className="saved-content">
        {savedSpots.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <h2>No saved spots yet</h2>
            <p>Start exploring the map and save your favorite camping spots for offline access!</p>
            <Link to="/" className="explore-btn">
              Explore Spots
            </Link>
          </div>
        ) : (
          <div className="spots-grid">
            {savedSpots.map((spot) => (
              <div key={spot.id} className="spot-card">
                <div className="card-header">
                  <h3>{spot.name}</h3>
                  <span className="spot-state">{spot.state}</span>
                </div>
                <p className="card-description">{spot.description}</p>
                {spot.amenities && spot.amenities.length > 0 && (
                  <div className="card-amenities">
                    {spot.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="amenity-badge">{amenity}</span>
                    ))}
                  </div>
                )}
                <div className="card-footer">
                  <div className="card-coordinates">
                    {spot.lat.toFixed(4)}, {spot.lng.toFixed(4)}
                  </div>
                  <Link to={`/spot/${spot.id}`} className="view-details-btn">
                    View Details →
                  </Link>
                </div>
                {spot.savedAt && (
                  <div className="saved-date">
                    Saved on {new Date(spot.savedAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SavedSpots

