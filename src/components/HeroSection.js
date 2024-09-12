import React from 'react';
import './HeroSection.css';

const HeroSection = ({ onStartBooking }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Museion Maneo</h1>
        <p className="hero-subtitle">Explore the wonders of history and art through our curated tickets.</p>
        <button className="start-booking-button" onClick={onStartBooking}>
          Start Booking
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
