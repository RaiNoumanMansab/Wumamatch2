import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Quote, Heart } from 'lucide-react';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { SectionHeader } from '../../ui/SectionHeader';
import { Card } from '../../ui/Card';
import { mockSuccessStories } from '../../../data/mockSuccessStories';
import { fadeUp, viewportOnce } from '../../../utils/motion';

export const SuccessStoriesPreview = ({ isChinese }) => {
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
                className="w-full p-6 bg-[#111111]/80 hover:bg-[#151515] border-zinc-800 flex flex-col justify-between text-left relative group overflow-hidden"
              >
                {/* Silhouette background placeholder to keep romance theme */}
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[16/10] border border-zinc-900">
                  <img
                    src={story.photo}
                    alt={story.names}
                    className="w-full h-full object-cover filter blur-[4px] brightness-50 scale-105 group-hover:scale-[1.03] duration-500 select-none pointer-events-none transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent flex flex-col justify-end p-4">
                    <span className="text-xs text-[#D4A853] font-serif italic mb-0.5">
                      Matched by {story.matchmakerName}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
                      {story.city} • {story.yearMatched}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-zinc-950/80 p-1.5 rounded-full border border-zinc-850">
                    <Heart className="w-3.5 h-3.5 text-[#C0392B] fill-current" />
                  </div>
                </div>

                {/* Testimonial text */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="relative pl-6">
                    <Quote className="w-5 h-5 text-[#C0392B]/35 absolute top-0 left-0" />
                    <p className="text-xs md:text-sm text-[#9A8F8A] leading-relaxed italic font-light font-serif mb-6 line-clamp-4">
                      "{story.quote}"
                    </p>
                  </div>

                  <div className="border-t border-zinc-900 pt-4 flex justify-between items-center text-[10px] text-zinc-500 font-semibold uppercase tracking-widest">
                    <span>
                      {isChinese ? '会员 A & 会员 B' : 'Member A & Member B'}
                    </span>
                    <span className="text-[#C0392B]">
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
        <Link
          to="/success-stories"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#E74C3C] hover:text-[#D4A853] hover:underline transition-all duration-300"
        >
          <span>{isChinese ? '阅读更多成功故事' : 'Read More Stories'}</span>
          <span>→</span>
        </Link>
      </div>
    </SectionWrapper>
  );
};
