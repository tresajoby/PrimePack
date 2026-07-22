import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.primepack.lv"),
  title: {
    default: "PrimePack — Iepakojuma Piegādātājs Latvijā | Packaging Supplier Latvia",
    template: "%s | PrimePack Latvia",
  },
  description:
    "PrimePack — iepakojuma materiālu piegādātājs Rīgā, Latvijā. Doypack maisiņi, flat bottom maisiņi, pārtikas iepakojums uzņēmumiem Latvijā un Eiropā. Packaging supplier in Riga, Latvia.",
  keywords: [
    "iepakojums Latvija",
    "iepakojuma materiāli",
    "pārtikas iepakojums",
    "iepakojuma piegādātājs Rīga",
    "maisiņi uzņēmumiem",
    "doypack maisiņi",
    "packaging supplier Latvia",
    "packaging Riga",
    "food packaging Latvia",
    "custom packaging Latvia",
    "stand-up pouches Latvia",
    "B2B packaging Latvia",
    "упаковка Латвия",
    "поставщик упаковки Рига",
    "PrimePack",
    "primepack.lv",
  ],
  alternates: {
    canonical: "https://www.primepack.lv",
    languages: {
      "en": "https://www.primepack.lv",
      "lv": "https://www.primepack.lv",
      "ru": "https://www.primepack.lv",
    },
  },
  openGraph: {
    title: "PrimePack — Iepakojuma Piegādātājs Latvijā",
    description:
      "Augstas kvalitātes iepakojuma materiāli uzņēmumiem Latvijā un Eiropā. High-quality packaging solutions for businesses across Latvia and Europe.",
    url: "https://www.primepack.lv",
    siteName: "PrimePack",
    locale: "lv_LV",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PrimePack Latvia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimePack — Packaging Supplier Latvia",
    description: "High-quality packaging materials for businesses in Latvia and Europe.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PrimePack",
  url: "https://www.primepack.lv",
  logo: "https://www.primepack.lv/logo.png",
  image: "https://www.primepack.lv/og-image.png",
  description: "Packaging supplier in Riga, Latvia. Doypack bags, flat bottom bags, side gusset bags, recyclable packaging, tea filter bags for businesses across Latvia and Europe.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Salaspils iela 6 K 4 ap.61",
    addressLocality: "Riga",
    postalCode: "LV-1057",
    addressCountry: "LV",
  },
  telephone: "+37129429945",
  email: "PrimePack.lv@gmail.com",
  areaServed: ["LV", "EE", "LT", "EU"],
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lv">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
