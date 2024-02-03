import { ModalProvider } from "@/components/providers/modal-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThirdwebProvider } from "../components/providers/thirdweb-provider";
import "./globals.css";
import { getServerSession } from "next-auth";
import { AuthSessionProvider } from "@/components/providers/authsession-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeceNeuz - Redefining journalism for Tommorow",
  description: "Decentralized News WebApp",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <ThirdwebProvider>
        <AuthSessionProvider session={session}>
          <body className={inter.className}>
            <ModalProvider />
            {children}
          </body>
        </AuthSessionProvider>
      </ThirdwebProvider>
    </html>
  );
}
