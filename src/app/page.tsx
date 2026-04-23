import ScrollSequence from "@/components/ScrollSequence";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import ProgressBar from "@/components/ProgressBar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      {/* Scroll Sequence Hero Section */}
      <section className="relative h-[400vh]">
        <ScrollSequence 
          frameCount={40} 
          basePath="/sequence" 
        />
        <div className="absolute inset-0 pointer-events-none">
          <Hero />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer / Final Branding */}
      <footer className="py-24 px-4 text-center border-t border-white/5 bg-black/50 backdrop-blur-md">
        <h3 className="font-serif text-4xl text-gradient mb-6">KORALS</h3>
        <p className="text-accent text-[10px] uppercase tracking-[0.5em] mb-4">Visionary Solutions. Precision Engineered.</p>
        <p className="text-white/20 text-xs max-w-md mx-auto">We blend architectural elegance with civil engineering excellence.</p>
      </footer>

      {/* Global Progress Bar */}
      <ProgressBar />
    </main>
  );
}
