import styled from "styled-components";

export const Wrapper = styled.div`
  /* position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight}; */
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme.pageWidth};
  margin: 0;
  padding: 0;
`;
