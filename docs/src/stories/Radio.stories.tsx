import { Meta } from "@storybook/react"
import { Radio } from "components"
import { useDarkMode } from "storybook-dark-mode"
import "components/dist/style.css"

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    isDisabled: {
      name: "Disable",
      control: "boolean",
    },
  },
} as Meta
export const RadioButtonStory = (args: {
  isDisabled?: boolean
  labelText: string
}) => <Radio {...{ ...args, isDarkTheme: useDarkMode() }} />

RadioButtonStory.storyName = "Radio"
RadioButtonStory.args = {
  labelText: "",
}
