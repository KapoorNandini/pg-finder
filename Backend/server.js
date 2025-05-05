const express = require("express");
const path = require('path');
const cors = require("cors");
const connectDB = require('./config/db');
const pgRoutes = require('./routes/pgroutes');
const authRoutes = require('./routes/authRoutes');
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());  // For parsing JSON data
app.use(cors());  // Enable CORS

// Connect to the database
connectDB();

// Routes
app.use("/api/auth", authRoutes);  // Authentication routes
app.use('/api', pgRoutes);  // Postgres related routes

// Serve static files from the Frontend
app.use(express.static(path.join(__dirname, '../Frontend')));   
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/login.html'));
  });
  

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
