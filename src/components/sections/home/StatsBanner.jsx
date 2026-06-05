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
      className="w-full bg-[#F5EFEB] border-y border-zinc-200/60 py-10 px-8 relative z-10"
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
            <span className="font-serif text-3xl md:text-5xl font-bold text-[#0F8A96] tracking-tight mb-2">
              {stat.value}
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-450">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
