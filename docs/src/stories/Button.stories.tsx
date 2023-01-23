import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

// import { Button } from '../../../components/src/button/Button';
import { Button } from "components"
import "components/dist/style.css"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Buttons",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    onLightBg: {
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Buttons = Template.bind({})
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Buttons.args = {
  variant: "primary",
  label: "BUTTON TEXT",
  onLightBg: true,
}
