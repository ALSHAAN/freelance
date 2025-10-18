const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  message: { type: String, required: true },
  storeId: { type: String },  // optional
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
