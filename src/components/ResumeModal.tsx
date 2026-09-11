import React from 'react';
import {
  PERSONAL_INFO,
  EDUCATION_DATA,
  PROGRAMMING_LANGUAGES,
  FRAMEWORKS_LIBRARIES,
  DATABASES,
  TOOLS_SOFTWARE,
  TECHNICAL_AREAS,
  ACHIEVEMENTS_DATA,
  LEADERSHIP_DATA
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0c0d19]/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1d1f2b] border border-[#494553] shadow-2xl p-6 sm:p-10 text-[#e2e1f3]">
        {/* Header Action Row */}
        <div className="flex items-center justify-between pb-6 border-b border-[#333441]">
          <div className="flex items-center gap-3">
            <span className="text-[#cfbdff] text-2xl">✦</span>
            <div>
              <h2 className="font-headline-md text-2xl text-[#e2e1f3]">
                {PERSONAL_INFO.name} — Curriculum Vitae
              </h2>
              <p className="text-xs text-[#948e9e] font-mono">
                {PERSONAL_INFO.degree} • {PERSONAL_INFO.institution}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282936] text-[#cfbdff] hover:bg-[#373846] text-xs font-semibold border border-[#333441] transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#282936] text-[#cbc3d5] hover:text-[#e2e1f3] flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* CV Body Content */}
        <div className="mt-6 space-y-8 text-sm">
          {/* Contact summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#11121f] border border-[#282936] text-xs text-[#cbc3d5]">
            <div>
              <strong className="text-[#e2e1f3] block">Email:</strong>
              <span>{PERSONAL_INFO.email}</span>
            </div>
            <div>
              <strong className="text-[#e2e1f3] block">Location:</strong>
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div>
              <strong className="text-[#e2e1f3] block">LinkedIn:</strong>
              <a
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#cfbdff] hover:underline"
              >
                {PERSONAL_INFO.linkedInHandle}
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#cfbdff] border-b border-[#333441] pb-1 font-bold">
              EDUCATION
            </h3>
            <div className="mt-3 space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="pb-2">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-semibold text-base text-[#e2e1f3]">{edu.institution}</h4>
                    <span className="text-xs font-mono text-[#948e9e]">{edu.period}</span>
                  </div>
                  <div className="text-[#66d9ca] text-xs font-medium">
                    {edu.degree} • {edu.gradeLabel}: {edu.grade}
                  </div>
                  {edu.coursework && (
                    <p className="text-xs text-[#cbc3d5] mt-1 font-light">
                      Coursework: {edu.coursework.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#cfbdff] border-b border-[#333441] pb-1 font-bold">
              TECHNICAL SKILLS
            </h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#cbc3d5]">
              <div>
                <strong className="text-[#e2e1f3]">Programming Languages:</strong> {PROGRAMMING_LANGUAGES.join(', ')}
              </div>
              <div>
                <strong className="text-[#e2e1f3]">Frameworks &amp; Libraries:</strong> {FRAMEWORKS_LIBRARIES.join(', ')}
              </div>
              <div>
                <strong className="text-[#e2e1f3]">Databases:</strong> {DATABASES.join(', ')}
              </div>
              <div>
                <strong className="text-[#e2e1f3]">Tools &amp; Software:</strong> {TOOLS_SOFTWARE.join(', ')}
              </div>
              <div className="sm:col-span-2">
                <strong className="text-[#e2e1f3]">Technical Domains:</strong> {TECHNICAL_AREAS.join(', ')}
              </div>
            </div>
          </div>

          {/* Key Engineered Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#cfbdff] border-b border-[#333441] pb-1 font-bold">
              SELECTED PROJECTS (18 TOTAL ARCHIVED)
            </h3>
            <div className="mt-3 space-y-4 text-xs">
              <div>
                <div className="flex justify-between items-baseline">
                  <strong className="text-sm text-[#e2e1f3]">
                    Diabetic Retinopathy Screening System — Smart India Hackathon (SIH 2026 Nominee)
                  </strong>
                  <span className="font-mono text-[#948e9e]">Team of 6</span>
                </div>
                <div className="text-[#66d9ca] font-mono text-[11px] mt-0.5">
                  Technologies: MATLAB, Simulink, Grad-CAM
                </div>
                <p className="text-[#cbc3d5] mt-1 font-light">
                  Screening pipeline with Grad-CAM explainability for identifying retinal lesions and staging diabetic retinopathy severity for accessible triage.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <strong className="text-sm text-[#e2e1f3]">
                    Autonomous Maze Navigation
                  </strong>
                  <span className="font-mono text-[#948e9e]">Simulation</span>
                </div>
                <div className="text-[#66d9ca] font-mono text-[11px] mt-0.5">
                  Technologies: CoppeliaSim, Python
                </div>
                <p className="text-[#cbc3d5] mt-1 font-light">
                  Simulated mobile robot navigation in CoppeliaSim using Python scripts for path planning, wall following, and obstacle avoidance.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <strong className="text-sm text-[#e2e1f3]">
                    PDF-to-Audio Accessibility Converter
                  </strong>
                  <span className="font-mono text-[#948e9e]">Python &amp; Accessibility</span>
                </div>
                <div className="text-[#66d9ca] font-mono text-[11px] mt-0.5">
                  Technologies: Python, pdfplumber, pyttsx3, Tkinter
                </div>
                <p className="text-[#cbc3d5] mt-1 font-light">
                  Desktop tool converting PDF documents to spoken audio with configurable speed, voice selection, and bookmarking for visually impaired users.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <strong className="text-sm text-[#e2e1f3]">
                    Puducherry Tourism Web Portal
                  </strong>
                  <span className="font-mono text-[#948e9e]">Web &amp; Spatial</span>
                </div>
                <div className="text-[#66d9ca] font-mono text-[11px] mt-0.5">
                  Technologies: HTML/CSS, JavaScript, Leaflet.js
                </div>
                <p className="text-[#cbc3d5] mt-1 font-light">
                  Responsive tourism guide featuring interactive maps, heritage walk itineraries, French Quarter guides, and local cuisine recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Honors & Leadership */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#cfbdff] border-b border-[#333441] pb-1 font-bold">
              ACHIEVEMENTS &amp; LEADERSHIP
            </h3>
            <div className="mt-3 space-y-2 text-xs text-[#cbc3d5]">
              {ACHIEVEMENTS_DATA.map((ach) => (
                <div key={ach.id}>
                  ✦ <strong className="text-[#e2e1f3]">{ach.title}</strong> — {ach.organization} ({ach.year}){ach.description ? `. ${ach.description}` : ''}
                </div>
              ))}
              {LEADERSHIP_DATA.map((lead) => (
                <div key={lead.id}>
                  ✦ <strong className="text-[#e2e1f3]">{lead.role}</strong> — {lead.entity} ({lead.period}){lead.description ? `. ${lead.description}` : ''}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-[#333441] flex items-center justify-between">
          <span className="font-label-handwritten text-lg text-[#ffb1c3]">
            “Give me a problem. I'll figure it out. ♡”
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#282936] hover:bg-[#373846] text-xs sm:text-sm font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
