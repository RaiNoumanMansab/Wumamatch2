import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useCountUp } from '../../../hooks/useScrollAnimation';
import { fadeUp, staggerContainer, viewportOnce } from '../../../utils/motion';

export const StatsBanner = ({ isChinese }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const val1 = useCountUp(2400, 2000, isVisible);
  const val2 = useCountUp(380, 2000, isVisible);
  const val3 = useCountUp(12, 1500, isVisible);
  const val4 = useCountUp(94, 1500, isVisible);

  const stats = [
    {
      value: `${val1.toLocaleString()}+`,
      label: isChinese ? '实名认证精英会员' : 'Verified Members',
    },
    {
      value: `${val2}+`,
      label: isChinese ? '成就良缘伴侣' : 'Successful Matches',
    },
    {
      value: `${val3}`,
      label: isChinese ? '资深红娘团队' : 'Expert Matchmakers',
    },
    {
      value: `${val4}%`,
      label: isChinese ? '客户极高满意度' : 'Client Satisfaction',
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full bg-[#180303] border-y border-[#C0392B]/20 py-10 px-8 relative z-10"
    >
      <motion.div
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-3xl md:text-5xl font-bold text-[#D4A853] tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(212,168,83,0.15)]">
              {stat.value}
            </span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#9A8F8A]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
