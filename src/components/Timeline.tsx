import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data';
import { Calendar, MapPin, Building2, ChevronRight, Eye } from 'lucide-react';

export function Timeline() {
  const { role, company, location, period, responsibilities, title } = portfolioData.timeline;
  
  // Track hovered responsibility index to trigger interactive golden glowing dot animations
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="journey-section"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#121212] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-3">
            02 / Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-[1px] bg-gold mt-6" />
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Role Details & Meta Info */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="border border-white/5 bg-neutral-950 p-8 relative overflow-hidden group">
              {/* Subtle Gold Corner Accents */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/30 group-hover:border-gold transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/30 group-hover:border-gold transition-colors duration-500" />

              <span className="inline-block px-3 py-1 text-[10px] font-mono tracking-[0.2em] bg-gold/5 border border-gold/20 text-gold mb-6 uppercase">
                Active Position
              </span>

              <h3 className="font-serif text-3xl text-white font-medium mb-3 leading-tight">
                {role}
              </h3>

              <div className="flex flex-col gap-3 text-muted text-sm mt-6 font-sans">
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-neutral-200 font-semibold">{company}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gold shrink-0" />
                  <span>{period}</span>
                </div>
              </div>

              {/* Instructions Banner */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2.5 text-xs text-gold/60">
                <Eye className="w-3.5 h-3.5 text-gold" />
                <span className="font-mono uppercase tracking-wider">
                  {isMobile ? "Detailed achievements" : "Hover cards to reveal metrics"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Responsibilities list with interactive timeline */}
          <div className="lg:col-span-8 relative pl-6 md:pl-12">
            {/* Center Line of the Timeline */}
            <div className="absolute left-0 top-4 bottom-4 w-[1px] bg-white/10" />

            {/* Responsibility Cards */}
            <div className="flex flex-col gap-6">
              {responsibilities.map((resp, idx) => {
                const isActive = hoveredIdx === idx || isMobile;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="relative group cursor-none"
                  >
                    {/* Glowing Dots linked to the center line */}
                    <div className="absolute -left-[24px] md:-left-[48px] top-8 -translate-x-1/2 z-10 flex items-center justify-center">
                      {/* Active outer pulse */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1.8, opacity: 0.4 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="absolute w-6 h-6 rounded-full bg-gold pointer-events-none"
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          />
                        )}
                      </AnimatePresence>
                      {/* Interactive dot */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.3 : 1.0,
                          backgroundColor: isActive ? '#D4AF37' : 'rgba(255, 255, 255, 0.15)',
                          borderColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.1)',
                        }}
                        className="w-3.5 h-3.5 rounded-full border bg-neutral-900 transition-colors duration-300 shadow-lg"
                      />
                    </div>

                    {/* Timeline Item Content Block */}
                    <motion.div
                      animate={{
                        borderColor: isActive ? 'rgba(212, 175, 55, 0.4)' : 'rgba(255, 255, 255, 0.05)',
                        backgroundColor: isActive ? 'rgba(212, 175, 55, 0.02)' : 'rgba(10, 10, 10, 0.5)',
                        x: isActive ? 6 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="border p-6 md:p-8 bg-neutral-950/50 backdrop-blur-sm transition-all duration-300"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex flex-col">
                          <span className="font-mono text-[10px] text-gold/50 tracking-wider uppercase mb-1">
                            Responsibility 0{idx + 1}
                          </span>
                          <h4 className="font-serif text-xl md:text-2xl text-white font-medium group-hover:text-gold transition-colors duration-300">
                            {resp.title}
                          </h4>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                            isActive ? 'translate-x-1.5' : 'opacity-30'
                          }`}
                        />
                      </div>

                      {/* Expanding responsive details */}
                      <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{
                          height: isActive ? 'auto' : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 12 : 0,
                        }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="text-muted text-sm md:text-base leading-relaxed overflow-hidden font-sans font-light"
                      >
                        {resp.description}
                      </motion.p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
