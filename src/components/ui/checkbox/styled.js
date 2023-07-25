import styled, { css } from "styled-components";

export const VisuallyHiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:focus-visible ~ * {
    outline: 1px solid #000000;
  }
`;

export const Text = styled.span`
  align-self: center;
`;

export const Label = styled.label`
  display: block;
`;

export const StyledInput = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::before {
    position: absolute;
    content: "";
    width: 24px;
    height: 24px;
    right: 50px;
    display: block;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
          `
        : css`
            background-color: #f6f6f6;
          `}
  }
`;
