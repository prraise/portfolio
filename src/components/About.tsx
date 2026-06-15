import { Brain, Code2, GraduationCap, Zap, ArrowDownCircle, BadgeAlert } from "lucide-react";

export function About() {
  const traits = [
    {
      icon: Brain,
      title: "AI & Automation Enthusiast",
      desc: "Deep interest in training machine learning models, designing expert agent prompt parameters, and refining intelligent pipelines that optimize productivity.",
      color: "text-indigo-600 bg-indigo-50 border-indigo-100/50",
    },
    {
      icon: Code2,
      title: "Web Craftsman",
      desc: "Passionate about creating fluid user interfaces using React, styled with high-efficiency utility systems like Tailwind, producing fast, beautiful, responsive user flows.",
      color: "text-purple-600 bg-purple-50 border-purple-100/50",
    },
    {
      icon: Zap,
      title: "Problem Solver",
      desc: "Combining complex mathematical foundations (MFC) with modern data architectures to resolve logical real-world engineering puzzles.",
      color: "text-sky-600 bg-sky-50 border-sky-100/50",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden text-left border-y border-purple-100/20">
      {/* Subtle Background Accent */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono text-purple-600 uppercase tracking-widest font-bold">Discover My Journey</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1E293B] mt-1">About Me</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A78BFA] to-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Avatar / Portrait Column */}
          <div className="lg:col-span-5 flex justify-center" id="about-visual">
            <div className="relative w-full max-w-sm aspect-square">
              {/* Outer Neon Accent Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-purple-200/50 animate-spin" style={{ animationDuration: "25s" }}></div>
              <div className="absolute inset-4 rounded-full border border-pink-200/30 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}></div>
              
              {/* Center Portrait Box */}
              <div className="absolute inset-8 rounded-3xl bg-white border border-purple-50 overflow-hidden flex flex-col justify-center items-center shadow-lg shadow-purple-100/10 relative p-6">
                {/* Decorative Elements */}
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                </div>
                
                {/* Abstract Vector avatar showing Developer with glasses + glowing AI nodes */}
                <svg
                  className="w-40 h-40 text-purple-200 my-4"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A78BFA" />
                      <stop offset="50%" stopColor="#93C5FD" />
                      <stop offset="100%" stopColor="#F9A8D4" />
                    </linearGradient>
                  </defs>
                  
                  {/* Background Aura */}
                  <circle cx="50" cy="50" r="45" fill="rgba(245, 243, 255, 0.5)" stroke="url(#avatarGrad)" strokeWidth="1.5" />
                  
                  {/* Futuristic Neck overlay */}
                  <path d="M42 75 L58 75 L55 85 L45 85 Z" fill="rgba(167, 139, 250, 0.2)" stroke="rgba(167, 139, 250, 0.3)" />
                  
                  {/* Glowing collar nodes representing automation interface */}
                  <circle cx="50" cy="85" r="2.5" fill="#A78BFA" className="animate-ping" />
                  
                  {/* Hood or Hair outline */}
                  <path d="M28 65 C25 45, 30 25, 50 25 C70 25, 75 45, 72 65 C68 70, 32 70, 28 65 Z" fill="rgba(74, 58, 122, 0.15)" />
                  
                  {/* Face base */}
                  <path d="M35 50 C35 38, 65 38, 65 50 C65 62, 35 62, 35 50 Z" fill="rgba(167, 139, 250, 0.08)" />
                  
                  {/* Hair cap */}
                  <path d="M30 45 C35 30, 65 30, 70 45 L68 38 L32 38 Z" fill="url(#avatarGrad)" />
                  
                  {/* Tech specs / programmer glasses */}
                  <rect x="38" y="47" width="10" height="5" rx="1" fill="none" stroke="#A78BFA" strokeWidth="2" />
                  <rect x="52" y="47" width="10" height="5" rx="1" fill="none" stroke="#A78BFA" strokeWidth="2" />
                  <line x1="48" y1="49" x2="52" y2="49" stroke="#A78BFA" strokeWidth="2" />
                  
                  {/* Glowing lenses glow */}
                  <rect x="39" y="48" width="8" height="3" rx="0.5" fill="rgba(167, 139, 250, 0.3)" />
                  <rect x="53" y="48" width="8" height="3" rx="0.5" fill="rgba(167, 139, 250, 0.3)" />

                  {/* Neural line linking from temple */}
                  <path d="M68 45 L80 35 L88 35" stroke="#F9A8D4" strokeWidth="1" strokeDasharray="1 1" />
                  <circle cx="88" cy="35" r="2" fill="#F9A8D4" />
                </svg>

                {/* Status Indicator */}
                <span className="text-sm font-display font-medium text-[#1E293B] mb-0.5">Praise</span>
                <span className="text-xs font-sans text-[#475569]">B.Tech CSE Student</span>
                <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-150 text-emerald-700 font-mono text-[10px] font-bold shadow-sm">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Open to Internships
                </div>
              </div>
            </div>
          </div>

          {/* Text Description Column */}
          <div className="lg:col-span-7 space-y-6" id="about-text-panel">
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#1E293B] leading-tight">
              A Computer Science student with a laser focus on AI and developing technology-driven automation.
            </h3>
            
            <p className="text-[#475569] font-sans leading-relaxed text-sm sm:text-base">
              My engineering journey is fueled by an absolute passion for continuous self-education and building deep technical skills that solve human issues. I believe in translating complex academic formulas into elegant, fast, and secure digital platforms.
            </p>
            
            <p className="text-[#475569] font-sans leading-relaxed text-sm sm:text-base">
              Through B.Tech specialization benchmarks, I maintain constant development cycles in pythonic systems, responsive React architectures, and database orchestration frameworks. My absolute goal is to bridge the gap between artificial intelligence algorithms and highly intuitive user experiences.
            </p>

            {/* Trait list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4" id="about-traits">
              {traits.map((trait, idx) => {
                const Icon = trait.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-purple-100 hover:border-purple-200 hover:bg-purple-50/20 hover:scale-[1.02] shadow-sm hover:shadow-md transition-all duration-300 text-left"
                  >
                    <div className={`p-2.5 rounded-lg w-fit border ${trait.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-extrabold text-[#1E293B] mt-1">
                      {trait.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-[#475569] mt-1.5">
                      {trait.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
