import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dash-header">
        <div className="logo">
          <a href="/">AetherLearn</a>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/myflashcards">My flashcards</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </nav>
      </header>

      <section className="main-section">
        <h2>Welcome to AetherLearn</h2>
        <p>Your gateway to smarter, visual learning!</p>
        <a className="cta-btn" href="/myflashcards">Start learning</a>
        <a className="cta-btn" href="createflashcard">Add flashcard</a>
      </section>

      <footer className="dash-footer">
        <p>&copy; 2025 AetherLearn | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Dashboard;
