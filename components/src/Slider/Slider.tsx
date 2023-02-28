import "./Slider.css"
import { useState, useRef } from "react"
export interface sliderProps {
  size: "small" | "medium"
  color: "default" | "secondary" | "disabled"
  disabled?: true | false
  step?: number
  min: number
  max: number
  valueLabelDisplay?: "off" | "auto" | "on"
}

export const Slider = ({
  size,
  color,
  disabled,
  step,
  min,
  max,
  valueLabelDisplay,
}: sliderProps) => {
  const [value, setValue] = useState<number>(0)

  const rangeRef = useRef<HTMLInputElement | null>(null)
  const position = ((value - min) / (max - min)) * 100
  const [active, setActive] = useState(false)

  const handleMouseDown = () => {
    setActive(true)
  }

  const handleMouseUp = () => {
    setActive(false)
  }
  console.log(active)
  const auto = active ? "" : "invisible"

  const [width, setWidth] = useState<number>(0)
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (rangeRef.current !== null) {
      setWidth(
        Math.floor((rangeRef.current?.offsetWidth / window.innerWidth) * 100),
      )
      setValue(event.target.valueAsNumber)
    }
  }
  return (
    <section className="relative">
      <div className={`w-[100vw] flex`}>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          disabled={disabled}
          ref={rangeRef}
          className={`default ${color} ${size}`}
          onChange={handleOnChange}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
        <span
          className={` ${
            valueLabelDisplay === "off"
              ? "invisible"
              : valueLabelDisplay === "auto"
              ? auto
              : ""
          }  ${
            size === "small"
              ? "absolute top-[30px] bg-gray-600 text-white px-1 py-0.5 rounded shadow"
              : "absolute top-[30px] bg-gray-600 text-white px-2 py-1 rounded shadow"
          } `}
          style={{ left: `${position * (width / 100)}%` }}
        >
          {Math.floor(value)}
        </span>
      </div>
    </section>
  )
}
