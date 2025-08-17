"use client";

import "./globals.css";
import Header from "./components/navbar-header/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-galaxy">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
