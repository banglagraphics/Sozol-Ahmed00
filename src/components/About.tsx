import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { Tilt } from './Tilt';
import { Award, Flame, Zap } from 'lucide-react';

export function About() {
  const { portrait, philosophy, title } = portfolioData.about;

  return (
    <section
      id="about-section"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#121212] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-3">
            01 / Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-[1px] bg-gold mt-6" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Portrait with luxury frame & 3D tilt */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <Tilt className="relative w-full max-w-[300px] sm:max-w-[360px] aspect-[3/4] group">
              {/* Outer Golden Corner Accents */}
              <div className="absolute -inset-3 border border-gold/15 pointer-events-none group-hover:border-gold/30 transition-colors duration-500" />
              <div className="absolute top-[-12px] left-[-12px] w-6 h-6 border-t-2 border-l-2 border-gold" />
              <div className="absolute top-[-12px] right-[-12px] w-6 h-6 border-t-2 border-r-2 border-gold" />
              <div className="absolute bottom-[-12px] left-[-12px] w-6 h-6 border-b-2 border-l-2 border-gold" />
              <div className="absolute bottom-[-12px] right-[-12px] w-6 h-6 border-b-2 border-r-2 border-gold" />

              {/* Portrait Frame */}
              <div className="relative w-full h-full bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl">
                <motion.img
                  initial={{ scale: 1.1, filter: 'grayscale(0.3)' }}
                  whileInView={{ scale: 1, filter: 'grayscale(0)' }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  src={portrait}
                  alt="Chef Sozol Ahmed portrait in Grand Hyatt chef coat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Golden Overlay Veil on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </Tilt>
          </div>

          {/* Philosophy Narrative & Accents */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Elegant Quotation Mark */}
            <span className="font-serif text-6xl md:text-8xl text-gold/10 leading-none h-6 select-none">
              “
            </span>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-lg sm:text-xl md:text-3xl text-neutral-100 font-light leading-relaxed tracking-wide italic mb-8"
            >
              {philosophy}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/5"
            >
              {/* Stat Card 1 */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-none bg-gold/5 border border-gold/20 text-gold mt-1">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-white text-sm tracking-wide">
                    5-Star Standards
                  </h4>
                  <p className="text-muted text-xs leading-relaxed mt-1">
                    Maintaining flawless Grand Hyatt culinary prestige.
                  </p>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-none bg-gold/5 border border-gold/20 text-gold mt-1">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-white text-sm tracking-wide">
                    High-Volume Speed
                  </h4>
                  <p className="text-muted text-xs leading-relaxed mt-1">
                    Mastery of extreme service rushes and high covers.
                  </p>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-none bg-gold/5 border border-gold/20 text-gold mt-1">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-white text-sm tracking-wide">
                    Artistic Precision
                  </h4>
                  <p className="text-muted text-xs leading-relaxed mt-1">
                    Flawless knife work, butchery, and final plating.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
