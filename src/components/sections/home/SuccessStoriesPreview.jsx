import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Quote, Heart, ArrowRight } from 'lucide-react';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { SectionHeader } from '../../ui/SectionHeader';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { mockSuccessStories } from '../../../data/mockSuccessStories';
import { fadeUp, viewportOnce } from '../../../utils/motion';

export const SuccessStoriesPreview = ({ isChinese }) => {
  const navigate = useNavigate();
  const stories = mockSuccessStories.slice(0, 3);

  return (
    <SectionWrapper id="success-stories-preview" bg="dark">
      <SectionHeader
        eyebrow={isChinese ? '真实故事' : 'Real Stories'}
        title={isChinese ? '在 WuMa 收获的真爱故事' : 'Love Stories That Started Here'}
        subtitle={
          isChinese
            ? '真实会员的真心独白。保护隐私是我们的首要原则，名字均已脱敏，让我们一同见证他们的幸福时刻。'
            : 'Genuine testimonials from verified members. Names and sensitive visual details are protected.'
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {stories.map((story, idx) => {
          return (
            <motion.div
              key={story.id}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={idx * 0.1}
              variants={fadeUp}
              className="flex"
            >
              <Card
                variant="bordered"
                className="w-full p-6 bg-white hover:bg-zinc-50/50 border border-zinc-200/60 shadow-sm flex flex-col justify-between text-left relative group overflow-hidden"
              >
                {/* Silhouette background placeholder to keep romance theme */}
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[16/10] border border-zinc-100">
                  <img
                    src={story.photo}
                    alt={story.names}
                    className="w-full h-full object-cover filter blur-[4px] brightness-75 scale-105 group-hover:scale-[1.03] duration-500 select-none pointer-events-none transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent flex flex-col justify-end p-4">
                    <span className="text-xs text-[#D4A853] font-serif italic mb-0.5">
                      Matched by {story.matchmakerName}
                    </span>
                    <span className="text-[10px] text-zinc-650 uppercase tracking-widest font-semibold">
                      {story.city} • {story.yearMatched}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 p-1.5 rounded-full border border-zinc-100 shadow-sm">
                    <Heart className="w-3.5 h-3.5 text-[#0F8A96] fill-current" />
                  </div>
                </div>

                {/* Testimonial text */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="relative pl-6">
                    <Quote className="w-5 h-5 text-[#0F8A96]/30 absolute top-0 left-0" />
                    <p className="text-xs md:text-sm text-zinc-600 leading-relaxed italic font-light font-serif mb-6 line-clamp-4">
                      "{story.quote}"
                    </p>
                  </div>

                  <div className="border-t border-zinc-100 pt-4 flex justify-between items-center text-[10px] text-zinc-450 font-semibold uppercase tracking-widest">
                    <span>
                      {isChinese ? '会员 A & 会员 B' : 'Member A & Member B'}
                    </span>
                    <span className="text-[#0F8A96]">
                      {isChinese ? '喜结连理 ✓' : 'Happily Matched ✓'}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center">
        <Button 
          variant="secondary" 
          onClick={() => navigate('/success-stories')}
          className="group px-8"
        >
          {isChinese ? '阅读更多成功故事' : 'Read More Stories'}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </SectionWrapper>
  );
};
