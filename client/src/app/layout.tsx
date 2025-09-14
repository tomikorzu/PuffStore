import type { Metadata } from "next";
import AppProvider from "@/modules/shared/providers/AppProvider.provider";
import { Montserrat, Candal } from "next/font/google";

export const metadata: Metadata = {
  title: "Zennify",
  description: "E-commerce platform for selling products.",
};

export const mainFont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const secondaryFont = Candal({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className + " " + secondaryFont.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
