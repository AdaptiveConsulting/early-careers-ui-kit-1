import { IconWithColor } from "./types"

export const ChevronDown: IconWithColor = ({ color }) => {
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
        d="M6.64976 0.19068C6.86976 -0.0223204 7.22976 -0.0223204 7.44976 0.19068C7.67176 0.40468 7.67176 0.75068 7.44976 0.96468L4.21376 4.08968C3.99276 4.30268 3.63376 4.30268 3.41276 4.08968L0.17576 0.96468C-0.0452402 0.75068 -0.0452402 0.40468 0.17576 0.19068C0.39676 -0.0223204 0.75576 -0.0223204 0.97676 0.19068L3.81476 2.93068L6.64876 0.19068H6.64976Z"
      />
    </svg>
  )
}
