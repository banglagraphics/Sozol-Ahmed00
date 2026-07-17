import { motion } from 'motion/react';
import { ChefHat, ArrowDown, Download } from 'lucide-react';
import { portfolioData } from '../data';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const { headline, subHeadline, ctaSkills, ctaResume } = portfolioData.hero;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal px-6 py-24 md:px-12 lg:px-24 select-none"
    >
      {/* Cinematic Background Image with Ken Burns Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.35 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src="/src/assets/images/gourmet_plating_hero_1784207965219.jpg"
            alt="Elite Gourmet Plating Background"
            className="w-full h-full object-cover filter brightness-50 contrast-110 saturate-[0.85]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Luxury Radial & Linear Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-[#121212]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#121212_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        {/* Elite Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-8 backdrop-blur-md max-w-full overflow-hidden"
        >
          <ChefHat className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0 animate-pulse" />
          <span className="font-mono text-[9px] sm:text-xs text-gold tracking-[0.15em] sm:tracking-[0.25em] uppercase truncate">
            Grand Hyatt Doha • Commis Chef
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-[1.15] md:leading-[1.1] mb-6"
        >
          Crafting <span className="text-gold italic font-light font-serif">Culinary</span> Excellence.<br />
          Elevating <span className="text-gold">Plate</span> Standards.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-muted text-base md:text-lg lg:text-xl font-light tracking-wide leading-relaxed mb-12 px-2"
        >
          {subHeadline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* CTA: Skills */}
          <button
            onClick={() => scrollToSection('skills-section')}
            className="group relative px-8 py-4 bg-gold hover:bg-gold-hover text-black font-semibold rounded-none tracking-wider text-xs uppercase overflow-hidden transition-all duration-300 w-full sm:w-56 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {ctaSkills}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out opacity-20" />
          </button>

          {/* CTA: Resume */}
          <button
            onClick={onOpenResume}
            className="group relative px-8 py-4 bg-transparent hover:bg-white/5 text-white font-semibold border border-white/20 hover:border-gold rounded-none tracking-wider text-xs uppercase transition-all duration-300 w-full sm:w-56 active:scale-95"
          >
            <span className="flex items-center justify-center gap-2">
              {ctaResume}
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300 text-gold" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Elegant Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection('about-section')}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-1.5 h-6 rounded-full bg-gold/40 flex justify-center p-0.5"
        >
          <div className="w-1 h-1.5 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
