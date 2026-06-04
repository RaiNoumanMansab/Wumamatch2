import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock } from 'lucide-react';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { Card } from '../../ui/Card';
import { Avatar } from '../../ui/Avatar';
import { Button } from '../../ui/Button';
import { mockMembers } from '../../../data/mockMembers';

export const FeaturedMembersSection = ({ isLoggedIn, isChinese }) => {
  const navigate = useNavigate();
  // Display first 6 members on home page
  const featured = mockMembers.slice(0, 6);

  return (
    <SectionWrapper id="featured-members" bg="dark">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F0EB] mb-4">
          {isChinese ? '邂逅优秀真实的TA' : 'Meet Some of Our Members'}
        </h2>
        <p className="text-sm md:text-base text-[#9A8F8A] font-light leading-relaxed">
          {isChinese
            ? '所有会员均通过严格的实名与人脸身份校验。为了保护隐私，照片与关键信息在注册登录前将对公众模糊。'
            : 'All members are identity-verified. Photos and sensitive details are blurred for public visitors.'}
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featured.map((member, idx) => {
          return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(231,76,60,0.15)" }}
              className="h-full"
            >
              <Card variant="glass" className="h-full p-6 flex flex-col items-center justify-between text-center relative group overflow-hidden border-[#C0392B]/10 hover:border-[#C0392B]/40 duration-300">
                {/* Status Badges */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 text-[9px] uppercase font-bold tracking-widest text-zinc-400 bg-zinc-950/80 px-2 py-0.5 border border-zinc-800 rounded-full">
                    <ShieldCheck className="w-3 h-3 text-blue-400" />
                    <span>{isChinese ? '身份核验' : 'Verified'}</span>
                  </div>
                </div>

                {/* Profile Avatar (Blurred if public visitor) */}
                <div className="mb-6 mt-4">
                  <Avatar
                    src={member.photo}
                    size="lg"
                    blurred={!isLoggedIn}
                    badge={member.verificationStatus}
                  />
                </div>

                {/* Member Basic Info (Visible) */}
                <div className="flex-1 w-full mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2 text-[#F5F0EB] text-lg font-bold font-serif">
                    <span>{isChinese ? `${member.age}岁` : `${member.age} Yrs`}</span>
                    <span className="text-zinc-700">•</span>
                    <span>{isChinese ? member.country : member.country}</span>
                  </div>

                  <div className="text-xs uppercase tracking-widest font-semibold text-[#D4A853] mb-4">
                    {member.profession}
                  </div>

                  {/* Blurred Bio teaser */}
                  <div className="relative">
                    <p className={`text-xs text-[#9A8F8A] leading-relaxed transition-all duration-500 px-2 ${!isLoggedIn && 'filter blur-[3px] select-none pointer-events-none'}`}>
                      {member.bio}
                    </p>
                    {!isLoggedIn && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4A853] bg-zinc-950/60 px-2 py-1 rounded">
                          {isChinese ? '加入以查看自我介绍' : 'Bio Locked'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details list */}
                <div className="w-full grid grid-cols-2 gap-2 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold border-t border-zinc-850 pt-4 mb-6">
                  <div>
                    <span className="block text-zinc-600 mb-0.5">{isChinese ? '身高' : 'Height'}</span>
                    <span className="text-[#F5F0EB] text-xs font-normal">{member.height}</span>
                  </div>
                  <div>
                    <span className="block text-zinc-600 mb-0.5">{isChinese ? '教育背景' : 'Education'}</span>
                    <span className="text-[#F5F0EB] text-xs font-normal truncate block">{member.education}</span>
                  </div>
                </div>

                {/* Hover CTA or standard Redirect CTA */}
                <Button
                  variant="ghost"
                  className="w-full text-xs"
                  onClick={() => {
                    if (isLoggedIn) {
                      navigate(`/members/${member.id}`);
                    } else {
                      navigate('/register');
                    }
                  }}
                >
                  {isLoggedIn 
                    ? (isChinese ? '查看完整档案' : 'View Full Profile')
                    : (isChinese ? '解锁会员特权' : 'Unlock All Profiles')
                  }
                </Button>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => navigate('/members')}
        >
          {isChinese ? '浏览更多精英会员' : 'Browse All Members'}
        </Button>
      </div>
    </SectionWrapper>
  );
};
