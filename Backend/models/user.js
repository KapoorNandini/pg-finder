const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  password: String,
  userType: { type: String, enum: ["student", "owner"], default: "student" },
  dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);