import React from "react";
import '../styles/Home.css'

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">
        <a href="/">AetherLearn</a>
        </div>
        <nav>
          <ul>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>

      <section className="main-section">
        <h2>Welcome to AetherLearn</h2>
        <p>Your gateway to smarter, visual learning!</p>
        <a className="cta-btn" href="/dashboard">Get Started</a>
      </section>
      <section className="section-1">
        <h2>For you, The Visual learners</h2>
        <p>Lets build a stress free study material</p>
      </section>

      <footer className="home-footer">
        <p>&copy; 2025 AetherLearn | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
