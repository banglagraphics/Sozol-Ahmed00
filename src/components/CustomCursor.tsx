import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Set up spring physics for smooth, high-fidelity lag cursor follow
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch screens to gracefully fall back to native tap controls
    const detectTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    detectTouch();

    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    // Auto-detect interactive hover targets (links, buttons, inputs, cards) using event delegation
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = target.closest(
        'a, button, input, textarea, select, [role="button"], .clickable, [data-tilt]'
      );
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeaveWindow);
    window.addEventListener('mouseenter', handleMouseEnterWindow);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeaveWindow);
      window.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible, isTouch]);

  // Hide custom cursor completely on touch devices
  if (isTouch) return null;

  return (
    <motion.div
      id="custom-gold-cursor"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        x: '-50%',
        y: '-50%',
      }}
      animate={{
        scale: isHovered ? 2.0 : 1.0,
        backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.15)' : 'rgba(212, 175, 55, 0)',
        borderColor: isHovered ? '#FFFFFF' : '#D4AF37',
        borderWidth: isHovered ? '1.5px' : '2px',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
      }}
      className={`fixed pointer-events-none z-50 rounded-full w-8 h-8 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <motion.div
        animate={{
          scale: isHovered ? 0.3 : 1.0,
        }}
        className="w-1.5 h-1.5 bg-gold rounded-full"
      />
    </motion.div>
  );
}
