import React from 'react';
import { User, Cpu, Brain, Palette } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full px-4 md:px-8 lg:px-12 py-20 bg-[#11121f]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#cfbdff] text-xs font-semibold uppercase tracking-widest">
              <User className="w-4 h-4 text-[#cfbdff] shrink-0" aria-hidden="true" />
              <span>Genesis &amp; Philosophy</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-[#e2e1f3] mt-1 font-normal">
              About Jophita Kristen S
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#cbc3d5] max-w-md font-light">
            Rooted in the coastal rhythm of Puducherry, building at the intersection of mathematical clarity, deep learning, and thoughtful design.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Narrative Card */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 rounded-2xl bg-[#1d1f2b]/80 border border-[#333441] shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9c7cf6]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="space-y-4 text-sm sm:text-base lg:text-lg text-[#cbc3d5] leading-relaxed font-light">
              <p>
                Hello! I am a <strong className="text-[#e2e1f3] font-medium">final-year Information Science &amp; Engineering</strong> student at <strong className="text-[#e2e1f3] font-medium">Women’s Engineering College, Lawspet, Puducherry</strong>. My engineering journey is driven by an insatiable curiosity about how complex algorithms and computer systems behave under the hood.
              </p>
              <p>
                From building explainable AI systems for diabetic retinopathy screening and OCR document pipelines to developing hospital management backends and conducting empirical ML benchmarks across datasets, I treat each problem as a puzzle waiting for an elegant, robust solution.
              </p>
              <p>
                Outside the terminal, I am drawn to astronomy, Formula 1 telemetry, creative UI design in Figma, and handwritten journaling. I believe the best engineers are polymaths—people who synthesize lessons from diverse domains to craft solutions that are technically grounded and genuinely helpful.
              </p>
            </div>

            {/* Handwritten marginal stamp */}
            <div className="pt-6 mt-6 border-t border-[#333441] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#66d9ca]"></span>
                <span className="text-xs uppercase tracking-wider text-[#948e9e] font-semibold">
                  Location: Puducherry (11.9416° N, 79.8083° E)
                </span>
              </div>
              <span className="font-label-handwritten text-xl text-[#ffb1c3]">
                “Currently building, learning &amp; figuring things out ✦”
              </span>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Pillar 1 */}
            <div className="p-5 rounded-xl bg-[#282936]/80 border border-[#333441] hover:border-[#cfbdff]/50 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#11121f] text-[#cfbdff] flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-[#cfbdff] shrink-0" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e2e1f3]">Analytical Rigor</h3>
                <p className="text-xs sm:text-sm text-[#cbc3d5] mt-1 font-light">
                  First-principles algorithmic deduction. Prioritizing memory safety, time complexity tradeoffs, and edge-case resilience.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-xl bg-[#282936]/80 border border-[#333441] hover:border-[#66d9ca]/50 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#11121f] text-[#66d9ca] flex items-center justify-center shrink-0">
                <Brain className="w-5 h-5 text-[#66d9ca] shrink-0" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e2e1f3]">Explainable AI</h3>
                <p className="text-xs sm:text-sm text-[#cbc3d5] mt-1 font-light">
                  Technology serving humanity. Designing interpretable models (like Grad-CAM in healthcare) that empower frontline doctors rather than obscuring reasoning.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-xl bg-[#282936]/80 border border-[#333441] hover:border-[#ffb1c3]/50 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#11121f] text-[#ffb1c3] flex items-center justify-center shrink-0">
                <Palette className="w-5 h-5 text-[#ffb1c3] shrink-0" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#e2e1f3]">Aesthetic Polymathy</h3>
                <p className="text-xs sm:text-sm text-[#cbc3d5] mt-1 font-light">
                  Engineering elevated by craft. Fusing typography, fluid interactions, and expressive storytelling into every interface.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
