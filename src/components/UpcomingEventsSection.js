// src/components/UpcomingEventsSection.js

import React from 'react';
import './UpcomingEventsSection.css';

// Import event images
import event1 from './assets/ev1.jpg';
import event2 from './assets/ev2.jpg';
import event3 from './assets/ev3.jpg';

const UpcomingEventsSection = () => {
  // Array of event objects
  const events = [
    {
      title: 'Art Workshop for Kids',
      description: 'A fun and interactive art workshop for children aged 6-12.',
      date: 'September 20, 2024',
      image: event1,
    },
    {
      title: 'Historical Lecture Series',
      description: 'Join us for a series of lectures on the history of ancient civilizations.',
      date: 'October 5, 2024',
      image: event2,
    },
    {
      title: 'Evening with Classical Music',
      description: 'Experience an evening filled with classical music performances.',
      date: 'November 12, 2024',
      image: event3,
    },
  ];

  return (
    <div className="upcoming-events-section">
      <h2 className="events-title">Upcoming Events</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-item" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
