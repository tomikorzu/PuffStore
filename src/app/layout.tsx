import type { Metadata } from "next";
import AppProvider from "@/modules/shared/providers/AppProvider.provider";

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
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
