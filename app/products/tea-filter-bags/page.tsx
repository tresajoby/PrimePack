import type { Metadata } from "next";
import TeaFilterBagsClient from "./TeaFilterBagsClient";

export const metadata: Metadata = {
  title: "Tea Filter Bags — Food-Safe Heat-Seal Filter Paper | PrimePack Latvia",
  description: "Food-safe tea filter bags in Size M (65×80mm) & Size L (85×135mm). Filter paper 18, 10,000 pcs/box. B2B supplier Latvia. From €85.50/box.",
  openGraph: {
    title: "Tea Filter Bags | PrimePack Latvia",
    description: "Food-safe tea filter bags in Size M & L. 10,000 pcs/box. B2B supplier Latvia. From €85.50/box.",
    url: "https://www.primepack.lv/products/tea-filter-bags",
    images: [{ url: "/og-image.png" }],
  },
  alternates: {
    canonical: "https://www.primepack.lv/products/tea-filter-bags",
    languages: {
      "x-default": "https://www.primepack.lv/products/tea-filter-bags",
      "en": "https://www.primepack.lv/products/tea-filter-bags",
      "lv": "https://www.primepack.lv/products/tea-filter-bags",
      "ru": "https://www.primepack.lv/products/tea-filter-bags",
    },
  },
  keywords: ["tea filter bags Latvia", "tējas filtru maisiņi Latvija", "tea bags wholesale Latvia", "tea bags supplier Latvia", "filter paper bags Latvia", "heat seal tea bags Latvia", "food safe filter bags Latvia", "loose leaf tea bags Latvia", "herb bags Latvia", "tea packaging Latvia"],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.primepack.lv" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.primepack.lv/products" },
    { "@type": "ListItem", position: 3, name: "Tea Filter Bags", item: "https://www.primepack.lv/products/tea-filter-bags" },
  ],
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Tea Filter Bags",
  url: "https://www.primepack.lv/products/tea-filter-bags",
  description: "Food-safe tea filter bags in Size M (65×80mm) and Size L (85×135mm). Filter paper 18, 10,000 pcs/box. B2B supplier Latvia.",
  image: "https://www.primepack.lv/tea-filter-bags.png",
  brand: { "@type": "Brand", name: "PrimePack" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "85.50",
    highPrice: "150",
    offerCount: 2,
    availability: "https://schema.org/InStock",
    url: "https://www.primepack.lv/products/tea-filter-bags",
    seller: { "@type": "Organization", name: "PrimePack" },
  },
};

export default function TeaFilterBagsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <TeaFilterBagsClient />
    </>
  );
}
