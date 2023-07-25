import styled from "styled-components";
import backgroundImage from "/src/assets/background-image.svg";

export const StyledAbout = styled.section`
  width: ${(props) => props.theme.defaultWidth};
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 193px;
  padding-right: ${(props) => props.theme.intend};
  padding-bottom: 183px;
  padding-left: ${(props) => props.theme.intend};
  background-color: ${(props) => props.theme.sectionColor};
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: 90% 90%;
`;

export const StyledInfo = styled.div`
  width: 538px;
`;

export const StyledText = styled.p`
  margin: 0;
  padding: 0;
`;
