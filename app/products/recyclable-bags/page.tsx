import type { Metadata } from "next";
import RecyclableBagsClient from "./RecyclableBagsClient";

export const metadata: Metadata = {
  title: "Recyclable Packaging Bags — Eco-Friendly Mono-Material | PrimePack Latvia",
  description: "Sustainable mono-material LDPE & BOPP recyclable bags for eco-conscious brands. Food-safe, EU compliant. Custom print, 24+ colours. B2B packaging supplier Latvia. Min. 500 pcs.",
  openGraph: {
    title: "Recyclable Packaging Bags | PrimePack Latvia",
    description: "Sustainable mono-material recyclable bags. Food-safe, EU compliant. B2B packaging supplier Latvia.",
    url: "https://www.primepack.lv/products/recyclable-bags",
    images: [{ url: "/og-image.png" }],
  },
  alternates: {
    canonical: "https://www.primepack.lv/products/recyclable-bags",
    languages: {
      "x-default": "https://www.primepack.lv/products/recyclable-bags",
      "en": "https://www.primepack.lv/products/recyclable-bags",
      "lv": "https://www.primepack.lv/products/recyclable-bags",
      "ru": "https://www.primepack.lv/products/recyclable-bags",
    },
  },
  keywords: ["recyclable packaging Latvia", "eco-friendly packaging Latvia", "pārstrādājami maisi Latvija", "sustainable packaging Latvia", "mono-material packaging Latvia", "recyclable bags supplier", "green packaging Latvia", "biodegradable bags Latvia", "EU compliant packaging Latvia", "LDPE BOPP bags Latvia"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.primepack.lv" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://www.primepack.lv/products" },
        { "@type": "ListItem", position: 3, name: "Recyclable Bags", item: "https://www.primepack.lv/products/recyclable-bags" },
      ],
    },
    {
      "@type": "Product",
      name: "Recyclable Packaging Bags",
      description: "Sustainable mono-material LDPE & BOPP recyclable bags for eco-conscious brands. Food-safe, EU compliant. Min. 500 pcs.",
      image: "https://www.primepack.lv/recyclable-bags.png",
      brand: { "@type": "Brand", name: "PrimePack" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "PrimePack" },
      },
    },
  ],
};

export default function RecyclableBagsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RecyclableBagsClient />
    </>
  );
}
