import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [circlePos, setCirclePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let targetX = -100;
    let targetY = -100;
    let circleX = -100;
    let circleY = -100;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setDotPos({ x: targetX, y: targetY });

      // Check magnetic pull on buttons / interactive elements
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive =
        hoveredElement?.closest('button') ||
        hoveredElement?.closest('a') ||
        hoveredElement?.closest('.magnetic-target');

      if (isInteractive) {
        setIsHovered(true);
        // Magnetic pull center towards button center
        const rect = isInteractive.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        targetX = targetX + (centerX - targetX) * 0.35;
        targetY = targetY + (centerY - targetY) * 0.35;
      } else {
        setIsHovered(false);
      }
    };

    const animateCircle = () => {
      circleX += (targetX - circleX) * 0.15;
      circleY += (targetY - circleY) * 0.15;
      setCirclePos({ x: circleX, y: circleY });
      animationFrameId = requestAnimationFrame(animateCircle);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animateCircle);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      {/* 4px Center Dot */}
      <div
        className="magnetic-cursor-dot"
        style={{
          left: `${dotPos.x}px`,
          top: `${dotPos.y}px`,
        }}
      />
      {/* 20px Golden Circle with Magnetic Expansion */}
      <div
        className={`magnetic-cursor-circle ${isHovered ? 'active' : ''}`}
        style={{
          left: `${circlePos.x}px`,
          top: `${circlePos.y}px`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
