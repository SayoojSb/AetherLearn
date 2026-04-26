import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <section className="main-section">
        <h2>
          Welcome to<br />
          <span>AetherLearn</span>
        </h2>
        <p>
          Your gateway to smarter, visual learning. Pick up where you left off or start something new.
        </p>
        <div className="dash-cta-group">
          <a className="cta-primary" href="/myflashcards">Start Learning</a>
          <a className="cta-secondary" href="/createflashcard">Add Deck</a>
        </div>
      </section>

      <footer className="dash-footer">
        <p>&copy; 2025 AetherLearn. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
