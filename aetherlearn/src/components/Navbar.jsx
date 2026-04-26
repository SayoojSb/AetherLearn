import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <NavLink to="/dashboard">AetherLearn</NavLink>
      </div>
      <nav className="navbar-nav">
        <ul>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/myflashcards" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              My Flashcards
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/createflashcard" className="nav-link nav-link-cta">
              + New Set
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
