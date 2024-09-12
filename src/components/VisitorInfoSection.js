import React from 'react';
import './VisitorInfoSection.css';

const VisitorInfoSection = () => {
  return (
    <section className="visitor-info-section">
      <h2>Visitor Information</h2>
      <ul>
        <li><strong>Opening Hours:</strong> 9 AM - 5 PM, Monday to Saturday</li>
        <li><strong>Location:</strong> 123 Museum Avenue, City Name</li>
        <li><strong>Ticket Prices:</strong> Adults - $15, Students - $10, Children - Free</li>
        <li><strong>Guided Tours:</strong> Available upon request</li>
      </ul>
    </section>
  );
};

export default VisitorInfoSection;
