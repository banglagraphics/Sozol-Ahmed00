import { motion } from 'motion/react';
import { GraduationCap, Languages, Compass, Trophy, Plus } from 'lucide-react';
import { portfolioData } from '../data';

export function Highlights() {
  const { education, languages, interests } = portfolioData.highlights;

  return (
    <section
      id="highlights-section"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#121212] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-3">
            05 / Highlights
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium tracking-tight">
            Education & Communication
          </h2>
          <div className="w-16 h-[1px] bg-gold mt-6" />
        </div>

        {/* Minimalist Split Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Card 1: Education & Interests */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="border border-white/5 bg-neutral-950/40 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-between relative group"
          >
            {/* Corner Decorative Accent */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/30 group-hover:border-gold transition-colors duration-500" />
            
            <div>
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-none bg-gold/5 border border-gold/20 text-gold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gold tracking-widest uppercase">Academic Background</span>
                  <h3 className="font-serif text-2xl text-white font-medium">Education</h3>
                </div>
              </div>

              {/* Education Main Entry */}
              <div className="relative pl-6 border-l border-gold/20 mb-10">
                <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold" />
                <span className="font-mono text-xs text-gold font-semibold tracking-wider block mb-2">
                  {education.equivalence}
                </span>
                <h4 className="font-serif text-xl text-white font-medium mb-1">
                  {education.degree}
                </h4>
                <p className="text-neutral-300 text-sm font-light mb-1">
                  {education.school}
                </p>
                <p className="text-muted text-xs font-mono font-light">
                  {education.location}
                </p>
              </div>
            </div>

            {/* Interests Sub-section */}
            <div className="pt-8 border-t border-white/5">
              <h4 className="font-mono text-[10px] text-muted tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-gold" /> Personal Interests
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
                    className="px-4 py-2 bg-neutral-900 border border-white/5 text-xs text-neutral-200 tracking-wide rounded-none flex items-center gap-2"
                  >
                    <span>{interest}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Languages & Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="border border-white/5 bg-neutral-950/40 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-between relative group"
          >
            {/* Corner Decorative Accent */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/30 group-hover:border-gold transition-colors duration-500" />
            
            <div>
              {/* Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-none bg-gold/5 border border-gold/20 text-gold">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gold tracking-widest uppercase">Communication Range</span>
                  <h3 className="font-serif text-2xl text-white font-medium">Languages</h3>
                </div>
              </div>

              {/* Language Progress Bars */}
              <div className="flex flex-col gap-8">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex justify-between items-end mb-2.5">
                      <span className="font-sans font-medium text-sm text-neutral-200 tracking-wide">
                        {lang.name}
                      </span>
                      <span className="font-mono text-xs text-gold tracking-wider">
                        {lang.percentage}%
                      </span>
                    </div>
                    {/* Progress track */}
                    <div className="w-full h-[3px] bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.15, ease: 'easeOut' }}
                        className="h-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Professional Highlight Info */}
            <div className="pt-10 border-t border-white/5 mt-8 flex items-center gap-3 text-xs text-muted font-light leading-relaxed">
              <Trophy className="w-4 h-4 text-gold shrink-0" />
              <span>Expert multilingual capacity enabling effortless synergy in diverse multi-national culinary teams.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
