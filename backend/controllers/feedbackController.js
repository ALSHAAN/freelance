const Feedback = require("../models/Feedback");

// POST /api/feedback
const submitFeedback = async (req, res) => {
  try {
    const { message, storeId } = req.body;

    if (!message) {
      return res.status(400).json({ success: false, error: "Message is required" });
    }

    const feedback = new Feedback({ message, storeId });
    await feedback.save();

    res.status(201).json({ success: true, msg: "Feedback submitted!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/feedback
const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { submitFeedback, getAllFeedback };
