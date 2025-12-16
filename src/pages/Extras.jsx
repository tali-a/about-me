import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import concert from "../images/concert.jpg";
import advisory from "../images/advisory.jpg";


export default function Extras() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const extras = [
    {
      id: "tembusu",
      image: concert,
      title: "Design and Outreach: Arts Council",
      description: "Design and outreach work for the Arts Council.",
      category: "University"
    },
    {
      id:"advisory",
      image: advisory,
      title: "Interviewing and Editing: Advisory",
      description: "Interviewing and editing projects for advisory work.",
      category: "Volunteering"
    }
  ];

  // Filter extras based on selected category
  const filteredExtras =
    selectedCategory === "All"
      ? extras
      : extras.filter(e => e.category === selectedCategory);

  return (
    <main className="page-container">

      <div className="pill-row">
        {["All", "Volunteering", "University"].map(cat => (
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
  {filteredExtras.map((e, i) => (
    <ProjectCard key={i} {...e} section="extras" />
  ))}
</div>
    </main>
  );
}

