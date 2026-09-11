import React from 'react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section
      id="achievements"
      className="w-full px-4 md:px-8 lg:px-12 py-20 bg-[#11121f]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#ffb1c3] text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">military_tech</span>
              <span>Milestones &amp; Honors</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-[#e2e1f3] mt-1 font-normal">
              Achievements
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#cbc3d5] max-w-md font-light">
            Recognitions earned through algorithmic competition, national hackathons, and relentless academic dedication.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#1d1f2b]/80 border border-[#333441] shadow-xl flex flex-col justify-between hover:border-[#cfbdff]/50 hover:bg-[#282936]/90 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex flex-col gap-4">
                {/* Top Row: Year, Badge & Metric */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#11121f] text-[#cfbdff] text-xs font-semibold uppercase tracking-wider border border-[#333441]">
                    {item.year}
                  </span>
                  {item.metric && (
                    <span className="px-3 py-1 rounded-full bg-[#66d9ca]/10 text-[#66d9ca] text-xs font-semibold uppercase tracking-wider border border-[#66d9ca]/30">
                      {item.metric}
                    </span>
                  )}
                </div>

                {/* Title & Organization */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#282936] text-[#ffb1c3] flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[24px]">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-title-editorial text-2xl text-[#e2e1f3] font-medium leading-snug group-hover:text-[#cfbdff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#948e9e] mt-1 font-light">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {/* Description */}
                {item.description ? (
                  <p className="text-sm text-[#cbc3d5] font-light leading-relaxed pl-13">
                    {item.description}
                  </p>
                ) : null}
              </div>

              {/* Verified Ribbon */}
              <div className="pt-4 mt-6 border-t border-[#333441]/70 flex items-center justify-between text-xs text-[#948e9e]">
                <span className="flex items-center gap-1.5 text-[#66d9ca]">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Officially Commended</span>
                </span>
                <span className="font-label-handwritten text-base text-[#ffb1c3]">
                  {item.badge} ✦
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
