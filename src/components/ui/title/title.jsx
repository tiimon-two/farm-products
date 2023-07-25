// import React from "react";

// export default function Title({ level, text }) {
//   const TitleLvl = `h${level}`;
//   return <TitleLvl>{text}</TitleLvl>;
// }

import React from "react";
import { StyledTitle } from "./style";

// Заголовок
function Title({
  level = 1, // уровень h1, h2 и т.д. TitleLevel
  // size, // размер заголовка TitleSize
  children, // дочерний элемент, который будет отображён в заголовке
  className
}) {
  return (
    <StyledTitle as={`h${level}`} className={className}>
      {children}
    </StyledTitle>
  );
}

export default Title;
