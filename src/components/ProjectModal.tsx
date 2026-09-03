import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Sparkles, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl rounded-2xl border border-emerald-950/15 bg-white/95 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl z-10 my-auto text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800 uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            {project.stats && (
              <span className="px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-[11px] font-mono text-teal-800 font-medium">
                {project.stats.label}: {project.stats.value}
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-2">
            {project.title}
          </h2>
          <p className="text-emerald-700 font-mono text-sm mb-6 leading-relaxed font-semibold">
            {project.tagline}
          </p>

          {/* Description */}
          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 mb-6">
            <p className="text-slate-700 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-3 mb-6">
            <h3 className="text-xs font-mono text-emerald-700 uppercase tracking-widest flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Core Capabilities & Innovations
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2 mb-8">
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1.5 font-semibold">
              <Layers className="w-3.5 h-3.5 text-teal-600" />
              Integrated Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-emerald-950/10">
            {project.link && !project.link.includes('github.com') && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-medium text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
            </a>

            <button
              onClick={onClose}
              className="ml-auto text-xs font-mono text-slate-400 hover:text-slate-700 transition-colors"
            >
              [ESC to close]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
