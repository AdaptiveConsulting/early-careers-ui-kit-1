/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        "primary-light": "#DBDDFF",
        "primary-main": "#A9ABD1",
        "primary-dark": "#5F618D",
        "warning-main": "#FF8D00",
        "warning-light": "#FFBE45",
        "text-gray-800": "#4D4D4D"
      }
    },
  },
  plugins: [],
}