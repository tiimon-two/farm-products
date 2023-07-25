import React from "react";
import CompareItem from "../../ui/compare-item/compare-item";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
// import "./style.css";
import styled from "styled-components";
import {
  StyledList,
  StyledSection,
  AdvantageItem,
  DisAdvantageItem
} from "./styled";
import { StyledWrapper } from "../../ui/compare-item/styled";
import { AppRoute } from "../../../const";

export default function WhyBetter({ listOne, listTwo }) {
  const CentralTitle = styled(Title)`
    margin-bottom: 64px;
  `;

  return listOne && listOne.length && listTwo && listTwo.length ? (
    <StyledSection>
      <CentralTitle>Почему фермерские продукты лучше?</CentralTitle>
      <StyledWrapper>
        <StyledList>
          {listOne.map((item) => (
            <AdvantageItem key={item.id}>
              <CompareItem
                category={item.category}
                title={item.title}
                text={item.text}
                icon={item.icon}
                categoryColor="green"
              />
            </AdvantageItem>
          ))}
        </StyledList>
        <StyledList>
          {listTwo.map((item) => (
            <DisAdvantageItem key={item.id}>
              <CompareItem
                category={item.category}
                title={item.title}
                text={item.text}
                icon={item.icon}
                categoryColor="red"
              />
            </DisAdvantageItem>
          ))}
        </StyledList>
      </StyledWrapper>
      <Button color="orange" text="Купить" link={AppRoute.BUY}>
        Купить
      </Button>
    </StyledSection>
  ) : // <section className="why-better">
  //   <CentralTitle>Почему фермерские продукты лучше?</CentralTitle>
  //   <div className="why-better__wrapper">
  //     <ul className="why-better__list why-better__list--advantage">
  //       {listOne.map((item) => (
  //         <li
  //           className="why-better__item why-better__item--advantage"
  //           key={item.id}
  //         >
  //           <CompareItem
  //             category={item.category}
  //             title={item.title}
  //             text={item.text}
  //             icon={item.icon}
  //           />
  //         </li>
  //       ))}
  //     </ul>
  //     <ul className="why-better__list why-better__list--disadvatage">
  //       {listTwo.map((item) => (
  //         <li
  //           className="why-better__item why-better__item--disadvantage"
  //           key={item.id}
  //         >
  //           <CompareItem
  //             category={item.category}
  //             title={item.title}
  //             text={item.text}
  //             icon={item.icon}
  //           />
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  //   <Button />
  // </section>
  null;
}
