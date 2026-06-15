import { useState, useEffect } from "react";
import { AIBackground } from "./components/AIBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { InteractiveResume } from "./components/InteractiveResume";
import { Achievements } from "./components/Achievements";
import { CareerGoals } from "./components/CareerGoals";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "education", "skills", "projects", "resume", "achievements", "career-goals", "contact"];
      const scrollPos = window.scrollY + 160; // offset header height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load to highlight correct initially visible section
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#FFF9F5] text-[#1E293B] selection:bg-purple-200 selection:text-purple-900 relative scroll-smooth">
      {/* Dynamic Animated Light Pastel Neural Particles Canvas */}
      <AIBackground />

      {/* Structured Site Modules */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar 
          onOpenResumeModal={() => changeSection("resume")} 
          activeSection={activeSection}
          onSectionChange={changeSection}
        />

        <main className="flex-1" id="main-content">
          <div className="w-full flex flex-col">
            <Hero 
              onOpenResumeModal={() => changeSection("resume")} 
              onSectionChange={changeSection}
            />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <InteractiveResume />
            <Achievements />
            <CareerGoals />
            <Contact />
          </div>
        </main>

        <Footer onSectionChange={changeSection} />
      </div>

      {/* Interactive & Printable Resume Overlay */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

