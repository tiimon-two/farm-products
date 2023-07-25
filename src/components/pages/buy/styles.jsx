import styled, { css } from "styled-components";
import image from "/src/assets/tick.svg";
import { Swiper } from "swiper/react";

export const BuyForm = styled.form`
  /* margin: 0 auto; */
  /* display: grid; */
  /* grid-template-columns: 353px 727px;
  grid-template-rows: min-content 315px min-content;
  grid-column-gap: 20px; */
  /* box-sizing: border-box;
  width: 1280px; */
  /* padding-top: 40px;
  padding-left: 90px;
  padding-right: 90px;
  padding-bottom: 40px; */
  background-color: #f6f6f6;
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.backgroundColorGray};
  max-width: ${(props) => props.theme.pageWidth};
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${image});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const StyledOrder = styled.section`
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  /* bottom: ${(props) => props.theme.footerHeight}; */
  bottom: 65px;
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  padding-right: 90px;
  padding-left: 90px;
  background-color: ${(props) => props.theme.backgroundColorGray};
  max-width: ${(props) => props.theme.pageWidth};
`;
