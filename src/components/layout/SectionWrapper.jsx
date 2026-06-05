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
    dark: 'bg-[#EDF6F6]',
    darker: 'bg-white',
    gradient: 'bg-gradient-to-b from-[#EDF6F6] via-[#FAF6F0] to-[#EDF6F6]'
  };

  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 px-8', backgrounds[bg], className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
