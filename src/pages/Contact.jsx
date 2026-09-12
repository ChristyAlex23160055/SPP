import React, { useState } from "react";
import { Map } from "../components/Map";

export default function Contact() {
  // 1. Form state management
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    reason: "Request Care",
    message: ""
  });

  // Target WhatsApp phone number (Country code + number, e.g., '919876543210' or '18005550199')
  const RECIPIENT_PHONE = "+919447952136"; 

  // 2. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Handle WhatsApp message generation & redirect
  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedText = 
      `*New Contact Inquiry*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Reason:* ${formData.reason}\n` +
      `*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${RECIPIENT_PHONE}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.title}>We Are Here to Listen and Support</h1>
        <p style={styles.subtitle}>
          Reach out for care consultations, emergency support, or general inquiries.
        </p>
      </div>

      {/* Split View Layout */}
      <div style={styles.splitLayout}>
        {/* Left Column */}
        <div style={styles.leftCol}>
          <div style={styles.infoBox}>
            <p><strong>Office:</strong> +1 (800) 555-0199</p>
            <p><strong>Office Hours:</strong></p>
            <div>
              <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
              <p>Saturday:</p>
              <p>Sunday:</p>
            </div>
            <p><strong>General Email:</strong> care@hopecarepalliative.org</p>
            <p><strong>Main Facility Address:</strong> Santhwanam Paliative, Pulpally Road, Padichichira</p>
          </div>
          <div style={styles.mapPlaceholder}>
            <Map />
          </div>
        </div>

        {/* Right Column - Form */}
        <div style={styles.rightCol}>
          <form style={styles.formCard} onSubmit={handleSubmit}>
            <label style={styles.label}>Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={styles.input} 
              placeholder="John Doe" 
              required
            />

            <label style={styles.label}>Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input} 
              placeholder="(555) 000-0000" 
              required
            />

            <label style={styles.label}>Reason for Inquiry</label>
            <select 
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="Request Care">Request Care</option>
              <option value="General Question">General Question</option>
              <option value="Volunteering">Volunteering</option>
            </select>

            <label style={styles.label}>Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ ...styles.input, height: "100px" }} 
              placeholder="How can we help you?"
              required
            ></textarea>

            <button type="submit" style={styles.submitBtn}>Send Message via WhatsApp</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  heroSection: {
    width: "100%",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    padding: "60px 5%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  section: {
    width: "100%",
    boxSizing: "border-box",
    padding: "60px 5%",
    backgroundColor: "#F7FAFC",
  },
  testimonialSection: {
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "#EAF4F7",
    padding: "60px 5%",
    textAlign: "center",
  },
  container: { padding: "40px" },
  header: { textAlign: "center", marginBottom: "40px" },
  title: { fontSize: "48px", color: "#004F64" },
  subtitle: { fontSize: "18px", color: "#1A202C" },
  splitLayout: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" },
  leftCol: { display: "flex", flexDirection: "column", gap: "20px" },
  infoBox: { backgroundColor: "#F7FAFC", padding: "24px", borderRadius: "8px", color: "#1A202C", lineHeight: "1.8" },
  mapPlaceholder: { height: "250px", backgroundColor: "#E2E8F0", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center", color: "#4A5568" },
  rightCol: {},
  formCard: { backgroundColor: "#FFFFFF", padding: "24px", borderRadius: "8px", border: "1px solid rgba(0, 104, 132, 0.2)", display: "flex", flexDirection: "column", gap: "12px" },
  label: { fontSize: "14px", fontWeight: "600", color: "#1A202C" },
  input: { backgroundColor: "#afc2e9", padding: "10px", borderRadius: "4px", border: "1px solid #CBD5E0", fontSize: "16px", color: "#000000" },
  submitBtn: { backgroundColor: "#006884", color: "#FFFFFF", border: "none", padding: "12px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }
};