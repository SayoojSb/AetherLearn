import React from "react";
import { Link } from "react-router-dom";
import '../styles/ForgotPassword.css';

export default function ForgotPassword() {
  return (
    <div className="forgot-password-page">
      <header className="auth-header">
        <div className="logo">
          <a href="/">AetherLearn</a>
        </div>
      </header>

      <div className="forgot-password-container">
        <div className="forgot-password-card">
          <div className="forgot-icon">🔑</div>
          <h2>Reset your password</h2>
          <p className="forgot-password-text">
            Enter your email address and we'll send you a link to reset your password.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="forgot-password-input"
            required
          />
          <button className="forgot-password-button" type="submit">
            Send Reset Link
          </button>
          <Link to="/login" className="back-to-login">
            ← Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
}
