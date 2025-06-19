import React, { useState, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import WaitlistCTA from './components/WaitlistCTA';
import Footer from './components/Footer';

// Create dark mode context
export const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

function App() {
  const [email, setEmail] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement waitlist signup logic
    console.log('Waitlist signup:', email);
    alert('Thank you for joining our waitlist! We\'ll notify you when MedicoBuddy launches in 2025.');
    setEmail('');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Navbar />
        <Hero onSubmit={handleWaitlistSubmit} email={email} setEmail={setEmail} />
        <Features />
        <Testimonials />
        <WaitlistCTA onSubmit={handleWaitlistSubmit} email={email} setEmail={setEmail} />
        <Footer onSubmit={handleWaitlistSubmit} email={email} setEmail={setEmail} />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App; 