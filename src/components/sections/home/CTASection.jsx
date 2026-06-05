import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from '../../ui/Button';
import { fadeUp, viewportOnce } from '../../../utils/motion';

export const CTASection = ({ isChinese }) => {
  const navigate = useNavigate();

  return (
    <div className="relative py-24 px-8 overflow-hidden bg-gradient-to-r from-[#074F57] via-[#0F8A96] to-[#074F57] border-t border-teal-500/10 text-center">
      <div className="absolute inset-0 opacity-[0.07] flex items-center justify-around pointer-events-none">
        <Heart className="w-16 h-16 text-white rotate-12" />
        <Heart className="w-20 h-20 text-white -rotate-12" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
      >
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
          {isChinese ? '准备好托付终生，邂逅真爱了吗？' : 'Ready to Find the One?'}
        </h2>
        <p className="max-w-xl text-xs md:text-sm text-white/80 leading-relaxed font-light mb-10 uppercase tracking-widest">
          {isChinese
            ? '加入数千名真诚严肃的单身精英，抛弃无意义的划卡，开启管家式人工寻爱之旅。'
            : 'Join serious members who chose intentional matchmaking over endless swiping.'}
        </p>

        <Button
          onClick={() => navigate('/register')}
          className="group gap-2 px-6 py-2 text-sm font-bold uppercase tracking-widest whitespace-nowrap w-fit !bg-transparent !border !border-white !text-white hover:!bg-white hover:!text-[#0F8A96] hover:-translate-y-0.5 !shadow-md"
        >
          {isChinese ? '立即注册加入' : 'Start Your Journey'}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </div>
  );
};
