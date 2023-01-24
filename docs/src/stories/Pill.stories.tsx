import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Pill } from "components"
import "components/dist/style.css"

export default {
  title: "Example/Pill",
  component: Pill,
} as ComponentMeta<typeof Pill>

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />

export const Success = Template.bind({})
Success.args = {
  purpose: "status",
  onLightBg: false,
  isDisabled: false,
  type: "success",
  text: "success"
}
export const Warning = Template.bind({})
Warning.args = {
  purpose: "status",
  onLightBg: false,
  isDisabled: false,
  type: "warning",
  text: "warning"
}
export const Buy = Template.bind({})
Buy.args = {
  purpose: "status",
  onLightBg: false,
  isDisabled: false,
  type: "buy",
  text: "buy"
}
export const Sell = Template.bind({})
Sell.args = {
  purpose: "status",
  onLightBg: false,
  isDisabled: false,
  type: "sell",
  text: "sell"
}
export const Primary = Template.bind({})
Primary.args = {
  purpose: "primary",
  onLightBg: false,
  isDisabled: false,
  text: "button"
}
export const Ticker = Template.bind({})
Ticker.args = {
  purpose: "ticker",
  onLightBg: false,
  isDisabled: false,
  text: "GOOGL"
}
