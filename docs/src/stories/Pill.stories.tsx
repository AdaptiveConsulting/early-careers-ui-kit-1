import { Meta } from "@storybook/react"
import { Pill } from "components"
import { useDarkMode } from "storybook-dark-mode"

interface argTypes {
  purpose: string
  isDisabled: boolean
  type: string
  text: string
}

export default {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    purpose: {
      name: "Purpose",
      control: "radio",
      options: ["status", "primary", "ticker"],
    },
    isDisabled: {
      name: "Is Disabled",
      control: "boolean",
    },
    type: {
      name: "Type",
      control: "radio",
      options: ["success", "warning", "buy", "sell"],
    },
  },
} as Meta

export const PillStory = (args: argTypes) => (
  <Pill {...args} isDarkTheme={useDarkMode()} />
)

PillStory.storyName = "Pill"
PillStory.args = {
  purpose: "status",
  isDisabled: false,
  type: "success",
  text: "success",
}
