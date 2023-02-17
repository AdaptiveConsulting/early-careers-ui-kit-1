import React from "react"
import "./radio.css"

export interface RadioProps {
  isDisabled?: boolean
  isDarkTheme?: boolean
  labelText: string | number
  optionId: string
  optionsName?: string
}

export const Radio = ({
  isDisabled = false,
  isDarkTheme,
  labelText,
  optionId,
  optionsName,
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
      <div className={`flex items-start gap-2 max-w-full break-words`}>
        <input
          id={optionId}
          type="radio"
          disabled={isDisabled ? true : false}
          name={optionsName}
          className={`peer appearance-none min-w-[16px] min-h-[16px] w-4 h-4 mt-[3.5px] border-2 border-solid ${themeColor} rounded-full bg-clip-content p-0.5 hover:border-primary-main checked:bg-primary-main checked:border-primary-main disabled:pointer-events-none ${disabledColors}`}
        />
        {/* </div> */}
        <label htmlFor={optionId} className={`${buttonTheme} max-w-full`}>
          {labelText}
        </label>
      </div>
    </div>
  )
}
