import React from 'react';
import { cn } from '../../utils/cn';

export const Card = ({
  variant = 'default',
  children,
  className,
  ...props
}) => {
  const baseStyles = 'rounded transition-all duration-300 overflow-hidden';
  
  const variants = {
    default: 'bg-[#1E1E1E] border border-zinc-800/80',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]',
    bordered: 'border border-[#C0392B]/40 bg-[#111111]',
    gold: 'border border-[#D4A853]/40 bg-[#1A1A1A] relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-[#D4A853] before:to-[#B38F44]'
  };

  return (
    <div
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
};
