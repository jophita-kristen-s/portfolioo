import React, { useState } from 'react';
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
    <div className="min-h-screen cosmic-gradient text-[#e2e1f3] flex flex-col w-full max-w-full overflow-x-hidden selection:bg-[#9c7cf6] selection:text-[#320082]">
      {/* Sticky Navigation Header */}
      <Navigation onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Single-Page Vertical Flow: All 14 Sections Stacked Vertically */}
      <main className="w-full max-w-full overflow-x-hidden pt-20 flex flex-col">
        {/* Section 1: Home / Hero */}
        <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Section 2: Explore My Universe */}
        <UniverseSection />

        {/* Section 3: About Me */}
        <AboutSection />

        {/* Section 4: Education */}
        <EducationSection />

        {/* Section 5: Skills */}
        <SkillsSection />

        {/* Section 6: Featured Projects */}
        <FeaturedProjectSection onOpenProjectModal={(id) => setActiveProjectId(id)} />

        {/* Section 7: All Projects */}
        <AllProjectsSection onOpenProjectModal={(id) => setActiveProjectId(id)} />

        {/* Section 8: Achievements */}
        <AchievementsSection />

        {/* Section 9: Leadership */}
        <LeadershipSection />

        {/* Section 10: Certifications */}
        <CertificationsSection />

        {/* Section 11: Interests ("Beyond The Terminal") */}
        <InterestsSection />

        {/* Section 12: Interactive Sudoku */}
        <SudokuSection />

        {/* Section 13: Contact */}
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
