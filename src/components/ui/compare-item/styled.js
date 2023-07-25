import styled from "styled-components";

export const StyledItem = styled.div`
  display: flex;
  width: 500px;
  padding: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: 10% 10%;
`;

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledIcon = styled.img`
  margin-right: 20px;
  width: 52px;
  height: 52px;
  alt: "feature";
`;

export const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;

  .green {
    background-color: ${(props) => props.theme.advantagesHeaderColor};
  }

  .red {
    background-color: ${(props) => props.theme.disAdvantagesHeaderColor};
  }
`;

export const StyledCategory = styled.span`
  width: 164px;
  padding: 2px 10px;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.buttonColor};
`;

export const StyledTitle = styled.b`
  margin-bottom: 20px;
`;

export const StyledText = styled.p`
  margin: 0;
  padding: 0;
`;
