import "./globals.css";
import { Roboto } from "next/font/google";

import Navbar from "./components/Navbar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
