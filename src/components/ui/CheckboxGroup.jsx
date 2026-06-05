import React from 'react';
import { cn } from '../../utils/cn';
import { formChoiceClass, formLabelClass } from '../../utils/formStyles';

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
        return;
      }
      newValue = [...value, optValue];
    }
    onChange(newValue);
  };

  return (
    <fieldset className="w-full flex flex-col gap-2 text-left border-0 p-0 m-0">
      <div className="flex justify-between items-center gap-2 flex-wrap">
        {label && (
          <legend className={cn(formLabelClass, 'mb-0')}>{label}</legend>
        )}
        {maxSelected && (
          <span className="text-[10px] text-zinc-450 font-semibold uppercase tracking-wider">
            Select up to {maxSelected}
          </span>
        )}
      </div>
      <div
        className={cn(
          inline ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3' : 'flex flex-col gap-3',
          className
        )}
      >
        {options.map((opt) => {
          const isChecked = value.includes(opt.value);
          const isDisabled = maxSelected && value.length >= maxSelected && !isChecked;
          return (
            <label
              key={opt.value}
              className={formChoiceClass(
                isChecked,
                cn('w-full', isDisabled && !isChecked && 'opacity-50 cursor-not-allowed')
              )}
            >
              <input
                type="checkbox"
                value={opt.value}
                checked={isChecked}
                disabled={isDisabled && !isChecked}
                onChange={() => handleToggle(opt.value)}
                className="w-4 h-4 shrink-0 rounded border-2 border-zinc-300 text-[#0F8A96] bg-[#FAF7F2] focus:ring-[#0F8A96] focus:ring-offset-[#FAF7F2]"
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
