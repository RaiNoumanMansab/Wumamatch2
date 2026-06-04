import { cn } from './cn';

export const formLabelClass =
  'text-xs uppercase tracking-widest font-semibold text-[#C9BDB6] block';

export const formFieldClass = (error) =>
  cn(
    'w-full px-4 py-3 bg-[#141414] border-2 border-zinc-600 text-[#F5F0EB] rounded-xl',
    'focus:outline-none focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/30',
    'transition-all duration-200 placeholder:text-zinc-500 text-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]',
    error && 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
  );

export const formChoiceClass = (isSelected, extra = '') =>
  cn(
    'flex items-center gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200 min-h-[48px]',
    extra,
    isSelected
      ? 'bg-[#3B0000]/40 border-[#C0392B] text-[#F5F0EB] shadow-[0_0_12px_rgba(192,57,43,0.15)]'
      : 'bg-[#141414] border-zinc-600 text-[#9A8F8A] hover:border-zinc-500 hover:bg-[#1a1a1a]'
  );

export const formSectionCardClass =
  'p-6 md:p-8 bg-[#111111] border-2 border-zinc-700/80 shadow-lg';

export const formSectionTitleClass =
  'font-serif text-lg font-bold text-[#F5F0EB] border-b-2 border-zinc-700 pb-3 mb-6';
