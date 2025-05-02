const mongoose = require("mongoose");

const pgSchema = new mongoose.Schema({
  pgName: String,
  ownerName: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  contactNumber: Number,
  email: String,
  city: String,
  address: String,
  pgType: { type: String, enum: ["boys", "girls", "unisex", "coliving"] },
  facilities: { type: String, enum: ["AC", "Wifi", "Food", "Laundary", "Parking"]},
  rent: Number,
  deposit: Number,
  images: [String],
  datePosted: { type: Date, default: Date.now }
});

module.exports = mongoose.model("PG", pgSchema);