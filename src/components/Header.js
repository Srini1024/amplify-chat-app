import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <h1>Dallas Student Guide</h1>
        </div>
        <p className="tagline">Your AI-powered companion for navigating life in Dallas</p>
      </div>
    </header>
  );
};

export default Header;

