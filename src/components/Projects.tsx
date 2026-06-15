import { useState } from "react";
import { FolderGit2, ArrowUpRight, CheckCircle2, Star, Sparkles, X, ShieldAlert, Layers } from "lucide-react";
import { PROJECTS_DATA, Project } from "../types";

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeProductModal, setActiveProductModal] = useState<Project | null>(null);

  // Derive unique categories dynamically
  const filtersSet = new Set<string>();
  PROJECTS_DATA.forEach(proj => filtersSet.add(proj.category));
  const filterCategories = ["All", ...Array.from(filtersSet)];

  const filteredProjects = selectedFilter === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(proj => proj.category === selectedFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#F0F7FF] text-left border-y border-purple-100/35">
      {/* Decorative Blur Ambient circles */}
      <div className="absolute left-1/3 bottom-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono text-purple-600 uppercase tracking-widest font-bold">Specialized Portfolios</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1E293B] mt-1">Featured Projects</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A78BFA] to-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categories Bar */}
        <div 
          id="project-categories-filters"
          className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-4xl mx-auto"
        >
          {filterCategories.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <button
                key={filter}
                id={`project-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedFilter(filter)}
                className={`flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl font-sans text-xs font-bold border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200 shadow-sm"
                    : "bg-white text-[#475569] border-purple-100/60 hover:bg-purple-50/50 hover:text-purple-600"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div 
          id="projects-gallery-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setActiveProductModal(project)}
              className="group relative flex flex-col justify-between bg-white border border-purple-100 rounded-3xl p-6.5 hover:border-purple-350 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 cursor-pointer overflow-hidden text-left"
            >
              {/* Card top banner style gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#A78BFA] via-[#93C5FD] to-[#F9A8D4]" />

              <div>
                {/* Category & Stats marker */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[9px] font-bold text-purple-700 tracking-wider uppercase bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                    {project.liveUrl && (
                      <span className="font-mono text-[9px] font-bold text-emerald-700 tracking-wider uppercase bg-emerald-50 border border-emerald-150 px-2 py-1 rounded-md flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>
                  {project.metrics && (
                    <span className="font-mono text-[9px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold font-display text-[#1E293B] group-hover:text-purple-600 transition-colors tracking-tight mb-3 flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                {/* Description snippet */}
                <p className="text-[#475569] text-xs sm:text-sm font-sans line-clamp-3 leading-relaxed font-medium mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags and feature list footer */}
              <div>
                <div className="h-[1px] bg-purple-100/60 my-4" />
                <div className="flex flex-wrap gap-1.5" id={`project-${project.id}-tags`}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] font-bold text-[#475569] px-2 py-1 bg-purple-50/50 border border-purple-100/80 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="font-mono text-[9px] font-bold text-purple-500 px-2.5 py-1 bg-purple-100/30 rounded-md">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty status check */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-[#475569] font-sans">
            <Layers className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p>No projects match this category choice.</p>
          </div>
        )}

      </div>

      {/* Project Detail Dialog Modal */}
      {activeProductModal && (
        <div
          id="project-detail-modal-overlay"
          className="fixed inset-0 bg-[#1E293B]/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveProductModal(null)}
        >
          <div
            id="project-detail-modal-box"
            className="w-full max-w-2xl bg-white border border-purple-100 rounded-3xl p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="project-modal-close"
              onClick={() => setActiveProductModal(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-[#1E293B] hover:text-purple-600 bg-purple-50 border border-purple-100 hover:bg-purple-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Heading block */}
            <div className="space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="font-mono text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-50 border border-purple-100 px-3 py-1.5 rounded-lg">
                  {activeProductModal.category}
                </span>
                {activeProductModal.metrics && (
                  <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-indigo-500 animate-pulse" />
                    {activeProductModal.metrics}
                  </span>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-[#1E293B] tracking-tight">
                {activeProductModal.title}
              </h3>

              <p className="text-[#475569] text-xs sm:text-sm font-sans leading-relaxed font-semibold">
                {activeProductModal.description}
              </p>

              <div className="h-[1px] bg-purple-100/80 my-6" />

              {/* Features List */}
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-purple-700 uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#86EFAC] shrink-0" />
                  Key Specifications &amp; Features
                </h4>

                <ul className="space-y-2.5">
                  {activeProductModal.features.map((feat, fidx) => (
                    <li
                      key={fidx}
                      className="text-xs sm:text-sm font-sans text-[#475569] leading-relaxed flex items-start gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0 mt-2" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-[1px] bg-purple-100/80 my-6" />

              {/* Technologies Applied */}
              <div>
                <h4 className="font-display font-bold text-sm text-[#BE185D] uppercase tracking-widest mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProductModal.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-[#475569] bg-purple-50/50 border border-purple-100 px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-purple-100/80 my-6" />

              {/* Live URL Action wrapper */}
              {activeProductModal.liveUrl && (
                <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-150">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-mono text-[9px] font-bold">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      LIVE DEPLOYMENT READY
                    </span>
                    <p className="text-xs text-[#475569] font-sans leading-relaxed">
                      This project has a functional public instance configured.
                    </p>
                  </div>
                  <a
                    href={activeProductModal.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md shadow-emerald-200 cursor-pointer shrink-0"
                  >
                    <span>Launch Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Demo actions links info */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                  Codebase and Deployments
                </span>
                <p className="text-[11px] text-[#475569] font-mono">
                  Academic repositories available upon recruiter credentials audit.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
