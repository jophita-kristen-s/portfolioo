import React from 'react';
import cosmicGalaxyBg from '../../assets/images/cosmic_galaxy_bg.jpg';

interface NebulaLayerProps {
  scrollProgress?: number;
  mouseX?: number;
  mouseY?: number;
}

export const NebulaLayer: React.FC<NebulaLayerProps> = ({
  scrollProgress = 0,
  mouseX = 0,
  mouseY = 0,
}) => {
  // Parallax shifts for multi-depth cosmic perspective
  const deepShiftX = mouseX * 8;
  const deepShiftY = mouseY * 8 - scrollProgress * 50;

  const midShiftX = mouseX * -15;
  const midShiftY = mouseY * -15 - scrollProgress * 90;

  const frontShiftX = mouseX * 22;
  const frontShiftY = mouseY * 22 - scrollProgress * 130;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none w-full h-full">
      {/* =========================================================================
          LAYER 1: DEEP SPACE VOID FOUNDATION
          Deepest midnight void (#01030d to #030822) with astrophotography baseline
         ========================================================================= */}
      <div className="absolute inset-0 bg-[#01030d]" />

      {/* =========================================================================
          LAYER 2: PHOTOREALISTIC HIGH-DEFINITION GALAXY & MILKY WAY NEBULA RIDGE
          Directly provides the huge visible nebula, deep blue/purple clouds,
          dense galactic dust lanes, and celestial objects matching the reference image.
         ========================================================================= */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${deepShiftX}px, ${deepShiftY}px, 0) scale(1.05)`,
        }}
      >
        <img
          src={cosmicGalaxyBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-95 filter contrast-125 brightness-110"
          loading="eager"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.triedFallback) {
              target.dataset.triedFallback = 'true';
              target.src = '/images/cosmic_galaxy_bg.jpg';
            }
          }}
        />
      </div>

      {/* =========================================================================
          LAYER 3: LUMINOUS VOLUMETRIC GAS CLOUDS (EMISSION NEBULAE)
          High-opacity, multi-chromatic gas clouds that enhance the vibrant purple,
          deep electric blue, violet, and glowing magenta along the diagonal ridge.
         ========================================================================= */}

      {/* 3A: Top-Left to Center Cosmic Sweeping Ridge (Glowing Violet & Magenta) */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[90vw] h-[85vh] rounded-[48%] opacity-75 blur-[70px] mix-blend-screen pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${midShiftX}px, ${midShiftY}px, 0) rotate(-18deg)`,
          background: `
            radial-gradient(ellipse 65% 55% at 30% 40%, rgba(139, 92, 246, 0.65) 0%, rgba(109, 40, 217, 0.45) 45%, transparent 75%),
            radial-gradient(ellipse 55% 45% at 60% 55%, rgba(192, 38, 211, 0.58) 0%, rgba(126, 34, 206, 0.35) 50%, transparent 80%),
            radial-gradient(circle at 45% 45%, rgba(217, 70, 239, 0.45) 0%, transparent 60%)
          `,
        }}
      />

      {/* 3B: Mid-Right to Bottom-Center Galactic Stream (Electric Blue & Cyan Gas Cloud) */}
      <div
        className="absolute top-[15%] right-[-10%] w-[85vw] h-[95vh] rounded-[52%] opacity-80 blur-[80px] mix-blend-screen pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${frontShiftX}px, ${frontShiftY}px, 0) rotate(22deg)`,
          background: `
            radial-gradient(ellipse 70% 50% at 50% 45%, rgba(37, 99, 235, 0.65) 0%, rgba(29, 78, 216, 0.48) 45%, transparent 80%),
            radial-gradient(ellipse 50% 60% at 40% 60%, rgba(6, 182, 212, 0.55) 0%, rgba(14, 165, 233, 0.35) 50%, transparent 75%),
            radial-gradient(circle at 65% 40%, rgba(168, 85, 247, 0.5) 0%, transparent 65%)
          `,
        }}
      />

      {/* 3C: Center-Right Glowing Nebula Core (Dense Star-Forming Cluster) */}
      <div
        className="absolute top-[35%] right-[12%] w-[45vw] h-[45vh] rounded-full opacity-70 blur-[50px] mix-blend-color-dodge pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${midShiftX * 1.2}px, ${midShiftY * 1.2}px, 0)`,
          background: `
            radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.7) 0%, rgba(56, 189, 248, 0.45) 40%, transparent 70%)
          `,
        }}
      />

      {/* 3D: Bottom Deep Cosmic Filament (Passing into lower sections) */}
      <div
        className="absolute bottom-[-10%] left-[5%] w-[85vw] h-[65vh] rounded-[45%] opacity-65 blur-[85px] mix-blend-screen pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${frontShiftX * 0.8}px, ${frontShiftY * 0.8}px, 0) rotate(-10deg)`,
          background: `
            radial-gradient(ellipse 70% 55% at 50% 50%, rgba(124, 58, 237, 0.55) 0%, rgba(30, 64, 175, 0.4) 50%, transparent 80%),
            radial-gradient(circle at 30% 60%, rgba(217, 70, 239, 0.4) 0%, transparent 65%)
          `,
        }}
      />

      {/* =========================================================================
          LAYER 4: INTERSTELLAR DARK DUST LANES (BOK GLOBULES & FILAMENT SHADOWS)
          These dark absorption bands are what create authentic astrophotography
          turbulence and enormous cosmic scale.
         ========================================================================= */}
      <div
        className="absolute top-[20%] left-[22%] w-[60vw] h-[45vh] rounded-[55%] opacity-60 blur-[35px] pointer-events-none mix-blend-multiply"
        style={{
          transform: `translate3d(${deepShiftX * 0.6}px, ${deepShiftY * 0.6}px, 0) rotate(-24deg)`,
          background: 'radial-gradient(ellipse at center, #01030d 0%, rgba(1, 3, 13, 0.9) 60%, transparent 90%)',
        }}
      />

      <div
        className="absolute top-[50%] right-[18%] w-[45vw] h-[35vh] rounded-[60%] opacity-55 blur-[30px] pointer-events-none mix-blend-multiply"
        style={{
          transform: `translate3d(${deepShiftX * 0.4}px, ${deepShiftY * 0.4}px, 0) rotate(15deg)`,
          background: 'radial-gradient(ellipse at center, #01030d 0%, rgba(2, 6, 23, 0.85) 55%, transparent 85%)',
        }}
      />
    </div>
  );
};
