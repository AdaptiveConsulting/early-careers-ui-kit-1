import React from "react"
import { Slider, SliderProps } from "components/src/Slider/Slider"
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
    color: {
      name: "Color",
      control: { type: "select" },
      options: ["default", "secondary", "disabled"],
      defaultValue: "primary",
    },

    disabled: {
      name: "Disabled",
      control: "boolean",
      defaultValue: true,
    },

    step: {
      name: "Step",
      control: { type: "number" },
      defaultValue: 1,
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
    valueLabelDisplay: {
      name: "Value Label Display",
      control: { type: "radio" },
      options: ["on", "off", "auto"],
      defaultValue: "off",
    },
  },
}

export default meta

export const Default = (args: SliderProps) => <Slider {...args} />

const defaultProps: SliderProps = {
  size: "medium",
  color: "default",
  disabled: false,
  step: 1,
  min: 0,
  max: 100,
  valueLabelDisplay: "off",
  onSliderChange(myValue) {
    console.log("Slider Value: ", myValue)
    return myValue
  },
  onSliderChangeCommited(value) {
    console.log("Commited Value: ", value)
    return value
  },
}

Default.args = {
  ...defaultProps,
}
