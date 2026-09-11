import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="w-full px-4 md:px-8 lg:px-12 py-20 bg-[#11121f]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#66d9ca] text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>Credentials &amp; Workshops</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-[#e2e1f3] mt-1 font-normal">
              Certifications &amp; Workshops
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#cbc3d5] max-w-md font-light">
            Verified academic workshops, technical trainings, and certification programs in computer graphics, AI image processing, and development practices.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#1d1f2b]/80 border border-[#333441] shadow-lg flex flex-col justify-between hover:border-[#cfbdff]/50 hover:bg-[#282936]/80 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-3">
                {/* Issuer & Date */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#cfbdff] uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-[#948e9e]">
                    {cert.issuedDate}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-title-editorial text-xl text-[#e2e1f3] font-medium leading-snug group-hover:text-[#cfbdff] transition-colors">
                  {cert.title}
                </h3>

                {/* Type pill if available */}
                {cert.type && (
                  <div className="w-fit px-2.5 py-0.5 rounded-full bg-[#282936] text-[#66d9ca] text-[11px] font-mono border border-[#333441]">
                    ✦ {cert.type}
                  </div>
                )}

                {/* Skills tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#11121f] text-xs text-[#cbc3d5] border border-[#282936]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action / Footer */}
              <div className="pt-5 mt-5 border-t border-[#333441]/60 flex items-center justify-between text-xs">
                <span className="text-[#66d9ca] flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  <span>Completed Program</span>
                </span>
                <span className="font-label-handwritten text-sm text-[#ffb1c3]">
                  Verified Record ✦
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
