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
    <div className="font-sans bg-white text-gray-800">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="scroll-mt-16">
          <Hero />
        </section>

        {/* Our Mission */}
        <section id="mission" className="scroll-mt-16">
          <Mission />
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="scroll-mt-16">
          <HowItWorks />
        </section>

        {/* Impact */}
        <section id="impact" className="scroll-mt-16">
          <Impact />
        </section>

        {/* Join Us */}
        <section id="join-us" className="scroll-mt-16">
          <JoinUs />
        </section>

        {/* About Us */}
        <section id="about-us" className="scroll-mt-16">
          <AboutUs />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
