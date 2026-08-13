import type { Metadata } from "next";
import FlatBottomBagClient from "./FlatBottomBagClient";

export const metadata: Metadata = {
  title: "Flat Bottom Bag — Stand-Up Packaging Supplier Latvia",
  description: "Premium flat bottom bags for coffee, food & retail. Custom sizes 250g–5000g, 24+ colours, zipper & valve options. B2B packaging supplier in Latvia. Min. 500 pcs.",
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
  keywords: ["flat bottom bag Latvia", "flat bottom maisiņi Latvija", "flat bottom pouch supplier", "stand-up bag Latvia", "coffee bag Latvia", "kafijas maisiņi Latvija", "packaging bags Latvia", "custom printed bags Latvia", "zipper bag Latvia", "food packaging Latvia", "B2B packaging Latvia"],
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
