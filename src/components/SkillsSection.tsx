import React, { useState } from 'react';
import {
  PROGRAMMING_LANGUAGES,
  TOOLS_SOFTWARE,
  FRAMEWORKS_LIBRARIES,
  DATABASES,
  TECHNICAL_AREAS
} from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'frameworks' | 'tools' | 'databases' | 'domains'>('all');

  return (
    <section
      id="skills"
      className="w-full px-4 md:px-8 lg:px-12 py-20 bg-[#11121f]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#cfbdff] text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>Competence &amp; Tools</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-[#e2e1f3] mt-1 font-normal">
              Technical Arsenal
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#cbc3d5] max-w-md font-light">
            Verified technologies, frameworks, simulation environments, and technical competencies applied across 18 engineered projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-[#cfbdff] text-[#11121f] shadow-lg shadow-[#cfbdff]/20 font-semibold'
                : 'bg-[#1d1f2b] text-[#cbc3d5] border border-[#333441] hover:text-[#e2e1f3]'
            }`}
          >
            All Competencies ({PROGRAMMING_LANGUAGES.length + TOOLS_SOFTWARE.length + FRAMEWORKS_LIBRARIES.length + DATABASES.length + TECHNICAL_AREAS.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('languages')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'languages'
                ? 'bg-[#66d9ca] text-[#11121f] shadow-lg shadow-[#66d9ca]/20 font-semibold'
                : 'bg-[#1d1f2b] text-[#cbc3d5] border border-[#333441] hover:text-[#e2e1f3]'
            }`}
          >
            Programming Languages ({PROGRAMMING_LANGUAGES.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('frameworks')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'frameworks'
                ? 'bg-[#ffb1c3] text-[#11121f] shadow-lg shadow-[#ffb1c3]/20 font-semibold'
                : 'bg-[#1d1f2b] text-[#cbc3d5] border border-[#333441] hover:text-[#e2e1f3]'
            }`}
          >
            Frameworks &amp; Libraries ({FRAMEWORKS_LIBRARIES.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tools')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'tools'
                ? 'bg-[#cfbdff] text-[#11121f] shadow-lg shadow-[#cfbdff]/20 font-semibold'
                : 'bg-[#1d1f2b] text-[#cbc3d5] border border-[#333441] hover:text-[#e2e1f3]'
            }`}
          >
            Tools &amp; Software ({TOOLS_SOFTWARE.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('databases')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'databases'
                ? 'bg-[#66d9ca] text-[#11121f] shadow-lg shadow-[#66d9ca]/20 font-semibold'
                : 'bg-[#1d1f2b] text-[#cbc3d5] border border-[#333441] hover:text-[#e2e1f3]'
            }`}
          >
            Databases ({DATABASES.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('domains')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'domains'
                ? 'bg-[#ffb1c3] text-[#11121f] shadow-lg shadow-[#ffb1c3]/20 font-semibold'
                : 'bg-[#1d1f2b] text-[#cbc3d5] border border-[#333441] hover:text-[#e2e1f3]'
            }`}
          >
            Technical Areas ({TECHNICAL_AREAS.length})
          </button>
        </div>

        {/* 5 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Programming Languages */}
          {(activeTab === 'all' || activeTab === 'languages') && (
            <div className="p-6 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-xl flex flex-col justify-between hover:border-[#cfbdff]/50 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#11121f] flex items-center justify-center text-[#cfbdff]">
                    <span className="material-symbols-outlined text-[22px]">code</span>
                  </div>
                  <span className="text-[11px] text-[#cfbdff] font-semibold uppercase tracking-wider bg-[#cfbdff]/10 px-2.5 py-1 rounded-full border border-[#cfbdff]/20">
                    6 Languages
                  </span>
                </div>
                <h3 className="text-xl text-[#e2e1f3] font-medium">Programming Languages</h3>
                <p className="text-xs sm:text-sm text-[#cbc3d5] font-light">
                  Core syntax for algorithmic computation, mathematical modeling, and structured querying.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {PROGRAMMING_LANGUAGES.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1.5 rounded-xl bg-[#282936] border border-[#333441] text-[#e2e1f3] text-xs sm:text-sm font-medium hover:border-[#cfbdff]/60 hover:text-[#cfbdff] transition-colors"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#333441]/60 text-xs text-[#948e9e] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                <span>Applied in ML, systems, and data manipulation</span>
              </div>
            </div>
          )}

          {/* Card 2: Frameworks & Libraries */}
          {(activeTab === 'all' || activeTab === 'frameworks') && (
            <div className="p-6 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-xl flex flex-col justify-between hover:border-[#ffb1c3]/50 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#11121f] flex items-center justify-center text-[#ffb1c3]">
                    <span className="material-symbols-outlined text-[22px]">layers</span>
                  </div>
                  <span className="text-[11px] text-[#ffb1c3] font-semibold uppercase tracking-wider bg-[#ffb1c3]/10 px-2.5 py-1 rounded-full border border-[#ffb1c3]/20">
                    15 Libraries
                  </span>
                </div>
                <h3 className="text-xl text-[#e2e1f3] font-medium">Frameworks &amp; Libraries</h3>
                <p className="text-xs sm:text-sm text-[#cbc3d5] font-light">
                  Libraries for deep learning, computer vision, data manipulation, and full-stack services.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {FRAMEWORKS_LIBRARIES.map((lib) => (
                    <span
                      key={lib}
                      className="px-2.5 py-1.5 rounded-xl bg-[#282936] border border-[#333441] text-[#e2e1f3] text-xs font-medium hover:border-[#ffb1c3]/60 hover:text-[#ffb1c3] transition-colors"
                    >
                      {lib}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#333441]/60 text-xs text-[#948e9e] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                <span>From PyTorch &amp; Keras to React &amp; Express</span>
              </div>
            </div>
          )}

          {/* Card 3: Tools & Software */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className="p-6 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-xl flex flex-col justify-between hover:border-[#66d9ca]/50 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#11121f] flex items-center justify-center text-[#66d9ca]">
                    <span className="material-symbols-outlined text-[22px]">construction</span>
                  </div>
                  <span className="text-[11px] text-[#66d9ca] font-semibold uppercase tracking-wider bg-[#66d9ca]/10 px-2.5 py-1 rounded-full border border-[#66d9ca]/20">
                    12 Tools
                  </span>
                </div>
                <h3 className="text-xl text-[#e2e1f3] font-medium">Tools &amp; Software</h3>
                <p className="text-xs sm:text-sm text-[#cbc3d5] font-light">
                  Simulation runtimes, developer environments, design systems, and model runtimes.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {TOOLS_SOFTWARE.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1.5 rounded-xl bg-[#282936] border border-[#333441] text-[#e2e1f3] text-xs font-medium hover:border-[#66d9ca]/60 hover:text-[#66d9ca] transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#333441]/60 text-xs text-[#948e9e] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">precision_manufacturing</span>
                <span>CoppeliaSim, Simulink, Figma, Ollama</span>
              </div>
            </div>
          )}

          {/* Card 4: Databases */}
          {(activeTab === 'all' || activeTab === 'databases') && (
            <div className="p-6 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-xl flex flex-col justify-between hover:border-[#cfbdff]/50 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#11121f] flex items-center justify-center text-[#cfbdff]">
                    <span className="material-symbols-outlined text-[22px]">database</span>
                  </div>
                  <span className="text-[11px] text-[#cfbdff] font-semibold uppercase tracking-wider bg-[#cfbdff]/10 px-2.5 py-1 rounded-full border border-[#cfbdff]/20">
                    Relational &amp; Document
                  </span>
                </div>
                <h3 className="text-xl text-[#e2e1f3] font-medium">Databases</h3>
                <p className="text-xs sm:text-sm text-[#cbc3d5] font-light">
                  ACID-compliant relational schemas and document stores for structured persistence.
                </p>
                <div className="flex flex-col gap-2.5 pt-2">
                  {DATABASES.map((db) => (
                    <div
                      key={db}
                      className="p-3 rounded-xl bg-[#282936] border border-[#333441] flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-[#e2e1f3]">{db}</span>
                      <span className="text-xs text-[#66d9ca]">Structured Storage</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#333441]/60 text-xs text-[#948e9e] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">table_rows</span>
                <span>Normalized schemas &amp; query efficiency</span>
              </div>
            </div>
          )}

          {/* Card 5: Technical Areas (Spans 2 cols on lg when all selected) */}
          {(activeTab === 'all' || activeTab === 'domains') && (
            <div className={`p-6 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-xl flex flex-col justify-between hover:border-[#66d9ca]/50 transition-all duration-300 ${activeTab === 'all' ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#11121f] flex items-center justify-center text-[#66d9ca]">
                    <span className="material-symbols-outlined text-[22px]">psychology</span>
                  </div>
                  <span className="text-[11px] text-[#66d9ca] font-semibold uppercase tracking-wider bg-[#66d9ca]/10 px-2.5 py-1 rounded-full border border-[#66d9ca]/20">
                    15 Domains
                  </span>
                </div>
                <h3 className="text-xl text-[#e2e1f3] font-medium">Technical Competency Areas</h3>
                <p className="text-xs sm:text-sm text-[#cbc3d5] font-light">
                  Key functional domains covered across undergraduate coursework, hackathons, and software projects.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {TECHNICAL_AREAS.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 rounded-xl bg-[#282936] border border-[#333441] text-[#e2e1f3] text-xs font-medium hover:border-[#66d9ca]/60 hover:text-[#66d9ca] transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#333441]/60 text-xs text-[#948e9e] flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span>Directly mapped to 18 verified projects</span>
                </span>
                <span className="font-label-handwritten text-base text-[#ffb1c3]">
                  Applied Depth ✦
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
