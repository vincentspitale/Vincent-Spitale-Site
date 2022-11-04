/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      main: '"Inter"'
    },
    extend: {
      colors: {
        'card-gray': '#e9e9e9',
        'card-gray-d': '#222222',
      },
    },
  },
  plugins: [],
}
