// src/pages/Dashboard.jsx
import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>AetherLearn</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/myflashcards">My flashcards</a></li>
            <li><a href="#">Quiz</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <section className="main-section">
        <h2>Welcome to AetherLearn</h2>
        <p>Your gateway to smarter, visual learning!</p>
        <a className="cta-btn" href="#">Start learning</a>
        <a className="cta-btn" href="createflashcard">Add flashcard</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 AetherLearn | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Dashboard;
