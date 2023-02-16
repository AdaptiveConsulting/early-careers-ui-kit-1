import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { useDarkMode } from "storybook-dark-mode"
// import { Button } from '../../../components/src/button/Button';
import { Button } from "components"
import "components/dist/style.css"

interface argTypes {
  backgroundColor: string
  variant: string
  isDarkTheme: boolean
  disabled: boolean
}

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} as Meta

export const ButtonStory = (args: argTypes) => (
  <Button {...{ ...args, isDarkTheme: useDarkMode() }} />
)
ButtonStory.storyName = "Button"
ButtonStory.args = {
  variant: "primary",
  label: "BUTTON TEXT",
  disabled: false,
}
