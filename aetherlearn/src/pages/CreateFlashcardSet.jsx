import { useState, useRef } from 'react';
import '../styles/CreateFlashcardSet.css';

// Converts a File to a base64 data URL
function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function ImageDropZone({ cardId, imageUrl, onChange }) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFile = async (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const dataUrl = await fileToDataUrl(file);
    onChange(cardId, 'imageUrl', dataUrl);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    onChange(cardId, 'imageUrl', '');
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="form-group">
      <label>Image (optional)</label>

      {imageUrl ? (
        <div className="image-preview-box">
          <img src={imageUrl} alt="Card visual" className="image-preview" />
          <button
            type="button"
            className="image-remove-btn"
            onClick={handleRemove}
            title="Remove image"
          >
            ×
          </button>
        </div>
      ) : (
        <div
          className={`image-drop-zone ${isDragging ? 'dragging' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
        >
          <div className="drop-zone-icon">🖼️</div>
          <p className="drop-zone-text">Drop an image here</p>
          <p className="drop-zone-sub">or click to browse</p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="drop-zone-input"
            onChange={handleInputChange}
          />
        </div>
      )}
    </div>
  );
}

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

                  <ImageDropZone
                    cardId={card.id}
                    imageUrl={card.imageUrl}
                    onChange={handleFlashcardChange}
                  />
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
