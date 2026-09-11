import React, { useState } from 'react';
import { ALL_PROJECTS } from '../data/portfolioData';

interface AllProjectsSectionProps {
  onOpenProjectModal: (projectId: string) => void;
}

export const AllProjectsSection: React.FC<AllProjectsSectionProps> = ({ onOpenProjectModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai-ml' | 'web-app' | 'research' | 'design-tools'>('all');

  const filteredProjects = selectedCategory === 'all'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === selectedCategory);

  const getCategoryCount = (cat: 'all' | 'ai-ml' | 'web-app' | 'research' | 'design-tools') => {
    if (cat === 'all') return ALL_PROJECTS.length;
    return ALL_PROJECTS.filter(p => p.category === cat).length;
  };

  return (
    <section id="all-projects" className="w-full px-4 md:px-8 lg:px-12 py-16 bg-[#0c0d19]/40 border-b border-[#1d1f2b]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#cfbdff]">
              CATALOG &amp; ARCHIVE
            </div>
            <h3 className="font-headline-md text-2xl sm:text-3xl text-[#e2e1f3] font-normal mt-1">
              All 18 Engineered Projects
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Projects', count: getCategoryCount('all') },
              { id: 'ai-ml', label: 'AI, ML & Vision', count: getCategoryCount('ai-ml') },
              { id: 'web-app', label: 'Web & Systems', count: getCategoryCount('web-app') },
              { id: 'research', label: 'ML Benchmarks', count: getCategoryCount('research') },
              { id: 'design-tools', label: 'UI / Design', count: getCategoryCount('design-tools') }
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id as 'all' | 'ai-ml' | 'web-app' | 'research' | 'design-tools')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#cfbdff] text-[#11121f] font-semibold shadow-md shadow-[#cfbdff]/20'
                      : 'bg-[#1d1f2b] text-[#cbc3d5] hover:bg-[#282936] hover:text-[#e2e1f3] border border-[#333441]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`ml-1.5 text-[10px] ${isActive ? 'text-[#11121f]' : 'text-[#948e9e]'}`}>
                    ({tab.count < 10 ? `0${tab.count}` : tab.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-[#1d1f2b]/80 border border-[#333441] shadow-lg flex flex-col justify-between hover:border-[#cfbdff]/50 hover:bg-[#282936]/90 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-4">
                {/* Banner / Visual Spec Box */}
                <div className="relative p-4 rounded-xl bg-[#0c0d19] border border-[#282936] overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#cfbdff] font-medium">{project.bannerTitle}</span>
                    <span className="text-[#66d9ca] font-semibold">{project.statusLabel}</span>
                  </div>
                  <div className="mt-3">
                    <div className="text-sm font-semibold text-[#e2e1f3]">{project.bannerDetail}</div>
                    <div className="text-xs text-[#948e9e] mt-0.5">{project.bannerSubtext}</div>
                  </div>
                </div>

                {/* Number & Category */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-mono text-[#948e9e] font-medium">{project.number}</span>
                  <span className="text-[#cfbdff] uppercase tracking-wider font-semibold text-[11px]">
                    {project.badgeCategory}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h4 className="font-title-editorial text-xl text-[#e2e1f3] font-medium group-hover:text-[#cfbdff] transition-colors leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-xs text-[#66d9ca] font-medium mt-1">
                    {project.subtitle}
                  </p>
                  {project.teamSize && (
                    <div className="text-[11px] text-[#ffb1c3] font-mono mt-1">
                      ✦ {project.teamSize}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#cbc3d5] font-light leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Features list bullet points if available */}
                {project.features && project.features.length > 0 && (
                  <div className="space-y-1 pt-1">
                    <div className="text-[11px] uppercase tracking-wider text-[#948e9e] font-semibold">
                      Key Highlights:
                    </div>
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="text-xs text-[#cbc3d5] flex items-center gap-1.5 truncate">
                        <span className="text-[#66d9ca]">▹</span>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#11121f] border border-[#333441] text-[11px] text-[#cbc3d5]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-[#11121f] text-[11px] text-[#948e9e]">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-[#333441]/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenProjectModal(project.id)}
                  className="text-xs font-semibold text-[#cfbdff] hover:text-[#66d9ca] flex items-center gap-1.5 transition-colors"
                >
                  <span>Inspect System Architecture</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <span className="material-symbols-outlined text-[#948e9e] text-[18px]">
                  {project.iconName}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
