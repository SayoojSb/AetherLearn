// src/components/FlashcardReviewModal.jsx
import React, { useState } from 'react';
import '../styles/MyFlashcards.css';

function FlashcardReviewModal({ flashcard, onClose, onNext }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  return (
    <div className="flashcard-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Flashcard Review</h3>
        <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
          {!flipped ? (
            <p><strong>{flashcard.term}</strong></p>
          ) : (
            <div>
              <p>{flashcard.description}</p>
              {flashcard.image && (
                <img src={flashcard.image} alt="flashcard" style={{ maxWidth: '100%', marginTop: '10px' }} />
              )}
            </div>
          )}
        </div>
        <div className="review-actions">
          <button onClick={() => { onNext('known'); }}>I Knew This</button>
          <button onClick={() => { onNext('unknown'); }}>Don’t Know</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default FlashcardReviewModal;
