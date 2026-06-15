import React from "react";
import { Briefcase, Calendar, Award, CheckCircle } from "lucide-react";
import { EXPERIENCE_DATA } from "../types";

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden text-left bg-[#FAF5FF]/50 border-t border-purple-100/25">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#A78BFA]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono text-purple-600 uppercase tracking-widest font-bold">Professional Experience</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1E293B] mt-1">My Internship Journey</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A78BFA] to-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Experience Content Box */}
        <div className="max-w-4xl mx-auto space-y-8" id="experience-item-container">
          {EXPERIENCE_DATA.map((item) => (
            <div
              key={item.id}
              id={`experience-item-${item.id}`}
              className="relative p-6 sm:p-8 rounded-3xl bg-white border border-purple-100 hover:border-purple-200 shadow-md shadow-purple-100/5 hover:shadow-lg transition-all duration-300"
            >
              {/* Top Banner highlight line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#A78BFA] via-[#93C5FD] to-[#F9A8D4] rounded-t-3xl" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100/70 text-purple-700 text-xs font-bold rounded-full border border-purple-200/50 mb-3">
                    <Briefcase className="w-3.5 h-3.5" />
                    INTERNSHIP
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#1E293B]">
                    {item.role}
                  </h3>
                  <p className="text-base text-purple-600 font-sans font-bold mt-1">
                    {item.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#475569] py-1.5 px-4 rounded-xl bg-purple-50/50 border border-purple-150 self-start md:self-center">
                  <Calendar className="w-3.5 h-3.5 text-purple-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Responsibilities Details */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold text-[#475569] uppercase tracking-[0.2em]">Core focus & achievements</h4>
                <ul className="space-y-3 leading-relaxed text-sm sm:text-base text-[#475569] font-sans">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-2.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills tools tag array */}
              <div>
                <h4 className="text-xs font-bold text-[#475569] uppercase tracking-[0.2em] mb-3">Skills utilized</h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-50/65 border border-purple-100 text-xs text-purple-700 font-mono rounded-lg hover:border-purple-200 hover:bg-purple-100/60 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
