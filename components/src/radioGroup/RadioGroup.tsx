import { useState, createContext } from "react"
import { Radio } from "../radio/Radio"

export interface radioGroupProps {
  isHorizontal?: boolean
  isDarkTheme?: boolean
  options: { id: string; labelText: string }[]
  groupName: string
  onChange?: (id: string) => void
  defaultSelectedRadio?: string
}

export const GroupContext = createContext("")

export const RadioGroup = ({
  isHorizontal,
  isDarkTheme,
  options,
  groupName,
  onChange,
  defaultSelectedRadio,
}: radioGroupProps) => {
  const validOptionIds = options.map((option) => option.id)
  if (defaultSelectedRadio && !validOptionIds.includes(defaultSelectedRadio)) {
    throw new Error(
      `Invalid defaultSelectedRadio "${defaultSelectedRadio}". Must be one of ${validOptionIds.join(
        ", ",
      )}.`,
    )
  }
  const [selectedRadioButtonId, setSelectedRadioButtonId] = useState<
    string | null
  >(defaultSelectedRadio || null)

  const handleRadioChange = (id: string) => {
    setSelectedRadioButtonId(id)
    if (onChange) {
      onChange(id)
    }
  }

  const alignment = isHorizontal ? "flex flex-row gap-2" : "flex flex-col gap-2"

  return (
    <div className={alignment}>
      <GroupContext.Provider value={groupName}>
        {options?.map((item) => (
          <Radio
            labelText={item.labelText}
            key={item.id}
            optionId={item.id}
            isDarkTheme={isDarkTheme}
            checked={selectedRadioButtonId === item.id}
            onChange={() => handleRadioChange(item.id)}
          />
        ))}
      </GroupContext.Provider>
    </div>
  )
}
