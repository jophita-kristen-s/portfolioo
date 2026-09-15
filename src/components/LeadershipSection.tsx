import React from 'react';
import { Users } from 'lucide-react';
import { LEADERSHIP_DATA } from '../data/portfolioData';

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership"
      className="w-full px-4 md:px-8 lg:px-12 py-10 sm:py-12 bg-[#0c0d19]/80 border-t border-[#1d1f2b]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-5 sm:gap-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-[#282936] pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#cfbdff] text-xs font-semibold uppercase tracking-widest">
              <Users className="w-4 h-4 text-[#cfbdff] shrink-0" aria-hidden="true" />
              <span>CAMPUS &amp; COMMUNITY INITIATIVES</span>
            </div>
            <h2 className="font-headline-sm text-xl sm:text-2xl text-[#e2e1f3] mt-1 font-normal tracking-tight">
              Leadership &amp; Involvement
            </h2>
          </div>
          <div className="flex flex-col gap-0.5 max-w-md">
            <p className="text-xs sm:text-sm text-[#cbc3d5] font-light leading-relaxed">
              Active student stewardship, organizing technical platforms, and facilitating career preparation sessions.
            </p>
            <span className="font-label-handwritten text-xs text-[#66d9ca]">
              ✦ Collaborative initiative &amp; peer mentoring
            </span>
          </div>
        </div>

        {/* 4 Leadership Cards — Compact, Distinct from Awards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {LEADERSHIP_DATA.map((lead) => (
            <div
              key={lead.id}
              className="p-4 rounded-xl bg-[#1d1f2b]/80 border border-[#333441] shadow-sm hover:border-[#66d9ca]/40 hover:bg-[#282936]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex flex-col gap-3">
                {/* Year Badge & Role Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#11121f] text-[#66d9ca] text-xs font-mono font-medium border border-[#333441]">
                    {lead.period}
                  </span>
                  <span className="text-[11px] font-mono text-[#948e9e]">
                    {lead.impactMetric}
                  </span>
                </div>

                {/* Role and Organization */}
                <div className="flex flex-col gap-1 pt-1">
                  <div className="flex items-start gap-2">
                    <span className="text-[#66d9ca] text-xs mt-1">✦</span>
                    <h3 className="font-title-editorial text-lg text-[#e2e1f3] font-medium leading-snug group-hover:text-[#66d9ca] transition-colors">
                      {lead.role}
                    </h3>
                  </div>
                  <p className="text-xs text-[#cbc3d5] font-light pl-4 leading-relaxed">
                    {lead.entity}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Node Marker */}
              <div className="mt-4 pt-3 border-t border-[#282936] flex items-center justify-between text-[11px] font-mono text-[#948e9e]">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cfbdff]/70"></span>
                  <span>Student Leadership</span>
                </span>
                <span className="text-[#948e9e]">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
