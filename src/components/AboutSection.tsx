import React from 'react';
import { motion } from 'motion/react';
import { Code2, BarChart2, Cpu, Brain, Sparkles, Compass, Lightbulb, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: 'Precision Web Engineering',
      desc: 'Developing fast, maintainable React and TypeScript applications with deep attention to component architecture, state management, and rendering speeds.',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50 border-emerald-200',
      bgGlow: 'rgba(16, 185, 129, 0.12)',
    },
    {
      icon: BarChart2,
      title: 'Data Analytics & Statistics',
      desc: 'Pursuing BCA in Data Analytics at Kristu Jayanti University. Applying Python, exploratory data modeling, and mathematical thinking to real-world software.',
      color: 'text-teal-700',
      bg: 'bg-teal-50 border-teal-200',
      bgGlow: 'rgba(20, 184, 166, 0.12)',
    },
    {
      icon: Cpu,
      title: 'Creative Motion & Parallax',
      desc: 'Designing interfaces where motion is meaningful. Mouse parallax, reactive canvas systems, and micro-interactions turn standard websites into tactile journeys.',
      color: 'text-cyan-700',
      bg: 'bg-cyan-50 border-cyan-200',
      bgGlow: 'rgba(6, 182, 212, 0.12)',
    },
    {
      icon: Brain,
      title: 'AI & Systems Thinking',
      desc: 'Embracing modern AI capabilities, generative API workflows, and structured prompting to build tools that amplify human productivity.',
      color: 'text-emerald-800',
      bg: 'bg-emerald-50 border-emerald-200',
      bgGlow: 'rgba(5, 150, 105, 0.12)',
    },
  ];

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Identity & Mindset</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Bridging <span className="text-emerald-700">Code Precision</span> with <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Analytical Intelligence
              </span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            Based in Bengaluru, India. Driven by curiosity, algorithmic thinking, and modern web craft.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Tilt Card */}
          <div className="lg:col-span-7">
            <TiltCard
              maxTilt={5}
              glowColor="rgba(16, 185, 129, 0.12)"
              className="p-8 sm:p-10 h-full flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800">
                  <Compass className="w-3.5 h-3.5 text-emerald-600" />
                  <span>The Story So Far</span>
                </div>

                <p className="text-lg sm:text-xl text-slate-900 font-display font-semibold leading-relaxed">
                  "I believe software shouldn't merely function—it should feel responsive, intuitive, and effortlessly fast."
                </p>

                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <p>
                    As a developer pursuing a <strong className="text-slate-900 font-semibold">Bachelor of Computer Applications in Data Analytics at Kristu Jayanti University</strong>, I combine the analytical rigor of computational data science with the creative freedom of modern web engineering.
                  </p>
                  <p>
                    From contributing to <span className="text-emerald-700 font-semibold">ChefCo Hospitality Partners</span> (a live B2B procurement platform) during my web development internship at <span className="text-emerald-700 font-semibold">Kenmerk Softwares</span>, to engineering cloud diagramming suites like <span className="text-emerald-700 font-semibold">Smart Diagram Studio</span> and procedural canvas engines like <span className="text-emerald-700 font-semibold">Skycast Atlas</span>, I build software that is fast, resilient, and human-centric.
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="pt-8 border-t border-emerald-950/10 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                  #WebEngineering
                </span>
                <span className="px-3 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
                  #DataAnalytics
                </span>
                <span className="px-3 py-1 rounded-lg bg-cyan-50 text-cyan-800 border border-cyan-200">
                  #InteractiveUI
                </span>
                <span className="px-3 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                  #SelfTaughtMindset
                </span>
              </div>
            </TiltCard>
          </div>

          {/* Core Pillars 2x2 */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <TiltCard
                  key={idx}
                  maxTilt={8}
                  glowColor={pillar.bgGlow}
                  className="p-6 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-xl ${pillar.bg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <h3 className="text-sm font-display font-bold text-slate-900 tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
