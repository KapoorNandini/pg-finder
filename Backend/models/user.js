const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firebaseUid: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  // You can add more fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;

