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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text Description Column */}
          <div className="lg:col-span-7 space-y-6" id="about-text-panel">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-150 text-emerald-700 font-mono text-xs font-bold shadow-sm">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Open to Internships & Collaboration
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#1E293B] leading-tight">
              A Computer Science student with a laser focus on AI and developing technology-driven automation.
            </h3>
            
            <p className="text-[#475569] font-sans leading-relaxed text-sm sm:text-base">
              My engineering journey is fueled by an absolute passion for continuous self-education and building deep technical skills that solve human issues. I believe in translating complex academic formulas into elegant, fast, and secure digital platforms.
            </p>
            
            <p className="text-[#475569] font-sans leading-relaxed text-sm sm:text-base">
              Through B.Tech specialization benchmarks, I maintain constant development cycles in pythonic systems, responsive React architectures, and database orchestration frameworks. My absolute goal is to bridge the gap between artificial intelligence algorithms and highly intuitive user experiences.
            </p>

            <div className="pt-4 border-t border-purple-100/50 flex flex-wrap gap-x-6 gap-y-3 font-sans text-sm text-[#475569]">
              <div>
                <span className="font-semibold text-slate-800">Degree:</span> B.Tech CSE (AI) Student
              </div>
              <div>
                <span className="font-semibold text-slate-800">Focus:</span> Deep Neural Pipelines & Web Automation
              </div>
            </div>
          </div>

          {/* Traits List Column */}
          <div className="lg:col-span-5 flex flex-col gap-4" id="about-traits">
            {traits.map((trait, idx) => {
              const Icon = trait.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-purple-50 hover:border-purple-200 hover:bg-purple-50/20 hover:scale-[1.01] shadow-xs hover:shadow-sm transition-all duration-300 text-left flex gap-4 items-start"
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${trait.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-extrabold text-[#1E293B]">
                      {trait.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-[#475569]">
                      {trait.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
