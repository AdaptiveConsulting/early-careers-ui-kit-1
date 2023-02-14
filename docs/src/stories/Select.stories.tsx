import { Meta } from "@storybook/react"
import { Select, selectProps } from "@adaptive-academy/ui-kit-2023"
import { useDarkMode } from "storybook-dark-mode"
import { action } from "@storybook/addon-actions"

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    variant: {
      name: "Variant",
      options: ["standard", "filled", "outlined"],
      control: { type: "select" },
      defaultValue: "standard",
    },
    color: {
      name: "Color",
      options: ["primary", "secondary", "error"],
      control: { type: "select" },
      defaultValue: "primary",
    },
    height: {
      name: "Height",
      options: ["medium", "small"],
      control: { type: "select" },
      defaultValue: "medium",
    },
    onChange: {
      action: true,
    },
  },
} as Meta

const defaultOptions: selectProps = {
  variant: "standard",
  color: "primary",
  height: "medium",
  options: [
    { id: "Option 1", label: "Option one", isSelected: false },
    { id: "Option 2", label: "Option Two", isSelected: false },
    { id: "Option 3", label: "Option Three", isSelected: false },
    { id: "Option 4", label: "Option Four", isSelected: false },
  ],
  onChange(option) {
    action("Selected option")(option)
    return option
  },
}

export const selectStory = (args: selectProps) => (
  <Select {...args} isDarkTheme={useDarkMode()} />
)
selectStory.storyName = "Select"
selectStory.args = {
  ...defaultOptions,
}
