import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { HeroSection } from '../components/sections/home/HeroSection';
import { StatsBanner } from '../components/sections/home/StatsBanner';
import { HowItWorksSection } from '../components/sections/home/HowItWorksSection';
import { FeaturedMembersSection } from '../components/sections/home/FeaturedMembersSection';
import { WhyWuMaSection } from '../components/sections/home/WhyWuMaSection';
import { MatchmakerTeamSection } from '../components/sections/home/MatchmakerTeamSection';
import { SuccessStoriesPreview } from '../components/sections/home/SuccessStoriesPreview';
import { BlogPreviewSection } from '../components/sections/home/BlogPreviewSection';
import { CTASection } from '../components/sections/home/CTASection';

export const HomePage = ({ isLoggedIn, isChinese }) => {
  return (
    <PageWrapper className="w-full">
      <HeroSection isChinese={isChinese} />
      <StatsBanner isChinese={isChinese} />
      <HowItWorksSection isChinese={isChinese} />
      <FeaturedMembersSection isLoggedIn={isLoggedIn} isChinese={isChinese} />
      <WhyWuMaSection isChinese={isChinese} />
      <MatchmakerTeamSection isChinese={isChinese} />
      <SuccessStoriesPreview isChinese={isChinese} />
      <BlogPreviewSection isChinese={isChinese} />
      <CTASection isChinese={isChinese} />
    </PageWrapper>
  );
};
export default HomePage;
