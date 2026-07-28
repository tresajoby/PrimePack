import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Packaging Services — Custom Solutions, Supply & Consultation | PrimePack",
  description: "PrimePack offers custom packaging development, supply management, quality control & logistics consultation for businesses in Latvia and Europe. Get started today.",
  openGraph: {
    title: "Packaging Services | PrimePack Latvia",
    description: "Custom packaging development, supply management, quality control & logistics consultation. B2B packaging partner Latvia.",
    url: "https://www.primepack.lv/services",
    images: [{ url: "/og-image.png" }],
  },
  alternates: { canonical: "https://www.primepack.lv/services" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.primepack.lv" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.primepack.lv/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicesClient />
    </>
  );
}
