import { X, Printer, Phone, Mail, MapPin, Globe, Award, Calendar, BookOpen, Check, Briefcase, Download } from "lucide-react";
import { EDUCATION_DATA, SKILLS_DATA, PROJECTS_DATA, ACHIEVEMENTS_DATA, EXPERIENCE_DATA } from "../types";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white print:absolute"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        id="resume-modal-box"
        className="w-full max-w-4xl bg-[#0F172A] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col print:border-0 print:bg-white print:text-black print:max-h-none print:shadow-none print:p-0 print:static"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Actions bar (Screen only) */}
        <div className="flex items-center justify-between gap-4 mb-6 print:hidden">
          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-bold bg-cyan-400/5 border border-cyan-500/10 px-3 py-1.5 rounded-lg">
            CV Sheet Interface
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/magapu_praise_resume.txt"
              download="magapu_praise_resume.txt"
              className="flex items-center gap-1.5 bg-blue-600/10 hover:bg-blue-600/20 hover:text-white border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
              title="Download Plain Text Resume File"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              Download TXT
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 text-slate-200 font-mono text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
              title="Print Resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-slate-800 border border-slate-700/50 hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close CV View"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PRINT STYLING INJECTIONS */}
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            body {
              background-color: white !important;
              color: black !important;
              font-family: system-ui, sans-serif !important;
            }
            #main-header, #hamburger-btn, #mobile-drawer, #resume-modal-overlay > div > div:first-child, .print\\:hidden {
              display: none !important;
            }
            #resume-modal-box {
              background-color: white !important;
              color: black !important;
              padding: 0 !important;
              margin: 0 !important;
              border: 0 !important;
            }
            h1, h2, h3, h4, p, span, li, a {
              color: black !important;
            }
            .border-white\\/10 {
              border-color: #e2e8f0 !important;
            }
            .bg-slate-800\\/40, .bg-slate-900\\/60 {
              background-color: #f8fafc !important;
              border-color: #cbd5e1 !important;
            }
            .text-cyan-400, .text-purple-400, .text-blue-400 {
              color: #1e3a8a !important;
            }
          }
        `}} />

        {/* Printable/Readable Resume Sheet Content */}
        <div id="resume-sheet" className="space-y-8 text-left print:text-black">
          
          {/* Header metadata segment */}
          <div className="border-b border-white/10 pb-6 print:border-slate-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white print:text-black">Magapu Praise</h1>
              <p className="text-sm font-mono text-cyan-400 font-semibold tracking-wider uppercase print:text-blue-900">
                B.Tech CSE (AI) Student • AI Specialist • Web Developer
              </p>
              <p className="text-xs text-slate-350 leading-relaxed font-sans max-w-xl print:text-slate-700 pr-4">
                Computer Science (AI) undergraduate seeking an AI/ML or Software Development Internship to apply Python, SQL, and Machine Learning fundamentals in building data-driven, scalable solutions.
              </p>
            </div>

            {/* Micro Details checklist */}
            <div className="space-y-2 text-xs sm:text-sm font-mono text-slate-300 shrink-0 border-l border-white/10 pl-0 md:pl-6 print:border-slate-300 self-start md:self-center">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:prraisee@gmail.com" className="hover:text-white hover:underline transition-all">
                  prraisee@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+918919538026" className="hover:text-white transition-all">+91-8919538026</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="https://www.linkedin.com/in/praise-m-0780352b8" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-all">
                  linkedin.com/in/praise-m
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                <span>Visakhapatnam, AP, India</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left side: Education & Experience (8 cols) */}
            <div className="md:col-span-8 space-y-8">
              
              {/* Internship/Experience Block */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold font-display text-white border-b border-white/10 pb-2 flex items-center gap-2 uppercase tracking-wider print:text-black print:border-slate-300">
                  <Briefcase className="w-5 h-5 text-cyan-400 print:text-blue-900" />
                  Internships &amp; Experience
                </h2>

                <div className="space-y-5">
                  {EXPERIENCE_DATA.map((exp) => (
                    <div key={exp.id} className="space-y-2">
                      <div className="flex justify-between items-start gap-2 flex-wrap">
                        <div>
                          <h3 className="text-base font-bold font-display text-white print:text-black">
                            {exp.role}
                          </h3>
                          <p className="text-xs sm:text-sm text-purple-350 font-semibold print:text-purple-900">
                            {exp.company}
                          </p>
                        </div>
                        <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-400/5 print:bg-slate-100 px-2 py-0.5 rounded">
                          {exp.period}
                        </span>
                      </div>
                      
                      <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-350 print:text-slate-700 pl-2">
                        {exp.details.map((det, idx) => (
                          <li key={idx} className="leading-relaxed list-none flex items-start gap-1">
                            <span className="text-purple-500 mr-1.5 shrink-0 select-none font-bold">•</span>
                            <span>{det}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Block */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold font-display text-white border-b border-white/10 pb-2 flex items-center gap-2 uppercase tracking-wider print:text-black print:border-slate-300">
                  <BookOpen className="w-5 h-5 text-cyan-400 print:text-blue-900" />
                  Education Overview
                </h2>

                <div className="space-y-5">
                  {EDUCATION_DATA.map((edu) => (
                    <div key={edu.id} className="space-y-1.5">
                      <div className="flex justify-between items-start gap-2 flex-wrap">
                        <h3 className="text-base font-bold font-display text-white print:text-black">
                          {edu.institution}
                        </h3>
                        <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-400/5 print:bg-slate-100 px-2 py-0.5 rounded">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-purple-300 font-semibold print:text-purple-900">
                        {edu.stage} • {edu.streamOrMajor}
                      </p>
                      
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-350 print:text-slate-700 pl-2">
                        {edu.details.slice(0, 3).map((det, idx) => (
                          <li key={idx} className="leading-relaxed list-none flex items-start gap-1">
                            <span className="text-cyan-500 mr-1.5 shrink-0 select-none font-bold">•</span>
                            <span>{det}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects highlight */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold font-display text-white border-b border-white/10 pb-2 flex items-center gap-2 uppercase tracking-wider print:text-black print:border-slate-300">
                  <Award className="w-5 h-5 text-purple-400 print:text-blue-900" />
                  Key Projects Highlight
                </h2>

                <div className="space-y-5">
                  {PROJECTS_DATA.map((proj) => (
                    <div key={proj.id} className="space-y-1">
                      <div className="flex justify-between items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-bold font-display text-white print:text-black flex items-center flex-wrap gap-1">
                          <span>{proj.title}</span>
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] font-mono text-emerald-400 hover:underline normal-case font-normal print:text-emerald-700 print:font-semibold"
                            >
                              • {proj.liveUrl.replace("https://", "")}
                            </a>
                          )}
                        </h3>
                        <span className="font-mono text-[10px] text-zinc-400 px-2 py-0.5 bg-slate-900 border border-slate-850 rounded">
                          {proj.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-sans font-light leading-relaxed print:text-slate-700">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {proj.tags.slice(0, 4).map(tag => (
                          <span key={tag} className="font-mono text-[9px] text-cyan-400 bg-cyan-550/5 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right side: Skills & Accomplishments (4 cols) */}
            <div className="md:col-span-4 space-y-8">
              
              {/* Technical skills list */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold font-display text-white border-b border-white/10 pb-2 flex items-center gap-2 uppercase tracking-wider print:text-black print:border-slate-300">
                  Technical Arsenal
                </h2>

                <div className="space-y-4.5 text-xs font-sans">
                  {/* Categorized grouping */}
                  {["Programming Languages", "Web Development", "Artificial Intelligence", "Database & Tools"].map(cat => {
                    const groupSkills = SKILLS_DATA.filter(sk => sk.category === cat);
                    return (
                      <div key={cat} className="space-y-1.5">
                        <h4 className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider print:text-blue-900">{cat}</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {groupSkills.map(sk => (
                            <span key={sk.name} className="inline-flex items-center gap-1 bg-slate-950 border border-slate-800 text-white text-[11px] px-2 py-1 rounded print:border-slate-300 print:text-black print:bg-slate-100">
                              <Check className="w-3 h-3 text-purple-400 shrink-0" />
                              {sk.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Honors Panel */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold font-display text-white border-b border-white/10 pb-2 flex items-center gap-2 uppercase tracking-wider print:text-black print:border-slate-300">
                  Honors &amp; Credentials
                </h2>

                <div className="space-y-4 font-sans text-xs">
                  {ACHIEVEMENTS_DATA.map(ach => (
                    <div key={ach.id} className="space-y-1">
                      <h4 className="font-bold text-slate-200 print:text-black flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        {ach.badge}
                      </h4>
                      <p className="text-[11px] text-slate-400 print:text-slate-800 font-light leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Core Footer Print notice */}
          <div className="h-[1px] bg-white/10 pt-4 text-center print:border-slate-300 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>Generated dynamically via Praise Portfolio</span>
            <span>https://portfolio-praise.app</span>
          </div>

        </div>

      </div>
    </div>
  );
}
