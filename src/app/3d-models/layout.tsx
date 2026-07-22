// import "./globals.css";

import CategoriesNav from "../components/CategoriesNav";

// import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CategoriesNav></CategoriesNav>
        {children}
      </body>
    </html>
  );
}
