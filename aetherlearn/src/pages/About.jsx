import '../styles/About.css';

export default function About() {
  return (
    <div className="about-page">
      <header className="about-public-header">
        <div className="logo">
          <a href="/">AetherLearn</a>
        </div>
        <nav>
          <ul>
            <li><a href="/login" className="nav-ghost">Log in</a></li>
            <li><a href="/register" className="nav-cta">Sign up</a></li>
          </ul>
        </nav>
      </header>

      <div className="about-container">
        <div className="about-card">
          <div className="about-hero">
            <div className="about-hero-badge">Our Story</div>
            <h2>About AetherLearn</h2>
            <p className="about-intro">
              Welcome to AetherLearn — a dedicated platform for inclusive and visually-driven learning.
              We believe education should be accessible and engaging for everyone, especially students
              who thrive with visual cues and simplified content.
            </p>
          </div>

          <div className="about-sections">
            <div className="about-section">
              <div className="about-section-header">
                <div className="about-section-icon">🎯</div>
                <h3>Our Mission</h3>
              </div>
              <p>
                Our mission is to break down traditional learning barriers for students with hearing impairments,
                learning disabilities, or language processing challenges. We provide an intuitive,
                flashcard-based platform that transforms complex information into easily digestible,
                visually rich content.
              </p>
            </div>

            <div className="about-section">
              <div className="about-section-header">
                <div className="about-section-icon">✨</div>
                <h3>Why AetherLearn?</h3>
              </div>
              <ul>
                <li><strong>Visually Focused:</strong> We prioritize images, animations, and minimal text to enhance comprehension.</li>
                <li><strong>Interactive Flashcards:</strong> Engage with dynamic flashcards that flip to reveal descriptions and visual cues.</li>
                <li><strong>Inclusive Design:</strong> Tailored specifically to meet the needs of diverse learners.</li>
                <li><strong>Empowering Education:</strong> Helping students grasp and retain information more effectively.</li>
              </ul>
            </div>

            <div className="about-section">
              <div className="about-section-header">
                <div className="about-section-icon">🔭</div>
                <h3>Our Vision</h3>
              </div>
              <p>
                We envision a future where every student, regardless of their learning style or challenges,
                has the tools they need to succeed. AetherLearn is continuously evolving, with plans to
                incorporate more interactive elements, diverse content types, and personalized learning paths.
              </p>
            </div>
          </div>

          <p className="about-outro">
            Thank you for being a part of the AetherLearn journey. Together, we can make learning truly inclusive.
          </p>
        </div>
      </div>
    </div>
  );
}
