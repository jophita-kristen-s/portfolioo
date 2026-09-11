import React from 'react';
import { LEADERSHIP_DATA } from '../data/portfolioData';

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership"
      className="w-full px-4 md:px-8 lg:px-12 py-20 bg-[#0c0d19]/70 border-t border-[#1d1f2b]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#cfbdff] text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">groups</span>
              <span>People &amp; Stewardship</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-[#e2e1f3] mt-1 font-normal">
              Leadership &amp; Community
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#cbc3d5] max-w-md font-light">
            Guiding teams, mentoring peers, and organizing developer platforms where women in technology can build fearlessly.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_DATA.map((lead) => (
            <div
              key={lead.id}
              className="p-6 rounded-2xl bg-[#1d1f2b]/80 border border-[#333441] shadow-xl flex flex-col justify-between hover:border-[#66d9ca]/50 hover:bg-[#282936]/80 transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                {/* Period & Impact Metric */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#948e9e]">{lead.period}</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#66d9ca]/10 text-[#66d9ca] text-xs font-semibold uppercase tracking-wider border border-[#66d9ca]/30">
                    {lead.impactMetric}
                  </span>
                </div>

                {/* Role & Entity */}
                <div>
                  <h3 className="font-title-editorial text-2xl text-[#e2e1f3] font-medium leading-snug">
                    {lead.role}
                  </h3>
                  <p className="text-xs text-[#cfbdff] font-medium mt-1">
                    {lead.entity}
                  </p>
                </div>

                {/* Description */}
                {lead.description ? (
                  <p className="text-xs sm:text-sm text-[#cbc3d5] font-light leading-relaxed">
                    {lead.description}
                  </p>
                ) : null}

                {/* Responsibilities list */}
                {lead.responsibilities && lead.responsibilities.length > 0 ? (
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] uppercase tracking-wider text-[#948e9e] font-semibold">
                      Direct Contributions:
                    </div>
                    {lead.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#cbc3d5] font-light">
                        <span className="text-[#66d9ca] mt-0.5">•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Bottom footer stamp */}
              <div className="pt-6 mt-6 border-t border-[#333441]/60 flex items-center justify-between text-xs text-[#948e9e]">
                <span>Student Leadership</span>
                <span className="font-label-handwritten text-base text-[#ffb1c3]">
                  Community Impact ✦
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
