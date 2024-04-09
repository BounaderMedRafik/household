import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyNavigation from "./components/MyNavigation";
import MyFooter from "./components/MyFooter";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HouseHold | Home",
  description: "Generated by create next app",
  icons: {
    icon: "/blackfavicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/blackfavicon.svg" sizes="any" />
      <body className={inter.className}>
        <div className="">
          <MyNavigation />
          {children}
          <Toaster />
          <MyFooter />
        </div>
      </body>
    </html>
  );
}
