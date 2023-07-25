import React from "react";
// import logo from "../../../assets/logo.svg";
import Copyright from "../../ui/copyright/copyright";
import Logo from "../../ui/logo/logo";
// import "./style.css";
import { StyledFooter } from "./styled";

export default function Footer() {
  return (
    // <footer className="footer">
    //   <Logo src={logo} alt="Логотип" />
    //   <Copyright />
    // </footer>

    <StyledFooter>
      <Logo />
      <Copyright />
    </StyledFooter>
  );
}
