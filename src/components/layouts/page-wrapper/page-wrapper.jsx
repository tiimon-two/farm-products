import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Main, StyledWrapped } from "./styled";
import { Outlet } from "react-router-dom";
// import "./style.css";

// export default function PageWrapper({ listOne, listTwo }) {
export default function PageWrapper({ ...prop }) {
  return (
    <StyledWrapped>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledWrapped>
  );
}
