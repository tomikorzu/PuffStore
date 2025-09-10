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
      {children}
      <Footer />
    </>
  );
}
