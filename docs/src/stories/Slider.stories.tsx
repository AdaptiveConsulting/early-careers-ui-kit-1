import React from "react"
import { Slider, sliderProps } from "components/src/Slider/Slider"
import { Meta } from "@storybook/react"
import { Template } from "ejs"

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
    // color: {
    //   name: "Color",
    //   control: { type: "select" },
    //   options: ["primary", "secondary"],
    // },

    disabled: {
      name: "Disabled",
      control: "boolean",
      defaultValue: true,
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

// export const Disabled = Default.bind({})

Default.args = {
  disabled: false,
  color: "primary",
  size: "medium",
  min: 0,
  max: 100,
  step: 1,
}
