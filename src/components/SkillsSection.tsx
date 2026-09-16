import React from 'react';
import { Terminal } from 'lucide-react';

interface SkillCategory {
  id: string;
  number: string;
  title: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    number: '01',
    title: 'PROGRAMMING',
    skills: [
      'Python',
      'SQL',
      'JavaScript',
      'C',
      'MATLAB',
      'HTML/CSS',
    ],
  },
  {
    id: 'ai-machine-learning',
    number: '02',
    title: 'AI / MACHINE LEARNING',
    skills: [
      'AI/ML',
      'Deep Learning',
      'Computer Vision',
      'Explainable AI',
      'TensorFlow / Keras',
      'PyTorch',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'OpenCV',
    ],
  },
  {
    id: 'development',
    number: '03',
    title: 'DEVELOPMENT',
    skills: [
      'Node.js',
      'Express.js',
      'Flask',
      'React.js',
      'React Native',
      'Vite',
      'REST APIs',
      'Socket.IO',
    ],
  },
  {
    id: 'databases',
    number: '04',
    title: 'DATABASES',
    skills: [
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'Firebase',
    ],
  },
  {
    id: 'tools-platforms',
    number: '05',
    title: 'TOOLS & PLATFORMS',
    skills: [
      'MATLAB Online',
      'Simulink',
      'CoppeliaSim',
      'VS Code',
      'Google Colab',
      'Git / GitHub',
      'Postman',
      'PowerShell',
      'Figma',
      'Ollama',
      'pgAdmin',
    ],
  },
  {
    id: 'technical-areas',
    number: '06',
    title: 'TECHNICAL AREAS',
    skills: [
      'Data Preprocessing',
      'Data Analysis & Visualization',
      'GenAI / LLM Integration',
      'Robotics Simulation',
      'Real-Time Applications',
      'Backend Development',
      'Database Design',
      'Basic Cybersecurity',
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="w-full px-4 md:px-8 lg:px-12 py-20 bg-[#020617]/35 border-t border-[#1e2238]/60 backdrop-blur-[1px]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#282936] pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#cfbdff] text-xs font-semibold uppercase tracking-widest">
              <Terminal className="w-4 h-4 text-[#cfbdff] shrink-0" aria-hidden="true" />
              <span>ENGINEERING REPERTOIRE</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-[#e2e1f3] mt-1 font-normal tracking-tight">
              TECHNICAL TOOLKIT
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm md:text-base text-[#cbc3d5] font-light leading-relaxed">
              Hands-on experience across AI, software development, data, databases, and engineering tools.
            </p>
          </div>
        </div>

        {/* 6 Category Clusters / Constellations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-4 sm:p-6 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-xl hover:border-[#494553] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-4">
                
                {/* Category Header with Subtle Constellation Accent */}
                <div className="flex items-center justify-between border-b border-[#282936] pb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-[#cfbdff] text-sm font-bold shrink-0">✦</span>
                    <h3 className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-[#e2e1f3] uppercase truncate">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#948e9e] px-2 py-0.5 rounded bg-[#11121f] border border-[#282936] shrink-0">
                    {cat.skills.length}
                  </span>
                </div>

                {/* Skill Chips Cluster - Strict Equal Visual Weight Across Every Skill */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="group inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#11121f] border border-[#333441] hover:border-[#cfbdff]/50 hover:bg-[#282936] text-xs font-mono text-[#e2e1f3] transition-colors cursor-default shadow-sm break-words"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#66d9ca]/70 group-hover:bg-[#66d9ca] transition-colors shrink-0"></span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer: Subtle Node Indicator */}
              <div className="mt-5 pt-3 border-t border-[#282936] flex items-center justify-between text-[11px] font-mono text-[#948e9e]">
                <span>CLUSTER {cat.number}</span>
                <span className="text-[#66d9ca]/80">Working knowledge</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
