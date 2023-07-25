import styled from "styled-components";

export const TitleList = styled.div`
  display: inline-flex;
  overflow: hidden;
`;

export const TitleButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid lightgray;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: ${(props) => (props.active ? "#88AA4D" : "#f6f6f6")};
`;

export const TitleText = styled.span`
  text-align: center;
  font-size: 14px;
  color: ${(props) => (props.active ? "#ffffff" : "#333333")};
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  color: #333333;
  padding-bottom: 35px;
`;
