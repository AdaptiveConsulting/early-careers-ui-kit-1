import "./Slider.css"

interface sliderProps {
  size: "small" | "medium"
  color: "primary" | "secondary"
  orientation: "horizontal" | "vertical"
  ValueLabelDisplay: "off" | "auto" | "on"
  disabled: true | false
  track: "normal" | "inverted" | "false"
  minValue: Number
  maxValue: Number
  step: Number
  marks?: {}
}

export const Slider = (props: sliderProps) => {
  return (
    <div>
      <input
        type="range"
        id="myRange"
        className="slider  h-1 color-primary-main appearance-none bg-primary-main

      color-primary-light "
      />
    </div>
  )
}
