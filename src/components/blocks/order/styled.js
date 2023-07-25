import styled from "styled-components";
import Title from "../../ui/title/title";

export const StyledSection = styled.section`
  grid-column: 1 / 2;
  width: 353px;
  box-sizing: border-box;
  padding: 22px 20px;
  border: 1px solid lightgray;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

export const StyledTitle = styled(Title)`
  font-size: 18px;
  text-align: left;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding: 14px 12px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: left;
  background-color: #f6f6f6;
  border: 1px solid lightgrey;
  ::placeholder {
    color: #333333;
  }
`;

export const Price = styled.span`
  padding-top: 8px;
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 700;
`;

export const OrderButton = styled.button`
  padding: 17px 125px;
  max-width: 314px;
  background-color: #fc9b27;
  color: #ffffff;
  border: none;
  font-size: 18px;

  &:disabled {
    opacity: 0.5;
  }
`;
