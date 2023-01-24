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
  status: true,
  type: "success",
  text: "Success"
}