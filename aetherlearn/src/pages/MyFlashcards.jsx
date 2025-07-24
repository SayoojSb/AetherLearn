import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MyFlashcards.css';
import plusIcon from '../assets/plus.png'

function MyFlashcard() {
    const [flashcardSets, setFlashcardSets] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedSets = JSON.parse(localStorage.getItem('flashcardSets')) || [];
        setFlashcardSets(storedSets);
    }, []);

    const handleSetClick = (setId) => {
        navigate(`/review-set/${setId}`);
    };

    const filteredFlashcardSets = useMemo(() => {
        if (!searchQuery) {
            return flashcardSets;
        }
        const lowerCaseQuery = searchQuery.toLowerCase();
        return flashcardSets.filter(set =>
            set.title.toLowerCase().includes(lowerCaseQuery)
        );
    }, [flashcardSets, searchQuery]);

    return (
        <>
          <header className="myflashcards-header">
            <div className="logo">
            <a href="/">AetherLearn</a>
            </div>
            <nav>
              <ul>
                <li><a href="/createflashcard"><img src={plusIcon} alt="Create a flashcard set" className='plus-icon' /></a></li>
                <li><a href="/dashboard">Dashboard</a></li>
              </ul>
            </nav>
          </header>
        <div className="my-flashcards-container">
            <h1>My Flashcard Sets</h1>

            <div className="search-box-container">
                <input
                    type="text"
                    placeholder="Search flashcard sets by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flashcard-set-search-input"
                />
            </div>

            {filteredFlashcardSets.length === 0 ? (
                <p className="no-sets-message">
                    {searchQuery
                        ? "No flashcard sets found matching your search."
                        : "You haven't created any flashcard sets yet. Go to the 'Create New' page to add some!"
                    }
                </p>
            ) : (
                <div className="flashcard-sets-list">
                    {filteredFlashcardSets.map((set) => ( 
                        <div
                            key={set.id}
                            className="flashcard-set-item"
                            onClick={() => handleSetClick(set.id)}
                        >
                            <h2>{set.title}</h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </>
    );
}

export default MyFlashcard;