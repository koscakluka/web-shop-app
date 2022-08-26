import React from "react";

import { Button, Grid, Typography } from "@mui/material";
import CheckoutFormHeader from "./CheckoutFormHeader";
import {
  DescriptionTypography,
  HeaderTypography,
  SubheaderTypography,
} from "./CheckoutForm.style";
import { useQueries } from "react-query";
import ProductsService from "../../services/products/ProductsService";

const CheckoutFormReview = ({ cart, formValues }) => {
  const userQueries = useQueries(
    cart.map((productId) => {
      return {
        queryKey: ["product", productId],
        queryFn: () => ProductsService.getProduct(productId),
      };
    })
  );

  const cartProducts = [];
  userQueries.forEach((query) => {
    if (!query.isLoading && query.data) {
      cartProducts.push(query.data);
    }
  });

  const shippingInfo = {
    name: `${formValues["First Name"]} ${formValues["Last Name"]}`,
    address: [
      formValues["Address Line 1"],
      formValues["Address Line 2"],
      formValues["City"],
      formValues["State/Province/Region"],
      formValues["Zip / Postal code"],
      formValues["Country"],
    ].join(", "), //REMOVE NON-EMPTY STRINGS!
  };

  let totalSum = 0;
  cartProducts.forEach((product) => {
    totalSum += product.price;
  });

  return (
    <>
      <CheckoutFormHeader page={3} />
      <Grid container>
        <Grid item xs={12}>
          <HeaderTypography variant={"h6"} component={"h2"}>
            Order Summary
          </HeaderTypography>
          {cartProducts.map((product) => (
            <Grid container mb={"1rem"} key={product.id}>
              <Grid item xs={12} sm>
                <Typography>{product.title}</Typography>
              </Grid>
              <Grid item xs={12} sm={"auto"}>
                <Typography>${product.price}.00</Typography>
              </Grid>
              <Grid item xs={12}>
                <DescriptionTypography>
                  {product.description}
                </DescriptionTypography>
              </Grid>
            </Grid>
          ))}
          <Grid container mb={"1.5rem"}>
            <Grid item xs={12} sm>
              <Typography>Shipping</Typography>
            </Grid>
            <Grid item xs={12} sm={"auto"}>
              <Typography>Free</Typography>
            </Grid>
          </Grid>
          <Grid container mb={"1.5rem"}>
            <Grid item xs={12} sm>
              <Typography>Total</Typography>
            </Grid>
            <Grid item xs={12} sm={"auto"}>
              <Typography fontWeight={"bold"}>${totalSum}.00</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubheaderTypography variant="h6" component={"h3"} mb={"0.5rem"}>
            Shipping
          </SubheaderTypography>
          <Typography mb={"0.2rem"}>{shippingInfo.name}</Typography>
          <Typography>{shippingInfo.address}</Typography>
        </Grid>
        {/*******************/}
        {/* Payment Details */}
        {/*******************/}
        <Grid item xs={12} sm={6}>
          <SubheaderTypography variant="h6" component={"h3"} mb={"0.5rem"}>
            Payment Details
          </SubheaderTypography>
          <Grid container mb={"0.2rem"} spacing={0.5}>
            {/* TODO: Make a key-value pair mapping */}
            <Grid item xs={12} sm={6}>
              <Typography>Card type:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Visa</Typography>
            </Grid>
          </Grid>
          <Grid container mb={"0.2rem"} spacing={0.5}>
            <Grid item xs={12} sm={6}>
              <Typography>Card holder:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>{formValues["Name on card"]}</Typography>
            </Grid>
          </Grid>
          <Grid container mb={"0.2rem"} spacing={0.5}>
            <Grid item xs={12} sm={6}>
              <Typography>Card number:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>{formValues["Card number"]}</Typography>
            </Grid>
          </Grid>
          <Grid container mb={"0.2rem"} spacing={0.5}>
            <Grid item xs={12} sm={6}>
              <Typography>Expiry Date:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>{formValues["Expiry date"]}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const CheckoutFormReviewActions = ({ submitForm, previousPage }) => (
  <>
    <Button onClick={previousPage}>Back</Button>
    <Button onClick={submitForm} variant="contained">
      Place Order
    </Button>
  </>
);

export { CheckoutFormReview, CheckoutFormReviewActions };
