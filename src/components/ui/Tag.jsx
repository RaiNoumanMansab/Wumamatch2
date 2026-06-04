import React from 'react';
import { cn } from '../../utils/cn';

export const Tag = ({
  children,
  className,
  active = false,
  onClick,
  ...props
}) => {
  return (
    <span
      onClick={onClick}
      className={cn(
        'inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide border transition-all duration-300 select-none',
        onClick && 'cursor-pointer',
        active
          ? 'bg-[#C0392B] border-[#E74C3C] text-[#F5F0EB] shadow-[0_0_10px_rgba(231,76,60,0.2)]'
          : 'bg-zinc-900 border-zinc-800 text-[#9A8F8A] hover:bg-zinc-800 hover:text-[#F5F0EB]',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
