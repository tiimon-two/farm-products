import Description from "../description/description";
import OptionsList from "../optionList/option-list";
import ProductImage from "../productImage/product-image";
import Tabs from "../tabs/tabs";
import {
  ProductPrice,
  ProductTitle,
  ProductWrapper,
  StyledItem
} from "./styled";

export default function ProductItem({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: <Description text={product.description} />
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.feutures} />
    }
  ];

  return (
    <StyledItem>
      {/* <ProductImage backgroundImage={product.image}/> */}
      <ProductImage image={product.image} />
      <ProductWrapper>
        <ProductTitle level={4}>{product.title}</ProductTitle>
        <Tabs tabs={tabs} />
        {/* <ProductText>{product.discription}</ProductText> */}
        <ProductPrice>
          {product.price} руб. / {product.weight}
        </ProductPrice>
      </ProductWrapper>
    </StyledItem>
  );
}
