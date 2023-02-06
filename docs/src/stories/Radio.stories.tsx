import { StoryFn } from "@storybook/react"
import { Radio } from "components"
import "components/dist/style.css"
import { useDarkMode } from "storybook-dark-mode"

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    isDisabled: {
      name: "Disable",
      control: "boolean",
    },
  },
}
const Template: StoryFn<typeof Radio> = (args: {
  isDisabled?: boolean
  labelText: string
}) => <Radio {...{ ...args, isDarkTheme: useDarkMode() }} />

export const Primary = Template.bind({})
Primary.args = {
  labelText: "Option 1",
}
// /
