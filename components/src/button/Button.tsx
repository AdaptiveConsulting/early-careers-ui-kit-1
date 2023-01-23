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
  const baseDefault = "font-roboto text-[11px] rounded-full w-auto h-21px px-4"

  if (variant === "secondary") {
    const borderColor = onLightBg
      ? "outline-primary-dark"
      : "outline-primary-light"
    const hoverBgColor = onLightBg
      ? "hover:bg-primary-dark"
      : "hover:bg-primary-light"
    const hoverTextColor = onLightBg
      ? "hover:text-white"
      : "hover:text-gray-800"
    const activeBorderColor = onLightBg
      ? "active:outline-primary-dark"
      : "active:outline-primary-main"
    const textColor = onLightBg ? "primary-dark" : "primary-light"
    const focusColor = onLightBg
      ? "focus:ring-warning-main"
      : "focus:ring-warning-light"
    base =
      baseDefault +
      " bg-transparent " +
      `text-${textColor}` +
      " outline outline-1 outline-offset--1 " +
      borderColor +
      " "
    hover = hoverBgColor + " " + hoverTextColor + " hover:outline-none "
    active =
      "active:bg-transparent active:outline active:outline-1 active:-outline-offset-1 active:ring-offset-0 active:ring-0 " +
      activeBorderColor +
      ` active:text-${textColor} `
    focus =
      focusColor + " focus:ring-2 focus:ring-offset-2 active:bg-transparent "
  } else if (variant === "tertiary") {
    const mainColour = onLightBg ? "primary-dark" : "primary-light"
    const focusColor = onLightBg
      ? "focus:ring-warning-main"
      : "focus:ring-warning-light"

    base =
      baseDefault +
      ` text-${mainColour}` +
      " bg-transparent outline-none outline-offset-0 no-underline "
    hover = "hover:underline "
    active =
      `active:text-${mainColour} active:outline-${mainColour}` +
      " active:bg-transparent active:outline active:outline-1 active:outline-offset--1 active:ring-0 active:ring-offset-0 active:no-underline "
    focus =
      `${focusColor} focus:outline-${mainColour} focus:text-${mainColour}` +
      " focus:ring-2 focus:ring-offset-2 focus:bg-transparent focus:outline focus:outline-1 focus:outline-offset--1 focus:no-underline"
  } else {
    //Primary
    base =
      baseDefault +
      " bg-primary-light text-black outline-none outline-offset-0 "
    hover = "hover:bg-primary-main "
    active =
      "active:outline-1 active:outline-offset--1 active:outline-primary-main active:bg-primary-light active:ring-0 active:ring-offset-0 "
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
