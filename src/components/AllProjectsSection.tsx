import React from 'react';

interface AllProjectsSectionProps {
  onOpenProjectModal?: (projectId: string) => void;
}

export const AllProjectsSection: React.FC<AllProjectsSectionProps> = () => {
  return (
    <section id="other-projects" className="w-full px-4 md:px-8 lg:px-12 py-8 sm:py-10 bg-[#0c0d19]/60 border-b border-[#1d1f2b]">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-xl bg-[#11121f]/70 border border-[#282936]">
        <div className="flex flex-col gap-1 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#948e9e]">
            <span className="text-[#66d9ca]">✦</span>
            <span>ADDITIONAL WORK</span>
          </div>
          <h3 className="font-headline-sm text-lg sm:text-xl text-[#e2e1f3] font-normal">
            Other Things I&apos;ve Built
          </h3>
          <p className="text-xs sm:text-sm text-[#cbc3d5] font-light leading-relaxed">
            Additional academic projects, coursework systems, and exploratory prototypes exist and are currently being prepared for upload with complete documentation.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1d1f2b] border border-[#333441] text-xs font-mono text-[#cfbdff]">
          <span className="w-2 h-2 rounded-full bg-[#66d9ca] animate-pulse"></span>
          <span>Documentation in progress</span>
        </div>
      </div>
    </section>
  );
};

