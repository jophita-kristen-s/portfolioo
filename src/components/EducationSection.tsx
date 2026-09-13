import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full px-4 md:px-8 lg:px-12 py-12 sm:py-14 bg-[#0c0d19]/80 border-t border-[#1d1f2b]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#66d9ca] text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">school</span>
              <span>Academic Trajectory</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e2e1f3] mt-1 font-normal">
              Education &amp; Foundations
            </h2>
          </div>
          <p className="text-sm text-[#cbc3d5] max-w-md font-light">
            Formal engineering rigor built on algorithmic foundations, mathematics, systems architecture, and machine learning.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={`${edu.institution}-${edu.degree}`}
              className="p-5 sm:p-7 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-[#cfbdff]/50 transition-all duration-300"
            >
              {/* Top ambient highlight */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
                  idx === 0 ? 'bg-[#9c7cf6]/10' : idx === 1 ? 'bg-[#66d9ca]/10' : 'bg-[#ffb1c3]/10'
                }`}
              ></div>

              <div className="flex flex-col gap-4">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#282936] text-[#cfbdff] text-xs font-semibold uppercase tracking-wider border border-[#494553]/60">
                    {edu.period}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#66d9ca] font-semibold bg-[#66d9ca]/10 px-3 py-1 rounded-full border border-[#66d9ca]/30">
                    <span className="text-sm font-bold text-[#e2e1f3]">{edu.grade}</span>
                    <span>•</span>
                    <span>{edu.gradeLabel}</span>
                  </div>
                </div>

                {/* Institution & Degree */}
                <div>
                  <h3 className="font-title-editorial text-lg sm:text-xl text-[#e2e1f3] font-medium group-hover:text-[#cfbdff] transition-colors leading-snug break-words">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-[#ffb1c3] font-medium mt-1">
                    {edu.degree}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[#948e9e] mt-1">
                    <span className="material-symbols-outlined text-[14px]">pin_drop</span>
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#cbc3d5] font-light leading-relaxed">
                  {edu.summary}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#948e9e] font-semibold">
                    Key Highlights:
                  </div>
                  {edu.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#cbc3d5]">
                      <span className="text-[#cfbdff] mt-0.5">✦</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Coursework Tags (if present) */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="pt-2">
                    <div className="text-[11px] uppercase tracking-wider text-[#948e9e] font-semibold mb-1.5">
                      Core Subjects:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-0.5 rounded-md bg-[#11121f] border border-[#333441] text-[#e2e1f3] text-[11px] font-light hover:border-[#66d9ca]/40 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom footer badge */}
              <div className="pt-4 mt-6 border-t border-[#333441]/60 flex items-center justify-between text-xs text-[#948e9e]">
                <span>Academic Record</span>
                <span className="font-label-handwritten text-base text-[#ffb1c3]">
                  Verified ✦
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
