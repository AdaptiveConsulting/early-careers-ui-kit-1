import React from "react"
import "./buttonGroup.css"

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
   * is button disabled?
   */
  disabled?: boolean
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
export const ButtonGroup = ({
  variant,
  onLightBg,
  backgroundColor,
  label,
  disabled,
  ...props
}: ButtonProps) => {
  const base = `font-roboto flex text-[11px] items-center justify-center bg-grey-50 border-r-[1px] p-[4px] border-grey-300 text-center last:border-none last:rounded-r-lg first:bg-primary-light first:rounded-l hover:bg-grey-200 hover:font-semibold`

  return (
    <span className="flex">
      <button className={base}>1D</button>
      <button className={base}>5D</button>
      <button className={base}>1M</button>
      <button className={base}>3M</button>
      <button className={base}>6M</button>
      <button className={base}>YTD</button>
      <button className={base}>1Y</button>
      <button className={base}>5Y</button>
      <button className={base}>All</button>
    </span>
  )
}
