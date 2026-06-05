import React from 'react';
import { cn } from '../../utils/cn';

export const Card = ({
  variant = 'default',
  children,
  className,
  ...props
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 overflow-hidden';
  
  const variants = {
    default: 'bg-white border border-zinc-200/60 shadow-sm',
    glass: 'bg-white/80 backdrop-blur-md border border-teal-500/10 shadow-[0_8px_32px_rgba(15,138,150,0.05)]',
    bordered: 'border border-teal-500/20 bg-white shadow-sm',
    gold: 'border border-[#D4A853]/30 bg-white relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-[#D4A853] before:to-[#B38F44] shadow-sm'
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
