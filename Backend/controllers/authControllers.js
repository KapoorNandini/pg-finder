const User = require('../models/user');
require('dotenv').config();
const { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('../config/firebaseConfig');

// Firebase register function
async function registerUser(req, res) {
  const { email, password } = req.body;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    // Save the user to MongoDB after registration
    await saveUserToMongoDB(firebaseUser.uid, email);
    res.status(201).json({ message: 'User registered successfully', user: firebaseUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
}

// Save user to MongoDB
async function saveUserToMongoDB(firebaseUid, email) {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return;
    }

    const newUser = new User({
      firebaseUid,
      email,
      name: 'John Doe', // You can use dynamic data here
    });

    await newUser.save();
  } catch (error) {
    console.error('Error saving user to MongoDB:', error);
  }
}

// Login user
// Login user (Express handler)
async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    const userData = await User.findOne({ firebaseUid: firebaseUser.uid });

    if (!userData) {
      return res.status(404).json({ message: 'User not found in MongoDB' });
    }

    return res.status(200).json({ message: 'Login successful', user: userData });
  } catch (error) {
    console.error('Error logging in user:', error.message);
    return res.status(401).json({ message: 'Invalid credentials', error: error.message });
  }
}


module.exports = { registerUser, loginUser};