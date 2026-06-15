"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "@/lib/i18n";

const productLinks = [
  "Paper Bags", "Plastic Bags", "Stand-Up Pouches", "Packaging Films",
  "Food Packaging", "Industrial Packaging", "Custom Packaging", "Protective Packaging",
];

const quickLinkHrefs = ["/", "/products", "/services", "/about", "/contact"];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Returns Policy", href: "/returns" },
];

export default function Footer() {
  const { t } = useT();

  const quickLinks = [
    t.nav.home, t.nav.products, t.nav.services, t.nav.about, t.nav.contact,
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="PrimePack" width={160} height={50} className="h-12 w-auto object-contain mb-4" />
            <p className="text-white/70 text-sm leading-relaxed mt-3">{t.footer.tagline}</p>
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              Salaspils iela 6 K 4 ap.61<br />Riga LV-1057, Latvia
            </p>
            <div className="mt-4 space-y-2">
              <a href="tel:+37129429945" className="flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +371 29 429 945
              </a>
              <a href="mailto:PrimePack.lv@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                PrimePack.lv@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((label, i) => (
                <li key={quickLinkHrefs[i]}>
                  <Link href={quickLinkHrefs[i]} className="text-white/70 hover:text-gold text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">{t.footer.productsTitle}</h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <Link href="/products" className="text-white/70 hover:text-gold text-sm transition-colors">{product}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">{t.footer.hoursTitle}</h4>
            <div className="text-white/70 text-sm space-y-1">
              <p>{t.footer.weekdays}</p>
              <p className="text-white font-medium">{t.footer.weekdayHours}</p>
              <p className="mt-3">{t.footer.weekend}</p>
              <p className="text-white/50">{t.footer.weekendStatus}</p>
            </div>
            <div className="mt-8">
              <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-widest">{t.footer.stayUpdated}</h4>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder={t.footer.emailPlaceholder}
                  className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <button type="submit" className="btn-gold justify-center text-sm">{t.footer.subscribe}</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} PrimePack. {t.footer.copyright}</p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/50 hover:text-gold text-xs transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
