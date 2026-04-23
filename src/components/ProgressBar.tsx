"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-8 flex flex-col items-center">
      <div className="w-full max-w-md bg-white/5 h-[1px] relative overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 bottom-0 bg-accent w-full origin-left"
          style={{ scaleX }}
        />
      </div>
      <div className="mt-4 flex justify-between w-full max-w-md px-1">
        <span className="text-[8px] text-white/20 uppercase tracking-[0.3em]">Assembled</span>
        <span className="text-[8px] text-white/20 uppercase tracking-[0.3em]">Disassembled</span>
      </div>
    </div>
  );
}
