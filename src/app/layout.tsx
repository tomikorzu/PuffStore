import type { Metadata } from "next";
import AppProvider from "@/modules/shared/providers/AppProvider.provider";
import InterfaceWrapper from "@/modules/shared/components/InterfaceWrapper/InterfaceWrapper.component";
import { Montserrat, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Zennify",
  description: "E-commerce platform for selling products.",
};

export const mainFont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const secondaryFont = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <AppProvider>
          <InterfaceWrapper>{children}</InterfaceWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
