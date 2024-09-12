import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Museum of History. All rights reserved.</p>
        <div className="social-media-links">
          <a href="#facebook">Facebook</a> | <a href="#twitter">Twitter</a> | <a href="#instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
