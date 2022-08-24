import React from "react";

import {
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  Grid,
} from "@mui/material";
import CheckoutFormHeader from "./CheckoutFormHeader";
import { HeaderTypography } from "./CheckoutForm.style";

const CheckoutForm = ({ formFields, page }) => (
  <form>
    <CheckoutFormHeader page={page} />
    <HeaderTypography variant="h6" component="h2">
      Shipping Address
    </HeaderTypography>
    <Grid container spacing={3}>
      {Object.entries(formFields).map(([key, value]) => {
        if (value.type !== "checkbox") {
          return (
            <Grid item xs={12} sm={value.split ? 6 : 12} key={key}>
              <TextField
                variant="standard"
                type={value.type}
                label={key}
                fullWidth
                required={value.required}
              />
            </Grid>
          );
        } else {
          return (
            <Grid item xs={12} sm={value.split ? 6 : 12} key={key}>
              <FormControlLabel
                control={<Checkbox defaultChecked={value.checked} />}
                label={key}
              />
            </Grid>
          );
        }
      })}
    </Grid>
  </form>
);

const CheckoutFormActions = ({ nextPage, previousPage }) => (
  <>
    {previousPage ? <Button onClick={previousPage}>Back</Button> : <></>}
    {nextPage ? (
      <Button onClick={nextPage} variant="contained">
        Next
      </Button>
    ) : (
      <></>
    )}
  </>
);

export { CheckoutForm, CheckoutFormActions };
