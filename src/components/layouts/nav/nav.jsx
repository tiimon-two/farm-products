import React from "react";
import { AppRoute } from "../../../const";
import Button from "../../ui/button/button";
import { StyledButton, StyledNav } from "./styled";
import { useLocation } from "react-router-dom";
import { Ul, Li } from "../../styled";

const buttons = [
  {
    to: AppRoute.MAIN,
    item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
  },
  { to: AppRoute.BUY, item: <Button link={AppRoute.BUY}>Купить</Button> }
];

export default function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <StyledNav>
      <Ul>
        {buttons
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <Li key={link.to}>{link.item}</Li>
          ))}
      </Ul>
      {/* <Button color="orange" text="Купить" link={AppRoute.BUY}>Купить</Button> */}
      {/* {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)
      } */}
    </StyledNav>
  );
}
