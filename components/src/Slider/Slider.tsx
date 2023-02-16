import "./Slider.css"

export interface sliderProps {
  size: "small" | "medium"
  color: "default" | "secondary" | "disabled"
  orientation?: "horizontal" | "vertical"
  disabled?: true | false
  step?: number
  min?: number
  max?: number
}

export const Slider = ({
  size,
  color,
  disabled,
  orientation,
  step,
  min,
  max,
}: sliderProps) => {
  return (
    <div
      className={`flex ${
        orientation === "vertical" ? "flex-col" : "flex-row "
      }`}
    >
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className={`default ${color} ${size} ${
          orientation === "vertical" ? "transform rotate-90" : "none"
        }`}
      />
    </div>
  )
}
