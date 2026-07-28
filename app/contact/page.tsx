import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact PrimePack — Get a Packaging Quote | Riga, Latvia",
  description: "Contact PrimePack for B2B packaging quotes, product enquiries & custom solutions. Call +371 29 429 945 or email. Based in Riga, Latvia. Same-day quote response.",
  openGraph: {
    title: "Contact PrimePack | Get a Quote | Riga, Latvia",
    description: "Contact PrimePack for B2B packaging quotes. Call +371 29 429 945 or email. Same-day quote response.",
    url: "https://www.primepack.lv/contact",
    images: [{ url: "/og-image.png" }],
  },
  alternates: { canonical: "https://www.primepack.lv/contact" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.primepack.lv" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.primepack.lv/contact" },
      ],
    },
    {
      "@type": "ContactPage",
      name: "Contact PrimePack",
      url: "https://www.primepack.lv/contact",
      mainEntity: {
        "@type": "Organization",
        name: "PrimePack",
        telephone: "+37129429945",
        email: "PrimePack.lv@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Salaspils iela 6 K 4 ap.61",
          addressLocality: "Riga",
          postalCode: "LV-1057",
          addressCountry: "LV",
        },
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ContactClient />
    </>
  );
}
