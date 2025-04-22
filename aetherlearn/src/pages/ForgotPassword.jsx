import React from "react";

export default function ForgotPassword() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Reset Your Password</h2>
      <p>Enter your email and we’ll send a reset link.</p>
      <input
        type="email"
        placeholder="Enter your email"
        style={{
          padding: "0.8rem",
          marginTop: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "300px",
        }}
      />
      <br />
      <button
        style={{
          padding: "0.8rem",
          marginTop: "1rem",
          backgroundColor: "#4b7bec",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Send Reset Link
      </button>
    </div>
  );
}
