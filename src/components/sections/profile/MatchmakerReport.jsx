import React from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Tag } from '../../ui/Tag';
import { Sparkles, EyeOff, Lock, CheckCircle2 } from 'lucide-react';

export const MatchmakerReport = ({ member, isChinese }) => {
  const report = member.matchmakerReport || {};

  return (
    <div className="flex flex-col gap-6 text-left">
      <Card variant="gold" className="p-6 bg-white border-[#D4A853]/30">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-zinc-200/80 shadow-sm pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D4A853] animate-pulse" />
            <h3 className="font-serif text-lg font-bold text-zinc-800">
              {isChinese ? '红娘深度配对报告' : 'Expert Matchmaker Report'}
            </h3>
          </div>
          <Badge type="premium-verified" />
        </div>

        {/* Member Summary */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4A853] mb-2">
            {isChinese ? '会员综合评估' : 'Member Summary'}
          </h4>
          <p className="text-xs md:text-sm text-zinc-550 leading-relaxed font-light">
            {report.summary || (isChinese ? '该会员展现出极高的人格魅力与自我修养。' : 'An emotionally mature individual...')}
          </p>
        </div>

        {/* Personality & Attachment Style */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4A853] mb-2">
            {isChinese ? '性格特质与依恋类型' : 'Personality & Attachment Analysis'}
          </h4>
          <p className="text-xs md:text-sm text-zinc-550 leading-relaxed font-light">
            {report.personalityAnalysis || (isChinese ? '展现出稳定安全的依恋人格，注重高质量对话与情感安全。' : 'Displays secure attachment patterns...')}
          </p>
        </div>

        {/* Key Strengths */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4A853] mb-2">
            {isChinese ? '红娘点评核心优势' : 'Key Core Strengths'}
          </h4>
          <div className="flex flex-wrap gap-2.5 mt-2">
            {report.strengths?.map((strength) => (
              <span 
                key={strength}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#E6F7F6]/30 border border-[#0F8A96]/20 text-xs text-[#0F8A96]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A853]" />
                <span>{strength}</span>
              </span>
            )) || (
              <>
                <Tag>{isChinese ? '善于沟通' : 'Communicative'}</Tag>
                <Tag>{isChinese ? '富有同理心' : 'Empathetic'}</Tag>
                <Tag>{isChinese ? '独立自主' : 'Independent'}</Tag>
              </>
            )}
          </div>
        </div>

        {/* Ideal Partner profile */}
        <div className="border-t border-zinc-150 pt-5 mt-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4A853] mb-3">
            {isChinese ? '红娘画像：理想伴侣档案' : 'Ideal Matching Partner Profile'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs bg-white/40 p-4 border border-zinc-150 rounded">
            <div>
              <span className="text-zinc-450 block mb-1 uppercase text-[9px] font-bold">{isChinese ? '建议年龄' : 'Age Range'}</span>
              <span className="text-zinc-800">{report.idealMatchProfile?.ageRange || '32–42'}</span>
            </div>
            <div>
              <span className="text-zinc-450 block mb-1 uppercase text-[9px] font-bold">{isChinese ? '建议作息' : 'Lifestyle'}</span>
              <span className="text-zinc-800">{report.idealMatchProfile?.lifestyle || (isChinese ? '规律健康' : 'Balanced')}</span>
            </div>
            <div>
              <span className="text-zinc-450 block mb-1 uppercase text-[9px] font-bold">{isChinese ? '核心价值契合' : 'Core Values'}</span>
              <span className="text-zinc-800 truncate block">{report.idealMatchProfile?.values || (isChinese ? '家庭观念强' : 'Family-oriented')}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Hidden Staff Only Card */}
      <Card variant="bordered" className="p-6 bg-white/60 border-zinc-150/80 flex items-center justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded bg-zinc-100 border border-zinc-150 flex items-center justify-center text-zinc-450">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-450 flex items-center gap-1.5 mb-1">
              <span>{isChinese ? '红娘后台保密记录 (Staff Only)' : 'Confidential Matchmaker Log (Staff Only)'}</span>
              <EyeOff className="w-3.5 h-3.5 text-zinc-600" />
            </h4>
            <p className="text-[11px] text-zinc-600">
              {isChinese 
                ? '包含后台潜在顾虑与配对沟通跟进日志，仅对平台顾问红娘可见以保护隐私。'
                : 'Contains internal screening flags, follow-up logs, and sensitive background checks. Accessible only by authorized staff.'}
            </p>
          </div>
        </div>
        <span className="text-[9px] uppercase tracking-widest bg-zinc-100 border border-zinc-200/80 shadow-sm text-zinc-600 font-bold px-2 py-1 rounded">
          {isChinese ? '已加密' : 'Encrypted'}
        </span>
      </Card>
    </div>
  );
};
