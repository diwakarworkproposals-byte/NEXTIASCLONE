/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#ED1C24',
          'red-dark': '#C81017',
          'red-light': '#FEE2E2',
          navy: '#0B2545',
          'navy-dark': '#061629',
          'navy-light': '#134074',
          blue: '#0267B1',
          'blue-light': '#EEF6FC',
          gold: '#F59E0B',
          'gold-light': '#FEF3C7',
          gray: '#64748B'
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Roboto"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(237, 28, 36, 0.2)',
        'glow-blue': '0 0 25px rgba(2, 103, 177, 0.25)',
        'card-hover': '0 12px 30px -10px rgba(11, 37, 69, 0.15)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
