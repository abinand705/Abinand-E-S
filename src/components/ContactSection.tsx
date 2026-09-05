import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Mail, Copy, Check, Send, Sparkles, MapPin, Github, Linkedin, Instagram, ArrowUpRight, MessageSquare, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    setErrorMessage(null);

    // Determine the optimal FormConnect endpoint
    // On Netlify, route through the same-origin Netlify proxy to prevent CORS preflight blocks
    const isNetlify = typeof window !== 'undefined' && window.location.hostname.endsWith('netlify.app');
    const configuredApiUrl = import.meta.env.VITE_FORMCONNECT_API_URL;
    const apiUrl = configuredApiUrl || (isNetlify ? '/api/formconnect' : 'https://formconnect.onrender.com');
    const apiKey =
      import.meta.env.VITE_FORMCONNECT_API_KEY ||
      'fc_live_e95e9fdf4fa86702779bea219e53402f';

    const endpoint = apiUrl.endsWith('/api/submit')
      ? apiUrl
      : `${apiUrl.replace(/\/$/, '')}/api/submit`;

    let transmitted = false;

    // 1. Primary Attempt: FormConnect
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: apiKey,
          data: {
            name: formData.name,
            email: formData.email,
            subject: formData.subject || 'Portfolio Inquiry',
            message: formData.message,
            project: 'portfolio2',
          },
        }),
      });

      if (response.ok) {
        transmitted = true;
      } else {
        const errorData = await response.json().catch(() => null);
        console.warn('FormConnect responded with non-200:', errorData || response.status);
      }
    } catch (err: any) {
      console.warn('FormConnect transmission failed (likely CORS or network), attempting fallback:', err);
    }

    // 2. Secondary Fallback: FormSubmit.co with universal CORS
    if (!transmitted) {
      try {
        const fallbackRes = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: formData.subject || `Portfolio Message from ${formData.name}`,
            message: formData.message,
            _template: 'box',
          }),
        });

        if (fallbackRes.ok) {
          transmitted = true;
        } else {
          const fallbackData = await fallbackRes.json().catch(() => null);
          console.warn('FormSubmit fallback response:', fallbackData || fallbackRes.status);
        }
      } catch (fallbackErr: any) {
        console.error('All transmission methods failed:', fallbackErr);
      }
    }

    setSending(false);

    if (transmitted) {
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#06b6d4', '#6366f1', '#a855f7', '#10b981'],
      });
    } else {
      setErrorMessage(
        'Unable to send automatically due to network/CORS restrictions. You can open your email app below to send directly.'
      );
    }
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Direct Info & Social Hub */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                Let's build <br />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  something extraordinary
                </span>{' '}
                together.
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                Whether you have an upcoming project, want to discuss software engineering, explore data analytics collaboration, or just say hi, my inbox is always open.
              </p>
            </div>

            {/* Email Contact Card */}
            <div className="p-6 rounded-2xl border border-emerald-950/10 bg-white/70 backdrop-blur-md space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider flex items-center gap-2 font-semibold">
                  <Mail className="w-4 h-4 text-emerald-600" /> Direct Inbox
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 border border-slate-200 text-xs font-mono text-slate-700 hover:text-emerald-900 transition-all active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-lg sm:text-xl font-display font-bold text-slate-900 hover:text-emerald-700 transition-colors block break-all"
              >
                {PERSONAL_INFO.email}
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono pt-2 border-t border-emerald-950/10">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Kristu Jayanti University • Bengaluru, India</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-emerald-950/10 bg-white/70 hover:bg-white hover:border-emerald-400 text-center transition-all group shadow-xs"
              >
                <Github className="w-5 h-5 mx-auto mb-2 text-slate-600 group-hover:text-emerald-700 group-hover:scale-110 transition-all" />
                <span className="text-xs font-mono text-slate-800 block font-medium">GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-emerald-950/10 bg-white/70 hover:bg-white hover:border-teal-400 text-center transition-all group shadow-xs"
              >
                <Linkedin className="w-5 h-5 mx-auto mb-2 text-slate-600 group-hover:text-teal-700 group-hover:scale-110 transition-all" />
                <span className="text-xs font-mono text-slate-800 block font-medium">LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-emerald-950/10 bg-white/70 hover:bg-white hover:border-emerald-400 text-center transition-all group shadow-xs"
              >
                <Instagram className="w-5 h-5 mx-auto mb-2 text-slate-600 group-hover:text-emerald-700 group-hover:scale-110 transition-all" />
                <span className="text-xs font-mono text-slate-800 block font-medium">Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <TiltCard
              maxTilt={4}
              glowColor="rgba(16, 185, 129, 0.15)"
              className="p-8 sm:p-12"
            >
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-slate-900">
                      Message Dispatched!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for reaching out, {formData.name}. I have logged your message and will reply to <span className="text-emerald-700 font-mono font-semibold">{formData.email}</span> shortly.
                    </p>
                  </div>

                  <div className="pt-4 flex justify-center gap-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-mono text-slate-700 transition-all shadow-xs"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                      className="px-6 py-2.5 rounded-xl text-xs font-mono text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-xs"
                    >
                      Open Email Client
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pb-2 border-b border-emerald-950/10 font-semibold">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Send a Direct Message</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-700 block font-medium">
                        Your Name <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Vance"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 text-sm transition-all shadow-xs"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-700 block font-medium">
                        Your Email <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. elena@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 text-sm transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-700 block font-medium">
                      Topic or Project Title
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full-Stack Collaboration / Opportunity"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 text-sm transition-all shadow-xs"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-700 block font-medium">
                      Your Message <span className="text-emerald-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your goals, ideas, or questions..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 text-sm resize-none transition-all shadow-xs"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200/80 space-y-3 text-xs text-red-700">
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold block mb-0.5">Transmission issue</span>
                          {errorMessage}
                        </div>
                      </div>
                      <div className="pt-2 border-t border-red-200/60 flex items-center justify-between">
                        <span className="text-slate-600">Send directly to {PERSONAL_INFO.email}:</span>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-medium text-[11px] transition-colors shadow-xs"
                        >
                          Open Email Client →
                        </a>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    data-cursor="SUBMIT"
                    className="w-full py-4 rounded-xl font-display font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
