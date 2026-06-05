import React from 'react';
import { Card } from '../../ui/Card';

export const ProfileBio = ({ member, isChinese }) => {
  return (
    <div className="flex flex-col gap-6 text-left">
      <Card variant="default" className="p-6 bg-white">
        <h3 className="font-serif text-lg font-bold text-zinc-800 border-b border-zinc-200/80 shadow-sm pb-3 mb-4">
          {isChinese ? '个人自白与介绍' : 'Personal Statement'}
        </h3>
        <p className="text-xs md:text-sm text-zinc-550 leading-relaxed font-light">
          {member.bio}
        </p>
      </Card>

      <Card variant="default" className="p-6 bg-white">
        <h3 className="font-serif text-lg font-bold text-zinc-800 border-b border-zinc-200/80 shadow-sm pb-3 mb-4">
          {isChinese ? '基本背景信息' : 'Background Details'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-zinc-450 uppercase tracking-wider text-[10px] font-bold">{isChinese ? '常住地' : 'Location'}</span>
            <span className="text-zinc-800">{member.city}, {member.country}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-zinc-450 uppercase tracking-wider text-[10px] font-bold">{isChinese ? '国籍与背景' : 'Nationality'}</span>
            <span className="text-zinc-800">{member.country}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-zinc-450 uppercase tracking-wider text-[10px] font-bold">{isChinese ? '教育程度' : 'Education'}</span>
            <span className="text-zinc-800">{member.education}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-zinc-450 uppercase tracking-wider text-[10px] font-bold">{isChinese ? '职业' : 'Profession'}</span>
            <span className="text-zinc-800">{member.profession}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-zinc-450 uppercase tracking-wider text-[10px] font-bold">{isChinese ? '婚姻状况' : 'Relationship Status'}</span>
            <span className="text-zinc-800">{isChinese ? '单身' : 'Single'}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-zinc-450 uppercase tracking-wider text-[10px] font-bold">{isChinese ? '是否育有子女' : 'Has Children'}</span>
            <span className="text-zinc-800">
              {member.hasChildren 
                ? (isChinese ? '是' : 'Yes') 
                : (isChinese ? '否' : 'No')
              }
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};
