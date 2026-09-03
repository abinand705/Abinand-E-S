import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Heart, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 border-t border-emerald-950/10 bg-white/80 backdrop-blur-lg relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Note */}
        <div className="text-center md:text-left space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-display font-bold text-slate-900 text-lg tracking-tight">
              ABINAND E S
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
              Nature Landscape Edition
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            BCA Data Analytics • Full-Stack Engineering • Kristu Jayanti University
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all shadow-xs"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-teal-700 hover:bg-teal-50 hover:border-teal-300 transition-all shadow-xs"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all shadow-xs"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            data-cursor="TOP"
            className="p-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-all flex items-center gap-1.5 text-xs font-mono font-semibold shadow-xs"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline">Top</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-emerald-950/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
        <div>
          © 2026 Abinand E S. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span>Engineered with React 19, Motion & Parallax</span>
        </div>
      </div>
    </footer>
  );
};
