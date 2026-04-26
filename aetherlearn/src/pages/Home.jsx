import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">

      {/* ── Header ── */}
      <header className="home-header">
        <div className="logo">
          <a href="/">AetherLearn</a>
        </div>
        <nav>
          <ul>
            <li><a href="/about" className="nav-ghost">About</a></li>
            <li><a href="/login" className="nav-ghost">Log in</a></li>
            <li><a href="/register" className="nav-cta">Sign up</a></li>
          </ul>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Built for visual learners
        </div>

        <h1>
          Study smarter,<br />
          <span className="gradient-text">not harder</span>
        </h1>

        <p className="hero-sub">
          AetherLearn turns what you need to learn into visual flashcards you'll
          actually remember. Create a set in minutes, study anywhere, retain more.
        </p>

        <div className="hero-actions">
          <a href="/register" className="btn-primary">Sign up free</a>
          <a href="/login" className="btn-ghost">Log in →</a>
        </div>

        <div className="hero-social-proof">
          <p>Helping students learn visually, one card at a time</p>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="how-section">
        <div className="section-label">How it works</div>
        <h2>From zero to studying in three steps</h2>
        <p className="section-sub">
          No complicated setup. Just create, study, and remember.
        </p>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon">✏️</div>
            <h3>Create a set</h3>
            <p>
              Give your set a title, then add as many cards as you need.
              Each card holds a term, a definition, and an optional image for visual context.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon">🔍</div>
            <h3>Find it instantly</h3>
            <p>
              All your sets live in one place. Use the search bar to jump straight
              to the topic you're working on — no scrolling through clutter.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon">🧠</div>
            <h3>Flip and learn</h3>
            <p>
              Click a card to flip it. See the term, then reveal the definition and
              image. Navigate at your own pace with Previous and Next.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features-section">
        <div className="section-label">Features</div>
        <h2>Everything you need, nothing you don't</h2>

        <div className="features-grid">
          <div className="feature-card feature-card--large">
            <div className="feature-icon">🃏</div>
            <h3>Flip-card study mode</h3>
            <p>
              Cards flip with a smooth 3D animation. See the term on the front,
              flip to reveal the definition and any image you've added. A progress
              bar shows how far through the set you are.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🖼️</div>
            <h3>Visual cues</h3>
            <p>
              Paste any image URL onto a card to pair a visual with the concept.
              Ideal for diagrams, charts, or anything that clicks better with a picture.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔎</div>
            <h3>Instant search</h3>
            <p>
              Filter your flashcard sets by title in real time. Find exactly what
              you're looking for without leaving the page.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Unlimited sets</h3>
            <p>
              Create as many sets as you need — one per subject, chapter, or topic.
              Add or remove cards at any time.
            </p>
          </div>

          <div className="feature-card feature-card--large">
            <div className="feature-icon">♿</div>
            <h3>Designed for everyone</h3>
            <p>
              AetherLearn was built with inclusive design at its core. Whether you
              have a hearing impairment, a learning disability, or simply learn
              better through visuals, this platform is made for you. Minimal text,
              clear structure, and image support make every concept approachable.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="audience-section">
        <div className="section-label">Who it's for</div>
        <h2>Made for the way you learn</h2>
        <p className="section-sub">
          AetherLearn works for anyone who wants a cleaner, more visual way to study.
        </p>

        <div className="audience-grid">
          <div className="audience-card">
            <div className="audience-emoji">🎓</div>
            <h3>Students</h3>
            <p>
              Prep for exams, memorise vocabulary, or break down complex topics
              into bite-sized cards you can review anywhere.
            </p>
          </div>
          <div className="audience-card">
            <div className="audience-emoji">👂</div>
            <h3>Hearing-impaired learners</h3>
            <p>
              Visual-first design means you never rely on audio. Every concept
              is presented through text and images — nothing is hidden behind sound.
            </p>
          </div>
          <div className="audience-card">
            <div className="audience-emoji">🧩</div>
            <h3>Diverse learners</h3>
            <p>
              If traditional text-heavy study methods don't work for you, AetherLearn's
              image-paired cards offer a different path to understanding.
            </p>
          </div>
          <div className="audience-card">
            <div className="audience-emoji">👩‍🏫</div>
            <h3>Educators</h3>
            <p>
              Build sets for your students, share the concepts visually, and give
              learners a self-paced tool they can return to on their own.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to start learning?</h2>
          <p>
            Create your first flashcard set in under two minutes.
            No credit card. No setup. Just learning.
          </p>
          <div className="cta-actions">
            <a href="/register" className="btn-primary btn-primary--large">Sign up free</a>
            <a href="/login" className="btn-outline">Log in</a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="home-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">AetherLearn</span>
            <p>Visual learning for everyone.</p>
          </div>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/login">Log in</a>
            <a href="/register">Sign up</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AetherLearn. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;
