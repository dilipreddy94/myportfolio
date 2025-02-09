// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home" className="logo-link">My Portfolio</a>
      </div>
      <div
        className={`nav-links ${isMobile ? "mobile" : ""}`}
        onClick={() => setIsMobile(false)} 
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
