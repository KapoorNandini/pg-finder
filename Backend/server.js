const express = require("express");
const cors = require("cors");
const path = require('path');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
require("dotenv").config();
const pgRoutes = require('./routes/pgroutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../Frontend')));

app.use('/api', pgRoutes);
app.get('/', (req, res) => res.send('API Running...'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

connectDB();