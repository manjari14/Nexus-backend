const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");

// POST /register - Register a new participant
router.post("/register", async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).json({ message: "Registration successful!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /registrations - Get all registrations
router.get("/registrations", async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json(registrations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
