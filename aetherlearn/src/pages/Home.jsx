import React from "react";
import '../styles/Home.css'

function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>AetherLearn</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <section className="main-section">
        <h2>Welcome to AetherLearn</h2>
        <p>Your gateway to smarter, visual learning!</p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 AetherLearn | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
