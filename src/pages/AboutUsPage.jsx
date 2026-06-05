import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Divider } from '../components/ui/Divider';
import { Button } from '../components/ui/Button';
import { ShieldCheck, Heart, Users, Award, EyeOff, CheckSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockMatchmakers } from '../data/mockMatchmakers';
import { SEO } from '../components/seo/SEO';

export const AboutUsPage = ({ isChinese }) => {
  const navigate = useNavigate();

  const values = [
    {
      icon: ShieldCheck,
      title: isChinese ? '绝对的信用与诚信' : 'Uncompromising Trust',
      desc: isChinese
        ? '我们对会员档案进行严苛背景审查与活体人脸实名认证，杜绝虚假、欺骗与不良意图。'
        : 'Every applicant undergoes verification, education reviews, and security checks.',
    },
    {
      icon: EyeOff,
      title: isChinese ? '至高无上的隐私权' : 'Privacy & Discretion',
      desc: isChinese
        ? '不公开发布私人敏感信息，不提供未经授权的联系方式，所有推荐在保密前提下手工运作。'
        : 'Your data is strictly confidential. No direct messaging or public contact reveals are allowed.',
    },
    {
      icon: Heart,
      title: isChinese ? '有温度的真实连接' : 'Human-to-Human Connection',
      desc: isChinese
        ? '反对冷酷的数学算法和流水线相亲。我们坚信只有富有人情味的专业沟通，才能把关终生伴侣的适配。'
        : 'We discard cold swiping apps. Our matchmakers align values, attachment styles, and lifestyles.',
    },
    {
      icon: Award,
      title: isChinese ? '卓越的高端管家服务' : 'Excellence in Service',
      desc: isChinese
        ? '不仅协助引荐，更在情感成熟度提升、约会辅导、关系建立等每个关键点，提供一对一顾问服务。'
        : 'Dedicated elite support, dating coaching, and post-date analysis throughout your search.',
    },
  ];

  return (
    <PageWrapper className="w-full pt-20">
      <SEO
        title={isChinese ? '关于我们' : 'About Us'}
        description={isChinese ? 'WuMa Match是专为海外华人精英打造的人工定制婚恋配对平台，由资深红娘顾问提供一对一匹配服务。' : 'Learn about WuMa Match — a premium, human-curated matchmaking platform for the global Chinese diaspora. Real matchmakers, real connections.'}
        isChinese={isChinese}
      />
      {/* 1. Hero banner */}
      <div
        className="relative pt-28 pb-14 px-6 text-center bg-cover bg-center overflow-hidden border-b border-zinc-200/60"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(250,247,242,0.92) 0%, rgba(230,247,246,0.95) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200')`
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(15,138,150,0.10)_0%,transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#E6F7F6] border border-[#0F8A96]/20 text-[#0F8A96] mb-5">
            <Users className="w-3 h-3" />
            {isChinese ? '关于我们' : 'Our Story'}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-[#053C42] mb-4">
            {isChinese ? '我们的使命：传递真爱' : 'Our Mission: Meaningful Connections'}
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-widest font-bold text-[#D4A853] mb-6">
            {isChinese ? '用匠心之道，筑幸福良缘' : 'Elite global Chinese matchmaking service'}
          </p>
          <Divider icon className="!my-5" />
          <p className="text-xs md:text-sm text-zinc-550 leading-relaxed max-w-3xl font-light">
            {isChinese
              ? 'WuMa Match 专为寻求婚姻伴侣的海外单身华人精英量身打造。由资深红娘顾问团队进行多维度适配把关，致力于打破冰冷算法，帮您寻找真正的心灵归宿。'
              : 'WuMa Match is a premium, concierge matchmaking platform connecting diasporas worldwide with shared values and deep relationship goals.'}
          </p>
        </div>
      </div>

      {/* 2. Our Story Section */}
      <SectionWrapper bg="dark" className="!pt-6 md:!pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto text-left">
          <div className="flex flex-col gap-5">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#0F8A96]">
              {isChinese ? '初衷与起源' : 'OUR FOUNDATION STORY'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-800">
              {isChinese ? '源于对“执子之手，与子偕老”的执着' : 'Crafting Love Stories Globally'}
            </h2>
            <p className="text-xs md:text-sm text-zinc-550 leading-relaxed font-light">
              {isChinese
                ? '我们发现，在这个充满了划卡社交软件的时代，想要寻找一段真诚、以婚姻为导向的关系变得无比艰难。特别是对于生活在海外的华人留学生、高素质白领和创业精英们，由于工作节奏紧张、圈子局限，想要遇到价值观和家庭观念完全契合的另一半，往往需要耗费大量的心力。'
                : 'In an era dominated by instant hookup apps and mathematical swiping algorithms, serious relationship discovery has been neglected. For global professionals and Chinese diaspora, finding high-quality matches who respect family heritage and long-term commitments remains a massive hurdle.'}
            </p>
            <p className="text-xs md:text-sm text-zinc-550 leading-relaxed font-light">
              {isChinese
                ? '为此，我们联合了多位资深心理学家和红娘配对顾问，创立了 WuMa Match。我们抛弃了大众软件追求海量匹配的浮躁，采用严谨的实名身份审查、深度的情感依恋模型评估以及红娘顾问多对一沟通，力求将最对的那个灵魂，直接引荐给您。'
                : 'That is why we launched WuMa. We combine rigorous verification, deep psychological profiling, and personal concierge introduction facilitation. Our expert matchmakers ensure that every single interaction has weight, purpose, and clear direction.'}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-zinc-200/80 shadow-sm shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Team office working" 
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-[#E6F7F6]/10 mix-blend-overlay" />
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Core Values */}
      <SectionWrapper bg="darker">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#0F8A96] block mb-3">
            {isChinese ? '核心价值' : 'OUR FOUNDATION'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-800 mb-4">
            {isChinese ? '我们的核心价值观' : 'Our Core Pillars'}
          </h2>
          <Divider className="!my-5 max-w-xs mx-auto" />
          <p className="text-sm md:text-base text-zinc-550 font-light leading-relaxed max-w-2xl mx-auto">
            {isChinese
              ? '为了给会员建立一个崇高、私密、安全的寻爱空间，我们坚守以下四大原则：'
              : 'Our operations are guided by rigorous safety codes, strict privacy, and client dedication.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left" style={{textAlign:'left'}}>
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <Card 
                key={idx} 
                variant="default" 
                className="p-6 bg-white border-zinc-200/80 shadow-sm hover:border-[#0F8A96]/40 hover:bg-white transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#E6F7F6]/30 border border-[#0F8A96]/30 flex items-center justify-center text-[#0F8A96]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-zinc-800 mb-2">{val.title}</h3>
                  <p className="text-xs text-zinc-550 leading-relaxed font-light">{val.desc}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 4. Matchmaker Team profiles */}
      <SectionWrapper bg="dark">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#0F8A96] block mb-3">
            {isChinese ? '专属顾问团队' : 'THE EXPERTS BEHIND WUMA'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-800 mb-4">
            {isChinese ? '认识您的红娘顾问' : 'Meet Our Matchmaker Team'}
          </h2>
          <Divider className="!my-5 max-w-xs mx-auto" />
          <p className="text-sm md:text-base text-zinc-550 font-light">
            {isChinese
              ? '我们不仅是配对的搭桥人，更是您情感升温的顾问导师。'
              : 'Real relationship experts dedicated to facilitating your ideal marital union.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left" style={{textAlign:'left'}}>
          {mockMatchmakers.map((matchmaker) => (
            <Card
              key={matchmaker.id}
              variant="bordered"
              className="group bg-white p-5 border-zinc-200/80 shadow-sm cursor-pointer hover:border-[#D4A853] hover:bg-white hover:shadow-[0_10px_30px_rgba(212,168,83,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-5 border border-zinc-200/80 shadow-sm group-hover:border-[#D4A853]/30 transition-colors duration-300">
                <img
                  src={matchmaker.photo}
                  alt={matchmaker.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-lg font-bold text-zinc-800 mb-1">{matchmaker.name}</h3>
              <p className="text-xs text-[#D4A853] uppercase tracking-wider font-bold mb-3">{matchmaker.title}</p>
              <p className="text-xs text-zinc-550 leading-relaxed font-light mb-4">{matchmaker.bio}</p>
              <div className="border-t border-zinc-150 pt-3 text-[10px] text-zinc-450 font-semibold uppercase tracking-widest flex justify-between">
                <span>{isChinese ? `成功牵线: ${matchmaker.successMatches}对` : `Success: ${matchmaker.successMatches}`}</span>
                <span>{isChinese ? `熟练母语: 中/英` : `Bilingual: EN/ZH`}</span>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. Verification & Safety standards */}
      <SectionWrapper bg="darker" className="border-t border-zinc-150">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 text-left" style={{textAlign:'left'}}>
          <div className="flex flex-col gap-4 md:w-1/2">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#0F8A96]">
              {isChinese ? '极致的合规安全' : 'VERIFICATION & COMPLIANCE'}
            </span>
            <h2 className="font-serif text-3xl font-bold text-zinc-800">
              {isChinese ? '严苛的安全审核保障' : 'Rigorous Screening Pipeline'}
            </h2>
            <p className="text-xs text-zinc-550 leading-relaxed font-light">
              {isChinese
                ? '我们视安全为WuMa Match的生命线。为了避免任何杀猪盘、骗局和虚假包装，每位入驻会员除了常规的实名身份核验外，还必须接受第三方人脸活体认证 (Liveness check) 及背景排查，全力为您守护交友净土。'
                : 'Trust is our paramount pillar. Every application undergoes third-party background screening via Checkr and biometric face verification with Veriff. Profiles containing inconsistencies are blacklisted immediately.'}
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-450">
                <CheckSquare className="w-4 h-4 text-[#D4A853]" />
                <span>Veriff {isChinese ? '活体人脸识别比对' : 'Biometric Liveness Check'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-450">
                <CheckSquare className="w-4 h-4 text-[#D4A853]" />
                <span>Checkr {isChinese ? '无犯罪背景核实' : 'Criminal Background Review'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-450">
                <CheckSquare className="w-4 h-4 text-[#D4A853]" />
                <span>{isChinese ? '学历与高净值资产真实性排查' : 'Education & Verified Asset Auditing'}</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-white border border-[#0F8A96]/30 p-6 rounded-2xl flex flex-col gap-4 text-center">
            <div className="w-12 h-12 rounded-full bg-[#E6F7F6]/40 border border-[#0F8A96]/40 text-[#0F8A96] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-zinc-800">
              {isChinese ? '提交您的实名核验申请' : 'Get Verified Today'}
            </h3>
            <p className="text-xs text-zinc-550 leading-relaxed max-w-sm mx-auto font-light">
              {isChinese
                ? '想要建立真诚、平等的对话？立即完成您的高级实名会员申请。'
                : 'Join a verified network of serious singles who value real commitment and trust.'}
            </p>
            <Button
              variant="primary"
              className="mt-4 mx-auto"
              onClick={() => navigate('/register')}
            >
              {isChinese ? '开始实名申请' : 'Begin Verification'}
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};
export default AboutUsPage;
