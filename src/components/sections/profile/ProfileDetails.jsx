import React from 'react';
import { Tag } from '../../ui/Tag';
import { Card } from '../../ui/Card';
import { Heart, ShieldAlert, Sparkles } from 'lucide-react';

export const ProfileDetails = ({ member, tab = 'lifestyle', isChinese }) => {
  if (tab === 'lifestyle') {
    return (
      <div className="flex flex-col gap-6 text-left">
        <Card variant="default" className="p-6 bg-white">
          <h3 className="font-serif text-lg font-bold text-zinc-800 border-b border-zinc-200/80 shadow-sm pb-3 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0F8A96]" />
            <span>{isChinese ? '日常生活习惯' : 'Habits & Lifestyle'}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs mb-6">
            <div className="flex flex-col gap-1">
              <span className="text-zinc-450 uppercase tracking-wider text-[10px] font-bold">{isChinese ? '吸烟习惯' : 'Smoking'}</span>
              <span className="text-zinc-800">{isChinese ? '从不吸烟' : 'Never'}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-450 uppercase tracking-wider text-[10px] font-bold">{isChinese ? '饮酒习惯' : 'Drinking'}</span>
              <span className="text-zinc-800">{isChinese ? '社交性饮酒' : 'Socially'}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-450 uppercase tracking-wider text-[10px] font-bold">{isChinese ? '生活作息' : 'Lifestyle Mode'}</span>
              <span className="text-zinc-800">{member.lifestyle || (isChinese ? '规律健康' : 'Balanced')}</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 text-xs mb-6">
            <span className="text-zinc-450 uppercase tracking-wider text-[10px] font-bold">{isChinese ? '是否接受跨国/跨地区关系' : 'Open to International Relationship'}</span>
            <span className="text-zinc-800">
              {member.openToInternational 
                ? (isChinese ? '接受且持开放态度 ✓' : 'Yes, open to it ✓') 
                : (isChinese ? '暂不考虑' : 'No')
              }
            </span>
          </div>
        </Card>

        <Card variant="default" className="p-6 bg-white">
          <h3 className="font-serif text-lg font-bold text-zinc-800 border-b border-zinc-200/80 shadow-sm pb-3 mb-4">
            {isChinese ? '兴趣与爱好标签' : 'Hobbies & Interests'}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {member.interests?.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  // Relationship Goals tab
  return (
    <div className="flex flex-col gap-6 text-left">
      <Card variant="default" className="p-6 bg-white">
        <h3 className="font-serif text-lg font-bold text-zinc-800 border-b border-zinc-200/80 shadow-sm pb-3 mb-4 flex items-center gap-2">
          <Heart className="w-4 h-4 text-[#0F8A96] fill-current" />
          <span>{isChinese ? '寻偶愿景与期许' : 'Relationship Intentions'}</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-6">
          <div className="flex flex-col gap-1">
            <span className="text-zinc-450 uppercase tracking-wider text-[10px] font-bold">{isChinese ? '期望关系类型' : 'Looking For'}</span>
            <span className="text-zinc-800 font-semibold">{isChinese ? '严肃的婚姻/长期关系' : 'Serious Long-term Relationship'}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-zinc-450 uppercase tracking-wider text-[10px] font-bold">{isChinese ? '期望伴侣年龄范围' : 'Partner Age Range'}</span>
            <span className="text-zinc-800">{member.matchmakerReport?.idealMatchProfile?.ageRange || '30–42'}</span>
          </div>
        </div>
      </Card>

      <Card variant="default" className="p-6 bg-white">
        <h3 className="font-serif text-lg font-bold text-zinc-800 border-b border-zinc-200/80 shadow-sm pb-3 mb-4">
          {isChinese ? '核心特质偏好' : 'Preferred Partner Qualities'}
        </h3>
        <div className="flex flex-wrap gap-2.5 mb-6">
          <Tag active>{isChinese ? '通情达理' : 'Empathetic'}</Tag>
          <Tag active>{isChinese ? '有家庭观念' : 'Family-oriented'}</Tag>
          <Tag active>{isChinese ? '成熟稳重' : 'Emotionally Mature'}</Tag>
          <Tag>{isChinese ? '风趣幽默' : 'Humorous'}</Tag>
          <Tag>{isChinese ? '热爱旅游' : 'Globally Minded'}</Tag>
        </div>
      </Card>

      <Card variant="default" className="p-6 bg-white border-[#0F8A96]/15">
        <h3 className="font-serif text-lg font-bold text-zinc-800 border-b border-zinc-200/80 shadow-sm pb-3 mb-4 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-[#0F8A96]" />
          <span>{isChinese ? '伴侣底线 (Non-negotiables)' : 'Non-Negotiables'}</span>
        </h3>
        <ul className="list-disc pl-5 text-xs text-zinc-550 leading-relaxed flex flex-col gap-2">
          <li>{isChinese ? '不诚实、缺乏责任心者' : 'Dishonesty or lack of transparency'}</li>
          <li>{isChinese ? '没有稳定职业与长远职业规划者' : 'No stable profession or career vision'}</li>
          <li>{isChinese ? '染有不良嗜好 (酗酒/滥用药物) 者' : 'Substance abuse or heavy gaming/drinking habits'}</li>
          <li>{isChinese ? '对人际沟通与关系维护态度消极者' : 'Unwillingness to undergo constructive dialogue or growth'}</li>
        </ul>
      </Card>
    </div>
  );
};
