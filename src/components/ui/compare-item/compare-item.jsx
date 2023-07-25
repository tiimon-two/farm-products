import React from "react";
import {
  StyledCategory,
  StyledHeading,
  StyledIcon,
  StyledItem,
  StyledText,
  StyledTitle,
  StyledWrapper
} from "./styled";
// import "./style.css";

export default function CompareItem({
  category,
  title,
  text,
  icon,
  categoryColor
}) {
  console.log(categoryColor);
  return (
    // <div className="compareItem">
    //   <div className="compareItem__head-wrapper">
    //     <img
    //       className="compareItem__img"
    //       src={icon}
    //       width="52"
    //       height="52"
    //       alt="feature"
    //     ></img>
    //     <div className="compareItem__heading">
    //       <span className="compareItem__category">{category}</span>
    //       <b className="compareItem__title">{title}</b>
    //     </div>
    //   </div>
    //   <p className="compareItem__text">{text}</p>
    // </div>

    <StyledItem>
      <StyledWrapper>
        <StyledIcon src={icon}></StyledIcon>
        <StyledHeading>
          <StyledCategory className={categoryColor}>{category}</StyledCategory>
          <StyledTitle>{title}</StyledTitle>
        </StyledHeading>
      </StyledWrapper>
      <StyledText>{text}</StyledText>
    </StyledItem>
  );
}
