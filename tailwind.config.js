/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        loader: {
          '0%': { transform: 'translateX(-60rem)' },
          '100%': { transform: 'translateX(0)' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(5px)' },
          '50%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        loader: 'loader 2.5s linear',
        shake: 'shake .5s infinite',
      },
      colors: {
        'lf-aqua': '#64EEBC',
        'lf-btn1': '#242424',
        'lf-btn2': 'rgba(36, 36, 36, 0.5)',
        'lf-brd': 'rgba(255, 255, 255, 0.5)',
        'lf-btn1-hover': '#3b3838',
        'lf-btn2-hover': 'rgba(36, 36, 36)',
      },
    },
  },
  plugins: [],
};
