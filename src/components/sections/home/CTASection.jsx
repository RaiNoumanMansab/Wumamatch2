import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const CTASection = ({ isChinese }) => {
  const navigate = useNavigate();

  return (
    <div className="relative py-24 px-6 overflow-hidden bg-gradient-to-r from-[#96000F] via-[#C0392B] to-[#96000F] border-t border-[#C0392B]/20 text-center">
      {/* Decorative subtle hearts floating behind */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-around pointer-events-none">
        <Heart className="w-16 h-16 text-white rotate-12" />
        <Heart className="w-24 h-24 text-white -rotate-12" />
        <Heart className="w-20 h-20 text-white" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F5F0EB] tracking-tight mb-4 leading-tight">
          {isChinese ? '准备好托付终生，邂逅真爱了吗？' : 'Ready to Find the One?'}
        </h2>
        <p className="max-w-xl text-xs md:text-sm text-white/80 leading-relaxed font-light mb-10 uppercase tracking-widest">
          {isChinese
            ? '加入数千名真诚严肃的单身精英，抛弃无意义的划卡，开启管家式人工寻爱之旅。'
            : 'Join serious members who chose intentional matchmaking over endless swiping.'}
        </p>

        <motion.button
          onClick={() => navigate('/register')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 border-2 border-[#F5F0EB] text-[#F5F0EB] font-semibold text-xs uppercase tracking-widest rounded-2xl bg-transparent hover:bg-[#F5F0EB] hover:text-[#C0392B] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        >
          {isChinese ? '立即注册加入' : 'Start Your Journey'}
        </motion.button>
      </div>
    </div>
  );
};
