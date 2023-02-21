import "./Slider.css"
import { useState } from "react"
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
  const [value, setValue] = useState<number>(min || 0)
  const [position, setPosition] = useState<number>(0)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value))
    setPosition((event.target.valueAsNumber / (max || 1)) * 100)
  }
  return (
    <section className="pt-12">
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
            orientation === "vertical" ? "transform rotate-90 " : "none"
          }`}
          onChange={handleOnChange}
        />
        <span
          className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-6"
          style={{ left: `${position}%` }}
        >
          <span className="bg-black text-white px-2 py-1 rounded shadow p-[-50px]">
            {value}
          </span>
        </span>
      </div>
    </section>
  )
}
