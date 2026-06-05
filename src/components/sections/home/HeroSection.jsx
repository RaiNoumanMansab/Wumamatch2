import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, ShieldCheck, UserCheck, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../../ui/Button';
import { EASE_OUT } from '../../../utils/motion';

/* More hearts with brighter colors and higher opacity */
const HEARTS = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 6.5)}%`,
  delay: `${i * 1.2}s`,
  duration: `${14 + (i % 4) * 3}s`,
  size: 14 + (i % 3) * 6,
  color: i % 2 === 0 ? '#B38F44' : '#0A636D', // Darker gold and teal
  opacity: 0.6 + (i % 3) * 0.2, // Higher opacity (0.6 to 1.0)
}));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

const HERO_IMAGE = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80';

export const HeroSection = ({ isChinese }) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[100svh] w-full flex flex-col items-center justify-center pt-[88px] pb-12 lg:pb-0">

      {/* ── Light base + teal/gold radial glow ── */}
      <div className="absolute inset-0 bg-[#EDF6F6]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_50%,rgba(15,138,150,0.12)_0%,transparent_70%)] animate-soft-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,rgba(212,168,83,0.06)_0%,transparent_65%)]" />

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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center overflow-visible">

        {/* ── LEFT – Copy ── */}
        <div className="flex flex-col items-start justify-center min-h-[320px] lg:col-span-5">

          {/* Eyebrow badge */}
          <motion.div {...fadeUp(0)} className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#E6F7F6] border border-[#0F8A96]/20 text-[#0F8A96] shadow-[0_0_20px_rgba(15,138,150,0.05)]">
              <Star className="w-3 h-3 fill-current text-[#D4A853]" />
              {isChinese ? '全球顶级华人私密婚恋' : 'Elite Human-Curated Matchmaking'}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.15)}
            className="font-serif text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.1] text-[#053C42] mb-4"
          >
            {isChinese ? (
              <>
                让真诚的灵魂<br />
                在<span className="text-teal-gradient italic"> 此相遇</span>
              </>
            ) : (
              <>
                Where Serious Hearts<br />
                Find Their <span className="text-teal-gradient italic">Forever</span>
              </>
            )}
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            {...fadeUp(0.28)}
            className="text-zinc-655 text-sm md:text-base leading-relaxed max-w-[460px] mb-5 font-light"
          >
            {isChinese
              ? 'WuMa Match 是专为海外华人精英设计的人工定制红娘服务。无算法、无划卡——由资深红娘顾问为您手工甄选完美伴侣。'
              : 'No algorithms. No swiping. Just expert human matchmakers dedicated to your perfect match.'}
          </motion.p>

          {/* CTA buttons — compact width, taller tap area */}
          <motion.div {...fadeUp(0.4)} className="flex flex-row gap-3 items-center flex-wrap">
            <Button
              variant="primary"
              size="md"
              className="group gap-2 px-6 py-3.5 text-sm whitespace-nowrap w-fit"
              onClick={() => navigate('/register')}
            >
              {isChinese ? '开启寻爱之旅' : 'Begin Your Journey'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust pillars */}
          <motion.div
            {...fadeUp(0.52)}
            className="flex gap-6 w-full mt-5 pt-4 border-t border-zinc-200/60"
          >
            {[
              { icon: ShieldCheck, color: '#D4A853', text: isChinese ? '实名认证' : 'Identity Verified' },
              { icon: UserCheck,   color: '#0F8A96', text: isChinese ? '人工红娘' : 'Human Matchmakers' },
              { icon: Sparkles,    color: '#D4A853', text: isChinese ? '管家服务' : 'Concierge Service' },
            ].map(({ icon: Icon, color, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />
                <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-450">
                  {text}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* ── RIGHT – Couple image composition ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE_OUT }}
          className="relative hidden lg:flex items-center justify-end w-full lg:col-span-7 overflow-visible pl-4"
        >
          {/* Glow blob behind image */}
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(15,138,150,0.15)_0%,transparent_70%)] blur-2xl scale-110 pointer-events-none" />

          {/* mx reserves space so half-outside badges are not clipped */}
          <div className="relative w-full mx-8">
            <div className="relative w-full rounded-3xl overflow-hidden border border-zinc-200/50 shadow-[0_30px_60px_rgba(15,138,150,0.08)]">
              <img
                src={HERO_IMAGE}
                alt="Happy couple"
                width={800}
                height={520}
                className="block w-full h-[360px] xl:h-[400px] object-cover object-[center_35%]"
              />
              {/* Teal and gold tint to perfectly match theme */}
              <div className="absolute inset-0 bg-[#0F8A96]/10 mix-blend-color pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F8A96]/10 to-[#D4A853]/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#EDF6F6]/80 via-transparent pointer-events-none" />
            </div>

            {/* New Match tag */}
            <div className="absolute right-0 top-8 z-20 translate-x-1/2">
              <div className="bg-white/95 backdrop-blur-md border border-[#D4A853]/30 rounded-2xl px-3 py-2.5 shadow-lg flex items-center gap-2.5 whitespace-nowrap">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#E6F7F6] border border-[#0F8A96]/30 flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5 text-[#0F8A96] fill-current" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-zinc-450 font-semibold">
                    {isChinese ? '新配对' : 'New Match'}
                  </p>
                  <p className="text-[11px] font-bold text-[#053C42] leading-tight">
                    {isChinese ? '今日完成 3 对' : '3 Introductions Today'}
                  </p>
                </div>
              </div>
            </div>

            {/* Matchmakers tag */}
            <div className="absolute left-0 bottom-6 z-20 -translate-x-1/3">
              <div className="bg-white/95 backdrop-blur-md border border-[#D4A853]/30 rounded-2xl px-4 py-3 shadow-lg min-w-[148px]">
                <p className="text-[9px] uppercase tracking-widest text-[#D4A853] font-bold mb-1">
                  {isChinese ? '红娘团队' : 'Matchmakers'}
                </p>
                <div className="flex -space-x-2 h-8 items-center">
                  {['women/32', 'women/44', 'men/33'].map((p) => (
                    <img
                      key={p}
                      src={`https://randomuser.me/api/portraits/${p}.jpg`}
                      width={32}
                      height={32}
                      loading="eager"
                      className="w-8 h-8 shrink-0 rounded-full border-2 border-white object-cover"
                      alt=""
                    />
                  ))}
                </div>
                <p className="text-[10px] text-zinc-450 mt-1.5 font-medium">
                  12 {isChinese ? '位专家在线' : 'experts online'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile-only couple image (full width, below text) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="lg:hidden relative rounded-2xl overflow-hidden border border-zinc-200/60 shadow-lg"
        >
          <img
            src={HERO_IMAGE}
            alt="Happy couple"
            className="w-full h-80 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#EDF6F6]/50 via-transparent" />
        </motion.div>

      </div>


      {/* ── Bottom fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#EDF6F6] to-transparent pointer-events-none z-20" />
    </div>
  );
};
