import { openDB } from 'idb'

const DB_NAME = 'boondocker-app'
const DB_VERSION = 1
const STORE_SPOTS = 'saved-spots'
const STORE_REVIEWS = 'reviews'

// Initialize IndexedDB
export const initDB = async () => {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_SPOTS)) {
        db.createObjectStore(STORE_SPOTS, { keyPath: 'id' })
      }
      if (!db.objectStoreNames.contains(STORE_REVIEWS)) {
        const reviewStore = db.createObjectStore(STORE_REVIEWS, { keyPath: 'id', autoIncrement: true })
        reviewStore.createIndex('spotId', 'spotId', { unique: false })
      }
    }
  })
  return db
}

// Save a spot for offline access
export const saveSpot = async (spot) => {
  const db = await initDB()
  const tx = db.transaction(STORE_SPOTS, 'readwrite')
  await tx.store.put({
    ...spot,
    savedAt: new Date().toISOString()
  })
  await tx.done
}

// Remove a saved spot
export const removeSpot = async (spotId) => {
  const db = await initDB()
  const tx = db.transaction(STORE_SPOTS, 'readwrite')
  await tx.store.delete(spotId)
  await tx.done
}

// Get all saved spots
export const getSavedSpots = async () => {
  const db = await initDB()
  const tx = db.transaction(STORE_SPOTS, 'readonly')
  const spots = await tx.store.getAll()
  await tx.done
  return spots
}

// Check if a spot is saved
export const isSpotSaved = async (spotId) => {
  const db = await initDB()
  const tx = db.transaction(STORE_SPOTS, 'readonly')
  const spot = await tx.store.get(spotId)
  await tx.done
  return !!spot
}

// Save a review/rating
export const saveReview = async (spotId, rating, comment, userName = 'Anonymous') => {
  const db = await initDB()
  const tx = db.transaction(STORE_REVIEWS, 'readwrite')
  await tx.store.add({
    spotId,
    rating,
    comment,
    userName,
    createdAt: new Date().toISOString()
  })
  await tx.done
}

// Get reviews for a spot
export const getReviews = async (spotId) => {
  const db = await initDB()
  const tx = db.transaction(STORE_REVIEWS, 'readonly')
  const index = tx.store.index('spotId')
  const reviews = await index.getAll(spotId)
  await tx.done
  return reviews
}

// Get average rating for a spot
export const getAverageRating = async (spotId) => {
  const reviews = await getReviews(spotId)
  if (reviews.length === 0) return 0
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
  return sum / reviews.length
}

