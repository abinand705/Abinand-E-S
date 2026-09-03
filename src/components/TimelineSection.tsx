import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const TimelineSection: React.FC = () => {
  return (
    <section id="education" className="py-28 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-emerald-700 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Educational <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Milestones & Foundation
            </span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Rigorous academic foundation in computational analytics, statistical inference, and software systems at Kristu Jayanti University.
          </p>
        </div>

        {/* Educational Milestone Display */}
        <div className="relative border-l border-emerald-950/15 pl-6 sm:pl-10 ml-4 sm:ml-8 space-y-12">
          {TIMELINE.map((item, idx) => {
            return (
              <div key={idx} className="relative group">
                {/* Timeline node dot with pulse */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-emerald-50 border-2 border-emerald-600 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                </div>

                <TiltCard
                  maxTilt={4}
                  glowColor="rgba(16, 185, 129, 0.15)"
                  className="p-8 sm:p-10"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-semibold">
                        {item.year}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-medium">
                        [{item.period}]
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-teal-800 font-medium mb-4">
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold">{item.institution}</span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2.5 mb-6">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-emerald-950/10">
                    <span className="text-xs font-mono text-slate-500 font-semibold mr-1">
                      Key Focus:
                    </span>
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
