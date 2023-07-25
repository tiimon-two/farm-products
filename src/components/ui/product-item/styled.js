import styled from "styled-components";
import Title from "../title/title";

export const StyledItem = styled.li`
  display: flex;
  padding: 20px;
  margin-bottom: 12px;
  background-color: #ffffff;
  border: 1px solid lightgray;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 16px;
  text-align: left;
`;

export const ProductText = styled.p`
  margin-bottom: 14px;
`;

export const ProductPrice = styled.span`
  display: inline-block;
  position: absolute;
  bottom: 0;
  padding: 4px 8px;
  background-color: #d8ecfe;
`;
