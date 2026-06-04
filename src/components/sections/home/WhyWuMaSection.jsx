import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, MailX, BrainCircuit, Globe2, Compass } from 'lucide-react';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { SectionHeader } from '../../ui/SectionHeader';
import { Card } from '../../ui/Card';
import { fadeUp, viewportOnce } from '../../../utils/motion';

export const WhyWuMaSection = ({ isChinese }) => {
  const features = [
    {
      icon: Users,
      title: isChinese ? '纯人工专业红娘' : 'Human Matchmakers Only',
      desc: isChinese
        ? '拒绝生硬的冰冷算法。由经验丰富、深谙两性关系的红娘专家为您进行深入的情感匹配与指导。'
        : 'No AI. Real professionals who understand what you are looking for in life and romance.',
    },
    {
      icon: ShieldCheck,
      title: isChinese ? '严密身份及征信审查' : 'Rigorous Verification',
      desc: isChinese
        ? '每位加入的会员均需核验实名身份、人脸活体，甚至学历资产，提供最为真诚安全的相亲环境。'
        : 'Every member undergoes identity, background, and liveness verification for a safe, verified community.',
    },
    {
      icon: MailX,
      title: isChinese ? '零垃圾骚扰机制' : 'Zero Cold Approaches',
      desc: isChinese
        ? '没有烦人的骚扰私信。所有意向和初次约会接触，必须在您的红娘协助下双向同意后启动。'
        : 'No unwanted messages. All introductions are facilitated by your matchmaker only when mutually agreed.',
    },
    {
      icon: BrainCircuit,
      title: isChinese ? '深度心理与价值观匹配' : 'Deep Compatibility Profiling',
      desc: isChinese
        ? '多维度涵盖生活理念、家庭观念和情感人格的深度问卷，保证相亲在最根本的核心价值观上契合。'
        : 'A comprehensive psychological, lifestyle, and value questionnaire ensures high-quality real compatibility.',
    },
    {
      icon: Globe2,
      title: isChinese ? '全球优质华人社区' : 'Global Chinese Community',
      desc: isChinese
        ? '专为全球各地华人留学生、高素质海外移民和各行精英设计，连接共享相似文化背景与人生观的知心人。'
        : 'Connecting diaspora communities worldwide with shared values, cultural heritage, and high standards.',
    },
    {
      icon: Compass,
      title: isChinese ? '全程管家式贴心服务' : 'Concierge-Level Service',
      desc: isChinese
        ? '红娘不仅负责挑选，更在约会沟通、形象设计、关系升温等每个步骤为您解惑，相伴直至成家。'
        : 'Your dedicated matchmaker is with you every step of the journey, providing feedback, support, and advice.',
    },
  ];

  return (
    <SectionWrapper id="why-wuma" bg="gradient">
      <SectionHeader
        eyebrow={isChinese ? '核心优势' : 'Why Us'}
        title={isChinese ? '为什么选择 WuMa Match' : 'Why WuMa Match Is Different'}
        subtitle={
          isChinese
            ? '将严肃、定制的匠人精神带入现代婚恋，我们专注于质量而非速度，为您省去无谓的情感内耗。'
            : 'We bring craftsmanship and premium concierge service back to dating. Quality is our sole focus.'
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={idx * 0.07}
              variants={fadeUp}
              className="text-left"
            >
              <Card
                variant="default"
                className="p-6 h-full flex gap-5 border-zinc-800/60 bg-[#141414] hover:border-[#C0392B]/30 hover:bg-[#1A1A1A] transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded bg-[#3B0000]/40 border border-[#C0392B]/30 flex items-center justify-center text-[#E74C3C] group-hover:bg-[#C0392B] group-hover:text-white transition-all duration-500">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F0EB] mb-2 group-hover:text-[#E74C3C] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#9A8F8A] leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
