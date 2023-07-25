import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  max-width: 260px;
  min-height: 44px;
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  padding: 0 97px;
  padding-top: 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  align-self: center;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  font-weight: 700;
  color: ${(props) => props.theme.buttonColor};

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buttonColorHoverActive};
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
