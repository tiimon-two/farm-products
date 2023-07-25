import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.defaultWidth};
  margin: 0 auto;
  padding: 100px ${(props) => props.theme.intend};
`;

export const StyledWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  margin-bottom: 64px;
`;

export const StyledList = styled.ul`
  width: 540px;
  margin: 0;
  padding: 0;
  margin-right: 20px;
`;

export const StyledItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
  min-height: 197px;
`;

export const AdvantageItem = styled(StyledItem)`
  background-color: ${(props) => props.theme.advantagesColor};
`;

export const DisAdvantageItem = styled(StyledItem)`
  background-color: ${(props) => props.theme.disAdvantagesColor};
`;
