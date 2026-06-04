import React from 'react';
import { cn } from '../../utils/cn';

export const RadioGroup = ({
  label,
  name,
  options = [],
  value,
  onChange,
  error,
  inline = false,
  className
}) => {
  return (
    <div className="w-full flex flex-col gap-2 text-left">
      {label && (
        <span className="text-xs uppercase tracking-widest font-semibold text-[#9A8F8A]">
          {label}
        </span>
      )}
      <div className={cn(
        inline ? 'flex flex-wrap items-center gap-3' : 'flex flex-col gap-3',
        className
      )}>
        {options.map((opt) => {
          const isChecked = value === opt.value;
          return (
            <label
              key={opt.value}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-2xl border cursor-pointer transition-all duration-300',
                inline ? 'flex-1 min-w-[140px] justify-center' : '',
                isChecked
                  ? 'bg-[#3B0000]/30 border-[#C0392B] text-[#F5F0EB]'
                  : 'bg-zinc-900/60 border-zinc-800 text-[#9A8F8A] hover:bg-zinc-800/40 hover:border-zinc-700'
              )}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={isChecked}
                onChange={() => onChange(opt.value)}
                className="w-4 h-4 text-[#C0392B] bg-zinc-950 border-zinc-700 focus:ring-[#C0392B] focus:ring-offset-zinc-950"
              />
              <span className="text-sm select-none">{opt.label}</span>
            </label>
          );
        })}
      </div>
      {error && (
        <span className="text-xs text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
};
