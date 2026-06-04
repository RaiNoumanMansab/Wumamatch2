import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Headphones, HeartHandshake, CalendarHeart, Heart } from 'lucide-react';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { SectionHeader } from '../../ui/SectionHeader';
import { fadeUp, viewportOnce } from '../../../utils/motion';

export const HowItWorksSection = ({ isChinese }) => {
  const steps = [
    {
      num: '01',
      title: isChinese ? '实名加入与认证' : 'Join & Verify',
      desc: isChinese
        ? '创建个人档案并完成严格的安全实名身份验证，为所有人建立一个安全、真诚的高端社交社区。'
        : 'Create your profile and complete our secure verification process to ensure a safe, high-caliber community.',
      icon: ShieldCheck
    },
    {
      num: '02',
      title: isChinese ? '与专属红娘深度访谈' : 'Speak with a Matchmaker',
      desc: isChinese
        ? '与我们的资深顾问红娘进行1对1的私密咨询，详谈您的择偶喜好、价值观及长远生活目标。'
        : 'Have a 1-on-1 private consultation with our expert matchmakers to discuss your preferences and goals.',
      icon: Headphones
    },
    {
      num: '03',
      title: isChinese ? '获取手工甄选推荐' : 'Receive Curated Matches',
      desc: isChinese
        ? '基于您的档案与面对面沟通，我们的红娘顾问团队将精挑细选符合您预期的优质人选。'
        : 'Based on your profile and consultation, our matchmakers will handpick potential matches that align with you.',
      icon: HeartHandshake
    },
    {
      num: '04',
      title: isChinese ? '怀着成家意向约会' : 'Meet with Intentions',
      desc: isChinese
        ? '与同等优秀的会员在红娘协助下约会，他们同您一样，对寻找伴侣和步入婚姻抱有极高热忱。'
        : 'Go on curated dates with high-caliber individuals who are serious about finding a meaningful relationship.',
      icon: CalendarHeart
    },
    {
      num: '05',
      title: isChinese ? '收获终生的美满良缘' : 'Build a Real Relationship',
      desc: isChinese
        ? '在红娘后续的情感辅导与建议下，花时间与您的另一半建立真挚深厚的婚姻伴侣纽带。'
        : 'Take your time to build a genuine connection with your match, supported by our coaching along the way.',
      icon: Heart
    }
  ];

  return (
    <SectionWrapper id="how-it-works" bg="darker">
      <SectionHeader
        eyebrow={isChinese ? '红娘流程' : 'Our Process'}
        title={isChinese ? '通往真爱的高效坦途' : 'A Clear Path to Find Your Love Effortlessly'}
        subtitle={
          isChinese
            ? '我们规范细致的红娘工作流程，免除传统社交软件无意义的低效试错，让脱单更具目标与确定性。'
            : 'Our structured, concierge-style process removes uncertainty and replaces it with intentional, guided matchmaking.'
        }
      />

      {/* Desktop Horizontal Timeline */}
      <div className="hidden lg:block relative max-w-6xl mx-auto py-10">
        {/* Draw Timeline line */}
        <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-zinc-800 z-0">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={viewportOnce}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-[#C0392B] to-[#D4A853]"
          />
        </div>

        <div className="grid grid-cols-5 gap-4 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={idx * 0.1}
                variants={fadeUp}
                className="flex flex-col items-center px-2 text-center"
              >
                {/* Step Circle Icon Wrapper */}
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-zinc-850 flex items-center justify-center text-zinc-400 mb-6 hover:border-[#C0392B] hover:text-[#E74C3C] hover:shadow-[0_0_20px_rgba(231,76,60,0.3)] transition-all duration-300 relative group">
                  <Icon className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-[#C0392B] text-white rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-[#F5F0EB] mb-2 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs text-[#9A8F8A] leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="lg:hidden relative max-w-xl mx-auto pl-8 text-left border-l border-zinc-800 flex flex-col gap-12">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={idx * 0.08}
              variants={fadeUp}
              className="relative"
            >
              {/* Timeline dot overlay */}
              <div className="absolute -left-[49px] top-0 w-8 h-8 rounded-full bg-[#1A1A1A] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#E74C3C] hover:border-[#C0392B]">
                <Icon className="w-4 h-4" />
              </div>

              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E74C3C] block mb-1">
                Step {step.num}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#F5F0EB] mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-[#9A8F8A] leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
