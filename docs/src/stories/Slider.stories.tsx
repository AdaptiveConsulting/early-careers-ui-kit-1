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
    valueLabelDisplay: {
      name: "Value Label Display",
      control: { type: "radio" },
      options: ["off", "auto", "on"],
      defaultValue: "off",
    },
    color: {
      name: "Color",
      control: { type: "select" },
      options: ["default", "secondary", "disabled"],
      defaultValue: "primary",
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
    onChange: {
      action: true,
    },
    onChangeCommitted: {
      action: true,
    },
  },
}

export default meta

export const Default = (args: sliderProps) => <Slider {...args} />

Default.args = {
  disabled: false,
  size: "medium",
  color: "default",
  valueLabelDisplay: "off",
  min: 0,
  max: 100,
  step: 1,
}
