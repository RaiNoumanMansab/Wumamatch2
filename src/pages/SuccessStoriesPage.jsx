import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Divider } from '../components/ui/Divider';
import { mockSuccessStories } from '../data/mockSuccessStories';
import { Quote, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const SuccessStoriesPage = ({ isChinese }) => {
  const featuredStory = mockSuccessStories[0];
  const otherStories = mockSuccessStories.slice(1);

  return (
    <PageWrapper className="w-full pt-20">
      {/* Hero Headings */}
      <div className="bg-gradient-to-b from-[#180303] via-[#0D0D0D] to-[#0D0D0D] py-16 px-6 text-center border-b border-[#C0392B]/10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5F0EB] mb-4">
            {isChinese ? '在 WuMa 收获的真爱故事' : 'Love Stories That Started Here'}
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-[#D4A853] mb-6">
            {isChinese ? '相知于人海，相守于白头' : 'Where intentional matching results in lifetime commitment'}
          </p>
          <Divider icon />
        </div>
      </div>

      {/* Main Section */}
      <SectionWrapper bg="dark">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          
          {/* 1. Featured full-width story */}
          {featuredStory && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card variant="gold" className="p-6 md:p-10 bg-[#161616] border-[#D4A853]/30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
                  {/* Photo Left */}
                  <div className="lg:col-span-5 relative rounded overflow-hidden aspect-[4/3] border border-zinc-800 shadow-2xl">
                    <img
                      src={featuredStory.photo}
                      alt={featuredStory.names}
                      className="w-full h-full object-cover filter blur-[3px] brightness-50 select-none pointer-events-none scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <span className="text-xs text-[#D4A853] font-bold uppercase tracking-widest mb-1">
                        {isChinese ? '本期推荐成功故事' : 'Featured Story'}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#F5F0EB]">
                        {isChinese ? '会员 A & 会员 B' : 'Member A & Member B'}
                      </h3>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold mt-1">
                        {featuredStory.city} • {featuredStory.yearMatched}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 bg-zinc-950/80 p-2 rounded-full border border-zinc-800 animate-pulse">
                      <Heart className="w-5 h-5 text-[#C0392B] fill-current" />
                    </div>
                  </div>

                  {/* Testimonial Quote Right */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="relative pl-8 mb-6">
                      <Quote className="w-8 h-8 text-[#C0392B]/30 absolute top-0 left-0" />
                      <p className="font-serif text-sm md:text-base text-[#F5F0EB]/90 italic leading-relaxed font-light mb-6">
                        "{featuredStory.quote}"
                      </p>
                    </div>
                    <div className="border-t border-zinc-850 pt-4 flex justify-between items-center text-xs uppercase tracking-widest font-semibold text-zinc-500">
                      <div className="flex items-center gap-1.5 text-[#D4A853]">
                        <Sparkles className="w-4 h-4 text-[#D4A853]" />
                        <span>Matched by {featuredStory.matchmakerName}</span>
                      </div>
                      <span className="text-[#E74C3C]">{isChinese ? '已步入婚姻殿堂' : 'Happily Married ✓'}</span>
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
                  className="w-full p-6 bg-[#111111]/85 hover:bg-[#151515] border-zinc-800/80 flex flex-col justify-between text-left relative overflow-hidden"
                >
                  <div className="relative mb-6 rounded overflow-hidden aspect-[16/10] border border-zinc-900 shadow-md">
                    <img
                      src={story.photo}
                      alt={story.names}
                      className="w-full h-full object-cover filter blur-[4px] brightness-50 select-none pointer-events-none scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4">
                      <span className="text-[10px] text-[#D4A853] font-serif italic mb-0.5">
                        Matched by {story.matchmakerName}
                      </span>
                      <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">
                        {story.city} • {story.yearMatched}
                      </span>
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div className="relative pl-6 mb-6">
                      <Quote className="w-5 h-5 text-[#C0392B]/20 absolute top-0 left-0" />
                      <p className="font-serif text-xs md:text-sm text-[#9A8F8A] leading-relaxed italic font-light">
                        "{story.quote}"
                      </p>
                    </div>

                    <div className="border-t border-zinc-900 pt-4 flex justify-between items-center text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                      <span>{isChinese ? '会员 A & 会员 B' : 'Member A & Member B'}</span>
                      <span className="text-[#C0392B]">{isChinese ? '喜结良缘 ✓' : 'Matched ✓'}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};
export default SuccessStoriesPage;
