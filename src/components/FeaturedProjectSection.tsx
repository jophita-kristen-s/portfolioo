import React, { useState } from 'react';
import { ALL_PROJECTS, FEATURED_PROJECT_IDS } from '../data/portfolioData';

interface FeaturedProjectSectionProps {
  onOpenProjectModal: (projectId: string) => void;
}

export const FeaturedProjectSection: React.FC<FeaturedProjectSectionProps> = ({ onOpenProjectModal }) => {
  // Ordered 6 featured projects
  const featuredProjects = FEATURED_PROJECT_IDS.map((id, index) => {
    const proj = ALL_PROJECTS.find(p => p.id === id);
    if (!proj) return null;
    return {
      ...proj,
      displayNumber: `0${index + 1}`
    };
  }).filter(Boolean);

  // Simulation state for Project 01 (DR Screening)
  const [drSimulating, setDrSimulating] = useState<boolean>(false);
  const [drStatus, setDrStatus] = useState<string>('Grad-CAM Heatmap Layer: Active');

  const runDrSimulation = () => {
    setDrSimulating(true);
    setDrStatus('Scanning Retinal Illumination...');
    setTimeout(() => {
      setDrStatus('Localizing Microaneurysms & Exudates...');
    }, 700);
    setTimeout(() => {
      setDrStatus('Grad-CAM Feature Map Ready: Staging Level 2 NPDR');
      setDrSimulating(false);
    }, 1500);
  };

  return (
    <section
      id="projects"
      className="w-full px-4 md:px-8 lg:px-12 py-20 bg-[#0c0d19]/80 border-t border-[#1d1f2b]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#282936] pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#ffb1c3] text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>High-Impact Engineering</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-[#e2e1f3] mt-1 font-normal">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#cbc3d5] max-w-lg font-light">
            Core systems developed across clinical triage, distributed healthcare, candidate intelligence, geospatial monitoring, client-side OCR, and real-time streaming.
          </p>
        </div>

        {/* 2-Column Grid of 6 Large Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => {
            if (!project) return null;

            const role = project.contribution?.role || 'Lead Developer';
            const team = project.contribution?.team || project.teamSize || 'Engineering Project';
            const contributions = project.contribution?.contributions || [];
            const teamContext = project.contribution?.teamContext;
            const isDrProject = project.id === 'dr-screening';

            return (
              <div
                key={project.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:border-[#cfbdff]/50 transition-all duration-300 group"
              >
                {/* Ambient Top Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#9c7cf6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#9c7cf6]/10 transition-colors"></div>

                <div className="flex flex-col gap-5 relative z-10">
                  
                  {/* Top Header Row: Number, Category, Status Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#282936] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-[#cfbdff]">
                        PROJECT {project.displayNumber}
                      </span>
                      <span className="text-[#494553]">•</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#9c7cf6]/20 border border-[#9c7cf6]/30 text-[#cfbdff] text-[11px] font-semibold uppercase tracking-wider">
                        {project.badgeCategory}
                      </span>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full bg-[#66d9ca]/10 border border-[#66d9ca]/30 text-[#66d9ca] text-[11px] font-semibold uppercase tracking-wider">
                      {project.statusLabel}
                    </span>
                  </div>

                  {/* Project Title & Subtitle */}
                  <div>
                    <h3 className="font-headline-md text-2xl sm:text-3xl font-normal text-[#e2e1f3] group-hover:text-[#cfbdff] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#66d9ca] font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-[#cbc3d5] font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Interactive Simulation Strip for Project 1 (DR Screening) */}
                  {isDrProject && (
                    <div className="p-3 rounded-xl bg-[#11121f] border border-[#282936] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#cbc3d5]">
                        <span className="w-2 h-2 rounded-full bg-[#66d9ca] animate-pulse"></span>
                        <span className="truncate">{drStatus}</span>
                      </div>
                      <button
                        type="button"
                        onClick={runDrSimulation}
                        disabled={drSimulating}
                        className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#9c7cf6] to-[#6847bf] text-[#11121f] text-xs font-semibold hover:shadow-md hover:shadow-[#9c7cf6]/30 transition-all disabled:opacity-75 whitespace-nowrap self-end sm:self-auto"
                      >
                        {drSimulating ? 'Scanning...' : 'Test Triage Scan'}
                      </button>
                    </div>
                  )}

                  {/* MY CONTRIBUTION (Prominent Section) */}
                  <div className="p-4 rounded-xl bg-[#11121f]/90 border border-[#cfbdff]/25 space-y-2.5">
                    <div className="flex items-center justify-between border-b border-[#282936] pb-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#cfbdff]">
                        <span className="material-symbols-outlined text-[16px]">person_check</span>
                        <span>MY CONTRIBUTION</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#948e9e]">{team}</span>
                    </div>

                    <div className="text-xs font-semibold text-[#e2e1f3] flex items-center gap-1.5">
                      <span className="text-[10px] font-mono uppercase text-[#948e9e]">ROLE:</span>
                      <span>{role}</span>
                    </div>

                    <div className="space-y-1.5 pt-0.5">
                      {contributions.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#cbc3d5]">
                          <span className="text-[#66d9ca] font-bold mt-0.5 text-[11px]">✓</span>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {teamContext && (
                      <div className="pt-2 border-t border-[#282936] text-[11px] text-[#948e9e] italic leading-snug">
                        Team context: {teamContext}
                      </div>
                    )}
                  </div>

                  {/* TECHNOLOGIES */}
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#948e9e] font-semibold mb-2">
                      TECHNOLOGIES
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-[#11121f] text-xs text-[#cfbdff] border border-[#333441] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Footer: EVIDENCE & Modal Trigger */}
                <div className="pt-5 mt-5 border-t border-[#282936] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative z-10">
                  {/* Evidence Row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#948e9e]">
                      EVIDENCE:
                    </span>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-xs font-medium transition-colors"
                      >
                        <span>GitHub ↗</span>
                      </a>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg bg-[#11121f] text-[11px] text-[#948e9e] font-mono border border-[#282936]">
                        Repository coming soon
                      </span>
                    )}

                    {project.liveDemoUrl ? (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#66d9ca]/20 hover:bg-[#66d9ca]/30 border border-[#66d9ca]/40 text-[#66d9ca] text-xs font-semibold transition-colors"
                      >
                        <span>Demo ↗</span>
                      </a>
                    ) : (
                      <span className="text-[11px] text-[#948e9e] font-mono">
                        Live demo unavailable
                      </span>
                    )}
                  </div>

                  {/* Detailed Specs Modal Trigger */}
                  <button
                    type="button"
                    onClick={() => onOpenProjectModal(project.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#cfbdff] hover:text-[#66d9ca] transition-colors py-1"
                  >
                    <span>View Technical Details</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
