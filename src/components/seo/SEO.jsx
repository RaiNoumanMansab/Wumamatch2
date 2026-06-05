import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, isChinese }) => {
  const siteName = 'WuMa Match';
  const defaultTitle = isChinese ? '全球顶级华人私密婚恋 | WuMa Match' : 'Elite Matchmaking for Asian Professionals | WuMa Match';
  const defaultDescription = isChinese 
    ? 'WuMa Match 是专为海外华人精英设计的人工定制红娘服务。无算法、无划卡——由资深红娘顾问为您手工甄选完美伴侣。'
    : 'WuMa Match offers elite, human-curated matchmaking for Asian professionals. No algorithms, no swiping, just expert matchmakers dedicated to finding your perfect match.';

  const seoTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const seoDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
    </Helmet>
  );
};
