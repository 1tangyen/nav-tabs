import "./App.css";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Routes>
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/profile" element={<div>Profile content here</div>} />
          <Route
            path="/contact"
            element={<div>Contact/Status tracker content here</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
