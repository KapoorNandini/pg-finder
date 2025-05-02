const mongoose = require('mongoose');
const PG = require('../Backend/models/pg'); // Adjust the path
const User = require('../Backend/models/user'); // To get ownerId

mongoose.connect('your_mongo_uri_here', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error:", err));

const createPG = async () => {
  try {
    const owner = await User.findOne(); // Get any existing user
    if (!owner) return console.log("No owner found");

    const newPG = new PG({
      pgName: "Sunshine Residency",
      ownerName: "Mr Malhotra",
      ownerId: owner._id,
      contactNumber: 9548615916,
      email: "malhotra@example.com",
      city: "Chandigarh",
      address: "Sector 21, Chandigarh",
      pgType: "unisex",
      facilities: "wifi",
      rent: 6000,
      deposit: 10000,
      images: ["img1.jpg", "img2.jpg"]
    });

    await newPG.save();
    console.log("PG created:", newPG);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createPG();