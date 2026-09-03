import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ExternalLink, Building2, Code2, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-emerald-700 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Work Experience & <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Industry Contributions
            </span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Practical software engineering experience delivering features for live production platforms and real client environments.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <TiltCard
              key={idx}
              maxTilt={3}
              glowColor="rgba(16, 185, 129, 0.15)"
              className="p-8 sm:p-12 relative overflow-hidden"
            >
              {/* Top Meta Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-emerald-950/10">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-bold tracking-wide uppercase">
                      {exp.type}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-xs font-mono text-teal-800 font-semibold">
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 pt-1">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-teal-900 font-medium">
                    <span className="flex items-center gap-1.5 font-semibold text-emerald-800">
                      <Building2 className="w-4 h-4 text-emerald-600" />
                      {exp.company}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1.5 text-slate-500 font-mono text-xs">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {exp.projectLink && (
                  <div className="flex items-center gap-3">
                    <a
                      href={exp.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
                    >
                      <span>Live Platform: {exp.projectName}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Core Description Quote */}
              <div className="my-6 p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                <p className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
                  "{exp.description}"
                </p>
              </div>

              {/* Detailed Contributions */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-600" />
                  Key Responsibilities & Deliverables
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.contributions.map((item, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-emerald-950/5 text-xs text-slate-700 leading-relaxed shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Leveraged */}
              <div className="pt-6 border-t border-emerald-950/10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 font-semibold mr-1">
                      Tech Stack:
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-semibold">
                    Production Verified
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
