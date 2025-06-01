import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import About from '../components/home/About';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'TharUrja';
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Stats />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;