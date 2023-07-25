import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  box-sizing: border-box;
  width: ${(props) => props.theme.defaultWidth};
  margin: 0 auto;
  padding: 10px 90px;
  border-top: 1px solid #000000;
`;
