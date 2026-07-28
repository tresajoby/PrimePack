import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

const SLUG_META: Record<string, { title: string; description: string; name: string }> = {
  "flat-bottom-bag": {
    name: "Flat Bottom Bag",
    title: "Flat Bottom Bag Catalog & Pricing — Configure Your Order | PrimePack",
    description: "Configure flat bottom bags by weight, colour, zipper & valve. Volume pricing from 500–5,000+ pcs. B2B packaging supplier Latvia. Get a price instantly.",
  },
  "doypack-bag": {
    name: "Doypack Stand-Up Pouch",
    title: "Doypack Bag Catalog & Pricing — Configure Your Order | PrimePack",
    description: "Configure doypack stand-up pouches by weight, colour, zipper & valve. Volume pricing from 500–5,000+ pcs. B2B packaging supplier Latvia. Get a price instantly.",
  },
  "recyclable-bags": {
    name: "Recyclable Bags",
    title: "Recyclable Bags Catalog & Pricing — Configure Your Order | PrimePack",
    description: "Configure mono-material recyclable bags by weight, colour & zipper. Volume pricing from 500–5,000+ pcs. Eco-friendly packaging Latvia. Get a price instantly.",
  },
  "side-gusset-bag": {
    name: "Side Gusset Bag",
    title: "Side Gusset Bag Catalog & Pricing — Configure Your Order | PrimePack",
    description: "Configure side gusset bags by weight, colour, zipper & valve. Volume pricing from 500–5,000+ pcs. B2B packaging supplier Latvia. Get a price instantly.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = SLUG_META[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: `${meta.name} Catalog | PrimePack Latvia`,
      description: meta.description,
      url: `https://www.primepack.lv/products/${slug}/catalog`,
      images: [{ url: "/og-image.png" }],
    },
    alternates: { canonical: `https://www.primepack.lv/products/${slug}/catalog` },
  };
}

export function generateStaticParams() {
  return [
    { slug: "flat-bottom-bag" },
    { slug: "doypack-bag" },
    { slug: "recyclable-bags" },
    { slug: "side-gusset-bag" },
  ];
}

export default async function CatalogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = SLUG_META[slug];
  const jsonLd = meta
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.primepack.lv" },
          { "@type": "ListItem", position: 2, name: "Products", item: "https://www.primepack.lv/products" },
          { "@type": "ListItem", position: 3, name: meta.name, item: `https://www.primepack.lv/products/${slug}` },
          { "@type": "ListItem", position: 4, name: "Catalog", item: `https://www.primepack.lv/products/${slug}/catalog` },
        ],
      }
    : null;

  return (
    <>
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      <CatalogClient slug={slug} />
    </>
  );
}
