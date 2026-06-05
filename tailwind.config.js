import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    // Custom CSS utility classes defined in index.css
    'text-gold-gradient',
    'text-teal-gradient',
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
        teal: {
          50:  '#E6F7F6',
          100: '#CBEFEE',
          200: '#97DDD9',
          300: '#61C5C0',
          400: '#3AAEA9',
          500: '#0F8A96', // Primary Tiffany-inspired teal
          600: '#0D7984',
          700: '#0A636D',
          800: '#074F57',
          900: '#043A40',
          950: '#022124',
        },
        gold: {
          DEFAULT: '#D4A853', // Champagne/subtle gold
          light:   '#F0C870',
          dark:    '#B38F44',
          subtle:  '#F5E6C4',
        },
        brand: {
          teal:    '#0F8A96',
          accent:  '#3AAEA9',
          gold:    '#D4A853',
          cream:   '#FDFBF7',
          sand:    '#FAF7F2',
          darkTeal: '#053C42',
          charcoal: '#2D3748',
        },
      },
      boxShadow: {
        'glow-teal':  '0 0 25px rgba(15,138,150,0.25)',
        'glow-gold': '0 0 25px rgba(212,168,83,0.25)',
      },
      backgroundImage: {
        'radial-teal':  'radial-gradient(ellipse at center, rgba(15,138,150,0.15) 0%, transparent 70%)',
        'radial-gold': 'radial-gradient(ellipse at center, rgba(212,168,83,0.12) 0%, transparent 70%)',
      },
      borderColor: {
        'teal-dim':   'rgba(15,138,150,0.12)',
        'teal-mid':   'rgba(15,138,150,0.3)',
        'gold-dim':   'rgba(212,168,83,0.12)',
      },
      animation: {
        'float-heart': 'floatHeart linear infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'soft-pulse':  'softPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
  ],
}

