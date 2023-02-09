/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // https://stackoverflow.com/questions/67289894/jit-tailwindcss-using-variable-in-bg-not-rendering-color
  // https://tailwindcss.com/docs/content-configuration#safelisting-classes
  safelist: [
    {
      pattern:
        /(bg|text)-(common|paper|grey|primary|secondary|error|warning|success|buy|sell|opacity-white|opacity-black)-(black|white|50|100|200|300|400|500|600|700|800|900|a100|a200|a400|a700|dark|main|light|95|83|38)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
      },
      colors: {
        common: {
          black: "#000",
          white: "#FFF",
        },
        paper: {
          black: "#323232",
          white: "#F9F9F9",
        },
        grey: {
          50: "#F9F9F9",
          100: "#F2F2F2",
          200: "#E4E4E4",
          300: "#CFCFCF",
          400: "#BBB",
          500: "#7f7f7f",
          600: "#6B6B6B",
          700: "#555555",
          800: "#4D4D4D",
          900: "#383838",
          a100: "#F2F2F2",
          a200: "#E4E4E4",
          a400: "#BBBBBB",
          a700: "#555555",
        },
        primary: {
          dark: "#4E5789",
          main: "#818AE0",
          light: "#BDC2FF",
        },
        secondary: {
          dark: "#005195",
          main: "#2D96FF",
          light: "#76C6FF",
        },
        error: {
          dark: "#B60017",
          main: "#FF274B",
          light: "#FF6877",
        },
        warning: {
          dark: "#EA4F01",
          main: "#FF8D00",
          light: "#FFBE45",
        },
        success: {
          dark: "#01603D",
          main: "#01C38D",
          light: "#5DF7BD",
        },
        buy: {
          dark: "#005195",
          main: "#2D96FF",
          light: "#76C6FF",
        },
        sell: {
          dark: "#B60017",
          main: "#FF274B",
          light: "#FF6877",
        },
        "opacity-white": {
          95: "rgba(255, 255, 255, 0.95)",
          83: "rgba(255, 255, 255, 0.83)",
          38: "rgba(255, 255, 255, 0.38)",
        },
        "opacity-black": {
          95: "rgba(0, 0, 0, 0.95)",
          83: "rgba(0, 0, 0, 0.83)",
          38: "rgba(0, 0, 0, 0.38)",
        },
      },
    },
  },
  plugins: [],
}
