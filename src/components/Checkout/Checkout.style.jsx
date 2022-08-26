import { styled, Typography } from "@mui/material";

const HeaderTypography = styled(Typography)(({ theme }) => ({
  marginBottom: "1.5rem",
}));

const SubheaderTypography = styled(Typography)(({ theme }) => ({
  marginBottom: "0.5rem",
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
  fontSize: "0.8rem",
}));

export { HeaderTypography, SubheaderTypography, DescriptionTypography };
