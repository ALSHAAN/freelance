import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeedbackForm from "./pages/FeedbackForm";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", textAlign: "center" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Feedback Form</Link>
        <Link to="/admin" style={{ margin: "0 10px" }}>Admin Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
