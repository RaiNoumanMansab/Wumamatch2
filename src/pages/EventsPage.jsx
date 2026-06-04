import React, { useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { Divider } from '../components/ui/Divider';
import { mockEvents } from '../data/mockEvents';
import { Calendar, MapPin, Users, Ticket, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const EventsPage = ({ isChinese }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeredSuccess, setRegisteredSuccess] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegisteredSuccess(true);
  };

  return (
    <PageWrapper className="w-full pt-20">
      <div className="bg-gradient-to-b from-[#180303] via-[#0D0D0D] to-[#0D0D0D] pt-20 pb-8 px-6 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5F0EB] mb-4">
            {isChinese ? '高端社交活动' : 'Exclusive VIP Mixers & Events'}
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#D4A853] mb-6">
            {isChinese ? '为认证会员手工搭建的高雅见面派对' : 'Curated physical settings to spark real romantic chemistry'}
          </p>
          <Divider icon className="!my-5" />
          <p className="text-xs md:text-sm text-[#9A8F8A] leading-relaxed max-w-3xl font-light">
            {isChinese
              ? '为了创造轻松惬意的初识场景，我们定期在悉尼、温哥华、旧金山和新加坡等华人聚集中心举办高定鸡尾酒派对、红酒品鉴及私密画廊艺术沙龙。仅限WuMa核验实名会员受邀参加。'
              : 'To help build connections in person, we run seasonal private wine tastings, art gallery mixers, and structured formal dinners. Strictly restricted to verified active members.'}
          </p>
        </div>
      </div>

      {/* Main Section */}
      <SectionWrapper bg="dark" className="!pt-6 md:!pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                className="w-full bg-[#111111] hover:bg-[#151515] border-zinc-800 flex flex-col justify-between overflow-hidden"
              >
                {/* Event Image Banner */}
                <div className="relative aspect-[16/9] border-b border-zinc-900">
                  <img
                    src={event.photo}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Status Overlay */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-950/80 border border-[#D4A853]/40 text-[#D4A853] shadow-md animate-pulse">
                      Ticket Reserved for Members
                    </span>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#F5F0EB] mb-4">
                      {event.title}
                    </h3>
                    
                    {/* Meta lists */}
                    <div className="flex flex-col gap-2.5 text-xs text-[#9A8F8A] mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#C0392B]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#C0392B]" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#C0392B]" />
                        <span className="text-[#D4A853] font-bold">
                          {isChinese 
                            ? `仅剩 ${event.spotsRemaining} 个名额 / 总共 ${event.totalSpots} 位` 
                            : `${event.spotsRemaining} spots left / ${event.totalSpots} seats total`
                          }
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#9A8F8A] leading-relaxed mb-6 font-light">
                      {event.description}
                    </p>
                  </div>

                  <Button
                    variant="primary"
                    className="w-full text-xs"
                    onClick={() => {
                      setSelectedEvent(event);
                      setRegisteredSuccess(false);
                    }}
                  >
                    <Ticket className="w-4 h-4 mr-2" />
                    <span>{isChinese ? '申请入场预约' : 'Register Interest'}</span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Booking Modal */}
      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent ? (isChinese ? '预约席位申请' : 'Register for Event') : ''}
      >
        {selectedEvent && (
          <div className="text-xs md:text-sm text-[#9A8F8A]">
            {!registeredSuccess ? (
              <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-4">
                <p className="leading-relaxed">
                  {isChinese
                    ? `您正在申请参加：${selectedEvent.title}。`
                    : `You are requesting entry to: ${selectedEvent.title}.`}
                </p>
                <div className="bg-[#3B0000]/10 border border-[#C0392B]/20 p-3.5 rounded-2xl text-left">
                  <span className="font-bold text-[#E74C3C] block mb-1">
                    {isChinese ? '✓ 实名实人入场把关' : '✓ Verification Entry Requirement'}
                  </span>
                  <p className="text-[11px] leading-relaxed">
                    {isChinese
                      ? '为了保障活动安全与品质，所有线下社交Mixer仅对完成实名征信认证的WuMa会员开放。初审通过后，我们将为您锁定名额并由红娘顾问团队进行邮件通知确认。'
                      : 'To preserve matchmaking quality and security, mixers are strictly for verified members. If approved, we will lock your seat and notify you by email.'}
                  </p>
                </div>
                <div className="flex justify-end gap-3 mt-4">
                  <Button variant="secondary" size="sm" onClick={() => setSelectedEvent(null)}>
                    {isChinese ? '取消' : 'Cancel'}
                  </Button>
                  <Button type="submit" variant="primary" size="sm">
                    {isChinese ? '确认申请预约' : 'Confirm Registration'}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center flex flex-col items-center gap-4">
                <CheckCircle2 className="w-12 h-12 text-[#E74C3C] animate-bounce" />
                <h3 className="font-serif text-lg font-bold text-[#F5F0EB]">
                  {isChinese ? '预约席位已提交！' : 'Interest Logged Successfully'}
                </h3>
                <p className="text-[11px] text-[#9A8F8A] leading-relaxed max-w-sm mx-auto">
                  {isChinese
                    ? '您的活动席位申请已提交至红娘团队审核，我们将在审核完成并校验会员状态后，于1-2个工作日内向您发送正式确认及地点门票信息。'
                    : 'Your seat request has been logged. Our concierge will verify your membership and mail event directions.'}
                </p>
                <Button variant="ghost" size="sm" className="mt-2" onClick={() => setSelectedEvent(null)}>
                  {isChinese ? '关闭' : 'Close'}
                </Button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </PageWrapper>
  );
};
export default EventsPage;
