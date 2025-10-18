const express = require("express");
const { submitFeedback, getAllFeedback } = require("../controllers/feedbackController");

const router = express.Router();

router.post("/", submitFeedback);  // customer submits feedback
router.get("/", getAllFeedback);   // admin fetches feedback

module.exports = router;
