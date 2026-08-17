import type { Metadata } from "next";
import DoypbackBagClient from "./DoypbackBagClient";

export const metadata: Metadata = {
  title: "Doypack Stand-Up Pouch — Packaging Supplier Latvia",
  description: "Classic doypack stand-up pouches for food, beverages & personal care. Custom print, zipper & valve options, 100g–5000g. B2B packaging supplier Latvia. Min. 500 pcs.",
  openGraph: {
    title: "Doypack Stand-Up Pouch | PrimePack Latvia",
    description: "Classic doypack stand-up pouches with custom print, zipper & valve options. B2B packaging supplier Latvia.",
    url: "https://www.primepack.lv/products/doypack-bag",
    images: [{ url: "/og-image.png" }],
  },
  alternates: {
    canonical: "https://www.primepack.lv/products/doypack-bag",
    languages: {
      "x-default": "https://www.primepack.lv/products/doypack-bag",
      "en": "https://www.primepack.lv/products/doypack-bag",
      "lv": "https://www.primepack.lv/products/doypack-bag",
      "ru": "https://www.primepack.lv/products/doypack-bag",
    },
  },
  keywords: [
    // English — simple + long-tail
    "doypack latvia", "doypack bag latvia", "doypack bags latvia", "doypack riga",
    "doypack packaging latvia", "doypack supplier latvia", "doypack pouch latvia",
    "stand up pouch latvia", "stand-up pouch latvia", "stand up pouch supplier latvia",
    "food pouch latvia", "doypack Baltic", "flexible packaging latvia", "B2B packaging riga",
    // Latvian
    "doypack latvija", "doypack maisiņi latvijā", "doypack maisiņi rīgā",
    "doypack maisiņi", "doypack iepakojums latvijā", "doypack piegādātājs latvijā",
    "stand-up maisiņi latvija", "pārtikas iepakojums latvija",
    // Russian
    "дойпак латвия", "дойпак пакеты латвия", "дойпак рига",
    "дойпак поставщик латвия", "дойпак упаковка латвия",
    "стоячий пакет латвия", "упаковка дойпак латвия",
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.primepack.lv" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.primepack.lv/products" },
    { "@type": "ListItem", position: 3, name: "Doypack Bag", item: "https://www.primepack.lv/products/doypack-bag" },
  ],
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Doypack Stand-Up Pouch",
  url: "https://www.primepack.lv/products/doypack-bag",
  description: "Classic doypack stand-up pouches for food, beverages & personal care. Custom print, zipper & valve options. B2B packaging supplier Latvia.",
  image: "https://www.primepack.lv/doypack-bag.png",
  brand: { "@type": "Brand", name: "PrimePack" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "44.50",
    highPrice: "288",
    offerCount: 4,
    availability: "https://schema.org/InStock",
    url: "https://www.primepack.lv/products/doypack-bag",
    seller: { "@type": "Organization", name: "PrimePack" },
  },
};

export default function DoypbackBagPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <DoypbackBagClient />
    </>
  );
}
