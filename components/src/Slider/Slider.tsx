import React from "react"
import "./Slider.css"

export interface sliderProps {
  size: "small" | "medium"
  color: "primary" | "secondary"
  orientation: "horizontal" | "vertical"
  ValueLabelDisplay: "off" | "auto" | "on"
  disabled: true | false
  track: "normal" | "inverted" | "false"
  // minValue: Number
  // maxValue: Number
  // step: Number
  // marks?: {}
}

export const Slider = (props: sliderProps) => {
  return (
    <input
      type="range"
      aria-valuemin={0}
      min="0"
      max="100"
      id="myRange"
      className=" slider w-full bg-primary-main"
    />
  )
}
