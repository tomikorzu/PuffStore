import TopBanner from "./TopBanner/TopBanner.component";
import Navbar from "./Navbar/Navbar.component";
import { Box, Divider, Stack } from "@mui/material";
import { maxContentWidth } from "../../constants/units";
import HideOnScroll from "../HideOnScroll/HideOnScroll.component";

export default function Header() {
  return (
    <HideOnScroll threshold={300}>
      <Box
        component="header"
        sx={{
          left: 0,
          width: "100%",
          position: "sticky",
          top: "0",
          zIndex: 50,
        }}
      >
        <TopBanner />
        <Navbar />
        <Stack sx={{ width: "100%", maxWidth: maxContentWidth, mx: "auto" }}>
          <Divider sx={{ my: 0, borderWidth: 1, borderColor: "#00000010" }} />
        </Stack>
      </Box>
    </HideOnScroll>
  );
}
