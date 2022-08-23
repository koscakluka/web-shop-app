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

const CheckoutFormP1 = () => (
  <form>
    <CheckoutFormHeader page={1} />
    <HeaderTypography variant="h6" component="h2">
      Shipping Address
    </HeaderTypography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="standard"
          type="text"
          label="First Name"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="standard"
          id="someid"
          label="Last Name"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="standard"
          type="text"
          label="Address Line 1"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="standard"
          type="text"
          label="Address Line 2"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="standard"
          type="text"
          label="City"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="standard"
          type="text"
          label="State/Province/Region"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="standard"
          type="number"
          label="Zip / Postal code"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="standard"
          type="text"
          label="Country"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Use this address for payment details"
        />
      </Grid>
    </Grid>
  </form>
);

const CheckoutFormP1Actions = ({ nextPage }) => (
  <Button onClick={nextPage} variant="contained">
    Next
  </Button>
);

export { CheckoutFormP1, CheckoutFormP1Actions };
