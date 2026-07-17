import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { ParallaxBackground } from './components/ParallaxBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { SignatureCreations } from './components/SignatureCreations';
import { Highlights } from './components/Highlights';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { ChefHat } from 'lucide-react';

// Premium Page Loader: Curtain Reveal Entrance Animation
function PageLoader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 2-second elegant pre-rendering screen
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="curtain-loader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#121212] flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="relative flex flex-col items-center text-center max-w-sm px-6">
            {/* Elegant Monogram Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mb-6"
            >
              <ChefHat className="w-6 h-6 text-gold" />
            </motion.div>

            {/* Name Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-2xl text-white font-medium tracking-widest uppercase mb-2"
            >
              Sozol Ahmed
            </motion.h1>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-mono text-[9px] text-gold tracking-[0.35em] uppercase"
            >
              Grand Hyatt Doha • Commis Chef
            </motion.p>

            {/* Sleek Line Progress Indicator */}
            <div className="w-32 h-[1px] bg-white/10 mt-10 relative overflow-hidden">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-1/2 bg-gold"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Prevent scroll behind the resume modal when open
  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isResumeOpen]);

  return (
    <div id="culinary-portfolio-root" className="min-h-screen bg-[#121212] text-white font-sans relative overflow-x-hidden w-full max-w-full">
      {/* 5-Star Interactive Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Curtain loading Reveal */}
      <PageLoader />

      {/* Dynamic Parallax Background elements */}
      <ParallaxBackground />

      {/* Portfolio Structural Sections */}
      <div className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Timeline />
        <Skills />
        <SignatureCreations />
        <Highlights />
        <Contact />
      </div>

      {/* CV Modal Drawer */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
