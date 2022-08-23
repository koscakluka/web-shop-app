import React from "react";
import { Link } from "react-router-dom";
import StandardLayout from "../../layouts/StandardLayout";

import { Box } from "@mui/material";
import { Title, Subtitle } from "../../layouts/StandardLayout.style";
import { BackButton } from "./ThankYouPage.style";

const ThankYouPage = () => {
  return (
    <StandardLayout>
      <Title variant="h1" align="center">
        Thank you for your order
      </Title>
      <Subtitle variant="subtitle1" align="center">
        Your order is being processed and you will be notified of the result
        shortly.
      </Subtitle>
      <Box sx={{ textAlign: "center" }}>
        <Link to="/">
          <BackButton variant="contained">Back</BackButton>
        </Link>
      </Box>
    </StandardLayout>
  );
};

export default ThankYouPage;
