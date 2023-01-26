import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { TemplateComponent } from "components"
import "components/dist/style.css"

export default {
  title: "Template/Template",
  component: TemplateComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //     backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof TemplateComponent>

const Template: ComponentStory<typeof TemplateComponent> = (args) => (
  <TemplateComponent {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//     label: 'BUTTON TEXT',
// };
