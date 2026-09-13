import React, { useState, useEffect } from 'react';
import { HERO_IMAGE_URL } from '../data/portfolioData';

interface NavigationProps {
  onOpenResumeModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [stardustActive, setStardustActive] = useState<boolean>(true);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  // ScrollSpy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'universe', 'about', 'education', 'skills', 'projects', 'achievements', 'leadership', 'certifications', 'interests', 'sudoku', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          // Map sub-sections to their primary navigation item
          if (sectionId === 'universe' || sectionId === 'education') {
            setActiveSection('about');
          } else if (sectionId === 'leadership' || sectionId === 'certifications') {
            setActiveSection('achievements');
          } else if (sectionId === 'sudoku') {
            setActiveSection('interests');
          } else {
            setActiveSection(sectionId);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0c0d19]/80 backdrop-blur-xl border-b border-[#282936]/60 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="group flex items-center gap-2 text-[#e2e1f3] hover:text-[#cfbdff] transition-colors"
          >
            <span className="text-[#cfbdff] font-headline-md text-2xl tracking-tight transition-transform group-hover:rotate-12 duration-300">
              ✦
            </span>
            <span className="font-title-editorial text-xl md:text-2xl tracking-tight text-[#e2e1f3] group-hover:text-[#cfbdff] transition-colors">
              Jophita Kristen S
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'achievements', label: 'Achievements' },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm tracking-wide transition-all py-1 relative ${
                  isActive
                    ? 'text-[#cfbdff] font-semibold after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#cfbdff] after:rounded-full after:shadow-[0_0_8px_#cfbdff]'
                    : 'text-[#cbc3d5] hover:text-[#e2e1f3]'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Understated Professional Resume Nav Item */}
          <button
            type="button"
            onClick={onOpenResumeModal}
            className="text-sm tracking-wide transition-all py-1 px-3 rounded-md text-[#e2e1f3] hover:text-[#cfbdff] bg-[#1d1f2b]/70 border border-[#333441] hover:border-[#cfbdff]/40 hover:bg-[#282936] flex items-center gap-1.5 cursor-pointer"
            title="View Resume"
          >
            <span className="material-symbols-outlined text-[15px] text-[#cfbdff]">description</span>
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            aria-current={activeSection === 'contact' ? 'page' : undefined}
            className={`text-sm tracking-wide transition-all py-1 relative ${
              activeSection === 'contact'
                ? 'text-[#cfbdff] font-semibold after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#cfbdff] after:rounded-full after:shadow-[0_0_8px_#cfbdff]'
                : 'text-[#cbc3d5] hover:text-[#e2e1f3]'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Action Controls & Avatar */}
        <div className="flex items-center gap-3">
          {/* Celestial Stardust Mode Toggle */}
          <button
            type="button"
            onClick={() => setStardustActive(!stardustActive)}
            title={stardustActive ? "Celestial Glow Active" : "Subtle Mode"}
            aria-label="Toggle Celestial Theme"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              stardustActive
                ? 'bg-[#282936] text-[#66d9ca] shadow-[0_0_12px_rgba(102,217,202,0.3)]'
                : 'bg-[#1d1f2b]/60 text-[#cbc3d5] hover:text-[#e2e1f3]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {stardustActive ? 'stars' : 'nightlight'}
            </span>
          </button>

          {/* Let's Connect CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#9c7cf6] to-[#6847bf] text-[#11121f] font-semibold text-sm shadow-[0_4px_16px_rgba(156,124,246,0.35)] hover:shadow-[0_8px_24px_rgba(156,124,246,0.55)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Let's Connect
          </a>

          {/* Profile Avatar with celestial ring */}
          <button
            type="button"
            onClick={onOpenResumeModal}
            title="View Jophita's Profile & Resume"
            className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-[#cfbdff]"
          >
            <img
              src={HERO_IMAGE_URL}
              alt="Jophita Kristen S Profile"
              className="w-9 h-9 rounded-full object-cover border border-[#9c7cf6]/50 shadow-[0_0_10px_rgba(207,189,255,0.4)]"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#66d9ca] ring-2 ring-[#0c0d19]"></span>
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center bg-[#1d1f2b] text-[#e2e1f3] hover:text-[#cfbdff]"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0d19]/95 backdrop-blur-2xl border-b border-[#282936] px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {[
            { id: 'home', label: 'Home' },
            { id: 'universe', label: 'Explore Universe' },
            { id: 'about', label: 'About' },
            { id: 'education', label: 'Education' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'achievements', label: 'Achievements' },
            { id: 'leadership', label: 'Leadership' },
            { id: 'certifications', label: 'Certifications' },
            { id: 'interests', label: 'Interests' },
            { id: 'sudoku', label: 'Interactive Sudoku' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-base text-[#e2e1f3] hover:text-[#cfbdff] py-1.5 flex items-center justify-between border-b border-[#1d1f2b]"
            >
              <span>{item.label}</span>
              <span className="material-symbols-outlined text-[18px] text-[#948e9e]">arrow_forward</span>
            </a>
          ))}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#1d1f2b] border border-[#cfbdff]/40 text-[#cfbdff] text-sm font-semibold hover:bg-[#282936] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full min-h-[44px] flex items-center justify-center py-3 rounded-lg bg-gradient-to-r from-[#9c7cf6] to-[#6847bf] text-[#11121f] font-semibold text-sm"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
