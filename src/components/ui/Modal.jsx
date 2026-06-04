import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Card } from './Card';
import { cn } from '../../utils/cn';

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  size = 'md'
}) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="w-full relative z-10"
          >
            <Card
              variant="bordered"
              className={cn(
                'w-full mx-auto shadow-2xl glass-panel relative overflow-y-auto max-h-[90vh]',
                sizes[size],
                className
              )}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800/60">
                {title && (
                  <h3 className="text-xl font-semibold text-[#F5F0EB]">
                    {title}
                  </h3>
                )}
                <button
                  onClick={onClose}
                  className="p-1 rounded bg-zinc-900 border border-zinc-850 hover:bg-zinc-850 hover:border-zinc-700 text-[#9A8F8A] hover:text-[#F5F0EB] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-6 text-left">
                {children}
              </div>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
