import React from "react"
import "./Slider.css"

export interface sliderProps {
  size: "small" | "medium"
  color: "slider"
  disabled: true | false
  step: number
  min: number
  max: number
}

export const Slider = ({
  size,
  color,
  disabled,
  step,
  min,
  max,
}: sliderProps) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      className={`default ${color} ${size}`}
    />
  )
}
