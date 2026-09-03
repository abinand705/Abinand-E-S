import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

interface CustomCursorProps {
  enabled?: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ enabled = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isClicking, setIsClicking] = useState(false);

  // Motion values for smooth cursor physics
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if pointer is fine (mouse) vs touch screen
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch || !enabled) {
      setIsVisible(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Detect hover target
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
        if (interactiveEl) {
          setIsHovered(true);
          const customText = interactiveEl.getAttribute('data-cursor');
          setHoverText(customText || '');
        } else {
          setIsHovered(false);
          setHoverText('');
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [enabled, isVisible, mouseX, mouseY]);

  if (!enabled || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer fluid trailing aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-emerald-600/50 bg-emerald-600/10 backdrop-blur-[1px] pointer-events-none flex items-center justify-center shadow-[0_0_20px_rgba(5,150,105,0.2)]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (hoverText ? 72 : 48) : 28,
          height: isHovered ? (hoverText ? 72 : 48) : 28,
          scale: isClicking ? 0.8 : 1,
          borderColor: isHovered ? 'rgba(5, 150, 105, 0.8)' : 'rgba(16, 185, 129, 0.5)',
          backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.08)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {hoverText && (
          <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-950 uppercase drop-shadow-sm">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Center pinpoint */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-emerald-700 pointer-events-none shadow-[0_0_8px_rgba(5,150,105,0.5)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 2 : isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};
