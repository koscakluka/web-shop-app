import { Box, Checkbox, styled, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const ProductsGrid = styled(Grid2)(({ theme }) => ({
  justifyContent: "center",
}));

const ProductCard = styled(Box)(({ theme }) => ({
  maxWidth: "420px",

  //TODO: Small bug with centering below 420px
  //Possible solution flex or width manipulation
  display: "grid",
  gridTemplateColumns: "1fr 1rem",
  gridTemplateRows: "1fr 30px",
  gridTemplateAreas: "'image image' 'title checkbox'",
  alignItems: "center",
}));

const ProductImage = styled("img")(({ theme }) => ({
  gridArea: "image",

  width: "420px",
  height: "224px",

  borderRadius: "6px",
}));

const ProductTitle = styled(Typography)(({ theme }) => ({
  gridArea: "title",

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
