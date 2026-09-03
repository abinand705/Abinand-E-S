import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Instagram, Mail, MousePointer, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  cursorEnabled: boolean;
  setCursorEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ cursorEnabled, setCursorEnabled }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-white/85 backdrop-blur-xl border-b border-emerald-950/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#home');
          }}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 p-[1px] shadow-[0_0_15px_rgba(5,150,105,0.25)] group-hover:shadow-[0_0_22px_rgba(5,150,105,0.4)] transition-all">
            <div className="w-full h-full rounded-[11px] bg-[#0c2e22] flex items-center justify-center font-display font-extrabold text-white text-sm">
              AE
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-slate-900 text-lg tracking-tight group-hover:text-emerald-700 transition-colors">
              ABINAND E S
            </span>
            <span className="hidden sm:block text-[10px] font-mono text-slate-500 tracking-wider uppercase">
              BCA Analytics • Dev
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full border border-emerald-950/[0.08] bg-white/75 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 transition-all"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Actions & Socials */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Custom Cursor Toggle */}
          <button
            onClick={() => setCursorEnabled((prev) => !prev)}
            title={cursorEnabled ? 'Disable Fluid Mouse Cursor' : 'Enable Fluid Mouse Cursor'}
            className={`p-2 rounded-xl border transition-all ${
              cursorEnabled
                ? 'border-emerald-500/40 bg-emerald-50 text-emerald-800 shadow-[0_0_12px_rgba(5,150,105,0.15)]'
                : 'border-slate-200 bg-white/60 text-slate-500 hover:text-slate-800'
            }`}
          >
            <MousePointer className="w-4 h-4" />
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-1 border-l border-slate-200 pl-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-600 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-600 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2 rounded-lg text-slate-600 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Contact CTA */}
          <button
            onClick={() => scrollTo('#contact')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-mono tracking-wide text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setCursorEnabled((prev) => !prev)}
            aria-label="Toggle custom cursor"
            className={`p-2 rounded-lg border text-xs ${
              cursorEnabled ? 'border-emerald-500/40 text-emerald-800 bg-emerald-50' : 'border-slate-200 text-slate-500'
            }`}
          >
            <MousePointer className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-xl border border-slate-200 bg-white/80 text-slate-800"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-2xl px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="py-2.5 text-left text-sm font-medium text-slate-800 hover:text-emerald-700 border-b border-slate-100"
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-4 flex items-center justify-between">
                <div className="flex gap-3">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 text-slate-700"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 text-slate-700"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 text-slate-700"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => scrollTo('#contact')}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
