import { ModalProvider } from "@/components/providers/modal-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThirdwebProvider } from "../components/providers/thirdweb-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeceNeuz - Redefining journalism for Tommorow",
  description: "Decentralized News WebApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThirdwebProvider>
        <body className={inter.className}>
          <ModalProvider />
          {children}
        </body>
      </ThirdwebProvider>
    </html>
  );
}
