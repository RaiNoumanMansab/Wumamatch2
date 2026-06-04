import React from 'react';
import { cn } from '../../utils/cn';

export const Select = React.forwardRef(({
  label,
  options = [],
  error,
  helperText,
  className,
  placeholder,
  ...props
}, ref) => {
  return (
    <div className="w-full flex flex-col gap-1.5 text-left">
      {label && (
        <label className="text-xs uppercase tracking-widest font-semibold text-[#9A8F8A]">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={cn(
          'w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700/80 text-[#F5F0EB] rounded focus:outline-none focus:border-[#C0392B] focus:ring-1 focus:ring-[#C0392B] transition-all duration-300 text-sm',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-zinc-950 text-[#F5F0EB]">
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-xs text-red-500 mt-0.5">{error}</span>
      )}
      {!error && helperText && (
        <span className="text-[11px] text-zinc-500">{helperText}</span>
      )}
    </div>
  );
});

Select.displayName = 'Select';
