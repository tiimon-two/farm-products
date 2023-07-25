import React from "react";
import About from "../../blocks/about/about";
import WhyBetter from "../../blocks/why-better/why-better";
import { Wrapper } from "./styles";

export default function MainPage({ listOne, listTwo }) {
  return (
    <Wrapper>
      <About />
      <WhyBetter listOne={listOne} listTwo={listTwo} />
    </Wrapper>
  );
}
