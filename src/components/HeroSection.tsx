import React from 'react';
import { HERO_IMAGE_URL } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const scrollToUniverse = (e: React.MouseEvent) => {
    e.preventDefault();
    const universeSection = document.getElementById('universe');
    if (universeSection) {
      universeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden px-4 md:px-8 lg:px-12 pt-8 pb-20 lg:pb-28"
    >
      {/* Atmospheric subtle stardust glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#9c7cf6]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ffb1c3]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & Polymath Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 z-10">
          
          {/* Greeting Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282936]/80 text-[#cfbdff] text-xs font-semibold tracking-wider uppercase border border-[#494553]/50 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#66d9ca] animate-pulse"></span>
            <span>Hello, I'm ✨</span>
          </div>

          {/* Expressive Editorial Name */}
          <div className="flex flex-col gap-1">
            <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-[58px] leading-[1.15] text-[#e2e1f3] tracking-tight font-normal">
              Jophita Kristen{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cfbdff] via-[#ffb1c3] to-[#66d9ca]">
                S
              </span>
            </h1>
            <p className="font-headline-sm text-xl sm:text-2xl text-[#66d9ca] font-medium tracking-wide mt-1">
              Information Science &amp; Engineering
            </p>
            <div className="flex items-center gap-2 text-[#cbc3d5] text-sm mt-1">
              <span className="material-symbols-outlined text-[#cfbdff] text-[18px]">
                school
              </span>
              <span>Women's Engineering College, Lawspet, Puducherry</span>
            </div>
          </div>

          {/* 4 Personality Badges */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <span className="px-3 py-1 rounded-full bg-[#1d1f2b]/80 border border-[#333441] text-[#cfbdff] text-xs font-semibold tracking-wider uppercase shadow-sm hover:border-[#cfbdff]/50 transition-colors">
              ✦ Polymath
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1d1f2b]/80 border border-[#333441] text-[#66d9ca] text-xs font-semibold tracking-wider uppercase shadow-sm hover:border-[#66d9ca]/50 transition-colors">
              ✦ Problem Solver
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1d1f2b]/80 border border-[#333441] text-[#ffb1c3] text-xs font-semibold tracking-wider uppercase shadow-sm hover:border-[#ffb1c3]/50 transition-colors">
              ✦ Dreamer
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1d1f2b]/80 border border-[#333441] text-[#e8ddff] text-xs font-semibold tracking-wider uppercase shadow-sm hover:border-[#e8ddff]/50 transition-colors">
              ✦ Doer
            </span>
          </div>

          {/* Large Handwritten Script Quote */}
          <div className="relative pl-4 my-1">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#cfbdff] via-[#ffb1c3] to-[#66d9ca] rounded-full"></div>
            <p className="font-label-handwritten text-2xl sm:text-3xl text-[#ffb1c3] tracking-wide select-none leading-tight py-1">
              “Give me a problem. I'll figure it out. ♡”
            </p>
          </div>

          {/* Bio Paragraph */}
          <p className="text-base sm:text-lg text-[#cbc3d5] max-w-xl leading-relaxed font-light">
            I'm a curious mind with a passion for technology, creativity, and continuous learning. I love building solutions, solving complex puzzles, exploring interstellar ideas, and turning pure concepts into real-world impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#universe"
              onClick={scrollToUniverse}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#9c7cf6] to-[#6847bf] text-[#11121f] font-semibold text-sm sm:text-base shadow-xl shadow-[#9c7cf6]/25 hover:shadow-[#9c7cf6]/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Explore My World</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#282936]/90 border border-[#494553]/60 text-[#e2e1f3] text-sm sm:text-base shadow-md hover:bg-[#373846] hover:text-[#cfbdff] hover:border-[#cfbdff]/40 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span>View Resume</span>
            </button>
          </div>

          {/* Telemetry Metric Strip */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 w-full max-w-md">
            <div className="bg-[#191b27]/80 border border-[#282936] p-3.5 rounded-xl shadow-sm">
              <div className="font-display-hero text-2xl sm:text-3xl font-bold text-[#cfbdff]">8.99</div>
              <div className="text-[11px] text-[#948e9e] uppercase tracking-wider font-semibold mt-0.5">Overall CGPA</div>
            </div>
            <div className="bg-[#191b27]/80 border border-[#282936] p-3.5 rounded-xl shadow-sm">
              <div className="font-display-hero text-2xl sm:text-3xl font-bold text-[#66d9ca]">18</div>
              <div className="text-[11px] text-[#948e9e] uppercase tracking-wider font-semibold mt-0.5">Engineered Projects</div>
            </div>
            <div className="bg-[#191b27]/80 border border-[#282936] p-3.5 rounded-xl shadow-sm">
              <div className="font-display-hero text-2xl sm:text-3xl font-bold text-[#ffb1c3]">SIH '26</div>
              <div className="text-[11px] text-[#948e9e] uppercase tracking-wider font-semibold mt-0.5">Hackathon Team</div>
            </div>
          </div>
        </div>

        {/* Right Column: Cosmic Arched Hero Window with Orbit Badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
          
          {/* Celestial Orbit Ring Elements (SVG backdrop) */}
          <div className="absolute -inset-10 flex items-center justify-center pointer-events-none opacity-40">
            <svg className="w-full h-full animate-orbit" viewBox="0 0 500 500">
              <circle
                cx="250"
                cy="250"
                r="230"
                fill="none"
                stroke="#9c7cf6"
                strokeWidth="1.2"
                strokeDasharray="4 8"
                className="opacity-40"
              />
              <circle
                cx="250"
                cy="250"
                r="170"
                fill="none"
                stroke="#66d9ca"
                strokeWidth="1"
                strokeDasharray="2 12"
                className="opacity-30"
              />
              <circle cx="250" cy="20" r="3" fill="#ffb1c3" className="shadow-[0_0_8px_#ffb1c3]" />
              <circle cx="420" cy="250" r="2.5" fill="#66d9ca" className="shadow-[0_0_6px_#66d9ca]" />
            </svg>
          </div>

          {/* Outer Frame: Arch Window Silhouette */}
          <div className="relative w-full max-w-[390px] sm:max-w-[420px] aspect-[4/5] rounded-t-[190px] rounded-b-3xl p-3 bg-[#282936]/60 border border-[#494553]/60 shadow-2xl backdrop-blur-xl group">
            
            {/* Corner Constellation Glow Nodes */}
            <span className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-[#cfbdff] shadow-[0_0_10px_#9c7cf6]"></span>
            <span className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-[#ffb1c3] shadow-[0_0_10px_#ffb1c3]"></span>
            <span className="absolute bottom-4 left-4 w-2.5 h-2.5 rounded-full bg-[#66d9ca] shadow-[0_0_10px_#66d9ca]"></span>
            <span className="absolute bottom-4 right-4 w-2.5 h-2.5 rounded-full bg-[#cfbdff] shadow-[0_0_10px_#9c7cf6]"></span>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-t-[178px] rounded-b-2xl overflow-hidden bg-[#0c0d19]">
              <img
                src={HERO_IMAGE_URL}
                alt="Jophita Kristen coding at midnight under an arched celestial moonlit window with coffee, camera, notes, and glowing screens"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Soft Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d19]/90 via-transparent to-[#0c0d19]/20 pointer-events-none"></div>

              {/* Coordinates strip */}
              <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-[#0c0d19]/80 border border-[#333441]/70 backdrop-blur-md shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#66d9ca] text-[18px]">terminal</span>
                  <span className="text-[11px] font-mono text-[#e2e1f3] tracking-wide">
                    COORDINATES: 11.9416° N, 79.8083° E
                  </span>
                </div>
                <span className="font-label-handwritten text-base text-[#ffb1c3] font-semibold select-none">
                  Puducherry ✦
                </span>
              </div>
            </div>

            {/* Orbiting Interactive Floating Badges */}
            {/* Badge 1: F1 */}
            <div className="absolute -top-3 -right-3 sm:-right-4 px-3.5 py-1.5 rounded-full bg-[#333441]/95 border border-[#ffb1c3]/40 backdrop-blur-md shadow-xl text-[#ffb1c3] flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transform rotate-3 hover:rotate-0 transition-transform">
              <span>Formula 1 Fan</span>
              <span className="text-sm">🏎️</span>
            </div>

            {/* Badge 2: Night Owl */}
            <div className="absolute top-1/3 -left-4 sm:-left-6 px-3.5 py-1.5 rounded-full bg-[#333441]/95 border border-[#cfbdff]/40 backdrop-blur-md shadow-xl text-[#cfbdff] flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transform -rotate-6 hover:rotate-0 transition-transform">
              <span className="text-sm">☕</span>
              <span>Night Owl Coder</span>
            </div>

            {/* Badge 3: Astronomy */}
            <div className="absolute bottom-24 -right-4 sm:-right-6 px-3.5 py-1.5 rounded-full bg-[#333441]/95 border border-[#66d9ca]/40 backdrop-blur-md shadow-xl text-[#66d9ca] flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transform rotate-6 hover:rotate-0 transition-transform">
              <span>Space &amp; Cosmos</span>
              <span className="text-sm">🪐</span>
            </div>

            {/* Badge 4: Visual Storyteller */}
            <div className="absolute -bottom-3 -left-2 px-3.5 py-1.5 rounded-full bg-[#333441]/95 border border-[#e8ddff]/40 backdrop-blur-md shadow-xl text-[#e8ddff] flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transform -rotate-3 hover:rotate-0 transition-transform">
              <span className="text-sm">📷</span>
              <span>Visual Storyteller</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
