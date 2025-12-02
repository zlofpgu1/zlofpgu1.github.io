import { Routes, Route } from 'react-router-dom'
import MapView from './components/MapView'
import SpotDetail from './components/SpotDetail'
import SavedSpots from './components/SavedSpots'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MapView />} />
      <Route path="/spot/:id" element={<SpotDetail />} />
      <Route path="/saved" element={<SavedSpots />} />
    </Routes>
  )
}

export default App

