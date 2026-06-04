import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Zap, Shield, Heart, Users, MessageSquare, Calendar, FileText, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Button } from '../components/ui/Button';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const PLANS = [
  {
    id: 'essential',
    name: 'Essential',
    nameCN: '基础会员',
    tagline: 'Start your journey with confidence',
    taglineCN: '自信开启寻爱旅程',
    price: 299,
    pricePeriod: 'mo',
    badge: null,
    icon: Shield,
    accentColor: '#9A8F8A',
    borderColor: 'border-zinc-700/60',
    bgColor: 'bg-[#141414]',
    features: [
      { text: 'Identity verification badge', textCN: '实名身份认证徽章' },
      { text: 'Access to member directory', textCN: '浏览会员目录' },
      { text: 'Basic profile creation', textCN: '创建基础个人档案' },
      { text: '1 matchmaker consultation', textCN: '1次红娘初步咨询' },
      { text: 'Up to 2 curated introductions/mo', textCN: '每月最多2次精选引荐' },
      { text: 'Email support', textCN: '邮件客服支持' },
    ],
    excluded: [
      { text: 'Matchmaker report access', textCN: '红娘深度配对报告' },
      { text: 'Priority matchmaker allocation', textCN: '专属优先红娘分配' },
      { text: 'Exclusive event invitations', textCN: '高端专属活动邀请' },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    nameCN: '高端会员',
    tagline: 'The most popular choice for serious singles',
    taglineCN: '严肃单身精英的最优选择',
    price: 699,
    pricePeriod: 'mo',
    badge: 'Most Popular',
    badgeCN: '最受欢迎',
    icon: Star,
    accentColor: '#C0392B',
    borderColor: 'border-[#C0392B]/50',
    bgColor: 'bg-[#160808]',
    featured: true,
    features: [
      { text: 'Everything in Essential', textCN: '包含基础会员全部权益' },
      { text: 'Full matchmaker report per match', textCN: '每次配对含完整红娘评估报告' },
      { text: 'Up to 5 curated introductions/mo', textCN: '每月最多5次精选引荐' },
      { text: 'Dedicated senior matchmaker', textCN: '专属资深红娘顾问' },
      { text: 'Post-date feedback coaching', textCN: '约会后情感反馈辅导' },
      { text: 'Priority profile placement', textCN: '档案优先展示位' },
      { text: 'Event invitations (2/quarter)', textCN: '每季2场高端活动邀请' },
      { text: 'WhatsApp concierge support', textCN: 'WhatsApp 专属客服' },
    ],
    excluded: [],
  },
  {
    id: 'elite',
    name: 'Elite',
    nameCN: '顶级尊享',
    tagline: 'White-glove matchmaking with no limits',
    taglineCN: '无上限专属管家级红娘服务',
    price: 1499,
    pricePeriod: 'mo',
    badge: 'White Glove',
    badgeCN: '白手套服务',
    icon: Crown,
    accentColor: '#D4A853',
    borderColor: 'border-[#D4A853]/50',
    bgColor: 'bg-[#120e03]',
    features: [
      { text: 'Everything in Premium', textCN: '包含高端会员全部权益' },
      { text: 'Unlimited curated introductions', textCN: '无限次精选引荐' },
      { text: 'Dedicated executive matchmaker', textCN: '专属高级执行红娘' },
      { text: 'Full psychological compatibility report', textCN: '完整心理相容性分析报告' },
      { text: 'Image & styling consultation', textCN: '个人形象与穿搭顾问' },
      { text: 'Date planning & venue curation', textCN: '专属约会行程与场地安排' },
      { text: 'Unlimited event access', textCN: '无限场次高端活动出席' },
      { text: '24/7 dedicated phone line', textCN: '24/7 专属热线电话' },
      { text: 'International match network access', textCN: '全球国际会员网络专属入口' },
    ],
    excluded: [],
  },
];

const FAQS = [
  {
    q: 'How does the matchmaking process work?',
    qCN: '红娘配对流程是怎样运作的？',
    a: 'After joining, you complete a deep profile questionnaire and have a 1-on-1 consultation with your dedicated matchmaker. They then handpick compatible matches based on your values, lifestyle, and relationship goals.',
    aCN: '加入后，您需完成深度档案问卷并与专属红娘进行1对1咨询。红娘将根据您的价值观、生活方式和感情目标，手工甄选高度契合的潜在伴侣。',
  },
  {
    q: 'Are all members identity-verified?',
    qCN: '所有会员都经过身份验证吗？',
    a: 'Yes. Every member undergoes biometric liveness verification (Veriff) and criminal background screening before being activated. This ensures a safe, genuine community.',
    aCN: '是的。每位会员在激活前均须完成生物特征活体验证（Veriff）及犯罪背景调查，确保社区的安全与真实性。',
  },
  {
    q: 'Can I upgrade or cancel my plan?',
    qCN: '我可以升级或取消套餐吗？',
    a: 'Yes. You can upgrade to a higher tier at any time and the price difference will be prorated. Cancellations take effect at the end of the current billing period.',
    aCN: '可以。您可以随时升级至更高套餐，差价将按比例计算。取消操作将在当前计费周期结束时生效。',
  },
  {
    q: 'What if I don\'t find a match?',
    qCN: '如果我没有找到合适的对象怎么办？',
    a: 'Our matchmakers work diligently to find compatible partners. Premium and Elite members receive a complimentary 1-month extension if no satisfactory introductions were made within 3 months.',
    aCN: '我们的红娘团队将全力以赴为您寻找合适的伴侣。高端及顶级会员若在3个月内未能完成满意的引荐，将获得1个月免费延期服务。',
  },
];

export const PlansPage = ({ isChinese }) => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'
  const [openFaq, setOpenFaq] = useState(null);

  const getPrice = (base) => {
    if (billingCycle === 'annual') return Math.round(base * 0.75 * 12);
    return base;
  };

  return (
    <PageWrapper className="w-full pt-20">

      {/* ── Hero header ── */}
      <div className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(192,57,43,0.18)_0%,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase bg-[#1a0505] border border-[#C0392B]/30 text-[#E74C3C]">
              <Sparkles className="w-3 h-3 fill-current text-[#D4A853]" />
              {isChinese ? '透明真实的会员定价' : 'Transparent Membership Pricing'}
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="font-serif text-4xl md:text-6xl font-bold text-[#F5F0EB] mb-5 leading-tight">
            {isChinese ? '选择适合您的\n会员方案' : 'Choose Your\nMembership Plan'}
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-[#9A8F8A] text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-10">
            {isChinese
              ? '每项方案均包含实名认证、红娘人工配对及隐私保护。无隐藏费用，无自动续费陷阱。'
              : 'All plans include identity verification, human matchmaker support, and full privacy protection. No hidden fees.'}
          </motion.p>

          {/* Billing toggle */}
          <motion.div {...fadeUp(0.28)} className="inline-flex items-center gap-1 p-1 rounded-full bg-[#1A1A1A] border border-zinc-800 mb-4">
            {['monthly', 'annual'].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  billingCycle === cycle
                    ? 'bg-[#C0392B] text-white shadow-[0_0_15px_rgba(192,57,43,0.4)]'
                    : 'text-[#9A8F8A] hover:text-[#F5F0EB]'
                }`}
              >
                {cycle === 'monthly'
                  ? (isChinese ? '月付' : 'Monthly')
                  : (isChinese ? '年付' : 'Annual')}
              </button>
            ))}
          </motion.div>
          {billingCycle === 'annual' && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold text-[#D4A853] tracking-wider uppercase"
            >
              🎉 {isChinese ? '年付享25%折扣优惠' : 'Save 25% with annual billing'}
            </motion.p>
          )}
        </div>
      </div>

      {/* ── Plans grid ── */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PLANS.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                {...fadeUp(idx * 0.1)}
                className={`relative flex flex-col rounded-3xl border ${plan.borderColor} ${plan.bgColor} overflow-hidden ${plan.featured ? 'plan-featured md:scale-105 z-10' : ''}`}
              >
                {/* Gold top line for featured */}
                {plan.featured && (
                  <div className="h-[3px] bg-gradient-to-r from-[#C0392B] via-[#D4A853] to-[#C0392B]" />
                )}

                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-5 right-5">
                    <span
                      className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{
                        background: plan.id === 'elite'
                          ? 'linear-gradient(135deg,#D4A853,#B38F44)'
                          : 'linear-gradient(135deg,#C0392B,#96000F)',
                        color: plan.id === 'elite' ? '#0D0D0D' : '#fff',
                      }}
                    >
                      {isChinese ? plan.badgeCN : plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-grow gap-6">
                  {/* Plan header */}
                  <div>
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: `${plan.accentColor}18`, border: `1px solid ${plan.accentColor}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: plan.accentColor }} />
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-[#F5F0EB] mb-1">
                      {isChinese ? plan.nameCN : plan.name}
                    </h2>
                    <p className="text-xs text-[#9A8F8A] leading-relaxed">
                      {isChinese ? plan.taglineCN : plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-1.5 py-4 border-y border-white/5">
                    <span className="text-sm text-[#9A8F8A] font-semibold self-start mt-2">$</span>
                    <span className="font-serif text-5xl font-bold" style={{ color: plan.accentColor }}>
                      {getPrice(plan.price).toLocaleString()}
                    </span>
                    <span className="text-xs text-[#9A8F8A] mb-2">
                      / {billingCycle === 'annual' ? (isChinese ? '年' : 'yr') : (isChinese ? '月' : 'mo')}
                      {billingCycle === 'annual' && (
                        <span className="ml-2 line-through opacity-50">${plan.price * 12}</span>
                      )}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-grow">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${plan.accentColor}20` }}>
                          <Check className="w-2.5 h-2.5" style={{ color: plan.accentColor }} />
                        </div>
                        <span className="text-xs text-[#C8BFB9] leading-relaxed">
                          {isChinese ? f.textCN : f.text}
                        </span>
                      </li>
                    ))}
                    {plan.excluded.map((f) => (
                      <li key={f.text} className="flex items-start gap-3 opacity-35">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-zinc-800">
                          <Lock className="w-2.5 h-2.5 text-zinc-500" />
                        </div>
                        <span className="text-xs text-[#9A8F8A] leading-relaxed line-through">
                          {isChinese ? f.textCN : f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => navigate('/register')}
                    className={`w-full py-3.5 rounded-2xl text-sm font-bold tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 group ${
                      plan.featured
                        ? 'bg-gradient-to-r from-[#C0392B] to-[#96000F] text-white shadow-[0_0_25px_rgba(192,57,43,0.35)] hover:shadow-[0_0_35px_rgba(192,57,43,0.5)] hover:from-[#E74C3C] hover:to-[#C0392B]'
                        : plan.id === 'elite'
                          ? 'bg-gradient-to-r from-[#D4A853] to-[#B38F44] text-[#0D0D0D] hover:from-[#E5C06A] hover:to-[#C5A055]'
                          : 'bg-zinc-800 text-[#F5F0EB] hover:bg-zinc-700 border border-zinc-700'
                    }`}
                  >
                    {isChinese ? '立即申请' : 'Get Started'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Enterprise / Custom ── */}
        <motion.div {...fadeUp(0.3)} className="mt-8 rounded-3xl border border-[#D4A853]/20 bg-gradient-to-r from-[#120e03] via-[#1a1305] to-[#120e03] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#D4A853]/10 border border-[#D4A853]/30 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-[#D4A853]" />
            </div>
            <div className="text-left">
              <h3 className="font-serif text-xl font-bold text-[#F5F0EB] mb-1">
                {isChinese ? '企业团队合作方案' : 'Corporate & Group Packages'}
              </h3>
              <p className="text-xs text-[#9A8F8A] leading-relaxed max-w-lg">
                {isChinese
                  ? '专为企业、机构或团体量身定制的批量会员配对方案。可私下联系我们的商务顾问获取独家报价。'
                  : 'Custom plans for corporations, associations, or groups of 5+ members. Contact us for bespoke pricing and dedicated support.'}
              </p>
            </div>
          </div>
          <Button variant="gold" size="md" className="flex-shrink-0 px-8" onClick={() => navigate('/contact')}>
            {isChinese ? '咨询定制方案' : 'Request Custom Quote'}
          </Button>
        </motion.div>

        {/* ── Feature comparison table ── */}
        <motion.div {...fadeUp(0.15)} className="mt-20">
          <div className="text-center mb-10">
            <div className="section-rule" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F0EB] mb-3">
              {isChinese ? '全方位方案对比' : 'Full Plan Comparison'}
            </h2>
            <p className="text-xs text-[#9A8F8A] uppercase tracking-widest">
              {isChinese ? '清晰透明，无任何隐藏项目' : 'Transparent. Honest. No surprises.'}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-[#141414]">
                  <th className="px-6 py-4 text-[#9A8F8A] font-semibold uppercase tracking-wider w-1/4">
                    {isChinese ? '功能 / 权益' : 'Feature'}
                  </th>
                  {PLANS.map((p) => (
                    <th key={p.id} className="px-6 py-4 text-center font-serif font-bold" style={{ color: p.accentColor }}>
                      {isChinese ? p.nameCN : p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: isChinese ? '身份实名认证' : 'Identity Verification',   e: true,  p: true,  el: true  },
                  { label: isChinese ? '浏览会员目录' : 'Member Directory Access',  e: true,  p: true,  el: true  },
                  { label: isChinese ? '每月引荐次数' : 'Introductions / Month',    e: '2',   p: '5',   el: '∞'   },
                  { label: isChinese ? '红娘咨询次数' : 'Matchmaker Consultations', e: '1',   p: '∞',   el: '∞'   },
                  { label: isChinese ? '红娘配对报告' : 'Matchmaker Report',        e: false, p: true,  el: true  },
                  { label: isChinese ? '专属资深红娘' : 'Dedicated Senior MM',      e: false, p: true,  el: true  },
                  { label: isChinese ? '约会情感辅导' : 'Date Coaching',            e: false, p: true,  el: true  },
                  { label: isChinese ? '心理相容分析' : 'Psych Compatibility',      e: false, p: false, el: true  },
                  { label: isChinese ? '形象穿搭顾问' : 'Styling Consultation',     e: false, p: false, el: true  },
                  { label: isChinese ? '高端活动邀请' : 'Event Invitations',        e: false, p: '2/Q', el: '∞'   },
                  { label: isChinese ? '专属国际人脉' : 'Global Match Network',     e: false, p: false, el: true  },
                  { label: isChinese ? '24/7 热线服务' : '24/7 Phone Access',       e: false, p: false, el: true  },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-zinc-900/80 ${i % 2 === 0 ? 'bg-[#111]' : 'bg-[#0f0f0f]'}`}>
                    <td className="px-6 py-4 text-[#9A8F8A] font-medium">{row.label}</td>
                    {[row.e, row.p, row.el].map((val, j) => (
                      <td key={j} className="px-6 py-4 text-center">
                        {val === true  && <Check className="w-4 h-4 text-[#C0392B] mx-auto" />}
                        {val === false && <span className="w-4 h-0.5 bg-zinc-800 block mx-auto rounded" />}
                        {typeof val === 'string' && (
                          <span className="font-bold text-[#F5F0EB]">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── FAQ ── */}
        <motion.div {...fadeUp(0.2)} className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-rule" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F0EB] mb-3">
              {isChinese ? '常见问题解答' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openFaq === i
                    ? 'border-[#C0392B]/40 bg-[#160808]'
                    : 'border-zinc-800/80 bg-[#111] hover:border-zinc-700'
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-sm text-[#F5F0EB]">
                    {isChinese ? faq.qCN : faq.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openFaq === i
                        ? 'bg-[#C0392B] border-[#C0392B] rotate-45'
                        : 'border-zinc-700'
                    }`}
                  >
                    <span className="text-white font-bold text-sm leading-none">+</span>
                  </div>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-sm text-[#9A8F8A] leading-relaxed border-t border-zinc-800/60 pt-4">
                      {isChinese ? faq.aCN : faq.a}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div {...fadeUp(0.1)} className="mt-20 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#96000F] via-[#C0392B] to-[#96000F]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,83,0.15)_0%,transparent_60%)]" />
          <div className="relative px-8 py-16 text-center flex flex-col items-center gap-6">
            <Heart className="w-10 h-10 text-white/30 fill-current" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              {isChinese ? '准备好开始了吗？' : 'Ready to Find the One?'}
            </h2>
            <p className="text-white/70 text-sm max-w-lg leading-relaxed">
              {isChinese
                ? '加入数千名认真寻爱的单身精英，以诚心取代算法，用匠心缔造良缘。'
                : 'Join thousands of serious singles who chose intentional matchmaking over endless swiping.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/register')}
                className="px-10 py-4 rounded-2xl bg-white text-[#C0392B] font-bold text-sm uppercase tracking-wider hover:bg-[#F5F0EB] transition-colors shadow-lg"
              >
                {isChinese ? '立即免费注册' : 'Start Free Today'}
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-4 rounded-2xl border-2 border-white/30 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                {isChinese ? '联系红娘咨询' : 'Talk to a Matchmaker'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default PlansPage;
