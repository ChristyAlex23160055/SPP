import React, { useState } from "react";

export default function Donate() {
  const [frequency, setFrequency] = useState("One-Time");
  const [selectedAmount, setSelectedAmount] = useState(100);

  const amounts = [
    { value: 50, desc: "Provides medical comfort supplies for one patient." },
    { value: 100, desc: "Covers one session of family grief counseling." },
    { value: 250, desc: "Funds a full day of respite care for family caregivers." },
  ];

  return (
    <div style={styles.container}>
      {/* Impact Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Your Generosity Brings Dignity and Relief</h1>
        <p style={styles.subtitle}>
          Every gift helps us provide non-reimbursed medical care, respite programs, and family support.
        </p>
      </div>

      {/* Interactive Donation Card Frame */}
      <div style={styles.cardFrame}>
        {/* Frequency Toggle */}
        <div style={styles.toggleGroup}>
          {["One-Time", "Monthly"].map((freq) => (
            <button
              key={freq}
              onClick={() => setFrequency(freq)}
              style={{
                ...styles.toggleBtn,
                backgroundColor: frequency === freq ? "#006884" : "#F7FAFC",
                color: frequency === freq ? "#FFFFFF" : "#006884",
              }}
            >
              {freq}
            </button>
          ))}
        </div>

        {/* Amount Selection */}
        <div style={styles.amountGroup}>
          {amounts.map((item) => (
            <button
              key={item.value}
              onClick={() => setSelectedAmount(item.value)}
              style={{
                ...styles.amountBtn,
                borderColor: selectedAmount === item.value ? "#006884" : "#E2E8F0",
                backgroundColor: selectedAmount === item.value ? "#EAF4F7" : "#FFFFFF",
              }}
            >
              <strong>${item.value}</strong> — {item.desc}
            </button>
          ))}
          <input
            type="number"
            placeholder="Custom Amount ($)"
            style={styles.customInput}
            onChange={(e) => setSelectedAmount(e.target.value)}
          />
        </div>

        {/* Payment Details Form */}
        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name on Card" style={styles.input} />
          <input type="text" placeholder="Credit Card Number" style={styles.input} />
          <div style={styles.splitInput}>
            <input type="text" placeholder="MM/YY" style={styles.input} />
            <input type="text" placeholder="CVC" style={styles.input} />
          </div>

          <button type="submit" style={styles.ctaBtn}>
            Complete ${selectedAmount || 0} Donation
          </button>
        </form>

        {/* Accountability Callout */}
        <div style={styles.accountability}>
          <div style={styles.badge}>🔒 100% Secure Transaction | 501(c)(3) Non-Profit Organization</div>
          <p style={styles.accountabilityText}>
            88 cents of every dollar directly funds patient care and family support programs.
          </p>
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
  container: { padding: "40px", backgroundColor: "#F7FAFC", minHeight: "100vh" },
  header: { textAlign: "center", marginBottom: "40px" },
  title: { fontSize: "48px", color: "#004F64" },
  subtitle: { fontSize: "18px", color: "#1A202C", maxWidth: "600px", margin: "0 auto" },
  cardFrame: { backgroundColor: "#FFFFFF", maxWidth: "600px", margin: "0 auto", padding: "32px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
  toggleGroup: { display: "flex", gap: "10px", marginBottom: "24px" },
  toggleBtn: { flex: 1, padding: "12px", border: "1px solid #006884", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" },
  amountGroup: { display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" },
  amountBtn: { padding: "16px", border: "2px solid", borderRadius: "8px", textAlign: "left", cursor: "pointer", fontSize: "14px" },
  customInput: { padding: "12px", borderRadius: "8px", border: "1px solid #006884", fontSize: "16px" },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  input: { padding: "12px", borderRadius: "6px", border: "1px solid #CBD5E0", fontSize: "16px" },
  splitInput: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },
  ctaBtn: { backgroundColor: "#006884", color: "#FFFFFF", height: "52px", border: "none", borderRadius: "6px", fontSize: "18px", fontWeight: "bold", cursor: "pointer", marginTop: "12px" },
  accountability: { textAlign: "center", marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #E2E8F0" },
  badge: { fontSize: "14px", fontWeight: "bold", color: "#006884", marginBottom: "4px" },
  accountabilityText: { fontSize: "12px", color: "#718096" }
};