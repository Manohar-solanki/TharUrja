import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import JoinUs from './components/JoinUs';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <HowItWorks />
        <Impact />
        <JoinUs />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;