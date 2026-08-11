import type { Metadata } from "next";
import SideGussetBagClient from "./SideGussetBagClient";

export const metadata: Metadata = {
  title: "Side Gusset Bag — Coffee & Tea Packaging Latvia | PrimePack",
  description: "Premium side gusset bags for coffee, tea & dry goods. Expanding gussets for maximum capacity, custom print, 250g–5000g. B2B packaging supplier Latvia. Min. 500 pcs.",
  openGraph: {
    title: "Side Gusset Bag | PrimePack Latvia",
    description: "Premium side gusset bags for coffee & tea. Expanding gussets, custom print. B2B packaging supplier Latvia.",
    url: "https://www.primepack.lv/products/side-gusset-bag",
    images: [{ url: "/og-image.png" }],
  },
  alternates: {
    canonical: "https://www.primepack.lv/products/side-gusset-bag",
    languages: {
      "x-default": "https://www.primepack.lv/products/side-gusset-bag",
      "en": "https://www.primepack.lv/products/side-gusset-bag",
      "lv": "https://www.primepack.lv/products/side-gusset-bag",
      "ru": "https://www.primepack.lv/products/side-gusset-bag",
    },
  },
  keywords: ["side gusset bag Latvia", "sānu ieloces maisi Latvija", "coffee packaging Latvia", "coffee bag supplier Latvia", "tea packaging Latvia", "dry goods bag Latvia", "kraft bag Latvia", "pillow bag Latvia", "tin tie bag Latvia", "packaging bags Latvia", "B2B packaging supplier Latvia"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.primepack.lv" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://www.primepack.lv/products" },
        { "@type": "ListItem", position: 3, name: "Side Gusset Bag", item: "https://www.primepack.lv/products/side-gusset-bag" },
      ],
    },
    {
      "@type": "Product",
      name: "Side Gusset Bag",
      description: "Premium side gusset bags for coffee, tea & dry goods. Expanding gussets for maximum capacity, custom print. Min. 500 pcs.",
      image: "https://www.primepack.lv/side-gusset-bag.png",
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

export default function SideGussetBagPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SideGussetBagClient />
    </>
  );
}
