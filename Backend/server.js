const express = require("express");
const path = require("path");
const cors = require("cors");
const pool = require('./config/pg');
const connectDB = require("./config/db"); // MongoDB connection
const authRoutes = require("./routes/authRoutes");
const pgRoutes = require('./routes/pgroutes');
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect MongoDB for auth
connectDB(); // this should connect via mongoose

// MongoDB-based routes (login/signup)
app.use("/api/auth", authRoutes);

// PostgreSQL-based PG listing (handled in pgroutes.js)
app.use("/api/pg", pgRoutes); // Moved the '/list-pg' route to pgRoutes

// Static frontend
app.use(express.static(path.join(__dirname, "../Frontend")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../Frontend/index.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "../Frontend/login.html")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
