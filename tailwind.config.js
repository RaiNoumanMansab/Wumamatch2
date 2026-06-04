import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    // Custom CSS utility classes defined in index.css
    'text-gold-gradient',
    'text-rose-gradient',
    'section-rule',
    'glass-card',
    'shimmer',
    'plan-featured',
    'nav-link-active',
    'animate-float-heart',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', ...fontFamily.serif],
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        rose: {
          950: '#3B0000',
          800: '#96000F',
        },
        gold: {
          DEFAULT: '#D4A853',
          light:   '#F0C870',
          dark:    '#B38F44',
        },
        brand: {
          red:     '#C0392B',
          crimson: '#96000F',
          accent:  '#E74C3C',
        },
      },
      boxShadow: {
        'glow-red':  '0 0 25px rgba(192,57,43,0.35)',
        'glow-gold': '0 0 25px rgba(212,168,83,0.35)',
      },
      backgroundImage: {
        'radial-red':  'radial-gradient(ellipse at center, rgba(192,57,43,0.25) 0%, transparent 70%)',
        'radial-gold': 'radial-gradient(ellipse at center, rgba(212,168,83,0.15) 0%, transparent 70%)',
      },
      borderColor: {
        'rose-dim':   'rgba(192,57,43,0.15)',
        'rose-mid':   'rgba(192,57,43,0.35)',
        'gold-dim':   'rgba(212,168,83,0.15)',
      },
      animation: {
        'float-heart': 'floatHeart linear infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'soft-pulse':  'softPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
