import { useState } from "react";
import axios from "../api/api";

export default function FeedbackForm() {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/feedback", { message });
      setSuccess("Thank you for your feedback!");
      setMessage("");
    } catch (err) {
      setSuccess("Error submitting feedback.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Customer Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your feedback..."
          required
          rows={5}
          style={{ width: "100%", padding: "10px" }}
        />
        <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>
          Submit
        </button>
      </form>
      {success && <p style={{ marginTop: "10px" }}>{success}</p>}
    </div>
  );
}
