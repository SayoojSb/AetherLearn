import React, { useState } from 'react';
import '../styles/CreateFlashcardSet.css';

function CreateFlashcardSet() {
    const [setTitle, setSetTitle] = useState('');
    const [flashcards, setFlashcards] = useState([{ id: 1, term: '', description: '', imageUrl: '' }]);
    const [nextFlashcardId, setNextFlashcardId] = useState(2);

    const handleAddFlashcard = () => {
        setFlashcards(prevFlashcards => [
            ...prevFlashcards,
            { id: nextFlashcardId, term: '', description: '', imageUrl: '' }
        ]);
        setNextFlashcardId(prevId => prevId + 1);
    };

    const handleRemoveFlashcard = (idToRemove) => {
        setFlashcards(prevFlashcards =>
            prevFlashcards.filter(card => card.id !== idToRemove)
        );
    };

    const handleFlashcardChange = (id, field, value) => {
        setFlashcards(prevFlashcards =>
            prevFlashcards.map(card =>
                card.id === id ? { ...card, [field]: value } : card
            )
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

        console.log("New Flashcard Set Saved:", newFlashcardSet);
        alert("Flashcard set saved successfully!");

        setSetTitle('');
        setFlashcards([{ id: 1, term: '', description: '', imageUrl: '' }]);
        setNextFlashcardId(2);
    };

    return (
      <>
        <header className="createflashcard-header">
          <div className="logo">
          <a href="/">AetherLearn</a>
          </div>
          <nav>
            <ul>
              <li><a href="/dashboard">Dashboard</a></li>
            </ul>
          </nav>
        </header>
        <div className="form-container">
            <h1>Create a new flashcard set</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="setTitle"
                        value={setTitle}
                        onChange={(e) => setSetTitle(e.target.value)}
                        placeholder="Enter a title like 'Physics - Chapter 1:Motion'"
                        required
                    />
                </div>

                <div id="flashcardsContainer">
                    {flashcards.map((card, index) => (
                        <div key={card.id} className="flashcard-inputs">
                            <div className="flashcard-header">
                                <h3>Flashcard {index + 1}</h3>
                                {flashcards.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveFlashcard(card.id)}
                                        className="remove-flashcard-btn"
                                        title="Remove this flashcard"
                                    >
                                        &times;
                                    </button>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor={`term-${card.id}`}>TERM :</label>
                                <input
                                    type="text"
                                    id={`term-${card.id}`}
                                    value={card.term}
                                    onChange={(e) => handleFlashcardChange(card.id, 'term', e.target.value)}
                                    placeholder="Enter Term"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor={`description-${card.id}`}>DEFINITION :</label>
                                <textarea
                                    id={`description-${card.id}`}
                                    value={card.description}
                                    onChange={(e) => handleFlashcardChange(card.id, 'description', e.target.value)}
                                    placeholder="Enter Definition"
                                    required
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor={`imageUrl-${card.id}`}>IMAGE URL (Optional) :</label>
                                <input
                                    type="text"
                                    id={`imageUrl-${card.id}`}
                                    value={card.imageUrl}
                                    onChange={(e) => handleFlashcardChange(card.id, 'imageUrl', e.target.value)}
                                    placeholder="Paste image URL or upload"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="form-actions">
                    <button type="button" onClick={handleAddFlashcard} className="form-submit-btn" id='add-btn'>
                        Add Another Flashcard
                    </button>
                    <button type="submit" className="form-submit-btn" id='submit-btn'>
                        Save Flashcard Set
                    </button>
                </div>
            </form>
        </div>
      </>
    );
}

export default CreateFlashcardSet;