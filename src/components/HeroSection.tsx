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

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
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
        {/* Left Column: Focused Professional Identity & Intro Hierarchy */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5 z-10">
          
          {/* Greeting Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282936]/80 text-[#cfbdff] text-xs font-semibold tracking-wider uppercase border border-[#494553]/50 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#66d9ca] animate-pulse"></span>
            <span>Portfolio &amp; Engineering Journal ✨</span>
          </div>

          {/* 1. Name */}
          <div className="flex flex-col gap-1">
            <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-[#e2e1f3] tracking-tight font-normal">
              JOPHITA KRISTEN{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cfbdff] via-[#ffb1c3] to-[#66d9ca]">
                S.
              </span>
            </h1>

            {/* 2. Professional Identity / Field */}
            <div className="flex flex-col gap-1 mt-1">
              <p className="font-headline-sm text-lg sm:text-xl md:text-2xl text-[#66d9ca] font-medium tracking-wide">
                Final-Year B.Tech Information Science &amp; Engineering Student
              </p>
              <div className="flex items-center gap-2 text-[#cbc3d5] text-xs sm:text-sm">
                <span className="material-symbols-outlined text-[#cfbdff] text-[17px]">
                  school
                </span>
                <span>Women's Engineering College, Lawspet, Puducherry • CGPA 8.99</span>
              </div>
            </div>

            {/* Primary Positioning Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-[#1d1f2b] border border-[#cfbdff]/40 text-[#cfbdff] text-xs font-mono font-medium tracking-wide shadow-sm">
                AI/ML
              </span>
              <span className="text-[#494553]">•</span>
              <span className="px-3 py-1 rounded-full bg-[#1d1f2b] border border-[#66d9ca]/40 text-[#66d9ca] text-xs font-mono font-medium tracking-wide shadow-sm">
                Computer Vision
              </span>
              <span className="text-[#494553]">•</span>
              <span className="px-3 py-1 rounded-full bg-[#1d1f2b] border border-[#ffb1c3]/40 text-[#ffb1c3] text-xs font-mono font-medium tracking-wide shadow-sm">
                Full-Stack Development
              </span>
              <span className="text-[#494553]">•</span>
              <span className="px-3 py-1 rounded-full bg-[#1d1f2b] border border-[#e8ddff]/40 text-[#e8ddff] text-xs font-mono font-medium tracking-wide shadow-sm">
                Explainable AI
              </span>
            </div>
          </div>

          {/* 3. Short 2–3 sentence introduction */}
          <p className="text-base sm:text-lg text-[#cbc3d5] max-w-xl leading-relaxed font-light">
            I’m a final-year Information Science &amp; Engineering student who enjoys turning complex problems into practical, explainable systems. My work spans AI/ML, computer vision, backend development, real-time applications, and robotics simulation.
          </p>

          {/* 4. Tagline & Journal Personality */}
          <div className="w-full max-w-xl p-3.5 sm:p-4 rounded-xl bg-[#1d1f2b]/90 border border-[#333441] shadow-md flex flex-col gap-2 relative overflow-hidden">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#cfbdff] via-[#ffb1c3] to-[#66d9ca]"></span>
              <p className="font-headline-sm text-base sm:text-lg text-[#e2e1f3] font-normal tracking-wide">
                “Give me a problem. I'll figure it out.”
              </p>
            </div>
            <div className="pl-3.5 flex items-center gap-2">
              <span className="font-label-handwritten text-lg sm:text-xl text-[#ffb1c3] tracking-wide select-none">
                Currently building, learning &amp; figuring things out ✦
              </span>
            </div>
          </div>

          {/* 5 & 6. Primary CTA (“View my work”) and Secondary CTA (“Get in touch”) */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#9c7cf6] to-[#6847bf] text-[#11121f] font-semibold text-sm sm:text-base shadow-xl shadow-[#9c7cf6]/25 hover:shadow-[#9c7cf6]/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>View my work</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#282936]/90 border border-[#494553]/80 text-[#e2e1f3] text-sm sm:text-base shadow-md hover:bg-[#373846] hover:text-[#cfbdff] hover:border-[#cfbdff]/40 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <span>Get in touch</span>
            </a>
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-[#cbc3d5] hover:text-[#cfbdff] text-xs sm:text-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[17px]">description</span>
              <span>Resume</span>
            </button>
          </div>

          {/* Telemetry Metric Strip */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-2 w-full max-w-md">
            <div className="bg-[#191b27]/80 border border-[#282936] p-3 rounded-xl shadow-sm">
              <div className="font-display-hero text-2xl sm:text-3xl font-bold text-[#cfbdff]">8.99</div>
              <div className="text-[11px] text-[#948e9e] uppercase tracking-wider font-semibold mt-0.5">Overall CGPA</div>
            </div>
            <div className="bg-[#191b27]/80 border border-[#282936] p-3 rounded-xl shadow-sm">
              <div className="font-display-hero text-2xl sm:text-3xl font-bold text-[#66d9ca]">18</div>
              <div className="text-[11px] text-[#948e9e] uppercase tracking-wider font-semibold mt-0.5">Projects</div>
            </div>
            <div className="bg-[#191b27]/80 border border-[#282936] p-3 rounded-xl shadow-sm">
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
