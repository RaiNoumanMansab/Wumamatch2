import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { fadeUp, viewportOnce } from '../../../utils/motion';

export const PlansPreviewSection = ({ isChinese }) => {
  const navigate = useNavigate();

  return (
    <SectionWrapper id="plans-preview" bg="light" className="py-20">
      <div className="max-w-3xl mx-auto text-center mb-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase bg-[#FAF7F2] border border-[#D4A853]/30 text-[#D4A853]">
              <Crown className="w-3.5 h-3.5" />
              {isChinese ? '会员方案' : 'Membership Plans'}
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#053C42] mb-6">
            {isChinese ? '选择您的会员方案' : 'Choose Your Membership'}
          </h2>
          
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#0F8A96] to-[#D4A853] mx-auto mb-6" />
          
          <p className="text-zinc-550 text-sm md:text-base leading-relaxed">
            {isChinese 
              ? '选择适合您的红娘配对服务，开启您的寻爱之旅。' 
              : 'Select the level of matchmaking support that fits your journey.'}
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8">
        
        {/* FREE PLAN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[320px] bg-white rounded-3xl border border-zinc-200/80 shadow-sm p-8 flex flex-col mt-4"
        >
          <h3 className="text-xl font-bold text-zinc-600 mb-2">Free</h3>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-black text-zinc-900">$0</span>
            <span className="text-sm font-medium text-zinc-400">/ forever</span>
          </div>

          <ul className="flex flex-col gap-4 mb-8 flex-1">
            {[
              'Browse profiles',
              '5 conversations per day',
              '1 priority introduction per month',
              'Guided bio builder',
              'Event browsing'
            ].map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-zinc-400" />
                </div>
                <span className="text-sm text-zinc-600 font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate('/register')}
            className="w-full py-3.5 rounded-2xl bg-zinc-100 text-zinc-600 font-bold text-sm transition-colors hover:bg-zinc-200 mt-auto"
          >
            Get Started
          </button>
        </motion.div>

        {/* FOUNDING MEMBER PLAN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full md:w-[360px] bg-[#11B6A7] rounded-3xl shadow-xl shadow-[#11B6A7]/20 p-8 flex flex-col z-10 md:scale-105"
        >
          {/* Most Popular Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <div className="bg-white text-[#11B6A7] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
              Most Popular
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">Founding Member</h3>
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <span className="text-white text-base font-bold">From</span>
              <span className="text-4xl font-black text-white">$11.99/mo</span>
            </div>
            <span className="text-xs font-medium text-white/80 w-16 leading-tight">
              / lock in forever
            </span>
          </div>

          <div className="w-full h-px bg-white/20 mb-6" />

          <ul className="flex flex-col gap-4 mb-8 flex-1">
            {/* Sub-pricing lines */}
            {[
              '1 Month — $19.99',
              '3 Months — $14.99 per month',
              '6 Months — $11.99 per month'
            ].map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-white font-medium">{f}</span>
              </li>
            ))}
            
            {/* Features */}
            {[
              'Everything in Free',
              '10 conversations per day',
              'Unlimited priority introductions',
              'See who liked you',
              'Advanced filters',
              'Priority in discover',
              'Event discounts'
            ].map((f, i) => (
              <li key={i + 10} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-white font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate('/register')}
            className="w-full py-3.5 rounded-2xl bg-white text-[#11B6A7] font-bold text-sm transition-colors hover:bg-zinc-50 shadow-md mt-auto"
          >
            Upgrade Now
          </button>
        </motion.div>

        {/* SVIP PLAN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full md:w-[320px] bg-white rounded-3xl border border-zinc-200/80 shadow-sm p-8 flex flex-col mt-4"
        >
          <h3 className="text-xl font-bold text-[#A855F7] mb-2">SVIP</h3>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-black text-zinc-900">$600</span>
            <span className="text-sm font-medium text-zinc-400">/ setup fee</span>
          </div>

          <ul className="flex flex-col gap-4 mb-8 flex-1">
            {[
              'Everything in Founding Member',
              'Personal matchmaker',
              'Handpicked introductions',
              'Unlimited priority introductions',
              'Unlimited conversations',
              'VIP event access',
              'Concierge support'
            ].map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#A855F7]" />
                </div>
                <span className="text-sm text-zinc-600 font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate('/register')}
            className="w-full py-3.5 rounded-2xl bg-[#F3E8FF] text-[#A855F7] font-bold text-sm transition-colors hover:bg-[#E9D5FF] mt-auto"
          >
            Apply Now
          </button>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default PlansPreviewSection;
