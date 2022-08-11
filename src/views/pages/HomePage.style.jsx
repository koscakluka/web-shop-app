import { Typography, styled, Button } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "48px",
  lineHeight: "150%",

  letterSpacing: "-0.022em",

  color: "#000000",
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "32px",
  lineHeight: "150%",

  letterSpacing: "-0.022em",
  color: "#BBBBBB",

  marginBottom: "42px",
}));

const BuyButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: "10%", // 108/1080
  right: "9%", // 184/1920
}));

export { Title, Subtitle, BuyButton };
