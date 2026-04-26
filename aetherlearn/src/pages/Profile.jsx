import { useAuth } from '../context/AuthContext';
import '../styles/Profile.css';

export default function Profile() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <p className="loading-message">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <p className="error-message">You are not logged in to view this profile.</p>
        </div>
      </div>
    );
  }

  const initials = user.username
    ? user.username.slice(0, 2).toUpperCase()
    : 'U';

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-avatar">{initials}</div>
          <h2>{user.username}</h2>
          <p className="profile-role">Learner</p>

          <div className="profile-info">
            <div className="profile-info-row">
              <span className="profile-info-label">Username</span>
              <span className="profile-info-value">{user.username}</span>
            </div>
            <div className="profile-info-row">
              <span className="profile-info-label">Account</span>
              <span className="profile-info-value">Active</span>
            </div>
          </div>

          <button onClick={logout} className="profile-logout-button">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
