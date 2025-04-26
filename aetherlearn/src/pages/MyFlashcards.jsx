// src/pages/MyFlashcards.jsx
import React, { useState, useEffect } from 'react';
import FlashcardItem from '../components/FlashcardItem';
import '../styles/MyFlashcards.css';

function MyFlashcards() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    // Fetch flashcards from local storage or a backend API
    const storedFlashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    setFlashcards(storedFlashcards);
  }, []);

  return (
    <div className="my-flashcards-container">
      <header className="my-flashcards-header">
        <h2>My Flashcards</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search flashcards" />
        </div>
      </header>
      <div className="flashcard-list">
        {flashcards.length > 0 ? (
          flashcards.map((flashcard, index) => (
            <FlashcardItem 
              key={index}
              title={flashcard.title}
              term={flashcard.term}
              description={flashcard.description}
              image={flashcard.image}
            />
          ))
        ) : (
          <p>No flashcards found. Create some!</p>
        )}
      </div>
    </div>
  );
}

export default MyFlashcards;
