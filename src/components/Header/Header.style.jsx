import { Typography, styled } from "@mui/material";

const HeaderTypography = styled(Typography)(() => ({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "40px",
  lineHeight: "24px",

  margin: "40px auto",

  textAlign: "center",
  letterSpacing: "-0.011em",

  color: "#000000",
  textTransform: "uppercase",
}));

export { HeaderTypography };
