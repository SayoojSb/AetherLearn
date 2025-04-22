// Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form className="login-form">
          <input type="text" placeholder="Email or Username" required />
          <input type="password" placeholder="Password" required />
          
          <p className="forgot-password">
            <Link to="/forgot-password">Forgot your password?</Link>
          </p>

          <button type="submit">Login</button>

          <p className="register-text">
            New user? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
