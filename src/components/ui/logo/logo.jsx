import React from "react";
// import "./style.css";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo, StyledLogoMain } from "./styled";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";

export default function Logo({ src, alt }) {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMain>
      <LogoImage />
    </StyledLogoMain>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
    </StyledLogo>
  );
}
