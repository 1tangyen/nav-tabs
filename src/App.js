import "./App.css";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReportGenerateForm from "./pages/ReportGenerateForm";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<div>Profile content here</div>} />
          <Route path="/report" element={<ReportGenerateForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
