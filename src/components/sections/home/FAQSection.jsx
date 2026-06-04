import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionWrapper } from '../../layout/SectionWrapper';

const faqsEn = [
  {
    question: "How does WuMa's matchmaking process work?",
    answer:
      'After you register and complete your profile, our certified matchmakers personally review your preferences and background. We then curate a shortlist of compatible matches and introduce you one at a time — no endless swiping, just thoughtful, human-led introductions.',
  },
  {
    question: 'Is my personal information kept confidential?',
    answer:
      'Absolutely. We operate under strict privacy protocols. Your full name, photos, and contact details are never shared without your explicit consent. All profiles are verified by our team before any introduction is made.',
  },
  {
    question: 'Who is WuMa designed for?',
    answer:
      'WuMa is designed for serious, marriage-minded individuals — particularly within the Chinese and Chinese-diaspora community. We welcome members from all backgrounds who are ready for a meaningful, long-term commitment.',
  },
  {
    question: 'How long does it take to receive my first match?',
    answer:
      'Most members receive their first curated introduction within 1–3 weeks of profile approval. Our matchmakers take time to ensure quality over speed, so each introduction is thoughtfully considered.',
  },
  {
    question: 'Can I pause or cancel my membership?',
    answer:
      'Yes. You can pause your membership at any time without penalty. If you wish to cancel, simply contact our support team and we will process it promptly. We believe in a pressure-free experience.',
  },
  {
    question: 'What makes WuMa different from dating apps?',
    answer:
      'Unlike apps, WuMa is a human-powered service. Every match is personally selected by a real matchmaker who knows your profile in depth. There are no algorithms, no ghost-swiping, and no endless chats — just curated, respectful introductions designed to lead somewhere meaningful.',
  },
];

const faqsZh = [
  {
    question: 'WuMa 的红娘配对流程是怎样的？',
    answer:
      '您完成注册并填写个人资料后，我们的专业红娘会亲自审阅您的偏好与背景，精心筛选出最适合您的候选人，并逐一为您介绍——无需无休止地滑动，只有经过深思熟虑的人工引荐。',
  },
  {
    question: '我的个人信息会被保密吗？',
    answer:
      '绝对保密。我们严格遵守隐私保护规范，未经您明确同意，您的全名、照片及联系方式绝不会对外披露。所有资料在正式介绍前均经过我们团队的严格核实。',
  },
  {
    question: 'WuMa 适合哪些人群？',
    answer:
      'WuMa 专为认真寻找婚姻伴侣的人士而设计，尤其面向华人及海外华人群体。我们欢迎所有已准备好迈向长期稳定关系的人士加入。',
  },
  {
    question: '我需要等多长时间才能收到第一个配对？',
    answer:
      '大多数会员在资料审核通过后的 1–3 周内即可收到首次精心挑选的介绍。我们的红娘注重质量而非速度，确保每一次引荐都经过深思熟虑。',
  },
  {
    question: '我可以暂停或取消会员资格吗？',
    answer:
      '可以。您随时可以无条件暂停会员资格。如需取消，只需联系我们的客服团队，我们将迅速为您处理。我们始终致力于提供无压力的服务体验。',
  },
  {
    question: 'WuMa 与普通交友软件有何不同？',
    answer:
      '与普通交友软件不同，WuMa 是一项以人为本的专业服务。每一位配对对象均由深入了解您资料的真实红娘亲自挑选，没有算法、没有无效滑动，只有经过精心筹划、充满尊重的引荐，旨在为您带来真正有意义的缘分。',
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border border-zinc-800 rounded-2xl overflow-hidden bg-[#111111]/60 hover:border-zinc-700 transition-colors duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-semibold text-[#F5F0EB] group-hover:text-[#D4A853] transition-colors duration-300 leading-snug">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0 w-7 h-7 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-[#C0392B] group-hover:bg-[#C0392B]/10 transition-all duration-300"
        >
          <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-[#E74C3C]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="border-t border-zinc-800 pt-4">
                <p className="text-sm text-[#9A8F8A] leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQSection = ({ isChinese }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = isChinese ? faqsZh : faqsEn;

  const handleToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <SectionWrapper id="faq" bg="dark">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#C0392B]/10 border border-[#C0392B]/25 rounded-full px-4 py-1.5 mb-5"
        >
          <HelpCircle className="w-3.5 h-3.5 text-[#E74C3C]" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#E74C3C]">
            {isChinese ? '常见问题' : 'FAQ'}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F0EB] mb-4"
        >
          {isChinese ? '您的疑问，我们来解答' : 'Questions? We Have Answers'}
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
            ? '以下是我们的会员最常提出的问题，希望能解答您的疑惑。'
            : 'Everything you need to know before taking the first step toward your perfect match.'}
        </motion.p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, idx) => (
          <FAQItem
            key={idx}
            faq={faq}
            index={idx}
            isOpen={openIndex === idx}
            onToggle={() => handleToggle(idx)}
          />
        ))}
      </div>

      {/* Bottom CTA hint */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <p className="text-xs text-zinc-500">
          {isChinese ? '还有其他疑问？' : 'Still have questions?'}{' '}
          <a
            href="/contact"
            className="text-[#E74C3C] hover:text-[#D4A853] underline underline-offset-2 transition-colors duration-300 font-medium"
          >
            {isChinese ? '联系我们的团队' : 'Contact our team'}
          </a>
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default FAQSection;
