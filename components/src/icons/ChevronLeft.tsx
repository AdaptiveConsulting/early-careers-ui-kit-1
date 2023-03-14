import { IconWithColor } from "./types"

export const ChevronLeft: IconWithColor = ({ color }) => {
  return (
    <svg
      width="5"
      height="8"
      viewBox="0 0 5 8"
      xmlns="http://www.w3.org/2000/svg"
      className={color}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.76261 6.97679C4.97561 7.19679 4.97561 7.55679 4.76261 7.77679C4.54861 7.99879 4.20261 7.99879 3.98861 7.77679L0.863613 4.54079C0.650613 4.31979 0.650613 3.96079 0.863613 3.73979L3.98861 0.502786C4.20261 0.281786 4.54861 0.281786 4.76261 0.502786C4.97561 0.723786 4.97561 1.08279 4.76261 1.30379L2.02261 4.14179L4.76261 6.97579V6.97679Z"
      />
    </svg>
  )
}
