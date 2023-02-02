import { Meta, StoryFn } from "@storybook/react"
import { Switch, Props } from "components/src"
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
    mode: {
      name: "Mode",
      control: { type: null },
    },
  },
} as Meta

const Template: StoryFn<typeof Switch> = (args: Props) => (
  <Switch {...{ ...args, mode: useDarkMode() ? "dark" : "light" }} />
)

export const Default = Template.bind({})

Default.args = {
  variant: "primary",
}
