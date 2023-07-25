import styled from "styled-components";
import Button from "../../ui/button/button";

export const StyledNav = styled.nav`
  margin-left: auto;
`;

export const StyledButton = styled(Button)`
  width: auto;
  min-width: 0;
  display: inline-block;
  background-color: #ffffff;
  color: black;
  font-size: 18px;

  &:hover,
  &:active {
    background-color: #ffffff;
    text-decoration: underline;
    text-decoration: none;
  }

  &:hover {
    box-shadow: none;
  }
`;
