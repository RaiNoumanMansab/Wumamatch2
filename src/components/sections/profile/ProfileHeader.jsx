import React, { useState, useEffect } from 'react';
import { Crown, Calendar, Lock, Check } from 'lucide-react';
import { Card } from '../../ui/Card';
import { Avatar } from '../../ui/Avatar';
import { Button } from '../../ui/Button';
import { Modal } from '../../ui/Modal';
import { sentRequests } from '../../../data/mockCurrentUser';

const STORAGE_KEY = 'wuma-consult-requests';

const isConsultRequested = (memberId) => {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  return sentRequests.some((r) => r.memberId === memberId) || stored.includes(memberId);
};

const markConsultRequested = (memberId) => {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  if (!stored.includes(memberId)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...stored, memberId]));
  }
};

export const ProfileHeader = ({ member, isLoggedIn, isChinese }) => {
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [consultRequested, setConsultRequested] = useState(() => isConsultRequested(member.id));

  useEffect(() => {
    setConsultRequested(isConsultRequested(member.id));
  }, [member.id]);

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    markConsultRequested(member.id);
    setConsultRequested(true);
    setShowConsultModal(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full lg:sticky lg:top-24">
      <Card variant="bordered" className="p-6 flex flex-col items-center border-[#C0392B]/20 bg-[#111111]">
        <div className="relative mb-6">
          <Avatar
            src={member.photo}
            size="xl"
            blurred={!isLoggedIn}
          />
        </div>

        {member.verificationStatus === 'premium-verified' && (
          <div className="w-full flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-950/60 border border-[#D4A853]/35 text-[10px] font-bold uppercase tracking-wider text-[#D4A853]">
              <Crown className="w-3.5 h-3.5" />
              <span>{isChinese ? '高端尊贵认证' : 'Premium Verified'}</span>
            </span>
          </div>
        )}

        <div className="w-full flex flex-col gap-3 mb-6">
          {isLoggedIn ? (
            <Button
              variant={consultRequested ? 'secondary' : 'primary'}
              className="w-full text-xs"
              disabled={consultRequested}
              onClick={() => setShowConsultModal(true)}
            >
              {consultRequested ? (
                <Check className="w-4 h-4 mr-2" />
              ) : (
                <Calendar className="w-4 h-4 mr-2" />
              )}
              <span>
                {consultRequested
                  ? (isChinese ? '已申请' : 'Requested')
                  : (isChinese ? '预约红娘配对咨询' : 'Request Consultation')}
              </span>
            </Button>
          ) : (
            <div className="w-full bg-[#1A1A1A] border border-zinc-800 rounded p-4 text-center">
              <Lock className="w-5 h-5 text-[#D4A853] mx-auto mb-2" />
              <p className="text-[10px] text-[#9A8F8A] uppercase tracking-widest font-semibold leading-relaxed mb-3">
                {isChinese ? '身份安全保护中' : 'Profile Actions Locked'}
              </p>
              <p className="text-[11px] text-zinc-500 mb-3">
                {isChinese ? '登录尊贵会员，即可预约红娘配对咨询' : 'Join WuMa Match to request a matchmaker consultation.'}
              </p>
            </div>
          )}
        </div>

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
              {isChinese ? '确认申请' : 'Confirm Request'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
