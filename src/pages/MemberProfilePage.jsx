import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageWrapper } from '../components/layout/PageWrapper';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { ProfileHeader } from '../components/sections/profile/ProfileHeader';
import { ProfileBio } from '../components/sections/profile/ProfileBio';
import { ProfileDetails } from '../components/sections/profile/ProfileDetails';
import { MatchmakerReport } from '../components/sections/profile/MatchmakerReport';
import { mockMembers } from '../data/mockMembers';
import { ArrowLeft, User, Eye, Heart, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const MemberProfilePage = ({ isLoggedIn, isChinese }) => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const member = mockMembers.find((m) => m.id === Number(id));

  if (!member) {
    return (
      <PageWrapper className="w-full pt-32">
        <SectionWrapper>
          <div className="text-center py-20 max-w-md mx-auto">
            <HelpCircle className="w-16 h-16 text-[#C0392B] mx-auto mb-6" />
            <h2 className="font-serif text-2xl font-bold mb-4">{isChinese ? '未找到会员档案' : 'Profile Not Found'}</h2>
            <p className="text-sm text-[#9A8F8A] mb-8">
              {isChinese
                ? '您所寻找的会员档案可能已被下线，或该ID不存在。请回到精选会员页面继续寻找。'
                : 'The profile you are looking for does not exist or has been set to private.'}
            </p>
            <Link to="/members">
              <Button variant="primary">{isChinese ? '返回会员列表' : 'Back to Members'}</Button>
            </Link>
          </div>
        </SectionWrapper>
      </PageWrapper>
    );
  }

  const tabs = [
    { id: 'overview', label: isChinese ? '背景概览' : 'Overview' },
    { id: 'lifestyle', label: isChinese ? '生活习惯' : 'Lifestyle' },
    { id: 'goals', label: isChinese ? '情感期望' : 'Relationship Goals' },
    { id: 'report', label: isChinese ? '红娘深度评估' : 'Matchmaker Report' },
  ];

  return (
    <PageWrapper className="w-full pt-24 text-left">
      <SectionWrapper bg="dark">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/members"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#9A8F8A] hover:text-[#E74C3C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isChinese ? '返回会员列表' : 'Back to Members'}</span>
          </Link>
        </div>

        {/* Profile Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column (Demographics Sidebar - span 4) */}
          <div className="lg:col-span-4 w-full">
            <ProfileHeader
              member={member}
              isLoggedIn={isLoggedIn}
              isChinese={isChinese}
            />
          </div>

          {/* Right Column (Tabs + Detailed content - span 8) */}
          <div className="lg:col-span-8 w-full flex flex-col gap-6">
            {/* Tab Navigation */}
            <div className="flex border-b border-zinc-800 overflow-x-auto scrollbar-none gap-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-4 text-xs md:text-sm uppercase tracking-wider font-semibold whitespace-nowrap border-b-2 transition-all duration-300 ${
                      isActive
                        ? 'border-[#C0392B] text-[#E74C3C]'
                        : 'border-transparent text-[#9A8F8A] hover:text-[#F5F0EB]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content Rendering */}
            <div className="mt-4">
              {activeTab === 'overview' && (
                <ProfileBio member={member} isChinese={isChinese} />
              )}
              
              {activeTab === 'lifestyle' && (
                <ProfileDetails member={member} tab="lifestyle" isChinese={isChinese} />
              )}
              
              {activeTab === 'goals' && (
                <ProfileDetails member={member} tab="goals" isChinese={isChinese} />
              )}
              
              {activeTab === 'report' && (
                <MatchmakerReport member={member} isChinese={isChinese} />
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};
export default MemberProfilePage;
