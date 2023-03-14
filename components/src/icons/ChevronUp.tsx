import { IconWithColor } from "./types"

export const ChevronUp: IconWithColor = ({ color }) => {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      xmlns="http://www.w3.org/2000/svg"
      className={color}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.976461 4.08969C0.756461 4.30269 0.396461 4.30269 0.176461 4.08969C-0.0455394 3.87569 -0.0455394 3.52969 0.176461 3.31569L3.41246 0.190685C3.63346 -0.0223145 3.99246 -0.0223145 4.21346 0.190685L7.45046 3.31569C7.67146 3.52969 7.67146 3.87569 7.45046 4.08969C7.22946 4.30269 6.87046 4.30269 6.64946 4.08969L3.81146 1.34969L0.977461 4.08969H0.976461Z"
      />
    </svg>
  )
}
