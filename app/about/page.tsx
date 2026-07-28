import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About PrimePack — Packaging Supplier Based in Riga, Latvia",
  description: "PrimePack is a B2B flexible packaging supplier based in Riga, Latvia. We serve 1,000+ businesses across Latvia and Europe with premium bags, pouches & filter products.",
  openGraph: {
    title: "About PrimePack | Packaging Supplier Riga, Latvia",
    description: "B2B flexible packaging supplier based in Riga, Latvia. Serving 1,000+ businesses across Latvia and Europe.",
    url: "https://www.primepack.lv/about",
    images: [{ url: "/og-image.png" }],
  },
  alternates: { canonical: "https://www.primepack.lv/about" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.primepack.lv" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.primepack.lv/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutClient />
    </>
  );
}
