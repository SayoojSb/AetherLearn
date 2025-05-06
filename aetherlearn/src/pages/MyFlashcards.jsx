import React, { useState, useEffect } from 'react';
import FlashcardItem from '../components/FlashcardItem';
import FlashcardReviewModal from '../components/FlashcardReviewModal';
import '../styles/MyFlashcards.css';

function MyFlashcards() {
  const [flashcards, setFlashcards] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  useEffect(() => {
    const storedFlashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    setFlashcards(storedFlashcards);
  }, []);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedCardIndex(null);
  };

  const handleNextCard = () => {
    if (selectedCardIndex + 1 < flashcards.length) {
      setSelectedCardIndex(selectedCardIndex + 1);
    } else {
      setSelectedCardIndex(null);
    }
  };

  const handleDeleteCard = (indexToDelete) => {
    const updatedFlashcards = flashcards.filter((_, index) => index !== indexToDelete);
    setFlashcards(updatedFlashcards);
    localStorage.setItem('flashcards', JSON.stringify(updatedFlashcards));
  };
  

  return (
    <div className="my-flashcards-container">
      <header className="my-flashcards-header">
        <h2>My Flashcards</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search flashcards" />
        </div>
      </header>

      <div className="flashcard-list">
      {flashcards.map((flashcard, index) => {
        if (!flashcard || !flashcard.title) return null;
        return (
          <div key={index}>
            <FlashcardItem
              title={flashcard.title}
              term={flashcard.term}
              description={flashcard.description}
              image={flashcard.image}
              onDelete={() => handleDeleteCard(index)}
              onClick={() => handleCardClick(index)}  // still allow review
            />
          </div>
        );
      })}

      </div>

      {selectedCardIndex !== null && (
        <FlashcardReviewModal
          flashcard={flashcards[selectedCardIndex]}
          onClose={handleCloseModal}
          onNext={handleNextCard}
        />
      )}
    </div>
  );
}

export default MyFlashcards;
