const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Register user
exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log('Received data:', req.body);

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Concatenate firstName and lastName to create name
    const name = `${firstName} ${lastName}`;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ name, email, password: hashedPassword });

    // Save the user to the database
    await user.save();

    // Respond with a success message
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Registration error:", error); // Log the error details
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ userId: user._id }, 'mySecretKey', { expiresIn: '1h' });
      res.status(200).json({ token });
  } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ error: 'Server error' });
  }
};