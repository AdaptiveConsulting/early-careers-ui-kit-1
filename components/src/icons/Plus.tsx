import { IconWithColor } from "./types"

export const Plus: IconWithColor = ({ color }) => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      xmlns="http://www.w3.org/2000/svg"
      className={color}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.50598 0.530945C5.78198 0.530945 6.00598 0.754945 6.00598 1.03094V5.03094H10.006C10.282 5.03094 10.506 5.25494 10.506 5.53094C10.506 5.80694 10.282 6.03094 10.006 6.03094H6.00598V10.0309C6.00598 10.3069 5.78198 10.5309 5.50598 10.5309C5.22998 10.5309 5.00598 10.3069 5.00598 10.0309V6.03094H1.00598C0.729981 6.03094 0.505981 5.80694 0.505981 5.53094C0.505981 5.25494 0.729981 5.03094 1.00598 5.03094H5.00598V1.03094C5.00598 0.754945 5.22998 0.530945 5.50598 0.530945Z"
      />
    </svg>
  )
}
