import React from 'react';
import { Link } from "react-router-dom";

export default function ProjectCard({ id, image, title, description }) {
  return (
    <Link to={`/projects/${id}`} className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
    </Link>
  );
}