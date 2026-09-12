import React from "react";
import { Link } from "react-router";
import "./Home.css";

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
            <span>[ Caregiver holding hand photo - 16:9 ]</span>
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
            <h3>Symptom Management</h3>
            <p>Specialized medical treatments designed to ease pain, fatigue, and distress.</p>
          </div>
          <div className="card">
            <h3>Family Counseling</h3>
            <p>Dedicated guidance, respite care, and emotional counseling for caregivers and families.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <blockquote>
          "The care team brought peace and clarity to our family during an incredibly difficult journey. We never felt alone."
        </blockquote>
        <cite>— Sarah M., Family Caregiver</cite>
      </section>
    </div>
  );
}