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
import { CHECKOUT_FORM_FIELDS } from "./HomePage.constants";

const HomePage = () => {
  const { data: products, isLoading: isLoadingProducts } = useQuery(
    ["products", "all"],
    () => ProductsService.getAllProducts()
  );
  const [cart] = useCart();
  const [
    open,
    handleClickOpen,
    handleClose,
    checkoutPage,
    getPage,
    errorMessages,
  ] = useCheckoutPageModal(cart.get, CHECKOUT_FORM_FIELDS);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectedProducts = React.useMemo(() => cart.get(), [cart]);

  const [checkoutContent, checkoutActions] = React.useMemo(
    () => getPage(checkoutPage),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checkoutPage, open, errorMessages]
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
          selectHandler={cart.toggle}
          selectedProducts={selectedProducts}
        />
      ) : (
        <Typography textAlign={"center"}>No products found...</Typography>
      )}
      {cart.size() > 0 ? (
        <BuyButton variant="contained" size="large" onClick={handleClickOpen}>
          Buy
        </BuyButton>
      ) : (
        <></>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"sm"}
        fullWidth={true}
      >
        <DialogTitle>
          <Typography
            variant={"h4"}
            component={"div"}
            align={"center"}
            gutterBottom
          >
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
