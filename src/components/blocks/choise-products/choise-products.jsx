import Checkbox from "../../ui/checkbox/checkbox";
import {
  CustomTitle,
  StyledProductItem,
  StyledProductList,
  StyledSection
} from "./styled";

export default function ChoiseProducts({
  productList,
  name,
  onChange,
  onClickLabel = () => {}
}) {
  const handleChange = (value) => {
    const newValue = [...productList];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <StyledSection>
      <CustomTitle>Выберите продукты</CustomTitle>
      <form>
        <StyledProductList>
          {productList.map((product, index) => (
            <StyledProductItem key={product.id}>
              {/* <StyledLabel>{product.title}</StyledLabel> */}
              <Checkbox
                text={product.title}
                selectValues={productList}
                isChecked={productList.includes(product.value)}
                value={product.value}
                name={name}
                onClick={(product) => onClickLabel(product, index)}
                onChange={handleChange}
              />
            </StyledProductItem>
          ))}
        </StyledProductList>
      </form>
    </StyledSection>
  );
}
