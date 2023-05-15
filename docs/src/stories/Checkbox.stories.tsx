import { useDarkMode } from "storybook-dark-mode"
import { Checkbox, CheckboxProps } from "@adaptive-academy/ui-kit-2023"
import { Meta } from "@storybook/react"

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      name: "Size",
      control: "radio",
      options: ["medium", "small"],
      defaultValue: "medium",
    },
    isDisabled: {
      name: "Disabled",
      control: "boolean",
      defaultValue: false,
    },
    checkboxType: {
      name: "Checkbox Type ",
      control: "select",
      options: ["Primary", "Secondary", "Error", "Success", "Warning"],
      defaultValue: "Primary",
    },
  },
} as Meta

export const CheckboxStory = (args: CheckboxProps) => (
  <Checkbox {...args} isDarkTheme={useDarkMode()} />
)
CheckboxStory.storyName = "Checkbox"
CheckboxStory.args = {}
