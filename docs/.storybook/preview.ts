import { themes } from "@storybook/theming"

export const parameters = {
  darkMode: {
    // Set the initial theme
    current: "light",
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "white" },
  },
}

export default {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
