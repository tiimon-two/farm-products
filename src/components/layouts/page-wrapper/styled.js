import styled from "styled-components";

export const StyledWrapped = styled.div`
  margin: 0 auto;
`;

export const InnerMain = styled.main`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-bottom: 80px;
`;

export const Main = styled.main`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-bottom: 80px;
`;
