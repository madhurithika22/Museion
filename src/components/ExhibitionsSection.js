// src/components/ExhibitionsSection.js

import React from 'react';
import './ExhibitionsSection.css';

// Import images directly
import exhibition1 from './assets/ex1.jpg';
import exhibition2 from './assets/ex2.jpg';
import exhibition3 from './assets/ex3.jpg';
import exhibition4 from './assets/ex4.jpg';

const ExhibitionsSection = () => {
  // Array of exhibition objects
  const exhibitions = [
    { title: 'Ancient Artifacts', description: 'Explore ancient artifacts from various civilizations.', image: exhibition1 },
    { title: 'Modern Art', description: 'A collection of contemporary and modern art pieces.', image: exhibition2 },
    { title: 'Renaissance Masters', description: 'Masterpieces from the Renaissance period.', image: exhibition3 },
    { title: 'Historical Sculptures', description: 'Discover sculptures that shaped history.', image: exhibition4 },
  ];

  return (
    <div className="exhibitions-section">
      <h2 className="exhibitions-title">Exhibitions</h2>
      <div className="exhibitions-grid">
        {exhibitions.map((exhibition, index) => (
          <div className="exhibition-item" key={index}>
            <img src={exhibition.image} alt={exhibition.title} className="exhibition-image" />
            <h3 className="exhibition-title">{exhibition.title}</h3>
            <p className="exhibition-description">{exhibition.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionsSection;
