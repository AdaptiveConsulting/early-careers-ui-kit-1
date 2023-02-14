import React from "react"
import { Meta, StoryFn } from "@storybook/react"

import { ButtonGroup } from "components"
import "components/dist/style.css"

interface argTypes {
  backgroundColor: string
  variant: string
  onLightBg: boolean
  disabled: boolean
}

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,

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

const Template: StoryFn<typeof ButtonGroup> = (args: argTypes) => (
  <ButtonGroup {...args} />
)

export const Default = Template.bind({})

Default.args = {
  variant: "primary",
  content: ["1D", "5D", "1M", "3M", "6M", "YTD", "1Y", "5Y", "All"],
  orientation: "horizontal",
  disabled: false,
}
