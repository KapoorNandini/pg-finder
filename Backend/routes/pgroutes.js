const express = require('express');
const router = express.Router();
const { getAllPGs, addPG } = require('../controllers/pgController');

router.get('/pgs', getAllPGs);
router.post('/pgs', addPG);

module.exports = router;