import React from "react"
import "./Slider.css"

export interface sliderProps {
  size: "small" | "medium"
  color: "primary" | "secondary"
  ValueLabelDisplay: "off" | "auto" | "on"
  disabled: true | false
}

export const Slider = (props: sliderProps) => {
  return (
    <input
      type="range"
      min="0"
      max="100"
      id="myRange"
      step={1}
      disabled={false}
      className="slider"
    />
  )
}
