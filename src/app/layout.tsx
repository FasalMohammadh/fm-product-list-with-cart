import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import type { PropsWithChildren } from "react";

import { CartItemsStoreProvider } from "@/stores";

import "./globals.css";

const redhatText = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--font-redhat",
});

const metadata: Metadata = {
  title: "Product List with Cart",
  description: "Product List with Cart frontend mentor challenge",
};

function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`${redhatText.variable} font-sans text-rose-900`}>
        <CartItemsStoreProvider>{children}</CartItemsStoreProvider>
      </body>
    </html>
  );
}

export { metadata };
export default RootLayout;
