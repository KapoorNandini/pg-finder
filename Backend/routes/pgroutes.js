const express = require('express');
const multer = require('multer');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const pool = require('../config/pg');



// Multer upload config
const upload = multer({ dest: 'uploads/' });

// PG listing routes
// 1. Add PG Listing
router.post('/list-pg', upload.fields([
    { name: 'images', maxCount: 10 },
    { name: 'videos', maxCount: 5 }
]), async (req, res) => {
    try {
        const {
            pg_name, owner_name, contact, email, city, address,
            pg_type, rent, deposit
        } = req.body;

        const facilities = Array.isArray(req.body.facilities)
            ? req.body.facilities
            : [req.body.facilities];

        const imagePaths = req.files.images?.map(f => f.path) || [];
        const videoPaths = req.files.videos?.map(f => f.path) || [];

        await pool.query(`
    INSERT INTO pg_listings (
        pg_name, owner_name, contact, email, city, address,
        pg_type, facilities, rent, deposit, images, videos
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
`, [
            pg_name, owner_name, contact, email, city, address,
            pg_type, facilities, rent, deposit, imagePaths, videoPaths
        ]);


        res.status(200).json({ message: "PG listed successfully." });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


// 2. View all PG listings
router.get('/list-pgs', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pg_listings');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

// 3. View a single PG listing
router.get('/list-pg/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM pg_listings WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'PG listing not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

// 4. Update a PG listing
router.put('/list-pg/:id', authMiddleware, upload.fields([
    { name: 'images', maxCount: 10 },
    { name: 'videos', maxCount: 5 }
]), async (req, res) => {
    const { id } = req.params;
    const {
        pg_name, owner_name, contact, email, city, address,
        pg_type, rent, deposit
    } = req.body;

    const facilities = Array.isArray(req.body.facilities)
        ? req.body.facilities
        : [req.body.facilities];

    const imagePaths = req.files.images?.map(f => f.path) || [];
    const videoPaths = req.files.videos?.map(f => f.path) || [];

    try {
        const result = await pool.query(`
            UPDATE pg_listings
            SET pg_name = $1, owner_name = $2, contact = $3, email = $4,
                city = $5, address = $6, pg_type = $7, facilities = $8,
                rent = $9, deposit = $10, images = $11, videos = $12
            WHERE id = $13
            RETURNING *
        `, [
            pg_name, owner_name, contact, email, city, address,
            pg_type, facilities, rent, deposit, imagePaths, videoPaths, id
        ]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'PG listing not found' });
        }

        res.status(200).json({ message: "PG listing updated", data: result.rows[0] });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});


// 5. Delete a PG listing
router.delete('/list-pg/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM pg_listings WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'PG listing not found' });
        }
        res.status(200).json({ message: 'PG listing deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
