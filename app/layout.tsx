import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";

export const metadata: Metadata = {
  title: "Arigato Demo App",
  description: "Used Industrial Machinery Exporter Japan",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Demo App</title>
        <meta name="description" content="Search and Compare city weather" />
      </head>
      <body className="flex h-screen bg-gray-900 text-white">
        <SideNav />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 overflow-auto p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
