import React, { useEffect, useRef } from 'react';
import { ArrowDown, ShieldCheck, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Desert Sand Particle Canvas System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
    }> = [];

    const particleCount = Math.min(100, Math.floor(width / 15));
    const colors = ['#D4A017', '#FF6B00', '#F5DEB3', '#E6C280', '#FFFFFF'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4 + 0.2,
        vy: (Math.random() - 0.5) * 0.4 - 0.1,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToAnimation = () => {
    const el = document.getElementById('sand-animation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#1A1A1A] text-white flex flex-col justify-between overflow-hidden pt-24 pb-10 bg-grain-texture">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* 1. Subtle Golden Radial Gradient Glow Behind Headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4A017]/20 via-[#FF6B00]/08 to-transparent blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto text-center flex flex-col items-center">
        
        {/* Startup India Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1A1A1A]/80 border border-[#D4A017]/40 text-[#F5DEB3] text-xs sm:text-sm font-medium mb-8 shadow-lg backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
          <span>Registered Startup India</span>
          <span className="text-slate-500">|</span>
          <span className="font-mono text-[#D4A017]">BHASKAR ID: IN-0525-9212UD</span>
        </div>

        {/* 2. Slow Breathing/Pulse Animation on TharUrja Logo */}
        <div className="flex items-center justify-center space-x-2.5 mb-6">
          <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-[#D4A017] to-[#FF6B00] p-0.5 shadow-xl animate-golden-pulse">
            <img src="/images/logo.png" alt="TharUrja" className="h-full w-full object-contain rounded-full bg-[#1A1A1A] p-1" />
          </div>
          <span className="text-3xl sm:text-4xl font-black tracking-tight text-white font-mono">
            Thar<span className="text-[#D4A017]">Urja</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight max-w-5xl mb-6 relative">
          The Desert Has Always Been Here. <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4A017] via-[#F5DEB3] to-[#FF6B00]">
            Now It Works For Us.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-2xl text-[#F5DEB3]/90 font-light max-w-2xl mb-6 leading-relaxed">
          India's first Thar Desert sand industrialization company. Transforming Jaisalmer silica sand into solar glass materials, ceramics, and thermal energy storage.
        </p>

        {/* 4. Thin Golden Horizontal Line Separator Below Subheadline */}
        <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-[#D4A017]/80 to-transparent mb-10" />

        {/* CTA Button */}
        <button
          onClick={scrollToAnimation}
          className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#D4A017] to-[#FF6B00] hover:from-[#FF6B00] hover:to-[#D4A017] text-[#1A1A1A] font-black py-4 px-9 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#D4A017]/20 text-base sm:text-lg"
        >
          <span>Explore the Vision</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* 3. Animated Bouncing Scroll Indicator Arrow at Bottom */}
      <div 
        onClick={scrollToAnimation}
        className="relative z-10 flex flex-col items-center justify-center cursor-pointer group text-xs text-[#F5DEB3]/70 font-mono tracking-widest uppercase"
      >
        <span className="mb-2 group-hover:text-[#D4A017] transition-colors">Scroll To Experience</span>
        <div className="w-8 h-8 rounded-full border border-[#D4A017]/40 flex items-center justify-center bg-[#242424]/60 backdrop-blur-sm group-hover:border-[#D4A017] transition-colors">
          <ChevronDown className="w-5 h-5 text-[#D4A017] animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
