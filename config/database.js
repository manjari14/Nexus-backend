const mongoose = require("mongoose");
require("dotenv").config({ path: "./gweccc-backend/.env" });

const connectDB = async () => {
  try {
    console.log("Environment Variables Loaded:", process.env); // Debugging line

    console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging line
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
