import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="w-full bg-[#0c0d19] border-t border-[#1d1f2b] pt-16 pb-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Top Tier: Brand, Navigation & Socials */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[#cfbdff] text-2xl">✦</span>
              <span className="font-title-editorial text-2xl text-[#e2e1f3] tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-[#948e9e] tracking-wide">
              {PERSONAL_INFO.degree} • {PERSONAL_INFO.institution}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-sm text-[#cbc3d5]">
            {[
              { id: 'home', label: 'Home' },
              { id: 'universe', label: 'Universe' },
              { id: 'about', label: 'About' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'leadership', label: 'Leadership' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'interests', label: 'Interests' },
              { id: 'contact', label: 'Contact' }
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="hover:text-[#cfbdff] transition-colors py-1 inline-block"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1d1f2b] text-[#cfbdff] hover:bg-[#282936] text-xs font-semibold border border-[#333441] transition-all min-h-[44px] cursor-pointer"
          >
            <span>Top of Orbit</span>
            <ArrowUp className="w-4 h-4 shrink-0" aria-hidden="true" />
          </button>
        </div>

        {/* Center: Handwritten aesthetic note */}
        <div className="text-center py-4 border-y border-[#1d1f2b] flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="font-label-handwritten text-xl sm:text-2xl text-[#ffb1c3]">
            “From Puducherry to the cosmos ✦”
          </span>
          <span className="hidden sm:inline text-[#494553]">•</span>
          <span className="text-xs font-mono text-[#66d9ca]">
            11.9416° N, 79.8083° E (Puducherry)
          </span>
        </div>

        {/* Bottom Tier: Legal & Social links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#948e9e]">
          <div>
            © 2026 {PERSONAL_INFO.name}. All verified portfolio records reserved.
          </div>
          <div className="flex items-center gap-4 text-[#cbc3d5]">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#cfbdff] transition-colors"
            >
              Email
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#cfbdff] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
