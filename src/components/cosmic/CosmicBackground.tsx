import React, { useState, useEffect } from 'react';
import { StarField } from './StarField';
import { NebulaLayer } from './NebulaLayer';
import { CelestialObjects } from './CelestialObjects';
import { CosmicDust } from './CosmicDust';

export const CosmicBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    motionQuery.addEventListener('change', handleMotionChange);

    // Scroll progress tracker
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, scrollY / docHeight)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Mouse movement parallax (desktop only)
    let animationFrameId: number;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouch && !motionQuery.matches) {
      const handleMouseMove = (e: MouseEvent) => {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          // Normalize mouse coordinates (-1 to 1) from window center
          const normX = (e.clientX / window.innerWidth) * 2 - 1;
          const normY = (e.clientY / window.innerHeight) * 2 - 1;
          setMousePos({ x: normX, y: normY });
        });
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      return () => {
        motionQuery.removeEventListener('change', handleMotionChange);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
      };
    }

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeMouseX = reducedMotion ? 0 : mousePos.x;
  const activeMouseY = reducedMotion ? 0 : mousePos.y;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full overflow-hidden select-none"
    >
      {/* Layer 1 & 3: Deep Space Foundation + Volumetric Realistic Astrophotography Nebulae */}
      <NebulaLayer
        scrollProgress={scrollProgress}
        mouseX={activeMouseX}
        mouseY={activeMouseY}
      />

      {/* Layer 4 & 6: Celestial Objects (Spiral Galaxy, Atmospheric Planets, Moons, Orbits) */}
      <CelestialObjects
        scrollProgress={scrollProgress}
        mouseX={activeMouseX}
        mouseY={activeMouseY}
      />

      {/* Layer 2: Thousands of Real Astrophotography Stars + 4-Point Radiant Diffraction-Spike Stars */}
      <StarField
        scrollProgress={scrollProgress}
        mouseX={activeMouseX}
        mouseY={activeMouseY}
      />

      {/* Layer 5: Cosmic Dust Haze + Central Text-Readability Protection Mask */}
      <CosmicDust scrollProgress={scrollProgress} />
    </div>
  );
};
