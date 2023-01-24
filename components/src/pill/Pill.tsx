import React from "react"
import "./pill.css"

interface PillType {
  // Is the pill a Primary or Status Pill
  purpose: string
  // Is the type of the pill a Success, Warning, Buy or Sell Pill -- Only for Status Pills
  onLightBg: boolean
  isDisabled: boolean
  type?: string
  text: string
}

export const Pill = ({ purpose, onLightBg, isDisabled, type, text }: PillType) => {
  let style = ""
  const label = text.toUpperCase()

  function typeFilter() {
    switch (type) {
      case "success":
        return style += onLightBg ? "bg-success-main" : "status-pill-dark outline-success-dark"
      case "warning":
        return style += onLightBg ? "bg-warning-main" : "status-pill-dark outline-warning-dark"
      case "buy":
        return style += onLightBg ? "bg-error-light" : "status-pill-dark outline-buy-dark"
      case "sell":
        return style += onLightBg ? "bg-secondary-light" : "status-pill-dark outline-sell-dark"
    }
  }

  if (purpose === "status") {
    style = "rounded-xl px-2 py-1 text-left text-sm font-medium pointer-events-none "
    typeFilter()
  } else if (purpose === "primary") {
    style = "rounded-xl px-2 py-1 text-left text-sm font-medium "
    if (isDisabled && onLightBg) {
      style += "primary-pill bg-primary-light"
    }
    if (isDisabled && !onLightBg) {
      style += "primary-pill bg-transparent"
    }
    style += onLightBg ? "bg-primary-main hover:bg-primary-light hover:outline-none hover:border-none " : "bg-transparent ticker-pill"
  } else if (purpose === "ticker") {
    style = "w-16 bg-transparent rounded-xl px-2 py-1 text-sm font-medium ticker-pill"
  }

  return (
    <button className={style}  >
      <h6 className="font-roboto text-[11px] font-[500]">
        {label}
      </h6>
    </button>
  )
}