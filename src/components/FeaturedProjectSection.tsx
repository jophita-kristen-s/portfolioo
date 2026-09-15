import React from 'react';
import { Code, UserCheck, ArrowRight, ExternalLink, FileText, Check } from 'lucide-react';
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
              <Code className="w-4 h-4 shrink-0 text-[#ffb1c3]" aria-hidden="true" />
              <span>Engineering Evidence &amp; Repositories</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-[#e2e1f3] mt-1 font-normal">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#cbc3d5] max-w-lg font-light">
            Six engineering systems across clinical triage, healthcare management, candidate intelligence, geospatial monitoring, smart checkout, and real-time streaming.
          </p>
        </div>

        {/* 2-Column Grid of 6 High-Credibility Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project) => {
            if (!project) return null;

            const role = project.contribution?.role || 'Lead Developer';
            const team = project.contribution?.team || project.teamSize || 'Engineering Project';
            const summaryLine = project.contribution?.summaryLine;
            const contributions = project.contribution?.contributions || [];
            const teamContext = project.contribution?.teamContext;

            return (
              <div
                key={project.id}
                className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:border-[#cfbdff]/50 transition-all duration-300 group"
              >
                {/* Ambient Top Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#9c7cf6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#9c7cf6]/10 transition-colors"></div>

                <div className="flex flex-col gap-4 sm:gap-5 relative z-10">
                  
                  {/* Top Header Row: Number, Category, Status Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#282936] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#cfbdff]">
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
                    <h3 className="font-headline-md text-xl sm:text-2xl md:text-3xl font-normal text-[#e2e1f3] group-hover:text-[#cfbdff] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#66d9ca] font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Short One-Line Description */}
                  <p className="text-xs sm:text-sm text-[#cbc3d5] font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Compact Technology List */}
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#948e9e] font-semibold mb-1.5 flex items-center gap-1.5">
                      <span className="text-[#cfbdff]">✦</span>
                      <span>TECHNOLOGIES</span>
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

                  {/* MY CONTRIBUTION (Clearly Visible Recruiter Section) */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#11121f]/95 border border-[#cfbdff]/30 space-y-2.5 shadow-sm">
                    <div className="flex items-center justify-between gap-2 border-b border-[#282936] pb-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#cfbdff]">
                        <UserCheck className="w-4 h-4 text-[#cfbdff] shrink-0" aria-hidden="true" />
                        <span>MY CONTRIBUTION</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#282936] text-[#cbc3d5] border border-[#373846]">
                        {team}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-[#e2e1f3]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#948e9e] mr-1.5">ROLE:</span>
                      <span>{role}</span>
                    </div>

                    {summaryLine && (
                      <p className="text-xs text-[#cfbdff]/90 font-mono text-[11px] leading-relaxed">
                        {summaryLine}
                      </p>
                    )}

                    <div className="space-y-1.5 pt-1 border-t border-[#282936]/60">
                      {contributions.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#cbc3d5]">
                          <Check className="w-3.5 h-3.5 text-[#66d9ca] shrink-0 mt-0.5" aria-hidden="true" />
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

                </div>

                {/* Card Footer: EVIDENCE & "View project" Action */}
                <div className="pt-5 mt-5 border-t border-[#282936] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 relative z-10">
                  {/* Evidence Links */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#948e9e]">
                      EVIDENCE:
                    </span>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-xs font-medium transition-colors min-h-[38px] sm:min-h-0"
                        title="View GitHub Repository"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 text-[#948e9e] shrink-0" aria-hidden="true" />
                      </a>
                    ) : null}

                    {project.evidence?.repoStatus === 'limited' ? (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#11121f] text-[11px] text-[#948e9e] font-mono border border-[#282936]">
                        Limited public evidence
                      </span>
                    ) : (
                      <>
                        {project.evidence?.readmeUrl ? (
                          <a
                            href={project.evidence.readmeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-xs font-medium transition-colors min-h-[38px] sm:min-h-0"
                            title="View Project README"
                          >
                            <FileText className="w-3.5 h-3.5 text-[#cfbdff] shrink-0" aria-hidden="true" />
                            <span>README</span>
                            <ExternalLink className="w-3 h-3 text-[#948e9e] shrink-0" aria-hidden="true" />
                          </a>
                        ) : null}

                        {project.liveDemoUrl ? (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#66d9ca]/20 hover:bg-[#66d9ca]/30 border border-[#66d9ca]/40 text-[#66d9ca] text-xs font-medium transition-colors min-h-[38px] sm:min-h-0"
                            title="View Live Demo"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3 h-3 text-[#66d9ca] shrink-0" aria-hidden="true" />
                          </a>
                        ) : null}
                      </>
                    )}

                    {!project.githubUrl && !project.evidence?.readmeUrl && project.evidence?.repoStatus !== 'limited' && (
                      <span className="px-2.5 py-1 rounded-lg bg-[#11121f] text-[11px] text-[#948e9e] font-mono border border-[#282936]">
                        {project.evidence?.repoStatus === 'coming-soon' ? 'GitHub repository coming soon' : 'Evidence coming soon'}
                      </span>
                    )}
                  </div>

                  {/* Primary Action: "View project" */}
                  <button
                    type="button"
                    onClick={() => onOpenProjectModal(project.id)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#9c7cf6] to-[#6847bf] hover:brightness-110 text-[#11121f] text-xs font-bold transition-all shadow-md shadow-[#9c7cf6]/20 cursor-pointer min-h-[44px] w-full sm:w-auto"
                  >
                    <span>View project</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
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
