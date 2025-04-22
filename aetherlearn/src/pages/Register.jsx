// Register.jsx
import React from "react";
import '../styles/Register.css'
import {Link} from 'react-router-dom'

export default function Register() {
  return <div className="register-container">
    <div className="register-card">
      <h2>Register</h2>
      <form className="register-form">
        <input type="text" placeholder="Name" required/>
        <input type="text" placeholder="Email" required/>
        <input type="password" placeholder="Password" required/>
        <input type="password" placeholder="Confirm your password" required/>
        <button type="submit">Register</button>
        <p className="login-text">Already have an account? <Link to="/login">Login here</Link></p>
      </form>
    </div>
    
  </div>;
}