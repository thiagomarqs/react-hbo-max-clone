/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Sofia Sans'", 'sans-serif']
    },
    extend: {
      colors: {
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'hbo-purple': '#753EEF'
      },
      backgroundImage: {
        'backdrop-gradient-to-t': 'linear-gradient(0deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0.65) 45%, rgba(255,255,255,0) 72%);',
        'backdrop-gradient-to-r': 'linear-gradient(90deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.30) 3%, rgba(255,255,255,0) 18%);',
        'backdrop-gradient-to-b': 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.20) 3%, rgba(255,255,255,0) 34%);',
        'backdrop-gradient-to-l': 'linear-gradient(270deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.35) 3%, rgba(255,255,255,0) 34%);',
      },
      backgroundPosition: {
        'backdrop': '50% 55%'
      },
      transitionProperty: {
        'position-x-axis': 'right, left',
      }
    },
  },
  plugins: [],
}
