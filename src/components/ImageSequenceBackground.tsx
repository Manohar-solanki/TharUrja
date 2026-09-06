import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface ImageSequenceBackgroundProps {
  frameCount?: number;
  folderPath?: string;
  fileNamePrefix?: string;
  fileNameSuffix?: string;
  fps?: number;
  overlayOpacity?: number;
  className?: string;
  children?: React.ReactNode;
}

export const ImageSequenceBackground: React.FC<ImageSequenceBackgroundProps> = ({
  frameCount = 240,
  folderPath = '/bg-frames',
  fileNamePrefix = 'ezgif-frame-',
  fileNameSuffix = '.jpg',
  fps = 30,
  overlayOpacity = 0.65,
  className = '',
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);
  const lastDrawTimeRef = useRef<number>(0);
  
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isFullyLoaded, setIsFullyLoaded] = useState<boolean>(false);

  // Pad numbers with leading zeros (e.g. 1 -> 001, 12 -> 012)
  const formatFrameIndex = (index: number): string => {
    return String(index).padStart(3, '0');
  };

  // Preload Images
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(frameCount);
    let loaded = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNumStr = formatFrameIndex(i);
      img.src = `${folderPath}/${fileNamePrefix}${frameNumStr}${fileNameSuffix}`;

      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === frameCount) {
          setIsFullyLoaded(true);
        }
        // If it's the very first frame, draw it immediately to prevent black screen
        if (i === 1 && canvasRef.current) {
          drawFrame(img);
        }
      };

      images[i - 1] = img;
    }

    imagesRef.current = images;

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [frameCount, folderPath, fileNamePrefix, fileNameSuffix]);

  // Draw frame on canvas with object-fit: cover
  const drawFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

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

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = width / height;

    let drawWidth: number;
    let drawHeight: number;
    let offsetX: number;
    let offsetY: number;

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
  };

  // Animation Loop
  useEffect(() => {
    const frameInterval = 1000 / (fps * playbackSpeed);

    const render = (time: number) => {
      if (isPlaying && imagesRef.current.length > 0) {
        if (time - lastDrawTimeRef.current >= frameInterval) {
          lastDrawTimeRef.current = time;
          const nextFrame = (currentFrameRef.current + 1) % frameCount;
          currentFrameRef.current = nextFrame;

          const currentImg = imagesRef.current[nextFrame];
          if (currentImg && currentImg.complete) {
            drawFrame(currentImg);
          }
        }
      }
      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isPlaying, fps, playbackSpeed, frameCount]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const currentImg = imagesRef.current[currentFrameRef.current];
      if (currentImg && currentImg.complete) {
        drawFrame(currentImg);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  const cycleSpeed = () => {
    setPlaybackSpeed((prev) => {
      if (prev === 1) return 1.5;
      if (prev === 1.5) return 0.5;
      return 1;
    });
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Dark Emerald Glass Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/80 via-slate-900/65 to-slate-950/90 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-slate-950/80 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-20 w-full h-full">{children}</div>

      {/* Background Video Controls (Floating Glass Badge) */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 text-white px-3 py-1.5 rounded-full text-xs shadow-lg">
        <div className="flex items-center space-x-1 mr-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-gray-300 font-medium hidden sm:inline">
            {isFullyLoaded ? 'HQ Animated BG' : `Loading ${Math.round((loadedCount / frameCount) * 100)}%`}
          </span>
        </div>

        <button
          onClick={togglePlay}
          className="p-1 hover:bg-emerald-500/20 rounded-full transition-colors text-emerald-400"
          title={isPlaying ? 'Pause Background' : 'Play Background'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={cycleSpeed}
          className="px-1.5 py-0.5 hover:bg-emerald-500/20 rounded text-emerald-300 font-mono text-[10px]"
          title="Change Playback Speed"
        >
          {playbackSpeed}x
        </button>
      </div>
    </div>
  );
};

export default ImageSequenceBackground;
