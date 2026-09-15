import React, { useState } from "react";

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState("upi"); // 'upi' or 'card'
  const [copied, setCopied] = useState(false);

  const upiId = "carefoundation@upi";

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        {/* Direct Amount Input */}
        <div style={styles.amountInputGroup}>
          <label style={styles.inputLabel} htmlFor="donationAmount">
            Enter Amount (Rs)
          </label>
          <input
            id="donationAmount"
            type="number"
            min="1"
            placeholder="Enter donation amount"
            value={donationAmount || ""}
            style={styles.customInput}
            onChange={(e) => setDonationAmount(Number(e.target.value))}
          />
        </div>

        {/* Payment Method Selector Tabs */}
        <div style={styles.paymentMethodTabs}>
          <button
            type="button"
            onClick={() => setPaymentMethod("upi")}
            style={{
              ...styles.tabBtn,
              borderBottom: paymentMethod === "upi" ? "3px solid #006884" : "1px solid #E2E8F0",
              color: paymentMethod === "upi" ? "#006884" : "#718096",
              fontWeight: paymentMethod === "upi" ? "bold" : "normal",
            }}
          >
            📱 UPI Payment
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod("card")}
            style={{
              ...styles.tabBtn,
              borderBottom: paymentMethod === "card" ? "3px solid #006884" : "1px solid #E2E8F0",
              color: paymentMethod === "card" ? "#006884" : "#718096",
              fontWeight: paymentMethod === "card" ? "bold" : "normal",
            }}
          >
            💳 Card Payment
          </button>
        </div>

        {/* UPI Payment Section */}
        {paymentMethod === "upi" && (
          <div style={styles.upiSection}>
            <p style={styles.sectionDesc}>
              Scan the QR code with any UPI app (GPay, PhonePe, Paytm) to donate{" "}
              <strong>Rs{donationAmount || 0}</strong>.
            </p>

            <div style={styles.qrContainer}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=${upiId}&pn=CareFoundation&am=${donationAmount || 0}`}
                alt="UPI QR Code"
                style={styles.qrImage}
              />
              <span style={styles.qrTip}>Scan to pay instantly</span>
            </div>

            {/* Copyable UPI ID Box */}
            <div style={styles.copyBox}>
              <div style={styles.copyInfo}>
                <span style={styles.copyLabel}>UPI ID:</span>
                <strong style={styles.upiIdText}>{upiId}</strong>
              </div>
              <button
                type="button"
                onClick={handleCopyUpi}
                style={styles.copyBtn}
              >
                {copied ? "✓ Copied!" : "Copy ID"}
              </button>
            </div>

            {/* Direct Link for Mobile UPI Apps */}
            <div style={styles.appLinksGroup}>
              <a
                href={`upi://pay?pa=${upiId}&pn=CareFoundation&am=${donationAmount || 0}`}
                style={styles.appLinkBtn}
              >
                Open UPI App
              </a>
            </div>
          </div>
        )}

        {/* Card Payment Form Section */}
        {paymentMethod === "card" && (
          <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name on Card" style={styles.input} />
            <input type="text" placeholder="Credit Card Number" style={styles.input} />
            <div style={styles.splitInput}>
              <input type="text" placeholder="MM/YY" style={styles.input} />
              <input type="text" placeholder="CVC" style={styles.input} />
            </div>

            <button type="submit" style={styles.ctaBtn}>
              Complete Rs{donationAmount || 0} Donation
            </button>
          </form>
        )}

        {/* Accountability Footer */}
        <div style={styles.accountability}>
          <div style={styles.badge}>
            🔒 100% Secure Transaction | Non-Profit Organization
          </div>
          <p style={styles.accountabilityText}>
            Whole money directly funds patient care and family support programs.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "40px", backgroundColor: "#F7FAFC", minHeight: "100vh" },
  header: { textAlign: "center", marginBottom: "40px" },
  title: { fontSize: "48px", color: "#004F64" },
  subtitle: { fontSize: "18px", color: "#1A202C", maxWidth: "600px", margin: "0 auto" },
  cardFrame: {
    backgroundColor: "#FFFFFF",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  amountInputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "24px",
  },
  inputLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#004F64",
  },
  customInput: {
    padding: "14px",
    borderRadius: "8px",
    border: "2px solid #006802",
    fontSize: "18px",
    fontWeight: "600",
    outline: "none",
  },
  paymentMethodTabs: { display: "flex", marginBottom: "24px" },
  tabBtn: {
    flex: 1,
    padding: "12px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.2s ease",
  },
  upiSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    backgroundColor: "#F8FAFC",
    borderRadius: "8px",
    border: "1px solid #E2E8F0",
  },
  sectionDesc: { fontSize: "14px", color: "#4A5568", textAlign: "center", margin: 0 },
  qrContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  qrImage: { width: "160px", height: "160px" },
  qrTip: { fontSize: "12px", color: "#718096", marginTop: "8px" },
  copyBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: "10px 16px",
    borderRadius: "6px",
    border: "1px solid #CBD5E0",
    boxSizing: "border-box",
  },
  copyInfo: { display: "flex", gap: "8px", fontSize: "14px" },
  copyLabel: { color: "#718096" },
  upiIdText: { color: "#006884" },
  copyBtn: {
    backgroundColor: "#EAF4F7",
    color: "#006884",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "13px",
  },
  appLinksGroup: { width: "100%" },
  appLinkBtn: {
    display: "block",
    textAlign: "center",
    backgroundColor: "#006884",
    color: "#FFFFFF",
    padding: "12px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  input: { padding: "12px", borderRadius: "6px", border: "1px solid #CBD5E0", fontSize: "16px", color:"light blue" },
  splitInput: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },
  ctaBtn: {
    backgroundColor: "#006884",
    color: "#FFFFFF",
    height: "52px",
    border: "none",
    borderRadius: "6px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "12px",
  },
  accountability: { textAlign: "center", marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #E2E8F0" },
  badge: { fontSize: "14px", fontWeight: "bold", color: "#006884", marginBottom: "4px" },
  accountabilityText: { fontSize: "12px", color: "#718096" },
};