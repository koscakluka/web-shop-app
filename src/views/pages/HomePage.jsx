import React from "react";
import ProductsGrid from "../../components/ProductsGrid/ProductsGallery";
import StandardLayout from "../layouts/StandardLayout";

import { Title, Subtitle, BuyButton } from "./HomePage.style";

const HomePage = () => {
  return (
    <StandardLayout>
      <Title variant="h1" align="left">
        Product
      </Title>
      <Subtitle variant="subtitle1" gutterBottom>
        Keep up with our pick of the best gadgets and tech out right now.
      </Subtitle>
      <ProductsGrid />
      <BuyButton variant="contained" size="large">
        Buy
      </BuyButton>
    </StandardLayout>
  );
};

export default HomePage;
