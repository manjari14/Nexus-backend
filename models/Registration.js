const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  institution: { type: String, required: true },
  delegates: { type: Number, required: true }, // Add delegates field
  dateRegistered: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Registration", RegistrationSchema);
