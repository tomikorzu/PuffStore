import type { Metadata } from "next";
import AppProvider from "@/modules/shared/providers/AppProvider.provider";
import InterfaceWrapper from "@/modules/shared/components/InterfaceWrapper/InterfaceWrapper.component";

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
          <InterfaceWrapper>{children}</InterfaceWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
