import CatalogClient from "./CatalogClient";

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
  return <CatalogClient slug={slug} />;
}
