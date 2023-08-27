import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Provider from "./provider";
import Footer from "@/components/Footer";

import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "read-tech",
  description: "Managed by Joy Baruah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="max-w-3xl mx-auto bg-background">
      <body>
        <Provider>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </Provider>
      </body>
    </html>
  );
}
