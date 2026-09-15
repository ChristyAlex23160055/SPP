import React, { useState } from "react";

const ANNOUNCEMENTS_DATA = [
  {
    id: 1,
    title: "Upcoming Community Care Workshop",
    category: "Workshop",
    date: "Sep 24, 2026",
    status: "Upcoming",
    description: "Join us for a hands-on session covering everyday care practices, interactive Q&A, and networking with care specialists.",
    location: "Online (Zoom)",
    time: "2:00 PM - 4:00 PM EST",
  },
  {
    id: 2,
    title: "Q3 System Maintenance & Performance Upgrades",
    category: "Maintenance",
    date: "Sep 18, 2026",
    status: "Scheduled",
    description: "Our platform will undergo scheduled maintenance to enhance stability and speed. Expect brief downtime during off-peak hours.",
    location: "Platform-wide",
    time: "1:00 AM - 3:00 AM UTC",
  },
  {
    id: 3,
    title: "New Resource Center Launch",
    category: "Release",
    date: "Sep 10, 2026",
    status: "New",
    description: "We've published over 30 new guides, downloadable PDFs, and video walkthroughs in our public resource library.",
    location: "Resource Hub",
    time: "Available Now",
  },
];

export default function Announcements() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      {/* Header */}
      <header style={{ marginBottom: "32px" }}>
        <h1 style={{ color: "#004F64", fontSize: "36px", margin: "0 0 8px 0" }}>
          Announcements & Updates
        </h1>
        <p style={{ color: "#4A5568", fontSize: "16px", margin: 0 }}>
          Stay tuned for our upcoming community events, care workshops, and news. Click any row for details.
        </p>
      </header>

      {/* Modern Card Table */}
      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          <span style={{ flex: "2" }}>Title</span>
          <span style={{ flex: "1" }}>Category</span>
          <span style={{ flex: "1" }}>Date</span>
          <span style={{ flex: "1", textAlign: "right" }}>Status</span>
        </div>

        {ANNOUNCEMENTS_DATA.map((item) => (
          <div
            key={item.id}
            style={styles.tableRow}
            onClick={() => setSelectedAnnouncement(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelectedAnnouncement(item)}
          >
            <div style={{ flex: "2", fontWeight: "600", color: "#004F64" }}>
              {item.title}
            </div>
            <div style={{ flex: "1" }}>
              <span style={styles.badgeCategory}>{item.category}</span>
            </div>
            <div style={{ flex: "1", color: "#718096", fontSize: "14px" }}>
              {item.date}
            </div>
            <div style={{ flex: "1", textAlign: "right" }}>
              <span style={styles.badgeStatus}>{item.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog */}
      {selectedAnnouncement && (
        <div 
          style={styles.modalOverlay} 
          onClick={() => setSelectedAnnouncement(null)}
          role="dialog"
          aria-modal="true"
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <span style={styles.badgeCategory}>
                {selectedAnnouncement.category}
              </span>
              <button
                style={styles.closeBtn}
                onClick={() => setSelectedAnnouncement(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <h2 style={styles.modalTitle}>{selectedAnnouncement.title}</h2>

            <div style={styles.metaGrid}>
              <div>
                <strong style={styles.metaLabel}>Date:</strong> {selectedAnnouncement.date}
              </div>
              <div>
                <strong style={styles.metaLabel}>Time:</strong> {selectedAnnouncement.time}
              </div>
              <div>
                <strong style={styles.metaLabel}>Location:</strong> {selectedAnnouncement.location}
              </div>
            </div>

            <hr style={styles.divider} />

            <p style={styles.modalDescription}>
              {selectedAnnouncement.description}
            </p>

            <div style={{ textAlign: "right", marginTop: "24px" }}>
              <button
                style={styles.actionBtn}
                onClick={() => setSelectedAnnouncement(null)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  tableContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    border: "1px solid #E2E8F0",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
    overflow: "hidden",
  },
  tableHeader: {
    display: "flex",
    padding: "16px 24px",
    backgroundColor: "#F7FAFC",
    borderBottom: "1px solid #E2E8F0",
    fontWeight: "600",
    color: "#4A5568",
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  tableRow: {
    display: "flex",
    alignItems: "center",
    padding: "18px 24px",
    borderBottom: "1px solid #EDF2F7",
    cursor: "pointer",
    transition: "background-color 0.15s ease",
    backgroundColor: "#FFFFFF",
  },
  badgeCategory: {
    backgroundColor: "#EAF4F7",
    color: "#004F64",
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
  },
  badgeStatus: {
    backgroundColor: "#EDF2F7",
    color: "#2D3748",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "500",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "540px",
    padding: "32px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  modalTitle: {
    color: "#004F64",
    fontSize: "24px",
    margin: "0 0 16px 0",
    lineHeight: "1.3",
  },
  metaGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    color: "#4A5568",
    fontSize: "14px",
  },
  metaLabel: {
    color: "#2D3748",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #E2E8F0",
    margin: "20px 0",
  },
  modalDescription: {
    color: "#2D3748",
    fontSize: "15px",
    lineHeight: "1.6",
    margin: 0,
  },
  closeBtn: {
    background: "none",
    border: "none",
    fontSize: "20px",
    color: "#A0AEC0",
    cursor: "pointer",
  },
  actionBtn: {
    backgroundColor: "#004F64",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 24px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },
};