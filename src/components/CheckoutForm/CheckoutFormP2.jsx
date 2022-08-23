import React from "react";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import CheckoutFormHeader from "./CheckoutFormHeader";
import { HeaderTypography } from "./CheckoutForm.style";

const CheckoutFormP2 = () => (
  <form>
    <CheckoutFormHeader page={2} />
    <HeaderTypography variant={"h6"} component={"h2"}>
      Payment method
    </HeaderTypography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="standard"
          type="text"
          label="Name on card"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="standard"
          type="text"
          label="Card number"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="standard"
          type="text"
          label="Expiry date"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="standard"
          type="text"
          label="CVV"
          helperText="Last three digits on signature strip"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox />}
          label="Remember credit card details for next time"
        />
      </Grid>
    </Grid>
  </form>
);

const CheckoutFormP2Actions = ({ nextPage, previousPage }) => (
  <>
    <Button onClick={previousPage}>Back</Button>
    <Button onClick={nextPage} variant="contained">
      Next
    </Button>
  </>
);

export { CheckoutFormP2, CheckoutFormP2Actions };
