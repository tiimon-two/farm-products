import { useState } from "react";
import Order from "../../blocks/order/order";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import {
  CheckboxLabel,
  ProductSwiper,
  StyledOrder,
  StyledWrapper
} from "./styles";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import ProductItem from "../../ui/product-item/product-item";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);
export default function Buy({ buyList }) {
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  const selectProducts = selectProductIds.map((id) =>
    buyList.find((product) => product.id === id)
  );
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );
  const haveBuys = selectProductIds && selectProductIds.length;
  return buyList && buyList.length ? (
    <StyledOrder>
      <StyledWrapper>
        <CheckboxList
          labelComponent={CheckboxLabel}
          name={"select-products"}
          options={buyList.map((product) => ({
            value: product.id,
            title: product.title
          }))}
          selectValues={selectProductIds}
          onChange={setSelectProductIds}
          onClickLabel={handleOnClickProduct}
        />
        <Order price={fullPrice} haveBuys={haveBuys} />
      </StyledWrapper>
      <ProductSwiper
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fraction"
        }}
        onSwiper={setSwiperRef}
      >
        {buyList.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
      {/* <ProductList productList={buyList} /> */}
    </StyledOrder>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}
