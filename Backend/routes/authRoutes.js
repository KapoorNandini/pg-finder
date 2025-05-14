const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/authControllers');
const User = require('../models/user');


// Auth Routes
router.post('/sync-user', async (req, res) => {
  const { name, email, firebaseUid } = req.body;

  if (!name || !email || !firebaseUid) {
    return res.status(400).json({ message: 'Name, email, and firebaseUid are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ message: 'User already exists', user: existingUser });
    }

    const newUser = new User({ name, email, firebaseUid });
    await newUser.save();

    res.status(201).json({ message: 'User saved to local DB', user: newUser });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
  

// Auth Routes
router.post('/register', registerUser); // handled by controller
router.post('/login', loginUser); // handled by controller


module.exports = router;
