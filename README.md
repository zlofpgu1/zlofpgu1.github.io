# 🏕️ Boondocker Travel App

The ultimate travel app for boondockers and people camping out of their cars, trailers, and RVs. Find free and dispersed camping spots across the United States with an interactive map, ratings, reviews, and offline access.

## Features

- 🗺️ **Interactive US Map**: Clean, cartoon-like appearance when zoomed out, detailed view when zoomed in
- 📍 **GPS-Based Camping Spots**: View free and dispersed camping locations with precise coordinates
- ⭐ **5-Star Rating System**: Rate and review camping spots
- 💬 **Community Reviews**: Read and write reviews with tips and advice
- 💾 **Offline Access**: Save spots to your list for offline viewing when you're on the trails
- 📱 **Lightweight**: Optimized for low bandwidth areas
- 🎨 **Modern UI**: Beautiful, responsive design that works on all devices

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Explore the Map**: Zoom in on areas of interest to see camping spots
2. **View Spot Details**: Click on any marker to see more information
3. **Rate & Review**: Share your experiences and read others' reviews
4. **Save for Offline**: Click "Save for Offline" to access spots without internet
5. **View Saved Spots**: Access your saved spots list from the header

## Technology Stack

- **React 18**: Modern UI framework
- **React Router**: Client-side routing
- **Leaflet**: Lightweight mapping library
- **IndexedDB (via idb)**: Offline storage
- **Vite**: Fast build tool and dev server

## Data Sources

The app includes initial data from popular free camping and dispersed camping locations across the United States. Users can add their own reviews and ratings, which are stored locally in the browser.

## Offline Functionality

All saved spots and reviews are stored locally using IndexedDB, allowing you to:
- View saved spots without an internet connection
- Read previously loaded reviews offline
- Access coordinates and descriptions when off-grid

## Contributing

This is a personal project, but suggestions and improvements are welcome!

## License

MIT License - feel free to use this project for your own adventures!

---

**Happy Camping! 🏕️**

