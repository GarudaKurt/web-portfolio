import "./globals.css";
import Header from "./components/navbar-header/navbar";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALDREN Portfolio",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-500 bg-black dark:bg-black min-h-screen">
          <Header />
          {children}
      </body>
    </html>
  );
}
