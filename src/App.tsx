import React, { useState } from 'react';
import { CosmicBackground } from './components/cosmic/CosmicBackground';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { UniverseSection } from './components/UniverseSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedProjectSection } from './components/FeaturedProjectSection';
import { AllProjectsSection } from './components/AllProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { CertificationsSection } from './components/CertificationsSection';
import { InterestsSection } from './components/InterestsSection';
import { SudokuSection } from './components/SudokuSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen text-[#e2e1f3] flex flex-col w-full max-w-full overflow-x-hidden relative selection:bg-[#9c7cf6] selection:text-[#320082]">
      {/* Global Realistic Deep-Space Cosmic Background System */}
      <CosmicBackground />

      {/* Sticky Navigation Header */}
      <Navigation onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Single-Page Vertical Flow: All 14 Sections Stacked Vertically */}
      <main className="relative z-10 w-full max-w-full overflow-x-hidden pt-20 flex flex-col">
        {/* Section 1: Home / Hero */}
        <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Section 2: About Me */}
        <AboutSection />

        {/* Section 3: Education & Foundations */}
        <EducationSection />

        {/* Section 4: Technical Toolkit & Skills */}
        <SkillsSection />

        {/* Section 5: Featured Projects (Crown Jewel) */}
        <FeaturedProjectSection onOpenProjectModal={(id) => setActiveProjectId(id)} />

        {/* Section 6: Other Things I've Built (Minimal Notice) */}
        <AllProjectsSection onOpenProjectModal={(id) => setActiveProjectId(id)} />

        {/* Section 7: Honors & Achievements */}
        <AchievementsSection />

        {/* Section 8: Leadership (Supporting Evidence) */}
        <LeadershipSection />

        {/* Section 9: Certifications & Workshops (Supporting Evidence) */}
        <CertificationsSection />

        {/* Section 10: Explore My Universe (Supporting Creative Identity) */}
        <UniverseSection />

        {/* Section 11: Interests ("Beyond The Terminal" - Personality) */}
        <InterestsSection />

        {/* Section 12: Interactive Sudoku (Playful Personality) */}
        <SudokuSection />

        {/* Section 13: Contact & Resume */}
        <ContactSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      </main>

      {/* Section 14: Footer */}
      <Footer />

      {/* Modals for Deep Inspecion */}
      <ProjectModal
        projectId={activeProjectId}
        onClose={() => setActiveProjectId(null)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
