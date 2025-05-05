const User = require('../models/User');

exports.registerUser = async (req, res) => {

  console.log('Register route hit'); // 🔍 Add this
  console.log(req.body);

  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
