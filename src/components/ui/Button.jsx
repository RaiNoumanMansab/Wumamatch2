import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const Button = React.forwardRef(({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  children,
  className,
  type = 'button',
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed tracking-wide';
  
  const variants = {
    primary: 'bg-[#C0392B] hover:bg-[#E74C3C] text-[#F5F0EB] hover:shadow-[0_0_20px_rgba(231,76,60,0.4)] shadow-md',
    secondary: 'bg-[#1E1E1E] text-[#F5F0EB] border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700',
    ghost: 'border border-[#C0392B]/70 text-[#E74C3C] hover:bg-[#C0392B]/10 hover:border-[#E74C3C]',
    danger: 'bg-red-800 hover:bg-red-700 text-white shadow-sm',
    gold: 'bg-gradient-to-r from-[#D4A853] to-[#B38F44] hover:from-[#E5B865] hover:to-[#C59F53] text-[#0D0D0D] font-semibold hover:shadow-[0_0_15px_rgba(212,168,83,0.3)]'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base uppercase tracking-wider'
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : null}
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';
