import { cn } from './cn';

export const formLabelClass =
  'text-xs uppercase tracking-widest font-semibold text-[#5C6869] block';

export const formFieldClass = (error) =>
  cn(
    'w-full px-4 py-3 bg-white border-2 border-zinc-200 text-[#2D3748] rounded-xl',
    'focus:outline-none focus:border-[#0F8A96] focus:ring-2 focus:ring-[#0F8A96]/20',
    'transition-all duration-200 placeholder:text-zinc-400 text-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]',
    error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
  );

export const formChoiceClass = (isSelected, extra = '') =>
  cn(
    'flex items-center gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200 min-h-[48px]',
    extra,
    isSelected
      ? 'bg-[#E6F7F6] border-[#0F8A96] text-[#053C42] shadow-[0_0_12px_rgba(15,138,150,0.12)]'
      : 'bg-white border-zinc-200 text-zinc-650 hover:border-zinc-300 hover:bg-zinc-50/50'
  );

export const formSectionCardClass =
  'p-6 md:p-8 bg-white border border-zinc-100 shadow-sm rounded-2xl';

export const formSectionTitleClass =
  'font-serif text-lg font-bold text-[#053C42] border-b border-zinc-100 pb-3 mb-6';

