import React from 'react';
import { cn } from '../../utils/cn';
import { formFieldClass, formLabelClass } from '../../utils/formStyles';

export const Select = React.forwardRef(({
  label,
  options = [],
  error,
  helperText,
  className,
  placeholder,
  id,
  name,
  ...props
}, ref) => {
  const fieldId = id || name;

  return (
    <div className="w-full flex flex-col gap-2 text-left">
      {label && (
        <label htmlFor={fieldId} className={formLabelClass}>
          {label}
        </label>
      )}
      <select
        ref={ref}
        id={fieldId}
        name={name}
        className={cn(formFieldClass(error), 'appearance-none cursor-pointer', className)}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-white text-zinc-800">
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-xs text-[#C0392B] font-medium">{error}</span>
      )}
      {!error && helperText && (
        <span className="text-[11px] text-zinc-450">{helperText}</span>
      )}
    </div>
  );
});

Select.displayName = 'Select';
