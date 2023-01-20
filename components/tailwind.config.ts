/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-light": "#DBDDFF",
        "primary-main": "#A9ABD1",
        "primary-dark": "#5F618D",
        "secondary-dark": "#005195",
        "secondary-light": "#76C6FF",
        "warning-main": "#FF8D00",
        "warning-light": "#FFBE45",
        "warning-dark": "#EA4F01",
        "text-gray-800": "#4D4D4D",
        "error-dark": "#B60017",
        "error-light": "#FF6877",
        "success-light": "#5DF7BD",
        "success-dark": "#01603D",
      },
    },
  },
  plugins: [],
}
