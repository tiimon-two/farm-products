import styled from "styled-components";
import Title from "../title/title";

export const StyledSection = styled.section`
  grid-column: 1 / 2;
  width: 353px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 22px 20px;
  padding-bottom: 0;
  margin-bottom: 18px;
  border: 1px solid lightgray;
  background-color: #ffffff;
`;

export const CustomTitle = styled(Title)`
  font-size: 18px;
  margin-bottom: 12px;
  text-align: left;
`;
