import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Copy, Check, Play, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'init-1',
      command: 'abinand --version',
      output: (
        <div className="text-emerald-900">
          <span className="font-bold text-emerald-700">abinand-core v2.6.4</span> [production build]
          <div className="text-slate-500 text-xs mt-1">
            Environment: Bengaluru, IN • BCA Analytics @ Kristu Jayanti
          </div>
        </div>
      ),
      time: '00:01:12',
    },
    {
      id: 'init-2',
      command: 'cat status.txt',
      output: (
        <div className="text-slate-700">
          🟢 <span className="text-emerald-700 font-semibold">Ready for high-impact opportunities</span>
          <p className="text-xs text-slate-500 mt-1">
            Full-stack engineering • Data pipelines • Interactive UI development
          </p>
        </div>
      ),
      time: '00:01:13',
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);
  const historyContainerRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (historyContainerRef.current) {
      historyContainerRef.current.scrollTop = historyContainerRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let output: React.ReactNode;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-700 text-xs">
            <p className="text-emerald-700 font-semibold mb-1">Available commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono">
              <div><span className="text-emerald-800 font-semibold">whoami</span> - Identity & summary</div>
              <div><span className="text-emerald-800 font-semibold">skills</span> - Core technologies</div>
              <div><span className="text-emerald-800 font-semibold">projects</span> - Deployed builds & works</div>
              <div><span className="text-emerald-800 font-semibold">experience</span> - Work & internships</div>
              <div><span className="text-emerald-800 font-semibold">education</span> - Academic background</div>
              <div><span className="text-emerald-800 font-semibold">contact</span> - Direct channels</div>
              <div><span className="text-emerald-800 font-semibold">clear</span> - Clear console</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="text-xs space-y-1 text-slate-700">
            <p className="text-slate-900 font-bold text-sm">{PERSONAL_INFO.name}</p>
            <p className="text-emerald-700 font-medium">{PERSONAL_INFO.role}</p>
            <p className="text-slate-600">{PERSONAL_INFO.education}</p>
            <p className="text-slate-500 italic mt-1">"{PERSONAL_INFO.bioShort}"</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="text-xs space-y-1 text-slate-700 font-mono">
            <p className="text-emerald-700 font-semibold">[CORE TECH STACK]</p>
            <p><span className="text-slate-500">Frontend: </span>React 19, TypeScript, Tailwind CSS, Motion, HTML5 Canvas</p>
            <p><span className="text-slate-500">Backend & DB: </span>Node.js, Express, Python (Pandas/EDA), Firebase, SQL</p>
            <p><span className="text-slate-500">Other: </span>Kotlin (Android), Git, Linux CLI, Generative AI APIs</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs space-y-2 text-slate-700">
            <p className="text-teal-700 font-semibold">[FEATURED REPOSITORIES & SHIPPED BUILDS]</p>
            <div>
              <a href="https://diagram-studio.onrender.com" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline font-bold">1. Smart Diagram Studio</a>
              <span className="text-slate-500 text-[11px] block">Full-stack visual graph tool with Firebase sync & undo/redo canvas</span>
            </div>
            <div>
              <a href="https://sky-atlas-7sd.vercel.app/" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline font-bold">2. Skycast Atlas</a>
              <span className="text-slate-500 text-[11px] block">Procedural canvas weather visualization engine with 60 FPS shaders</span>
            </div>
            <div>
              <a href="https://github.com/abinand705/NEO-SPEEDSTER" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline font-bold">3. NEO-SPEEDSTER</a>
              <span className="text-slate-500 text-[11px] block">Client-side network telemetry and latency quantification utility</span>
            </div>
            <div>
              <a href="https://github.com/abinand705/Sci-Calculator" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline font-bold">4. Sci-Calculator</a>
              <span className="text-slate-500 text-[11px] block">Native Android Kotlin calculator with algorithmic parsing</span>
            </div>
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="text-xs space-y-1.5 text-slate-700">
            <p className="text-emerald-700 font-semibold">[INDUSTRY EXPERIENCE]</p>
            <p className="font-bold text-slate-900">Web Development Intern • Kenmerk Softwares Pvt Ltd</p>
            <p className="text-teal-700 text-[11px] font-mono">30-day internship • Bengaluru, India</p>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Contributed to frontend and backend web development during a 30-day internship, developing modular React.js interface components, integrating Node.js backend endpoints, and implementing responsive client navigation.
            </p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs space-y-1 text-slate-700">
            <p className="text-emerald-700 font-semibold">Direct Communication:</p>
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-teal-700 hover:underline font-semibold">{PERSONAL_INFO.email}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="text-teal-700 hover:underline">{PERSONAL_INFO.socials.github}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="text-teal-700 hover:underline">{PERSONAL_INFO.socials.linkedin}</a></p>
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="text-xs space-y-1 text-slate-700">
            <p className="text-emerald-700 font-semibold">Bachelor of Computer Applications (Data Analytics)</p>
            <p className="text-slate-800 font-medium">Kristu Jayanti University • Bengaluru, India</p>
            <p className="text-slate-500 text-[11px]">Specialization: Computational analytics, Python, statistical inference, algorithms</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <p className="text-xs text-rose-600">
            Command not recognized: <span className="font-bold text-slate-900 font-mono">"{trimmed}"</span>. Type <span className="text-emerald-700 underline font-mono cursor-pointer" onClick={() => executeCommand('help')}>help</span> to view commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `${Date.now()}`,
        command: cmdStr,
        output,
        time,
      },
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-2xl shadow-xl overflow-hidden text-left font-mono">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#f8fafc] border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
          </div>
          <div className="flex items-center gap-2 ml-3 text-xs text-slate-500">
            <Terminal className="w-3.5 h-3.5 text-emerald-600" />
            <span>abinand@portfolio: ~</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={copyEmail}
            title="Copy email to clipboard"
            className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="text-[11px]">{copied ? 'Copied!' : 'Copy Email'}</span>
          </button>
        </div>
      </div>

      {/* Preset Command Quick Chips */}
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-b border-slate-100 overflow-x-auto text-[11px] text-slate-600 scrollbar-none">
        <span className="text-slate-400 flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider">
          <Play className="w-2.5 h-2.5 text-emerald-600" /> Run:
        </span>
        {['whoami', 'skills', 'projects', 'contact', 'help'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2.5 py-0.5 rounded-full bg-white hover:bg-emerald-100/70 hover:text-emerald-900 border border-slate-200 transition-all text-xs font-mono text-slate-700"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal History */}
      <div ref={historyContainerRef} className="p-4 space-y-3 max-h-[260px] overflow-y-auto text-xs leading-relaxed bg-white">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <span className="text-emerald-600 font-bold">$</span>
              <span className="text-emerald-800 font-semibold">{item.command}</span>
              <span className="ml-auto text-slate-400 text-[10px]">{item.time}</span>
            </div>
            <div className="pl-4 py-0.5">{item.output}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Interactive Input Prompt */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#f8fafc] border-t border-slate-200">
        <span className="text-emerald-600 font-bold text-sm">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help' or click quick buttons above..."
          className="flex-1 bg-transparent text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none font-mono"
        />
        <button
          onClick={() => executeCommand(input)}
          className="p-1 rounded bg-slate-200/70 hover:bg-emerald-100 text-slate-600 hover:text-emerald-800 transition-colors"
          title="Execute command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
