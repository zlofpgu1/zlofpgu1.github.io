// Initial dataset of free/dispersed camping spots across the US
// This includes popular locations from various sources
export const campingSpots = [
  {
    id: '1',
    name: 'Alabama Hills - Lone Pine, CA',
    lat: 36.6069,
    lng: -118.1239,
    description: 'Iconic free camping area with stunning views of the Sierra Nevada. Popular for photography and stargazing.',
    state: 'California',
    amenities: ['Scenic Views', 'Stargazing', 'Photography'],
    averageRating: 4.5,
    reviewCount: 127
  },
  {
    id: '2',
    name: 'Valley of the Gods, UT',
    lat: 37.2683,
    lng: -109.9000,
    description: 'Remote desert camping with incredible rock formations. Dispersed camping allowed on BLM land.',
    state: 'Utah',
    amenities: ['Desert Views', 'Remote', 'BLM Land'],
    averageRating: 4.7,
    reviewCount: 89
  },
  {
    id: '3',
    name: 'Big Bend National Park - Backcountry',
    lat: 29.1275,
    lng: -103.2425,
    description: 'Primitive backcountry camping in one of Texas\' most remote national parks.',
    state: 'Texas',
    amenities: ['National Park', 'Remote', 'Wildlife'],
    averageRating: 4.6,
    reviewCount: 156
  },
  {
    id: '4',
    name: 'Mojave Desert - Joshua Tree Area',
    lat: 34.1356,
    lng: -116.3131,
    description: 'Free BLM camping near Joshua Tree National Park. Great for rock climbing and desert exploration.',
    state: 'California',
    amenities: ['BLM Land', 'Rock Climbing', 'Desert'],
    averageRating: 4.3,
    reviewCount: 203
  },
  {
    id: '5',
    name: 'Ozark National Forest - AR',
    lat: 35.5681,
    lng: -93.8614,
    description: 'Dispersed camping in beautiful Ozark mountains. Many free sites along forest roads.',
    state: 'Arkansas',
    amenities: ['Forest', 'Hiking', 'Free'],
    averageRating: 4.4,
    reviewCount: 94
  },
  {
    id: '6',
    name: 'White Mountains - NH',
    lat: 44.2675,
    lng: -71.3031,
    description: 'Free camping in White Mountain National Forest. Great for fall foliage and hiking.',
    state: 'New Hampshire',
    amenities: ['Forest', 'Hiking', 'Fall Colors'],
    averageRating: 4.5,
    reviewCount: 112
  },
  {
    id: '7',
    name: 'Custer State Park Area - SD',
    lat: 43.7500,
    lng: -103.4167,
    description: 'Free dispersed camping near Custer State Park. Close to Mount Rushmore and Badlands.',
    state: 'South Dakota',
    amenities: ['Scenic', 'Wildlife', 'Free'],
    averageRating: 4.2,
    reviewCount: 78
  },
  {
    id: '8',
    name: 'Gila National Forest - NM',
    lat: 33.2167,
    lng: -108.2167,
    description: 'Remote dispersed camping in Gila National Forest. Hot springs nearby.',
    state: 'New Mexico',
    amenities: ['Forest', 'Hot Springs', 'Remote'],
    averageRating: 4.6,
    reviewCount: 65
  },
  {
    id: '9',
    name: 'Olympic Peninsula - WA',
    lat: 47.8021,
    lng: -123.6042,
    description: 'Free camping in Olympic National Forest. Access to beaches, rainforests, and mountains.',
    state: 'Washington',
    amenities: ['Beach Access', 'Rainforest', 'Diverse'],
    averageRating: 4.7,
    reviewCount: 134
  },
  {
    id: '10',
    name: 'Great Smoky Mountains - TN',
    lat: 35.6111,
    lng: -83.5072,
    description: 'Dispersed camping in Cherokee National Forest near Great Smoky Mountains.',
    state: 'Tennessee',
    amenities: ['Mountains', 'Forest', 'Hiking'],
    averageRating: 4.4,
    reviewCount: 167
  },
  {
    id: '11',
    name: 'Red River Gorge - KY',
    lat: 37.8333,
    lng: -83.6000,
    description: 'Free camping in Daniel Boone National Forest. Popular for rock climbing and hiking.',
    state: 'Kentucky',
    amenities: ['Rock Climbing', 'Forest', 'Hiking'],
    averageRating: 4.5,
    reviewCount: 98
  },
  {
    id: '12',
    name: 'Sawtooth Mountains - ID',
    lat: 44.0833,
    lng: -115.0333,
    description: 'Dispersed camping in Sawtooth National Forest. Stunning alpine scenery.',
    state: 'Idaho',
    amenities: ['Mountains', 'Alpine', 'Scenic'],
    averageRating: 4.8,
    reviewCount: 145
  },
  {
    id: '13',
    name: 'Black Hills - SD',
    lat: 43.8667,
    lng: -103.4500,
    description: 'Free camping in Black Hills National Forest. Close to many attractions.',
    state: 'South Dakota',
    amenities: ['Forest', 'Scenic', 'Free'],
    averageRating: 4.3,
    reviewCount: 87
  },
  {
    id: '14',
    name: 'Coconino National Forest - AZ',
    lat: 34.9167,
    lng: -111.7500,
    description: 'Dispersed camping near Sedona. Beautiful red rock formations and desert scenery.',
    state: 'Arizona',
    amenities: ['Desert', 'Red Rocks', 'Scenic'],
    averageRating: 4.6,
    reviewCount: 201
  },
  {
    id: '15',
    name: 'Pisgah National Forest - NC',
    lat: 35.3167,
    lng: -82.7833,
    description: 'Free camping in Pisgah National Forest. Great waterfalls and hiking trails.',
    state: 'North Carolina',
    amenities: ['Forest', 'Waterfalls', 'Hiking'],
    averageRating: 4.5,
    reviewCount: 123
  },
  {
    id: '16',
    name: 'Superstition Mountains - AZ',
    lat: 33.4667,
    lng: -111.4167,
    description: 'Free BLM camping near Superstition Mountains. Desert camping with mountain views.',
    state: 'Arizona',
    amenities: ['Desert', 'BLM Land', 'Scenic'],
    averageRating: 4.4,
    reviewCount: 109
  },
  {
    id: '17',
    name: 'Bighorn Mountains - WY',
    lat: 44.3833,
    lng: -107.1833,
    description: 'Dispersed camping in Bighorn National Forest. High altitude camping with great views.',
    state: 'Wyoming',
    amenities: ['Mountains', 'High Altitude', 'Scenic'],
    averageRating: 4.6,
    reviewCount: 76
  },
  {
    id: '18',
    name: 'Ouachita National Forest - AR/OK',
    lat: 34.7000,
    lng: -94.0833,
    description: 'Free camping in Ouachita National Forest. Beautiful mountain scenery.',
    state: 'Arkansas',
    amenities: ['Forest', 'Mountains', 'Free'],
    averageRating: 4.3,
    reviewCount: 82
  },
  {
    id: '19',
    name: 'Apache-Sitgreaves National Forest - AZ',
    lat: 34.1333,
    lng: -109.2833,
    description: 'Dispersed camping in Apache-Sitgreaves. Cool mountain camping in Arizona.',
    state: 'Arizona',
    amenities: ['Forest', 'Mountains', 'Cooler Temps'],
    averageRating: 4.5,
    reviewCount: 91
  },
  {
    id: '20',
    name: 'Tonto National Forest - AZ',
    lat: 33.7500,
    lng: -111.2500,
    description: 'Free camping in Tonto National Forest. Close to Phoenix but feels remote.',
    state: 'Arizona',
    amenities: ['Forest', 'Accessible', 'Free'],
    averageRating: 4.2,
    reviewCount: 115
  },
  {
    id: '21',
    name: 'Monument Valley Area - UT/AZ',
    lat: 36.9981,
    lng: -110.0981,
    description: 'Free BLM camping near Monument Valley. Iconic desert scenery and rock formations.',
    state: 'Utah',
    amenities: ['Desert', 'BLM Land', 'Iconic Views'],
    averageRating: 4.6,
    reviewCount: 178
  },
  {
    id: '22',
    name: 'Canyonlands Area - UT',
    lat: 38.2480,
    lng: -109.8800,
    description: 'Dispersed camping near Canyonlands National Park. Remote desert camping.',
    state: 'Utah',
    amenities: ['Desert', 'Remote', 'Scenic'],
    averageRating: 4.7,
    reviewCount: 142
  },
  {
    id: '23',
    name: 'Death Valley Area - CA',
    lat: 36.5054,
    lng: -117.0794,
    description: 'Free BLM camping near Death Valley. Extreme desert environment with unique landscapes.',
    state: 'California',
    amenities: ['Desert', 'BLM Land', 'Unique'],
    averageRating: 4.4,
    reviewCount: 96
  },
  {
    id: '24',
    name: 'Grand Staircase-Escalante - UT',
    lat: 37.2833,
    lng: -111.2500,
    description: 'Dispersed camping in Grand Staircase-Escalante National Monument. Slot canyons and arches.',
    state: 'Utah',
    amenities: ['Slot Canyons', 'Remote', 'Hiking'],
    averageRating: 4.8,
    reviewCount: 189
  },
  {
    id: '25',
    name: 'Sierra Nevada - CA',
    lat: 37.7397,
    lng: -119.5772,
    description: 'Free camping in Sierra National Forest. High altitude alpine camping.',
    state: 'California',
    amenities: ['Mountains', 'Alpine', 'Hiking'],
    averageRating: 4.6,
    reviewCount: 134
  },
  {
    id: '26',
    name: 'Adirondack Mountains - NY',
    lat: 44.0000,
    lng: -74.0000,
    description: 'Dispersed camping in Adirondack Park. Beautiful lakes and mountain views.',
    state: 'New York',
    amenities: ['Mountains', 'Lakes', 'Forest'],
    averageRating: 4.5,
    reviewCount: 167
  },
  {
    id: '27',
    name: 'Boundary Waters Area - MN',
    lat: 47.8333,
    lng: -91.1667,
    description: 'Free camping near Boundary Waters Canoe Area. Perfect for canoeing and fishing.',
    state: 'Minnesota',
    amenities: ['Lakes', 'Canoeing', 'Fishing'],
    averageRating: 4.7,
    reviewCount: 98
  },
  {
    id: '28',
    name: 'Big Sur Area - CA',
    lat: 36.2704,
    lng: -121.8070,
    description: 'Free camping in Los Padres National Forest. Stunning coastal views.',
    state: 'California',
    amenities: ['Coastal', 'Scenic', 'Forest'],
    averageRating: 4.6,
    reviewCount: 201
  },
  {
    id: '29',
    name: 'Great Basin - NV',
    lat: 38.9833,
    lng: -114.3000,
    description: 'Free BLM camping in Great Basin. Remote desert with dark skies for stargazing.',
    state: 'Nevada',
    amenities: ['Desert', 'Stargazing', 'Remote'],
    averageRating: 4.5,
    reviewCount: 76
  },
  {
    id: '30',
    name: 'Cascade Mountains - OR',
    lat: 44.0000,
    lng: -121.5000,
    description: 'Dispersed camping in Deschutes National Forest. Volcanic landscapes and lakes.',
    state: 'Oregon',
    amenities: ['Mountains', 'Volcanic', 'Lakes'],
    averageRating: 4.6,
    reviewCount: 123
  }
]

export const getSpotById = (id) => {
  return campingSpots.find(spot => spot.id === id)
}

export const getAllSpots = () => {
  return campingSpots
}

