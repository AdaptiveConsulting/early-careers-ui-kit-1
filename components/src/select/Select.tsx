import { KeyboardEvent, useState } from "react"
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

export const Select = ({ variant, height, color, isDarkTheme, options, onChange }: selectProps) => {
  const [onToggle, setonToggle] = useState(false)
  const [cursor, setCursor] = useState(0)
  const [selectedOption, setSelectedOption] = useState<Options>({ label: "", id: "" })

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
    if (key === "ArrowDown" && cursor < options?.length - 1) setCursor((prev) => prev + 1)
    if (key === "Enter") handleSelectedOption(options[cursor])
  }

  const Icon = () => {
    return onToggle ? (
      <svg width="12" height="9" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.976461 4.08969C0.756461 4.30269 0.396461 4.30269 0.176461 4.08969C-0.0455394 3.87569 -0.0455394 3.52969 0.176461 3.31569L3.41246 0.190685C3.63346 -0.0223145 3.99246 -0.0223145 4.21346 0.190685L7.45046 3.31569C7.67146 3.52969 7.67146 3.87569 7.45046 4.08969C7.22946 4.30269 6.87046 4.30269 6.64946 4.08969L3.81146 1.34969L0.977461 4.08969H0.976461Z"
          fill="#727272"
        />
      </svg>
    ) : (
      <svg width="12" height="9" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.64976 0.19068C6.86976 -0.0223204 7.22976 -0.0223204 7.44976 0.19068C7.67176 0.40468 7.67176 0.75068 7.44976 0.96468L4.21376 4.08968C3.99276 4.30268 3.63376 4.30268 3.41276 4.08968L0.17576 0.96468C-0.0452402 0.75068 -0.0452402 0.40468 0.17576 0.19068C0.39676 -0.0223204 0.75576 -0.0223204 0.97676 0.19068L3.81476 2.93068L6.64876 0.19068H6.64976Z"
          fill="#727272"
        />
      </svg>
    )
  }
  const theme = {
    text: `${isDarkTheme ? "text-white" : "text-black"}`,
    bg: `${isDarkTheme ? "bg-black shadow-xl shadow-white/[0.2]" : "bg-white shadow-2xl"}`,
    selected: `mx-2 rounded-full cursor-pointer ${isDarkTheme ? "bg-primary-dark" : "bg-primary-light"}`,
    standard: `border-b-2 ${isDarkTheme ? "border-[#555555] hover:border-[#7f7f7f]" : "border-grey-200 hover:border-grey-400"}`,
    filled: `border-b-2 ${isDarkTheme ? "bg-[#444444] border-[#555555] hover:border-[#7f7f7f] hover:bg-[#4d4d4d]" : "bg-[#eaeaea] border-gray-300 hover:border-grey-400 hover:bg-[#e2e2e2]"}`,
    outlined: `outline outline-[1px] rounded-[5px] focus-within:[&:not(hover)]:outline-[2px] ${isDarkTheme ? "outline-[#555555] hover:outline-white" : "hover:outline-black outline-grey-400"}`,
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
        <div tabIndex={-1} className={`${theme[variant]} ${selectColors[color]} cursor-pointer flex items-center px-2`} onClick={handleClick}>
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
        <div className={`mt-5 ${theme.bg} ${theme.text} rounded-xl min-h-[90px] max-h-[200px] overflow-auto py-4`}>
          <div className="flex flex-col">
            {options?.map((option, i) => {
              return (
                <div
                  tabIndex={1}
                  onMouseEnter={() => setCursor(i)}
                  key={option.id}
                  className={option.isSelected || cursor === i ? `${theme.selected}` : `hover:bg-primary-light mx-2 rounded-full cursor-pointer`}
                  onClick={() => handleSelectedOption(option)}
                >
                  <p className="py-2 pl-[20px] text-[16px] font-normal">{option.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
