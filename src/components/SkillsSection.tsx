import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Database, Cpu, GitBranch, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities', icon: Layers },
    { id: 'frontend', label: 'Frontend & UI', icon: Layout },
    { id: 'backend', label: 'Backend & Data', icon: Database },
    { id: 'ai-systems', label: 'AI & Intelligence', icon: Cpu },
    { id: 'engineering', label: 'Tools & Mobile', icon: GitBranch },
  ];

  const filteredCategories = activeTab === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);

  const allTechPills = [
    'React 19', 'TypeScript', 'JavaScript (ESNext)', 'Python', 'Pandas',
    'Tailwind CSS v4', 'Motion / Framer', 'Node.js', 'Express',
    'HTML5 Canvas', 'Firebase', 'SQL / PostgreSQL', 'Git & GitHub',
    'Android Kotlin', 'REST APIs', 'Gemini AI SDK', 'Data Analytics',
    'Algorithms & DSA', 'Linux CLI'
  ];

  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Skills, Tools & <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Architecture Matrix
              </span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            Every technology in my stack is chosen for speed, reliability, and the ability to craft intelligent user experiences.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-100/80 text-emerald-900 border border-emerald-500/40 shadow-sm font-semibold'
                    : 'bg-white/70 text-slate-600 hover:text-slate-900 hover:bg-white border border-emerald-950/10 shadow-xs'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-emerald-600" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard
                  maxTilt={5}
                  glowColor="rgba(16, 185, 129, 0.12)"
                  className="p-6 sm:p-8 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-display font-bold text-slate-900">
                        {cat.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800 font-semibold">
                        {cat.skills.length} competencies
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    {/* Skill progress bars */}
                    <div className="space-y-4">
                      {cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-800 font-medium flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              {skill.name}
                            </span>
                            <span className="font-mono text-[11px] text-slate-500">
                              {skill.experience}
                            </span>
                          </div>

                          <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: sIdx * 0.08, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Tech Ecosystem Pill Cloud */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-emerald-950/10 bg-white/70 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Interactive Tech Arsenal</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {allTechPills.map((tech) => (
              <span
                key={tech}
                data-cursor="STACK"
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-700 bg-white hover:bg-emerald-50 hover:text-emerald-900 border border-slate-200 hover:border-emerald-300 transition-all duration-200 cursor-default shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
