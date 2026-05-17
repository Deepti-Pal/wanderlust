const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
// require("dotenv").config({ path: "./.env" });
// const dbUrl = process.env.ATLASDB_URL;
const dbUrl =  "mongodb://127.0.0.1:27017/wanderlust";
const OWNER_ID = "69e331acf0320441661e7b8f";
const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    
    description: "Escape to this charming beachfront cottage.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800",
      filename: "listingimage",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Beach",
    owner: new mongoose.Types.ObjectId(OWNER_ID),
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
  },
  {
    title: "Modern Loft in Downtown",
    
    description: "Stay in the heart of the city in this stylish loft.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      filename: "listingimage",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic cities",
    owner: new mongoose.Types.ObjectId(OWNER_ID),
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
  },
  {
    title: "Mountain Retreat",
  
    description: "Unplug and unwind in this peaceful mountain cabin.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      filename: "listingimage",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
    owner: new mongoose.Types.ObjectId(OWNER_ID),
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
  },
  {
    title: "Historic Villa in Tuscany",
   
    description: "Experience the charm of Tuscany in this villa.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      filename: "listingimage",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Trending",
    owner: new mongoose.Types.ObjectId(OWNER_ID),
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
  },
  {
    title: "Secluded Treehouse Getaway",
    
    description: "Live among the treetops in this unique treehouse.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      filename: "listingimage",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Camping",
    owner: new mongoose.Types.ObjectId(OWNER_ID),
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
  },
  {
    title: "Beachfront Paradise",
    
    
    description: "Step out of your door onto the sandy beach.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
      filename: "listingimage",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Beach",
    owner: new mongoose.Types.ObjectId(OWNER_ID),
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] },
  },
  {
    title: "Luxury Villa in Maldives",
   
    description: "Indulge in luxury in this overwater villa.",
    image: {
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800",
      filename: "listingimage",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Amazing pools",
    owner: new mongoose.Types.ObjectId(OWNER_ID),
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] },
  },
  {
    title: "Safari Lodge in Serengeti",
    
    
    description: "Experience the thrill of the wild in a safari lodge.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800",
      filename: "listingimage",
    },
    price: 4000,
    location: "Serengeti",
    country: "Tanzania",
    category: "Farms",
    owner: new mongoose.Types.ObjectId(OWNER_ID),
    geometry: { type: "Point", coordinates: [34.8888, -2.3333] },
  },
];

async function main() {
  await mongoose.connect(dbUrl);
  console.log("✅ Connected to MongoDB");
  await Listing.deleteMany({});
  console.log("🗑️ Old listings deleted");
  await Listing.insertMany(sampleListings);
  console.log("✅ Database seeded with", sampleListings.length, "listings!");
  mongoose.connection.close();
}

main().catch((err) => console.log(err));