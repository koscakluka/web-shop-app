import React from "react";
import useCheckoutPageModal from "../../../hooks/useCheckoutPageModal";

import ProductsGrid from "../../../components/ProductsGrid/ProductsGallery";
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

const HomePage = () => {
  const [open, handleClickOpen, handleClose, checkoutPage, getPage] =
    useCheckoutPageModal();

  const [checkoutContent, checkoutActions] = getPage(checkoutPage);

  return (
    <StandardLayout>
      <Title variant="h1" align="left">
        Product
      </Title>
      <Subtitle variant="subtitle1" gutterBottom>
        Keep up with our pick of the best gadgets and tech out right now.
      </Subtitle>
      <ProductsGrid />
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
