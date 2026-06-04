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
      style: 'bg-blue-950/60 border border-blue-500/40 text-blue-300'
    },
    'premium-verified': {
      icon: Crown,
      text: 'Premium Verified',
      style: 'bg-amber-950/60 border border-[#D4A853]/40 text-[#D4A853]'
    },
    'matchmaker': {
      icon: UserCheck,
      text: 'Matchmaker Curated',
      style: 'bg-[#3B0000] border border-[#C0392B]/40 text-[#E74C3C]'
    },
    'new': {
      icon: Sparkles,
      text: 'New Member',
      style: 'bg-zinc-800 border border-zinc-700 text-zinc-300'
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
