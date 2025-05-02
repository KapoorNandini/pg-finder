const PG = require('../models/pg');

exports.getAllPGs = async (req, res) => {
    try {
      const pgs = await PG.find().populate("ownerId", "name email");
      res.status(200).json(pgs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Add a new PG listing
  exports.addPG = async (req, res) => {
    try {
      const pg = new PG(req.body);
      const savedPG = await pg.save();
      res.status(201).json(savedPG);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };