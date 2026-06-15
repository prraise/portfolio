import { GraduationCap, Award, Calendar, BookOpen, School, University } from "lucide-react";
import { EDUCATION_DATA } from "../types";

export function Education() {
  // Helper to resolve react-lucide icon dynamically
  const getIcon = (type: string) => {
    switch (type) {
      case "university":
        return <University className="w-5 h-5 animate-pulse" />;
      case "college":
        return <Award className="w-5 h-5" />;
      case "school":
      default:
        return <School className="w-5 h-5" />;
    }
  };

  const getBadgeColors = (type: string) => {
    switch (type) {
      case "university":
        return "text-indigo-700 bg-indigo-50 border-indigo-200 shadow-indigo-100/5";
      case "college":
        return "text-purple-700 bg-purple-50 border-purple-200 shadow-purple-100/5";
      case "school":
      default:
        return "text-[#BE185D] bg-pink-50 border-pink-200 shadow-pink-100/5";
    }
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden text-left bg-[#FAF5FF] border-y border-purple-100/40">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono text-purple-600 uppercase tracking-widest font-bold">Academic Formations</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1E293B] mt-1">My Education Journey</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A78BFA] to-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto" id="education-timeline-container">
          
          {/* Central Vertical connecting Line */}
          <div className="absolute left-4 sm:left-1/2 xs:left-6 calc-left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-200 via-purple-300 to-transparent transform -translate-x-[1px] hidden sm:block" />

          <div className="space-y-12">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              const badgeStyle = getBadgeColors(item.iconType);
              const stepIcon = getIcon(item.iconType);

              return (
                <div
                  key={item.id}
                  id={`edu-item-${item.id}`}
                  className="relative flex flex-col sm:flex-row items-stretch sm:justify-between group transition-all duration-300"
                >
                  {/* Timeline Badge (Desktop centered, Mobile left-anchored) */}
                  <div className="absolute left-4 sm:left-1/2 top-0 transform -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-purple-200 shadow-md group-hover:border-purple-400 group-hover:scale-110 transition-all duration-300">
                    <span className={item.iconType === 'university' ? 'text-indigo-600' : item.iconType === 'college' ? 'text-purple-600' : 'text-[#BE185D]'}>
                      {stepIcon}
                    </span>
                  </div>

                  {/* Empty spacer spacer item */}
                  <div className="hidden sm:block w-[45%]">
                    {!isEven && (
                      <div className="flex flex-col items-end pr-8 text-right justify-center h-full">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-700 py-1.5 px-3.5 rounded-full bg-purple-50/70 border border-purple-200/50">
                          <Calendar className="w-3 h-3 text-purple-600" />
                          {item.period}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Section */}
                  <div 
                    className="w-full sm:w-[45%] pl-12 sm:pl-0"
                  >
                    <div className={`relative p-6 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 hover:shadow-lg shadow-md shadow-purple-100/5 transition-all duration-300 ${
                      isEven ? "sm:ml-8" : "sm:mr-8"
                    }`}>
                      
                      {/* Triangle pointer for desktop decoration */}
                      <span className={`absolute top-4 w-3 h-3 bg-white border-t border-l border-purple-100 transform rotate-45 hidden sm:block ${
                        isEven ? "-left-1.5" : "-right-1.5 rotate-[135deg]"
                      }`} />

                      {/* Period (Mobile Display) */}
                      <div className="flex sm:hidden items-center gap-1.5 font-mono text-[10px] font-bold text-purple-700 py-1 px-2.5 rounded-full bg-purple-50 border border-purple-100 w-fit mb-3">
                        <Calendar className="w-3 h-3 text-purple-600" />
                        {item.period}
                      </div>

                      <div className="space-y-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold tracking-wide ${badgeStyle}`}>
                          <BookOpen className="w-3 h-3" />
                          {item.stage}
                        </span>

                        <div>
                          <h3 className="text-lg font-extrabold font-display text-[#1E293B] group-hover:text-purple-600 transition-colors">
                            {item.institution}
                          </h3>
                          <p className="text-sm font-bold font-sans text-purple-600 mt-1">
                            {item.streamOrMajor}
                          </p>
                        </div>

                        {/* Bulleted Curriculum Checklist */}
                        <div className="h-[1px] bg-purple-100/60 my-4" />

                        <ul className="space-y-2 text-xs text-[#475569] leading-relaxed font-sans font-medium">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Empty spacer spacer item (Right alignment fallback) */}
                  <div className="hidden sm:block w-[45%]">
                    {isEven && (
                      <div className="flex flex-col items-start pl-8 text-left justify-center h-full">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-700 py-1.5 px-3.5 rounded-full bg-purple-50/70 border border-purple-200/50">
                          <Calendar className="w-3 h-3 text-purple-600" />
                          {item.period}
                        </div>
                      </div>
                    )}
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
