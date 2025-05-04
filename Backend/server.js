const express = require("express");
const cors = require("cors");
const path = require('path');
const dotenv = require("dotenv");
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

// Serve index.html on the root endpoint
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend', 'index.html'));
});

// Fallback for 404 if API route doesn't match
app.all('*', (req, res) => {
  res.status(404).send('API route not found');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
