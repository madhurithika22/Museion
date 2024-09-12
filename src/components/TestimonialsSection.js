import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Visitors Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>"An enlightening experience! The guided tour was fantastic."</p>
          <h4>- Jane Doe</h4>
        </div>
        <div className="testimonial-card">
          <p>"A must-visit for anyone interested in history and art."</p>
          <h4>- John Smith</h4>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
