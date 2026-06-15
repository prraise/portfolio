import { useState } from "react";
import { 
  Layers, 
  Terminal, 
  Coffee, 
  Chrome, 
  Cpu, 
  Code2, 
  Palette, 
  Atom, 
  Monitor, 
  Stars, 
  CheckSquare, 
  Bot, 
  Workflow, 
  Database, 
  GitBranch, 
  FileCode, 
  Settings, 
  PenTool,
  Globe,
  Wrench,
  BrainCircuit,
  Sparkles
} from "lucide-react";
import { SKILLS_DATA, Skill } from "../types";

// Description and Icon mappings for each skill with themed colors for Option 2 Tags
const SKILL_DETAILS: Record<string, { icon: any; description: string; tagColor: string }> = {
  "Python": {
    icon: Terminal,
    description: "Commanding algorithmic efficiency, automated scripting arrays, and data science model training.",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100/50"
  },
  "Java": {
    icon: Coffee,
    description: "Object-oriented software architectures, concurrent execution patterns, and robust data structures.",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100/50"
  },
  "JavaScript": {
    icon: Chrome,
    description: "Structuring modern dynamic responsive interfaces and fast programmatic client interactions.",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-150 hover:bg-indigo-100/50"
  },
  "C": {
    icon: Cpu,
    description: "Low-level system architecture optimization, memory mapping routines, and hardware computational benchmarks.",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-150 hover:bg-indigo-100/50"
  },
  "HTML": {
    icon: Code2,
    description: "Composing semantic document architectures for maximum screen reader accessibility and logical structure.",
    tagColor: "bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100/50"
  },
  "CSS": {
    icon: Palette,
    description: "Articulating layout behaviors using flexbox, grids, fluid modular elements, and modern CSS features.",
    tagColor: "bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100/50"
  },
  "React": {
    icon: Atom,
    description: "Creating web structures with optimized reconciliation states, single-directional data lanes, and component patterns.",
    tagColor: "bg-purple-50 text-purple-800 border-purple-150 hover:bg-purple-100/50"
  },
  "Responsive Design": {
    icon: Monitor,
    description: "Developing viewport-adaptive structures that present perfectly from ultra-wide desktops to hand-held phones.",
    tagColor: "bg-purple-50 text-purple-700 border-purple-150 hover:bg-purple-100/50"
  },
  "Generative AI": {
    icon: Stars,
    description: "Applying conversational transformer models, embedding systems, and dynamic contextual frameworks.",
    tagColor: "bg-sky-50 text-sky-700 border-sky-100 hover:bg-sky-100/50"
  },
  "Prompt Engineering": {
    icon: CheckSquare,
    description: "Developing systematic, contextual user templates to elicit precise and reliable outputs from LLMs.",
    tagColor: "bg-sky-50 text-sky-700 border-sky-100 hover:bg-sky-100/50"
  },
  "AI Tools": {
    icon: Bot,
    description: "Designing automated solutions using Google AI Studio, Gemini endpoints, and open intelligence frameworks.",
    tagColor: "bg-sky-50 text-sky-850 border-sky-150 hover:bg-sky-100/50"
  },
  "Automation Workflows": {
    icon: Workflow,
    description: "Building algorithmic workflows, event-driven data filters, and automated computer vision integrations.",
    tagColor: "bg-sky-50 text-sky-700 border-sky-150 hover:bg-sky-100/50"
  },
  "SQL": {
    icon: Database,
    description: "Structuring relational database operations, keys, tables, visual indexes, and complex queries.",
    tagColor: "bg-rose-50 text-rose-700 border-rose-100 hover:bg-rose-100/50"
  },
  "GitHub": {
    icon: GitBranch,
    description: "Conducting modern branch tracking, code integration reviews, release version tags, and teamwork flows.",
    tagColor: "bg-rose-50 text-rose-700 border-rose-100 hover:bg-rose-100/50"
  },
  "VS Code": {
    icon: FileCode,
    description: "Configuring optimal workspace profiles, custom tasks, integrated terminals, and rich debugging setups.",
    tagColor: "bg-rose-50 text-rose-800 border-rose-150 hover:bg-rose-100/50"
  },
  "Google AI Studio": {
    icon: Settings,
    description: "Auditing LLM prompt structures, temperature settings, and prototyping model integrations instantly.",
    tagColor: "bg-rose-50 text-rose-700 border-rose-150 hover:bg-rose-100/50"
  }
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { label: "All Skills", id: "All", icon: Layers, textColor: "text-purple-600" },
    { label: "Programming", id: "Programming Languages", icon: Terminal, textColor: "text-indigo-600" },
    { label: "Web Development", id: "Web Development", icon: Globe, textColor: "text-purple-650" },
    { label: "Artificial Intelligence", id: "Artificial Intelligence", icon: BrainCircuit, textColor: "text-sky-600" },
    { label: "Database & Tools", id: "Database & Tools", icon: Wrench, textColor: "text-purple-600" },
  ];

  const filteredSkills = selectedCategory === "All"
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden text-left border-y border-purple-100/20">
      {/* Decorative Gradients */}
      <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-[#A78BFA]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono text-purple-600 uppercase tracking-widest font-bold">Tech Stack Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1E293B] mt-1">Skills &amp; Toolkit</h2>
          <p className="text-xs sm:text-sm text-[#475569] font-sans mt-2.5 font-semibold text-center leading-relaxed">
            A comprehensive overview of tools, environments, and languages leveraged to construct highly interactive, performance-optimized, and intelligent systems.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A78BFA] to-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Navigation (Pills) */}
        <div 
          id="skills-categories-filters"
          className="flex flex-wrap justify-center items-center gap-2.5 mb-12 max-w-4xl mx-auto"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                id={`skill-filter-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-sans text-xs font-bold border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200 shadow-sm"
                    : "bg-[#FAFAFA] text-[#475569] border-purple-100 hover:bg-purple-50/50 hover:text-purple-600"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${cat.textColor}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Technology Tag Cloud (Option 2) */}
        <div 
          id="skills-tags-cloud"
          className="bg-purple-50/20 border border-purple-100/50 rounded-3xl p-6.5 max-w-5xl mx-auto mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-1.5 mb-3.5">
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            <p className="text-xs font-mono text-purple-600 uppercase tracking-widest font-extrabold">
              Interactive Quick Scan • {selectedCategory === "All" ? "All Skill Tags" : `${selectedCategory} Tags`}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {filteredSkills.map((skill) => {
              const details = SKILL_DETAILS[skill.name] || {
                icon: CheckSquare,
                tagColor: "bg-purple-50 text-purple-700 border-purple-100"
              };
              const IconComp = details.icon;
              return (
                <span
                  key={`tag-${skill.name}`}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-sans text-xs font-bold border transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default shadow-sm ${details.tagColor}`}
                >
                  <IconComp className="w-3.5 h-3.5 opacity-90" />
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid (Option 1) */}
        <div 
          id="skills-cards-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {filteredSkills.map((skill: Skill) => {
            const details = SKILL_DETAILS[skill.name] || {
              icon: CheckSquare,
              description: "Leveraging key capabilities of this technology to construct reliable and scalable application features.",
              tagColor: "bg-purple-50 text-purple-750 border-purple-100"
            };

            const IconComponent = details.icon;

            // Define custom container styles per category
            let categoryTheming = "border-indigo-100 hover:border-indigo-250 hover:shadow-indigo-100/30";
            let categoryBadgeColor = "text-indigo-700 bg-indigo-50 border-indigo-100";
            if (skill.category === "Web Development") {
              categoryTheming = "border-purple-100 hover:border-purple-250 hover:shadow-purple-100/30";
              categoryBadgeColor = "text-purple-705 bg-purple-50 border-purple-100";
            } else if (skill.category === "Artificial Intelligence") {
              categoryTheming = "border-sky-100 hover:border-sky-250 hover:shadow-sky-100/30";
              categoryBadgeColor = "text-sky-700 bg-sky-50 border-sky-100";
            } else if (skill.category === "Database & Tools") {
              categoryTheming = "border-pink-100 hover:border-pink-250 hover:shadow-pink-100/30";
              categoryBadgeColor = "text-pink-700 bg-pink-50 border-pink-100";
            }

            return (
              <div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`group bg-white border ${categoryTheming} hover:-translate-y-1 shadow-sm hover:shadow-lg rounded-3xl p-6.5 flex flex-col justify-between transition-all duration-300 text-left`}
              >
                <div>
                  {/* Category sub-header */}
                  <div className="flex justify-between items-center mb-5">
                    <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-md border font-mono text-[9px] font-bold ${categoryBadgeColor}`}>
                      {skill.category}
                    </span>
                    <CheckSquare className="w-4 h-4 text-green-300 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Header Title with Custom Icon */}
                  <div className="flex items-center gap-3.5 mb-3 text-left">
                    <div className="p-2.5 rounded-xl bg-purple-50/50 border border-purple-100 text-purple-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold font-display text-[#1E293B] group-hover:text-purple-650 transition-colors tracking-tight">
                      {skill.name}
                    </h3>
                  </div>

                  {/* High Quality Concept/Tool Description */}
                  <p className="text-[#475569] text-xs sm:text-xs font-sans font-semibold leading-relaxed mb-4">
                    {details.description}
                  </p>
                </div>

                {/* Foot indicators */}
                <div className="flex justify-between items-center text-[10px] font-mono text-[#94A3B8] pt-3 border-t border-purple-50/50 mt-1">
                  <span>Interactive Pipeline</span>
                  <span className="text-purple-500 font-bold group-hover:translate-x-1 transition-transform">Active Tool →</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
