import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "PrimePack — Reliable Packaging Solutions for Every Business",
  description:
    "PrimePack is a Latvia-based supplier of high-quality packaging materials, bags, pouches, films, and custom packaging solutions for businesses across Latvia and Europe.",
  keywords: [
    "packaging supplier Latvia",
    "custom packaging",
    "paper bags",
    "plastic bags",
    "stand-up pouches",
    "packaging films",
    "food packaging",
    "industrial packaging",
    "B2B packaging",
  ],
  openGraph: {
    title: "PrimePack — Quality Packaging. Reliable Supply.",
    description:
      "High-quality packaging materials and custom solutions for businesses across Latvia and Europe.",
    url: "https://primepack.lv",
    siteName: "PrimePack",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
