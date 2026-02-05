/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          start: '#1a0b2e', // Deep violet
          end: '#000000', // Black
        },
        primary: {
          DEFAULT: '#d946ef', // Neon Purple / Magenta
          hover: '#c026d3',
        },
        secondary: {
          DEFAULT: '#0f766e', // Teal Green
          muted: '#0e7490', // Muted Cyan
        },
        accent: {
          gold: '#fbbf24', // Gold for money
        },
        surface: {
          DEFAULT: '#111827', // Dark slate
          lighter: '#1f2937',
        },
        text: {
          muted: '#94a3b8', // Slate 400
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(217, 70, 239, 0.5)',
        'glow-gold': '0 0 20px rgba(251, 191, 36, 0.5)',
      },
    },
  },
  plugins: [],
}
