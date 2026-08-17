import type { Metadata } from "next";
import FlatBottomBagClient from "./FlatBottomBagClient";

export const metadata: Metadata = {
  title: "Custom Printed Flat Bottom Bag Latvia — Coffee Packaging",
  description: "Custom printed flat bottom bags with logo & full-colour design. Coffee, food & retail packaging. 250g–5000g, 24+ colours, zipper & valve options. B2B supplier Latvia. Min. 500 pcs.",
  openGraph: {
    title: "Flat Bottom Bag | PrimePack Latvia",
    description: "Premium flat bottom bags for coffee, food & retail. Custom print, zipper & valve options. B2B packaging supplier Latvia.",
    url: "https://www.primepack.lv/products/flat-bottom-bag",
    images: [{ url: "/og-image.png" }],
  },
  alternates: {
    canonical: "https://www.primepack.lv/products/flat-bottom-bag",
    languages: {
      "x-default": "https://www.primepack.lv/products/flat-bottom-bag",
      "en": "https://www.primepack.lv/products/flat-bottom-bag",
      "lv": "https://www.primepack.lv/products/flat-bottom-bag",
      "ru": "https://www.primepack.lv/products/flat-bottom-bag",
    },
  },
  keywords: [
    // English — simple + long-tail + custom print
    "flat bottom bag latvia", "flat bottom latvia", "flat bottom bags latvia", "flat bottom riga",
    "custom printed flat bottom bag latvia", "custom print flat bottom latvia",
    "flat bottom bag with logo latvia", "branded flat bottom bag latvia",
    "flat bottom pouch latvia", "flat bottom packaging latvia", "flat bottom supplier latvia",
    "flat bottom coffee bag latvia", "coffee bag latvia", "coffee bags latvia",
    "coffee packaging latvia", "kraft bag latvia", "B2B packaging latvia",
    // Latvian
    "flat bottom latvija", "flat bottom maisiņi latvijā", "flat bottom maisiņi rīgā",
    "flat bottom maisiņi", "flat bottom ar apdruku latvijā", "flat bottom ar logo latvijā",
    "apdrukāti flat bottom maisiņi", "flat bottom kafijas maisiņi latvijā",
    "kafijas maisiņi latvijā", "kafijas iepakojums latvija",
    // Russian
    "flat bottom латвия", "flat bottom пакеты латвия", "flat bottom рига",
    "flat bottom пакеты с печатью латвия", "пакеты с плоским дном латвия",
    "пакеты с плоским дном с логотипом латвия",
    "кофейные пакеты латвия", "упаковка для кофе латвия",
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.primepack.lv" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.primepack.lv/products" },
    { "@type": "ListItem", position: 3, name: "Flat Bottom Bag", item: "https://www.primepack.lv/products/flat-bottom-bag" },
  ],
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Flat Bottom Bag",
  url: "https://www.primepack.lv/products/flat-bottom-bag",
  description: "Premium flat bottom stand-up bags for coffee, food & retail packaging. Custom print, 24+ colours, zipper & valve options. Min. 500 pcs.",
  image: "https://www.primepack.lv/flat-bottom-bag.png",
  brand: { "@type": "Brand", name: "PrimePack" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "115",
    highPrice: "267",
    offerCount: 4,
    availability: "https://schema.org/InStock",
    url: "https://www.primepack.lv/products/flat-bottom-bag",
    seller: { "@type": "Organization", name: "PrimePack" },
  },
};

export default function FlatBottomBagPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <FlatBottomBagClient />
    </>
  );
}
