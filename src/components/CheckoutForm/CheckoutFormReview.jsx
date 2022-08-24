import React from "react";

import { Button, Grid, Typography } from "@mui/material";
import CheckoutFormHeader from "./CheckoutFormHeader";
import {
  DescriptionTypography,
  HeaderTypography,
  SubheaderTypography,
} from "./CheckoutForm.style";

const CheckoutFormReview = ({ cart, formValues }) => (
  <>
    <CheckoutFormHeader page={3} />
    <Grid container>
      <Grid item xs={12}>
        <HeaderTypography variant={"h6"} component={"h2"}>
          Order Summary
        </HeaderTypography>
        {[1, 2, 3, 4].map((item) => (
          <Grid container mb={"1rem"}>
            <Grid item xs={12} sm>
              <Typography>Product {item}</Typography>
            </Grid>
            <Grid item xs={12} sm={"auto"}>
              <Typography>$9.99</Typography>
            </Grid>
            <Grid item xs={12}>
              <DescriptionTypography>Some text</DescriptionTypography>
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
            <Typography fontWeight={"bold"}>$34.06</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SubheaderTypography variant="h6" component={"h3"} mb={"0.5rem"}>
          Shipping
        </SubheaderTypography>
        <Typography mb={"0.2rem"}>
          {formValues["First Name"]} {formValues["Last Name"]}
        </Typography>
        <Typography>
          {formValues["Address Line 1"]}, {formValues["City"]},{" "}
          {formValues["State/Province/Region"]},{" "}
          {formValues["Zip / Postal code"]}, {formValues["Country"]}
        </Typography>
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

const CheckoutFormReviewActions = ({ submitForm, previousPage }) => (
  <>
    <Button onClick={previousPage}>Back</Button>
    <Button onClick={submitForm} variant="contained">
      Place Order
    </Button>
  </>
);

export { CheckoutFormReview, CheckoutFormReviewActions };
