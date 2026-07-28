import type { Metadata } from "next";
import TeaCatalogClient from "./TeaCatalogClient";

export const metadata: Metadata = {
  title: "Tea Filter Bag Sizes & Pricing — Size M & L | PrimePack Latvia",
  description: "Configure and order tea filter bags by size. Size M (65×80mm) from €85.50/box, Size L (85×135mm) from €135/box. 10,000 pcs/box. B2B supplier Latvia.",
  openGraph: {
    title: "Tea Filter Bag Catalog | PrimePack Latvia",
    description: "Size M & L tea filter bags. From €85.50/box. 10,000 pcs/box. B2B supplier Latvia.",
    url: "https://www.primepack.lv/products/tea-filter-bags/catalog",
    images: [{ url: "/og-image.png" }],
  },
  alternates: { canonical: "https://www.primepack.lv/products/tea-filter-bags/catalog" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.primepack.lv" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.primepack.lv/products" },
    { "@type": "ListItem", position: 3, name: "Tea Filter Bags", item: "https://www.primepack.lv/products/tea-filter-bags" },
    { "@type": "ListItem", position: 4, name: "Catalog", item: "https://www.primepack.lv/products/tea-filter-bags/catalog" },
  ],
};

export default function TeaCatalogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TeaCatalogClient />
    </>
  );
}
