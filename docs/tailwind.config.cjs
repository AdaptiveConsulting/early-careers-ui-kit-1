/** @type {import('tailwindcss').Config} */
// const componentConfig = require("components/tailwind.config.cjs") // eslint-disable-line
const componentConfig = require("@adaptive-academy/ui-kit-2023/tailwind.config.cjs") // eslint-disable-line

module.exports = {
  ...componentConfig,
  content: ["./src/**/*.{ts,tsx}", "../components/src/**/*.{ts,tsx}"],
}
