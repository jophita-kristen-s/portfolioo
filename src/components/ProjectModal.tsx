import React, { useEffect } from 'react';
import { X, UserCheck, Code, Github, ExternalLink, FileText, Check, Layers, AlertCircle } from 'lucide-react';
import { ALL_PROJECTS } from '../data/portfolioData';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ projectId, onClose }) => {
  // ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (projectId) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [projectId, onClose]);

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
  const workflow = project.workflowPreview || [];

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0c0d19]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1d1f2b] border border-[#494553] shadow-2xl p-4 sm:p-6 md:p-8 text-[#e2e1f3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-[#282936] text-[#cbc3d5] hover:text-[#e2e1f3] flex items-center justify-center transition-colors z-10 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#cfbdff] focus-visible:outline-none"
          aria-label="Close project details modal"
        >
          <X className="w-5 h-5 shrink-0" aria-hidden="true" />
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
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${
                project.statusLabel === 'IN TESTING'
                  ? 'bg-[#ffb1c3]/15 border-[#ffb1c3]/30 text-[#ffb1c3]'
                  : project.statusLabel === 'IN DEVELOPMENT'
                  ? 'bg-[#e0bb66]/15 border-[#e0bb66]/30 text-[#e0bb66]'
                  : 'bg-[#66d9ca]/10 border-[#66d9ca]/30 text-[#66d9ca]'
              }`}
            >
              {project.statusLabel}
            </span>
          </div>

          <h3 id="modal-project-title" className="font-headline-md text-2xl sm:text-3xl font-normal text-[#e2e1f3] leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-[#66d9ca] font-medium mt-1">
            {project.subtitle}
          </p>
          <p className="text-sm text-[#cbc3d5] font-light leading-relaxed mt-3">
            {project.description}
          </p>

          {/* Testing Notice for In Testing projects */}
          {project.statusNote && (
            <div className="mt-3 p-3 rounded-xl bg-[#ffb1c3]/10 border border-[#ffb1c3]/30 flex items-start gap-2 text-xs text-[#ffb1c3]">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#ffb1c3]" aria-hidden="true" />
              <div>
                <span className="font-semibold uppercase tracking-wider block text-[10px] mb-0.5">Project Status Note</span>
                <span>{project.statusNote}</span>
              </div>
            </div>
          )}
        </div>

        {/* TECHNICAL DETAILS BODY */}
        <div className="py-5 space-y-6">
          
          {/* Architecture / Workflow Preview (if available) */}
          {workflow.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#66d9ca] font-semibold mb-2.5">
                <Layers className="w-4 h-4 text-[#66d9ca] shrink-0" aria-hidden="true" />
                <span>TECHNICAL ARCHITECTURE WORKFLOW</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {workflow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#11121f] border border-[#282936] flex items-center gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#9c7cf6]/20 border border-[#9c7cf6]/40 text-[#cfbdff] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-[#e2e1f3] font-medium leading-snug">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. PROBLEM */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ffb1c3] font-semibold mb-2">
              <span className="text-[#ffb1c3]">✦</span>
              <span>PROBLEM STATEMENT</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#11121f] border border-[#282936] text-xs sm:text-sm text-[#cbc3d5] font-light leading-relaxed">
              {problemText}
            </div>
          </div>

          {/* 3. SOLUTION */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#66d9ca] font-semibold mb-2">
              <span className="text-[#66d9ca]">✦</span>
              <span>ENGINEERED SOLUTION</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#11121f] border border-[#282936] text-xs sm:text-sm text-[#cbc3d5] font-light leading-relaxed">
              {solutionText}
            </div>
          </div>

          {/* 4. MY CONTRIBUTION (PROMINENT RECRUITER SECTION) */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#11121f]/95 border border-[#cfbdff]/30 shadow-md">
            <div className="flex items-center justify-between pb-3 border-b border-[#2d2e40] mb-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#cfbdff] font-bold">
                <UserCheck className="w-4 h-4 text-[#cfbdff] shrink-0" aria-hidden="true" />
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
                    <Check className="w-4 h-4 text-[#66d9ca] font-bold mt-0.5 shrink-0" aria-hidden="true" />
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
                <span>KEY TECHNICAL CAPABILITIES</span>
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
              <span>TECHNOLOGIES USED</span>
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

          {/* 7. EVIDENCE & REPOSITORY */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#11121f] border border-[#333441]">
            <div className="flex items-center justify-between pb-3 border-b border-[#282936] mb-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#66d9ca] font-bold">
                <Code className="w-4 h-4 text-[#66d9ca] shrink-0" aria-hidden="true" />
                <span>CODE ARTIFACTS &amp; EVIDENCE</span>
              </div>
              <span className="text-[11px] text-[#948e9e] font-mono">
                {project.evidence?.repoStatus === 'limited' ? 'Repository — limited public code' : 'Public Repository'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {hasGithub && githubHref && (
                <a
                  href={githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-xs font-semibold transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#cfbdff] focus-visible:outline-none"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <Github className="w-3.5 h-3.5 text-[#cfbdff] shrink-0" aria-hidden="true" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 text-[#948e9e] shrink-0" aria-hidden="true" />
                </a>
              )}

              {project.evidence?.repoStatus === 'limited' ? (
                <span className="inline-flex items-center px-3.5 py-2 rounded-lg bg-[#1d1f2b] border border-[#282936] text-xs text-[#948e9e] font-mono min-h-[44px]">
                  Limited public evidence
                </span>
              ) : (
                <>
                  {readmeHref && hasGithub && (
                    <a
                      href={readmeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-xs font-semibold transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#cfbdff] focus-visible:outline-none"
                      aria-label={`Read technical documentation README for ${project.title}`}
                    >
                      <FileText className="w-3.5 h-3.5 text-[#cfbdff] shrink-0" aria-hidden="true" />
                      <span>Technical README</span>
                      <ExternalLink className="w-3 h-3 text-[#948e9e] shrink-0" aria-hidden="true" />
                    </a>
                  )}

                  {hasFigma && project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-xs font-semibold transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#cfbdff] focus-visible:outline-none"
                      aria-label={`View Figma design for ${project.title}`}
                    >
                      <span>Figma Design</span>
                      <ExternalLink className="w-3 h-3 text-[#948e9e] shrink-0" aria-hidden="true" />
                    </a>
                  )}

                  {hasLiveDemo && liveDemoHref && (
                    <a
                      href={liveDemoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#66d9ca]/20 hover:bg-[#66d9ca]/30 border border-[#66d9ca]/40 text-[#66d9ca] text-xs font-semibold transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#cfbdff] focus-visible:outline-none"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3 text-[#66d9ca] shrink-0" aria-hidden="true" />
                    </a>
                  )}
                </>
              )}

              {!hasGithub && !hasFigma && !hasLiveDemo && (
                <span className="px-3.5 py-2 rounded-lg bg-[#1d1f2b] border border-[#282936] text-xs text-[#948e9e] font-mono min-h-[44px] flex items-center">
                  {project.evidence?.repoStatus === 'coming-soon' ? 'GitHub repository coming soon' : 'Evidence coming soon'}
                </span>
              )}
            </div>

            <p className="text-[11px] text-[#948e9e] font-light mt-3">
              {project.evidence?.repoStatus === 'limited'
                ? 'Repository available — documentation/code being updated.'
                : project.evidence?.repoStatus === 'coming-soon' || !hasGithub
                ? 'GitHub repository coming soon — source code is being prepared for public release.'
                : 'Public repository and technical artifacts hosted on GitHub for code inspection.'}
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
            className="px-5 py-2.5 rounded-lg bg-[#282936] hover:bg-[#373846] text-xs sm:text-sm font-semibold transition-colors text-[#e2e1f3] cursor-pointer min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#cfbdff] focus-visible:outline-none"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

