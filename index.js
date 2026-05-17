const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
require("dotenv").config({ path: "../.env" });

const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

const sampleListings = [
  {
    title: "Cozy Beach House in Goa",
    description: "Relax in this beautiful beachside home with stunning ocean views. Perfect for couples and families seeking a tranquil escape.",
    image: { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", filename: "sample1" },
    price: 4500,
    location: "Calangute",
    country: "India",
    category: "Beach",
  },
  {
    title: "Luxury Villa in Manali",
    description: "Nestled in the Himalayan mountains, this stunning villa offers breathtaking views and complete serenity.",
    image: { url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800", filename: "sample2" },
    price: 8000,
    location: "Manali",
    country: "India",
    category: "Mountains",
  },
  {
    title: "Modern Apartment in Mumbai",
    description: "Stay in the heart of the city. Walking distance to restaurants, shopping, and cultural attractions.",
    image: { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800", filename: "sample3" },
    price: 3200,
    location: "Mumbai",
    country: "India",
    category: "Iconic cities",
  },
  {
    title: "Treehouse Retreat in Coorg",
    description: "A magical treehouse surrounded by coffee plantations. Experience nature like never before.",
    image: { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", filename: "sample4" },
    price: 5500,
    location: "Coorg",
    country: "India",
    category: "Camping",
  },
  {
    title: "Heritage Haveli in Jaipur",
    description: "Stay in a beautifully restored 200-year-old haveli in the Pink City with royal Rajasthani interiors.",
    image: { url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800", filename: "sample5" },
    price: 6200,
    location: "Jaipur",
    country: "India",
    category: "Castles",
  },
  {
    title: "Houseboat on Dal Lake",
    description: "A traditional Kashmiri houseboat offering unmatched beauty of Dal Lake with all modern amenities.",
    image: { url: "https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?w=800", filename: "sample6" },
    price: 7000,
    location: "Srinagar",
    country: "India",
    category: "Boats",
  },
  {
    title: "Pool Villa in Udaipur",
    description: "A luxurious villa with private pool overlooking Lake Pichola. Perfect for a romantic getaway.",
    image: { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800", filename: "sample7" },
    price: 12000,
    location: "Udaipur",
    country: "India",
    category: "Amazing pools",
  },
  {
    title: "Farm Stay in Wayanad",
    description: "Experience farm life in Kerala. Organic meals, nature walks, and ultimate peace await you.",
    image: { url: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=800", filename: "sample8" },
    price: 3800,
    location: "Wayanad",
    country: "India",
    category: "Farms",
  },
];

async function seedDB() {
  await mongoose.connect(dbUrl);
  console.log("✅ Connected to MongoDB");
  await Listing.deleteMany({});
  console.log("🗑️  Cleared existing listings");
  await Listing.insertMany(sampleListings);
  console.log("🌱 Seeded", sampleListings.length, "listings");
  mongoose.connection.close();
}

seedDB().catch(console.error);
