import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import "./app.css";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContactForm  />
    
      </main>

      <Footer />
    </div>
  );
};

export default App;