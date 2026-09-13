import React, { useState } from 'react';
import { UNIVERSE_NODES } from '../data/portfolioData';

export const UniverseSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeNode = UNIVERSE_NODES[selectedIndex];

  const getIconForId = (id: string) => {
    switch (id) {
      case 'code': return 'code';
      case 'ai': return 'neurology';
      case 'web': return 'public';
      case 'data': return 'database';
      case 'puzzles': return 'extension';
      case 'creativity': return 'palette';
      case 'projects-universe': return 'rocket_launch';
      case 'curiosity': return 'explore';
      default: return 'stars';
    }
  };

  return (
    <section
      id="universe"
      className="relative w-full px-4 md:px-8 lg:px-12 py-10 sm:py-12 bg-[#0c0d19]/60 border-t border-b border-[#1d1f2b]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-6 sm:gap-7">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <div className="inline-flex items-center gap-1.5 text-[#ffb1c3] text-xs font-semibold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[15px]">stars</span>
            <span>Constellation of Passions</span>
          </div>
          <h2 className="font-headline-sm text-2xl sm:text-3xl text-[#e2e1f3] italic font-normal">
            Explore My Universe
          </h2>
          <p className="text-xs sm:text-sm text-[#cbc3d5] max-w-lg">
            Click any orbiting node below to inspect that dimension of my engineering mind &amp; creative journey.
          </p>
        </div>

        {/* Orbital Node Grid + Detail Reader */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: 8 Interactive Orbital Bubble Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {UNIVERSE_NODES.map((node, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`group text-left p-3 sm:p-3.5 rounded-xl transition-all duration-300 shadow-sm flex items-start gap-3 border ${
                    isSelected
                      ? 'bg-[#282936] border-[#cfbdff]/70 shadow-[0_0_12px_rgba(207,189,255,0.12)] ring-1 ring-[#cfbdff]/50'
                      : 'bg-[#1d1f2b]/70 hover:bg-[#282936]/80 border-[#333441]/60'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shrink-0 ${
                      isSelected ? 'bg-[#333441] text-[#cfbdff]' : 'bg-[#11121f] text-[#66d9ca]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[19px]">
                      {getIconForId(node.id)}
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs sm:text-sm text-[#e2e1f3] font-semibold truncate">
                        {node.title.split(',')[0]}
                      </span>
                      <span className="text-xs">{node.emoji}</span>
                    </div>
                    <span className="text-[11px] text-[#cbc3d5] truncate">
                      {node.shortSubtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Central Inspection Hub */}
          <div className="lg:col-span-5 relative p-4 sm:p-5 md:p-6 rounded-xl bg-[#282936]/90 border border-[#494553]/70 backdrop-blur-xl shadow-xl min-h-[300px] flex flex-col justify-between">
            {/* Top Bar with category & handwritten label */}
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-[#9c7cf6]/20 border border-[#9c7cf6]/30 text-[#cfbdff] text-[10px] font-semibold uppercase tracking-wider">
                {activeNode.category}
              </span>
              <span className="font-label-handwritten text-lg text-[#ffb1c3] transform -rotate-3 select-none">
                “How I think” ♡
              </span>
            </div>

            {/* Dynamic Body */}
            <div className="my-4 flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{activeNode.emoji}</span>
                <h3 className="font-title-editorial text-lg sm:text-xl text-[#e2e1f3] font-medium leading-snug">
                  {activeNode.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#cbc3d5] leading-relaxed font-light">
                {activeNode.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeNode.tags.map((tag, idx) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 rounded-full bg-[#11121f] text-[11px] font-medium border border-[#333441] ${activeNode.tagColors[idx % activeNode.tagColors.length]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Micro Note Footer */}
            <div className="pt-3 border-t border-[#333441]/70 bg-[#0c0d19]/60 p-3 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[#cbc3d5]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#66d9ca] text-[16px]">
                  verified
                </span>
                <span className="text-xs">
                  {activeNode.footer}
                </span>
              </div>
              <a
                href="#projects"
                className="text-[#cfbdff] hover:text-[#66d9ca] text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>View Projects</span>
                <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
