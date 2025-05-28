import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-green-400">TharUrja:</span> Harnessing Infinite Natural Power for a Greener Planet
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            Combining renewable energy with AI-powered optimization to create a sustainable future
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#mission" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#join-us" 
              className="bg-transparent hover:bg-yellow-500 text-white hover:text-gray-900 font-medium py-3 px-6 rounded-full border-2 border-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Join the Movement
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white text-white hover:text-green-700 font-medium py-3 px-6 rounded-full border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;