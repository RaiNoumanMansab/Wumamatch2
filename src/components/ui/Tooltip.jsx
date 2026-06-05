import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export const Tooltip = ({
  content,
  children,
  position = 'top',
  className
}) => {
  const [visible, setVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={cn(
            'absolute z-30 px-2.5 py-1.5 text-[10px] uppercase font-bold tracking-widest text-zinc-800 bg-white border border-zinc-200/80 shadow-sm rounded shadow-lg pointer-events-none whitespace-nowrap',
            positions[position],
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
