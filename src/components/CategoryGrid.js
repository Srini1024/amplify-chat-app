import React from 'react';
import './CategoryGrid.css';

const CategoryGrid = ({ categories, onCategorySelect, onPromptSelect }) => {
  return (
    <div className="category-grid-container">
      <div className="welcome-section">
        <h2>Welcome to Dallas! 🌟</h2>
        <p>I'm here to help you navigate your new life as an international student. Select a category below or ask me anything!</p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => onCategorySelect(category)}
          >
            <div className="category-icon">{category.icon}</div>
            <h3>{category.name}</h3>
            <p className="category-description">{category.description}</p>
            
            <div className="quick-prompts">
              <span className="prompts-label">Quick questions:</span>
              {category.prompts.slice(0, 2).map((prompt, index) => (
                <button
                  key={index}
                  className="prompt-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onCategorySelect(category);
                    onPromptSelect(prompt);
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="general-chat-section">
        <button
          className="general-chat-button"
          onClick={() => onCategorySelect({ id: 'general', name: 'General Questions', icon: '💬' })}
        >
          <span className="button-icon">💬</span>
          <span>Ask Me Anything</span>
        </button>
      </div>
    </div>
  );
};

export default CategoryGrid;

