import React from "react";
import '../styles/ForgotPassword.css';

export default function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Reset Your Password</h2>
        <p className="forgot-password-text">Enter your email and we’ll send a reset link.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="forgot-password-input"
          required
        />
        <button
          className="forgot-password-button"
          type="submit"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}