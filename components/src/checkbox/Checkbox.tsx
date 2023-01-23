import React from "react"
import "./checkbox.css"
interface CheckboxProps {
  size?: "small" | "medium"
  checkboxType: string
  isDisabled: boolean
  text: string
  isDarkTheme: boolean
}
export const Checkbox = ({
  size,
  checkboxType,
  isDisabled,
  isDarkTheme,
}: CheckboxProps) => {
  let accentColor = "accent-primary-light"
  const base = size === "small" ? "w-3 h-3" : "w-4 h-4"

  switch (checkboxType) {
    case "Primary":
      accentColor = isDarkTheme ? "accent-primary-dark" : "accent-primary-light"
      break
    case "Secondary":
      accentColor = isDarkTheme
        ? "accent-secondary-dark"
        : "accent-secondary-light"
      break
    case "Error":
      accentColor = isDarkTheme ? "accent-error-dark" : "accent-error-light"
      break
    case "Success":
      accentColor = isDarkTheme ? "accent-success-dark" : "accent-success-light"
      break
    case "Warning":
      accentColor = isDarkTheme ? "accent-warning-dark" : "accent-warning-light"
      break
  }

  const disabled = isDisabled ? true : false
  return (
    <input
      type="checkbox"
      disabled={disabled}
      className={`${accentColor} ${base}`}
    ></input>
  )
}
