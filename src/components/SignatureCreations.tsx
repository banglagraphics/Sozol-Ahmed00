import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { signatureCreations, DishItem } from '../data';
import { Tilt } from './Tilt';
import { Sparkles, Utensils, X, Eye, Flame, Egg } from 'lucide-react';

export function SignatureCreations() {
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="creations-section"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#121212] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-3">
            04 / Masterpieces
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium tracking-tight">
            Signature Creations
          </h2>
          <p className="text-muted text-sm md:text-base max-w-xl mt-3 font-light">
            A curated selection of Chef Sozol Ahmed's bespoke masterpieces prepared with fine dining culinary rigor.
          </p>
          <div className="w-16 h-[1px] bg-gold mt-6" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {signatureCreations.map((dish, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative cursor-none"
              >
                <Tilt className="group relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden border border-white/5 shadow-2xl">
                  {/* Subtle Golden Border Reveal */}
                  <motion.div
                    animate={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 border-2 border-gold z-20 pointer-events-none"
                  />

                  {/* High-Resolution Gourmet Image */}
                  <motion.img
                    animate={{
                      scale: isHovered ? 1.08 : 1.0,
                      filter: isHovered ? 'brightness-40 saturate-110' : 'brightness-75 saturate-[0.85]',
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                  {/* Display Card Inner Info */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20 flex flex-col justify-end h-1/2">
                    <span className="font-mono text-[9px] text-gold tracking-[0.25em] uppercase mb-2 block">
                      {dish.category}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-2 group-hover:text-gold transition-colors duration-300">
                      {dish.title}
                    </h3>
                    
                    {/* Hover indicator instructions */}
                    <div className="overflow-hidden h-6 relative mt-1">
                      <motion.div
                        animate={{
                          y: isHovered ? 0 : 25,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 text-xs text-gold/80 font-mono uppercase tracking-wider"
                      >
                        <Eye className="w-3.5 h-3.5 animate-pulse" />
                        <span>View Masterpiece Details</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative corner brackets */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20 pointer-events-none group-hover:border-gold group-hover:scale-105 transition-all duration-300" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20 pointer-events-none group-hover:border-gold group-hover:scale-105 transition-all duration-300" />
                </Tilt>
                
                {/* Clicking is captured on parent container */}
                <button
                  onClick={() => setSelectedDish(dish)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-none clickable z-30"
                  aria-label={`Open details for ${dish.title}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Gourmet Details Pop-up Modal */}
      <AnimatePresence>
        {selectedDish && (
          <div
            id="gourmet-modal-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedDish(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="relative w-full max-w-4xl bg-[#121212] border border-white/10 shadow-2xl overflow-y-auto md:overflow-hidden cursor-none flex flex-col md:grid md:grid-cols-12 max-h-[90vh] md:max-h-[600px] lg:max-h-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 z-40 p-2.5 bg-black/80 hover:bg-gold hover:text-black border border-white/10 hover:border-transparent text-white transition-all duration-300 rounded-none cursor-none clickable"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Side: Massive Image View */}
              <div className="md:col-span-6 relative aspect-video md:aspect-auto md:min-h-[500px] overflow-hidden bg-neutral-950">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.title}
                  className="w-full h-full object-cover filter brightness-90 saturate-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/30" />
                
                {/* Signature Brand Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/75 backdrop-blur-md border border-gold/30 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-gold">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>5-Star Signature</span>
                </div>
              </div>

              {/* Right Side: Culinary Narrative Details */}
              <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <span className="font-mono text-[10px] text-gold tracking-[0.3em] uppercase mb-3 block">
                  {selectedDish.category}
                </span>

                <h3 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight mb-6">
                  {selectedDish.title}
                </h3>

                <p className="text-neutral-200 text-sm md:text-base font-light leading-relaxed mb-8">
                  {selectedDish.description}
                </p>

                {/* Gastronomy Technical Specs */}
                <div className="space-y-6 pt-6 border-t border-white/5">
                  {/* Ingredients */}
                  <div className="flex gap-4">
                    <div className="p-2 bg-gold/5 border border-gold/20 text-gold h-fit rounded-none shrink-0">
                      <Egg className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-mono text-[10px] text-gold tracking-widest uppercase mb-1">Key Ingredients</h4>
                      <p className="text-neutral-300 text-xs md:text-sm font-light leading-relaxed">
                        {selectedDish.ingredients}
                      </p>
                    </div>
                  </div>

                  {/* Prep Technique */}
                  <div className="flex gap-4">
                    <div className="p-2 bg-gold/5 border border-gold/20 text-gold h-fit rounded-none shrink-0">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-mono text-[10px] text-gold tracking-widest uppercase mb-1">Culinary Technique</h4>
                      <p className="text-neutral-300 text-xs md:text-sm font-light leading-relaxed">
                        {selectedDish.technique}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Culinary Quote decor */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted">
                  <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                  <span>Grand Hyatt Doha Cuisine</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
