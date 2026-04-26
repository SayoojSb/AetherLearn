import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(u => u.username === username && u.password === password);

    if (foundUser) {
      login({ username: foundUser.username });
      navigate('/my-flashcards');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-page">
      <header className="auth-header">
        <div className="logo">
          <a href="/">AetherLearn</a>
        </div>
      </header>

      <div className="login-container">
        <div className="login-card">
          <div className="login-card-header">
            <h2>Welcome back</h2>
            <p>Log in to continue learning</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <p className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </p>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="login-submit-btn">Log in</button>

            <p className="register-text">
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
