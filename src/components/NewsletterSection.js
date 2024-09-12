import React from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <h2>Stay Updated!</h2>
      <p>Sign up for our newsletter to receive the latest news and updates from our museum.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsletterSection;
