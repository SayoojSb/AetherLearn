// src/components/FlashcardItem.jsx
import React from 'react';
import '../styles/FlashcardItem.css';

function FlashcardItem({ title, term, description, image }) {
  return (
    <div className="flashcard-item">
      <div className="flashcard-header">
        <h3>{title}</h3>
        <p>{term}</p>
      </div>
      <div className="flashcard-body">
        <p>{description}</p>
        {image && <img src={image} alt={term} className="flashcard-image" />}
      </div>
    </div>
  );
}

export default FlashcardItem;
