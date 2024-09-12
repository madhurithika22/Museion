// src/components/ScrollingImages.js

import React from 'react';
import './ScrollingImages.css'; // Ensure you have the correct path to the CSS file

const ScrollingImages = () => {
  return (
    <div className="scrolling-images">
      <img src="path/to/museum1.jpg" alt="Museum 1" className="scrolling-image" />
      <img src="path/to/museum2.jpg" alt="Museum 2" className="scrolling-image" />
      <img src="path/to/museum3.jpg" alt="Museum 3" className="scrolling-image" />
      {/* Add more images as needed */}
    </div>
  );
};

export default ScrollingImages;
