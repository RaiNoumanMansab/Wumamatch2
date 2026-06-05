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
          ? 'bg-[#0F8A96] border-[#3AAEA9] text-white shadow-[0_0_10px_rgba(15,138,150,0.15)]'
          : 'bg-white border-zinc-200 text-zinc-600 hover:bg-[#EDF6F6] hover:text-[#0F8A96]',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
