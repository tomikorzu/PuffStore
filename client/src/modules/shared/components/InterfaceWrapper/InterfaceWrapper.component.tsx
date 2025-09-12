import { Box } from "@mui/material";
import Footer from "../Footer/Footer.component";
import Header from "../Header/Header.component";

export default function InterfaceWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  );
}
