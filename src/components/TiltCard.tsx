import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  onClick?: () => void;
  cursorLabel?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 8,
  glowColor = 'rgba(16, 185, 129, 0.12)',
  onClick,
  cursorLabel,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center (-1 to 1)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) * 100;
    const yPct = (mouseY / height) * 100;
    setMousePos({ x: xPct, y: yPct });

    const tiltX = ((mouseY - height / 2) / (height / 2)) * -maxTilt;
    const tiltY = ((mouseX - width / 2) / (width / 2)) * maxTilt;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor={cursorLabel}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered ? 1.015 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`relative rounded-2xl border border-emerald-950/[0.08] bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(20,40,30,0.05)] hover:shadow-[0_12px_36px_rgba(5,150,105,0.12)] transition-all duration-300 hover:border-emerald-500/30 overflow-hidden ${className}`}
    >
      {/* Dynamic specular mouse glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 280px at ${mousePos.x}% ${mousePos.y}%, ${glowColor}, transparent 80%)`,
        }}
      />

      {/* Subtle glass reflection gradient at top edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Card Content with 3D translation support */}
      <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
};
