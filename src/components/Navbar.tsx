import React, { useState, useEffect } from "react";
import { Cpu, User, GraduationCap, Briefcase, Layers, Sparkles, FolderGit2, CalendarRange, Mail, FileText } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavbarProps {
  onOpenResumeModal?: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navbar({ onOpenResumeModal, activeSection, onSectionChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "#hero", icon: Cpu },
    { label: "About", href: "#about", icon: User },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Education", href: "#education", icon: GraduationCap },
    { label: "Skills", href: "#skills", icon: Layers },
    { label: "Projects", href: "#projects", icon: FolderGit2 },
    { label: "Resume", href: "#resume", icon: FileText },
    { label: "Achievements", href: "#achievements", icon: Sparkles },
    { label: "Career Goals", href: "#career-goals", icon: CalendarRange },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onSectionChange(href.substring(1));
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm shadow-purple-150/10"
          : "bg-white/40 backdrop-blur-sm border-b border-purple-50/20"
      } py-2 lg:py-3`}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .nav-scroll::-webkit-scrollbar {
          display: none !important;
        }
        .nav-scroll {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Header Layout */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Logo / Branding */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2.5 group cursor-pointer"
            id="nav-logo"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#A78BFA] via-[#93C5FD] to-[#F9A8D4] text-white shadow-sm shadow-purple-200 group-hover:scale-105 transition-transform">
              <Cpu className="w-4.5 h-4.5 text-white" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-left">
              <span className="text-[#1E293B] font-display font-extrabold text-base tracking-tight select-none">
                Praise
              </span>
              <span className="hidden sm:block text-[10px] font-mono text-purple-600 font-bold tracking-wider select-none uppercase scale-90 -translate-x-1 mt-0.5">
                B.Tech CSE (AI)
              </span>
            </div>
          </a>

          {/* Desktop Links & Action Resume Button */}
          <div className="flex items-center gap-3" id="desktop-nav-container">
            <nav className="flex items-center gap-1.5" id="desktop-nav">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    id={`nav-link-${item.href.substring(1)}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-sans text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "text-purple-700 bg-gradient-to-r from-purple-100/90 to-pink-100/90 border border-purple-200/70 shadow-sm"
                        : "text-[#475569] hover:text-purple-600 hover:bg-purple-50/50"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-purple-600" : "text-[#475569] group-hover:text-purple-600"}`} />
                    {item.label}
                  </a>
                );
              })}
            </nav>
            {onOpenResumeModal && (
              <button
                onClick={onOpenResumeModal}
                className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-[#A78BFA] hover:from-purple-600 hover:to-purple-500 text-white rounded-full text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer ml-1"
              >
                Interactive Resume
              </button>
            )}
          </div>
        </div>

        {/* Mobile / Tablet Header Layout - Double Row with Horizontal Scrolling Tabs */}
        <div className="flex lg:hidden flex-col gap-1.5">
          {/* Mobile Row 1: Logo & Resume Button */}
          <div className="flex items-center justify-between w-full">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2 group cursor-pointer"
              id="mobile-nav-logo"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-[#A78BFA] via-[#93C5FD] to-[#F9A8D4] text-white shadow-sm">
                <Cpu className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-[#1E293B] font-display font-extrabold text-sm tracking-tight select-none flex items-center gap-1.5">
                Praise
                <span className="text-[10px] text-purple-600 font-mono font-bold uppercase tracking-wider bg-purple-50 border border-purple-100 px-1.5 py-0.5 rounded">
                  CSE (AI)
                </span>
              </span>
            </a>

            {onOpenResumeModal && (
              <button
                onClick={onOpenResumeModal}
                className="px-3 py-1 bg-gradient-to-r from-purple-550 to-[#A78BFA] text-white rounded-full text-[10px] font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                Resume
              </button>
            )}
          </div>

          <div className="w-full h-px bg-purple-100/30"></div>

          {/* Mobile Row 2: Swipeable Horizontal Tabs */}
          <div className="w-full -mx-4 px-4 overflow-x-auto nav-scroll" id="mobile-horizontal-nav-outer">
            <nav className="flex items-center gap-1.5 pb-1 whitespace-nowrap min-w-max" id="mobile-horizontal-nav">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    id={`mobile-nav-link-${item.href.substring(1)}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-sans text-[11px] font-bold transition-all ${
                      isActive
                        ? "text-purple-700 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/60 shadow-sm"
                        : "text-[#475569] hover:text-purple-600 hover:bg-purple-50/50"
                    }`}
                  >
                    <Icon className={`w-3 h-3 shrink-0 ${isActive ? "text-purple-600" : "text-[#475569]"}`} />
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
