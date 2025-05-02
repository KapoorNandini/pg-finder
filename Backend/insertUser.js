const mongoose = require('mongoose');
const User = require('../Backend/models/user'); 

const mongoURI = 'mongodb+srv://nanCodes:codeforcode@pgwale.yzxvab7.mongodb.net/?retryWrites=true&w=majority&appName=PgWale'; 

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    createUser();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const createUser = async () => {
  try {
    const newUser = new User({
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      password: "password123",
      userType: "student",
    });
    await newUser.save(); // Save to the database
    console.log("User created:", newUser);
    mongoose.disconnect(); // close the connection after insert
  } catch (error) {
    console.error("Error creating user:", error);
    mongoose.disconnect(); // even on error, close DB connection
  }
};
