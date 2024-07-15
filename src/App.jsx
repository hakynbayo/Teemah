import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JobOverview from "./pages/JobOverview";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-overview" element={<JobOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
