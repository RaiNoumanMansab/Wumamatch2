import React from 'react';
import { cn } from '../../utils/cn';
import { formChoiceClass, formLabelClass } from '../../utils/formStyles';

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
    <fieldset className="w-full flex flex-col gap-2 text-left border-0 p-0 m-0">
      {label && (
        <legend className={cn(formLabelClass, 'mb-1')}>{label}</legend>
      )}
      <div
        className={cn(
          inline ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'flex flex-col gap-3',
          className
        )}
      >
        {options.map((opt) => {
          const isChecked = value === opt.value;
          return (
            <label
              key={opt.value}
              className={formChoiceClass(isChecked, inline ? 'w-full' : '')}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={isChecked}
                onChange={() => onChange(opt.value)}
                className="w-4 h-4 shrink-0 text-[#0F8A96] bg-[#EDF6F6] border-2 border-zinc-300 focus:ring-[#0F8A96] focus:ring-offset-[#EDF6F6]"
              />
              <span className="text-sm select-none leading-snug">{opt.label}</span>
            </label>
          );
        })}
      </div>
      {error && (
        <span className="text-xs text-[#C0392B] font-medium mt-1">{error}</span>
      )}
    </fieldset>
  );
};
