import { Compass, LineChart, Target, Rocket, RefreshCw, CheckCircle, BrainCircuit } from "lucide-react";
import { CAREER_GOALS_DATA } from "../types";

export function CareerGoals() {
  // Map icons dynamically
  const getGoalIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BrainCircuit className="w-5 h-5 text-pink-600" />;
      case 1:
        return <Rocket className="w-5 h-5 text-purple-600" />;
      case 2:
        return <Compass className="w-5 h-5 text-indigo-600" />;
      case 3:
      default:
        return <LineChart className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="career-goals" className="py-20 relative overflow-hidden text-left bg-[#FFF1F2] border-y border-pink-150/15">
      {/* Soft radial background */}
      <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono text-pink-600 uppercase tracking-widest font-bold">Roadmap &amp; Vision</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1E293B] mt-1">Career Goals &amp; Aspirations</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A78BFA] to-pink-450 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Visual Roadmap Dashboard Grid */}
        <div 
          id="career-goals-container"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {CAREER_GOALS_DATA.map((goal, index) => {
            const icon = getGoalIcon(index);
            const isInProgress = goal.status === "in-progress";

            return (
              <div
                key={goal.id}
                id={`goal-item-${goal.id}`}
                className="bg-white border border-pink-100 hover:border-pink-300 rounded-3xl p-6.5 flex flex-col justify-between hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div>
                  {/* Badge Row */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="font-mono text-[10px] text-[#475569] tracking-wider uppercase font-bold">
                      Priority Sequence #{index + 1}
                    </span>
                    
                    {isInProgress ? (
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full shadow-sm">
                        <RefreshCw className="w-2.5 h-2.5 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
                        Active Pursuit
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-pink-700 bg-pink-50 border border-pink-100 px-2.5 py-1 rounded-full shadow-sm">
                        <Target className="w-2.5 h-2.5 text-pink-400 animate-pulse" />
                        Target Roadmap
                      </span>
                    )}
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-3.5 mb-3.5 text-left">
                    <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-100 group-hover:scale-105 transition-transform shrink-0">
                      {icon}
                    </div>
                    <h3 className="text-lg font-bold font-display text-[#1E293B] group-hover:text-pink-650 transition-colors tracking-tight">
                      {goal.title}
                    </h3>
                  </div>

                  {/* Body Text */}
                  <p className="text-[#475569] text-xs sm:text-sm font-sans leading-relaxed font-semibold mb-6">
                    {goal.description}
                  </p>
                </div>

                {/* Card footer details metadata */}
                <div>
                  <div className="h-[1px] bg-pink-50 my-4" />
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#475569] font-bold">Est. Phase:</span>
                    <span className="text-pink-600 font-extrabold bg-pink-50 border border-pink-100 rounded-full px-2.5 py-0.5">{goal.timeframe}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global statement card */}
        <div 
          id="career-goals-philosophic-note"
          className="mt-12 p-6 rounded-3xl bg-white border border-pink-100 text-center max-w-3xl mx-auto shadow-md shadow-pink-100/5"
        >
          <p className="font-sans text-sm text-[#475569] leading-relaxed max-w-2xl mx-auto font-semibold italic">
            "To build solutions that do not just perform calculations faster, but fundamentally optimize how we work, live, and preserve natural energy. That is my definition of meaningful software engineering."
          </p>
          <p className="font-mono text-xs text-pink-500 mt-2.5 font-bold">— Praise</p>
        </div>

      </div>
    </section>
  );
}
