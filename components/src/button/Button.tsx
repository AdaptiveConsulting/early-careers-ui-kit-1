import React from "react"
import "./button.css"

interface ButtonProps {
  /**
   * on light or on dark background?
   */
  onLightBg?: boolean
  /**
   * Type of button?
   */
  buttonType?: string
  // /**
  //  * Is this the principal call to action on the page?
  //  */
  // primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string
  // /**
  //  * How large should the button be?
  //  */
  // size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  buttonType,
  onLightBg,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  let base, hover, active, focus
  if (buttonType === "secondary" && onLightBg) {
    base =
      "font-roboto text-[11px] rounded-full w-auto h-21px px-4 bg-transparent text-primary-dark outline outline-1 outline-offset-[-1] outline-primary-dark "
    hover = "hover:bg-primary-dark hover:text-white hover:outline-none"
    active =
      "active:bg-transparent active:text-primary-dark active:outline active:outline-1 active:outline-offset-[-1] active:outline-primary-dark active:ring-0 "
    focus = "focus:ring-2 focus:ring-warning-main focus:ring-offset-2 "
  } else if (buttonType === "secondary" && !onLightBg) {
    base =
      "font-roboto text-[11px] rounded-full w-auto h-21px px-4 bg-transparent text-primary-light outline outline-1 outline-offset-[-1] outline-primary-light "
    hover = "hover:bg-primary-light hover:text-gray-800 "
    active =
      "active:bg-transparent active:text-primary-dark active:outline active:outline-1 active:outline-offset-[-1] active:outline-primary-main active:ring-0 "
    focus = "focus:ring-2 focus:ring-warning-light focus:ring-offset-2 "
  } else if (buttonType === "tertiary" && onLightBg) {
    base =
      "font-roboto text-[11px] rounded-full w-auto h-21px px-4 bg-transparent text-primary-dark outline-none outline-offset-0 no-underline "
    hover = "hover:underline "
    active =
      "active:bg-transparent active:text-primary-dark active:outline active:outline-1 active:outline-offset-[-1] active:outline-primary-dark active:ring-0 active:no-underline "
    focus =
      "focus:ring-2 focus:ring-warning-main focus:ring-offset-2 focus:bg-transparent focus:text-primary-dark focus:outline focus:outline-1 focus:outline-offset-[-1] focus:outline-primary-dark focus:no-underline"
  } else if (buttonType === "tertiary" && !onLightBg) {
    base =
      "font-roboto text-[11px] rounded-full w-auto h-21px px-4 bg-transparent text-primary-light outline-none outline-offset-0 no-underline "
    hover = "hover:underline "
    active =
      "active:bg-transparent active:text-primary-light active:outline active:outline-1 active:outline-offset-[-1] active:outline-primary-light active:ring-0 active:no-underline "
    focus =
      "focus:ring-2 focus:ring-warning-main focus:ring-offset-2 focus:bg-transparent focus:text-primary-light focus:outline focus:outline-1 focus:outline-offset-[-1] focus:outline-primary-light focus:no-underline"
  } else {
    //Primary
    base =
      "font-roboto text-[11px] rounded-full w-auto h-21px px-4 bg-primary-light text-black outline-none outline-offset-0 "
    hover = "hover:bg-primary-main "
    active =
      "active:outline-1 active:outline-offset-[-1] active:outline-primary-main active:bg-primary-light active:ring-0 "
    focus = "focus:ring-2 focus:ring-warning-main focus:ring-offset-2 "
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
