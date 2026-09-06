import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './assets/components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollAnimation from './components/ScrollAnimation';
import WhatWeDo from './components/WhatWeDo';
import TheProcess from './components/TheProcess';
import WhyTharUrja from './components/WhyTharUrja';
import FounderSection from './components/FounderSection';
import VisionTimeline from './components/VisionTimeline';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoaderFinished, setIsLoaderFinished] = useState(false);

  // Lenis Smooth Scroll Engine (0.8 lerp value equivalent setup)
  useEffect(() => {
    if (!isLoaderFinished) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger Section Fade-up Animations with 0.15s stagger
    const fadeElements = document.querySelectorAll('.gsap-fade-up');
    fadeElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      lenis.destroy();
    };
  }, [isLoaderFinished]);

  return (
    <>
      {/* 4. Page Load Sequence SVG Drawing Loader */}
      {!isLoaderFinished && (
        <PageLoader onComplete={() => setIsLoaderFinished(true)} />
      )}

      {/* 5. Global 4% Noise Overlay */}
      <div className="global-noise-overlay" />

      {/* 3. Custom Golden Magnetic Cursor */}
      <CustomCursor />

      <div
        className={`bg-[#0A0A0A] text-white font-sans selection:bg-[#D4A017] selection:text-[#0A0A0A] transition-opacity duration-700 ${
          isLoaderFinished ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Navigation Header */}
        <Navbar />

        <main>
          {/* Section 1 — Hero */}
          <HeroSection />

          {/* Section 2 — Pinned GSAP Scroll Animation */}
          <ScrollAnimation />

          {/* Section 3 — What We Do (4 Product Cards) */}
          <div className="gsap-fade-up">
            <WhatWeDo />
          </div>

          {/* Section 4 — The Process (5 Pipeline Steps) */}
          <div className="gsap-fade-up">
            <TheProcess />
          </div>

          {/* Section 5 — Why TharUrja (3 Stat Counters + Gap/Edge) */}
          <div className="gsap-fade-up">
            <WhyTharUrja />
          </div>

          {/* Section 6 — Founder Spotlight (Manohar Kumar) */}
          <div className="gsap-fade-up">
            <FounderSection />
          </div>

          {/* Section 7 — Vision Timeline Roadmap */}
          <div className="gsap-fade-up">
            <VisionTimeline />
          </div>

          {/* Section 8 — Partner Contact / CTA */}
          <div className="gsap-fade-up">
            <ContactCTA />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;