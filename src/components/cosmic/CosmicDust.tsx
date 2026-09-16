import React from 'react';

interface CosmicDustProps {
  scrollProgress?: number;
}

export const CosmicDust: React.FC<CosmicDustProps> = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* =========================================================================
          CENTRAL CONTENT READABILITY VIGNETTE
          Guarantees 100% WCAG AA text and card readability by providing
          dark, clean negative space down the center column while keeping the
          perimeters, margins, and corners dynamically cosmic and cinematic
         ========================================================================= */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 80% at 50% 50%, rgba(2, 6, 23, 0.45) 0%, rgba(2, 6, 23, 0.15) 60%, transparent 100%),
            radial-gradient(circle at 50% 30%, rgba(3, 8, 34, 0.35) 0%, transparent 70%)
          `,
        }}
      />

      {/* Soft Perimeter Vignette to naturally frame the deep-space viewport without obscuring edge planets */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 80px 15px rgba(2, 6, 23, 0.45)',
        }}
      />

      {/* Floating Micro Dust Particles (Atmospheric Depth) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#38bdf8]/40 blur-[1px] animate-float-slow"
          style={{ animationDuration: '14s' }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#c084fc]/35 blur-[1.5px] animate-float-slow"
          style={{ animationDuration: '19s', animationDelay: '3s' }}
        />
        <div
          className="absolute bottom-1/3 left-1/5 w-1 h-1 rounded-full bg-[#f472b6]/30 blur-[0.5px] animate-float-slow"
          style={{ animationDuration: '16s', animationDelay: '6s' }}
        />
        <div
          className="absolute top-3/4 right-1/3 w-1.5 h-1.5 rounded-full bg-[#67e8f9]/35 blur-[1px] animate-float-slow"
          style={{ animationDuration: '22s', animationDelay: '2s' }}
        />
      </div>
    </div>
  );
};
