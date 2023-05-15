import { RadioGroup, radioGroupProps } from "@adaptive-academy/ui-kit-2023"
import { useDarkMode } from "storybook-dark-mode"
import { action } from "@storybook/addon-actions"

const testParams = [
  {
    id: "1",
    labelText: "Hello",
  },
  {
    id: "2",
    labelText: "Hello World",
  },
]
export default {
  title: "Components/RadioGroup",
  component: RadioGroup,

  argTypes: {
    isDarkTheme: { table: { disable: true } },
    defaultSelectedRadio: { table: { disable: true } },
    groupName: {
      name: "Group Name",
      control: "text",
    },
    onChange: {
      action: true,
      table: {
        disable: true,
      },
    },
    selectedItemId: { table: { disable: true } },
  },
}

export const RadioButtonGroupStory = (args: radioGroupProps) => {
  const handleRadioChange = (selectedItemId: string) => {
    action("Checked button id")(selectedItemId)
  }
  return (
    <RadioGroup
      {...args}
      isDarkTheme={useDarkMode()}
      onChange={handleRadioChange}
      defaultSelectedRadio="1"
    />
  )
}

RadioButtonGroupStory.storyName = "Radio Group"
RadioButtonGroupStory.args = {
  options: testParams,
  isHorizontal: false,
}
