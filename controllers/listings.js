const Listing = require("../models/listing.js");
const { cloudinary } = require("../utils/cloudConfig.js");
const { geocodingClient, mapToken } = require("../utils/mapConfig.js");

module.exports.index = async (req, res) => {
  const { category, search } = req.query;
  let filter = {};
  if (category) filter.category = category;
  if (search) filter.title = { $regex: search, $options: "i" };

  const allListings = await Listing.find(filter);

  res.render("listings/index.ejs", {
    allListings,
    category: category || "",
    search: search || "",
  });
};

// New form
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// Show single listing
module.exports.showListing = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing does not exist!");
    return res.redirect("/listings");
  }
  const mapToken = process.env.MAPBOX_TOKEN || "";
  res.render("listings/show.ejs", { listing, mapToken });
};

// Create listing
module.exports.createListing = async (req, res) => {
  try {
    // Geocode with error handling
    let geometry = { type: "Point", coordinates: [0, 0] }; // default

    try {
      const geoData = await geocodingClient
        .forwardGeocode({
          query: req.body.listing.location,
          limit: 1,
        })
        .send();

      if (
        geoData.body.features &&
        geoData.body.features.length > 0
      ) {
        geometry = geoData.body.features[0].geometry;
      }
    } catch (geoErr) {
      console.log("Geocoding failed, using default coordinates");
    }

    let url = req.file
      ? req.file.path
      : "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400";
    let filename = req.file ? req.file.filename : "default";

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = geometry; // ✅ safe geometry
    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");

  } catch (err) {
    console.log("Create listing error:", err);
    req.flash("error", err.message);
    res.redirect("/listings/new");
  }
};

// Edit form
module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing does not exist!");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

// Update listing
module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (req.file) {
    // Delete old image from cloudinary
    if (listing.image.filename !== "default") {
      await cloudinary.uploader.destroy(listing.image.filename);
    }
    listing.image = { url: req.file.path, filename: req.file.filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

// Delete listing
module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndDelete(id);
  if (listing && listing.image.filename !== "default") {
    await cloudinary.uploader.destroy(listing.image.filename);
  }
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
