import { Button, styled } from "@mui/material";

const BuyButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: "10%", // 108/1080
  right: "9%", // 184/1920
}));

export { BuyButton };
