/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue': ['Bebas Neue', 'cursive']
      }
    },
    colors: {
      'red': 'red',
      'gray': '#607D8B',
      'black': 'black',
      'white': 'white'
    },
  },
  plugins: [],
}
