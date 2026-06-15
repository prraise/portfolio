import React from "react";
import { ArrowUp, Cpu, Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  onSectionChange: (section: string) => void;
}

export function Footer({ onSectionChange }: FooterProps) {
  const handleScrollToTop = () => {
    onSectionChange("hero");
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onSectionChange(href.substring(1));
  };

  return (
    <footer id="footer" className="relative bg-[#F8FAFC] border-t border-purple-100 py-12 text-left z-10 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10 pb-8 border-b border-purple-100/60">
          {/* Brand/Slogan Column (4 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2"
              id="footer-logo"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A78BFA] to-pink-400 flex items-center justify-center text-white">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-[#1E293B] font-display font-extrabold text-lg">Praise</span>
            </a>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans font-semibold max-w-sm">
              Persistently designing and engineering digital solutions at the confluence of Computer Science, Machine Learning frameworks, and fast responsive web interfaces.
            </p>
          </div>

          {/* Quick Links Column (4 cols) */}
          <div className="md:col-span-4 space-y-3" id="footer-links-container">
            <h4 className="text-xs font-mono text-[#1E293B] uppercase tracking-widest font-bold">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
                className="text-[#475569] hover:text-purple-600 transition-colors py-1 block font-bold"
              >
                Home Base
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="text-[#475569] hover:text-purple-600 transition-colors py-1 block font-bold"
              >
                About Me
              </a>
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, "#experience")}
                className="text-[#475569] hover:text-purple-600 transition-colors py-1 block font-bold"
              >
                Experience
              </a>
              <a
                href="#education"
                onClick={(e) => handleNavClick(e, "#education")}
                className="text-[#475569] hover:text-purple-600 transition-colors py-1 block font-bold"
              >
                Education
              </a>
              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, "#skills")}
                className="text-[#475569] hover:text-purple-600 transition-colors py-1 block font-bold"
              >
                Tech Stack
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="text-[#475569] hover:text-purple-600 transition-colors py-1 block font-bold"
              >
                Projects
              </a>
              <a
                href="#achievements"
                onClick={(e) => handleNavClick(e, "#achievements")}
                className="text-[#475569] hover:text-purple-600 transition-colors py-1 block font-bold"
              >
                Achievements
              </a>
            </div>
          </div>

          {/* Contact Slogan Column (3 cols) */}
          <div className="md:col-span-3 space-y-3" id="footer-contact-info">
            <h4 className="text-xs font-mono text-[#1E293B] uppercase tracking-widest font-bold">Get In Touch</h4>
            <div className="space-y-2 text-xs font-sans">
              <a
                href="mailto:prraisee@gmail.com"
                className="text-[#475569] hover:text-purple-600 transition-colors font-bold block"
              >
                prraisee@gmail.com
              </a>
              <p className="text-[10px] font-mono text-purple-600 font-bold bg-purple-50/70 border border-purple-100 rounded-full px-2 py-0.5 inline-block">Available for Internships</p>
              
              {/* Social icons */}
              <div className="flex gap-2.5 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white border border-purple-100 text-[#475569] hover:text-purple-600 hover:bg-purple-50 transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white border border-purple-100 text-[#475569] hover:text-purple-600 hover:bg-purple-50 transition-colors shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-purple-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#475569] font-medium">
          <div className="text-center sm:text-left">
            <div>
              &copy; {new Date().getFullYear()} Praise. All rights reserved.
            </div>
            <div className="text-[10px] text-purple-650 font-mono font-bold mt-1">
              B.Tech Computer Science &amp; Engineering (Artificial Intelligence)
            </div>
          </div>

          {/* Back to top button */}
          <button
            id="back-to-top-btn"
            onClick={handleScrollToTop}
            className="group flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-purple-50 border border-purple-100 text-[#475569] hover:text-purple-650 transition-all cursor-pointer shadow-sm shadow-purple-100/5"
            title="Scroll to Top"
          >
            <span className="text-xs font-bold font-sans">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-purple-600" />
          </button>
        </div>

      </div>
    </footer>
  );
}
