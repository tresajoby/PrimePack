import type { Metadata } from "next";
import RecyclableBagsClient from "./RecyclableBagsClient";

export const metadata: Metadata = {
  title: "Recyclable Packaging Bags — Eco-Friendly Mono-Material",
  description: "Sustainable mono-material LDPE & BOPP recyclable bags for eco-conscious brands. Food-safe, EU compliant, 24+ colours. B2B packaging supplier Latvia. Min. 500 pcs.",
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
  keywords: [
    // English — simple + long-tail
    "recyclable bags latvia", "recyclable packaging latvia", "eco bags latvia", "eco packaging latvia",
    "sustainable packaging latvia", "green packaging latvia", "recyclable bags riga",
    "recyclable packaging supplier latvia", "eco-friendly bags latvia",
    "mono-material bags latvia", "LDPE bags latvia", "BOPP bags latvia",
    // Latvian
    "pārstrādājami maisi latvijā", "pārstrādājami maisi", "eko iepakojums latvijā",
    "eko maisiņi latvijā", "zaļais iepakojums latvijā", "ilgtspējīgs iepakojums latvijā",
    "videi draudzīgs iepakojums latvija", "pārstrādājams iepakojums latvija",
    // Russian
    "перерабатываемые пакеты латвия", "экологичная упаковка латвия", "эко упаковка латвия",
    "перерабатываемая упаковка рига", "эко пакеты латвия", "зеленая упаковка латвия",
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.primepack.lv" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.primepack.lv/products" },
    { "@type": "ListItem", position: 3, name: "Recyclable Bags", item: "https://www.primepack.lv/products/recyclable-bags" },
  ],
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Recyclable Packaging Bags",
  url: "https://www.primepack.lv/products/recyclable-bags",
  description: "Sustainable mono-material LDPE & BOPP recyclable bags for eco-conscious brands. Food-safe, EU compliant. Min. 500 pcs.",
  image: "https://www.primepack.lv/recyclable-bags.png",
  brand: { "@type": "Brand", name: "PrimePack" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "137.50",
    highPrice: "269",
    offerCount: 4,
    availability: "https://schema.org/InStock",
    url: "https://www.primepack.lv/products/recyclable-bags",
    seller: { "@type": "Organization", name: "PrimePack" },
  },
};

export default function RecyclableBagsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <RecyclableBagsClient />
    </>
  );
}
