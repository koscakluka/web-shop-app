import React from "react";

import {
  ProductsGrid,
  ProductImage,
  ProductCard,
  ProductTitle,
  ProductCheckbox,
} from "./ProductsGallery.style";

const ProductsGallery = ({ products, selectHandler }) => {
  return (
    <ProductsGrid container spacing={8}>
      {products.map((product) => (
        // <ProductsGrid key={product.id}> {/* For proper flex flow */}
        <ProductsGrid item key={product.id} xs={12} sm={6} lg={4}>
          <Product
            product={product}
            selectHandler={selectHandler}
            selected={product.selected}
          />
        </ProductsGrid>
      ))}
    </ProductsGrid>
  );
};

const Product = ({ product, selectHandler, selected }) => {
  //TODO: double check sync checking with global cart
  //potential bug e.g. updating cart in some other place
  const [checked, setChecked] = React.useState(false);

  const handleCardClick = () => {
    setChecked((checked) => !selected);
    selectHandler(product.id);
  };

  return (
    <ProductCard onClick={handleCardClick}>
      <ProductImage src={product.images[0]} />
      <ProductTitle>{`${product.title}: $${product.price}`}</ProductTitle>
      <ProductCheckbox
        onClick={handleCardClick}
        checked={selected || checked}
      />
    </ProductCard>
  );
};

export default ProductsGallery;
