import { themes } from "@storybook/theming"

export const parameters = {
  darkMode: {
    darkClass: "lights-out",
    lightClass: "lights-on",
    stylePreview: true,
    // Set the initial theme
    current: "light",
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "#292C2E" },
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
