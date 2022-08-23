import React from "react";

import {
  ProductsGrid,
  ProductImage,
  ProductCard,
  ProductTitle,
  ProductCheckbox,
} from "./ProductsGallery.style";

const ProductsGallery = () => (
  <ProductsGrid container spacing={8}>
    {[1, 2, 3, 4, 5, 6, 7].map((k) => (
      <ProductsGrid key={k}>
        <ProductCard>
          <ProductImage src="https://picsum.photos/600/400" />
          <ProductTitle>Product Name: Product Price</ProductTitle>
          <ProductCheckbox />
        </ProductCard>
      </ProductsGrid>
    ))}
  </ProductsGrid>
);

export default ProductsGallery;
