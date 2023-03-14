interface WithColor {
  color: string
}
interface WithDimensions {
  height?: number
  width?: number
}

export type IconWithColor = (props: WithColor) => JSX.Element
export type IconWithColorAndDimensions = (
  props: WithDimensions & WithColor,
) => JSX.Element
