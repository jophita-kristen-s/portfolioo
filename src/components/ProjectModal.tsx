import React from 'react';
import { ALL_PROJECTS } from '../data/portfolioData';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ projectId, onClose }) => {
  if (!projectId) return null;
  const project = ALL_PROJECTS.find(p => p.id === projectId);
  if (!project) return null;

  const role = project.contribution?.role || (project.teamSize?.includes('Solo') ? 'Solo Developer' : 'Core Developer');
  const team = project.contribution?.team || project.teamSize || 'Engineering Project';
  const contributions = project.contribution?.contributions || (
    project.teamSize?.includes('My work:')
      ? [project.teamSize.replace(/^.*My work:\s*/, '')]
      : ['System architecture & implementation', 'Technical execution & validation']
  );
  const teamContext = project.contribution?.teamContext;

  const problemText = project.problem || (
    project.longOverview
      ? project.longOverview.split('.')[0] + '.'
      : 'Engineering requirements demanded high precision and rapid response.'
  );

  const solutionText = project.solution || project.longOverview || project.description;

  const hasGithub = Boolean(project.githubUrl || project.evidence?.githubUrl);
  const githubHref = project.evidence?.githubUrl || project.githubUrl;
  const readmeHref = project.evidence?.readmeUrl || (githubHref ? `${githubHref.replace(/\.git$/, '')}#readme` : undefined);
  const hasLiveDemo = Boolean(project.liveDemoUrl || project.evidence?.liveDemoUrl);
  const liveDemoHref = project.evidence?.liveDemoUrl || project.liveDemoUrl;
  const hasFigma = Boolean(project.figmaUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0c0d19]/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1d1f2b] border border-[#494553] shadow-2xl p-4 sm:p-6 md:p-8 text-[#e2e1f3]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-[#282936] text-[#cbc3d5] hover:text-[#e2e1f3] flex items-center justify-center transition-colors z-10"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* 1. PROJECT HEADER */}
        <div className="border-b border-[#333441] pb-5 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="text-xs font-mono font-semibold text-[#cfbdff]">
              PROJECT {project.number}
            </span>
            <span className="text-[#494553]">•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#9c7cf6]/20 border border-[#9c7cf6]/30 text-[#cfbdff] text-[11px] font-semibold uppercase tracking-wider">
              {project.badgeCategory}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#66d9ca]/10 border border-[#66d9ca]/30 text-[#66d9ca] text-[11px] font-semibold uppercase tracking-wider">
              {project.statusLabel}
            </span>
          </div>

          <h3 className="font-headline-md text-2xl sm:text-3xl font-normal text-[#e2e1f3] leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-[#66d9ca] font-medium mt-1">
            {project.subtitle}
          </p>
          <p className="text-sm text-[#cbc3d5] font-light leading-relaxed mt-3">
            {project.description}
          </p>
        </div>

        {/* TECHNICAL DETAILS BODY */}
        <div className="py-5 space-y-6">
          
          {/* 2. PROBLEM */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ffb1c3] font-semibold mb-2">
              <span className="text-[#ffb1c3]">✦</span>
              <span>PROBLEM</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#11121f] border border-[#282936] text-xs sm:text-sm text-[#cbc3d5] font-light leading-relaxed">
              {problemText}
            </div>
          </div>

          {/* 3. SOLUTION */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#66d9ca] font-semibold mb-2">
              <span className="text-[#66d9ca]">✦</span>
              <span>SOLUTION</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#11121f] border border-[#282936] text-xs sm:text-sm text-[#cbc3d5] font-light leading-relaxed">
              {solutionText}
            </div>
          </div>

          {/* 4. MY CONTRIBUTION (PROMINENT RECRUITER SECTION) */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#11121f]/95 border border-[#cfbdff]/30 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-[#2d2e40] mb-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#cfbdff] font-bold">
                <span className="material-symbols-outlined text-[16px] text-[#cfbdff]">person_check</span>
                <span>MY CONTRIBUTION</span>
              </div>
              <span className="text-[11px] text-[#948e9e] font-mono">Personal vs. Team Scope</span>
            </div>

            {/* Role & Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3.5">
              <div className="p-2.5 rounded-lg bg-[#0c0d19]/80 border border-[#282936]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#948e9e]">ROLE</div>
                <div className="text-xs sm:text-sm font-semibold text-[#e2e1f3] mt-0.5">{role}</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0c0d19]/80 border border-[#282936]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#948e9e]">TEAM CONTEXT</div>
                <div className="text-xs sm:text-sm font-semibold text-[#e2e1f3] mt-0.5">{team}</div>
              </div>
            </div>

            {/* Summary Line */}
            {project.contribution?.summaryLine && (
              <div className="mb-3 p-2.5 rounded-lg bg-[#161726] border border-[#cfbdff]/20 text-xs font-mono text-[#cfbdff]">
                <span className="text-[#948e9e] text-[10px] uppercase block mb-0.5">Scope Summary:</span>
                <span>{project.contribution.summaryLine}</span>
              </div>
            )}

            {/* Contribution Bullets */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#cfbdff] font-semibold mb-2">
                Specific Work by Jophita:
              </div>
              <div className="space-y-1.5">
                {contributions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#cbc3d5]">
                    <span className="text-[#66d9ca] font-bold mt-0.5">✓</span>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Context note if team project */}
            {teamContext && (
              <div className="mt-3 pt-3 border-t border-[#282936] text-[11px] text-[#948e9e] italic leading-snug">
                <span>Note on team scope: {teamContext}</span>
              </div>
            )}
          </div>

          {/* 5. KEY FEATURES */}
          {project.features && project.features.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#cfbdff] font-semibold mb-2">
                <span className="text-[#cfbdff]">✦</span>
                <span>KEY FEATURES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#cbc3d5] bg-[#11121f] p-2.5 rounded-lg border border-[#282936]">
                    <span className="text-[#66d9ca] text-xs">✦</span>
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. TECHNOLOGIES */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#948e9e] font-semibold mb-2">
              <span className="text-[#948e9e]">✦</span>
              <span>TECHNOLOGIES (ACTUALLY USED)</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
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

          {/* 7. EVIDENCE & VERIFICATION */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#11121f] border border-[#333441]">
            <div className="flex items-center justify-between pb-3 border-b border-[#282936] mb-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#66d9ca] font-bold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>EVIDENCE</span>
              </div>
              <span className="text-[11px] text-[#948e9e] font-mono">Public Verification</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {hasGithub && githubHref && (
                <a
                  href={githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-xs font-semibold transition-colors min-h-[44px]"
                >
                  <span>GitHub Repository ↗</span>
                </a>
              )}

              {readmeHref && hasGithub && (
                <a
                  href={readmeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-xs font-semibold transition-colors min-h-[44px]"
                >
                  <span>Technical README ↗</span>
                </a>
              )}

              {hasFigma && project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-xs font-semibold transition-colors min-h-[44px]"
                >
                  <span>Figma Design ↗</span>
                </a>
              )}

              {hasLiveDemo && liveDemoHref && (
                <a
                  href={liveDemoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#66d9ca]/20 hover:bg-[#66d9ca]/30 border border-[#66d9ca]/40 text-[#66d9ca] text-xs font-semibold transition-colors min-h-[44px]"
                >
                  <span>Live Demo ↗</span>
                </a>
              )}

              {!hasGithub && !hasFigma && !hasLiveDemo && (
                <span className="px-3 py-2 rounded-lg bg-[#1d1f2b] border border-[#282936] text-xs text-[#948e9e] font-mono">
                  Evidence coming soon
                </span>
              )}
            </div>

            <p className="text-[11px] text-[#948e9e] font-light mt-3">
              Only verified public repositories and artifacts are linked above. Prototype code is hosted on GitHub for technical audit.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#333441] flex items-center justify-between">
          <span className="font-mono text-xs text-[#948e9e]">
            Portfolio Project #{project.number}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#282936] hover:bg-[#373846] text-xs sm:text-sm font-semibold transition-colors text-[#e2e1f3]"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

