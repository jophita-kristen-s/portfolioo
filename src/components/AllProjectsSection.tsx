import React, { useState } from 'react';
import { SECONDARY_PROJECTS } from '../data/portfolioData';

interface AllProjectsSectionProps {
  onOpenProjectModal: (projectId: string) => void;
}

export const AllProjectsSection: React.FC<AllProjectsSectionProps> = ({ onOpenProjectModal }) => {
  const [experimentsModalOpen, setExperimentsModalOpen] = useState<boolean>(false);
  const [selectedExperimentId, setSelectedExperimentId] = useState<string | null>(null);

  const handleChipClick = (id: string) => {
    setSelectedExperimentId(id);
    setExperimentsModalOpen(true);
  };

  return (
    <section id="other-projects" className="w-full px-4 md:px-8 lg:px-12 py-14 bg-[#0c0d19]/60 border-b border-[#1d1f2b]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-[#948e9e]">
            ACADEMIC &amp; EXPLORATORY WORK
          </div>
          <h3 className="font-headline-md text-2xl sm:text-3xl text-[#e2e1f3] font-normal">
            Other Things I&apos;ve Built
          </h3>
          <p className="text-sm text-[#cbc3d5] font-light leading-relaxed">
            Beyond my featured work, I&apos;ve explored a range of academic, ML, computer vision and software projects.
          </p>
        </div>

        {/* Compact List of Tags / Chips */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {SECONDARY_PROJECTS.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => handleChipClick(project.id)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1d1f2b]/90 hover:bg-[#282936] text-xs font-mono text-[#cbc3d5] hover:text-[#cfbdff] border border-[#282936] hover:border-[#cfbdff]/40 transition-all cursor-pointer shadow-sm group"
            >
              <span className="text-[#66d9ca]/70 group-hover:text-[#66d9ca]">✦</span>
              <span>{project.chipLabel}</span>
            </button>
          ))}
        </div>

        {/* Subtle Expansion Trigger */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSelectedExperimentId(null);
              setExperimentsModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1d1f2b] hover:bg-[#282936] border border-[#333441] text-xs font-medium text-[#cfbdff] hover:text-[#e2e1f3] transition-colors"
          >
            <span>View all experiments</span>
            <span className="text-sm">→</span>
          </button>
        </div>

      </div>

      {/* Simple, Text-Focused Experiments Modal / Drawer */}
      {experimentsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0c0d19]/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#1d1f2b] border border-[#494553] shadow-2xl p-6 sm:p-8 text-[#e2e1f3]">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setExperimentsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#282936] text-[#cbc3d5] hover:text-[#e2e1f3] flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>

            {/* Modal Header */}
            <div className="border-b border-[#333441] pb-4 mb-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#948e9e]">
                ARCHIVE DIRECTORY
              </div>
              <h4 className="font-headline-md text-2xl font-normal text-[#e2e1f3] mt-0.5">
                All Exploratory Projects &amp; Experiments
              </h4>
              <p className="text-xs sm:text-sm text-[#cbc3d5] font-light mt-1">
                Foundational implementations, empirical ML comparisons, algorithms, and academic coursework.
              </p>
            </div>

            {/* Text-Focused Projects List */}
            <div className="divide-y divide-[#282936]">
              {SECONDARY_PROJECTS.map((item, index) => {
                const isHighlighted = selectedExperimentId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`py-3.5 px-3 rounded-lg transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isHighlighted ? 'bg-[#282936]/80 border border-[#cfbdff]/30' : 'hover:bg-[#282936]/40'
                    }`}
                  >
                    <div className="flex flex-col gap-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#948e9e]">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}.
                        </span>
                        <span className="text-sm font-medium text-[#e2e1f3]">
                          {item.name}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#11121f] text-[10px] font-mono text-[#948e9e] border border-[#282936]">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#cbc3d5] font-light leading-relaxed pl-6">
                        {item.oneLiner}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pl-6 sm:pl-0 self-start sm:self-center shrink-0">
                      <span className="text-[11px] font-mono text-[#cfbdff] bg-[#11121f] px-2.5 py-1 rounded border border-[#333441]">
                        {item.technology}
                      </span>

                      {item.githubUrl && (
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[#66d9ca] hover:text-[#cfbdff] transition-colors"
                        >
                          GitHub ↗
                        </a>
                      )}

                      {item.figmaUrl && (
                        <a
                          href={item.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[#66d9ca] hover:text-[#cfbdff] transition-colors"
                        >
                          Figma ↗
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => {
                          setExperimentsModalOpen(false);
                          onOpenProjectModal(item.id);
                        }}
                        className="text-[11px] font-mono text-[#948e9e] hover:text-[#e2e1f3] transition-colors"
                      >
                        Specs →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-[#333441] flex items-center justify-between text-xs font-mono text-[#948e9e]">
              <span>12 secondary exploratory entries</span>
              <button
                type="button"
                onClick={() => setExperimentsModalOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-[#282936] hover:bg-[#373846] text-[#e2e1f3] text-xs font-medium transition-colors"
              >
                Close List
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
