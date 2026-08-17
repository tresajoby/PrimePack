import type { Metadata } from "next";
import TeaFilterBagsClient from "./TeaFilterBagsClient";

export const metadata: Metadata = {
  title: "Tea Filter Bags — Food-Safe Heat-Seal Filter Paper",
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
  keywords: [
    // English — simple + long-tail
    "tea filter bags latvia", "tea filter latvia", "tea bags latvia", "tea filter riga",
    "tea filter supplier latvia", "tea bags wholesale latvia", "tea bags supplier latvia",
    "tea filter bags riga", "filter paper bags latvia", "heat seal tea bags latvia",
    "food safe filter bags latvia", "loose leaf tea bags latvia",
    // Latvian
    "tējas filtru maisiņi latvijā", "tējas filtri latvijā", "tējas filtri rīgā",
    "tējas maisiņi latvijā", "filtru maisiņi latvijā", "tējas iepakojums latvijā",
    "tējas filtru maisiņi rīgā",
    // Russian
    "чайные фильтры латвия", "фильтры для чая латвия", "чайные фильтры рига",
    "чайные пакетики латвия", "фильтр-пакеты для чая латвия", "фильтры для чая рига",
  ],
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
