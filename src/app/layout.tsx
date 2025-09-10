import type { Metadata } from "next";
import AppProvider from "@/modules/shared/providers/AppProvider.provider";
import Header from "@/modules/shared/components/Header/Header.component";
import Footer from "@/modules/shared/components/Footer/Footer.component";

export const metadata: Metadata = {
  title: "Zennify",
  description: "E-commerce platform for selling products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
