import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code, BarChart3, Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-6 h-6 text-emerald-700" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-teal-700" />,
    Sparkles: <Palette className="w-6 h-6 text-cyan-700" />,
  };

  const scrollToContact = (serviceTitle: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill message if input exists
      const msgInput = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
      if (msgInput) {
        msgInput.value = `Hi Abinand, I am interested in collaborating on ${serviceTitle}...`;
      }
    }
  };

  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Specialized Services & <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Technical Collaboration
              </span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            From architecture to production rollout, offering end-to-end craft across modern web engineering and data analytics.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const glowColors = [
              'rgba(16, 185, 129, 0.15)',
              'rgba(20, 184, 166, 0.15)',
              'rgba(6, 182, 212, 0.15)',
            ];

            return (
              <TiltCard
                key={service.id}
                maxTilt={7}
                glowColor={glowColors[index % glowColors.length]}
                cursorLabel="SERVICE"
                className="p-8 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                      {iconMap[service.iconName] || <Code className="w-6 h-6 text-emerald-700" />}
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2.5 mb-8 pt-4 border-t border-emerald-950/10">
                    <span className="text-[11px] font-mono text-emerald-700 uppercase tracking-wider block font-semibold">
                      Core Deliverables:
                    </span>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => scrollToContact(service.title)}
                  className="w-full py-3 rounded-xl border border-emerald-300/80 bg-emerald-50/90 hover:bg-emerald-100 hover:border-emerald-500 text-xs font-mono text-emerald-900 font-semibold transition-all flex items-center justify-center gap-2 group active:scale-95 shadow-xs"
                >
                  <span>Inquire Collaboration</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-emerald-700" />
                </button>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
