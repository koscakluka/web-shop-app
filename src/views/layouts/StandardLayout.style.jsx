import { Typography, Box, styled } from "@mui/material";

const Main = styled(Box)(({ theme }) => ({
  maxWidth: "1400px",
  padding: "0 2rem",
  margin: "0 auto",
}));

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

export { Main, Title, Subtitle };
