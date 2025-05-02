const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  updatesOnWhatsapp: Boolean,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Inquiry", inquirySchema);