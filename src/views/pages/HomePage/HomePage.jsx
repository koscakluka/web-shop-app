import React from "react";
import useCheckoutPageModal from "../../../hooks/useCheckoutPageModal";

import ProductsGallery from "../../../components/ProductsGallery/ProductsGallery";
import StandardLayout from "../../layouts/StandardLayout";

import { Title, Subtitle } from "../../layouts/StandardLayout.style";
import { BuyButton } from "./HomePage.style";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import ProductsService from "../../../services/products/ProductsService";
import { useQuery } from "react-query";
import CircularLoading from "../../../components/Loading/CircularLoading";
import useCart from "../../../hooks/useCart";

const HomePage = () => {
  const [selectedProducts, setSelectedProducts] = React.useState([]);
  const { data: products, isLoading: isLoadingProducts } = useQuery(
    ["products", "all"],
    () => ProductsService.getAllProducts()
  );
  const [getCart, toggleProductInCart] = useCart();
  const [open, handleClickOpen, handleClose, checkoutPage, getPage] =
    useCheckoutPageModal(getCart);

  // HOTFIX for re-rendering child
  // TODO Find a cleaner way to re-render gallery
  const toggleSelectedProduct = (productId) => {
    toggleProductInCart(productId);
    setSelectedProducts(getCart());
  };

  const [checkoutContent, checkoutActions] = React.useMemo(
    () => getPage(checkoutPage),
    [checkoutPage, open]
  );

  return (
    <StandardLayout>
      <Title variant="h1" align="left">
        Product
      </Title>
      <Subtitle variant="subtitle1" gutterBottom>
        Keep up with our pick of the best gadgets and tech out right now.
      </Subtitle>
      {isLoadingProducts ? (
        <CircularLoading />
      ) : products.length > 0 ? (
        <ProductsGallery
          products={products}
          selectHandler={toggleSelectedProduct}
          selectedProducts={getCart()}
        />
      ) : (
        <Typography textAlign={"center"}>No products found...</Typography>
      )}
      <BuyButton variant="contained" size="large" onClick={handleClickOpen}>
        Buy
      </BuyButton>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"sm"}
        fullWidth={true}
      >
        <DialogTitle>
          <Typography variant={"h4"} align={"center"} gutterBottom>
            Checkout
          </Typography>
        </DialogTitle>
        <DialogContent>{checkoutContent}</DialogContent>
        <DialogActions>{checkoutActions}</DialogActions>
      </Dialog>
    </StandardLayout>
  );
};

export default HomePage;
