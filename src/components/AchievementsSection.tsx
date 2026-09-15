import React from 'react';
import { Trophy, Award, Banknote } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  // Separate the 6 primary strongest achievements from secondary verified participations
  const primaryIds = [
    'ramanujan-life-works',
    'social-media-students',
    'ocular-ai-symposium',
    'ramanujan-math-competition',
    'puduvai-top70-2026',
    'puduvai-grant-2026',
  ];

  const primaryAchievements = primaryIds
    .map((id) => ACHIEVEMENTS_DATA.find((item) => item.id === id))
    .filter(Boolean);

  const secondaryAchievements = ACHIEVEMENTS_DATA.filter(
    (item) => !primaryIds.includes(item.id)
  );

  return (
    <section
      id="achievements"
      className="w-full px-4 md:px-8 lg:px-12 py-16 bg-[#11121f] border-t border-[#1d1f2b]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#282936] pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#ffb1c3] text-xs font-semibold uppercase tracking-widest">
              <Trophy className="w-4 h-4 text-[#ffb1c3] shrink-0" aria-hidden="true" />
              <span>HONORS &amp; RECOGNITION</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e2e1f3] mt-1 font-normal tracking-tight">
              Achievements
            </h2>
          </div>
          <div className="flex flex-col gap-1 max-w-md">
            <p className="text-sm text-[#cbc3d5] font-light leading-relaxed">
              Competitive honors and mathematical milestones demonstrating problem-solving rigor, initiative, and technical merit.
            </p>
            <span className="font-label-handwritten text-sm text-[#ffb1c3]">
              ✦ Verified academic &amp; technical competitions
            </span>
          </div>
        </div>

        {/* Strongest Achievements — Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {primaryAchievements.map((item) => {
            if (!item) return null;

            // Subtle color accent based on achievement type
            const isFirstPlace = item.badge?.includes('1st');
            const isSecondPlace = item.badge?.includes('2nd');
            const isGrant = item.badge?.includes('Grant') || item.badge?.includes('₹');

            const badgeColor = isFirstPlace
              ? 'bg-[#ffb1c3]/15 text-[#ffb1c3] border-[#ffb1c3]/40'
              : isSecondPlace
              ? 'bg-[#cfbdff]/15 text-[#cfbdff] border-[#cfbdff]/40'
              : isGrant
              ? 'bg-[#66d9ca]/15 text-[#66d9ca] border-[#66d9ca]/40'
              : 'bg-[#1d1f2b] text-[#e8ddff] border-[#cfbdff]/30';

            return (
              <div
                key={item.id}
                className="p-4 sm:p-5 rounded-xl bg-[#1d1f2b]/90 border border-[#333441] shadow-md hover:border-[#cfbdff]/40 hover:bg-[#282936]/70 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle cosmic constellation marker */}
                <div className="flex flex-col gap-3">
                  {/* Top Bar: Placement Chip + Year */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold border ${badgeColor}`}
                    >
                      {isGrant ? (
                        <Banknote className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      ) : isFirstPlace || isSecondPlace ? (
                        <Trophy className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      ) : (
                        <Award className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      )}
                      <span>{item.badge}</span>
                    </span>

                    <span className="text-[11px] font-mono text-[#948e9e]">
                      {item.year}
                    </span>
                  </div>

                  {/* Title & Event Info */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <h3 className="font-title-editorial text-lg sm:text-xl text-[#e2e1f3] font-medium leading-snug group-hover:text-[#cfbdff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#cbc3d5] font-light leading-relaxed">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Subtle Node Indicator */}
                <div className="mt-4 pt-3 border-t border-[#282936] flex items-center justify-between text-[11px] font-mono text-[#948e9e]">
                  <span className="flex items-center gap-1 text-[#66d9ca]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#66d9ca]"></span>
                    <span>Verified Placement</span>
                  </span>
                  <span className="text-[#cfbdff]">✦</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Participations — Compact Scannable Row */}
        {secondaryAchievements.length > 0 && (
          <div className="mt-2 pt-4 border-t border-[#282936]/80 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#948e9e] uppercase tracking-wider">
              <span className="text-[#cfbdff]">○</span>
              <span>Additional Verified Challenges &amp; Competitions</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {secondaryAchievements.map((sec) => (
                <div
                  key={sec.id}
                  className="px-3.5 py-2.5 rounded-lg bg-[#191b27]/80 border border-[#282936] hover:border-[#333441] flex flex-col justify-between gap-1 text-xs transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-[#e2e1f3] truncate">
                      {sec.title}
                    </span>
                    <span className="text-[10px] font-mono text-[#948e9e] shrink-0">
                      {sec.year}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-1 text-[11px] text-[#cbc3d5]/80">
                    <span className="truncate">{sec.organization}</span>
                    <span className="text-[#cfbdff] font-mono shrink-0">{sec.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
