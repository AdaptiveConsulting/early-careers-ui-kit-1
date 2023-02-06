import React from "react"
import "./radio.css"

export interface RadioProps {
  isDisabled?: boolean
  isDarkTheme?: boolean
  labelText: string
}
export const Radio = ({
  isDisabled = false,
  labelText,
  isDarkTheme,
}: RadioProps) => {
  const themeColor = isDarkTheme ? "border-grey-400" : "border-grey-600"
  const disabledColors = isDarkTheme
    ? "disabled:border-white/[.38]"
    : "disabled:border-black/[.38]"
  const buttonTheme = !isDarkTheme
    ? "text-opacity-black-83 peer-checked:text-opacity-black-95 peer-hover:text-opacity-black-95 peer-disabled:text-black/[.38] peer-disabled:pointer-events-none"
    : "text-opacity-white-83 peer-checked:text-opacity-white-95 peer-hover:text-opacity-white-95 peer-disabled:text-white/[.38] peer-disabled:pointer-events-none"
  return (
    <div>
      <div className="flex items-baseline gap-2">
        <input
          type="radio"
          name="options"
          id="radio-input"
          disabled={isDisabled ? true : false}
          className={`peer appearance-none min-w-[16px] min-h-[16px] w-4 h-4 border-2 border-solid ${themeColor} rounded-full bg-clip-content p-0.5 hover:border-primary-main checked:bg-primary-main checked:border-primary-main disabled:pointer-events-none ${disabledColors}`}
        />
        <label
          htmlFor="radio-input"
          className={`${buttonTheme} max-w-fill break-words`}
        >
          {labelText}
        </label>
      </div>
    </div>
  )
}
