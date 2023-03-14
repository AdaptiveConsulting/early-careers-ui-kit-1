import { IconWithColor } from "./types"

export const ChevronRight: IconWithColor = ({ color }) => {
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
        d="M0.863607 1.30356C0.650607 1.08356 0.650607 0.723563 0.863607 0.503563C1.07761 0.281563 1.42361 0.281563 1.63761 0.503563L4.76261 3.73956C4.97561 3.96056 4.97561 4.31956 4.76261 4.54056L1.63761 7.77756C1.42361 7.99856 1.07761 7.99856 0.863607 7.77756C0.650607 7.55656 0.650607 7.19756 0.863607 6.97656L3.60361 4.13856L0.863607 1.30456V1.30356Z"
      />
    </svg>
  )
}
