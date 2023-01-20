import React from "react"
import "./checkbox.css"
import { useEffect } from "react"
import { isDepsOptimizerEnabled } from "vite"
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
  text,
  isDarkTheme,
}: CheckboxProps) => {
  let base, accentColor
  if (size === "small") {
    base = "w-3 h-3"
  } else if (size === "medium") {
    base = "w-4 h-4"
  }
  if (checkboxType === "Primary" && isDarkTheme) {
    accentColor = "accent-primary-dark"
  } else if (checkboxType === "Primary" && !isDarkTheme) {
    accentColor = "accent-primary-light"
  }

  if (checkboxType === "Secondary" && isDarkTheme) {
    accentColor = "accent-secondary-dark"
  } else if (checkboxType === "Secondary" && !isDarkTheme) {
    accentColor = "accent-secondary-light"
  }
  if (checkboxType === "Error" && isDarkTheme) {
    accentColor = "accent-error-dark"
  } else if (checkboxType === "Error" && !isDarkTheme) {
    accentColor = "accent-error-light"
  }
  if (checkboxType === "Success" && isDarkTheme) {
    accentColor = "accent-success-dark"
  } else if (checkboxType === "Success" && !isDarkTheme) {
    accentColor = "accent-success-light"
  }
  if (checkboxType === "Warning" && isDarkTheme) {
    accentColor = "accent-warning-dark"
  } else if (checkboxType === "Warning" && !isDarkTheme) {
    accentColor = "accent-warning-light"
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
