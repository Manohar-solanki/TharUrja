import React from 'react';
import { ArrowRight, Sun, Cpu, Sparkles, CloudSun, ShieldCheck, Zap } from 'lucide-react';
import ImageSequenceBackground from '../../components/ImageSequenceBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ImageSequenceBackground
        frameCount={240}
        folderPath="/bg-frames"
        fileNamePrefix="ezgif-frame-"
        fileNameSuffix=".jpg"
        fps={30}
        overlayOpacity={0.7}
        className="min-h-screen flex items-center justify-center py-24 sm:py-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-8 shadow-xl animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Sparkles className="w-4 h-4 text-emerald-400 ml-1" />
              <span>Next-Gen Renewable Energy & AI Grid in Thar Desert</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-md">
              Harnessing <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Infinite Natural Power</span> for a Greener Tomorrow
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl text-slate-200 mb-10 max-w-3xl font-light leading-relaxed drop-shadow">
              TharUrja seamlessly unifies solar harvesting, wind corridors, and AI-driven grid optimization across Rajasthan, India.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 w-full max-w-2xl">
              <a 
                href="#mission" 
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-emerald-900/40 flex items-center justify-center text-base"
              >
                <span>Explore Technology</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a 
                href="https://weather.tharurja.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 text-cyan-300 hover:text-white font-semibold py-3.5 px-6 rounded-full border border-cyan-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-base shadow-lg"
              >
                <CloudSun className="mr-2 h-5 w-5 text-cyan-400" />
                <span>Live Weather Dashboard</span>
              </a>

              <a 
                href="#contact" 
                className="bg-slate-900/60 backdrop-blur-md hover:bg-white/10 text-white font-semibold py-3.5 px-6 rounded-full border border-slate-400/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-base"
              >
                <span>Get Involved</span>
              </a>
            </div>

            {/* Floating Live Stat Counters Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl bg-slate-900/80 backdrop-blur-xl border border-emerald-500/20 p-5 rounded-3xl shadow-2xl">
              <div className="flex flex-col items-center p-2 border-r border-slate-800/80 last:border-r-0">
                <div className="flex items-center space-x-1 text-emerald-400 font-extrabold text-2xl sm:text-3xl font-mono">
                  <span>300+</span>
                </div>
                <span className="text-xs text-slate-300 mt-1 font-medium">Sunny Days / Year</span>
              </div>

              <div className="flex flex-col items-center p-2 border-r border-slate-800/80 last:border-r-0">
                <div className="flex items-center space-x-1 text-teal-300 font-extrabold text-2xl sm:text-3xl font-mono">
                  <span>12.5k</span>
                </div>
                <span className="text-xs text-slate-300 mt-1 font-medium">Tons CO₂ Avoided</span>
              </div>

              <div className="flex flex-col items-center p-2 border-r border-slate-800/80 last:border-r-0">
                <div className="flex items-center space-x-1 text-amber-400 font-extrabold text-2xl sm:text-3xl font-mono">
                  <span>98.4%</span>
                </div>
                <span className="text-xs text-slate-300 mt-1 font-medium">AI Grid Accuracy</span>
              </div>

              <div className="flex flex-col items-center p-2">
                <div className="flex items-center space-x-1 text-cyan-400 font-extrabold text-2xl sm:text-3xl font-mono">
                  <span>25%</span>
                </div>
                <span className="text-xs text-slate-300 mt-1 font-medium">Avg Energy Cost Saved</span>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Scroll Down</span>
            <svg 
              className="w-5 h-5 text-emerald-400" 
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
      </ImageSequenceBackground>
    </section>
  );
};

export default Hero;
