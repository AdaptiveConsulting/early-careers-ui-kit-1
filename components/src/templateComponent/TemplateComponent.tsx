import React from "react"
import "./TemplateComponent.css"

interface TemplateComponentProps {
  // /**
  //  * on light or on dark background?
  //  */
  // onLightBg? : boolean;
  // /**
  //  * Type of button?
  //  */
  // buttonType?: string;
  // // /**
  // //  * Is this the principal call to action on the page?
  // //  */
  // // primary?: boolean;
  // /**
  //  * What background color to use
  //  */
  // backgroundColor?: string;
  // // /**
  // //  * How large should the button be?
  // //  */
  // // size?: 'small' | 'medium' | 'large';
  // /**
  //  * Button contents
  //  */
  label?: string
  // /**
  //  * Optional click handler
  //  */
  // onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const TemplateComponent = ({
  label,
}: // buttonType,
// onLightBg,
// backgroundColor,
// label,
// ...props
TemplateComponentProps) => {
  return (
    <a>Hello this is a template</a>
    // <button
    //     type="button"
    //     className={base + hover + active + focus}
    //     style={{ backgroundColor }}
    //     {...props}
    // >
    //     {label}
    // </button>
  )
}
