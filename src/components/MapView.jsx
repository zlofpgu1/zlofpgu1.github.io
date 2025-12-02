import { useState, useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Link } from 'react-router-dom'
import L from 'leaflet'
import { getAllSpots } from '../data/campingSpots'
import { saveSpot, removeSpot, isSpotSaved } from '../utils/offlineStorage'
import './MapView.css'

// Fix for default marker icon in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// Custom marker icon for camping spots
const campingIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="14" fill="#4CAF50" stroke="#fff" stroke-width="2"/>
      <path d="M16 8 L20 18 L16 22 L12 18 Z" fill="#fff"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
})

// Component to handle map zoom changes
function MapZoomHandler({ onZoomChange }) {
  const map = useMap()
  
  useEffect(() => {
    const handleZoom = () => {
      onZoomChange(map.getZoom())
    }
    
    map.on('zoomend', handleZoom)
    return () => {
      map.off('zoomend', handleZoom)
    }
  }, [map, onZoomChange])
  
  return null
}

function MapView() {
  const [spots] = useState(getAllSpots())
  const [zoomLevel, setZoomLevel] = useState(5)
  const [savedSpots, setSavedSpots] = useState(new Set())
  const [showSavedOnly, setShowSavedOnly] = useState(false)

  useEffect(() => {
    // Load saved spots
    const loadSavedSpots = async () => {
      const saved = new Set()
      for (const spot of spots) {
        const savedStatus = await isSpotSaved(spot.id)
        if (savedStatus) {
          saved.add(spot.id)
        }
      }
      setSavedSpots(saved)
    }
    loadSavedSpots()
  }, [spots])

  const handleSaveSpot = async (spotId) => {
    const spot = spots.find(s => s.id === spotId)
    if (savedSpots.has(spotId)) {
      await removeSpot(spotId)
      setSavedSpots(prev => {
        const newSet = new Set(prev)
        newSet.delete(spotId)
        return newSet
      })
    } else {
      await saveSpot(spot)
      setSavedSpots(prev => new Set(prev).add(spotId))
    }
  }

  // Filter spots based on zoom level and saved filter (memoized for performance)
  const visibleSpots = useMemo(() => {
    return spots.filter(spot => {
      if (showSavedOnly && !savedSpots.has(spot.id)) return false
      // Only show markers when zoomed in (zoom > 5)
      return zoomLevel > 5
    })
  }, [spots, showSavedOnly, savedSpots, zoomLevel])

  // Determine map style based on zoom
  const mapStyle = zoomLevel <= 5 ? 'cartoon' : 'detailed'

  return (
    <div className="map-view">
      <div className="map-header">
        <h1>🏕️ Boondocker Travel App</h1>
        <div className="header-controls">
          <button 
            className={`filter-btn ${showSavedOnly ? 'active' : ''}`}
            onClick={() => setShowSavedOnly(!showSavedOnly)}
          >
            {showSavedOnly ? '⭐ Saved Spots' : 'Show All'}
          </button>
          <Link to="/saved" className="saved-link">
            📋 My Spots ({savedSpots.size})
          </Link>
        </div>
      </div>
      
      <div className="map-container">
        <MapContainer
          center={[39.8283, -98.5795]} // Center of US
          zoom={5}
          style={{ height: '100%', width: '100%' }}
          minZoom={4}
          maxZoom={18}
        >
          <MapZoomHandler onZoomChange={setZoomLevel} />
          
          {mapStyle === 'cartoon' ? (
            // Cartoon-like style when zoomed out
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              className="cartoon-tiles"
            />
          ) : (
            // Detailed style when zoomed in
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          )}

          {visibleSpots.map(spot => (
            <Marker
              key={spot.id}
              position={[spot.lat, spot.lng]}
              icon={campingIcon}
            >
              <Popup>
                <div className="popup-content">
                  <h3>{spot.name}</h3>
                  <p className="spot-state">{spot.state}</p>
                  <p className="spot-description">{spot.description}</p>
                  <div className="popup-actions">
                    <Link to={`/spot/${spot.id}`} className="view-btn">
                      View Details
                    </Link>
                    <button
                      className={`save-btn ${savedSpots.has(spot.id) ? 'saved' : ''}`}
                      onClick={() => handleSaveSpot(spot.id)}
                    >
                      {savedSpots.has(spot.id) ? '⭐ Saved' : '💾 Save'}
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {zoomLevel <= 5 && (
        <div className="zoom-hint">
          🔍 Zoom in to see camping spots
        </div>
      )}
    </div>
  )
}

export default MapView

