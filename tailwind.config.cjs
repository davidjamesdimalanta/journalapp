/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-800': '#060212',
      },
      fontFamily: {
        Inter : ['Inter', 'sans-serif'],
        NotoSerifJP : ['Noto Serif JP', 'serif'],
        OpenSans : ["Open Sans", "sans-serif"],
      },
      keyframes: {
        'fadeIn': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 1.7s ease-in-out',
        'fadeInLate': 'fadeIn 6s ease-in-out',
      }
    },
  },
  plugins: [],
}
