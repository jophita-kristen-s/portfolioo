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
      className="relative w-full px-4 md:px-8 lg:px-12 py-20 bg-[#0c0d19]/60 border-t border-b border-[#1d1f2b]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="inline-flex items-center gap-1.5 text-[#ffb1c3] text-xs font-semibold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">stars</span>
            <span>Constellation of Passions</span>
          </div>
          <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-[#e2e1f3] italic font-normal">
            Explore My Universe
          </h2>
          <p className="text-sm md:text-base text-[#cbc3d5] max-w-lg">
            Click any orbiting node below to inspect that dimension of my engineering mind &amp; creative journey.
          </p>
        </div>

        {/* Orbital Node Grid + Detail Reader */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 8 Interactive Orbital Bubble Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {UNIVERSE_NODES.map((node, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`group text-left p-4 rounded-xl transition-all duration-300 shadow-md flex items-start gap-3 border ${
                    isSelected
                      ? 'bg-[#282936] border-[#cfbdff]/70 shadow-[0_0_15px_rgba(207,189,255,0.15)] ring-1 ring-[#cfbdff]/50'
                      : 'bg-[#1d1f2b]/70 hover:bg-[#282936]/80 border-[#333441]/60'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isSelected ? 'bg-[#333441] text-[#cfbdff]' : 'bg-[#11121f] text-[#66d9ca]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[22px]">
                      {getIconForId(node.id)}
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm sm:text-base text-[#e2e1f3] font-semibold truncate">
                        {node.title.split(',')[0]}
                      </span>
                      <span className="text-xs">{node.emoji}</span>
                    </div>
                    <span className="text-xs text-[#cbc3d5] truncate">
                      {node.shortSubtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Central Inspection Hub */}
          <div className="lg:col-span-5 relative p-5 sm:p-6 md:p-8 rounded-2xl bg-[#282936]/90 border border-[#494553]/70 backdrop-blur-xl shadow-2xl min-h-[340px] sm:min-h-[380px] flex flex-col justify-between">
            {/* Top Bar with category & handwritten label */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#9c7cf6]/20 border border-[#9c7cf6]/30 text-[#cfbdff] text-[11px] font-semibold uppercase tracking-wider">
                {activeNode.category}
              </span>
              <span className="font-label-handwritten text-xl text-[#ffb1c3] transform -rotate-3 select-none">
                “How I think” ♡
              </span>
            </div>

            {/* Dynamic Body */}
            <div className="my-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{activeNode.emoji}</span>
                <h3 className="font-title-editorial text-xl sm:text-2xl text-[#e2e1f3] font-medium leading-snug">
                  {activeNode.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#cbc3d5] leading-relaxed font-light">
                {activeNode.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeNode.tags.map((tag, idx) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 rounded-full bg-[#11121f] text-xs font-medium border border-[#333441] ${activeNode.tagColors[idx % activeNode.tagColors.length]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Micro Note Footer */}
            <div className="pt-4 border-t border-[#333441]/70 bg-[#0c0d19]/60 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#cbc3d5]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#66d9ca] text-[18px]">
                  verified
                </span>
                <span className="text-xs sm:text-sm">
                  {activeNode.footer}
                </span>
              </div>
              <a
                href="#projects"
                className="text-[#cfbdff] hover:text-[#66d9ca] text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>View Projects</span>
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
