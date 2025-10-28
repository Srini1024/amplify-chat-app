import React, { useState } from 'react';
import './App.css';
import ChatInterface from './components/ChatInterface';
import CategoryGrid from './components/CategoryGrid';
import Header from './components/Header';
import { config } from './config';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowChat(true);
  };

  const handlePromptSelect = (prompt) => {
    setInitialPrompt(prompt);
    setShowChat(true);
  };

  const handleBackToCategories = () => {
    setShowChat(false);
    setSelectedCategory(null);
    setInitialPrompt('');
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {!showChat ? (
          <CategoryGrid
            categories={config.CATEGORIES}
            onCategorySelect={handleCategorySelect}
            onPromptSelect={handlePromptSelect}
          />
        ) : (
          <ChatInterface
            category={selectedCategory}
            initialPrompt={initialPrompt}
            onBack={handleBackToCategories}
          />
        )}
      </main>
    </div>
  );
}

export default App;

