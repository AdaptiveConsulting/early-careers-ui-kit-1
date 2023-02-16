import React from "react"
import { Slider, sliderProps } from "components/src/Slider/Slider"
import { Meta } from "@storybook/react"

const meta: Meta = {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    size: {
      name: "Size",
      control: { type: "radio" },
      options: ["medium", "small"],
      defaultValue: "medium",
    },

    disabled: {
      name: "Disabled",
      control: "boolean",
      defaultValue: true,
    },
    color: {
      name: "Color",
      control: { type: "select" },
      options: ["default", "secondary", "disabled"],
      defaultValue: "primary",
    },

    orientation: {
      name: "Orientation",
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
    },

    min: {
      name: "Min. Value",
      control: { type: "number" },
      defaultValue: 0,
    },

    max: {
      name: "Max. Value",
      control: "number",
      defaultValue: 100,
    },
    step: {
      name: "Step",
      control: { type: "number" },
      defaultValue: 1,
    },
  },
}

export default meta

export const Default = (args: sliderProps) => <Slider {...args} />

Default.args = {
  disabled: false,
  size: "medium",
  color: "default",
  orientation: "horizontal",
  min: 0,
  max: 100,
  step: 1,
}
