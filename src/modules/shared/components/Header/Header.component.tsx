import TopBanner from "./TopBanner/TopBanner.component";
import Navbar from "./Navbar/Navbar.component";
import { Divider, Stack } from "@mui/material";
import { maxContentWidth } from "../../constants/units";

export default function Header() {
  return (
    <header>
      <TopBanner />
      <Navbar />
      <Stack sx={{ width: "100%", maxWidth: maxContentWidth, mx: "auto" }}>
        <Divider sx={{ my: 0, borderWidth: 1, borderColor: "#00000010" }} />
      </Stack>
    </header>
  );
}
