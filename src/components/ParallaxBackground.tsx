import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track page scroll
  const { scrollYProgress } = useScroll();

  // Create different speed offsets (transforms) for each element to generate real spatial parallax depth
  const rosemaryY1 = useTransform(scrollYProgress, [0, 1], [-50, 250]);
  const rosemaryY2 = useTransform(scrollYProgress, [0, 1], [100, -150]);
  const whiskY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const sparkleY = useTransform(scrollYProgress, [0, 1], [50, 450]);

  // Rotations for extra realism
  const rosemaryRotate1 = useTransform(scrollYProgress, [0, 1], [12, 45]);
  const rosemaryRotate2 = useTransform(scrollYProgress, [0, 1], [-25, -5]);
  const whiskRotate = useTransform(scrollYProgress, [0, 1], [45, 15]);

  return (
    <div
      ref={containerRef}
      id="parallax-bg-container"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Golden Blur Spotlights */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-gold/5 blur-[120px] rounded-full" />
      <div className="absolute top-[60%] right-[-10%] w-[50vw] h-[50vw] bg-gold/3 blur-[150px] rounded-full" />
      <div className="absolute bottom-[10%] left-[20%] w-[35vw] h-[35vw] bg-gold/5 blur-[100px] rounded-full" />

      {/* Floating Rosemary Leaf 1 */}
      <motion.div
        style={{ y: rosemaryY1, rotate: rosemaryRotate1 }}
        className="absolute top-[18%] right-[8%] w-36 h-36 md:w-48 md:h-48 opacity-25 mix-blend-screen select-none transition-opacity duration-500"
      >
        <img
          src="/src/assets/images/rosemary_leaf_1784207986224.jpg"
          alt="Culinary Herb Accent"
          className="w-full h-full object-contain filter brightness-110 saturate-120"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Floating Rosemary Leaf 2 */}
      <motion.div
        style={{ y: rosemaryY2, rotate: rosemaryRotate2 }}
        className="absolute top-[55%] left-[5%] w-28 h-28 md:w-40 md:h-40 opacity-20 mix-blend-screen select-none transition-opacity duration-500"
      >
        <img
          src="/src/assets/images/rosemary_leaf_1784207986224.jpg"
          alt="Culinary Rosemary Leaf"
          className="w-full h-full object-contain filter hue-rotate-[15deg] brightness-125 scale-x-[-1]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Floating Metallic Chef's Whisk */}
      <motion.div
        style={{ y: whiskY, rotate: whiskRotate }}
        className="absolute top-[75%] right-[6%] w-44 h-44 md:w-64 md:h-64 opacity-15 mix-blend-screen select-none transition-opacity duration-500"
      >
        <img
          src="/src/assets/images/chef_whisk_1784208002530.jpg"
          alt="Floating Whisk"
          className="w-full h-full object-contain filter contrast-125 brightness-110"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Dynamic Golden Sparkles */}
      <motion.div
        style={{ y: sparkleY }}
        className="absolute top-[40%] right-[25%] flex flex-col gap-12 opacity-40"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
        <div className="w-1 h-1 rounded-full bg-gold opacity-50 animate-pulse delay-500" />
      </motion.div>
      
      <motion.div
        style={{ y: rosemaryY1 }}
        className="absolute top-[85%] left-[18%] flex flex-col gap-16 opacity-30"
      >
        <div className="w-2 h-2 rounded-full bg-gold/80 animate-pulse" />
        <div className="w-1 h-1 rounded-full bg-gold opacity-75 animate-ping delay-1000" />
      </motion.div>
    </div>
  );
}
