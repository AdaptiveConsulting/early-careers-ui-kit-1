import { Meta } from "@storybook/react"
import { Switch, SwitchProps } from "@adaptive-academy/ui-kit-2023"
import { useDarkMode } from "storybook-dark-mode"

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
  <Switch {...args} isDarkTheme={useDarkMode()} />
)
SwitchStory.storyName = "Switch"
SwitchStory.args = {
  variant: "primary",
}
