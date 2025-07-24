import React from 'react';
import { useAuth } from '../context/AuthContext'; 
import '../styles/Profile.css';

export default function Profile() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="profile-container">
        <p className="loading-message">Loading profile...</p>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="profile-container">
        <p className="error-message">You are not logged in to view this profile.</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>User Profile</h2>
        <div className="profile-info">
          <p><strong>Username:</strong> {user.username}</p>
        </div>
        <button onClick={logout} className="profile-logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}