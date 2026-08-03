import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Packaging Products — Flat Bottom Bags, Doypacks & More | PrimePack Latvia",
  description: "Browse PrimePack's full B2B packaging range: flat bottom bags, doypack stand-up pouches, recyclable bags, side gusset bags & tea filter bags. Ships across Latvia & Europe.",
  openGraph: {
    title: "Packaging Products | PrimePack Latvia",
    description: "Flat bottom bags, doypack pouches, recyclable bags, side gusset bags & tea filter bags. B2B packaging supplier Latvia.",
    url: "https://www.primepack.lv/products",
    images: [{ url: "/og-image.png" }],
  },
  alternates: { canonical: "https://www.primepack.lv/products" },
  keywords: ["packaging products Latvia", "packing bags Latvia", "packaging bags Latvia", "packaging materials Latvia", "packaging supplier Latvia", "iepakojuma produkti Latvija", "wholesale packaging Latvia", "bulk packaging Latvia", "B2B packaging Latvia", "flexible packaging supplier Latvia", "packaging company Riga"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.primepack.lv" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://www.primepack.lv/products" },
      ],
    },
    {
      "@type": "ItemList",
      name: "PrimePack Packaging Products",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Flat Bottom Bag", url: "https://www.primepack.lv/products/flat-bottom-bag" },
        { "@type": "ListItem", position: 2, name: "Doypack Stand-Up Pouch", url: "https://www.primepack.lv/products/doypack-bag" },
        { "@type": "ListItem", position: 3, name: "Recyclable Bags", url: "https://www.primepack.lv/products/recyclable-bags" },
        { "@type": "ListItem", position: 4, name: "Side Gusset Bag", url: "https://www.primepack.lv/products/side-gusset-bag" },
        { "@type": "ListItem", position: 5, name: "Tea Filter Bags", url: "https://www.primepack.lv/products/tea-filter-bags" },
      ],
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductsClient />
    </>
  );
}
