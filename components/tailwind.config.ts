/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#DBDDFF",
        "primary-main": "#A9ABD1",
        "primary-dark": "#5F618D",
      }
    },
  },
  plugins: [],
}