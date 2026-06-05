import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';

export const SectionHeader = ({ eyebrow, title, subtitle, className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={fadeUp}
    className={`text-center max-w-3xl mx-auto mb-14 md:mb-16 ${className}`}
  >
    {eyebrow && (
      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#0F8A96] mb-4">
        {eyebrow}
      </p>
    )}
    <div className="section-rule" />
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#053C42] mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);
