import React from 'react';
import { ShieldCheck, Crown, UserCheck, Sparkles } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Badge = ({
  type = 'basic-verified',
  className,
  ...props
}) => {
  const badgeConfig = {
    'basic-verified': {
      icon: ShieldCheck,
      text: 'Basic Verified',
      style: 'bg-teal-50 border border-teal-200 text-teal-700'
    },
    'premium-verified': {
      icon: Crown,
      text: 'Premium Verified',
      style: 'bg-[#FAF6F0] border border-[#D4A853]/40 text-[#B38F44]'
    },
    'matchmaker': {
      icon: UserCheck,
      text: 'Matchmaker Curated',
      style: 'bg-[#E6F7F6] border border-[#0F8A96]/30 text-[#0F8A96]'
    },
    'new': {
      icon: Sparkles,
      text: 'New Member',
      style: 'bg-zinc-100 border border-zinc-200/80 text-zinc-600'
    }
  };

  const current = badgeConfig[type] || badgeConfig['basic-verified'];
  const Icon = current.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase',
        current.style,
        className
      )}
      {...props}
    >
      <Icon className="w-3.5 h-3.5" />
      <span>{current.text}</span>
    </span>
  );
};
