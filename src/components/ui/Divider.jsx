import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Divider = ({
  icon = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('flex items-center justify-center my-8 w-full gap-4', className)}
      {...props}
    >
      <div className="h-[1px] bg-gradient-to-r from-transparent to-[#0F8A96]/40 flex-1" />
      
      {icon && (
        <span className="text-[#0F8A96] animate-pulse px-1">
          <Heart className="w-4 h-4 fill-current" />
        </span>
      )}
      
      <div className="h-[1px] bg-gradient-to-l from-transparent to-[#0F8A96]/40 flex-1" />
    </div>
  );
};
