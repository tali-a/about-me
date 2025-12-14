import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Extras from "./pages/Extras.jsx";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Router basename="/about-me">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:projectId" element={<ProjectDetail />} />
          <Route path="/extras" element={<Extras />} />
          <Route path="/extras/:projectId" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

