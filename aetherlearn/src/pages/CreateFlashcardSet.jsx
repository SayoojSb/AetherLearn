import { useState } from 'react';
import '../styles/CreateFlashcardSet.css';

function CreateFlashcardSet() {
  const [setTitle, setSetTitle] = useState('');
  const [flashcards, setFlashcards] = useState([{ id: 1, term: '', description: '', imageUrl: '' }]);
  const [nextFlashcardId, setNextFlashcardId] = useState(2);

  const handleAddFlashcard = () => {
    setFlashcards(prev => [
      ...prev,
      { id: nextFlashcardId, term: '', description: '', imageUrl: '' }
    ]);
    setNextFlashcardId(prev => prev + 1);
  };

  const handleRemoveFlashcard = (idToRemove) => {
    setFlashcards(prev => prev.filter(card => card.id !== idToRemove));
  };

  const handleFlashcardChange = (id, field, value) => {
    setFlashcards(prev =>
      prev.map(card => card.id === id ? { ...card, [field]: value } : card)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFlashcardSet = {
      id: Date.now(),
      title: setTitle,
      flashcards: flashcards
    };

    const existingSets = JSON.parse(localStorage.getItem('flashcardSets')) || [];
    existingSets.push(newFlashcardSet);
    localStorage.setItem('flashcardSets', JSON.stringify(existingSets));

    alert("Flashcard set saved successfully!");

    setSetTitle('');
    setFlashcards([{ id: 1, term: '', description: '', imageUrl: '' }]);
    setNextFlashcardId(2);
  };

  return (
    <div className="createflashcard-page">
      <div className="form-container">
        <h1>Create a new set</h1>
        <p className="form-subtitle">Add a title and build your flashcards below.</p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="set-title-input"
            value={setTitle}
            onChange={(e) => setSetTitle(e.target.value)}
            placeholder="Set title — e.g. Physics Chapter 1: Motion"
            required
          />

          <div id="flashcardsContainer">
            {flashcards.map((card, index) => (
              <div key={card.id} className="flashcard-inputs">
                <div className="flashcard-header">
                  <h3>Card {index + 1}</h3>
                  {flashcards.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveFlashcard(card.id)}
                      className="remove-flashcard-btn"
                      title="Remove this card"
                    >
                      ×
                    </button>
                  )}
                </div>

                <div className="flashcard-fields">
                  <div className="form-group">
                    <label htmlFor={`term-${card.id}`}>Term</label>
                    <input
                      type="text"
                      id={`term-${card.id}`}
                      value={card.term}
                      onChange={(e) => handleFlashcardChange(card.id, 'term', e.target.value)}
                      placeholder="Enter term"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor={`description-${card.id}`}>Definition</label>
                    <textarea
                      id={`description-${card.id}`}
                      value={card.description}
                      onChange={(e) => handleFlashcardChange(card.id, 'description', e.target.value)}
                      placeholder="Enter definition"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor={`imageUrl-${card.id}`}>Image URL (optional)</label>
                    <input
                      type="text"
                      id={`imageUrl-${card.id}`}
                      value={card.imageUrl}
                      onChange={(e) => handleFlashcardChange(card.id, 'imageUrl', e.target.value)}
                      placeholder="Paste an image URL"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="form-actions">
            <button type="button" onClick={handleAddFlashcard} className="form-submit-btn" id="add-btn">
              + Add Card
            </button>
            <button type="submit" className="form-submit-btn" id="submit-btn">
              Save Set
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateFlashcardSet;
