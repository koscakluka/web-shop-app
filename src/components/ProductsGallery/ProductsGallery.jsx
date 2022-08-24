import React from "react";

import {
  ProductsGrid,
  ProductImage,
  ProductCard,
  ProductTitle,
  ProductCheckbox,
} from "./ProductsGallery.style";

const ProductsGallery = ({ products }) => {
  return (
    <ProductsGrid container spacing={8}>
      {products.map((product) => (
        // <ProductsGrid key={product.id}> {/* For proper flex flow */}
        <ProductsGrid item key={product.id} xs={12} sm={6} lg={4}>
          <Product product={product} />
        </ProductsGrid>
      ))}
    </ProductsGrid>
  );
};

const Product = ({ product }) => {
  const [checked, setChecked] = React.useState(false);

  const handleCardClick = () => {
    setChecked((checked) => !checked);
  };

  return (
    <ProductCard onClick={() => handleCardClick()}>
      <ProductImage src={product.images[0]} />
      <ProductTitle>{`${product.title}: $${product.price}`}</ProductTitle>
      <ProductCheckbox checked={checked} />
    </ProductCard>
  );
};

export default ProductsGallery;
