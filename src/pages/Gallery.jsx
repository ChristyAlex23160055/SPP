import React, { useState } from "react";

const galleryItems = [
  { id: 1, title: "Peaceful Garden Path", category: "Facilities", desc: "Outdoor spaces designed for mobility and relaxation." },
  { id: 2, title: "Art & Music Therapy Room", category: "Therapy & Activities", desc: "Creative spaces supporting emotional well-being." },
  { id: 3, title: "Private Family Suites", category: "Facilities", desc: "Comfortable, home-like rooms for residential care." },
  { id: 4, title: "Community Gathering Area", category: "Community Events", desc: "Shared spaces for events, meals, and social connections." },
  { id: 5, title: "Symptom Care Center", category: "Facilities", desc: "Modern clinical facilities integrated with soft aesthetic design." },
  { id: 6, title: "Outdoor Patio", category: "Facilities", desc: "Shaded areas for fresh air and family visits." },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div style={styles.container}>
      {/* Hero Banner */}
      <div style={styles.heroBanner}>
        <h1 style={styles.heroTitle}>Life, Comfort, and Community</h1>
        <p style={styles.heroSubtitle}>
          A glimpse into our serene facilities, community programs, and daily care moments.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div style={styles.filterBar}>
        {["All", "Facilities", "Therapy & Activities", "Community Events"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...styles.filterBtn,
              backgroundColor: activeTab === tab ? "#006884" : "#EAF4F7",
              color: activeTab === tab ? "#FFFFFF" : "#006884",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div style={styles.grid}>
        {filteredItems.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.imagePlaceholder}>
              <span>Image: {item.title}</span>
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.desc}</p>
            </div>
          </div>
        ))}
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
    padding: "60px 5%", /* 5% padding aligns content while section takes full width */
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
  heroBanner: { textAlign: "center", marginBottom: "40px" },
  heroTitle: { fontSize: "48px", color: "#004F64", marginBottom: "8px" },
  heroSubtitle: { fontSize: "18px", color: "#1A202C" },
  filterBar: { display: "flex", justifyContent: "center", gap: "12px", marginBottom: "32px" },
  filterBtn: { border: "none", padding: "10px 20px", borderRadius: "20px", cursor: "pointer", fontWeight: "600" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" },
  card: { backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "8px", overflow: "hidden" },
  imagePlaceholder: { height: "180px", backgroundColor: "#EAF4F7", display: "flex", justifyContent: "center", alignItems: "center", color: "#006884" },
  cardContent: { padding: "16px" },
  cardTitle: { fontSize: "20px", color: "#006884", margin: "0 0 8px 0" },
  cardDesc: { fontSize: "16px", color: "#1A202C", margin: 0 },
};