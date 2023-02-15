import React from "react"
import { Meta, StoryFn, ArgTypes } from "@storybook/react"

import { Pill } from "components"
import "components/dist/style.css"
import { useDarkMode } from "storybook-dark-mode"

export default {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    purpose: {
      name: "Purpose",
      control: "radio",
      options: ["status", "primary", "ticker"],
    },
    isDisabled: {
      name: "Is Disabled",
      control: "boolean",
    },
    type: {
      name: "Type",
      control: "radio",
      options: ["success", "warning", "buy", "sell"],
    },
  },
} as Meta<typeof Pill>

const Template: StoryFn<typeof Pill> = (args: ArgTypes) => <Pill {...{ ...args, isDarkTheme: useDarkMode() }} />

export const Pills = Template.bind({})

Pills.args = {
  purpose: "status",
  isDisabled: false,
  type: "success",
  text: "success",
}