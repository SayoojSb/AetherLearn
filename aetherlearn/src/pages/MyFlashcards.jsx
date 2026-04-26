import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MyFlashcards.css';

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
    if (!searchQuery) return flashcardSets;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return flashcardSets.filter(set =>
      set.title.toLowerCase().includes(lowerCaseQuery)
    );
  }, [flashcardSets, searchQuery]);

  return (
    <div className="myflashcards-page">
      <div className="my-flashcards-container">
        <div className="my-flashcards-header-row">
          <h1>
            My Flashcard Sets
            {flashcardSets.length > 0 && (
              <span>{flashcardSets.length} set{flashcardSets.length !== 1 ? 's' : ''}</span>
            )}
          </h1>
        </div>

        <div className="search-box-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search your sets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flashcard-set-search-input"
          />
        </div>

        {filteredFlashcardSets.length === 0 ? (
          <div className="no-sets-message">
            <div className="no-sets-icon">📚</div>
            <p>
              {searchQuery
                ? "No sets match your search."
                : "You haven't created any flashcard sets yet. Hit \"+ New Set\" to get started!"}
            </p>
          </div>
        ) : (
          <div className="flashcard-sets-list">
            {filteredFlashcardSets.map((set) => (
              <div
                key={set.id}
                className="flashcard-set-item"
                onClick={() => handleSetClick(set.id)}
              >
                <div className="set-item-icon">📖</div>
                <h2>{set.title}</h2>
                <p className="set-item-meta">
                  {set.flashcards?.length || 0} card{(set.flashcards?.length || 0) !== 1 ? 's' : ''}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyFlashcard;
