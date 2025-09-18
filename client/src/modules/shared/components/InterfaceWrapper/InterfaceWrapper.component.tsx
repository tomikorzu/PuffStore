import { Box } from "@mui/material";
import Footer from "../Footer/Footer.component";
import Header from "../Header/Header.component";

export default function InterfaceWrapper({
  children,
  showLayout = true,
}: {
  children: React.ReactNode;
  showLayout?: boolean;
}) {
  return showLayout ? (
    <>
      <Header />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  ) : (
    children
  );
}
