const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authControllers');
const authMiddleware = require('../middleware/authMiddleware'); 
const User = require('../models/user');

// Public Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// ✅ Protected Route (Dashboard)
router.get('/dashboard', authMiddleware, async (req, res) => {
    try {
      const user = await User.findById(req.userId).select('name email');
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.status(200).json({ user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

module.exports = router;


