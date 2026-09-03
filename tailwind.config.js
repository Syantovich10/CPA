/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      screens: {
        short: { raw: '(min-width: 768px) and (max-height: 700px)' },
      },
      colors: {
        dark: '#0C090E',
        white: '#FFFFFF',
        purple: {
          DEFAULT: '#9E13E0',
          dark: '#560080',
        },
        yellow: '#FEE97D',
        surface: '#14091A',
      },
      fontFamily: {
        halvar: ['Halvar Breit', 'sans-serif'],
        stolzl: ['Stolzl', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
