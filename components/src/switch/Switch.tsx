import "./switch.css"

export interface Props {
  onClick?: () => void
  isDisabled?: boolean
  variant: string
  isChecked?: boolean
  mode?: string
}

export const Switch = ({
  variant,
  isDisabled,
  onClick,
  isChecked,
  mode,
}: Props) => {
  return (
    <label htmlFor={`toggle-switch`}>
      <input
        defaultChecked={isChecked}
        disabled={isDisabled}
        onClick={onClick}
        type="checkbox"
        className={`cursor-pointer w-8 h-3 appearance-none rounded-full ${
          mode === "light" ? "bg-grey-400" : "bg-grey-300"
        } transition duration-200 relative after:w-5 after:h-5 after:rounded-full after:bg-common-white checked:after:transition checked:after:translate-x-5 after:absolute after:right-4 after:bottom-[-4px] after:transition after:duration-200 after:shadow-lg after:hover:ring-8 after:ring-grey-400/[.20] ${
          mode === "light" ? variant : `${variant}-dark`
        }`}
      />
    </label>
  )
}
