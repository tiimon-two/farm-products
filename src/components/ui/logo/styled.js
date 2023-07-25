import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const LogoStyle = css`
  display: flex;
  height: 44px;
  margin: 0;
  padding: 0;
  align-items: center;
  align-self: center;
`;

export const StyledLogo = styled(Link)`
  ${LogoStyle}
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledLogoMain = styled.span`
  ${LogoStyle}
`;
