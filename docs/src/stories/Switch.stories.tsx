import { Meta } from "@storybook/react"
import { Switch, SwitchProps } from "components"
import { useDarkMode } from "storybook-dark-mode"
import "components/dist/style.css"

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      name: "Variant",
      options: ["primary", "secondary", "error", "success", "warning"],
      control: { type: "select" },
    },
    isChecked: {
      name: "Checked",
      control: { type: "boolean" },
    },
    isDisabled: {
      name: "Disabled",
      control: { type: "boolean" },
    },
  },
} as Meta

export const SwitchStory = (args: SwitchProps) => (
  <Switch {...{ ...args, isDarkTheme: useDarkMode() ? "dark" : "light" }} />
)
SwitchStory.storyName = "Switch"
SwitchStory.args = {
  variant: "primary",
}
