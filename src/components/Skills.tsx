import { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { Tilt } from './Tilt';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export function Skills() {
  const skills = portfolioData.skills;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills-section"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-neutral-950 border-t border-white/5 overflow-hidden"
    >
      {/* Background Decorative Graphic Grid lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-3">
            03 / Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium tracking-tight">
            Culinary Toolkit
          </h2>
          <p className="text-muted text-sm md:text-base max-w-xl mt-3 font-light">
            A master matrix of culinary competencies refined in high-volume, 5-star fine dining hotels.
          </p>
          <div className="w-16 h-[1px] bg-gold mt-6" />
        </div>

        {/* Bento Grid of Skills & Meter Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => {
            const isHovered = hoveredIdx === idx;
            
            // Adjust layouts for last elements to balance the grid
            const isLastTwo = idx >= 3;
            const gridSpanClass = isLastTwo 
              ? "lg:col-span-1 lg:first-of-type:ml-auto lg:last-of-type:mr-auto" 
              : "";

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative group h-auto min-h-[400px] ${gridSpanClass}`}
              >
                <Tilt className="w-full h-full">
                  <motion.div
                    animate={{
                      borderColor: isHovered ? '#D4AF37' : 'rgba(255,255,255,0.05)',
                      backgroundColor: isHovered ? 'rgba(18,18,18,0.98)' : 'rgba(10,10,10,0.5)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full border p-8 flex flex-col justify-between overflow-hidden shadow-xl"
                  >
                    {/* Subtle Golden Glow on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-[linear-gradient(to_right,rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:16px_16px]" />

                    {/* Top Header: Emojis and Tracker */}
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <motion.div
                          animate={{
                            rotateY: isHovered ? 360 : 0,
                            scale: isHovered ? 1.2 : 1.0,
                          }}
                          transition={{ type: 'spring', stiffness: 200 }}
                          className="text-4xl filter drop-shadow-[0_0_8px_rgba(212,175,55,0.25)] select-none"
                        >
                          {skill.emoji}
                        </motion.div>
                        <span className="font-mono text-[9px] text-muted tracking-widest group-hover:text-gold transition-colors duration-300">
                          SKILL 0{idx + 1}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-serif text-2xl text-white font-medium tracking-tight mb-2 group-hover:text-gold transition-colors duration-300">
                        {skill.title}
                      </h3>
                      <p className="text-muted text-xs leading-relaxed font-light mb-6">
                        {skill.description}
                      </p>
                    </div>

                    {/* ANIMATED SKILL METERS */}
                    <div className="my-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
                          Proficiency
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          className="font-mono text-xs font-semibold text-gold"
                        >
                          {skill.score}%
                        </motion.span>
                      </div>

                      {/* Meter Track */}
                      <div className="w-full h-2 bg-neutral-900 border border-white/5 relative overflow-hidden">
                        <motion.div
                          initial={{ width: '0%' }}
                          whileInView={{ width: `${skill.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeOut', delay: idx * 0.1 }}
                          className="h-full bg-gold relative"
                          style={{
                            boxShadow: '0 0 10px rgba(212, 175, 55, 0.4)'
                          }}
                        >
                          {/* Animated gleam effect moving across progress bar */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Staggered Detail Bullets - Competitive Depth */}
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                      {skill.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-gold/60 shrink-0" />
                          <span className="text-[10px] md:text-xs text-neutral-400 font-light font-sans">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom border indicator on hover */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold origin-center"
                    />
                  </motion.div>
                </Tilt>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout: HACCP / 5-Star Accreditation Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-6 md:p-8 border border-white/5 bg-[#121212] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-gold/5 border border-gold/20 text-gold rounded-none">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-white font-medium">HACCP Level 2 Food Hygiene Certified</h4>
              <p className="text-muted text-xs md:text-sm font-light">
                All preparation, knife-handling, and cold room/hot kitchen protocols strictly align with international hotel safety.
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono border border-gold/30 text-gold px-3 py-1 uppercase tracking-widest bg-gold/5 shrink-0">
            Doha Municipality Aligned
          </span>
        </motion.div>
      </div>
    </section>
  );
}
