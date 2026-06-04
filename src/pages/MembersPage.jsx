import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../components/layout/PageWrapper';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { MemberFilters } from '../components/sections/members/MemberFilters';
import { MemberCard } from '../components/sections/members/MemberCard';
import { mockMembers } from '../data/mockMembers';
import { Sparkles, Info } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const MembersPage = ({ isLoggedIn, isChinese }) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    gender: 'All',
    minAge: 25,
    maxAge: 45,
    country: 'All',
    verificationStatus: 'All'
  });

  const [displayedMembers, setDisplayedMembers] = useState(mockMembers);

  const handleSearch = () => {
    const filtered = mockMembers.filter((m) => {
      const matchGender = filters.gender === 'All' || m.gender === filters.gender;
      const matchCountry = filters.country === 'All' || m.country === filters.country;
      const matchAge = m.age >= filters.minAge && m.age <= filters.maxAge;
      const matchVerify = filters.verificationStatus === 'All' || m.verificationStatus === filters.verificationStatus;
      return matchGender && matchCountry && matchAge && matchVerify;
    });
    setDisplayedMembers(filtered);
  };

  return (
    <PageWrapper className="w-full pt-20">
      {/* Unauthenticated Alert Banner */}
      {!isLoggedIn && (
        <div className="bg-gradient-to-r from-[#D4A853] via-[#B38F44] to-[#D4A853] text-[#0D0D0D] py-3.5 px-6 font-semibold text-xs md:text-sm tracking-wider uppercase text-center flex flex-col sm:flex-row items-center justify-center gap-3 shadow-lg z-30 relative">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 flex-shrink-0" />
            <span>
              {isChinese
                ? '您当前正在以访客身份浏览受限档案。立即注册加入，即可查看高清照片和红娘报告。'
                : 'You are viewing limited profiles. Join WuMa Match to unlock full profiles & reports.'}
            </span>
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="bg-[#0D0D0D] text-white hover:bg-zinc-800 hover:text-white border-none py-1.5 px-4 font-bold scale-90 sm:scale-100"
            onClick={() => navigate('/register')}
          >
            {isChinese ? '立即注册' : 'Register Now'}
          </Button>
        </div>
      )}

      {/* Main content section */}
      <SectionWrapper bg="dark">
        <div className="text-left mb-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F0EB] mb-3">
            {isChinese ? '甄选单身精英' : 'Elite Verified Singles'}
          </h1>
          <p className="text-xs md:text-sm text-[#9A8F8A] font-light max-w-xl leading-relaxed">
            {isChinese
              ? 'WuMa 平台的所有会员均已完成身份和实人核验。为了保障会员隐私，您需要注册并登录您的尊贵会员账号以开启高清照片和完整档案。'
              : 'Every single on WuMa is strictly verified. To protect community privacy, active login is required to reveal full profiles.'}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <MemberFilters
            filters={filters}
            onChange={setFilters}
            onSearch={handleSearch}
            isChinese={isChinese}
          />
        </div>

        {/* Members Directory Grid */}
        {displayedMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedMembers.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                isLoggedIn={isLoggedIn}
                isChinese={isChinese}
              />
            ))}
          </div>
        ) : (
          <div className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-16 text-center max-w-lg mx-auto">
            <Sparkles className="w-10 h-10 text-[#D4A853] mx-auto mb-4 animate-pulse" />
            <h3 className="font-serif text-lg font-bold text-[#F5F0EB] mb-2">
              {isChinese ? '未找到符合条件的会员' : 'No Members Match Your Criteria'}
            </h3>
            <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
              {isChinese
                ? '我们暂时没有完全匹配该筛选条件的实名会员。请尝试放宽筛选要求，或直接预约我们的专业红娘为您人工检索数据库。'
                : 'We currently don\'t have verified members matching these exact filters. Try broadening your criteria or consult our matchmakers.'}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setFilters({ gender: 'All', minAge: 25, maxAge: 45, country: 'All', verificationStatus: 'All' });
                setDisplayedMembers(mockMembers);
              }}
            >
              {isChinese ? '重置筛选条件' : 'Reset Filters'}
            </Button>
          </div>
        )}
      </SectionWrapper>
    </PageWrapper>
  );
};
export default MembersPage;
