/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'gasoek': ['"Gasoek One"', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'myarte-purple': '#9747FF',
        'myarte-dark': '#0D0D0D',
      },
    },
  },
  plugins: [],
}
