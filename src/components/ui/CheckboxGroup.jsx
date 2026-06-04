import React from 'react';
import { cn } from '../../utils/cn';

export const CheckboxGroup = ({
  label,
  options = [],
  value = [],
  onChange,
  error,
  inline = false,
  maxSelected,
  className
}) => {
  const handleToggle = (optValue) => {
    let newValue;
    if (value.includes(optValue)) {
      newValue = value.filter((v) => v !== optValue);
    } else {
      if (maxSelected && value.length >= maxSelected) {
        // Replace first element or don't add
        return;
      }
      newValue = [...value, optValue];
    }
    onChange(newValue);
  };

  return (
    <div className="w-full flex flex-col gap-2 text-left">
      <div className="flex justify-between items-center">
        {label && (
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9A8F8A]">
            {label}
          </span>
        )}
        {maxSelected && (
          <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
            Select up to {maxSelected}
          </span>
        )}
      </div>
      <div className={cn(
        'grid gap-3',
        inline ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1',
        className
      )}>
        {options.map((opt) => {
          const isChecked = value.includes(opt.value);
          return (
            <label
              key={opt.value}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-2xl border cursor-pointer transition-all duration-300',
                isChecked
                  ? 'bg-[#3B0000]/30 border-[#C0392B] text-[#F5F0EB]'
                  : 'bg-zinc-900/60 border-zinc-800 text-[#9A8F8A] hover:bg-zinc-800/40 hover:border-zinc-700'
              )}
            >
              <input
                type="checkbox"
                value={opt.value}
                checked={isChecked}
                onChange={() => handleToggle(opt.value)}
                className="w-4 h-4 rounded text-[#C0392B] bg-zinc-950 border-zinc-700 focus:ring-[#C0392B] focus:ring-offset-zinc-950"
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
