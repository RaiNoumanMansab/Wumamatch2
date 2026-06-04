import React from 'react';
import { cn } from '../../utils/cn';
import { formFieldClass, formLabelClass } from '../../utils/formStyles';

export const Textarea = React.forwardRef(({
  label,
  error,
  helperText,
  className,
  rows = 4,
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
      <textarea
        ref={ref}
        id={fieldId}
        name={name}
        rows={rows}
        className={cn(formFieldClass(error), 'resize-y min-h-[100px]', className)}
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

Textarea.displayName = 'Textarea';
