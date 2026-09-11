import React, { useState } from 'react';
import { ALL_PROJECTS } from '../data/portfolioData';

interface FeaturedProjectSectionProps {
  onOpenProjectModal: (projectId: string) => void;
}

export const FeaturedProjectSection: React.FC<FeaturedProjectSectionProps> = ({ onOpenProjectModal }) => {
  const drProject = ALL_PROJECTS.find(p => p.id === 'dr-screening') || ALL_PROJECTS[0];
  const [showHeatmap, setShowHeatmap] = useState<boolean>(true);
  const [simulating, setSimulating] = useState<boolean>(false);
  const [simulationStatus, setSimulationStatus] = useState<string>('Grad-CAM Heatmap Layer: Active');

  const runSimulation = () => {
    setSimulating(true);
    setSimulationStatus('Running Quality Audit...');
    setTimeout(() => {
      setSimulationStatus('Enhancing Contrast & Filtering Noise...');
    }, 700);
    setTimeout(() => {
      setSimulationStatus('Localizing Microaneurysms & Exudates...');
    }, 1400);
    setTimeout(() => {
      setSimulationStatus('Grad-CAM Heatmap Active: Lesion Localization Complete');
      setSimulating(false);
      setShowHeatmap(true);
    }, 2100);
  };

  return (
    <section
      id="projects"
      className="w-full px-4 md:px-8 lg:px-12 py-20 bg-[#0c0d19]/80 border-t border-[#1d1f2b]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#ffb1c3] text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Selected Work</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-[#e2e1f3] mt-1 font-normal">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#cbc3d5] max-w-md font-light">
            Real solutions designed for clinical, civic, and spatial problem spaces. Built to perform under genuine field constraints.
          </p>
        </div>

        {/* Flagship Project Spotlight Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#9c7cf6]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Clinical Case Narrative */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Badge Row */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#9c7cf6]/20 border border-[#9c7cf6]/30 text-[#cfbdff] text-xs font-semibold uppercase tracking-wider">
                  {drProject.badgeCategory}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#66d9ca]/10 border border-[#66d9ca]/30 text-[#66d9ca] text-xs font-semibold uppercase tracking-wider">
                  {drProject.statusLabel}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-headline-md text-3xl sm:text-4xl text-[#e2e1f3] font-normal leading-tight">
                  {drProject.title}
                </h3>
                <p className="text-sm sm:text-base text-[#66d9ca] font-medium mt-1">
                  {drProject.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#cbc3d5] leading-relaxed font-light">
                {drProject.description}
              </p>

              {/* 4-Step Engineering Pipeline */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-lg bg-[#11121f] border border-[#282936]">
                  <div className="text-[11px] text-[#cfbdff] uppercase tracking-wider font-semibold">
                    Step 01
                  </div>
                  <div className="text-xs text-[#e2e1f3] font-medium mt-0.5">Quality Audit</div>
                  <div className="text-[11px] text-[#948e9e] font-light">Illumination &amp; blur filter</div>
                </div>
                <div className="p-3 rounded-lg bg-[#11121f] border border-[#282936]">
                  <div className="text-[11px] text-[#66d9ca] uppercase tracking-wider font-semibold">
                    Step 02
                  </div>
                  <div className="text-xs text-[#e2e1f3] font-medium mt-0.5">Enhancement</div>
                  <div className="text-[11px] text-[#948e9e] font-light">Retinal vessel equalization</div>
                </div>
                <div className="p-3 rounded-lg bg-[#11121f] border border-[#282936]">
                  <div className="text-[11px] text-[#ffb1c3] uppercase tracking-wider font-semibold">
                    Step 03
                  </div>
                  <div className="text-xs text-[#e2e1f3] font-medium mt-0.5">Lesion Map</div>
                  <div className="text-[11px] text-[#948e9e] font-light">Micro-aneurysm localization</div>
                </div>
                <div className="p-3 rounded-lg bg-[#11121f] border border-[#282936]">
                  <div className="text-[11px] text-[#e8ddff] uppercase tracking-wider font-semibold">
                    Step 04
                  </div>
                  <div className="text-xs text-[#e2e1f3] font-medium mt-0.5">Severity Grade</div>
                  <div className="text-[11px] text-[#948e9e] font-light">Clinical NPDR staging</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {drProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-[#11121f] border border-[#333441] text-xs text-[#cbc3d5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenProjectModal(drProject.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#282936] hover:bg-[#373846] border border-[#494553] text-[#e2e1f3] hover:text-[#cfbdff] text-sm font-medium transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">menu_book</span>
                  <span>View Project Details</span>
                </button>
                <button
                  type="button"
                  onClick={runSimulation}
                  disabled={simulating}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#9c7cf6] to-[#6847bf] text-[#11121f] text-sm font-semibold hover:shadow-lg hover:shadow-[#9c7cf6]/30 transition-all disabled:opacity-75"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {simulating ? 'autorenew' : 'play_circle'}
                  </span>
                  <span>{simulating ? 'Scanning...' : 'Rerun Triage'}</span>
                </button>
                <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#11121f] border border-[#333441] text-xs font-medium text-[#948e9e] select-none">
                  <span>Private Repository 🔒</span>
                </span>
              </div>
            </div>

            {/* Right Column: Live Retinal Telemetry Canvas */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative rounded-2xl bg-[#0c0d19] border border-[#333441] p-5 shadow-2xl overflow-hidden">
                
                {/* Canvas Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#1d1f2b]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#66d9ca] animate-pulse"></span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#e2e1f3]">
                      Retinal Fundus Telemetry
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowHeatmap(!showHeatmap)}
                      className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors ${
                        showHeatmap
                          ? 'bg-[#cfbdff]/20 text-[#cfbdff] border border-[#cfbdff]/40'
                          : 'bg-[#1d1f2b] text-[#948e9e] border border-[#282936]'
                      }`}
                    >
                      {showHeatmap ? 'Heatmap: ON' : 'Heatmap: OFF'}
                    </button>
                    <span className="text-xs text-[#948e9e] font-mono">OD: +0.25</span>
                  </div>
                </div>

                {/* SVG Visual Fundus Diagram */}
                <div className="relative w-full aspect-square max-h-[340px] mx-auto my-2 rounded-xl bg-gradient-to-br from-[#1a0f0d] via-[#241311] to-[#120a09] border border-[#3d2420] overflow-hidden flex items-center justify-center">
                  
                  {/* Fundus Background glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_45%,#662211_0%,#3d140a_50%,#180805_100%)] opacity-80"></div>

                  {/* Scanning line animation during simulation */}
                  {simulating && (
                    <div className="absolute inset-x-0 h-1 bg-[#66d9ca] shadow-[0_0_15px_#66d9ca] z-20 animate-[bounce_2s_infinite]"></div>
                  )}

                  {/* Retinal Fundus Vector Graphic */}
                  <svg className="w-full h-full p-6" viewBox="0 0 400 400">
                    <defs>
                      <radialGradient id="opticDisc" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ffecb3" />
                        <stop offset="70%" stopColor="#ffb74d" />
                        <stop offset="100%" stopColor="#e65100" />
                      </radialGradient>
                      <radialGradient id="heatmapGradCam" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ff1744" stopOpacity="0.8" />
                        <stop offset="40%" stopColor="#ff9100" stopOpacity="0.6" />
                        <stop offset="75%" stopColor="#ffea00" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00e676" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Retinal Boundary */}
                    <circle cx="200" cy="200" r="175" fill="none" stroke="#5d2618" strokeWidth="2" strokeDasharray="3 6" opacity="0.6" />

                    {/* Optic Disc */}
                    <circle cx="120" cy="190" r="32" fill="url(#opticDisc)" opacity="0.9" />
                    <circle cx="120" cy="190" r="14" fill="#fff9c4" opacity="0.85" />

                    {/* Macula & Fovea */}
                    <circle cx="260" cy="205" r="26" fill="#3a110a" opacity="0.8" />
                    <circle cx="260" cy="205" r="5" fill="#1b0502" />

                    {/* Retinal Blood Vessels (Arteries & Veins) */}
                    <g stroke="#992015" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85">
                      <path d="M 120 190 Q 140 140 180 110 T 260 80 T 330 65" />
                      <path d="M 120 190 Q 150 240 200 280 T 280 320 T 340 335" />
                      <path d="M 120 190 Q 80 140 60 100" />
                      <path d="M 120 190 Q 80 240 55 290" />
                      <path d="M 180 110 Q 210 130 250 140" strokeWidth="1.8" />
                      <path d="M 200 280 Q 230 260 260 250" strokeWidth="1.8" />
                    </g>

                    {/* Micro-aneurysms & Exudates */}
                    <circle cx="215" cy="150" r="3" fill="#ff1744" />
                    <circle cx="230" cy="170" r="2.5" fill="#ff1744" />
                    <circle cx="275" cy="140" r="2" fill="#ff1744" />
                    <circle cx="285" cy="250" r="3" fill="#ffea00" />
                    <circle cx="240" cy="265" r="2.5" fill="#ffea00" />

                    {/* Grad-CAM Heatmap Layer (Toggleable) */}
                    {showHeatmap && (
                      <g className="transition-opacity duration-500">
                        {/* Primary hotspot around micro-aneurysm cluster */}
                        <circle cx="225" cy="160" r="55" fill="url(#heatmapGradCam)" />
                        {/* Secondary hotspot */}
                        <circle cx="265" cy="245" r="45" fill="url(#heatmapGradCam)" opacity="0.85" />
                      </g>
                    )}
                  </svg>

                  {/* Telemetry Annotation Box */}
                  <div className="absolute top-3 left-3 bg-[#0c0d19]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#333441] text-[11px] font-mono">
                    <span className="text-[#66d9ca]">ENGINE:</span> MATLAB • Simulink • Grad-CAM
                  </div>

                  <div className="absolute bottom-3 right-3 bg-[#0c0d19]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#333441] text-[11px] font-mono">
                    <span className="text-[#cfbdff]">GRADING:</span> Level 0–4 Severity
                  </div>
                </div>

                {/* Canvas Status & Metrics Footer */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#cbc3d5]">
                    <span className="material-symbols-outlined text-[16px] text-[#66d9ca]">
                      radar
                    </span>
                    <span>{simulationStatus}</span>
                  </div>
                  <div className="text-[#66d9ca] font-semibold">
                    Prototype: SIH 2026 Nominee
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
