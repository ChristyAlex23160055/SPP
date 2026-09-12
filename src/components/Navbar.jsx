import React, { useState } from "react";
import { Link } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="logo-link">HopeCare Palliative</Link>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/announcements" onClick={() => setIsOpen(false)}>Announcements</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
        <Link to="/donate" className="nav-cta" onClick={() => setIsOpen(false)}>Donate Now</Link>
      </div>
    </nav>
  );
}