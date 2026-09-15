import React, { useState, useEffect } from 'react';
import { FileText, Check, Copy, Download, Minimize2, Maximize2, X } from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION_DATA,
  PROGRAMMING_LANGUAGES,
  FRAMEWORKS_LIBRARIES,
  DATABASES,
  TOOLS_SOFTWARE,
  TECHNICAL_AREAS,
  ACHIEVEMENTS_DATA,
  LEADERSHIP_DATA,
  CERTIFICATIONS_DATA
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_PDF_URL = `${import.meta.env.BASE_URL}resume/Jophita_Kristen_S_Resume.pdf`;

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'document' | 'text'>('document');
  const [copied, setCopied] = useState<boolean>(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFullscreen, onClose]);

  if (!isOpen) return null;

  const generatePlainTextResume = () => {
    return `${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.degree}
${PERSONAL_INFO.institution}
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedInUrl}
Academic CGPA: ${PERSONAL_INFO.overallCgpa} / 10.0

==================================================
EDUCATION
==================================================
${EDUCATION_DATA.map(
  (e) =>
    `${e.institution}
${e.degree} | ${e.period}
${e.gradeLabel}: ${e.grade}${
      e.coursework ? `\nRelevant Coursework: ${e.coursework.join(', ')}` : ''
    }`
).join('\n\n')}

==================================================
TECHNICAL SKILLS
==================================================
• Programming Languages: ${PROGRAMMING_LANGUAGES.join(', ')}
• Frameworks & Libraries: ${FRAMEWORKS_LIBRARIES.join(', ')}
• Databases: ${DATABASES.join(', ')}
• Developer Tools: ${TOOLS_SOFTWARE.join(', ')}
• Technical Domains: ${TECHNICAL_AREAS.join(', ')}

==================================================
SELECTED ENGINEERING PROJECTS
==================================================
1. Explainable AI for Diabetic Retinopathy Screening (SIH 2026 — Project in Development)
Technologies: MATLAB, Simulink, ResNet-50, Grad-CAM
Developing an automated retinal screening and lesion localization pipeline with visual heatmaps for accessible clinical triage as part of participation in Smart India Hackathon 2026.

2. Smart Hospital AI — CareFlow + MediCareConnect
Technologies: Node.js, Express, MongoDB, REST APIs
Healthcare management ecosystem providing modular RESTful APIs for patient intake, appointment scheduling, and record management.

3. ResuMatch Ultra — Candidate Scoring Pipeline
Technologies: Python, Scikit-learn, TF-IDF, Cosine Similarity
Automated resume parsing pipeline computing TF-IDF representations and cosine similarity match scores against job criteria.

4. EncroWatch — Satellite Land Analysis
Technologies: Python, Flask, Google Earth Engine, GIS
Geospatial monitoring application utilizing Google Earth Engine and Flask to evaluate multi-temporal satellite data for land encroachments.

5. Scanline — Browser-Based Smart Checkout & Multi-Item Detection
Technologies: Camera Capture API, Object Detection Model, Product Catalog Database
Browser-based smart checkout tool that scans items laid out on a flat surface and automatically calculates total prices without barcode scanners or manual entry. (In Testing)

6. SSE Real-Time Messaging Architecture
Technologies: Python, Flask, Server-Sent Events (SSE), EventSource API
Lightweight unidirectional real-time streaming pipeline utilizing HTTP persistent connections with automatic reconnection handling.

==================================================
ACADEMIC & TECHNICAL ACHIEVEMENTS
==================================================
${ACHIEVEMENTS_DATA.map(
  (a) => `• ${a.title} — ${a.organization} (${a.year}) [${a.badge}]`
).join('\n')}

==================================================
CAMPUS LEADERSHIP & INVOLVEMENT
==================================================
${LEADERSHIP_DATA.map(
  (l) => `• ${l.role} — ${l.entity} (${l.period}) [${l.impactMetric}]`
).join('\n')}

==================================================
CERTIFICATIONS & WORKSHOPS
==================================================
${CERTIFICATIONS_DATA.map(
  (c) => `• ${c.title} — ${c.issuer} (${c.issuedDate})`
).join('\n')}
`;
  };

  const handleCopyText = async () => {
    try {
      const text = generatePlainTextResume();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy resume text:', err);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#0c0d19]/90 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={`relative w-full transition-all duration-300 flex flex-col bg-[#161726] border border-[#333441] shadow-2xl ${
          isFullscreen
            ? 'fixed inset-0 w-screen h-screen max-w-none max-h-none rounded-none z-50'
            : 'max-w-4xl max-h-[92vh] rounded-2xl'
        }`}
      >
        {/* Sticky Control & Action Bar */}
        <div className="shrink-0 px-4 sm:px-6 py-3.5 bg-[#11121f] border-b border-[#282936] flex flex-wrap items-center justify-between gap-3 print-hide">
          {/* Document Identity */}
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#1d1f2b] border border-[#333441] text-[#cfbdff] flex items-center justify-center text-sm">
              <FileText className="w-4 h-4 text-[#cfbdff] shrink-0" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#e2e1f3]">
                {PERSONAL_INFO.name} — Resume
              </span>
              <span className="text-[11px] font-mono text-[#948e9e] hidden sm:inline">
                Curriculum Vitae • B.Tech ISE • CGPA {PERSONAL_INFO.overallCgpa}
              </span>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* View Mode Toggle: Clean Document vs Plain Text */}
            <div className="hidden sm:inline-flex p-0.5 rounded-lg bg-[#1d1f2b] border border-[#333441] text-xs">
              <button
                type="button"
                onClick={() => setViewMode('document')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  viewMode === 'document'
                    ? 'bg-[#282936] text-[#e2e1f3] font-medium shadow-xs'
                    : 'text-[#cbc3d5] hover:text-[#e2e1f3]'
                }`}
              >
                Document
              </button>
              <button
                type="button"
                onClick={() => setViewMode('text')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  viewMode === 'text'
                    ? 'bg-[#282936] text-[#e2e1f3] font-medium shadow-xs'
                    : 'text-[#cbc3d5] hover:text-[#e2e1f3]'
                }`}
              >
                Plain Text
              </button>
            </div>

            {/* Copy Plain Text for ATS / Recruiter Notes */}
            <button
              type="button"
              onClick={handleCopyText}
              title="Copy plain-text formatted resume to clipboard"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d1f2b] hover:bg-[#282936] text-[#cbc3d5] hover:text-[#e2e1f3] text-xs font-medium border border-[#333441] transition-all min-h-[44px] sm:min-h-0 cursor-pointer"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-[#66d9ca] shrink-0" aria-hidden="true" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#cfbdff] shrink-0" aria-hidden="true" />
              )}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            {/* Download Resume PDF */}
            <a
              href={RESUME_PDF_URL}
              download="Jophita_Kristen_S_Resume.pdf"
              title="Download Jophita Kristen S. Resume PDF"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282936] hover:bg-[#373846] text-[#66d9ca] hover:text-[#66d9ca] text-xs font-semibold border border-[#333441] hover:border-[#66d9ca]/50 transition-all shadow-xs min-h-[44px] sm:min-h-0 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>Download Resume</span>
            </a>

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit full screen' : 'Expand full screen'}
              className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-[#1d1f2b] hover:bg-[#282936] text-[#cbc3d5] hover:text-[#e2e1f3] flex items-center justify-center transition-colors border border-[#333441] min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 cursor-pointer"
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4 shrink-0" aria-hidden="true" />
              ) : (
                <Maximize2 className="w-4 h-4 shrink-0" aria-hidden="true" />
              )}
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-[#1d1f2b] hover:bg-[#282936] text-[#cbc3d5] hover:text-[#e2e1f3] flex items-center justify-center transition-colors border border-[#333441] min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4 shrink-0" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 bg-[#0f101d]">
          {viewMode === 'text' ? (
            /* Plain Text Mode for Recruiters */
            <div className="max-w-3xl mx-auto p-6 rounded-lg bg-[#11121f] border border-[#282936] font-mono text-xs text-[#cbc3d5] whitespace-pre-wrap leading-relaxed select-all">
              {generatePlainTextResume()}
            </div>
          ) : (
            /* Authentic Professional Document Sheet (Clean, High-Readability, Standard Resume Aesthetic) */
            <div className="resume-print-sheet max-w-3xl mx-auto bg-white text-slate-900 rounded-sm shadow-xl p-4 sm:p-8 md:p-12 font-sans border border-slate-200 print:border-none print:shadow-none print:p-0">
              {/* Document Header */}
              <header className="border-b-2 border-slate-800 pb-4 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-serif">
                    {PERSONAL_INFO.name.toUpperCase()}
                  </h1>
                  <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
                    B.Tech ISE Candidate
                  </span>
                </div>

                <div className="mt-2 text-xs text-slate-600 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span>{PERSONAL_INFO.location}</span>
                  <span className="text-slate-300">•</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-slate-900 hover:underline font-medium"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href={PERSONAL_INFO.linkedInUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-900 hover:underline font-medium"
                  >
                    {PERSONAL_INFO.linkedInHandle}
                  </a>
                </div>

                <p className="mt-2 text-xs text-slate-700 leading-relaxed max-w-2xl font-normal">
                  Information Science &amp; Engineering undergraduate focusing on Explainable AI, Computer Vision, Machine Learning systems, and Full-Stack Engineering. Proven record in hackathons, academic competitions, and prototype engineering.
                </p>
              </header>

              {/* Main Document Sections */}
              <div className="space-y-6 text-xs text-slate-800">
                {/* 1. Education */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                    EDUCATION
                  </h2>
                  <div className="space-y-3">
                    {EDUCATION_DATA.map((edu, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-slate-950 text-sm">
                            {edu.institution}
                          </span>
                          <span className="text-slate-500 font-mono text-[11px]">
                            {edu.period}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline text-slate-700 font-medium">
                          <span>{edu.degree}</span>
                          <span className="font-semibold text-slate-900">
                            {edu.gradeLabel}: {edu.grade}
                          </span>
                        </div>
                        {edu.coursework && (
                          <div className="text-[11px] text-slate-600 mt-0.5">
                            <span className="font-semibold">Coursework:</span>{' '}
                            {edu.coursework.join(', ')}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* 2. Technical Skills */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                    TECHNICAL SKILLS
                  </h2>
                  <div className="grid grid-cols-1 gap-1.5 text-xs">
                    <div>
                      <span className="font-semibold text-slate-950">Languages:</span>{' '}
                      <span className="text-slate-700">{PROGRAMMING_LANGUAGES.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-950">Frameworks &amp; Libraries:</span>{' '}
                      <span className="text-slate-700">{FRAMEWORKS_LIBRARIES.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-950">Databases:</span>{' '}
                      <span className="text-slate-700">{DATABASES.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-950">Tools &amp; Environments:</span>{' '}
                      <span className="text-slate-700">{TOOLS_SOFTWARE.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-950">Applied Competencies:</span>{' '}
                      <span className="text-slate-700">{TECHNICAL_AREAS.join(', ')}</span>
                    </div>
                  </div>
                </section>

                {/* 3. Selected Engineering Projects */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                    SELECTED ENGINEERING PROJECTS
                  </h2>
                  <div className="space-y-3.5">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-slate-950 text-sm">
                          Explainable AI for Diabetic Retinopathy Screening
                        </span>
                        <span className="text-slate-500 font-mono text-[11px]">
                          SIH 2026 • IN DEVELOPMENT
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Technologies: MATLAB, Simulink, ResNet-50, Grad-CAM, Data Augmentation
                      </div>
                      <p className="text-slate-700 mt-1 leading-normal">
                        Developing an automated clinical triage pipeline for retinal fundus imaging as part of participation in Smart India Hackathon 2026. Integrated Grad-CAM activation mapping to highlight microaneurysms and hemorrhages, validating model explainability for ophthalmological diagnostics.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-slate-950 text-sm">
                          Smart Hospital AI Suite (CareFlow + MediCareConnect)
                        </span>
                        <span className="text-slate-500 font-mono text-[11px]">
                          Healthcare System
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Technologies: Node.js, Express, MongoDB, REST APIs, JWT
                      </div>
                      <p className="text-slate-700 mt-1 leading-normal">
                        Engineered healthcare backend services providing modular RESTful APIs for patient intake, appointment scheduling, and admission tracking with MongoDB document storage.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-slate-950 text-sm">
                          ResuMatch Ultra — Candidate Semantic Scoring Engine
                        </span>
                        <span className="text-slate-500 font-mono text-[11px]">
                          HR Analytics
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Technologies: Python, Scikit-learn, TF-IDF, Cosine Similarity
                      </div>
                      <p className="text-slate-700 mt-1 leading-normal">
                        Built candidate scoring pipeline extracting resume text, generating TF-IDF vector representations, and computing cosine similarity against job descriptions to provide automated relevance grading and skill gap analysis.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-slate-950 text-sm">
                          EncroWatch — Satellite Land Analysis &amp; Boundary Detection
                        </span>
                        <span className="text-slate-500 font-mono text-[11px]">
                          Spatial Vision
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Technologies: Python, Flask, Google Earth Engine, GIS Datasets
                      </div>
                      <p className="text-slate-700 mt-1 leading-normal">
                        Developed geospatial analysis application integrating Google Earth Engine and Flask to evaluate multi-temporal satellite imagery, monitor sensitive municipal boundaries, and log encroachment reports.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 4. Honors & Achievements */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                    HONORS &amp; COMPETITIVE ACHIEVEMENTS
                  </h2>
                  <div className="space-y-1.5 text-xs">
                    {ACHIEVEMENTS_DATA.map((ach) => (
                      <div key={ach.id} className="flex justify-between items-baseline">
                        <div>
                          <span className="font-bold text-slate-950">[{ach.badge}]</span>{' '}
                          <span className="font-medium text-slate-900">{ach.title}</span> —{' '}
                          <span className="text-slate-600">{ach.organization}</span>
                        </div>
                        <span className="text-slate-500 font-mono text-[11px] shrink-0 ml-2">
                          {ach.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 5. Campus Leadership & Community */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                    LEADERSHIP &amp; INVOLVEMENT
                  </h2>
                  <div className="space-y-1.5 text-xs">
                    {LEADERSHIP_DATA.map((lead) => (
                      <div key={lead.id} className="flex justify-between items-baseline">
                        <div>
                          <span className="font-bold text-slate-950">{lead.role}</span> —{' '}
                          <span className="text-slate-700">{lead.entity}</span>
                        </div>
                        <span className="text-slate-500 font-mono text-[11px] shrink-0 ml-2">
                          {lead.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 6. Certifications & Programs */}
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                    CERTIFICATIONS &amp; WORKSHOPS
                  </h2>
                  <div className="space-y-1.5 text-xs">
                    {CERTIFICATIONS_DATA.map((cert) => (
                      <div key={cert.id} className="flex justify-between items-baseline">
                        <div>
                          <span className="font-medium text-slate-900">{cert.title}</span> —{' '}
                          <span className="text-slate-600">{cert.issuer}</span>
                        </div>
                        <span className="text-slate-500 font-mono text-[11px] shrink-0 ml-2">
                          {cert.issuedDate}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Document Footer Note */}
              <div className="mt-8 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400">
                <span>Verified Curriculum Vitae • Jophita Kristen S. • Available for Engineering &amp; Technology Roles</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="shrink-0 px-6 py-3 bg-[#11121f] border-t border-[#282936] flex items-center justify-between print-hide">
          <div className="flex items-center gap-2 text-xs text-[#948e9e]">
            <span className="w-2 h-2 rounded-full bg-[#66d9ca]"></span>
            <span>Accurate academic record &amp; verified project milestones</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_PDF_URL}
              download="Jophita_Kristen_S_Resume.pdf"
              className="px-4 py-1.5 rounded-lg bg-[#282936] hover:bg-[#373846] text-[#cfbdff] text-xs font-semibold border border-[#333441] transition-colors inline-flex items-center justify-center min-h-[44px] sm:min-h-0 cursor-pointer"
            >
              Download PDF
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-[#1d1f2b] hover:bg-[#282936] text-[#cbc3d5] text-xs font-medium border border-[#333441] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
