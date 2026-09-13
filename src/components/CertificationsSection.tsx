import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="w-full px-4 md:px-8 lg:px-12 py-16 bg-[#11121f] border-t border-[#1d1f2b]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#282936] pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#66d9ca] text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>ACCREDITATIONS &amp; WORKSHOPS</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#e2e1f3] mt-1 font-normal tracking-tight">
              Certifications &amp; Workshops
            </h2>
          </div>
          <div className="flex flex-col gap-1 max-w-md">
            <p className="text-sm text-[#cbc3d5] font-light leading-relaxed">
              Targeted academic coursework, technical workshops, and professional development programs.
            </p>
            <span className="font-label-handwritten text-sm text-[#cfbdff]">
              ✦ Completed programs &amp; institutional training
            </span>
          </div>
        </div>

        {/* Compact Credential Cards / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="p-4 rounded-xl bg-[#1d1f2b]/80 border border-[#333441] shadow-sm hover:border-[#66d9ca]/40 hover:bg-[#282936]/60 transition-all duration-200 flex items-center justify-between gap-4 group"
            >
              {/* Left: Credential Icon & Details */}
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#11121f] border border-[#282936] text-[#66d9ca] flex items-center justify-center shrink-0 group-hover:border-[#66d9ca]/50 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    {cert.type === 'Certification' ? 'school' : cert.type === 'Training' ? 'psychology' : 'co_present'}
                  </span>
                </div>

                <div className="flex flex-col min-w-0">
                  <h3 className="text-sm sm:text-base font-medium text-[#e2e1f3] truncate group-hover:text-[#66d9ca] transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#cbc3d5] font-light truncate">
                    <span>{cert.issuer}</span>
                    <span className="text-[#494553]">•</span>
                    <span className="text-[#948e9e] font-mono text-[11px]">{cert.issuedDate}</span>
                  </div>
                </div>
              </div>

              {/* Right: Compact Type Chip */}
              <div className="shrink-0 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-[#11121f] text-[11px] font-mono text-[#cfbdff] border border-[#282936]">
                  {cert.type || 'Program'}
                </span>
                <span className="material-symbols-outlined text-[#66d9ca] text-[16px] hidden sm:inline-block">
                  verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
