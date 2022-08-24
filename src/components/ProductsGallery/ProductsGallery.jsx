import React from "react";

import {
  ProductsGrid,
  ProductImage,
  ProductCard,
  ProductTitle,
  ProductCheckbox,
} from "./ProductsGallery.style";

const ProductsGallery = () => {
  return (
    <ProductsGrid container spacing={8}>
      {[1, 2, 3, 4, 5, 6, 7].map((k) => (
        <ProductsGrid key={k}>
          <Product product={k} />
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
      <ProductImage src="https://picsum.photos/600/400" />
      <ProductTitle>Product Name: Product Price</ProductTitle>
      <ProductCheckbox checked={checked} />
    </ProductCard>
  );
};

export default ProductsGallery;
