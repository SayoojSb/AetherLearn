import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ReviewSet.css';

function ReviewSet() {
  const { setId } = useParams();
  const navigate = useNavigate();
  const [currentSet, setCurrentSet] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const storedSets = JSON.parse(localStorage.getItem('flashcardSets')) || [];
    const foundSet = storedSets.find(set => set.id === parseInt(setId));

    if (foundSet) {
      setCurrentSet(foundSet);
    } else {
      alert("Flashcard set not found!");
      navigate('/myflashcards');
    }
  }, [setId, navigate]);

  useEffect(() => {
    setIsFlipped(false);
  }, [currentCardIndex]);

  const handleFlip = () => {
    setIsFlipped(prev => !prev);
  };

  const handleNext = useCallback(() => {
    if (currentSet && currentCardIndex < currentSet.flashcards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    }
  }, [currentSet, currentCardIndex]);

  const handlePrev = useCallback(() => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
    }
  }, [currentCardIndex]);

  const handleDone = () => {
    navigate('/myflashcards');
  };

  if (!currentSet) {
    return (
      <div className="review-page">
        <div className="review-set-container">
          <p className="loading-message">Loading flashcard set...</p>
        </div>
      </div>
    );
  }

  const currentCard = currentSet.flashcards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / currentSet.flashcards.length) * 100;

  return (
    <div className="review-page">
      <div className="review-set-container">
        <p className="review-set-title">{currentSet.title}</p>
        <p className="card-counter">
          {currentCardIndex + 1} / {currentSet.flashcards.length}
        </p>

        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div
          className={`flashcard-card ${isFlipped ? 'flipped' : ''} ${currentCard.imageUrl ? 'has-image' : ''}`}
          onClick={handleFlip}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <p className="flashcard-term">{currentCard.term}</p>
              <span className="flip-hint">Click to reveal</span>
            </div>
            <div className="flashcard-back">
              <p className="flashcard-description">{currentCard.description}</p>
              {currentCard.imageUrl && (
                <img
                  src={currentCard.imageUrl}
                  alt="Visual cue"
                  className="flashcard-image"
                />
              )}
            </div>
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            onClick={handlePrev}
            disabled={currentCardIndex === 0}
            className="nav-button prev-button"
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentCardIndex === currentSet.flashcards.length - 1}
            className="nav-button next-button"
          >
            Next →
          </button>
        </div>

        <button onClick={handleDone} className="done-button">
          Done
        </button>
      </div>
    </div>
  );
}

export default ReviewSet;
