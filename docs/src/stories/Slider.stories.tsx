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
    orientation: {
      name: "Orientation",
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
    },
    valueLabelDisplay: {
      name: "Value Label Display",
      control: { type: "radio" },
      options: ["off", "auto", "on"],
      defaultValue: "off",
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      defaultValue: false,
    },
    track: {
      name: "Track",
      control: "radio",
      options: ["normal", "inverted", false],
      mapping: {
        false: false,
      },
      defaultValue: "normal",
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
