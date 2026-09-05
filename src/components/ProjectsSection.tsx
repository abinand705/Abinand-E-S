import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, CheckCircle2, Code2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { TiltCard } from './TiltCard';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const allFilters = [
    { id: 'all', label: 'All Works' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'creative', label: 'Creative Canvas' },
    { id: 'tools', label: 'Tools & Mobile' },
    { id: 'analytics', label: 'Data Analytics' },
  ];

  const availableCategories = new Set(PROJECTS.map((p) => p.category));
  const filters = allFilters.filter(
    (f) => f.id === 'all' || availableCategories.has(f.id as any)
  );

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Featured Works & <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Shipped Software
              </span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            Real deployments showcasing high-performance architectures, dynamic canvas procedural simulations, and mobile engineering.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => {
            const isActive = selectedFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-100/80 text-emerald-900 border border-emerald-500/40 shadow-sm font-semibold'
                    : 'bg-white/70 text-slate-600 hover:text-slate-900 hover:bg-white border border-emerald-950/10 shadow-xs'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Projects 3D Parallax Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const hasLiveDemo = project.link && !project.link.includes('github.com');
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <TiltCard
                    maxTilt={6}
                    glowColor="rgba(16, 185, 129, 0.15)"
                    cursorLabel="INSPECT"
                    className="p-7 sm:p-9 h-full flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Bar with Category & Metrics */}
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800 uppercase tracking-wider font-semibold">
                          {project.category}
                        </span>

                        {project.stats && (
                          <span className="px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200 text-[11px] font-mono text-teal-800 font-medium">
                            {project.stats.label}: {project.stats.value}
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-emerald-600" />
                      </h3>

                      <p className="text-xs font-mono text-emerald-700 mb-4 font-semibold">
                        {project.tagline}
                      </p>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6 pt-4 border-t border-emerald-950/10">
                        {project.highlights.slice(0, 2).map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-3 pt-4 border-t border-emerald-950/10">
                        {hasLiveDemo && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
                          >
                            <span>Live App</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-xs"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>

                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="ml-auto text-xs font-mono text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1 py-1 font-semibold"
                        >
                          <span>Full Specs</span>
                          <span className="text-[10px]">→</span>
                        </button>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Specs Inspection Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
