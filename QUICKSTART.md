# Quick Start Guide

## Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

## Key Features to Try

### 1. Explore the Map
- The map starts zoomed out with a clean, cartoon-like appearance
- Zoom in (zoom level > 5) to see camping spot markers appear
- Click on any marker to see spot information

### 2. View Spot Details
- Click "View Details" on any marker popup
- See the full spot information, map, and reviews
- Rate and review spots yourself

### 3. Save for Offline
- Click "Save for Offline" on any spot detail page
- Access saved spots from the "My Spots" link in the header
- Saved spots work even without internet connection

### 4. Rate & Review
- Use the 5-star rating system
- Leave comments with tips and advice
- Read reviews from other campers

## Offline Functionality

All saved spots are stored locally in your browser using IndexedDB:
- **No internet required** to view saved spots
- Reviews and ratings are stored locally
- Coordinates and descriptions available offline
- Perfect for remote camping areas with limited connectivity

## Performance Tips

- The app is optimized for low bandwidth
- Map tiles are loaded on-demand
- Markers only appear when zoomed in to reduce load
- All data is cached locally for offline access

## Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

