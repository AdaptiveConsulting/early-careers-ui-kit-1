import React from "react"
import "./buttonGroup.css"
import { Button } from "../button/Button"

interface ButtonProps {
  /**
   * primary, secondary or tertiary?
   */
  variant?: string
  /**
   * 
   *
  /**
   * is button disabled?
   */
  content?: Array<string | number>

  disabled?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * Button orientation
   */
  orientation: string
}

/**
 * Primary UI component for user interaction
 */
export const ButtonGroup = ({
  variant,
  backgroundColor,
  orientation,
  content,
  disabled,
  ...props
}: ButtonProps) => {
  let styles = `font-roboto flex font-light text-[11px] items-center justify-center text-center w-[2rem] ${
    orientation === "horizontal"
      ? "first:rounded-l last:rounded-r"
      : "first:rounded-t last:rounded-b"
  } `
  switch (variant) {
    case "text":
      styles += `text-primary-main bg-transparent border-primary-light p-[4px] hover:bg-grey-50 first:text-common-black first:hover:bg-primary-main first:hover:border-primary-main first:bg-primary-light hover:z-10 ${
        orientation === "horizontal"
          ? "-ml-[1px] border-x-[1px] last:border-r-[0px] first:border-l-[0px]"
          : "-mt-[1px] border-y-[1px] last:border-b-[0px] first:border-t-[0px]"
      }`
      break
    case "contained":
      styles += `text-common-black bg-transparent p-[4px] bg-primary-main hover:bg-primary-dark border-primary-dark first:text-common-black first:hover:border-primary-dark first:bg-primary-light first:hover:bg-primary-main hover:z-10 ${
        orientation === "horizontal"
          ? "-ml-[1px] border-x-[1px] last:border-r-[0px] first:border-l-[0px]"
          : "-mt-[1px] border-y-[1px] last:border-b-[0px] first:border-t-[0px]"
      }`
      break
    case "outlined":
      styles += `text-primary-main bg-transparent border-[1px] border-primary-light p-[4px] border-primary-light hover:border-primary-main  first:bg-primary-light hover:z-10 ${
        orientation === "horizontal" ? "-ml-[1px]" : "-mt-[1px]"
      }`
      break
    case "primary":
      styles += `bg-grey-50 p-[4px] first:bg-primary-light first:font-normal hover:bg-grey-200 hover:font-normal ${
        orientation === "horizontal"
          ? "border-r-[1px] border-grey-300 last:border-none"
          : "border-none"
      }`
      break
  }

  return (
    <span
      className={`flex ${
        orientation === "horizontal" ? "flex-row" : "flex-col"
      }`}
    >
      {content?.map((item, key) => {
        return (
          <button key={key} className={styles}>
            {item}
          </button>
        )
      })}
    </span>
  )
}
