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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0c0d19]/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1d1f2b] border border-[#494553] shadow-2xl p-6 sm:p-8 text-[#e2e1f3]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#282936] text-[#cbc3d5] hover:text-[#e2e1f3] flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#9c7cf6]/20 border border-[#9c7cf6]/30 text-[#cfbdff] text-xs font-semibold uppercase tracking-wider">
            {project.badgeCategory}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#66d9ca]/10 border border-[#66d9ca]/30 text-[#66d9ca] text-xs font-semibold uppercase tracking-wider">
            {project.statusLabel}
          </span>
          {project.eventOrContext && (
            <span className="px-3 py-1 rounded-full bg-[#ffb1c3]/10 border border-[#ffb1c3]/30 text-[#ffb1c3] text-xs font-semibold tracking-wider">
              {project.eventOrContext}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-headline-md text-2xl sm:text-3xl font-normal text-[#e2e1f3]">
          {project.title}
        </h3>
        <p className="text-sm text-[#66d9ca] font-medium mt-1">
          {project.subtitle}
        </p>

        {/* Team / Context info */}
        {project.teamSize && (
          <div className="mt-2 text-xs text-[#cbc3d5] flex items-center gap-2 bg-[#11121f] px-3 py-1.5 rounded-lg border border-[#282936] w-fit">
            <span className="material-symbols-outlined text-[#cfbdff] text-[16px]">groups</span>
            <span>{project.teamSize}</span>
          </div>
        )}

        {/* Overview */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs uppercase tracking-widest text-[#948e9e] font-semibold">
            System Overview &amp; Context
          </h4>
          <p className="text-sm sm:text-base text-[#cbc3d5] leading-relaxed font-light">
            {project.longOverview || project.description}
          </p>
        </div>

        {/* Key Features (if specified) */}
        {project.features && project.features.length > 0 && (
          <div className="mt-6 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#948e9e] font-semibold">
              Engineered Capabilities &amp; Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#cbc3d5] bg-[#11121f] p-2.5 rounded-lg border border-[#282936]">
                  <span className="text-[#66d9ca]">✦</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Highlights */}
        {project.technicalHighlights && (
          <div className="mt-6 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#948e9e] font-semibold">
              Architectural Details
            </h4>
            <div className="space-y-2">
              {project.technicalHighlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbc3d5] bg-[#11121f] p-3 rounded-xl border border-[#282936]">
                  <span className="text-[#cfbdff] font-semibold mt-0.5 font-mono">0{i + 1}</span>
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mt-6">
          <h4 className="text-xs uppercase tracking-widest text-[#948e9e] font-semibold mb-2">
            Applied Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-[#282936] text-xs text-[#cfbdff] border border-[#333441]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-[#333441] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-label-handwritten text-lg text-[#ffb1c3]">
              Verified Portfolio Entry ✦
            </span>
            {project.figmaUrl ? (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-xs font-medium transition-colors"
              >
                <span>View Design ↗</span>
              </a>
            ) : project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-xs font-medium transition-colors"
              >
                <span>View on GitHub ↗</span>
              </a>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#282936] hover:bg-[#373846] text-xs sm:text-sm font-semibold transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
