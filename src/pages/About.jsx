import React from "react";
import amitav from "../assets/team/amitav.jpg"

export default function About() {
  // Sample team data—replace photos, names, and designations with real details
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Ananya Nair",
      designation: "Chief Medical Officer",
      image: amitav,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      designation: "Head of Nursing & Patient Care",
      image:amitav,
    },
    {
      id: 3,
      name: "Sister Mary Joseph",
      designation: "Palliative Care Specialist",
      image: amitav,
    },
    {
      id: 4,
      name: "Suresh Babu",
      designation: "Volunteer Coordinator",
      image: amitav,
    },
  ];

  return (
    <div style={styles.container}>
      {/* Hero / Mission Section */}
      <section style={styles.section}>
        <h1 style={styles.title}>About Swanthanam Palliative</h1>
        <p style={styles.description}>
          Our mission is to provide physical, emotional, and spiritual comfort to individuals 
          facing serious illnesses while offering guidance and respite for their families.
        </p>
      </section>

      {/* Leadership / Guiding Hearts Section */}
      <section style={styles.section}>
        <h1 style={styles.title}>Guiding Hearts</h1>
        <p style={styles.description}>
          Driven by a dedicated team of compassionate caregivers, medical professionals, and volunteers 
          committed to delivering dignity, relief, and hope to every home we serve.
        </p>
      </section>

      {/* Dedicated Team / Staff Section */}
      <section style={styles.section}>
        <h2 style={styles.title}>Our Care Team</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} style={styles.memberCard}>
              <img 
                src={member.image} 
                alt={member.name} 
                style={styles.avatar} 
              />
              <h3 style={styles.memberName}>{member.name}</h3>
              <p style={styles.memberDesignation}>{member.designation}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "40px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  section: {
    backgroundColor: "#EAF4F7",
    padding: "40px",
    borderRadius: "12px",
    border: "1px solid rgba(0, 104, 132, 0.15)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
  },
  title: {
    color: "#004F64",
    fontSize: "36px",
    fontWeight: "700",
    marginTop: "0",
    marginBottom: "16px",
    lineHeight: "1.2",
  },
  description: {
    color: "#1A202C",
    fontSize: "18px",
    lineHeight: "1.7",
    margin: "0",
  },
  teamTitle: {
    color: "#004F64",
    fontSize: "30px",
    fontWeight: "700",
    marginTop: "0",
    marginBottom: "24px",
    textAlign: "center",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  memberCard: {
    backgroundColor: "#FFFFFF",
    padding: "24px 16px",
    borderRadius: "8px",
    border: "1px solid rgba(0, 104, 132, 0.2)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "16px",
    border: "3px solid #006884",
  },
  memberName: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#004F64",
    margin: "0 0 6px 0",
  },
  memberDesignation: {
    fontSize: "14px",
    color: "#4A5568",
    margin: "0",
  },
};