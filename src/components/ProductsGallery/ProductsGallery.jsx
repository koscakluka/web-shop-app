import React from "react";

import {
  ProductsGrid,
  ProductImage,
  ProductCard,
  ProductTitle,
  ProductCheckbox,
} from "./ProductsGallery.style";

const ProductsGallery = ({
  products,
  selectHandler,
  selectedProducts = [],
}) => (
  <ProductsGrid container spacing={8}>
    {products.map((product) => (
      // <ProductsGrid key={product.id}> {/* For proper flex flow */}
      <ProductsGrid item key={product.id} xs={12} sm={6} lg={4}>
        <Product
          product={product}
          selectHandler={selectHandler}
          selected={selectedProducts.includes(product.id)}
        />
      </ProductsGrid>
    ))}
  </ProductsGrid>
);

const Product = ({ product, selectHandler, selected }) => {
  const handleCardClick = () => {
    selectHandler(product.id);
  };

  return (
    <ProductCard onClick={handleCardClick}>
      <ProductImage src={product.images[0]} />
      <ProductTitle>{`${product.title}: $${product.price}`}</ProductTitle>
      <ProductCheckbox checked={selected || false} />
    </ProductCard>
  );
};

export default ProductsGallery;
