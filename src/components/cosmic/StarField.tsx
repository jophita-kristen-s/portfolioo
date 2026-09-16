import React, { useEffect, useRef } from 'react';

interface StarFieldProps {
  scrollProgress?: number;
  mouseX?: number;
  mouseY?: number;
}

interface RadiantStar {
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  size: number;
  color: string;
  spikeLength: number;
  pulseSpeed: number;
  delay: number;
}

// Key radiant stars with 4-point diffraction spikes placed strategically around the composition
// similar to JWST/Hubble astrophotography in the reference image
const RADIANT_STARS: RadiantStar[] = [
  { x: 50, y: 84, size: 4.0, color: '#bae6fd', spikeLength: 32, pulseSpeed: 4.0, delay: 0 },
  { x: 84, y: 22, size: 3.2, color: '#f3e8ff', spikeLength: 24, pulseSpeed: 4.5, delay: 1.2 },
  { x: 44, y: 15, size: 2.8, color: '#ffffff', spikeLength: 20, pulseSpeed: 3.8, delay: 0.8 },
  { x: 22, y: 36, size: 3.0, color: '#c4b5fd', spikeLength: 22, pulseSpeed: 5.2, delay: 1.9 },
  { x: 88, y: 42, size: 2.8, color: '#a5f3fc', spikeLength: 20, pulseSpeed: 4.1, delay: 2.4 },
  { x: 14, y: 72, size: 3.2, color: '#93c5fd', spikeLength: 24, pulseSpeed: 3.6, delay: 0.4 },
  { x: 68, y: 62, size: 2.6, color: '#fbcfe8', spikeLength: 18, pulseSpeed: 4.8, delay: 1.6 },
  { x: 30, y: 92, size: 2.4, color: '#ddd6fe', spikeLength: 16, pulseSpeed: 4.3, delay: 2.8 },
];

export const StarField: React.FC<StarFieldProps> = ({ scrollProgress = 0, mouseX = 0, mouseY = 0 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Detect low-power or mobile devices
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 650 : 1600;

    interface Star {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      alpha: number;
      twinkleSpeed: number;
      twinklePhase: number;
      color: string;
      layer: number; // 1 = distant, 2 = mid, 3 = near
    }

    let stars: Star[] = [];

    // Natural stellar color palette (O, B, A, F, G stellar spectral classes + cosmic dust tinting)
    const stellarColors = [
      '#ffffff', // Pure white
      '#e0f2fe', // Sky / blue-white
      '#bae6fd', // Cyan tinted
      '#ddd6fe', // Lavender / violet
      '#f3e8ff', // Soft purple
      '#fef3c7', // Warm amber / gold
      '#fed7aa', // Faint coral
      '#a5f3fc', // Electric cyan
    ];

    const generateStars = (w: number, h: number) => {
      stars = [];
      // Use pseudo-random distribution with clustering along the galactic plane
      for (let i = 0; i < starCount; i++) {
        // Slight density increase along diagonal galactic lane
        const rx = Math.random();
        const ry = Math.random();

        const layer = Math.random() < 0.65 ? 1 : Math.random() < 0.9 ? 2 : 3;
        const size = layer === 1 
          ? Math.random() * 0.75 + 0.35 
          : layer === 2 
          ? Math.random() * 0.9 + 0.8 
          : Math.random() * 1.2 + 1.4;

        const baseAlpha = layer === 1 
          ? Math.random() * 0.45 + 0.2 
          : layer === 2 
          ? Math.random() * 0.45 + 0.45 
          : Math.random() * 0.35 + 0.65;

        stars.push({
          x: rx * w,
          y: ry * h,
          size,
          baseAlpha,
          alpha: baseAlpha,
          twinkleSpeed: (Math.random() * 0.015 + 0.005) * (layer === 3 ? 1.4 : 0.8),
          twinklePhase: Math.random() * Math.PI * 2,
          color: stellarColors[Math.floor(Math.random() * stellarColors.length)],
          layer,
        });
      }
    };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      generateStars(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Render loop with subtle twinkling
    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Subtle parallax shift based on mouse and scroll
      const pX1 = mouseX * 8;
      const pY1 = mouseY * 8 - (scrollProgress * 25);
      const pX2 = mouseX * 16;
      const pY2 = mouseY * 16 - (scrollProgress * 50);

      // Draw all stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.twinklePhase += s.twinkleSpeed;
        const twinkle = Math.sin(s.twinklePhase) * 0.35;
        const currentAlpha = Math.max(0.1, Math.min(1, s.baseAlpha + twinkle));

        const offsetX = s.layer === 1 ? pX1 * 0.5 : s.layer === 2 ? pX1 : pX2;
        const offsetY = s.layer === 1 ? pY1 * 0.5 : s.layer === 2 ? pY1 : pY2;

        let posX = (s.x + offsetX) % width;
        let posY = (s.y + offsetY) % height;
        if (posX < 0) posX += width;
        if (posY < 0) posY += height;

        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentAlpha;

        if (s.size > 1.6) {
          // Soft radial glow for larger stars
          ctx.beginPath();
          ctx.arc(posX, posY, s.size * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = currentAlpha * 0.25;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(posX, posY, s.size, 0, Math.PI * 2);
          ctx.globalAlpha = currentAlpha;
          ctx.fill();
        } else {
          // Pinprick stars
          ctx.fillRect(posX - s.size / 2, posY - s.size / 2, s.size, s.size);
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY, scrollProgress]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Dynamic Starfield Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none"
      />

      {/* Prominent Radiant JWST/Hubble-Style 4-Point Diffraction-Spike Stars */}
      {RADIANT_STARS.map((star, idx) => (
        <div
          key={idx}
          className="absolute pointer-events-none select-none transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: `radiant-star-pulse ${star.pulseSpeed}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        >
          {/* Central Bright Stellar Core */}
          <div
            className="rounded-full relative"
            style={{
              width: `${star.size * 2}px`,
              height: `${star.size * 2}px`,
              backgroundColor: star.color,
              boxShadow: `0 0 10px ${star.color}, 0 0 22px rgba(207, 189, 255, 0.7)`,
            }}
          />

          {/* Horizontal Diffraction Ray */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80"
            style={{
              width: `${star.spikeLength * 2}px`,
              height: '1px',
              background: `linear-gradient(90deg, transparent 0%, ${star.color} 50%, transparent 100%)`,
              boxShadow: `0 0 4px ${star.color}`,
            }}
          />

          {/* Vertical Diffraction Ray */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80"
            style={{
              width: '1px',
              height: `${star.spikeLength * 2}px`,
              background: `linear-gradient(180deg, transparent 0%, ${star.color} 50%, transparent 100%)`,
              boxShadow: `0 0 4px ${star.color}`,
            }}
          />

          {/* Subtle 45° Diagonal Minor Rays for Maximum Astrophotography Authenticity */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 rotate-45"
            style={{
              width: `${star.spikeLength * 1.1}px`,
              height: '0.8px',
              background: `linear-gradient(90deg, transparent 0%, ${star.color} 50%, transparent 100%)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};
