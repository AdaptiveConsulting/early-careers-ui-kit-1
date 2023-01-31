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
  disabled,
  ...props
}: ButtonProps) => {
  let styles =
    "font-roboto flex text-[11px] items-center justify-center text-center "
  switch (variant) {
    case "text":
      styles += `text-primary-main -ml-[1px] bg-transparent border-x-[1px] border-primary-light p-[4px] hover:bg-grey-50 last:rounded-r-lg last:border-r-[0px] first:text-common-black first:hover:bg-primary-main first:hover:border-primary-main first:border-l-[0px] first:bg-primary-light first:rounded-l hover:z-10`
      break
    case "contained":
      styles += `text-common-black -ml-[1px] bg-transparent border-x-[1px] border-primary-dark p-[4px] bg-primary-main hover:bg-primary-dark last:rounded-r-lg last:border-r-[0px] first:text-common-black first:hover:border-primary-dark first:border-l-[0px] first:bg-primary-light first:hover:bg-primary-main first:rounded-l hover:z-10`
      break
    case "outlined":
      styles += `text-primary-main -ml-[1px] bg-transparent border-[1px] border-primary-light p-[4px] border-grey-300 hover:border-primary-main  last:rounded-r-lg first:bg-primary-light first:rounded-l hover:z-10`
      break
    case "primary":
      styles += `bg-grey-50 border-r-[1px] p-[4px] border-grey-300 last:border-none last:rounded-r-lg first:bg-primary-light first:rounded-l hover:bg-grey-200 hover:font-semibold`
      break
  }

  return (
    <span className="flex">
      <button className={styles}>1D</button>
      <button className={styles}>5D</button>
      <button className={styles}>1M</button>
      <button className={styles}>3M</button>
      <button className={styles}>6M</button>
      <button className={styles}>YTD</button>
      <button className={styles}>1Y</button>
      <button className={styles}>5Y</button>
      <button className={styles}>All</button>
    </span>
  )
}
