import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from './context/AuthContext';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import CreateFlashcard from "./pages/CreateFlashcardSet";
import MyFlashcards from './pages/MyFlashcards';
import ReviewSet from "./components/ReviewSet"; 
import Profile from "./pages/Profile";
import About from "./pages/About"; 

import './App.css'; 

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth(); 

  if (isLoading) {
      return <div style={{textAlign: 'center', padding: '50px', color: 'white'}}>Loading content...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AuthRedirect = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div style={{textAlign: 'center', padding: '50px', color: 'white'}}>Loading...</div>;
    }

    return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
};


function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/about" element={<About />} />

                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/createflashcard" element={<PrivateRoute><CreateFlashcard /></PrivateRoute>} />
                <Route path="/myflashcards" element={<PrivateRoute><MyFlashcards /></PrivateRoute>} />
                <Route path="/review-set/:setId" element={<PrivateRoute><ReviewSet /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

                <Route
                    path="*"
                    element={<AuthRedirect />}
                />
            </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;