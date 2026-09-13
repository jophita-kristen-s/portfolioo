import React from 'react';
import { HERO_IMAGE_URL } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToUniverse = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('universe');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden px-4 md:px-8 lg:px-12 pt-6 sm:pt-8 md:pt-10 pb-16 lg:pb-24"
    >
      {/* Subtle atmospheric stardust glows in background */}
      <div className="absolute top-8 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#9c7cf6]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-12 right-12 w-72 sm:w-80 h-72 sm:h-80 bg-[#ffb1c3]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Tiny scattered ambient stars */}
      <div className="absolute top-16 left-12 w-1.5 h-1.5 rounded-full bg-[#cfbdff]/60 pointer-events-none animate-pulse"></div>
      <div className="absolute top-28 right-1/3 w-1 h-1 rounded-full bg-[#66d9ca]/50 pointer-events-none"></div>
      <div className="absolute bottom-24 left-1/5 w-1 h-1 rounded-full bg-[#ffb1c3]/50 pointer-events-none animate-pulse"></div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Main Column: Strictly Structured Visual Reading Path (WHO → WHAT → PROOF → ACTION) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* 1. Name - The Strongest Visual Element */}
          <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] leading-[1.08] text-[#e2e1f3] tracking-tight font-normal">
            JOPHITA KRISTEN{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cfbdff] via-[#ffb1c3] to-[#66d9ca]">
              S.
            </span>
          </h1>

          {/* 2. Professional Identity - Immediately Visible Beneath Name */}
          <h2 className="font-headline-sm text-base sm:text-lg md:text-xl lg:text-2xl text-[#66d9ca] font-medium tracking-normal mt-2 sm:mt-2.5">
            Final-Year Information Science &amp; Engineering Student
          </h2>

          {/* 3. Focus Domains - What She Works With */}
          <div className="mt-2.5 sm:mt-3 flex flex-wrap items-center gap-x-2 sm:gap-x-2.5 gap-y-1 text-xs sm:text-sm font-mono text-[#cfbdff]/95 tracking-wide">
            <span>AI/ML</span>
            <span className="text-[#948e9e] font-sans">•</span>
            <span>Computer Vision</span>
            <span className="text-[#948e9e] font-sans">•</span>
            <span>Full-Stack Development</span>
            <span className="text-[#948e9e] font-sans">•</span>
            <span>Explainable AI</span>
          </div>

          {/* 4. Tagline - Personality without Overpowering Professional Identity */}
          <div className="mt-4 sm:mt-5 pl-3.5 border-l-2 border-[#ffb1c3]/70 py-1">
            <p className="font-headline-sm text-base sm:text-lg text-[#e2e1f3] font-normal tracking-wide italic">
              “Give me a problem. I'll figure it out.”
            </p>
          </div>

          {/* 5. Short Introduction */}
          <p className="mt-4 text-sm sm:text-base text-[#cbc3d5] max-w-xl leading-relaxed font-light">
            I’m a final-year Information Science &amp; Engineering student who enjoys turning complex problems into practical, explainable systems. My work spans AI/ML, computer vision, backend development, real-time applications, and robotics simulation.
          </p>

          {/* 6 & 7. Action CTA Buttons - Clear, Touch-Friendly & Stack Cleanly on Mobile */}
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9c7cf6] to-[#6847bf] text-[#11121f] font-semibold text-sm sm:text-base shadow-lg shadow-[#9c7cf6]/25 hover:shadow-[#9c7cf6]/40 hover:-translate-y-0.5 transition-all duration-300 min-h-[44px] w-full sm:w-auto"
            >
              <span>View My Work</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-sm sm:text-base font-semibold shadow-md hover:-translate-y-0.5 transition-all duration-300 min-h-[44px] w-full sm:w-auto cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#cfbdff]">description</span>
              <span>View Resume</span>
            </button>
          </div>

        </div>

        {/* Right Column: Clean Cosmic Arched Hero Window (Desktop & Tablet) */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
          
          {/* Subtle Celestial Orbit Rings */}
          <div className="absolute -inset-6 sm:-inset-8 flex items-center justify-center pointer-events-none opacity-30">
            <svg className="w-full h-full animate-orbit" viewBox="0 0 500 500">
              <circle
                cx="250"
                cy="250"
                r="220"
                fill="none"
                stroke="#9c7cf6"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="opacity-40"
              />
              <circle
                cx="250"
                cy="250"
                r="165"
                fill="none"
                stroke="#66d9ca"
                strokeWidth="1"
                strokeDasharray="2 10"
                className="opacity-30"
              />
              <circle cx="250" cy="30" r="2.5" fill="#ffb1c3" className="shadow-[0_0_6px_#ffb1c3]" />
              <circle cx="415" cy="250" r="2" fill="#66d9ca" className="shadow-[0_0_6px_#66d9ca]" />
            </svg>
          </div>

          {/* Outer Frame: Elegant Arched Window with Understated Cosmic Details */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-[4/5] rounded-t-[170px] rounded-b-2xl p-2.5 bg-[#282936]/40 border border-[#494553]/50 shadow-2xl backdrop-blur-md group">
            
            {/* Corner Constellation Glow Nodes */}
            <span className="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#cfbdff]/80 shadow-[0_0_8px_#9c7cf6]"></span>
            <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#ffb1c3]/80 shadow-[0_0_8px_#ffb1c3]"></span>
            <span className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#66d9ca]/80 shadow-[0_0_8px_#66d9ca]"></span>
            <span className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-[#cfbdff]/80 shadow-[0_0_8px_#9c7cf6]"></span>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-t-[160px] rounded-b-xl overflow-hidden bg-[#0c0d19]">
              <img
                src={HERO_IMAGE_URL}
                alt="Jophita Kristen coding under an arched celestial moonlit window"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Soft gradient overlay for depth and contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d19]/80 via-transparent to-[#0c0d19]/20 pointer-events-none"></div>

              {/* Minimalist Location Stamp */}
              <div className="absolute bottom-3 inset-x-3 px-3 py-1.5 rounded-lg bg-[#0c0d19]/80 border border-[#333441]/70 backdrop-blur-md shadow-md flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#66d9ca] animate-pulse"></span>
                  <span className="text-[10px] font-mono text-[#e2e1f3]/90 tracking-wide">
                    PUDUCHERRY, INDIA
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#cfbdff]">11.94° N</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Subtle Constellation Transition to Next Section */}
      <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center">
        <a
          href="#universe"
          onClick={scrollToUniverse}
          className="group flex flex-col items-center gap-2 text-[#948e9e] hover:text-[#cfbdff] transition-colors cursor-pointer"
          aria-label="Scroll to explore universe"
        >
          {/* Subtle constellation line with small stars */}
          <div className="relative flex flex-col items-center">
            {/* Top star node */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#cfbdff] shadow-[0_0_6px_#9c7cf6] transition-transform group-hover:scale-125"></span>
            
            {/* Constellation line */}
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#cfbdff]/50 via-[#66d9ca]/40 to-transparent my-1"></div>
            
            {/* Middle micro star */}
            <span className="w-1 h-1 rounded-full bg-[#66d9ca] opacity-70"></span>

            {/* Float chevron */}
            <div className="mt-1 transform group-hover:translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-[18px] text-[#cfbdff]/70 group-hover:text-[#cfbdff]">
                keyboard_arrow_down
              </span>
            </div>
          </div>

          <span className="text-[11px] font-mono tracking-widest uppercase text-[#948e9e] group-hover:text-[#cfbdff] transition-colors">
            Explore Universe
          </span>
        </a>
      </div>

    </section>
  );
};

