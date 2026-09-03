import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Terminal as TerminalIcon, Sparkles, MapPin, GraduationCap, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';
import { TiltCard } from './TiltCard';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { damping: 20, stiffness: 100 });

  // Parallax offsets for hero components
  const yText = useTransform(smoothScrollY, [0, 500], [0, 80]);
  const yTerminal = useTransform(smoothScrollY, [0, 500], [0, 140]);
  const opacityHero = useTransform(smoothScrollY, [0, 600], [1, 0.2]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[92vh] pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          style={{ opacity: opacityHero }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Typography & Intent */}
          <motion.div
            style={{ y: yText }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/90 backdrop-blur-md shadow-[0_2px_12px_rgba(5,150,105,0.12)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span className="text-xs font-mono text-emerald-900 font-medium tracking-wide">
                From Wayanad, Kerala • Studying in Bengaluru
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-emerald-700 font-mono text-sm tracking-widest uppercase font-semibold">
                Hello, I am
              </p>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-slate-900 leading-[0.95]">
                ABINAND <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  E S
                </span>
              </h1>
            </div>

            {/* Subheading & Core Specialization */}
            <h2 className="text-xl sm:text-2xl text-slate-800 font-display font-medium max-w-xl leading-snug">
              Designing tactile, parallax-driven web applications and scalable data systems.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed max-w-xl">
              Hailing from <strong className="text-slate-900 font-semibold">Wayanad district, Kerala</strong>, currently in <strong className="text-slate-900 font-semibold">Bengaluru</strong> pursuing BCA in Data Analytics at <span className="text-emerald-800 font-semibold">Kristu Jayanti University</span>.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                data-cursor="WORK"
                className="group relative px-7 py-3.5 rounded-xl font-display font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 shadow-[0_4px_20px_rgba(5,150,105,0.3)] active:scale-95 transition-all flex items-center gap-2.5 overflow-hidden"
              >
                <span>Explore Featured Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                data-cursor="CHAT"
                className="px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-slate-800 border border-slate-300/90 bg-white/80 hover:bg-white hover:border-emerald-500/50 shadow-sm backdrop-blur-md active:scale-95 transition-all"
              >
                Initiate Contact
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-emerald-950/10">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-lg bg-white/70 border border-emerald-950/10 shadow-xs">
                  <div className="text-sm sm:text-base font-bold text-slate-900 font-display">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Tilt Card with Interactive Terminal */}
          <motion.div
            style={{ y: yTerminal }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <TiltCard
              maxTilt={7}
              glowColor="rgba(16, 185, 129, 0.2)"
              className="p-1.5 shadow-[0_15px_45px_rgba(20,45,30,0.1)]"
            >
              <InteractiveTerminal />
            </TiltCard>

            {/* Decorative Floating Pill */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 px-3 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5" title="Hometown: Wayanad, Kerala • Current: Bengaluru for studies">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Wayanad, KL ➔ Bengaluru, IN</span>
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                Kristu Jayanti Univ
              </span>
              <span className="text-emerald-700 font-semibold">● Active</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mouse scroll down indicator hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-slate-500 hover:text-emerald-700 transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">Scroll to Explore</span>
        <div className="w-4 h-7 rounded-full border border-slate-300 bg-white/60 flex items-start justify-center p-1 shadow-xs">
          <div className="w-1 h-2 rounded-full bg-emerald-600" />
        </div>
      </motion.div>
    </section>
  );
};
