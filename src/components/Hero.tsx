import { ArrowRight, Download, FileText, CheckCircle, Mail, Sparkles, BrainCircuit } from "lucide-react";
import { useState } from "react";
const profileImage = "https://files.catbox.moe/2v4y4d.jpeg";

interface HeroProps {
  onOpenResumeModal: () => void;
  onSectionChange: (section: string) => void;
}

export function Hero({ onOpenResumeModal, onSectionChange }: HeroProps) {
  const handleScrollTo = (id: string) => {
    onSectionChange(id.substring(1));
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Decorative Grid Gradients & Glow overlays aligned with Sleek Interface */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A78BFA]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F9A8D4]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#93C5FD]/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#A78BFA]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 bg-white/70 backdrop-blur-xl border border-purple-100/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden text-left shadow-xl shadow-purple-100/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#93C5FD]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <span className="inline-block px-3 py-1 bg-purple-100/60 text-purple-700 text-xs font-bold rounded-full border border-purple-200/50 mb-6 uppercase tracking-wider">
                B.TECH CSE (AI) STUDENT
              </span>
              
              <h1 
                id="hero-headline"
                className="text-4xl sm:text-5xl lg:text-5xl font-display font-extrabold leading-tight mb-6 text-[#1E293B]"
              >
                Transforming Ideas into <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-[#A78BFA] to-pink-500 font-black">
                  Intelligent Solutions
                </span>
              </h1>
            </div>

            <p 
              id="hero-subheadline"
              className="text-base sm:text-lg text-[#475569] max-w-xl mb-8 leading-relaxed font-sans"
            >
              Building the future of automation and technology-driven solutions with a focus on Artificial Intelligence, Web Development, and impactful real-world problem solving.
            </p>

            {/* CTA Panel */}
            <div className="flex flex-wrap gap-4" id="hero-ctas">
              <button
                id="hero-cta-projects"
                onClick={() => handleScrollTo("#projects")}
                className="px-8 py-3.5 bg-gradient-to-r from-purple-500 to-[#A78BFA] hover:from-purple-600 hover:to-purple-550 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-250 cursor-pointer flex items-center gap-2 border border-transparent"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => handleScrollTo("#contact")}
                className="px-8 py-3.5 bg-sky-50 text-sky-700 font-bold rounded-xl border border-sky-100 hover:bg-sky-100 hover:scale-105 active:scale-95 transition-all duration-250 cursor-pointer flex items-center gap-2 shadow-sm"
              >
                Contact Me
                <Mail className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-resume"
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 bg-pink-50 hover:bg-pink-100 border border-pink-100 text-pink-600 font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 duration-250 cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                Interactive Resume
              </button>
            </div>

            {/* Micro Statistics Dashboard */}
            <div 
              id="hero-stats"
              className="flex items-center justify-around p-5 bg-white border border-purple-50 rounded-2xl mt-8 max-w-xl shadow-sm"
            >
              <div className="text-center flex-1">
                <p className="text-3xl font-extrabold text-purple-600">6+</p>
                <p className="text-[10px] text-[#475569] uppercase font-bold tracking-widest mt-1">Projects</p>
              </div>
              <div className="w-px h-8 bg-purple-100"></div>
              <div className="text-center flex-1">
                <p className="text-2xl font-extrabold text-purple-600">AI</p>
                <p className="text-[10px] text-[#475569] uppercase font-bold tracking-widest mt-1">Specialization</p>
              </div>
              <div className="w-px h-8 bg-purple-100"></div>
              <div className="text-center flex-1">
                <p className="text-3xl font-extrabold text-purple-600">2027</p>
                <p className="text-[10px] text-[#475569] uppercase font-bold tracking-widest mt-1">Graduation</p>
              </div>
            </div>
          </div>

          {/* Interactive Profile Photo Column with modern glassmorphism frames */}
          <div className="lg:col-span-5 flex justify-center items-center font-sans" id="hero-illustration">
            <div className="relative w-full max-w-sm aspect-[4/5] flex items-center justify-center">
              
              {/* Outer Decorative Gradient Halos */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-[#93C5FD]/20 via-[#A78BFA]/25 to-[#F9A8D4]/25 blur-2xl animate-pulse" />
              
              {/* Outer Elegant Tech Frame Container */}
              <div className="relative w-full h-full bg-white/85 backdrop-blur-md rounded-[2.5rem] border border-purple-100 shadow-2xl p-4 flex flex-col justify-between overflow-hidden group shadow-purple-100/10 hover:shadow-2xl hover:shadow-purple-200/20 transition-all duration-300">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-200/25 rounded-full blur-2xl group-hover:bg-purple-300/35 transition-all duration-500" />
                
                {/* Header Dots with System State */}
                <div className="flex items-center justify-between mb-3 border-b border-purple-50 pb-2 flex-shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[9px] font-mono text-[#475569] uppercase tracking-wider font-bold">System: Active</span>
                  </div>
                </div>

                 {/* Main animated neural node panel */}
                <div className="relative flex-grow rounded-2xl overflow-hidden shadow-inner border border-purple-100/50 bg-slate-50 flex items-center justify-center">
                  <img
                    src={profileImage}
                    alt="Magapu Praise Profile"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-102 transition-transform duration-700 ease-out"
                    style={{ minHeight: "260px" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
                  
                  {/* Real-time floating badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs border border-purple-100 px-3 py-1 rounded-xl shadow-md flex items-center gap-1.5 font-sans">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-800">B.Tech CSE (AI)</span>
                  </div>
                </div>

                {/* Hide original panel content */}
                <div className="hidden">
                  <svg
                    className="w-full h-40 text-slate-350"
                    viewBox="0 0 200 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Graph Lines */}
                    <path d="M20 50 L60 30" stroke="rgba(167,139,250,0.3)" strokeWidth="1.5" strokeDasharray="2 3" />
                    <path d="M20 50 L60 70" stroke="rgba(167,139,250,0.3)" strokeWidth="1.5" />
                    <path d="M60 30 L100 50" stroke="rgba(147,197,253,0.4)" strokeWidth="2" />
                    <path d="M60 70 L100 50" stroke="rgba(147,197,253,0.4)" strokeWidth="2" strokeDasharray="3 3"/>
                    <path d="M100 50 L140 25" stroke="rgba(249,168,212,0.5)" strokeWidth="1.5" />
                    <path d="M100 50 L140 75" stroke="rgba(249,168,212,0.5)" strokeWidth="1.5" />
                    <path d="M140 25 L180 50" stroke="rgba(147,197,253,0.2)" strokeWidth="1" />
                    <path d="M140 75 L180 50" stroke="rgba(147,197,253,0.2)" strokeWidth="1" />

                    {/* Left Node */}
                    <circle cx="20" cy="50" r="6" fill="#A78BFA" className="animate-pulse" />
                    <circle cx="20" cy="50" r="10" stroke="#A78BFA" strokeWidth="1" strokeOpacity="0.4" />

                    {/* Middle Nodes */}
                    <circle cx="60" cy="30" r="5" fill="#93C5FD" />
                    <circle cx="60" cy="70" r="5" fill="#93C5FD" />

                    {/* Central Brain Node */}
                    <circle cx="100" cy="50" r="9" fill="#F9A8D4" />
                    <circle cx="100" cy="50" r="15" stroke="#F9A8D4" strokeWidth="1" strokeOpacity="0.5" className="animate-ping" style={{animationDuration: '3s'}} />

                    {/* Out nodes */}
                    <circle cx="140" cy="25" r="5" fill="#A78BFA" />
                    <circle cx="140" cy="75" r="5" fill="#A78BFA" />

                    {/* Far right terminal endpoint */}
                    <circle cx="180" cy="50" r="6" fill="#86EFAC" />
                  </svg>
                  <p className="text-center font-mono text-[11px] text-purple-600 font-bold mt-2">Neural Net Optimization</p>
                </div>

                {/* Beautiful custom technical print terminal logs */}
                <div className="bg-[#111827] rounded-xl p-3 border border-slate-800 font-mono text-[9.5px] text-[#A78BFA] space-y-1 text-left flex-shrink-0 mt-3 shadow-inner">
                  <div className="flex gap-2 text-[#93C5FD]">
                    <span className="text-pink-400">&gt;_</span>
                    <span>import ai_pipeline as ml</span>
                  </div>
                  <div className="flex gap-2 text-[#93C5FD]">
                    <span className="text-pink-400">&gt;_</span>
                    <span>model = ml.train(specialization="AI & Software Eng")</span>
                  </div>
                  <div className="text-slate-400 flex justify-between items-center text-[9px] bg-[#1f2937]/60 px-1.5 py-0.5 rounded border border-[#374151]/50 mt-1">
                    <span>Loss: 0.009</span>
                    <span className="text-emerald-400 font-bold">Accuracy: 99.8%</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
