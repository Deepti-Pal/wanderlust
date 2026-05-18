# Wanderlust — Online Vacation Rental & Property Listing System

A full-stack web application inspired by Airbnb, built with Node.js, Express.js, and MongoDB. Users can browse property listings, create their own listings, leave reviews, and explore locations on an interactive map.

---

## Live Demo

[https://wanderlust-zpf9.onrender.com](https://wanderlust-zpf9.onrender.com)

---

## Features

- User registration, login, and logout with session management
- Create, edit, and delete property listings with image upload
- Star-rated reviews with create and delete functionality
- Interactive map integration using Mapbox
- Category filter bar (Beach, Mountains, Castles, Trending, etc.)
- Search listings by title or destination
- Ownership protection — only the owner can edit or delete their listing
- Server-side form validation using Joi
- Flash messages for user feedback
- Fully responsive design using Bootstrap 5
- AI-powered chatbot assistant for travel recommendations
- Cloud image storage via Cloudinary

---

## Tech Stack

| Category | Technology |
|---|---|
| Frontend | EJS, EJS-Mate, Bootstrap 5, Custom CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose, MongoDB Atlas |
| Authentication | Passport.js, Express-Session, Connect-Flash |
| Image Upload | Cloudinary, Multer |
| Maps | Mapbox GL JS, Mapbox SDK |
| Validation | Joi |
| Deployment | Render, MongoDB Atlas |

---

## Project Structure

wanderlust/
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── partials/
│   └── users/
├── public/
│   └── css/
├── utils/
│   ├── cloudConfig.js
│   ├── ExpressError.js
│   ├── mapConfig.js
│   ├── schema.js
│   └── wrapAsync.js
├── init/
│   └── index.js
├── middleware.js
├── app.js
└── .env

---

## Installation and Setup

Step 1 — Clone the repository

```bash
git clone https://github.com/Deepti-Pal/wanderlust.git
cd wanderlust
```

Step 2 — Install dependencies

```bash
npm install --legacy-peer-deps
```

Step 3 — Create a .env file in the root directory and add the following variables

ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAPBOX_TOKEN=your_mapbox_public_token

Step 4 — Seed the database with sample listings

```bash
node init/index.js
```

Step 5 — Start the development server

```bash
npm run dev
```

Step 6 — Open your browser and visit

http://localhost:3000

---

## Environment Variables

| Variable | Description |
|---|---|
| ATLASDB_URL | MongoDB Atlas connection string |
| SECRET | Session secret key |
| CLOUD_NAME | Cloudinary cloud name |
| CLOUD_API_KEY | Cloudinary API key |
| CLOUD_API_SECRET | Cloudinary API secret |
| MAPBOX_TOKEN | Mapbox public access token |

---

## Deployment

The application is deployed using the following services:

- Web Hosting — Render (free tier)
- Database — MongoDB Atlas (free tier)
- Image Storage — Cloudinary (free tier)

---

## Architecture

This project follows the MVC (Model-View-Controller) design pattern:

- Model — MongoDB schemas using Mongoose
- View — EJS templates with EJS-Mate layouts
- Controller — Express.js route handlers with business logic

---

## Developer

Deepti Pal

GitHub: [https://github.com/Deepti-Pal](https://github.com/Deepti-Pal)

---

## License

This project is built for educational purposes only.
