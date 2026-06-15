import { useState } from "react";
import { 
  Download, 
  User, 
  GraduationCap, 
  Briefcase, 
  Layers, 
  FolderGit2, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ExternalLink, 
  Calendar, 
  ChevronRight,
  Brain,
  Code2,
  Database,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Loader2,
  CheckCircle,
  AlertTriangle,
  FileText
} from "lucide-react";
import { jsPDF } from "jspdf";
import { EDUCATION_DATA, SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA } from "../types";

export function InteractiveResume() {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education' | 'skills' | 'projects'>('all');
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error' | 'loading'; message: string }>({ type: 'idle', message: '' });

  const handlePrint = () => {
    window.print();
  };

  const generatePDFResume = () => {
    setStatus({ type: 'loading', message: 'Assembling professional PDF resume...' });
    setTimeout(() => {
      try {
        const doc = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4"
        });

        // Color definitions matching the palette
        const primaryColor = [30, 41, 59]; // #1E293B
        const secondaryColor = [71, 85, 105]; // #475569
        const accentColor = [167, 139, 250]; // #A78BFA
        const pastelPink = [249, 168, 212]; // #F9A8D4
        const pastelBlue = [147, 197, 253]; // #93C5FD

        // Header Title
        doc.setFont("helvetica", "bold");
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.setFontSize(22);
        doc.text("MAGAPU PRAISE", 15, 20);

        // Header Subtitle
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.text("B.Tech Computer Science & Engineering (Artificial Intelligence)", 15, 25);

        // Header Contact Information lines
        doc.setFontSize(8);
        doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
        doc.text("Email: prraisee@gmail.com   |   Phone: +91-8919538026   |   Visakhapatnam, AP, India", 15, 29);
        doc.text("LinkedIn: linkedin.com/in/praise-m-0780352b8   |   Portfolio: https://portfolio-praise.app", 15, 33);

        // Pastel purple horizontal boundary rule
        doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.setLineWidth(0.4);
        doc.line(15, 36, 195, 36);

        let y = 44;

        const drawSectionTitle = (title: string, barColor: number[]) => {
          if (y > 255) {
            doc.addPage();
            y = 20;
          }
          doc.setFont("helvetica", "bold");
          doc.setFontSize(10.5);
          doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.text(title.toUpperCase(), 15, y);

          doc.setDrawColor(barColor[0], barColor[1], barColor[2]);
          doc.setLineWidth(0.8);
          doc.line(15, y + 1.5, 35, y + 1.5);

          doc.setDrawColor(241, 245, 249);
          doc.setLineWidth(0.2);
          doc.line(35, y + 1.5, 195, y + 1.5);

          y += 8;
        };

        // 1. Profile Outline
        drawSectionTitle("Career Summary", accentColor);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
        const summaryText = "Highly motivated B.Tech Computer Science and Engineering undergraduate specializing in Artificial Intelligence. Passionate about leveraging computational intelligence, machine learning structures, and relational database systems to design and develop intuitive, practical, and optimized next-gen software platforms.";
        const wrappedSummary = doc.splitTextToSize(summaryText, 180);
        doc.text(wrappedSummary, 15, y);
        y += (wrappedSummary.length * 4.2) + 6;

        // 2. Internships
        drawSectionTitle("Professional Training & Experience", pastelPink);
        EXPERIENCE_DATA.forEach((exp) => {
          if (y > 260) {
            doc.addPage();
            y = 20;
          }
          doc.setFont("helvetica", "bold");
          doc.setFontSize(9);
          doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.text(exp.role, 15, y);

          doc.setFont("helvetica", "normal");
          doc.setFontSize(8);
          doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
          doc.text(`${exp.company}  [ ${exp.period} ]`, 15, y + 3.8);
          y += 8;

          doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
          exp.details.forEach((det) => {
            if (y > 275) {
              doc.addPage();
              y = 20;
            }
            const wrappedDet = doc.splitTextToSize(`• ${det}`, 175);
            doc.text(wrappedDet, 18, y);
            y += (wrappedDet.length * 4.0);
          });
          y += 4;
        });

        // 3. Education Overview
        drawSectionTitle("Education Journey", pastelBlue);
        EDUCATION_DATA.forEach((edu) => {
          if (y > 260) {
            doc.addPage();
            y = 20;
          }
          doc.setFont("helvetica", "bold");
          doc.setFontSize(9);
          doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.text(edu.institution, 15, y);

          doc.setFont("helvetica", "normal");
          doc.setFontSize(8);
          doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
          doc.text(`${edu.stage} • ${edu.streamOrMajor}  [ ${edu.period} ]`, 15, y + 3.8);
          y += 7.5;

          edu.details.forEach((det) => {
            if (y > 275) {
              doc.addPage();
              y = 20;
            }
            const wrappedDet = doc.splitTextToSize(`• ${det}`, 175);
            doc.text(wrappedDet, 18, y);
            y += (wrappedDet.length * 4.0);
          });
          y += 4;
        });

        if (y > 210) {
          doc.addPage();
          y = 20;
        }

        // 4. Projects Showcase
        drawSectionTitle("Key Project Showcases", accentColor);
        PROJECTS_DATA.forEach((proj) => {
          if (y > 255) {
            doc.addPage();
            y = 20;
          }
          doc.setFont("helvetica", "bold");
          doc.setFontSize(9);
          doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.text(proj.title, 15, y);

          doc.setFont("helvetica", "normal");
          doc.setFontSize(8);
          doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
          doc.text(`Scope: ${proj.category} ${proj.metrics ? ` |  Indicator: ${proj.metrics}` : ""}`, 15, y + 3.8);
          y += 7.5;

          doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
          const wrappedDesc = doc.splitTextToSize(proj.description, 175);
          doc.text(wrappedDesc, 18, y);
          y += (wrappedDesc.length * 4.0);

          doc.setFont("helvetica", "italic");
          doc.setFontSize(7.5);
          doc.text(`Key tech: ${proj.tags.join(', ')}`, 18, y);
          y += 6;
        });

        if (y > 240) {
          doc.addPage();
          y = 20;
        }

        // 5. Technical Competencies
        drawSectionTitle("Technical Arsenal Overview", pastelPink);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);

        const competenciesList = [
          "Programming Languages: Python, Java, JavaScript, C",
          "Web Technologies: HTML, CSS, React, responsive layouts, Tailwind CSS",
          "Artificial Intelligence: Generative AI, Prompt Engineering, Computer Vision (OpenCV), workflows automation",
          "Databases & Core Tools: SQL servers, GitHub, VS Code, Google AI Studio"
        ];

        competenciesList.forEach(line => {
          if (y > 275) {
            doc.addPage();
            y = 20;
          }
          doc.text(`• ${line}`, 18, y);
          y += 5.2;
        });

        y += 5;

        // Footer Metadata Signoff
        doc.setFont("helvetica", "italic");
        doc.setFontSize(7.5);
        doc.setTextColor(148, 163, 184);
        doc.text("Generated dynamically on-demand from Magapu Praise Professional Portfolio", 15, y);

        // Prompt client system-level download save dialog
        doc.save("magapu_praise_resume.pdf");
        setStatus({ type: 'success', message: 'PDF Resume (.pdf) compiled & downloaded successfully!' });
      } catch (error) {
        console.error("PDF construction failure:", error);
        setStatus({ type: 'error', message: 'Unable to build dynamic PDF. Please print directly using the Save/Print PDF pathway.' });
      }
    }, 600);
  };

  const downloadTxtResume = async () => {
    setStatus({ type: 'loading', message: 'Fetching plain-text resume resource...' });
    setTimeout(async () => {
      try {
        const response = await fetch('/magapu_praise_resume.txt');
        if (!response.ok) {
          throw new Error("Text asset is not present or was skipped in compilation");
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "magapu_praise_resume.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        setStatus({ type: 'success', message: 'Plain Text Resume (.txt) downloaded successfully!' });
      } catch (err) {
        console.warn("TXT asset unavailable, generating fallback copy client-side:", err);
        // Instant Client-side Text Compilation Fallback
        const resumeText = `================================================================================
MAGAPU PRAISE
Visakhapatnam, Andhra Pradesh, India
Phone: +91-8919538026
Email: prraisee@gmail.com
LinkedIn: https://www.linkedin.com/in/praise-m-0780352b8
Portfolio: https://portfolio-praise.app
================================================================================

CAREER OBJECTIVE
----------------
Computer Science (AI) undergraduate seeking an AI/ML or Software Development 
Internship to apply Python, SQL, and Machine Learning fundamentals in building 
data-driven, scalable solutions. Solid foundation in algorithms, OOP, and 
problem-solving with project experience in computer vision and urban sustainabilities.

EDUCATIONAL QUALIFICATIONS
--------------------------
1. Bachelor of Technology (BTech) in Computer Science & Engineering (AI)
   - Institution: Vignan's Institute of Engineering for Women, Vizag
   - Affiliate: JNTU-GV
   - Duration: 2023 - Present

2. MPC (Intermediate - Class XII)
   - Institution: St. Joseph College for Women, Visakhapatnam
   - Board: BIE AP
   - Duration: 2021 - 2023

3. SSC (Secondary School - Class X)
   - Institution: Jamia English Medium High School, Visakhapatnam
   - Board: BSE AP
   - Duration: 2020 - 2021

TECHNICAL SKILLS
----------------
- Programming: Python, Java, JavaScript, C, SQL
- AI/ML Concepts: Machine Learning, Computer Vision, Deep Learning Basics
- Core CS Concepts: Data Structures & Algorithms, OOP, State Management
- Tools & Platforms: OpenCV, GitHub, VS Code, Google AI Studio

PROJECTS HIGH-LEVEL HIGH-LIGHTS
--------------------------------
1. AI-Based Automated Attendance System (Computer Vision Specialist)
   - Developed a real-time face recognition attendance system using Python and OpenCV.
   - Implemented automated tracking to improve accuracy and reduce manual processing.

2. Eco Bloom - Smart Urban Greenery Planner
   - Designed a prototype sustainability application with soil detection and plant recommendations.

3. Sun Saver - Solar Energy Calculator
   - Created a web-based energy calculator assessing panel size and monthly utility bills.

================================================================================`;
        const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "magapu_praise_resume.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        setStatus({ type: 'success', message: 'Assembled plain text resume downloaded successfully!' });
      }
    }, 600);
  };

  return (
    <section 
      id="resume" 
      className="py-24 bg-[#FFF9F5] relative overflow-hidden text-left border-y border-purple-100/30"
    >
      {/* Aesthetic Background Overlays */}
      <div className="absolute left-1/10 top-1/10 w-96 h-96 bg-[#A78BFA]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute right-1/10 bottom-1/10 w-96 h-96 bg-[#F9A8D4]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute left-1/3 top-1/2 w-80 h-80 bg-[#93C5FD]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-mono text-purple-600 uppercase tracking-widest font-extrabold">Professional Dossier</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1E293B] mt-2">Interactive Resume</h2>
          <p className="text-xs sm:text-sm text-[#475569] font-sans mt-3.5 font-semibold text-center leading-relaxed">
            Explore my academic background, technical arsenal, projects lineup, and professional experience in a fully integrated, fluid presentation matching my portfolio ecosystem.
          </p>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#A78BFA] via-[#93C5FD] to-pink-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Dynamic State Overlay Indicator Banner */}
        {status.type !== 'idle' && (
          <div className={`max-w-xl mx-auto mb-8 p-4 rounded-2xl flex items-center gap-3 border transition-all text-xs font-sans ${
            status.type === 'loading' ? 'bg-purple-50/70 border-purple-100 text-purple-700' :
            status.type === 'success' ? 'bg-emerald-50/70 border-emerald-100 text-emerald-700' :
            'bg-amber-50/70 border-amber-100 text-amber-700'
          }`}>
            {status.type === 'loading' && <Loader2 className="w-4 h-4 animate-spin shrink-0 text-purple-500" />}
            {status.type === 'success' && <CheckCircle className="w-4 h-4 shrink-0 text-emerald-500" />}
            {status.type === 'error' && <AlertTriangle className="w-4 h-4 shrink-0 text-amber-500" />}
            <span className="font-semibold">{status.message}</span>
            <button 
              onClick={() => setStatus({ type: 'idle', message: '' })} 
              className="ml-auto text-[10px] font-mono hover:underline text-[#475569] pr-1 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Download & Actions Panel */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16" id="resume-download-section">
          
          {/* Main PDF Download Button - Pastel Pill */}
          <button
            onClick={generatePDFResume}
            disabled={status.type === 'loading'}
            className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#A78BFA] via-pink-300 to-[#F9A8D4] hover:scale-105 active:scale-95 text-white font-sans text-sm font-extrabold select-none cursor-pointer transition-all border border-purple-200/30 shadow-lg shadow-purple-200/40 hover:shadow-xl hover:shadow-purple-250/50 disabled:opacity-75 disabled:pointer-events-none"
            title="Download Custom Compiled PDF Resume"
          >
            <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
            Download Resume (PDF)
          </button>

          {/* Secondary TXT File Button - warm ivory/rose styling */}
          <button
            onClick={downloadTxtResume}
            disabled={status.type === 'loading'}
            className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFF4E6]/90 hover:bg-[#FFF4E6] border border-[#F9A8D4]/40 text-[#1E293B] font-sans text-xs font-extrabold transition-all shadow-sm active:scale-95 cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
            title="Download Plain Text Format Resume"
          >
            <FileText className="w-4 h-4 text-pink-400 group-hover:translate-y-0.5 transition-transform" />
            Download plain text (.txt)
          </button>

          {/* Quick Print / Live PDF button */}
          <button
            onClick={handlePrint}
            className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-purple-50/50 border border-purple-100 text-[#475569] hover:text-purple-600 font-sans text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <span>Print or Save PDF</span>
            <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Interactive Grid Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* PROFILE SUMMARY & CONTACT INFORMATION CARDS - Left side (4 cols) */}
          <div className="lg:col-span-4 space-y-8 flex flex-col">
            
            {/* Elegant Profile Summary Card */}
            <div 
              id="resume-profile-summary-card" 
              className="bg-white/80 backdrop-blur-md border border-purple-100/80 rounded-3xl p-6.5 shadow-md shadow-purple-100/10 flex-1 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Radial backdrop light highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-5 border-b border-purple-100/50 pb-4">
                <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold font-display text-[#1E293B]">Profile Summary</h3>
              </div>

              <div className="space-y-4.5 text-xs sm:text-sm text-[#475569] font-sans">
                <div>
                  <h4 className="font-mono text-[10px] font-extrabold text-purple-600 uppercase tracking-widest mb-1.5">Brief Introduction</h4>
                  <p className="leading-relaxed font-semibold text-xs text-[#475569]">
                    I am a highly motivated B.Tech Computer Science and Engineering undergraduate specializing in Artificial Intelligence. Passionate about leveraging computational intelligence to build intuitive, practical software platforms.
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] font-extrabold text-pink-500 uppercase tracking-widest mb-1.5">Career Objective</h4>
                  <p className="leading-relaxed font-semibold text-xs text-[#475569]">
                    Seeking an internship / full-time role within AI/ML engineering, data analysis, or web dev ecosystems. Eager to solve challenging problems under expert guidelines.
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] font-extrabold text-indigo-500 uppercase tracking-widest mb-1.5">Professional Overview</h4>
                  <p className="leading-relaxed font-semibold text-xs text-[#475569]">
                    Comfortable with algorithms, machine learning lifecycles, and relational database systems. Ready to bring high design discipline and quick programming logic to interdisciplinary ventures.
                  </p>
                </div>
              </div>
            </div>

            {/* Clean Modern Contact Information Card */}
            <div 
              id="resume-contact-card" 
              className="bg-white/80 backdrop-blur-md border border-purple-100/80 rounded-3xl p-6.5 shadow-md shadow-purple-100/10 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-100/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-5 border-b border-purple-100/50 pb-4">
                <div className="p-2.5 rounded-2xl bg-pink-50 text-pink-500">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold font-display text-[#1E293B]">Contact Information</h3>
              </div>

              <div className="space-y-4 text-xs sm:text-xs text-[#475569] font-mono">
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#FFF9F5]/40 border border-purple-100/60 hover:bg-[#FFF9F5] transition-colors shadow-sm">
                  <div className="p-2 bg-purple-50 rounded-xl text-purple-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-wider text-[#94A3B8] font-bold">Email Address</span>
                    <a href="mailto:prraisee@gmail.com" className="text-xs font-bold text-[#1E293B] hover:text-purple-600 transition-colors">
                      prraisee@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#FFF9F5]/40 border border-purple-100/60 hover:bg-[#FFF9F5] transition-colors shadow-sm">
                  <div className="p-2 bg-pink-50 rounded-xl text-pink-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-wider text-[#94A3B8] font-bold">Direct Phone Number</span>
                    <a href="tel:+918919538026" className="text-xs font-bold text-[#1E293B] hover:text-pink-500 transition-colors">
                      +91-8919538026
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#FFF9F5]/40 border border-purple-100/60 hover:bg-[#FFF9F5] transition-colors shadow-sm">
                  <div className="p-2 bg-sky-50 rounded-xl text-sky-500">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-wider text-[#94A3B8] font-bold">LinkedIn Handle</span>
                    <a href="https://www.linkedin.com/in/praise-m-0780352b8" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#1E293B] hover:text-sky-500 transition-colors hover:underline">
                      linkedin.com/in/praise-m
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#FFF9F5]/40 border border-purple-100/60 hover:bg-[#FFF9F5] transition-colors shadow-sm">
                  <div className="p-2 bg-emerald-50 rounded-xl text-emerald-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-wider text-[#94A3B8] font-bold">Resident Base</span>
                    <span className="text-xs font-bold text-[#1E293B]">Visakhapatnam, AP, India</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* MAIN EDUCATION & EXPERIENCE TIMELINE - Right side (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Elegant Modern Pastel Vertical Timeline Card */}
            <div className="bg-white/80 backdrop-blur-md border border-purple-100/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-md shadow-purple-100/10 hover:shadow-lg transition-shadow duration-300">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-105/50 pb-6 mb-8">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-[#A78BFA] to-[#93C5FD] text-white">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold font-display text-[#1E293B] leading-tight">Educational Timeline &amp; Experience</h3>
                    <p className="text-[11px] font-mono text-purple-600 font-bold mt-0.5">Chronological Progress Path</p>
                  </div>
                </div>
              </div>

              {/* Vertical Timeline Structure */}
              <div className="relative pl-1 sm:pl-4 space-y-12">
                {/* Timeline connector line */}
                <div className="absolute left-[13px] sm:left-[25px] top-2 bottom-2 w-[3px] bg-gradient-to-b from-[#A78BFA] via-[#93C5FD] to-[#F9A8D4]" />

                {/* TIMELINE POINT 1: B.Tech University (2023 - Present) */}
                <div className="relative pl-8 sm:pl-12 group text-left">
                  {/* Outer glowing pastel circular indicator */}
                  <div className="absolute left-0 sm:left-[11px] top-1.5 w-7 h-7 rounded-full bg-white border-[3px] border-[#A78BFA] flex items-center justify-center shadow-md shadow-purple-100 shrink-0 group-hover:scale-110 transition-transform">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#A78BFA]" />
                  </div>

                  {/* Floating Content Card */}
                  <div className="bg-[#FFF9F5]/50 hover:bg-[#FFF9F5]/90 border border-purple-100 rounded-2xl p-5 hover:translate-x-1.5 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5">
                      <span className="inline-block px-2.5 py-1 bg-purple-50 border border-purple-100 text-[#A78BFA] font-mono text-[9px] font-extrabold rounded-lg uppercase">
                        Current Pursuit
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#94A3B8]">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>2023 – Present</span>
                      </div>
                    </div>

                    <h4 className="text-base font-extrabold font-display text-[#1E293B]">
                      Bachelor of Technology (BTech) in CSE (AI)
                    </h4>
                    <p className="text-xs font-sans font-bold text-purple-600 mt-1">
                      Vignan's Institute of Engineering for Women
                    </p>

                    <div className="mt-4 pt-3.5 border-t border-purple-50 space-y-2 text-xs font-sans text-[#475569] font-medium leading-relaxed">
                      <div className="flex items-start gap-2">
                        <span className="text-[#A78BFA] font-bold shrink-0">•</span>
                        <span>Board of affiliation: JNTU-GV. Specialized model research in computer intelligence.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#A78BFA] font-bold shrink-0">•</span>
                        <span>Key coursework: Deep Learning Fundamentals, Object Oriented Programming, Data Structures &amp; Algorithms.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#A78BFA] font-bold shrink-0">•</span>
                        <span>Conducting smart automation testbeds built via Python and SQL configurations.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TIMELINE POINT 2: Professional AI/ML Internship (2024) */}
                <div className="relative pl-8 sm:pl-12 group text-left">
                  {/* Outer glowing pastel circular indicator */}
                  <div className="absolute left-0 sm:left-[11px] top-1.5 w-7 h-7 rounded-full bg-white border-[3px] border-[#93C5FD] flex items-center justify-center shadow-md shadow-blue-100 shrink-0 group-hover:scale-110 transition-transform">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#93C5FD]" />
                  </div>

                  {/* Floating Content Card */}
                  <div className="bg-[#FFF9F5]/50 hover:bg-[#FFF9F5]/90 border border-purple-100 rounded-2xl p-5 hover:translate-x-1.5 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5">
                      <span className="inline-block px-2.5 py-1 bg-blue-50 border border-blue-100 text-[#93C5FD] font-mono text-[9px] font-extrabold rounded-lg uppercase">
                        AI Specialty Internship
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#94A3B8]">
                        <Calendar className="w-3.5 h-3.5 text-[#93C5FD]" />
                        <span>2024</span>
                      </div>
                    </div>

                    <h4 className="text-base font-extrabold font-display text-[#1E293B]">
                      Foundations of AI &amp; ML Intern
                    </h4>
                    <p className="text-xs font-sans font-bold text-sky-600 mt-1">
                      Datavalley • Industry Mentored Training
                    </p>

                    <div className="mt-4 pt-3.5 border-t border-purple-50 space-y-2 text-xs font-sans text-[#475569] font-medium leading-relaxed">
                      <div className="flex items-start gap-2">
                        <span className="text-sky-400 font-bold shrink-0">•</span>
                        <span>Completed model selection procedures, neural parameter adjustments, and exploratory statistics reports.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-sky-400 font-bold shrink-0">•</span>
                        <span>Programmed regression benchmarks, decision boundaries, and trained classifiers with clean training sets.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TIMELINE POINT 3: St. Joseph College for Women (2021 - 2023) */}
                <div className="relative pl-8 sm:pl-12 group text-left">
                  {/* Outer glowing pastel circular indicator */}
                  <div className="absolute left-0 sm:left-[11px] top-1.5 w-7 h-7 rounded-full bg-white border-[3px] border-pink-400 flex items-center justify-center shadow-md shadow-pink-100 shrink-0 group-hover:scale-110 transition-transform">
                    <div className="w-2.5 h-2.5 rounded-full bg-pink-400" />
                  </div>

                  {/* Floating Content Card */}
                  <div className="bg-[#FFF9F5]/50 hover:bg-[#FFF9F5]/90 border border-purple-100 rounded-2xl p-5 hover:translate-x-1.5 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5">
                      <span className="inline-block px-2.5 py-1 bg-pink-50 border border-pink-100 text-pink-500 font-mono text-[9px] font-extrabold rounded-lg uppercase">
                        Senior Secondary Board
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#94A3B8]">
                        <Calendar className="w-3.5 h-3.5 text-pink-400" />
                        <span>2021 – 2023</span>
                      </div>
                    </div>

                    <h4 className="text-base font-extrabold font-display text-[#1E293B]">
                      MPC (Intermediate - Class XII)
                    </h4>
                    <p className="text-xs font-sans font-bold text-pink-600 mt-1">
                      St. Joseph College for Women, Visakhapatnam
                    </p>

                    <div className="mt-4 pt-3.5 border-t border-purple-50 space-y-2 text-xs font-sans text-[#475569] font-medium leading-relaxed">
                      <div className="flex items-start gap-2">
                        <span className="text-pink-400 font-bold shrink-0">•</span>
                        <span>Rigorous grounding in Calculus, Organic Chemistry matrices, Wave mechanics, and physical analysis.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TIMELINE POINT 4: Jamia English Medium High School (2020 - 2021) */}
                <div className="relative pl-8 sm:pl-12 group text-left">
                  {/* Outer glowing pastel circular indicator */}
                  <div className="absolute left-0 sm:left-[11px] top-1.5 w-7 h-7 rounded-full bg-white border-[3px] border-emerald-400 flex items-center justify-center shadow-md shadow-emerald-100 shrink-0 group-hover:scale-110 transition-transform">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>

                  {/* Floating Content Card */}
                  <div className="bg-[#FFF9F5]/50 hover:bg-[#FFF9F5]/90 border border-purple-100 rounded-2xl p-5 hover:translate-x-1.5 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5">
                      <span className="inline-block px-2.5 py-1 bg-emerald-50 border border-emerald-100 text-emerald-600 font-mono text-[9px] font-extrabold rounded-lg uppercase">
                        Secondary School (SSC)
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#94A3B8]">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>2020 – 2021</span>
                      </div>
                    </div>

                    <h4 className="text-base font-extrabold font-display text-[#1E293B]">
                      Jamia English Medium High School
                    </h4>
                    <p className="text-xs font-sans font-bold text-emerald-600 mt-1">
                      Visakhapatnam
                    </p>

                    <div className="mt-4 pt-3.5 border-t border-purple-50 space-y-2 text-xs font-sans text-[#475569] font-medium leading-relaxed">
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">•</span>
                        <span>Discovered computational reasoning, won foundational mathematics certifications, and excelled in logical curricula.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
            </div>

          </div>

        </div>

        {/* SECTION 4: FULL TECHNOLOGY BADGES (SKILLS) */}
        <div className="mt-16 text-left" id="resume-skills-categories-box">
          <div className="bg-white/80 backdrop-blur-md border border-purple-100/80 rounded-3xl p-6 sm:p-8 shadow-md">
            
            <div className="flex items-center gap-2.5 mb-8 border-b border-purple-100/50 pb-4">
              <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-[#93C5FD] to-pink-300 text-white">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold font-display text-[#1E293B]">Redesigned Technologies Portfolio</h3>
                <p className="text-[10px] font-mono text-[#94A3B8] font-bold">Comprehensive tech tags only — no proficiency percentages or ratings</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Categorized groups */}
              {[
                { title: "Programming Languages", color: "from-indigo-400 to-[#A78BFA]", icon: Code2, items: ["Python", "Java", "JavaScript", "C"] },
                { title: "Web Development", color: "from-[#A78BFA] to-pink-400", icon: Globe, items: ["HTML", "CSS", "React", "Responsive Design"] },
                { title: "Artificial Intelligence", color: "from-pink-400 to-[#93C5FD]", icon: Brain, items: ["Generative AI", "Prompt Engineering", "AI Tools", "Automation Workflows"] },
                { title: "Database & Tools", color: "from-[#93C5FD] to-emerald-400", icon: Database, items: ["SQL", "GitHub", "VS Code", "Google AI Studio"] }
              ].map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <div key={category.title} className="p-5.5 rounded-2xl bg-[#FFF9F5]/40 border border-purple-100/60 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className={`p-1.5 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                          <CategoryIcon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <h4 className="text-xs font-extrabold font-display text-[#1E293B] tracking-tight">{category.title}</h4>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {category.items.map((item) => (
                          <span 
                            key={item} 
                            className="inline-flex items-center gap-1 bg-white border border-purple-100/60 hover:border-purple-300 text-[#475569] text-[10px] font-sans font-bold px-2.5 py-1.5 rounded-xl shadow-sm transition-transform hover:-translate-y-0.5 duration-200"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#A78BFA] shrink-0" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>
        </div>

        {/* SECTION 5: PREMIUM PROJECT PREVIEWS */}
        <div className="mt-16 text-left" id="resume-projects-highlight-box">
          <div className="bg-white/80 backdrop-blur-md border border-purple-100/80 rounded-3xl p-6 sm:p-8 shadow-md">
            
            <div className="flex items-center gap-2.5 mb-8 border-b border-purple-100/50 pb-4">
              <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-pink-300 to-[#A78BFA] text-white">
                <FolderGit2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold font-display text-[#1E293B]">Projects Highlights Inventory</h3>
                <p className="text-[10px] font-mono text-[#94A3B8] font-bold">Refined lineup of constructed models and platforms</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS_DATA.map((proj) => (
                <div 
                  key={proj.id} 
                  className="group bg-[#FFF9F5]/40 hover:bg-white border border-purple-100/60 hover:border-[#A78BFA]/50 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className="font-mono text-[9px] font-extrabold text-purple-600 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-lg uppercase">
                        {proj.category}
                      </span>
                      {proj.metrics && (
                        <span className="font-mono text-[9px] font-extrabold text-[#475569] bg-white border border-purple-55 text-right px-2 py-0.5 rounded-lg shadow-sm">
                          {proj.metrics}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-extrabold font-display text-[#1E293B] group-hover:text-purple-650 transition-colors">
                      {proj.title}
                    </h4>

                    <p className="text-[#475569] text-xs font-sans font-medium leading-relaxed my-3">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-purple-50/50 mt-1 flex flex-wrap gap-1.5 items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {proj.tags.slice(0, 3).map(t => (
                        <span key={t} className="font-mono text-[8.5px] text-[#A78BFA] font-bold bg-purple-50/60 px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    {proj.liveUrl && (
                      <a 
                        href={proj.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-1 text-purple-500 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg transition-all"
                        title="View Live Platform"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
