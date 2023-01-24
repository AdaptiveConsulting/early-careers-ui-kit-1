import React from "react"
import "./button.css"

interface ButtonProps {
  /**
   * primary, secondary or tertiary?
   */
  variant?: string
  /**
   * on light or on dark background?
   */
  onLightBg?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * Button contents
   */
  label: string
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant,
  onLightBg,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  let base, hover, active, focus
  const focusColor = onLightBg
    ? "focus:ring-warning-main"
    : "focus:ring-warning-light"
  const mainColour = onLightBg ? "primary-dark" : "primary-light"

  if (variant === "secondary") {
    const baseChanges = onLightBg
      ? "text-primary-dark outline-primary-dark"
      : "text-primary-light outline-primary-light"
    const hoverChanges = onLightBg
      ? "hover:bg-primary-dark hover:text-common-white"
      : "hover:bg-primary-light hover:text-gray-800"
    const activeChanges = onLightBg
      ? "active:outline-primary-dark active:text-primary-dark"
      : "active:outline-primary-main active:text-primary-light"

    base = `btn-base btn-secondary ${baseChanges} `
    hover = `hover:outline-none ${hoverChanges} `
    active = `active:bg-transparent active:outline active:outline-1 active:outline-offset-[-1] active:ring-offset-0 active:ring-0 ${activeChanges} `
    focus = `focus:ring-2 focus:ring-offset-2 active:bg-transparent ${focusColor} `
  } else if (variant === "tertiary") {
    base = `btn-base btn-tertiary text-${mainColour} `
    hover = "hover:underline "
    active = `active:text-${mainColour} active:outline-${mainColour} active:bg-transparent active:outline active:outline-1 active:outline-offset-[-1] active:ring-0 active:ring-offset-0 active:no-underline `
    focus = `${focusColor} focus:outline-${mainColour} focus:text-${mainColour} focus:ring-2 focus:ring-offset-2 focus:bg-transparent focus:outline focus:outline-1 focus:outline-offset-[-1] focus:no-underline`
  } else {
    //Primary
    base = `btn-base bg-primary-light text-black outline-none outline-offset-0 `
    hover = "hover:bg-primary-main "
    active =
      "active:outline-1 active:outline-offset-[-1] active:outline-primary-main active:bg-primary-light active:ring-0 active:ring-offset-0 "
    focus =
      "focus:ring-2 focus:ring-warning-main focus:ring-offset-2 focus:ring-offset-parent"
  }

  return (
    <button
      type="button"
      className={base + hover + active + focus}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
