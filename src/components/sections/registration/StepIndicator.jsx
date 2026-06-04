import React from 'react';
import { ProgressBar } from '../../ui/ProgressBar';

export const StepIndicator = ({ currentStep = 1, isChinese }) => {
  const steps = isChinese
    ? ['基础档案创建', '深度背景资料']
    : ['Basic Profile', 'Deep Matchmaking Qs'];

  return (
    <div className="w-full text-center mb-8">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#F5F0EB] mb-2">
        {isChinese ? '创建您的专属寻爱档案' : 'Begin Your Matchmaking Registration'}
      </h2>
      <p className="text-xs text-[#9A8F8A] max-w-md mx-auto mb-6">
        {isChinese
          ? '请如实填写您的个人特征与情感期望，这将帮助红娘为您进行精准的人工配对。'
          : 'Please complete both steps accurately. All profiles undergo a rigorous review before activation.'}
      </p>
      <ProgressBar currentStep={currentStep} totalSteps={2} steps={steps} />
    </div>
  );
};
