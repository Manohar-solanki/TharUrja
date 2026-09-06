import React, { useEffect, useState } from 'react';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1.5s SVG drawing animation, then fade out loader
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        onComplete();
      }, 500); // 0.5s fade out
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#0A0A0A] flex flex-col items-center justify-center transition-opacity duration-500 pointer-events-none ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* SVG Self-Drawing Logo Animation (1.5s stroke animation) */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4"
        >
          {/* Background subtle circle */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="#242424"
            strokeWidth="3"
          />
          {/* Animated Golden Stroke */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="url(#goldGradient)"
            strokeWidth="4"
            strokeDasharray="276"
            strokeDashoffset="276"
            strokeLinecap="round"
            style={{
              animation: 'drawStroke 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards',
            }}
          />
          {/* Sun / Sand Ray Accent */}
          <path
            d="M50 22V32M50 68V78M22 50H32M68 50H78M30 30L37 37M63 63L70 70M30 70L37 63M63 37L70 30"
            stroke="#FF6B00"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset="100"
            style={{
              animation: 'drawStroke 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.3s forwards',
            }}
          />
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#FF6B00" />
            </linearGradient>
          </defs>
        </svg>

        <style>{`
          @keyframes drawStroke {
            to { stroke-dashoffset: 0; }
          }
        `}</style>

        <span className="font-mono text-xl font-bold tracking-widest text-white uppercase">
          Thar<span className="text-[#D4A017]">Urja</span>
        </span>
        <span className="text-[10px] font-mono text-[#F5DEB3]/60 tracking-widest mt-1 uppercase">
          Initializing Desert Industrialization...
        </span>
      </div>
    </div>
  );
};

export default PageLoader;
