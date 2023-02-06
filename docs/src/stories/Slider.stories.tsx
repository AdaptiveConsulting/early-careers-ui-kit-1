import React from "react"
import { Slider, sliderProps } from "components/src/Slider/Slider"
import { Meta } from "@storybook/react"

const meta: Meta = {
  title: "Slider",
  component: Slider,
  argTypes: {
    size: {
      name: "Size",
      control: { type: "radio" },
      options: ["medium", "small"],
      defaultValue: "medium",
    },
    color: {
      name: "Color",
      control: { type: "select" },
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },

    disabled: {
      name: "Disabled",
      control: "boolean",
      defaultValue: false,
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
