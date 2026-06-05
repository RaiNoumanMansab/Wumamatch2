import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Divider } from '../components/ui/Divider';
import { mockEvents } from '../data/mockEvents';
import { Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';

export const EventsPage = ({ isChinese }) => {
  return (
    <PageWrapper className="w-full pt-20">
      <SEO
        title={isChinese ? '高端社交活动' : 'Exclusive VIP Events'}
        description={isChinese ? '参与WuMa Match为认证会员精心策划的高端鸡尾酒派对、红酒品鉴及私密艺术沙龙活动。' : 'Attend exclusive WuMa Match curated events — private wine tastings, art gallery mixers, and formal dinners for verified members only.'}
        isChinese={isChinese}
      />
      <div className="relative bg-[#EDF6F6] pt-20 pb-10 px-6 text-center overflow-hidden border-b border-zinc-200/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(15,138,150,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-[#053C42] mb-4">
            {isChinese ? '高端社交活动' : 'Exclusive VIP Mixers & Events'}
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#D4A853] mb-6">
            {isChinese ? '为认证会员手工搭建的高雅见面派对' : 'Curated physical settings to spark real romantic chemistry'}
          </p>
          <Divider icon className="!my-5" />
          <p className="text-xs md:text-sm text-zinc-550 leading-relaxed max-w-3xl font-light">
            {isChinese
              ? '为了创造轻松惬意的初识场景，我们定期在悉尼、温哥华、旧金山和新加坡等华人聚集中心举办高定鸡尾酒派对、红酒品鉴及私密画廊艺术沙龙。仅限WuMa核验实名会员受邀参加。'
              : 'To help build connections in person, we run seasonal private wine tastings, art gallery mixers, and structured formal dinners. Strictly restricted to verified active members.'}
          </p>
        </div>
      </div>

      <SectionWrapper bg="dark" className="!pt-6 md:!pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {mockEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex"
            >
              <Card
                variant="bordered"
                className="w-full bg-white hover:bg-zinc-50 border-zinc-200/80 shadow-sm flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[2/1] border-b border-zinc-150">
                  <img
                    src={event.photo}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider bg-white/90 border border-[#D4A853]/50 text-[#B38F44] shadow-md">
                      {isChinese ? '会员预留席位' : 'Ticket Reserved for Members'}
                    </span>
                  </div>
                </div>

                <div className="p-4 text-left">
                  <h3 className="font-serif text-base font-bold text-zinc-800 mb-2.5 leading-snug">
                    {event.title}
                  </h3>

                  <div className="flex flex-col gap-1.5 text-[11px] text-zinc-550 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0F8A96] flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0F8A96] flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#0F8A96] flex-shrink-0" />
                      <span className="text-[#D4A853] font-bold">
                        {isChinese
                          ? `仅剩 ${event.spotsRemaining} 个名额 / 总共 ${event.totalSpots} 位`
                          : `${event.spotsRemaining} spots left / ${event.totalSpots} seats total`}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-zinc-550 leading-relaxed font-light line-clamp-3">
                    {event.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};
export default EventsPage;
