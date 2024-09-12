import React from 'react';
import './Header.css';  // Ensure you have the correct path to the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">MUSEION MANEO</h1>
        <p className="header-subtitle">Discover History, One Step Closer</p>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#exhibitions" className="nav-link">Exhibitions</a></li>
          <li className="nav-item"><a href="#newsletter" className="nav-link">Newsletter</a></li>
          <li className="nav-item"><a href="#testimonials" className="nav-link">Testimonials</a></li>
          <li className="nav-item"><a href="#visitor-info" className="nav-link">Visitor Info</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
