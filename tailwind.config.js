/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}