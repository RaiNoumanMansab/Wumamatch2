import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Star, Crown, Check, ArrowRight } from 'lucide-react';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';

const PLANS = [
  {
    id: 'essential',
    name: 'Essential',
    nameCN: '基础会员',
    price: 299,
    icon: Shield,
    accentColor: '#9A8F8A',
    borderColor: 'border-zinc-700/60',
    bgColor: 'bg-[#141414]',
    features: [
      { text: 'Identity verification badge', textCN: '实名身份认证徽章' },
      { text: 'Up to 2 curated introductions/mo', textCN: '每月最多2次精选引荐' },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    nameCN: '高端会员',
    price: 699,
    badge: 'Most Popular',
    badgeCN: '最受欢迎',
    icon: Star,
    accentColor: '#C0392B',
    borderColor: 'border-[#C0392B]/50',
    bgColor: 'bg-[#160808]',
    features: [
      { text: 'Up to 5 curated introductions/mo', textCN: '每月最多5次精选引荐' },
      { text: 'Full matchmaker report per match', textCN: '每次配对含完整红娘评估报告' },
      { text: 'Dedicated senior matchmaker', textCN: '专属资深红娘顾问' },
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    nameCN: '顶级尊享',
    price: 1499,
    icon: Crown,
    accentColor: '#D4A853',
    borderColor: 'border-[#D4A853]/50',
    bgColor: 'bg-[#120e03]',
    features: [
      { text: 'Unlimited curated introductions', textCN: '无限次精选引荐' },
      { text: 'Dedicated executive matchmaker', textCN: '专属高级执行红娘' },
    ],
  },
];

export const PlansPreviewSection = ({ isChinese }) => {
  const navigate = useNavigate();

  return (
    <SectionWrapper id="plans-preview" bg="dark" className="border-t border-zinc-900/50">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#D4A853]/10 border border-[#D4A853]/25 rounded-full px-4 py-1.5 mb-5"
        >
          <Crown className="w-3.5 h-3.5 text-[#D4A853]" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#D4A853]">
            {isChinese ? '会员方案' : 'Membership Plans'}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F0EB] mb-4"
        >
          {isChinese ? '选择您的专属定制方案' : 'Choose Your Membership'}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-rule"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm md:text-base text-[#9A8F8A] font-light leading-relaxed mt-4"
        >
          {isChinese 
            ? '不同层级的红娘服务，满足您对另一半的极致追求。' 
            : 'Select the level of matchmaking support that fits your journey.'}
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card 
                className={`relative h-full flex flex-col p-6 lg:p-8 ${plan.bgColor} ${plan.borderColor} ${plan.badge ? 'border-2 scale-105 z-10 shadow-2xl shadow-[#C0392B]/10' : 'border'}`}
              >
                {plan.badge && (
                  <div className="absolute top-5 right-5">
                    <span 
                      className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg"
                      style={{ background: 'linear-gradient(135deg,#C0392B,#96000F)', color: '#fff' }}
                    >
                      {isChinese ? plan.badgeCN : plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center`} style={{ backgroundColor: `${plan.accentColor}20`, color: plan.accentColor, border: `1px solid ${plan.accentColor}40` }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#F5F0EB]">
                    {isChinese ? plan.nameCN : plan.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-[#F5F0EB]">$</span>
                    <span className="text-4xl font-bold tracking-tight text-[#F5F0EB]">{plan.price}</span>
                    <span className="text-xs text-[#9A8F8A] ml-1 uppercase font-semibold">/ {isChinese ? '月' : 'mo'}</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-300 leading-relaxed font-medium">
                        {isChinese ? f.textCN : f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Button 
          variant="secondary" 
          onClick={() => navigate('/plans')}
          className="group px-8 hover:bg-zinc-800"
        >
          {isChinese ? '查看所有会员权益' : 'View All Plans'}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};
