import { Box, Checkbox, Grid, styled, Typography } from "@mui/material";
// import Grid2 from "@mui/material/Unstable_Grid2";

// const ProductsGrid = styled(Grid2)(({ theme }) => ({ // For proper flex flow
const ProductsGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
}));

const ProductCard = styled(Box)(({ theme }) => ({
  maxWidth: "420px",

  display: "grid",
  gridTemplateColumns: "1fr auto",
  gridTemplateRows: "1fr auto",
  gridTemplateAreas: "'image image' 'title checkbox'",
  alignItems: "center",
  justifyItems: "center",

  padding: "5px",

  cursor: "pointer",

  "&:hover": {
    boxShadow: "1px 1px 3px #BBB",
    borderRadius: "6px",
  },
}));

const ProductImage = styled("img")(({ theme }) => ({
  gridArea: "image",

  width: "100%",
  maxWidth: "420px",
  maxHeight: "224px",
  objectFit: "contain",

  borderRadius: "6px",
}));

const ProductTitle = styled(Typography)(({ theme }) => ({
  gridArea: "title",

  minHeight: "1.5rem",

  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "22px",
  lineHeight: "150%",

  letterSpacing: "-0.022em",

  color: "#333333",
}));

const ProductCheckbox = styled(Checkbox)(({ theme }) => ({
  gridArea: "checkbox",

  lineHeight: "150%",

  "& .MuiSvgIcon-root": { fontSize: 30 },
}));

export {
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductCheckbox,
};
