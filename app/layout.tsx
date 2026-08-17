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
    // Latvian — simple + long-tail
    "iepakojums Latvija", "iepakojums rīgā", "iepakojuma maisi Latvija",
    "iepakojuma materiāli Latvija", "iepakojuma piegādātājs Rīga",
    "iepakojuma uzņēmums Rīgā", "pārtikas iepakojums Latvija",
    "kafijas iepakojums Latvija", "pielāgots iepakojums Latvijā",
    "iepakojuma vairumtirdzniecība Latvija",
    "doypack latvija", "doypack maisiņi latvijā", "doypack maisiņi rīgā",
    "flat bottom latvija", "flat bottom maisiņi latvijā", "flat bottom maisiņi rīgā",
    "sānu ieloces latvija", "sānu ieloces maisi latvijā",
    "pārstrādājami maisi latvijā", "eko iepakojums latvijā",
    "tējas filtri latvijā", "tējas filtru maisiņi latvijā",
    "maisiņi ar rāvējslēdzēju Latvija", "maisiņi uzņēmumiem Latvija",
    // English — simple + long-tail
    "packaging latvia", "packaging supplier latvia", "packaging riga",
    "packaging bags latvia", "packaging products latvia", "packaging company latvia",
    "packaging company riga", "packaging materials latvia",
    "flexible packaging latvia", "B2B packaging latvia",
    "wholesale packaging latvia", "bulk packaging latvia",
    "custom packaging latvia", "custom printed bags latvia",
    "food packaging latvia", "food safe bags latvia",
    "doypack latvia", "doypack bag latvia", "doypack riga",
    "flat bottom latvia", "flat bottom bag latvia", "flat bottom riga",
    "side gusset bag latvia", "gusset bag latvia",
    "recyclable bags latvia", "recyclable packaging latvia", "eco bags latvia",
    "tea filter bags latvia", "tea filter latvia",
    "coffee packaging latvia", "coffee bags latvia", "coffee bags supplier latvia",
    "stand-up pouch latvia", "stand up pouch latvia",
    "zipper bags latvia", "kraft bags latvia",
    "packaging supplier Baltic", "packaging supplier riga",
    "B2B packaging riga", "packaging Baltic states",
    // Russian — simple + long-tail
    "упаковка латвия", "упаковка рига", "упаковочные пакеты латвия",
    "поставщик упаковки рига", "упаковка для бизнеса рига",
    "пищевая упаковка латвия", "оптовая упаковка латвия",
    "дойпак латвия", "дойпак пакеты латвия", "дойпак рига",
    "flat bottom латвия", "flat bottom пакеты латвия", "пакеты с плоским дном латвия",
    "пакеты с боковой складкой латвия", "кофейные пакеты латвия",
    "перерабатываемые пакеты латвия", "эко упаковка латвия",
    "чайные фильтры латвия", "фильтры для чая латвия",
    // Brand
    "PrimePack", "PrimePack Latvia", "primepack.lv",
  ],
  alternates: {
    canonical: "https://www.primepack.lv",
    languages: {
      "x-default": "https://www.primepack.lv",
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
    images: [{ url: "/og-image.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "MbX9tuuZXJ0YlSafzxXTzV9wwAHLkmqm3UHTcScyoys",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-1.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo-1.png",
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PrimePack",
  url: "https://www.primepack.lv",
  description: "B2B packaging supplier in Riga, Latvia. Flat bottom bags, doypack pouches, recyclable bags, side gusset bags, tea filter bags.",
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
  vatID: "LV40203753579",
  legalName: 'SIA "PrimePack"',
  inLanguage: ["en", "lv", "ru"],
  availableLanguage: [
    { "@type": "Language", name: "English" },
    { "@type": "Language", name: "Latvian" },
    { "@type": "Language", name: "Russian" },
  ],
  areaServed: [
    { "@type": "Country", name: "Latvia" },
    { "@type": "Country", name: "Estonia" },
    { "@type": "Country", name: "Lithuania" },
    { "@type": "AdministrativeArea", name: "European Union" },
  ],
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Packaging Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { name: "Flat Bottom Bag", url: "https://www.primepack.lv/products/flat-bottom-bag", description: "Premium flat bottom stand-up bags for coffee, food & retail. Custom print, 24+ colours, zipper & valve options." } },
      { "@type": "Offer", itemOffered: { name: "Doypack Stand-Up Pouch", url: "https://www.primepack.lv/products/doypack-bag", description: "Classic doypack stand-up pouches for food, beverages & personal care. Custom print, zipper & valve options." } },
      { "@type": "Offer", itemOffered: { name: "Recyclable Packaging Bags", url: "https://www.primepack.lv/products/recyclable-bags", description: "Sustainable mono-material LDPE & BOPP recyclable bags. Food-safe, EU compliant." } },
      { "@type": "Offer", itemOffered: { name: "Side Gusset Bag", url: "https://www.primepack.lv/products/side-gusset-bag", description: "Premium side gusset bags for coffee, tea & dry goods. Expanding gussets for maximum capacity." } },
      { "@type": "Offer", itemOffered: { name: "Tea Filter Bags", url: "https://www.primepack.lv/products/tea-filter-bags", description: "Food-safe tea filter bags, Size M and Size L. 10,000 pcs per box." } },
    ],
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
