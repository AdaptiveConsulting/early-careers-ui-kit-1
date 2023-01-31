import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { useDarkMode } from "storybook-dark-mode"

// import { Button } from '../../../components/src/button/Button';
import { Button } from "components"
import "components/dist/style.css"

interface argTypes {
  backgroundColor: string
  variant: string
  onLightBg: boolean
  disabled: boolean
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Buttons",
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
    disabled: {
      control: { type: "boolean" },
    },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args: argTypes) => {
  console.log(useDarkMode() ? "dark" : "light")
  return <Button {...args} />
}

export const Buttons = Template.bind({})
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Buttons.args = {
  variant: "primary",
  label: "BUTTON TEXT",
  onLightBg: true,
  disabled: false,
}
