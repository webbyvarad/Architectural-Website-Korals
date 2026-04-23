"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { scrollYProgress } = useScroll();
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.6)"]
  );
  
  const backdropFilter = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["blur(0px)", "blur(24px)"]
  );

  const borderOpacity = useTransform(
    scrollYProgress,
    [0, 0.05],
    [0, 1]
  );

  return (
    <motion.header 
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-colors duration-300 border-b border-black/5"
    >
      <motion.div 
        style={{ opacity: borderOpacity }}
        className="absolute top-0 left-0 w-full border-t-2 border-accent"
      />
      
      <Link href="/" className="group">
        <div className="flex flex-col">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-black group-hover:text-accent transition-colors">
            KORALS
          </span>
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-accent font-medium">
            Engineering Solutions
          </span>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {["Vision", "The Planner", "Connect"].map((item) => (
          <Link 
            key={item} 
            href="#" 
            className="text-[10px] uppercase tracking-[0.2em] text-black/60 hover:text-accent transition-colors"
          >
            {item}
          </Link>
        ))}
        <Link 
          href="#" 
          className="px-6 py-2 bg-accent text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-black hover:text-white transition-all duration-300 rounded-sm"
        >
          Launch Planner
        </Link>
      </nav>

      {/* Mobile Menu Button - Placeholder */}
      <div className="md:hidden text-black cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
      </div>
    </motion.header>
  );
}
