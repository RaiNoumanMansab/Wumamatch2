import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';

export const ProgressBar = ({
  currentStep = 1,
  totalSteps = 2,
  steps = ['Basic Info', 'Deep Profile'],
  className
}) => {
  return (
    <div className={cn('w-full flex items-center justify-between py-6 max-w-lg mx-auto', className)}>
      {steps.map((stepName, index) => {
        const stepNum = index + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;
        
        return (
          <React.Fragment key={stepName}>
            {/* Step Circle & Label */}
            <div className="flex flex-col items-center flex-1 relative z-10">
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 border-2',
                  isCompleted && 'bg-[#C0392B] border-[#C0392B] text-[#F5F0EB]',
                  isActive && 'bg-[#C0392B] border-[#E74C3C] text-[#F5F0EB] shadow-[0_0_15px_rgba(231,76,60,0.5)] scale-110',
                  !isCompleted && !isActive && 'bg-zinc-950 border-zinc-800 text-zinc-500'
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 text-[#F5F0EB]" />
                ) : (
                  <span>{stepNum}</span>
                )}
              </div>
              
              <span
                className={cn(
                  'mt-2.5 text-[10px] uppercase font-bold tracking-widest transition-all duration-300',
                  isActive ? 'text-[#E74C3C]' : 'text-zinc-500'
                )}
              >
                {stepName}
              </span>
            </div>
            
            {/* Step Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-[2px] bg-zinc-850 -mt-6 relative">
                <div
                  className="absolute inset-y-0 left-0 bg-[#C0392B] transition-all duration-500"
                  style={{ width: isCompleted ? '100%' : '0%' }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
