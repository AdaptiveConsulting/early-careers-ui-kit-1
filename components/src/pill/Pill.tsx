import React from "react"
import "./pill.css"

interface PillType {
  // Is the pill a Primary or Status Pill
  status: boolean
  // Is the type of the pill a Success, Warning, Buy or Sell Pill -- Only for Status Pills
  onLightBg: boolean
  type?: string | undefined
  text: string
}

export const Pill = ({ status, onLightBg, type, text }: PillType) => {
  let style = "rounded-full px-2 py-0 text-left text-sm font-medium"
  let label: string | undefined = ""
  let backgroundColor = ""

  if (status == true) {
    label = text?.toUpperCase()
    if (type === "success" && onLightBg) {
      style += ""
      backgroundColor = "#01C38D"
    }
    if (type === "success" && !onLightBg) {
      style += "border-2 border-green-500 text-common-white"
      backgroundColor = ""
    }
  }

  return (
    <button className={style} style={{ backgroundColor }} >
      <h6 className="font-roboto text-[11px] font-[500]">
        {label}
      </h6>
    </button>
  )
}