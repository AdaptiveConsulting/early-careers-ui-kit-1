import { KeyboardEvent, useState } from "react"
import { ChevronDown, ChevronUp } from "../icons"
interface Options {
  id: string
  label: string
  isSelected?: boolean
}
export type selectProps = {
  variant: "standard" | "filled" | "outlined"
  height: "medium" | "small"
  color: "primary" | "secondary" | "error"
  isDarkTheme?: true | false
  options: Options[]
  onChange: (option: Options) => void
}

export const Select = ({
  variant,
  height,
  color,
  isDarkTheme,
  options,
  onChange,
}: selectProps) => {
  const [onToggle, setonToggle] = useState(false)
  const [cursor, setCursor] = useState(0)
  const [selectedOption, setSelectedOption] = useState<Options>({
    label: "",
    id: "",
  })

  const handleClick = () => {
    return setonToggle((prev) => !prev)
  }

  const handleSelectedOption = (option: Options) => {
    handleClick()
    setSelectedOption((prevState) => {
      if (prevState.id === option.id) {
        onChange(prevState)
        return prevState
      } else {
        prevState.isSelected = false
        option.isSelected = true
        onChange(option)
        return option
      }
    })
    if (typeof onChange === "function") {
      return onChange
    }
  }

  const handleKeyPress = ({ key }: KeyboardEvent) => {
    // used to navigate through the options available and select respective one
    if (key === "ArrowUp" && cursor > 0) setCursor((prev) => prev - 1)
    if (key === "ArrowDown" && cursor < options?.length - 1)
      setCursor((prev) => prev + 1)
    if (key === "Enter") handleSelectedOption(options[cursor])
  }

  const Icon = () => {
    return onToggle ? (
      <ChevronUp color="fill-grey-600" />
    ) : (
      <ChevronDown color="fill-grey-600" />
    )
  }
  const theme = {
    text: `${isDarkTheme ? "text-white" : "text-black"}`,
    bg: `${
      isDarkTheme
        ? "bg-black shadow-xl shadow-white/[0.2]"
        : "bg-white shadow-2xl"
    }`,
    selected: `mx-2 rounded-full cursor-pointer ${
      isDarkTheme ? "bg-primary-dark" : "bg-primary-light"
    }`,
    standard: `border-b-2 ${
      isDarkTheme
        ? "border-[#555555] hover:border-[#7f7f7f]"
        : "border-grey-200 hover:border-grey-400"
    }`,
    filled: `border-b-2 ${
      isDarkTheme
        ? "bg-[#444444] border-[#555555] hover:border-[#7f7f7f] hover:bg-[#4d4d4d]"
        : "bg-[#eaeaea] border-gray-300 hover:border-grey-400 hover:bg-[#e2e2e2]"
    }`,
    outlined: `outline outline-[1px] rounded-[5px] focus-within:[&:not(hover)]:outline-[2px] ${
      isDarkTheme
        ? "outline-[#555555] hover:outline-white"
        : "hover:outline-black outline-grey-400"
    }`,
  }

  const selectColors = {
    // [&:not(hover)] --> override the hover class when focused
    error: `focus-within:[&:not(hover)]:border-error-main focus-within:[&:not(hover)]:outline-error-main`,
    primary: `focus-within:[&:not(hover)]:border-primary-main focus-within:[&:not(hover)]:outline-primary-main`,
    secondary: `focus-within:[&:not(hover)]:border-secondary-main focus-within:[&:not(hover)]:outline-secondary-main`,
  }

  const selectSize = {
    medium: "h-[55px]",
    small: "h-[40px]",
  }

  return (
    <>
      <section className={`flex flex-col`}>
        <div
          tabIndex={-1}
          className={`${theme[variant]} ${selectColors[color]} cursor-pointer flex items-center px-2`}
          onClick={handleClick}
        >
          {/* positive tabIndex indicates that it can be selected using tab (accessibility reasons) */}
          <input
            tabIndex={1}
            type="text"
            className={`w-full ${selectSize[height]} ${theme.text} outline-none cursor-pointer bg-transparent`}
            value={selectedOption?.label}
            readOnly
            onKeyDown={handleKeyPress}
          />
          <Icon />
        </div>
      </section>
      {onToggle && (
        <div
          className={`mt-5 ${theme.bg} ${theme.text} rounded-xl min-h-[90px] max-h-[200px] overflow-auto py-4`}
        >
          <div className="flex flex-col">
            {options?.map((option, i) => {
              return (
                <div
                  tabIndex={1}
                  onMouseEnter={() => setCursor(i)}
                  key={option.id}
                  className={
                    option.isSelected || cursor === i
                      ? `${theme.selected}`
                      : `hover:bg-primary-light mx-2 rounded-full cursor-pointer`
                  }
                  onClick={() => handleSelectedOption(option)}
                >
                  <p className="py-2 pl-[20px] text-[16px] font-normal">
                    {option.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
