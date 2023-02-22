import "./Slider.css"
import { useState, useRef } from "react"
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
  const [value, setValue] = useState<number>(0)

  const rangeRef = useRef(null)
  const position = ((value - min) / (max - min)) * 100

  const [width, setWidth] = useState<number>(0)
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(
      Math.floor((rangeRef.current?.offsetWidth / window.innerWidth) * 100),
    )
    setValue(event.target.valueAsNumber)
  }
  return (
    <section className="relative">
      <div
        className={`w-[100vw] flex ${
          orientation === "vertical" ? "flex-col" : "flex-row "
        }`}
      >
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          ref={rangeRef}
          className={`default ${color} ${size} ${
            orientation === "vertical" ? "transform rotate-90 " : "none"
          }`}
          onChange={handleOnChange}
        />

        <span
          className={` absolute top-[30px] bg-black text-white px-2 py-1 rounded shadow`}
          style={{ left: `${position * (width / 100)}%` }}
        >
          {Math.floor(value)}
        </span>
      </div>
    </section>
  )
}
