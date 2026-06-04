import React, { useState } from 'react';
import { ShieldCheck, Crown, Heart, Calendar, Lock } from 'lucide-react';
import { Card } from '../../ui/Card';
import { Avatar } from '../../ui/Avatar';
import { Button } from '../../ui/Button';
import { Modal } from '../../ui/Modal';

export const ProfileHeader = ({ member, isLoggedIn, isChinese }) => {
  const [introRequested, setIntroRequested] = useState(false);
  const [showIntroModal, setShowIntroModal] = useState(false);
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [consultRequested, setConsultRequested] = useState(false);

  const handleRequestIntroSubmit = (e) => {
    e.preventDefault();
    setIntroRequested(true);
    setShowIntroModal(false);
  };

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    setConsultRequested(true);
    setShowConsultModal(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full lg:sticky lg:top-24">
      {/* Primary Info Card */}
      <Card variant="bordered" className="p-6 flex flex-col items-center border-[#C0392B]/20 bg-[#111111]">
        {/* Avatar */}
        <div className="relative mb-6">
          <Avatar
            src={member.photo}
            size="xl"
            blurred={!isLoggedIn}
            badge={member.verificationStatus}
          />
        </div>

        {/* Verification Indicators */}
        <div className="w-full flex flex-col gap-2 items-center mb-6">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/30 text-[10px] font-bold uppercase tracking-wider text-blue-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isChinese ? '基础实名验证' : 'Basic Verified'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-950/60 border border-[#D4A853]/35 text-[10px] font-bold uppercase tracking-wider text-[#D4A853]">
              <Crown className="w-3.5 h-3.5" />
              <span>{isChinese ? '高端尊贵认证' : 'Premium Verified'}</span>
            </span>
          </div>
        </div>

        {/* Dynamic Header Actions */}
        <div className="w-full flex flex-col gap-3 mb-6">
          {isLoggedIn ? (
            <>
              <Button
                variant={introRequested ? 'secondary' : 'primary'}
                className="w-full text-xs"
                disabled={introRequested}
                onClick={() => setShowIntroModal(true)}
              >
                <Heart className="w-4 h-4 mr-2" />
                <span>
                  {introRequested 
                    ? (isChinese ? '红娘联络中...' : 'Introduction Pending...') 
                    : (isChinese ? '申请红娘牵线引荐' : 'Request Introduction')
                  }
                </span>
              </Button>
              <Button
                variant={consultRequested ? 'secondary' : 'ghost'}
                className="w-full text-xs"
                disabled={consultRequested}
                onClick={() => setShowConsultModal(true)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  {consultRequested
                    ? (isChinese ? '红娘已安排沟通' : 'Consultation Scheduled')
                    : (isChinese ? '预约红娘配对咨询' : 'Request Consultation')
                  }
                </span>
              </Button>
            </>
          ) : (
            <div className="w-full bg-[#1A1A1A] border border-zinc-800 rounded p-4 text-center">
              <Lock className="w-5 h-5 text-[#D4A853] mx-auto mb-2" />
              <p className="text-[10px] text-[#9A8F8A] uppercase tracking-widest font-semibold leading-relaxed mb-3">
                {isChinese ? '身份安全保护中' : 'Profile Actions Locked'}
              </p>
              <p className="text-[11px] text-zinc-500 mb-3">
                {isChinese ? '登录尊贵会员，即可向红娘申请牵线' : 'Join WuMa Match to request verified introductions.'}
              </p>
            </div>
          )}
        </div>

        {/* Member Facts Table */}
        <div className="w-full border-t border-zinc-850 pt-4 text-left">
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-3">
            {isChinese ? '基础档案概览' : 'Quick Demographics'}
          </h4>
          <div className="flex flex-col gap-2.5 text-xs">
            <div className="flex justify-between">
              <span className="text-[#9A8F8A]">{isChinese ? '年龄' : 'Age'}</span>
              <span className="text-[#F5F0EB] font-medium">{member.age}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9A8F8A]">{isChinese ? '身高' : 'Height'}</span>
              <span className="text-[#F5F0EB] font-medium">{member.height}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9A8F8A]">{isChinese ? '常住国家' : 'Residence'}</span>
              <span className="text-[#F5F0EB] font-medium">{member.city}, {member.country}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9A8F8A]">{isChinese ? '母语与外语' : 'Languages'}</span>
              <span className="text-[#F5F0EB] font-medium truncate max-w-[150px]">
                {member.languages?.join(', ')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9A8F8A]">{isChinese ? '学历程度' : 'Education'}</span>
              <span className="text-[#F5F0EB] font-medium">{member.education}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Request Intro Modal */}
      <Modal
        isOpen={showIntroModal}
        onClose={() => setShowIntroModal(false)}
        title={isChinese ? '申请红娘牵线引荐' : 'Request Official Introduction'}
      >
        <form onSubmit={handleRequestIntroSubmit} className="flex flex-col gap-4 text-xs md:text-sm text-[#9A8F8A]">
          <p className="leading-relaxed">
            {isChinese
              ? '您正在申请与该会员牵线引荐。我们的红娘顾问团队将在24小时内审核您的档案兼容性，并私下与双方沟通确认意向。'
              : 'You are requesting a facilitated introduction. Our matchmaker team will review compatibility metrics and contact both parties privately within 24 hours.'}
          </p>
          <div className="bg-[#3B0000]/10 border border-[#C0392B]/20 p-3.5 rounded text-left">
            <span className="font-bold text-[#E74C3C] block mb-1">{isChinese ? '✓ 双向选择机制' : '✓ Mutual Opt-in Policy'}</span>
            <p className="text-[11px] leading-relaxed">
              {isChinese
                ? '为了隐私和安全，红娘仅在双方均表示沟通意向后方可安排线下见面，我们不会泄露您和对方的任何私人联系方式。'
                : 'For absolute safety, introductions are only made when both parties consent. No personal email, phone numbers, or social handles will be shared publicly.'}
            </p>
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="secondary" size="sm" onClick={() => setShowIntroModal(false)}>
              {isChinese ? '取消' : 'Cancel'}
            </Button>
            <Button type="submit" variant="primary" size="sm">
              {isChinese ? '确认提交申请' : 'Confirm Request'}
            </Button>
          </div>
        </form>
      </Modal>

      {/* Request Consult Modal */}
      <Modal
        isOpen={showConsultModal}
        onClose={() => setShowConsultModal(false)}
        title={isChinese ? '预约红娘配对咨询' : 'Schedule Matchmaker Consultation'}
      >
        <form onSubmit={handleConsultSubmit} className="flex flex-col gap-4 text-xs md:text-sm text-[#9A8F8A]">
          <p className="leading-relaxed">
            {isChinese
              ? '预约红娘配对咨询以匹配此会员。您的专属顾问红娘将为您做全面的兼容性核对。'
              : 'Schedule a call to discuss your interest in this member. Your matchmaker will run custom reviews to confirm structural compatibility.'}
          </p>
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="secondary" size="sm" onClick={() => setShowConsultModal(false)}>
              {isChinese ? '取消' : 'Cancel'}
            </Button>
            <Button type="submit" variant="primary" size="sm">
              {isChinese ? '预约配对咨询' : 'Confirm Appointment'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
