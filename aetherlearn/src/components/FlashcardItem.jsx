// src/components/FlashcardItem.jsx
import React from 'react';
import '../styles/FlashcardItem.css';

function FlashcardItem({ title, term, description, image, onDelete, onClick }) {
  return (
    <div className="flashcard-item" onClick={onClick}>
      <div className="flashcard-header">
        <h3>{title}</h3>
        <p>{term}</p>
        <button
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation(); // prevent triggering onClick when deleting
            onDelete();
          }}
        >
          &times;
        </button>
      </div>
      <div className="flashcard-body">
        <p>{description}</p>
        {image && <img src={image} alt={term} className="flashcard-image" />}
      </div>
    </div>
  );
}

export default FlashcardItem;
