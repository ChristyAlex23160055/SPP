import React from "react";
import { Link } from "react-router";
import "./Home.css";
import nani_carer from "../assets/Gallary/nani.jpg"

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text-container">
          <h1 className="hero-heading">Compassionate Care When It Matters Most</h1>
          <p className="hero-subheadline">
            Providing comfort, dignity, and specialized care tailored to individuals and families facing serious illnesses.
          </p>
          <div className="cta-group">
            <Link to="/about" className="btn primary-btn">Explore Our Services</Link>
            <Link to="/contact" className="btn secondary-btn">Get in Touch</Link>
          </div>
        </div>
        <div className="hero-image-frame">
          <div className="image-placeholder">
            <img src={nani_carer} style={{}}/>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-heading">How We Support You and Your Loved Ones</h2>
        <div className="services-grid">
          <div className="card">
            <h3>In-Home Palliative Care</h3>
            <p>Comprehensive clinical and emotional support provided directly in the comfort of your home.</p>
          </div>
          <div className="card">
            <h3>Life Support / Medical Equipments </h3>
            <p>We provide Oxigen Cylinders, Beds and related equipments to patients.</p>
          </div>
          <div className="card">
            <h3>Weekly Doctor OP</h3>
            <p>Our doctor is available for appointents every Thursday.</p>
          </div>
          <div className="card">
            <h3>Volenteer Training</h3>
            <p>Introductary session for new volunteers from experts from the field.</p>
          </div>
          <div className="card">
            <h3>Monetary Support</h3>
            <p>We </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <blockquote>
          "Palliative care is not about giving up hope; it’s about redefining it."
        </blockquote>
        <cite>— Dr. Ira Byock</cite>
      </section>
    </div>
  );
}