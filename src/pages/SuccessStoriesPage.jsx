import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Divider } from '../components/ui/Divider';
import { mockSuccessStories } from '../data/mockSuccessStories';
import { Quote, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { FAQSection } from '../components/sections/home/FAQSection';

export const SuccessStoriesPage = ({ isChinese }) => {
  const featuredStory = mockSuccessStories[0];
  const otherStories = mockSuccessStories.slice(1);

  return (
    <PageWrapper className="w-full pt-20">
      {/* Hero Headings */}
      <div className="relative bg-[#FAF7F2] pt-20 pb-10 px-6 text-center overflow-hidden border-b border-zinc-200/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(15,138,150,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#E6F7F6] border border-[#0F8A96]/20 text-[#0F8A96] mb-5">
            <Heart className="w-3 h-3 fill-current" />
            {isChinese ? '真实成功故事' : 'Real Success Stories'}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-[#053C42] mb-4">
            {isChinese ? '在 WuMa 收获的真爱故事' : 'Love Stories That Started Here'}
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#D4A853] mb-6">
            {isChinese ? '相知于人海，相守于白头' : 'Where intentional matching results in lifetime commitment'}
          </p>
          <Divider icon className="!mt-2 !mb-0" />
        </div>
      </div>

      {/* Main Section */}
      <SectionWrapper bg="dark" className="!pt-6 md:!pt-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          
          {/* 1. Featured full-width story */}
          {featuredStory && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card variant="gold" className="p-6 md:p-10 bg-white border-[#D4A853]/30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
                  {/* Photo Left */}
                  <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] border border-zinc-200/80 shadow-sm shadow-2xl">
                    <img
                      src={featuredStory.photo}
                      alt={featuredStory.names}
                      className="w-full h-full object-cover filter blur-[3px] brightness-50 select-none pointer-events-none scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <span className="text-xs text-[#D4A853] font-bold uppercase tracking-widest mb-1">
                        {isChinese ? '本期推荐成功故事' : 'Featured Story'}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-zinc-800">
                        {isChinese ? '会员 A & 会员 B' : 'Member A & Member B'}
                      </h3>
                      <p className="text-[10px] text-zinc-450 uppercase tracking-widest font-semibold mt-1">
                        {featuredStory.city} • {featuredStory.yearMatched}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full border border-zinc-200/80 shadow-sm animate-pulse">
                      <Heart className="w-5 h-5 text-[#0F8A96] fill-current" />
                    </div>
                  </div>

                  {/* Testimonial Quote Right */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="relative pl-8 mb-6">
                      <Quote className="w-8 h-8 text-[#0F8A96]/30 absolute top-0 left-0" />
                      <p className="font-serif text-sm md:text-base text-zinc-800/90 italic leading-relaxed font-light mb-6">
                        "{featuredStory.quote}"
                      </p>
                    </div>
                    <div className="border-t border-zinc-150 pt-4 flex justify-between items-center text-xs uppercase tracking-widest font-semibold text-zinc-450">
                      <div className="flex items-center gap-1.5 text-[#D4A853]">
                        <Sparkles className="w-4 h-4 text-[#D4A853]" />
                        <span>Matched by {featuredStory.matchmakerName}</span>
                      </div>
                      <span className="text-[#0F8A96]">{isChinese ? '已步入婚姻殿堂' : 'Happily Married ✓'}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* 2. Grid of other stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherStories.map((story, idx) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex"
              >
                <Card
                  variant="bordered"
                  className="w-full p-6 bg-white/85 hover:bg-zinc-50 border-zinc-200/60 shadow-sm flex flex-col justify-between text-left relative overflow-hidden"
                >
                  <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[16/10] border border-zinc-150 shadow-md">
                    <img
                      src={story.photo}
                      alt={story.names}
                      className="w-full h-full object-cover filter blur-[4px] brightness-50 select-none pointer-events-none scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4">
                      <span className="text-[10px] text-[#D4A853] font-serif italic mb-0.5">
                        Matched by {story.matchmakerName}
                      </span>
                      <span className="text-[9px] text-zinc-450 uppercase tracking-widest font-bold">
                        {story.city} • {story.yearMatched}
                      </span>
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div className="relative pl-6 mb-6">
                      <Quote className="w-5 h-5 text-[#0F8A96]/20 absolute top-0 left-0" />
                      <p className="font-serif text-xs md:text-sm text-zinc-550 leading-relaxed italic font-light">
                        "{story.quote}"
                      </p>
                    </div>

                    <div className="border-t border-zinc-150 pt-4 flex justify-between items-center text-[10px] text-zinc-450 uppercase tracking-widest font-bold">
                      <span>{isChinese ? '会员 A & 会员 B' : 'Member A & Member B'}</span>
                      <span className="text-[#0F8A96]">{isChinese ? '喜结良缘 ✓' : 'Matched ✓'}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <FAQSection isChinese={isChinese} />
    </PageWrapper>
  );
};
export default SuccessStoriesPage;
