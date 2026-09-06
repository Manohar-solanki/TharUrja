import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Loader2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CheckpointOverlay {
  min: number;
  max: number;
  title: string;
  subtitle: string;
}

const CHECKPOINTS: CheckpointOverlay[] = [
  {
    min: 0,
    max: 0.20,
    title: 'THAR DESERT',
    subtitle: '200,000 km² of untapped industrial potential',
  },
  {
    min: 0.20,
    max: 0.40,
    title: 'JAISALMER SILICA',
    subtitle: 'Industrial grade — uncharacterized, unprocessed, waiting',
  },
  {
    min: 0.40,
    max: 0.60,
    title: 'MAGNETIC SEPARATION',
    subtitle: 'Iron removed. Purity achieved. Grade unlocked.',
  },
  {
    min: 0.60,
    max: 0.80,
    title: 'SOLAR GLASS GRADE',
    subtitle: '99%+ SiO₂ — ready for photovoltaic industry',
  },
  {
    min: 0.80,
    max: 1.0,
    title: 'THARURJA',
    subtitle: 'Desert to Industry. Sand to Power.',
  },
];

export const ScrollAnimation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activeCheckpointIndex, setActiveCheckpointIndex] = useState<number>(0);
  const [scrollProgressState, setScrollProgressState] = useState<number>(0);

  const totalFrames = 240;
  const folderPath = '/bg-frames';
  const fileNamePrefix = 'ezgif-frame-';
  const fileNameSuffix = '.jpg';

  const formatIndex = (index: number): string => String(index).padStart(3, '0');

  // Preload frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(totalFrames);

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${folderPath}/${fileNamePrefix}${formatIndex(i)}${fileNameSuffix}`;

      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) setIsLoaded(true);
        if (i === 1 && canvasRef.current) drawFrame(0);
      };

      images[i - 1] = img;
    }

    imagesRef.current = images;
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      drawHeight = height;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();

    currentFrameRef.current = index;
  };

  // GSAP ScrollTrigger Pinned Animation
  useEffect(() => {
    if (!sectionRef.current || !isLoaded) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=300%',
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgressState(progress);

        const frameIndex = Math.min(
          totalFrames - 1,
          Math.max(0, Math.floor(progress * (totalFrames - 1)))
        );

        drawFrame(frameIndex);

        const activeIdx = CHECKPOINTS.findIndex(
          (c) => progress >= c.min && progress <= c.max
        );
        if (activeIdx !== -1) setActiveCheckpointIndex(activeIdx);
      },
    });

    const handleResize = () => drawFrame(currentFrameRef.current);
    window.addEventListener('resize', handleResize);

    return () => {
      trigger.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded]);

  return (
    <div id="sand-animation" ref={sectionRef} className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden">
      
      {/* Loading Progress Indicator Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 bg-[#0A0A0A] flex flex-col items-center justify-center p-6 text-center">
          <Loader2 className="w-10 h-10 text-[#D4A017] animate-spin mb-4" />
          <h3 className="text-xl font-bold text-white mb-2 font-mono">Loading Sand Transformation Sequence</h3>
          <div className="w-64 bg-slate-800 h-2.5 rounded-full overflow-hidden border border-[#D4A017]/30">
            <div
              className="bg-gradient-to-r from-[#D4A017] to-[#FF6B00] h-full transition-all duration-200 gold-progress-glow"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="text-xs font-mono text-[#D4A017] mt-2 font-bold">{loadProgress}%</span>
        </div>
      )}

      {/* Main Canvas Element */}
      <canvas ref={canvasRef} className="w-full h-full object-cover z-0 relative pointer-events-none" />

      {/* Canvas Vignette Overlay (Dark Edges, Center Highlight) */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(10,10,10,0.85)_80%,_rgba(10,10,10,0.98)_100%)] pointer-events-none" />

      {/* Fix 1 — Dark Overlay Backdrop & Fix 3/4/5 Checkpoint Overlay Container */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full pointer-events-none pb-20 pt-32 px-6 sm:px-12 md:px-16 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
        <div className="max-w-5xl mx-auto relative min-h-[160px] flex items-end">
          {CHECKPOINTS.map((cp, idx) => {
            const isActive = idx === activeCheckpointIndex;
            return (
              <div
                key={idx}
                className={`transition-all duration-500 transform absolute bottom-0 left-0 right-0 ${
                  isActive
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-6 scale-98 pointer-events-none'
                }`}
              >
                {/* Fix 4 — Upgraded Checkpoint Badge */}
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/60 text-[#D4A017] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(212,160,23,0.3)] backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Checkpoint {idx + 1} / 5</span>
                </div>

                {/* Fix 3 — Golden Left Border Accent */}
                <div className="border-l-4 border-[#D4A017] pl-6 py-1">
                  {/* Fix 2 — Title Styling */}
                  <h2
                    className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight uppercase font-sans"
                    style={{
                      textShadow:
                        '0 0 40px rgba(212, 160, 23, 0.8), 0 2px 20px rgba(0, 0, 0, 0.9), 0 4px 40px rgba(0, 0, 0, 1)',
                    }}
                  >
                    {cp.title}
                  </h2>

                  {/* Fix 2 — Subtitle Styling */}
                  <p
                    className="text-lg sm:text-2xl font-normal text-[#D4A017] mt-3 tracking-wide"
                    style={{
                      textShadow:
                        '0 2px 10px rgba(0, 0, 0, 1), 0 0 20px rgba(212, 160, 23, 0.5)',
                    }}
                  >
                    {cp.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Frame Counter Top-Right */}
      <div className="absolute top-6 right-6 z-30 bg-[#0A0A0A]/80 border border-[#D4A017]/40 text-[#D4A017] font-mono text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md shadow-lg">
        Frame {formatIndex(currentFrameRef.current + 1)} / {totalFrames}
      </div>

      {/* Progress Bar at Bottom — Waveform / Thicker Glowing Progress */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center space-y-2 pointer-events-none w-full max-w-lg px-6">
        <div className="flex justify-between w-full text-[11px] font-mono text-[#F5DEB3]/90 uppercase tracking-widest font-bold">
          <span>Raw Jaisalmer Sand</span>
          <span className="text-[#D4A017] font-extrabold">
            {Math.floor(scrollProgressState * 100)}% Processed
          </span>
          <span>Solar Grade Silica</span>
        </div>
        <div className="w-full bg-black/90 border border-[#D4A017]/50 h-2 rounded-full overflow-hidden backdrop-blur-md p-0.5 shadow-lg">
          <div
            className="bg-gradient-to-r from-[#D4A017] via-[#FF6B00] to-[#F5DEB3] h-full rounded-full transition-all duration-100 gold-progress-glow"
            style={{ width: `${scrollProgressState * 100}%` }}
          />
        </div>
      </div>

    </div>
  );
};

export default ScrollAnimation;
