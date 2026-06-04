import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, MessageSquare } from 'lucide-react';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { mockMatchmakers } from '../../../data/mockMatchmakers';

export const MatchmakerTeamSection = ({ isChinese }) => {
  return (
    <SectionWrapper id="matchmaker-team" bg="darker">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F0EB] mb-4">
          {isChinese ? '我们的资深红娘顾问' : 'Our Expert Matchmakers'}
        </h2>
        <p className="text-sm md:text-base text-[#9A8F8A] font-light leading-relaxed">
          {isChinese
            ? '资深情感辅导背景与多年的配对沉淀，秉持极高职业操守与同理心，为您指点迷津。'
            : 'Combining years of interpersonal alignment expertise and relationship coaching to guide your path.'}</p>
      </div>

      {/* Row with scroll on mobile */}
      <div className="flex flex-nowrap md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-6 md:pb-0 scrollbar-thin px-4 max-w-5xl mx-auto">
        {mockMatchmakers.map((matchmaker, idx) => {
          return (
            <motion.div
              key={matchmaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 flex-1 flex"
            >
              <Card
                variant="gold"
                className="w-full flex flex-col justify-between p-6 border-[#D4A853]/20 hover:border-[#D4A853] hover:shadow-[0_10px_30px_rgba(212,168,83,0.15)] transition-all duration-500"
              >
                {/* Photo & Badge */}
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/5] border border-zinc-800">
                  <img
                    src={matchmaker.photo}
                    alt={matchmaker.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 scale-90">
                    <Badge type="matchmaker" />
                  </div>
                </div>

                {/* Details */}
                <div className="text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F0EB] mb-1 font-serif">
                      {matchmaker.name}
                    </h3>
                    <p className="text-xs text-[#D4A853] font-semibold uppercase tracking-wider mb-4">
                      {matchmaker.title}
                    </p>
                    <p className="text-xs text-[#9A8F8A] leading-relaxed mb-6 font-light">
                      {matchmaker.bio}
                    </p>
                  </div>

                  {/* Footer stats details */}
                  <div className="border-t border-zinc-850 pt-4 flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#D4A853]" />
                      <span>{isChinese ? `${matchmaker.yearsExperience}年经验` : `${matchmaker.yearsExperience} Yrs Exp`}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-[#C0392B]" />
                      <span>{isChinese ? `${matchmaker.successMatches}对联姻` : `${matchmaker.successMatches} Matches`}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
