import React from 'react';
import { cn } from '../../utils/cn';
import { formFieldClass, formLabelClass } from '../../utils/formStyles';

export const Input = React.forwardRef(({
  label,
  error,
  helperText,
  className,
  type = 'text',
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
      <input
        ref={ref}
        id={fieldId}
        name={name}
        type={type}
        className={cn(formFieldClass(error), className)}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-400 font-medium">{error}</span>
      )}
      {!error && helperText && (
        <span className="text-[11px] text-zinc-500">{helperText}</span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
