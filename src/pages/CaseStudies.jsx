import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import shopeeImage from "../images/shopee.png"; 

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const caseStudies = [
    {
      id: "shopee-spp",
      image: shopeeImage,
      title: "Shopee Pickup Points: Increasing Self-Collection Usage",
      description: "Strategic recommendations to increase SPP usage through pricing perception, operational capacity, and service experience improvements.",
      category: "E-commerce"
    },
    {
      id: "maribank",
      image: `${import.meta.env.BASE_URL}MARI/1.png`,
      title: "MariBank: Strengthening Investment and Savings Engagement",
      description: "Recommendations to increase adoption and stickiness of MariInvest and frictionless savings through behavioural nudges and recurring deposit mechanics.",
      category: "Banking"
    }
    // Add more case studies here
  ];

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <main className="page-container">
      <div className="pill-row">
        {["All", "E-commerce", "Banking"].map(cat => (
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
        {filteredCaseStudies.map((cs, i) => (
          <ProjectCard key={i} {...cs} section="case-studies" />
        ))}
      </div>
    </main>
  );
}

