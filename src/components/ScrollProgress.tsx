import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-1 bg-emerald-950/[0.04]">
      <motion.div
        className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 origin-left relative"
        style={{ scaleX }}
      >
        {/* Glow bead at the leading edge */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-500 rounded-full blur-[2px] shadow-[0_0_12px_#10b981]" />
      </motion.div>
    </div>
  );
};
