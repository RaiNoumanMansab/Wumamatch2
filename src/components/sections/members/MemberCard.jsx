import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, User } from 'lucide-react';
import { Card } from '../../ui/Card';
import { Avatar } from '../../ui/Avatar';
import { Button } from '../../ui/Button';

export const MemberCard = ({ member, isLoggedIn, isChinese }) => {
  const navigate = useNavigate();

  // Excerpt first 100 characters of bio, rest is shown as blurred "..."
  const bioText = member.bio || '';
  const excerpt = bioText.substring(0, 100);
  const remaining = bioText.substring(100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(231,76,60,0.15)" }}
      transition={{ duration: 0.4 }}
      className="h-full flex"
    >
      <Card
        variant="glass"
        className="w-full p-6 flex flex-col justify-between items-center text-center relative border-[#C0392B]/10 hover:border-[#C0392B]/40 duration-300"
      >
        {/* Verification Shield overlay */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-950/80 px-2 py-0.5 border border-zinc-800 rounded-full">
            <ShieldCheck className="w-3 h-3 text-blue-400" />
            <span>{isChinese ? '实名核验' : 'Verified'}</span>
          </div>
        </div>

        {/* Profile Avatar (blurred for guest) */}
        <div className="mb-6 mt-4">
          <Avatar
            src={member.photo}
            size="lg"
            blurred={!isLoggedIn}
            badge={member.verificationStatus}
          />
        </div>

        {/* Info */}
        <div className="flex-1 w-full flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2 text-[#F5F0EB] text-lg font-bold font-serif">
            <span>{isChinese ? `${member.age}岁` : `${member.age} Yrs`}</span>
            <span className="text-zinc-700">•</span>
            <span>{isChinese ? member.country : member.country}</span>
          </div>

          <div className="text-xs uppercase tracking-widest font-semibold text-[#D4A853] mb-4">
            {member.profession}
          </div>

          {/* Bio paragraph with partial blur for guests */}
          <div className="text-xs text-[#9A8F8A] leading-relaxed mb-6 font-light">
            <span>{excerpt}</span>
            {remaining && (
              <span className={!isLoggedIn ? 'filter blur-[3px] select-none pointer-events-none' : ''}>
                {isLoggedIn ? remaining : ' ... ' + remaining}
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="w-full grid grid-cols-2 gap-2 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold border-t border-zinc-850 pt-4 mb-6">
          <div>
            <span className="block text-zinc-600 mb-0.5">{isChinese ? '身高' : 'Height'}</span>
            <span className="text-[#F5F0EB] text-xs font-normal">{member.height}</span>
          </div>
          <div>
            <span className="block text-zinc-600 mb-0.5">{isChinese ? '最高学历' : 'Education'}</span>
            <span className="text-[#F5F0EB] text-xs font-normal truncate block">{member.education}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          variant={isLoggedIn ? 'primary' : 'ghost'}
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
            ? (isChinese ? '查看详细资料' : 'View Profile') 
            : (isChinese ? '注册解锁个人档案' : 'Register to Unlock')
          }
        </Button>
      </Card>
    </motion.div>
  );
};
export const BlurredMemberCard = MemberCard; // Match alternative alias in files
