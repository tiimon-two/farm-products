import React from "react";
import PageWrapper from "../layouts/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styled";
import listOne from "../../mocks/advantage-list";
import listTwo from "../../mocks/disadvantage-list";
import buyList from "../../mocks/buy-items";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import MainPage from "../pages/main/main";
import Buy from "../pages/buy/buy";
import ScrollToTop from "../styled/scrollToTop/scrollToTop";

export default function App() {
  return (
    <>
      <GlobalStyle />
      {/* <PageWrapper listOne={listOne} listTwo={listTwo} /> */}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route
              index
              element={<MainPage listOne={listOne} listTwo={listTwo} />}
            />
            <Route path={AppRoute.BUY} element={<Buy buyList={buyList} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
