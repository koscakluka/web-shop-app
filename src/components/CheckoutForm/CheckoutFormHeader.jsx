import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import { DarkerDivider, NumberAvatar, SmBox } from "./CheckoutFormHeader.style";

const PAGES = ["Shipping Address", "Payment Details", "Review Your Order"];

const CheckoutFormHeader = ({ page }) => (
  <SmBox mb={"2.5rem"}>
    <Grid container alignItems={"center"} justifyContent={"space-between"}>
      {PAGES.map((title, index) => (
        <>
          <Grid item>
            <CheckoutFormHeaderElement
              index={index + 1}
              title={title}
              emphasized={index < page}
            />
          </Grid>
          {index + 1 < PAGES.length ? (
            <Grid item>
              <DarkerDivider sx={{ width: "15px" }} />
            </Grid>
          ) : (
            <></>
          )}
        </>
      ))}
    </Grid>
  </SmBox>
);

const CheckoutFormHeaderElement = ({ index, title, emphasized }) => {
  const theme = useTheme();
  return (
    <Grid container spacing={1} justifyContent={"center"}>
      <Grid item>
        <NumberAvatar
          sx={{
            bgcolor: emphasized ? theme.palette.primary.main : "",
          }}
        >
          {index}
        </NumberAvatar>
      </Grid>
      <Grid item>
        <Typography textAlign={"center"} fontWeight={emphasized ? "bold" : ""}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CheckoutFormHeader;
