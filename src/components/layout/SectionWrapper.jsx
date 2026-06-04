import React from 'react';
import { cn } from '../../utils/cn';

export const SectionWrapper = ({
  children,
  className,
  id,
  bg = 'dark', // 'dark' | 'darker' | 'gradient'
  ...props
}) => {
  const backgrounds = {
    dark: 'bg-[#0D0D0D]',
    darker: 'bg-[#111111]',
    gradient: 'bg-gradient-to-b from-[#111111] via-[#0D0D0D] to-[#161616]'
  };

  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 px-6 text-center', backgrounds[bg], className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
