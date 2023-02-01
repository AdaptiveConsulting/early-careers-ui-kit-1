import React from "react"
import { Meta, StoryFn } from "@storybook/react"

// import { Button } from '../../../components/src/button/Button';
import { ButtonGroup } from "components"
import "components/dist/style.css"

interface argTypes {
  backgroundColor: string
  variant: string
  onLightBg: boolean
  disabled: boolean
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      options: ["primary", "outlined", "text", "contained"],
      control: { type: "radio" },
    },
    onLightBg: {
      control: { type: "boolean" },
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ButtonGroup> = (args: argTypes) => (
  <ButtonGroup {...args} />
)

export const Button_Group = Template.bind({})
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Button_Group.args = {
  variant: "primary",
  onLightBg: true,
  orientation: "horizontal",
  disabled: false,
}
