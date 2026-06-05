import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scroll-top-btn"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleClick}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full
            bg-gradient-to-br from-[#0F8A96] to-[#074F57]
            border border-[#0F8A96]/40
            shadow-[0_8px_32px_rgba(15,138,150,0.45)]
            flex items-center justify-center
            hover:shadow-[0_12px_40px_rgba(15,138,150,0.6)]
            hover:scale-110
            active:scale-95
            transition-all duration-200
            group"
        >
          {/* Gold shimmer ring on hover */}
          <span className="absolute inset-0 rounded-full border border-[#D4A853]/0 group-hover:border-[#D4A853]/50 transition-all duration-300" />
          <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
