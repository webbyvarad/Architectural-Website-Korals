"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  
  // First stage of text - Visible at start
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.25], [0, -40]);

  // Second stage of text
  const text2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.55, 0.65], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.3, 0.4, 0.65], [40, 0, -40]);

  // Third stage of text
  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.7, 0.8, 1], [40, 0, -40]);

  return (
    <div className="relative z-10 flex h-screen flex-col items-center justify-center px-4 text-center">
      {/* Stage 1 */}
      <motion.div
        style={{ opacity: text1Opacity, y: text1Y }}
        className="absolute max-w-4xl"
      >
        <span className="text-black/40 font-serif text-sm uppercase tracking-[1em] mb-6 block">
          FOUNDATION
        </span>
        <h1 className="text-6xl md:text-8xl font-serif text-black mb-8 leading-tight">
          Precision in every line. <br /> Soul in every structure.
        </h1>
      </motion.div>

      {/* Stage 2 */}
      <motion.div
        style={{ opacity: text2Opacity, y: text2Y }}
        className="absolute max-w-4xl"
      >
        <span className="text-black/40 font-serif text-sm uppercase tracking-[1em] mb-6 block">
          VISION
        </span>
        <h1 className="text-6xl md:text-8xl font-serif text-black mb-8 leading-tight">
          Where engineering <br /> meets architectural art.
        </h1>
      </motion.div>

      {/* Stage 3 */}
      <motion.div
        style={{ opacity: text3Opacity, y: text3Y }}
        className="absolute max-w-4xl"
      >
        <span className="text-black/40 font-serif text-sm uppercase tracking-[1em] mb-6 block">
          FUTURE
        </span>
        <h1 className="text-6xl md:text-8xl font-serif text-black mb-8 leading-tight">
          Building tomorrow <br /> on excellence.
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-black/30 text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-black/20" />
        </div>
      </motion.div>
    </div>
  );
}
