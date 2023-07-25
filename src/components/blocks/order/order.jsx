import { useState } from "react";
import {
  Form,
  OrderButton,
  Price,
  StyledInput,
  StyledSection,
  StyledTitle
} from "./styled";

export default function Order({ price, haveBuys }) {
  const HandlerBuy = () => {
    alert(`Заказ на сумму ${price} руб. будет доставлен по адресу: ${adress}`);
  };

  const [adress, setAdress] = useState(null);
  const ready = adress && haveBuys;

  const formatPrice = (value) => {
    const roundedPrice = Math.round(value);
    return roundedPrice.toString().replace(/(\d)(?=(\d\d\d)+$)/, "$1 ");
  };

  return (
    <StyledSection>
      <StyledTitle>Сделать заказ</StyledTitle>
      <Form>
        <StyledInput
          type="text"
          name="adress"
          placeholder="Введите адрес доставки"
          onChange={(e) => setAdress(e.target.value)}
        />
        <span>Цена</span>
        <Price>{formatPrice(price)} руб.</Price>
        <OrderButton disabled={!ready} onClick={HandlerBuy}>
          Купить
        </OrderButton>
      </Form>
    </StyledSection>
  );
}
