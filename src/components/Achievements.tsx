import { Sparkles, Trophy, Flame, GraduationCap, Code } from "lucide-react";
import { ACHIEVEMENTS_DATA } from "../types";

export function Achievements() {
  // Map icons based on category keys
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Academic Milestones":
        return <GraduationCap className="w-6 h-6 text-indigo-600" />;
      case "Technical Project Development":
        return <Flame className="w-6 h-6 text-purple-600" />;
      case "AI Learning Accomplishments":
        return <Sparkles className="w-6 h-6 text-pink-600" />;
      case "Web Development Expertise":
      default:
        return <Code className="w-6 h-6 text-sky-600" />;
    }
  };

  const getCardBorder = (category: string) => {
    switch (category) {
      case "Academic Milestones":
        return "hover:border-indigo-300";
      case "Technical Project Development":
        return "hover:border-purple-300";
      case "AI Learning Accomplishments":
        return "hover:border-pink-300";
      case "Web Development Expertise":
      default:
        return "hover:border-sky-300";
    }
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden text-left bg-white border-y border-purple-100/20">
      {/* Decorative gradient element */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-100/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono text-purple-600 uppercase tracking-widest font-bold">Milestones &amp; Standards</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1E293B] mt-1">Honors &amp; Accomplishments</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A78BFA] to-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Badges and Honors Grid */}
        <div 
          id="achievements-gallery-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {ACHIEVEMENTS_DATA.map((item) => {
            const icon = getCategoryIcon(item.category);
            const borderAnim = getCardBorder(item.category);

            return (
              <div
                key={item.id}
                id={`achievement-card-${item.id}`}
                className={`flex gap-5 bg-[#FDFCFD] border border-purple-100 rounded-3xl p-6 md:p-8 hover:bg-[#FAF5FF]/30 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ${borderAnim}`}
              >
                {/* Floating Trophy Badge placeholder */}
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-purple-100 group-hover:scale-105 transition-transform shadow-sm shadow-purple-100/5">
                  {icon}
                </div>

                <div className="space-y-3 flex-1">
                  {/* Category subtag & Date tracker */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[10px] text-[#475569] tracking-wider uppercase font-bold">
                      {item.category}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Trophy className="w-3 h-3 text-purple-600 fill-current" />
                      {item.badge}
                    </span>
                  </div>

                  {/* Title and details */}
                  <h3 className="text-lg font-bold font-display text-[#1E293B] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-[#475569] text-xs sm:text-sm font-sans leading-relaxed font-semibold">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
