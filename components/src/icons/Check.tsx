import { IconWithColor } from "./types"

export const Check: IconWithColor = ({ color }) => {
  return (
    <svg
      width="13"
      height="10"
      viewBox="0 0 13 10"
      xmlns="http://www.w3.org/2000/svg"
      className={color}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7504 0.303147C10.9752 0.00856818 11.4083 -0.056894 11.7182 0.155857C12.027 0.368609 12.0968 0.781019 11.872 1.0756L5.40657 9.57692C5.172 9.88568 4.71159 9.94132 4.40282 9.69693L0.253629 6.41293C-0.0409492 6.18054 -0.0802267 5.76485 0.164164 5.48555C0.408556 5.20515 0.844969 5.16697 1.13846 5.39936L4.72031 8.23386L10.7515 0.302056L10.7504 0.303147Z"
      />
    </svg>
  )
}
