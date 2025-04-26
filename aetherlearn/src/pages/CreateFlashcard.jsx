import React, { useState } from "react";
import "../styles/CreateFlashcard.css";
import { useNavigate } from 'react-router-dom';

export default function CreateFlashcard() {
  const [title, setTitle] = useState("");
  const [term, setTerm] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/svg+xml")) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image format (.jpg, .png, .svg).");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create flashcard object
    const newFlashcard = { title, term, description, subject, chapter, image };
    
    // Get existing flashcards from localStorage, or initialize with an empty array if none
    const storedFlashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    
    // Add the new flashcard to the list
    storedFlashcards.push(newFlashcard);
    
    // Save the updated list back to localStorage
    localStorage.setItem('flashcards', JSON.stringify(storedFlashcards));
    
    // Navigate to "My Flashcards" page
    navigate('/myflashcards');
  };
  

  return (
    <div className="create-flashcard-container">
      <div className="create-flashcard-card">
        <h2>Create Flashcard</h2>
        <form onSubmit={handleSubmit} className="flashcard-form">
          {/* Flashcard Title */}
          <input
            type="text"
            placeholder="Flashcard Set Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Term (Keyword) */}
          <input
            type="text"
            placeholder="Term (Keyword)"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            required
          />

          {/* Description */}
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          {/* Subject Selector */}
          <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
            <option value="">Select Subject</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            {/* Add more subjects here */}
          </select>

          {/* Chapter Selector */}
          <select value={chapter} onChange={(e) => setChapter(e.target.value)} required>
            <option value="">Select Chapter</option>
            <option value="chapter1">Chapter 1</option>
            <option value="chapter2">Chapter 2</option>
            <option value="chapter3">Chapter 3</option>
            {/* Add more chapters here */}
          </select>

          {/* Image Upload */}
          <div className="image-upload">
            <label htmlFor="imageUpload">Upload Image 📷</label>
            <input
              type="file"
              id="imageUpload"
              accept=".jpg,.png,.svg"
              onChange={handleImageChange}
            />
          </div>

          {/* Image Preview */}
          {image && (
            <div className="image-preview">
              <img src={image} alt="Preview" />
            </div>
          )}

          {/* Submit Button */}
          <button type="submit">Create Flashcard</button>
        </form>
      </div>
    </div>
  );
}
