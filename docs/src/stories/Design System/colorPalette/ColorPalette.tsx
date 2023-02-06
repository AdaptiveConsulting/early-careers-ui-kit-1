import "./colorPalette.css"
import { useDarkMode } from "storybook-dark-mode"

function AdaptiveLogo() {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0496 3.33888C27.3075 3.33888 34.002 10.3151 34.002 18.9207C34.002 27.5262 27.3075 34.5024 19.0496 34.5024C10.7916 34.5024 4.09718 27.5262 4.09718 18.9207C4.09718 18.4365 4.11837 17.9575 4.15983 17.4846C4.3644 17.4977 4.56989 17.5041 4.77683 17.5041C10.4073 17.5041 14.9716 12.7476 14.9716 6.88019C14.9716 5.89629 14.8433 4.94362 14.6031 4.03939C16.0077 3.58415 17.5011 3.33888 19.0496 3.33888ZM20.9827 11.1298L18.3484 11.1418L13.6123 24.4428L15.6701 26.3232L22.4882 22.9931L23.6055 26.1804L25.9394 25.3014L20.9827 11.1298ZM18.4986 11.5631L18.6372 12.0087L14.3226 24.1342L13.9709 24.3031L18.4986 11.5631ZM18.7874 12.4301L18.9261 12.8635L15.0269 23.7957L14.6834 23.9608L18.7874 12.4301ZM19.0647 13.2971L19.2034 13.7185L15.7282 23.4588L15.3666 23.6326L19.0647 13.2971ZM19.3537 14.1519L19.4922 14.5854L16.4312 23.1211L16.0841 23.2879L19.3537 14.1519ZM19.669 14.9508L21.6341 20.5565L16.7902 22.9486L19.669 14.9508ZM4.63813 3.47456V13.2579H2.52786V3.47456H4.63813ZM2.11222 2.68713V12.4707H0.00195312V2.68713H2.11222ZM7.09479 2.23378V12.017H4.98465V2.23378H7.09479ZM9.55171 0.502441V10.2857H7.44131V0.502441H9.55171Z"
        fill="white"
      />
    </svg>
  )
}
function IconGrey600() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.94928 3.60613C5.61214 3.60613 4.53094 4.68632 4.53094 6.02447C4.53094 7.3616 5.61214 8.4428 6.94928 8.4428C8.28743 8.4428 9.36762 7.3616 9.36762 6.02447C9.36762 4.68632 8.28743 3.60613 6.94928 3.60613ZM6.94928 7.65483C6.05248 7.65483 5.31892 6.92227 5.31892 6.02447C5.31892 5.12666 6.05248 4.39309 6.95029 4.39309C7.84709 4.39309 8.58065 5.12666 8.58065 6.02447C8.58065 6.92127 7.84608 7.65483 6.94928 7.65483ZM12.721 7.32533L12.1165 6.94041C11.8041 6.73888 11.6217 6.40838 11.6217 6.0426V6.02447C11.6217 5.65768 11.8051 5.30904 12.1155 5.12666L12.72 4.74174C12.9044 4.6309 12.9589 4.39309 12.849 4.21071L11.4746 1.84678C11.3648 1.66339 11.1451 1.59084 10.9617 1.70068L10.3571 1.99289C10.211 2.06645 10.0458 2.10373 9.88152 2.10373C9.67999 2.10373 9.4966 2.04831 9.31321 1.95662L9.29507 1.93848C8.96557 1.75509 8.76404 1.42559 8.7449 1.05881L8.70862 0.381674C8.69049 0.180146 8.52523 0.0148926 8.3237 0.0148926H5.57587C5.37434 0.0148926 5.19095 0.180146 5.19095 0.381674L5.15467 1.05881C5.13653 1.42559 4.93501 1.75509 4.6045 1.93848L4.58636 1.95662C4.40297 2.06746 4.21958 2.10373 4.01805 2.10373C3.85381 2.10373 3.68855 2.06645 3.54245 1.99289L2.93786 1.68254C2.75447 1.59084 2.51667 1.64526 2.42396 1.82865L1.05156 4.19157C0.940715 4.37496 0.996136 4.59462 1.17953 4.7236L1.78411 5.10852C2.09648 5.31005 2.27886 5.63955 2.27886 6.00532V6.02447C2.27886 6.39024 2.09547 6.73888 1.78512 6.92127L1.18053 7.30618C0.996136 7.41703 0.941723 7.65483 1.05156 7.83822L2.42598 10.2011C2.53581 10.3845 2.75548 10.4389 2.93887 10.3483L3.54345 10.0359C3.68956 9.96333 3.85481 9.92605 4.01906 9.92605C4.22059 9.92605 4.40398 9.98147 4.58737 10.0732L4.60551 10.0913C4.93601 10.2747 5.13754 10.6052 5.15568 10.971L5.19195 11.6481C5.21009 11.8496 5.37534 12.0149 5.57687 12.0149H8.30657C8.5081 12.0149 8.69149 11.8496 8.69149 11.6481L8.72777 10.971C8.74591 10.6042 8.94743 10.2747 9.27794 10.0913L9.31421 10.0732C9.49761 9.96233 9.681 9.92605 9.88252 9.92605C10.0468 9.92605 10.212 9.96333 10.3581 10.0369L10.9627 10.3483C11.1461 10.4389 11.3849 10.3845 11.4766 10.2011L12.85 7.85636C12.9609 7.67297 12.9054 7.43516 12.7221 7.32533H12.721ZM10.998 9.50486L10.7239 9.35875C10.467 9.22977 10.1747 9.15722 9.88152 9.15722C9.55101 9.15722 9.22151 9.24791 8.92829 9.41316L8.91015 9.4313C8.34184 9.76181 7.9932 10.3291 7.97607 10.9528L7.95793 11.2642H5.96078L5.94265 10.971C5.90536 10.3291 5.55773 9.76181 5.00756 9.44944L4.98942 9.4313C4.6972 9.26705 4.3667 9.17536 4.0372 9.17536C3.74397 9.17536 3.45075 9.24892 3.1938 9.37689L2.90159 9.50486L1.91107 7.78381L2.20329 7.60042C2.73532 7.25278 3.06482 6.66633 3.06482 6.04361V6.02547C3.06482 5.38361 2.75245 4.79716 2.20329 4.46766L1.91107 4.28427L2.89957 2.56221L3.17466 2.70933C3.4316 2.8373 3.72483 2.91085 4.01704 2.91085C4.34755 2.91085 4.67705 2.81916 4.97027 2.6539L4.98841 2.63577C5.55672 2.30627 5.90536 1.73897 5.92249 1.11423L5.94164 0.803876H7.91964L7.93778 1.11524C7.97506 1.7561 8.3227 2.32441 8.87287 2.63577L8.89101 2.6539C9.18322 2.81916 9.51373 2.91085 9.84323 2.91085C10.1364 2.91085 10.4297 2.8373 10.6866 2.70933L10.9607 2.56221L11.9502 4.28528L11.658 4.46766C11.126 4.8163 10.7965 5.40174 10.7965 6.02547V6.04361C10.7965 6.68447 11.1078 7.27092 11.657 7.60042L11.9502 7.78381L10.998 9.50687V9.50486Z"
        fill="#6B6B6B"
      />
    </svg>
  )
}
function IconErrorDark() {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.95514 3.60613C4.618 3.60613 3.5368 4.68632 3.5368 6.02447C3.5368 7.3616 4.618 8.4428 5.95514 8.4428C7.29329 8.4428 8.37348 7.3616 8.37348 6.02447C8.37348 4.68632 7.29329 3.60613 5.95514 3.60613ZM5.95514 7.65483C5.05834 7.65483 4.32478 6.92227 4.32478 6.02447C4.32478 5.12666 5.05834 4.39309 5.95615 4.39309C6.85295 4.39309 7.58651 5.12666 7.58651 6.02447C7.58651 6.92127 6.85194 7.65483 5.95514 7.65483ZM11.7269 7.32533L11.1223 6.94041C10.81 6.73888 10.6276 6.40838 10.6276 6.0426V6.02447C10.6276 5.65768 10.811 5.30904 11.1213 5.12666L11.7259 4.74174C11.9103 4.6309 11.9647 4.39309 11.8549 4.21071L10.4805 1.84678C10.3706 1.66339 10.151 1.59084 9.96757 1.70068L9.36298 1.99289C9.21688 2.06645 9.05162 2.10373 8.88738 2.10373C8.68585 2.10373 8.50246 2.04831 8.31907 1.95662L8.30093 1.93848C7.97143 1.75509 7.7699 1.42559 7.75076 1.05881L7.71448 0.381674C7.69634 0.180146 7.53109 0.0148926 7.32956 0.0148926H4.58173C4.3802 0.0148926 4.19681 0.180146 4.19681 0.381674L4.16053 1.05881C4.14239 1.42559 3.94086 1.75509 3.61036 1.93848L3.59222 1.95662C3.40883 2.06746 3.22544 2.10373 3.02391 2.10373C2.85967 2.10373 2.69441 2.06645 2.5483 1.99289L1.94372 1.68254C1.76033 1.59084 1.52253 1.64526 1.42982 1.82865L0.0574153 4.19157C-0.0534253 4.37496 0.00199499 4.59462 0.185386 4.7236L0.78997 5.10852C1.10234 5.31005 1.28472 5.63955 1.28472 6.00532V6.02447C1.28472 6.39024 1.10133 6.73888 0.790978 6.92127L0.186393 7.30618C0.00199499 7.41703 -0.0524176 7.65483 0.0574153 7.83822L1.43184 10.2011C1.54167 10.3845 1.76134 10.4389 1.94473 10.3483L2.54931 10.0359C2.69542 9.96333 2.86067 9.92605 3.02492 9.92605C3.22645 9.92605 3.40984 9.98147 3.59323 10.0732L3.61137 10.0913C3.94187 10.2747 4.1434 10.6052 4.16154 10.971L4.19781 11.6481C4.21595 11.8496 4.3812 12.0149 4.58273 12.0149H7.31243C7.51396 12.0149 7.69735 11.8496 7.69735 11.6481L7.73363 10.971C7.75176 10.6042 7.95329 10.2747 8.2838 10.0913L8.32007 10.0732C8.50346 9.96233 8.68686 9.92605 8.88838 9.92605C9.05263 9.92605 9.21788 9.96333 9.36399 10.0369L9.96858 10.3483C10.152 10.4389 10.3908 10.3845 10.4825 10.2011L11.8559 7.85636C11.9667 7.67297 11.9113 7.43516 11.7279 7.32533H11.7269ZM10.0038 9.50486L9.72976 9.35875C9.47282 9.22977 9.1806 9.15722 8.88738 9.15722C8.55687 9.15722 8.22737 9.24791 7.93415 9.41316L7.91601 9.4313C7.3477 9.76181 6.99906 10.3291 6.98193 10.9528L6.96379 11.2642H4.96664L4.94851 10.971C4.91122 10.3291 4.56359 9.76181 4.01341 9.44944L3.99528 9.4313C3.70306 9.26705 3.37256 9.17536 3.04306 9.17536C2.74983 9.17536 2.45661 9.24892 2.19966 9.37689L1.90744 9.50486L0.916933 7.78381L1.20915 7.60042C1.74118 7.25278 2.07068 6.66633 2.07068 6.04361V6.02547C2.07068 5.38361 1.75831 4.79716 1.20915 4.46766L0.916933 4.28427L1.90543 2.56221L2.18052 2.70933C2.43746 2.8373 2.73069 2.91085 3.0229 2.91085C3.35341 2.91085 3.68291 2.81916 3.97613 2.6539L3.99427 2.63577C4.56258 2.30627 4.91122 1.73897 4.92835 1.11423L4.9475 0.803876H6.9255L6.94364 1.11524C6.98092 1.7561 7.32856 2.32441 7.87873 2.63577L7.89686 2.6539C8.18908 2.81916 8.51959 2.91085 8.84909 2.91085C9.14231 2.91085 9.43553 2.8373 9.69248 2.70933L9.96656 2.56221L10.9561 4.28528L10.6638 4.46766C10.1318 4.8163 9.80231 5.40174 9.80231 6.02547V6.04361C9.80231 6.68447 10.1137 7.27092 10.6628 7.60042L10.9561 7.78381L10.0038 9.50687V9.50486Z"
        fill="#B60017"
      />
    </svg>
  )
}
function IconPrimaryDark() {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.95953 3.60613C4.62239 3.60613 3.5412 4.68632 3.5412 6.02447C3.5412 7.3616 4.62239 8.4428 5.95953 8.4428C7.29768 8.4428 8.37787 7.3616 8.37787 6.02447C8.37787 4.68632 7.29768 3.60613 5.95953 3.60613ZM5.95953 7.65483C5.06273 7.65483 4.32917 6.92227 4.32917 6.02447C4.32917 5.12666 5.06273 4.39309 5.96054 4.39309C6.85734 4.39309 7.59091 5.12666 7.59091 6.02447C7.59091 6.92127 6.85634 7.65483 5.95953 7.65483ZM11.7313 7.32533L11.1267 6.94041C10.8144 6.73888 10.632 6.40838 10.632 6.0426V6.02447C10.632 5.65768 10.8154 5.30904 11.1257 5.12666L11.7303 4.74174C11.9147 4.6309 11.9691 4.39309 11.8593 4.21071L10.4849 1.84678C10.375 1.66339 10.1554 1.59084 9.97196 1.70068L9.36738 1.99289C9.22127 2.06645 9.05602 2.10373 8.89177 2.10373C8.69024 2.10373 8.50685 2.04831 8.32346 1.95662L8.30532 1.93848C7.97582 1.75509 7.7743 1.42559 7.75515 1.05881L7.71888 0.381674C7.70074 0.180146 7.53549 0.0148926 7.33396 0.0148926H4.58612C4.38459 0.0148926 4.2012 0.180146 4.2012 0.381674L4.16493 1.05881C4.14679 1.42559 3.94526 1.75509 3.61475 1.93848L3.59662 1.95662C3.41322 2.06746 3.22983 2.10373 3.02831 2.10373C2.86406 2.10373 2.69881 2.06645 2.5527 1.99289L1.94811 1.68254C1.76472 1.59084 1.52692 1.64526 1.43422 1.82865L0.0618098 4.19157C-0.0490308 4.37496 0.00638953 4.59462 0.18978 4.7236L0.794365 5.10852C1.10673 5.31005 1.28912 5.63955 1.28912 6.00532V6.02447C1.28912 6.39024 1.10573 6.73888 0.795373 6.92127L0.190788 7.30618C0.00638953 7.41703 -0.0480231 7.65483 0.0618098 7.83822L1.43623 10.2011C1.54607 10.3845 1.76573 10.4389 1.94912 10.3483L2.55371 10.0359C2.69981 9.96333 2.86507 9.92605 3.02931 9.92605C3.23084 9.92605 3.41423 9.98147 3.59762 10.0732L3.61576 10.0913C3.94627 10.2747 4.1478 10.6052 4.16593 10.971L4.20221 11.6481C4.22035 11.8496 4.3856 12.0149 4.58713 12.0149H7.31683C7.51836 12.0149 7.70175 11.8496 7.70175 11.6481L7.73802 10.971C7.75616 10.6042 7.95769 10.2747 8.28819 10.0913L8.32447 10.0732C8.50786 9.96233 8.69125 9.92605 8.89278 9.92605C9.05702 9.92605 9.22228 9.96333 9.36839 10.0369L9.97297 10.3483C10.1564 10.4389 10.3952 10.3845 10.4869 10.2011L11.8603 7.85636C11.9711 7.67297 11.9157 7.43516 11.7323 7.32533H11.7313ZM10.0082 9.50486L9.73416 9.35875C9.47721 9.22977 9.18499 9.15722 8.89177 9.15722C8.56126 9.15722 8.23177 9.24791 7.93854 9.41316L7.9204 9.4313C7.35209 9.76181 7.00345 10.3291 6.98632 10.9528L6.96818 11.2642H4.97104L4.9529 10.971C4.91562 10.3291 4.56798 9.76181 4.01781 9.44944L3.99967 9.4313C3.70746 9.26705 3.37695 9.17536 3.04745 9.17536C2.75423 9.17536 2.461 9.24892 2.20406 9.37689L1.91184 9.50486L0.921328 7.78381L1.21354 7.60042C1.74558 7.25278 2.07508 6.66633 2.07508 6.04361V6.02547C2.07508 5.38361 1.76271 4.79716 1.21354 4.46766L0.921328 4.28427L1.90982 2.56221L2.18491 2.70933C2.44186 2.8373 2.73508 2.91085 3.0273 2.91085C3.3578 2.91085 3.6873 2.81916 3.98053 2.6539L3.99866 2.63577C4.56697 2.30627 4.91562 1.73897 4.93275 1.11423L4.95189 0.803876H6.92989L6.94803 1.11524C6.98531 1.7561 7.33295 2.32441 7.88312 2.63577L7.90126 2.6539C8.19348 2.81916 8.52398 2.91085 8.85348 2.91085C9.1467 2.91085 9.43993 2.8373 9.69688 2.70933L9.97095 2.56221L10.9605 4.28528L10.6682 4.46766C10.1362 4.8163 9.80671 5.40174 9.80671 6.02547V6.04361C9.80671 6.68447 10.1181 7.27092 10.6672 7.60042L10.9605 7.78381L10.0082 9.50687V9.50486Z"
        fill="#5F618D"
      />
    </svg>
  )
}

function Header() {
  return (
    <div className="h-[49px] bg-grey-800 -ml-[16px] -mt-[16px] -mr-[16px] items-center flex flex-row">
      <div className="mx-[8px] mt-[5.5px] mb-[9.5px]">
        <AdaptiveLogo />
      </div>
      <div className="mt-[12.6px] mb-[16.5px]">
        <p className="title text-white">Reactive Design System</p>
      </div>
    </div>
  )
}
function getTextColorClass() {
  return useDarkMode() ? "text-white" : "text-dark"
}
const purposeText = {
  title: "Purpose",
  description: [
    "Colors communicate branding. When applied consistently , they can communicate information about system states, and draw attention to certain parts of the screen, like an error that needs attention.",
    "Though color does much to make a design more efficient and effective, we must still pursue designs that are effective even to those with little or no color perception. Therefore, colors should be used in an accessible manner, and no information should be communicated by color alone.",
  ],
}
function Purpose({
  title,
  description,
}: {
  title: string
  description: string[]
}) {
  return (
    <div className="purpose-container">
      <div className="purpose-title">
        <p className={getTextColorClass() + " title"}>{title}</p>
      </div>
      <div className="purpose-body">
        <p className={getTextColorClass() + " body mb-[16px]"}>
          {description[0]}
        </p>
        <p className={getTextColorClass() + " body"}>{description[1]}</p>
      </div>
    </div>
  )
}
const footerTexts = [
  "All colors have been analyzed against each other in this matrix, and each combination given a score. Every color in our palette has AA",
  "AA or AAA: The two colors can be used as foreground and background against each other with no restrictions.",
  "AA18: Can be used for graphical elements, icons, or for text, as long as the text size is at least 18 pt. (Or 14 if bold)",
  "DNP: Do not use this combination for anything functional or essential. An exception might be a decorative object like a divider, or for a use in which the information is communicated in an additional way.",
  "Some examples of color combinations that are inaccessible.",
]
function Footer({ texts }: { texts: string[] }) {
  const mainFooterText: string[] = texts[0].split("in this matrix")
  return (
    <div className="my-[32px] flex flex-1 flex-row">
      <div className="footer-text-container">
        <div className="mb-[15px]">
          <p className={getTextColorClass() + " body"}>
            {mainFooterText[0]}
            <a
              className="text-primary-main underline"
              href="https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23FFFFFF%2C%20Common-White%0D%0A%23F9F9F9%2C%20Paper-White%2Fgrey-50%0D%0A%23F2F2F2%2C%20Grey-100%0D%0A%23E4E4E4%2C%20Grey-200%0D%0A%23DBDDFF%2C%20Primary-Light%0D%0A%235DF7BD%2C%20Success-Light%0D%0A%23CFCFCF%2C%20Grey-300%0D%0A%23FFBE45%2C%20Warning-Light%0D%0A%2376C6FF%2C%20Secondary-Light%0D%0A%23BBB%2C%20Grey-400%0D%0A%23A9ABD1%2C%20Primary-Main%0D%0A%2301C38D%2C%20Success-Main%0D%0A%23FF8D00%2C%20Warning-Main%0D%0A%23FF6877%2C%20Error-Light%0D%0A%232D96FF%2C%20Secondary-Main%0D%0A%23FF274B%2C%20Error-Main%0D%0A%23EA4F01%2C%20Warning-Dark%0D%0A%237F7F7F%2C%20Grey-500%0D%0A%236B6B6B%2C%20Grey-600%0D%0A%235F618D%2C%20Primary-Dark%0D%0A%23B60017%2C%20Error-Dark%0D%0A%23555%2C%20Grey-700%0D%0A%2301603D%2C%20Success-Dark%0D%0A%23005195%2C%20Secondary-Dark%0D%0A%234D4D4D%2C%20Grey-800%0D%0A%23383838%2C%20Grey-900%0D%0A%23323232%2C%20Paper-Black%0D%0A%23000%2C%20Common-Black%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp"
            >
              {"in this matrix"}
            </a>
            {mainFooterText[1]}
          </p>
        </div>
        <div>
          <p className={getTextColorClass() + " body"}>{texts[1]}</p>
          <p className={getTextColorClass() + " body"}>{texts[2]}</p>
          <p className={getTextColorClass() + " body"}>{texts[3]}</p>
        </div>
      </div>
      <div className="footer-icons-description-container ml-[13px]">
        <div className="footer-icons-container">
          <div className="icon-block bg-grey-800">
            {/* ICON GREY-600 */}
            <IconGrey600 />
          </div>

          <div className="icon-block bg-error-main">
            {/* ICON ERROR DARK */}
            <IconErrorDark />
          </div>
          <div className="icon-block bg-error-main">
            {/* ICON ERROR DARK */}
            <IconPrimaryDark />
          </div>
          <div className="icon-block bg-success-main">
            {/* ICON ERROR DARK */}
            <IconPrimaryDark />
          </div>
        </div>
        <p className="footerIconsDescription">{texts[4]}</p>
      </div>
    </div>
  )
}

interface Swatch {
  colorName: string
  colorTag: string
}
interface ColorInfo {
  colorGroup?: string
  description?: string
  swatches: Swatch[][]
}
const colorsInfo: ColorInfo[] = [
  {
    colorGroup: "Core Neutrals",
    description:
      "The “paper” colors are our near-black and near-black base backgrounds.",
    swatches: [
      [
        { colorName: "Common-Black", colorTag: "#000" },
        { colorName: "Common-White", colorTag: "#FFF" },
      ],
    ],
  },
  {
    description:
      "When the user switches between light and dark themes, most of the change will show itself via a dark grey changing to a light, or a light changing to a dark.",
    swatches: [
      [
        { colorName: "Paper-Black", colorTag: "#323232" },
        { colorName: "Paper-White", colorTag: "#F9F9F9" },
      ],
    ],
  },
  {
    description:
      "Often, but not always, a grey will change to a complimentary one on the opposite side of this spectrum.",
    swatches: [
      [
        { colorName: "Grey-50", colorTag: "#F9F9F9" },
        { colorName: "Grey-100", colorTag: "#F2F2F2" },
        { colorName: "Grey-200", colorTag: "#E4E4E4" },
        { colorName: "Grey-300", colorTag: "#CFCFCF" },
        { colorName: "Grey-400", colorTag: "#BBBBBB" },
        { colorName: "Grey-500", colorTag: "#7F7F7F" },
        { colorName: "Grey-600", colorTag: "#6B6B6B" },
        { colorName: "Grey-700", colorTag: "#555555" },
        { colorName: "Grey-800", colorTag: "#4D4D4D" },
        { colorName: "Grey-900", colorTag: "#383838" },
      ],
    ],
  },
  {
    description:
      "These key “A” greys were pulled from the grey spectrum and used as reference to create the color families below.",
    swatches: [
      [
        { colorName: "Grey-A100", colorTag: "#F2F2F2" },
        { colorName: "Grey-A200", colorTag: "#E4E4E4" },
        { colorName: "Grey-A400", colorTag: "#BBBBBB" },
        { colorName: "Grey-A700", colorTag: "#555555" },
      ],
    ],
  },
  {
    colorGroup: "Primary",
    description: "This color family is used for brand accents.",
    swatches: [
      [
        { colorName: "Primary-Dark", colorTag: "#5F618D" },
        { colorName: "Primary-Main", colorTag: "#A9ABD1" },
        { colorName: "Primary-Light", colorTag: "#DBDDFF" },
      ],
    ],
  },
  {
    colorGroup: "Secondary",
    description:
      "This color family is used to draw special attention to actions related to “selling.” It is currently duplicative of the color family used for “info”",
    swatches: [
      [
        { colorName: "Secondary-Dark", colorTag: "#005195" },
        { colorName: "Secondary-Main", colorTag: "#2D96FF" },
        { colorName: "Secondary-Light", colorTag: "#76C6FF" },
      ],
    ],
  },
  {
    colorGroup: "Error",
    description:
      "Use these colors when there are errors, especially those that will stop the user’s progress without a resolution. This family is currently duplicative of the color family used for “Sell”",
    swatches: [
      [
        { colorName: "Error-Dark", colorTag: "#B60017" },
        { colorName: "Error-Main", colorTag: "#FF274B" },
        { colorName: "Error-Light", colorTag: "#FF6877" },
      ],
    ],
  },
  {
    colorGroup: "Warning",
    description:
      "Use these colors when communicating that there is the possibility of an outcome that is not an error, but not ideal.",
    swatches: [
      [
        { colorName: "Warning-Dark", colorTag: "#EA4F01" },
        { colorName: "Warning-Main", colorTag: "#FF8D00" },
        { colorName: "Warning-Light", colorTag: "#FFBE45" },
      ],
    ],
  },
  {
    description:
      "Yellows and oranges are especially tricky for accessible contrast. Use care when using reduced opacity text styles against these backgrounds.",
    swatches: [[]],
  },
  {
    colorGroup: "Success",
    description:
      "Use these colors when confirming that a process or action has succeeded.",
    swatches: [
      [
        { colorName: "Success-Dark", colorTag: "#01603D" },
        { colorName: "Success-Main", colorTag: "#01C38D" },
        { colorName: "Success-Light", colorTag: "#5DF7BD" },
      ],
    ],
  },
  {
    colorGroup: "Buy/Sell",
    description:
      "These accents can be used to help a user understand when they are performing a buy or sell action. Do not use color alone to communicate information.",
    swatches: [
      [
        { colorName: "Buy-Dark", colorTag: "#005195" },
        { colorName: "Buy-Main", colorTag: "#2D96FF" },
        { colorName: "Buy-Light", colorTag: "#76C6FF" },
      ],
      [
        { colorName: "Sell-Dark", colorTag: "#B60017" },
        { colorName: "Sell-Main", colorTag: "#FF274B" },
        { colorName: "Sell-Light", colorTag: "#FF6877" },
      ],
    ],
  },
  {
    colorGroup: "Text Colors",
    description:
      "Text color is constant in most cases, but its opacity can communicate emphasis or a disabled state. These opacity settings will be accessible for nearly every foreseeable background.",
    swatches: [
      [
        {
          colorName: "Opacity-White-95",
          colorTag: "rgba(255, 255, 255, 0.95)",
        },
        {
          colorName: "Opacity-White-83",
          colorTag: "rgba(255, 255, 255, 0.83)",
        },
        {
          colorName: "Opacity-White-38",
          colorTag: "rgba(255, 255, 255, 0.38)",
        },
      ],
      [
        { colorName: "Opacity-Black-95", colorTag: "rgba(0, 0, 0, 0.95)" },
        { colorName: "Opacity-Black-83", colorTag: "rgba(0, 0, 0, 0.83)" },
        { colorName: "Opacity-Black-38", colorTag: "rgba(0, 0, 0, 0.38)" },
      ],
    ],
  },
]
interface ColorGroupDescriptionProps {
  colorGroup?: string
  description?: string
}
function ColorGroupDescription(props: ColorGroupDescriptionProps) {
  return (
    <div>
      {props?.colorGroup ? (
        <div className="color-title mb-[8px]">
          <p className={getTextColorClass() + " title text-left"}>
            {props?.colorGroup}
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="color-content">
        <p className={getTextColorClass() + " body"}>{props?.description}</p>
      </div>
    </div>
  )
}
function ColorSwatchLine({
  colorName,
  colorTag,
  colorSwatchIndex,
  colorSwatchClass,
  colorClass,
}: {
  colorName: string
  colorTag: string
  colorSwatchIndex: number
  colorSwatchClass: string
  colorClass: string
}) {
  return (
    <div key={colorName + "-" + colorSwatchIndex} className={colorSwatchClass}>
      <p className={colorClass + " swatch-name-style"}>{colorName}</p>
      <p className={colorClass + " color-swatch-spacing body"}>{colorTag}</p>
    </div>
  )
}
function selectClasses(
  colorSwatchesNumber: number,
  colorName: string,
  colorSwatchIndex: number,
) {
  let colorSwatchClass, colorClass
  // TEXT OPACITY
  if (colorName?.toLowerCase().includes("opacity")) {
    colorClass = "text-" + colorName?.toLowerCase()
    colorSwatchClass = "swatch-block bg-"
    if (colorName?.toLowerCase().includes("white"))
      colorSwatchClass += "common-black"
    else if (colorName?.toLowerCase().includes("black"))
      colorSwatchClass += "common-white"
  }
  // COLOR SWATCHES
  else {
    colorSwatchClass = "swatch-block bg-" + colorName?.toLowerCase()
    colorClass = "bg-transparent"
    if (colorSwatchIndex === 0 && !colorName?.toLowerCase().includes("grey"))
      colorClass += " text-white"
    if (colorSwatchIndex != 0 && !colorName?.toLowerCase().includes("grey"))
      colorClass += " text-black"
    if (colorName?.toLowerCase().includes("grey")) {
      let greyShade = colorName?.toLowerCase().split("-")[1]
      if (greyShade.includes("a")) greyShade = greyShade.split("a")[1]
      if (parseInt(greyShade) < 500) colorClass += " text-black"
      if (parseInt(greyShade) >= 500) colorClass += " text-white"
    }
  }
  if (colorSwatchIndex === 0) colorSwatchClass += " first-swatch-block"
  if (colorSwatchIndex === colorSwatchesNumber - 1)
    colorSwatchClass += " last-swatch-block"

  return { colorSwatchClass, colorClass }
}

function ColorPalette() {
  return (
    <div>
      <Header />
      <Purpose
        title={purposeText.title}
        description={purposeText.description}
      ></Purpose>
      {
        <section>
          {colorsInfo.map((colorsInfoLine, colorsInfoLineIndex) => {
            const colorLinesNumber: number = colorsInfoLine.swatches.length
            const colorSwatchesNumber: number =
              colorsInfoLine.swatches[0].length
            const lineClass = colorsInfoLine?.colorGroup
              ? " pt-[23px] pb-[23px]"
              : " pb-[8px]"
            return (
              <div key={colorsInfoLineIndex} className={"flex" + lineClass}>
                {/* LEFT CONTAINER */}
                <div className="color-group-description-container flex flex-col">
                  <ColorGroupDescription
                    colorGroup={colorsInfoLine?.colorGroup}
                    description={colorsInfoLine?.description}
                  ></ColorGroupDescription>
                </div>

                {/* RIGHT CONTAINER */}
                <div className="ml-5 overflow-auto justify-between flex flex-1 flex-col scrollbar-hide">
                  <div className="mb-1 overflow-auto flex flex-row">
                    {colorsInfoLine.swatches[0].map(
                      ({ colorName, colorTag }, colorSwatchIndex) => {
                        const { colorSwatchClass, colorClass } = selectClasses(
                          colorSwatchesNumber,
                          colorName,
                          colorSwatchIndex,
                        )
                        return (
                          <ColorSwatchLine
                            key={colorName + "-" + colorSwatchIndex}
                            colorName={colorName}
                            colorTag={colorTag}
                            colorSwatchIndex={colorSwatchIndex}
                            colorSwatchClass={colorSwatchClass}
                            colorClass={colorClass}
                          />
                        )
                      },
                    )}
                  </div>
                  {colorLinesNumber > 1 ? (
                    <div className="mb-1 flex flex-row">
                      {colorsInfoLine.swatches[1]?.map(
                        ({ colorName, colorTag }, colorSwatchIndex) => {
                          const { colorSwatchClass, colorClass } =
                            selectClasses(
                              colorSwatchesNumber,
                              colorName,
                              colorSwatchIndex,
                            )
                          return (
                            <ColorSwatchLine
                              key={colorName + "-" + colorSwatchIndex}
                              colorName={colorName}
                              colorTag={colorTag}
                              colorSwatchIndex={colorSwatchIndex}
                              colorSwatchClass={colorSwatchClass}
                              colorClass={colorClass}
                            />
                          )
                        },
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )
          })}
        </section>
      }
      <Footer texts={footerTexts}></Footer>
    </div>
  )
}
export default ColorPalette
