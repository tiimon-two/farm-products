import styled from "styled-components";
import Title from "../../ui/title/title";

export const StyledSection = styled.section`
  /* grid-column: 1 / 2; */
  width: 353px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 22px 20px;
  padding-bottom: 0;
  margin-bottom: 18px;
  border: 1px solid lightgray;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

export const StyledProductList = styled.ul`
  width: 353px;
  margin: 0;
  padding: 0;
  padding-bottom: 8px;
  list-style: none;
`;

export const StyledProductItem = styled.li`
  padding: 15px 0;
`;

export const StyledLabel = styled.label`
  display: block;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    border: 1px solid lightgray;
    background-color: #f6f6f6;

    ::checked {
      background-color: #fc9b27;
    }
  }
`;

export const VisuallyHiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:focus-visible ~ * {
    outline: 1px solid #000000;
  }
`;

export const CustomTitle = styled(Title)`
  font-size: 18px;
  margin-bottom: 12px;
  text-align: left;
`;
