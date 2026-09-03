import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Section {
  id: string;
  label: string;
  number: string;
}

const SECTIONS: Section[] = [
  { id: 'home', label: 'Intro', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'skills', label: 'Stack', number: '03' },
  { id: 'projects', label: 'Works', number: '04' },
  { id: 'experience', label: 'Career', number: '05' },
  { id: 'education', label: 'Academics', number: '06' },
  { id: 'services', label: 'Services', number: '07' },
  { id: 'contact', label: 'Contact', number: '08' },
];

export const ScrollElevator: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Section quick navigator"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3.5 pointer-events-auto"
    >
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        const isHovered = hoveredSection === sec.id;

        return (
          <div
            key={sec.id}
            className="relative flex items-center justify-end group"
            onMouseEnter={() => setHoveredSection(sec.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Tooltip on hover */}
            <AnimatePresence>
              {(isHovered || isActive) && (
                <motion.span
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className={`mr-3 px-2.5 py-1 rounded-md text-xs font-mono tracking-wider backdrop-blur-md border pointer-events-none whitespace-nowrap shadow-md ${
                    isActive
                      ? 'bg-white/95 border-emerald-500/40 text-emerald-900 font-semibold shadow-emerald-500/10'
                      : 'bg-white/90 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="text-emerald-600 font-semibold mr-1.5">{sec.number}</span>
                  {sec.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Interactive Dot / Indicator */}
            <button
              onClick={() => scrollTo(sec.id)}
              aria-label={`Scroll to ${sec.label} section`}
              data-cursor="GOTO"
              className="relative p-1 flex items-center justify-center focus:outline-none"
            >
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3 h-8 bg-gradient-to-b from-emerald-500 to-teal-700 shadow-[0_0_12px_rgba(16,185,129,0.5)] ring-2 ring-emerald-500/30'
                    : 'w-2 h-2 bg-slate-400/40 hover:bg-emerald-700 hover:scale-125'
                }`}
              />
            </button>
          </div>
        );
      })}
    </nav>
  );
};
