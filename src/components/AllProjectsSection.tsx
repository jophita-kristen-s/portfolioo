import React from 'react';
import { SECONDARY_PROJECTS } from '../data/portfolioData';

interface AllProjectsSectionProps {
  onOpenProjectModal?: (projectId: string) => void;
}

export const AllProjectsSection: React.FC<AllProjectsSectionProps> = () => {
  return (
    <section id="other-projects" className="w-full px-4 md:px-8 lg:px-12 py-12 sm:py-14 bg-[#0c0d19]/60 border-b border-[#1d1f2b]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
        
        {/* Section Heading & Context */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-[#948e9e]">
            ACADEMIC &amp; EXPLORATORY WORK
          </div>
          <h3 className="font-headline-md text-2xl sm:text-3xl text-[#e2e1f3] font-normal">
            More Things I&apos;ve Built
          </h3>
          <p className="text-sm text-[#cbc3d5] font-light leading-relaxed">
            More experiments, academic projects, and ideas I&apos;ve explored — detailed documentation is being added soon.
          </p>
        </div>

        {/* Compact List of Project Chips/Tags */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
          {SECONDARY_PROJECTS.map((project) => (
            <span
              key={project.id}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#1d1f2b]/90 text-xs font-mono text-[#cbc3d5] border border-[#282936] shadow-sm select-none"
            >
              <span className="text-[#66d9ca]/70 text-[10px]">✦</span>
              <span>{project.chipLabel}</span>
            </span>
          ))}
        </div>

        {/* Quiet Cosmic Divider & Consistent Coming Soon Status Treatment */}
        <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs font-mono text-[#948e9e]">
          <span className="text-[#cfbdff]/60 text-xs hidden sm:inline">✦</span>
          <span className="text-[#cfbdff]/85 font-medium tracking-wide">
            More project documentation coming soon.
          </span>
          <span className="hidden sm:inline text-[#333441]">•</span>
          <span className="text-[#948e9e] font-light tracking-wide">
            Documentation in progress ✦
          </span>
        </div>

      </div>
    </section>
  );
};

