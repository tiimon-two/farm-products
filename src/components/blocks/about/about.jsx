import React from "react";
import Title from "../../ui/title/title";
import { StyledAbout, StyledInfo, StyledText } from "./styled";
import styled from "styled-components";
// import "./style.css";

export default function About() {
  const LeftTitle = styled(Title)`
    text-align: left;
    margin-bottom: 24px;
  `;

  return (
    // <section className="about__container">
    //   <div className="about__info">
    //     <Title level="1" text="Магазин фермерских продуктов с доставкой" />
    //     <p>
    //       Все продукты изготавливаются под заказ. Фермеры начинают готовить
    //       продукты за день до отправки заказа клиентам. Именно поэтому мы
    //       принимаем заказы заранее и доставляем продукты максимально свежими.
    //     </p>
    //   </div>
    // </section>

    <StyledAbout>
      <StyledInfo>
        <LeftTitle level="1">
          Магазин фермерских продуктов с доставкой
        </LeftTitle>
        <StyledText>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </StyledText>
      </StyledInfo>
    </StyledAbout>
  );
}
