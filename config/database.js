const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" }); // Ensure this is loaded for local development

const connectDB = async () => {
  try {
    // Debugging line to ensure environment variables are loaded
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
    }

    console.log("Environment Variables Loaded:", process.env.MONGO_URI); // Check the connection string

    // Attempt to connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;
