import { IconWithColor } from "./types"

export const Close: IconWithColor = ({ color }) => {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      xmlns="http://www.w3.org/2000/svg"
      className={color}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.99897 2.8463L6.81433 0.0309448L8.00391 1.22052L5.18855 4.02601L8.00391 6.84137L6.81433 8.03094L3.99897 5.21559L1.19348 8.03094L0.00390625 6.84137L2.81926 4.02601L0.00390625 1.22052L1.19348 0.0309448L3.99897 2.8463Z"
      />
    </svg>
  )
}
