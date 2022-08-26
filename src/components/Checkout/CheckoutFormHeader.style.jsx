import { Avatar, Box, Divider, styled } from "@mui/material";

const SmBox = styled(Box)(({ theme }) => ({
  display: { xs: "none", sm: "block" },
}));

const DarkerDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: "#BBB",
}));

const NumberAvatar = styled(Avatar)(({ theme }) => ({
  height: "1.5rem",
  width: "1.5rem",
  fontSize: "0.8rem",
}));

export { SmBox, DarkerDivider, NumberAvatar };
