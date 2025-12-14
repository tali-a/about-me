import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav className="nav-container">

      <div className="nav-center">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "nav-tab active-tab" : "nav-tab"
          }
        >
          About
        </NavLink>

        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            isActive ? "nav-tab active-tab" : "nav-tab"
          }
        >
          Projects
        </NavLink>

        <NavLink 
          to="/case-studies" 
          className={({ isActive }) => 
            isActive ? "nav-tab active-tab" : "nav-tab"
          }
        >
          Case Studies
        </NavLink>

        <NavLink 
          to="/extras" 
          className={({ isActive }) => 
            isActive ? "nav-tab active-tab" : "nav-tab"
          }
        >
          Extras
        </NavLink>
      </div>

    </nav>
  );
}
