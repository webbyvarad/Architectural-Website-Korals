"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The attention to detail in the engineering is unlike anything I've experienced in high-end audio.",
    author: "Julian Vercetti",
    role: "CEO @ Quartz Audio",
  },
  {
    quote: "WpDev hasn't just built a keyboard; they've built a masterpiece of mechanical interaction.",
    author: "Elena Rossi",
    role: "Lead Designer @ Vanta",
  },
  {
    quote: "The disassembly shows a level of transparency and precision that modern tech often hides.",
    author: "Marcus Thorne",
    role: "Technical Editor @ The Wire",
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-20 py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/40 font-serif text-sm uppercase tracking-[0.4em] text-center mb-24"
        >
          Voices of Precision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="premium-blur p-12 rounded-2xl flex flex-col justify-between group hover:border-accent/40 transition-colors"
            >
              <p className="text-2xl font-serif italic text-white/90 leading-relaxed mb-12">
                "{t.quote}"
              </p>
              <div>
                <div className="h-[1px] w-8 bg-accent/50 mb-6 group-hover:w-16 transition-all duration-500" />
                <h4 className="text-accent text-lg font-serif">{t.author}</h4>
                <p className="text-white/30 text-xs uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
