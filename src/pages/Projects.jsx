import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Causal from "../images/Causal.png";
import IPOS from "../images/IPOS.png";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

const projects = [
  {
    id: "ipos-innovation",
    image: IPOS,
    title: "Singapore's Innovation Journey",
    description: "Innovation hotspot model and ecosystem analysis.",
    category: "Work Experience"
  },
  {
    id: "causal-analysis",
    image: Causal,
    title: "Causal Analysis: Instrumental Variables",
    description: "Impact of carbon pricing on tourism in the EU.",
    category: "University"
  }
];
  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  return (
    <main className="page-container">

      <div className="pill-row">
        {["All", "Work Experience", "University","Personal"].map(cat => (
          <button
            key={cat}
            className={`pill ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

<div className="project-grid">
  {filteredProjects.map((p, i) => (
    <ProjectCard key={i} {...p} section="projects" />
  ))}
</div>
    </main>
  );
}

