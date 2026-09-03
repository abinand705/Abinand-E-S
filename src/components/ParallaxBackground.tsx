import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export const ParallaxBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, speed: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { damping: 25, stiffness: 120 });

  // Parallax offsets for layered landscape elements
  const sunY = useTransform(smoothScrollY, [0, 4000], [0, 180]); // Sun rises/sinks slowly
  const distantMountainsY = useTransform(smoothScrollY, [0, 4000], [0, -140]);
  const midHillsY = useTransform(smoothScrollY, [0, 4000], [0, -280]);
  const foreHillsY = useTransform(smoothScrollY, [0, 4000], [0, -420]);
  const mistY = useTransform(smoothScrollY, [0, 4000], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to center -1 to 1
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;

      // Calculate instantaneous mouse speed
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      mousePosRef.current.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 40);
      lastMousePos.current = { x: e.clientX, y: e.clientY };

      mousePosRef.current.targetX = nx;
      mousePosRef.current.targetY = ny;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Nature floating particles: dandelion seeds, sun motes, and gentle leaves
    const particleCount = Math.min(Math.floor(window.innerWidth / 22), 55);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1.2,
      baseSpeedX: (Math.random() - 0.2) * 0.4 + 0.15, // gentle breeze to the right
      baseSpeedY: (Math.random() - 0.5) * 0.25 - 0.1, // gentle float
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      alpha: Math.random() * 0.45 + 0.2,
      depth: Math.random() * 0.8 + 0.2,
      type: Math.random() > 0.4 ? 'seed' : 'leaf', // 'seed' = dandelion spore / mote, 'leaf' = fluttering petal
      hue: Math.random() > 0.6 ? 145 : (Math.random() > 0.5 ? 42 : 165), // natural emerald, golden pollen, or mint
    }));

    // Distant soaring birds gliding gracefully
    const birds = [
      { x: width * 0.2, y: height * 0.18, vx: 0.7, vy: 0.05, wingAngle: 0, wingSpeed: 0.06, scale: 0.8 },
      { x: width * 0.75, y: height * 0.12, vx: 0.5, vy: -0.02, wingAngle: 1.5, wingSpeed: 0.05, scale: 0.6 },
      { x: width * 0.88, y: height * 0.22, vx: 0.45, vy: 0.03, wingAngle: 3, wingSpeed: 0.045, scale: 0.5 },
    ];

    let lastScroll = window.scrollY;

    const render = () => {
      // Lerp mouse
      mousePosRef.current.x += (mousePosRef.current.targetX - mousePosRef.current.x) * 0.05;
      mousePosRef.current.y += (mousePosRef.current.targetY - mousePosRef.current.y) * 0.05;

      const currentScroll = window.scrollY;
      const scrollDelta = currentScroll - lastScroll;
      lastScroll = currentScroll;

      ctx.clearRect(0, 0, width, height);

      // Render & update gliding birds
      ctx.save();
      for (let b of birds) {
        b.x += b.vx;
        b.y += b.vy;
        b.wingAngle += b.wingSpeed;

        if (b.x > width + 50) b.x = -50;
        if (b.y < 30) b.vy = Math.abs(b.vy);
        if (b.y > height * 0.35) b.vy = -Math.abs(b.vy);

        const wingY = Math.sin(b.wingAngle) * 4 * b.scale;

        // Draw graceful silhouette of bird
        ctx.beginPath();
        ctx.moveTo(b.x - 12 * b.scale, b.y - wingY);
        ctx.quadraticCurveTo(b.x - 4 * b.scale, b.y - 1, b.x, b.y);
        ctx.quadraticCurveTo(b.x + 4 * b.scale, b.y - 1, b.x + 12 * b.scale, b.y - wingY);
        ctx.strokeStyle = 'rgba(71, 98, 86, 0.4)';
        ctx.lineWidth = 1.6 * b.scale;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
      ctx.restore();

      // Render floating nature particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move with gentle natural wind and parallax mouse reaction
        p.x += p.baseSpeedX + mousePosRef.current.x * p.depth * 0.5;
        p.y += p.baseSpeedY - scrollDelta * p.depth * 0.06 + mousePosRef.current.y * p.depth * 0.5;
        p.rotation += p.rotationSpeed;

        // Wrap edges
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'leaf') {
          // Fluttering small leaf/petal
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 2, p.size, 0, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 45%, 48%, ${p.alpha * 0.6})`;
          ctx.fill();
        } else {
          // Dandelion seed / luminous pollen mote
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 60%, 55%, ${p.alpha * 0.7})`;
          ctx.fill();

          // Delicate seed stalk
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(p.size * 1.5, p.size * 2);
          ctx.strokeStyle = `hsla(${p.hue}, 30%, 65%, ${p.alpha * 0.4})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-gradient-to-b from-[#eaf4f0] via-[#edf5f1] to-[#f4f8f6]">
      {/* 1. Celestial Sun & Warm Atmospheric Radiance */}
      <motion.div
        style={{ y: sunY }}
        className="absolute top-12 right-[12%] sm:right-[18%] w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-amber-200/50 via-yellow-100/40 to-transparent blur-[90px] opacity-85"
      />

      {/* Sun Core Disc */}
      <motion.div
        style={{ y: sunY }}
        className="absolute top-28 right-[18%] sm:right-[22%] w-24 h-24 rounded-full bg-gradient-to-b from-white to-amber-100/90 shadow-[0_0_80px_rgba(251,191,36,0.5)] opacity-90 border border-white/60"
      />

      {/* Subtle Atmospheric Sky Aura */}
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-sky-200/40 via-teal-100/30 to-transparent blur-[120px] opacity-75" />

      {/* 2. Distant Alpine Mountain Peaks (Furthest Depth Layer) */}
      <motion.div
        style={{ y: distantMountainsY }}
        className="absolute -bottom-10 left-0 right-0 h-[65vh] min-h-[420px] w-full flex items-end opacity-75"
      >
        <svg
          viewBox="0 0 1440 450"
          preserveAspectRatio="none"
          className="w-full h-full text-[#b4d4c7]"
          fill="currentColor"
        >
          {/* Majestic jagged alpine mountain ridges with gradient fills */}
          <defs>
            <linearGradient id="mountainGradFar" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#b6d5c9" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#c5e0d5" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#d5ebe1" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="snowCrest" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c5e0d5" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Distant peaks silhouette */}
          <path
            d="M0,450 L0,220 L90,170 L180,240 L280,120 L370,195 L490,95 L610,210 L730,130 L840,220 L960,110 L1080,230 L1190,140 L1320,200 L1440,150 L1440,450 Z"
            fill="url(#mountainGradFar)"
          />
          {/* Subtle snowcap crests */}
          <polygon points="490,95 460,135 520,135" fill="url(#snowCrest)" />
          <polygon points="280,120 255,155 305,155" fill="url(#snowCrest)" />
          <polygon points="960,110 930,150 990,150" fill="url(#snowCrest)" />
          <polygon points="730,130 705,165 755,165" fill="url(#snowCrest)" />
        </svg>
      </motion.div>

      {/* Atmospheric Mist Layer 1 between mountain layers */}
      <motion.div
        style={{ y: mistY }}
        className="absolute bottom-[25vh] left-0 right-0 h-40 bg-gradient-to-t from-[#edf5f1]/90 via-[#edf5f1]/50 to-transparent blur-md pointer-events-none"
      />

      {/* 3. Mid-Distance Rolling Forest Hills & Pine Ridges */}
      <motion.div
        style={{ y: midHillsY }}
        className="absolute -bottom-8 left-0 right-0 h-[48vh] min-h-[340px] w-full flex items-end opacity-85"
      >
        <svg
          viewBox="0 0 1440 380"
          preserveAspectRatio="none"
          className="w-full h-full text-[#7da895]"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="hillGradMid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7ba592" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#91baa7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#b4d7c8" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path
            d="M0,380 L0,180 Q160,100 340,170 T720,130 T1100,165 Q1290,110 1440,190 L1440,380 Z"
            fill="url(#hillGradMid)"
          />
        </svg>
      </motion.div>

      {/* 4. Foreground Foothills, Pine Forest Silhouettes & Valley Mist */}
      <motion.div
        style={{ y: foreHillsY }}
        className="absolute -bottom-4 left-0 right-0 h-[36vh] min-h-[250px] w-full flex items-end opacity-90"
      >
        <svg
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="forestGradNear" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#436c5b" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#588572" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#7aa492" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Rolling foreground hill contour */}
          <path
            d="M0,300 L0,150 Q220,70 460,130 T940,90 Q1200,140 1440,110 L1440,300 Z"
            fill="url(#forestGradNear)"
          />

          {/* Pine tree silhouettes along the ridge */}
          <g fill="#375b4c" opacity="0.6">
            {/* Left ridge grove */}
            <polygon points="120,130 115,145 125,145" />
            <polygon points="120,122 113,137 127,137" />
            <polygon points="120,114 110,129 130,129" />
            <polygon points="145,124 137,142 153,142" />
            <polygon points="145,116 135,134 155,134" />
            <polygon points="145,108 132,126 158,126" />
            <polygon points="168,135 162,148 174,148" />

            {/* Center-right ridge grove */}
            <polygon points="820,105 812,125 828,125" />
            <polygon points="820,97 810,117 830,117" />
            <polygon points="820,89 807,109 833,109" />
            <polygon points="845,112 838,130 852,130" />
            <polygon points="845,104 835,122 855,122" />
            <polygon points="870,100 863,118 877,118" />
            <polygon points="870,92 860,110 880,110" />

            {/* Far right trees */}
            <polygon points="1280,120 1272,140 1288,140" />
            <polygon points="1280,112 1270,132 1290,132" />
            <polygon points="1305,115 1298,132 1312,132" />
          </g>
        </svg>
      </motion.div>

      {/* Gentle Morning Valley Fog / Ground Mist */}
      <div className="absolute -bottom-6 left-0 right-0 h-48 bg-gradient-to-t from-[#f4f8f6] via-[#f4f8f6]/75 to-transparent pointer-events-none" />

      {/* Subtle Nature Topography / Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 mix-blend-multiply pointer-events-none" />

      {/* Floating Dandelion Seeds, Petals & Birds Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-85 pointer-events-none"
      />
    </div>
  );
};
