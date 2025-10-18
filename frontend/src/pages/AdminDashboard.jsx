import { useEffect, useState } from "react";
import axios from "../api/api";

export default function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const res = await axios.get("/feedback");
      setFeedbacks(res.data);
    };
    fetchFeedbacks();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>All Customer Feedback</h2>
      <ul>
        {feedbacks.map((f) => (
          <li key={f._id} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc" }}>
            {f.message} <br />
            <small>{new Date(f.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
