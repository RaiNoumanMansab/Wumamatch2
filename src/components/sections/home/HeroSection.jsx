import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, ShieldCheck, UserCheck, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../../ui/Button';
import { EASE_OUT } from '../../../utils/motion';

/* Fewer hearts — subtle ambient effect, not overwhelming */
const HEARTS = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: `${12 + i * 15}%`,
  delay: `${i * 2.5}s`,
  duration: `${18 + i * 2}s`,
  size: 12 + (i % 2) * 4,
  color: i % 2 === 0 ? '#D4A853' : '#C0392B',
  opacity: 0.12 + (i % 3) * 0.04,
}));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

const HERO_IMAGE = '/images/hero-couple.png';

export const HeroSection = ({ isChinese }) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden flex items-center">

      {/* ── Dark base + red radial glow ── */}
      <div className="absolute inset-0 bg-[#090909]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_50%,rgba(150,0,15,0.22)_0%,transparent_70%)] animate-soft-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,rgba(192,57,43,0.08)_0%,transparent_65%)]" />

      {/* ── Floating heart particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {HEARTS.map((h) => (
          <div
            key={h.id}
            className="animate-float-heart"
            style={{
              left: h.left,
              animationDelay: h.delay,
              animationDuration: h.duration,
              color: h.color,
              opacity: h.opacity,
            }}
          >
            <Heart className="fill-current" style={{ width: h.size, height: h.size }} />
          </div>
        ))}
      </div>

      {/* ── Main grid: text left · image right ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[100svh]">

        {/* ── LEFT – Copy ── */}
        <div className="flex flex-col items-start justify-center min-h-[320px]">

          {/* Eyebrow badge */}
          <motion.div {...fadeUp(0)} className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#1a0505] border border-[#C0392B]/30 text-[#E74C3C] shadow-[0_0_20px_rgba(192,57,43,0.15)]">
              <Star className="w-3 h-3 fill-current text-[#D4A853]" />
              {isChinese ? '全球顶级华人私密婚恋' : 'Elite Human-Curated Matchmaking'}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.15)}
            className="font-serif text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.1] text-[#F5F0EB] mb-4"
          >
            {isChinese ? (
              <>
                让真诚的灵魂<br />
                在<span className="text-rose-gradient italic"> 此相遇</span>
              </>
            ) : (
              <>
                Where Serious Hearts<br />
                Find Their <span className="text-rose-gradient italic">Forever</span>
              </>
            )}
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            {...fadeUp(0.28)}
            className="text-[#9A8F8A] text-sm md:text-base leading-relaxed max-w-[460px] mb-5 font-light"
          >
            {isChinese
              ? 'WuMa Match 是专为海外华人精英设计的人工定制红娘服务。无算法、无划卡——由资深红娘顾问为您手工甄选完美伴侣。'
              : 'No algorithms. No swiping. Just expert human matchmakers dedicated to your perfect match.'}
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.4)} className="flex flex-row gap-3 w-full">
            <Button
              variant="primary"
              size="md"
              className="group gap-2 px-7"
              onClick={() => navigate('/register')}
            >
              {isChinese ? '开启寻爱之旅' : 'Begin Your Journey'}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              size="md"
              className="px-7"
              onClick={() => navigate('/plans')}
            >
              {isChinese ? '查看会员方案' : 'View Plans'}
            </Button>
          </motion.div>

          {/* Trust pillars */}
          <motion.div
            {...fadeUp(0.52)}
            className="flex gap-5 w-full mt-4 pt-4 border-t border-white/5"
          >
            {[
              { icon: ShieldCheck, color: '#D4A853', text: isChinese ? '实名认证' : 'Identity Verified' },
              { icon: UserCheck,   color: '#C0392B', text: isChinese ? '人工红娘' : 'Human Matchmakers' },
              { icon: Sparkles,    color: '#D4A853', text: isChinese ? '管家服务' : 'Concierge Service' },
            ].map(({ icon: Icon, color, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#9A8F8A]">
                  ✓ {text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT – Couple image composition ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE_OUT }}
          className="relative hidden lg:flex items-center justify-end"
        >
          {/* Glow blob behind image */}
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(192,57,43,0.25)_0%,transparent_70%)] blur-2xl scale-110" />

          {/* Main couple photo */}
          <div className="relative w-full rounded-3xl overflow-hidden border border-white/8 shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
            <img
              src={HERO_IMAGE}
              alt="Happy couple"
              className="w-full h-[340px] xl:h-[380px] object-cover object-center"
            />
            {/* Gradient overlay so text badges read cleanly */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/80 via-transparent to-[#090909]/20" />

            {/* Floating stat badge – bottom left */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3">
                <p className="text-[10px] uppercase tracking-widest text-[#9A8F8A] mb-0.5">
                  {isChinese ? '成功牵线' : 'Matches Made'}
                </p>
                <p className="font-serif text-2xl font-bold text-gold-gradient">380+</p>
              </div>
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3 text-right">
                <p className="text-[10px] uppercase tracking-widest text-[#9A8F8A] mb-0.5">
                  {isChinese ? '满意度' : 'Satisfaction'}
                </p>
                <p className="font-serif text-2xl font-bold text-gold-gradient">94%</p>
              </div>
            </div>
          </div>

          {/* Small floating card – top right overlap */}
          <div className="absolute top-8 -right-4 xl:right-0 animate-gentle-float bg-[#141414]/90 backdrop-blur-md border border-[#D4A853]/25 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#3B0000]/60 border border-[#C0392B]/40 flex items-center justify-center">
              <Heart className="w-4 h-4 text-[#C0392B] fill-current" />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-[#9A8F8A] font-semibold">
                {isChinese ? '新配对' : 'New Match'}
              </p>
              <p className="text-xs font-bold text-[#F5F0EB]">
                {isChinese ? '今日完成 3 对' : '3 Introductions Today'}
              </p>
            </div>
          </div>

          {/* Second floating card – middle left overlap */}
          <div
            className="absolute left-0 xl:-left-6 top-1/2 -translate-y-1/2 animate-gentle-float bg-[#141414]/90 backdrop-blur-md border border-[#D4A853]/25 rounded-2xl px-4 py-3 shadow-xl"
            style={{ animationDelay: '1.5s' }}
          >
            <p className="text-[9px] uppercase tracking-widest text-[#D4A853] font-bold mb-1">
              {isChinese ? '红娘团队' : 'Matchmakers'}
            </p>
            <div className="flex -space-x-2">
              {['women/32', 'women/44', 'men/33'].map((p) => (
                <img
                  key={p}
                  src={`https://randomuser.me/api/portraits/${p}.jpg`}
                  className="w-8 h-8 rounded-full border-2 border-[#141414] object-cover"
                  alt="matchmaker"
                />
              ))}
            </div>
            <p className="text-[10px] text-[#9A8F8A] mt-1.5 font-medium">12 {isChinese ? '位专家在线' : 'experts online'}</p>
          </div>
        </motion.div>

        {/* Mobile-only couple image (full width, below text) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="lg:hidden relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl"
        >
          <img
            src={HERO_IMAGE}
            alt="Happy couple"
            className="w-full h-80 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/70 via-transparent" />
        </motion.div>

      </div>

      {/* ── Bottom fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none z-20" />
    </div>
  );
};
