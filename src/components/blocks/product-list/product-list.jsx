import ProductItem from "../../ui/product-item/product-item";
import { StyledList, StyledSection } from "./styled";

export default function ProductList({ productList }) {
  return (
    <StyledSection>
      <StyledList>
        {productList.map((product) => (
          <ProductItem key={product.id} product={product}></ProductItem>
        ))}
      </StyledList>
    </StyledSection>
  );
}
