// import React from "react";
// import { StyledButton } from "./styled";
// // import "./style.css";

// export default function Button({
//     children,
//     link,
//     onClick,
//     className,
//     ...props
//   }) {
//   // return <button className="button">Купить</button>;
//   return <StyledButton
//           {...props}
//           {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
//           className={className}
//          >
//           {children}
//         </StyledButton>;
// }

import React, { forwardRef } from "react";
import { StyledButton } from "./styled";

const Button = forwardRef(
  ({ children, minWidth, link, className, onClick, ...props }, ref) => {
    return (
      <StyledButton
        {...props}
        $minWidth={minWidth}
        ref={ref}
        {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
        className={className}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
