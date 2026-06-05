import React from 'react';
import { Badge } from './Badge';
import { Lock } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Avatar = ({
  src,
  size = 'md',
  blurred = false,
  badge = null,
  className,
  ...props
}) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-40 h-40',
    xl: 'w-56 h-56'
  };

  return (
    <div className={cn('relative inline-block', className)} {...props}>
      <div className={cn('rounded-full overflow-hidden relative border border-[#0F8A96]/20', sizes[size] || sizes.md)}>
        {/* Photo */}
        <img
          src={src || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400'}
          alt="Avatar"
          className={cn(
            'w-full h-full object-cover transition-all duration-700',
            blurred && 'filter blur-[10px] scale-110 select-none pointer-events-none'
          )}
        />

        {/* Blurred/Lock overlay */}
        {blurred && (
          <div className="absolute inset-0 bg-[#FAF7F2]/65 flex flex-col items-center justify-center p-2 text-center">
            <Lock className="w-4 h-4 md:w-5 md:h-5 text-[#D4A853] mb-1 animate-pulse" />
            <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-[#D4A853]">
              Join To View
            </span>
          </div>
        )}
      </div>

      {/* Verification badge — centered below avatar */}
      {badge && (
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 z-10 whitespace-nowrap scale-90 md:scale-95 shadow-md">
          <Badge type={badge} />
        </div>
      )}
    </div>
  );
};
