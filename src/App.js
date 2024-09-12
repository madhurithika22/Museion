import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import ExhibitionsSection from './components/ExhibitionsSection';
import UpcomingEventsSection from './components/UpcomingEventsSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import './App.css';

function App() {
  const [isBooking, setIsBooking] = useState(false);

  const handleStartBooking = () => {
    setIsBooking(true);
  };

  return (
    <div className="App">
      {!isBooking ? (
        <>
          <Header />
          <HeroSection onStartBooking={handleStartBooking} />
          <GallerySection />
          <ExhibitionsSection />
          <UpcomingEventsSection />
          <TestimonialsSection />
          <NewsletterSection />
          <Footer />
        </>
      ) : (
        <BookingPage />
      )}
    </div>
  );
}

export default App;
