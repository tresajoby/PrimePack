"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/i18n";

const productImages = [
  "https://images.unsplash.com/photo-1607435097405-db78e1b3ba6c?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
  "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?w=800&q=80",
];

const productIds = [
  "paper-bags", "plastic-bags", "stand-up-pouches", "packaging-films",
  "food-packaging", "industrial-packaging", "custom-packaging", "protective-packaging",
];

export default function ProductsPage() {
  const { t } = useT();
  const p = t.productsPage;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #C9A15A 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">{p.heroBadge}</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-6">{p.heroH1}</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">{p.heroSubtitle}</p>
          <div className="mt-8">
            <Link href="/contact" className="btn-gold text-base px-8 py-4">{p.heroCta}</Link>
          </div>
        </div>
      </section>

      {/* Bar */}
      <section className="bg-gray-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm">{p.barP}</p>
          <div className="flex gap-3">
            <Link href="/contact" className="btn-primary text-sm">{p.barBtn}</Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {p.categories.map((cat, i) => (
              <div key={productIds[i]} className="card overflow-hidden group">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden">
                    <Image
                      src={productImages[i]}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-7 flex flex-col justify-between">
                    <div>
                      <h2 className="font-heading font-bold text-navy text-xl mb-3">{cat.title}</h2>
                      <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{cat.desc}</p>
                      <ul className="space-y-1.5">
                        {cat.specs.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-xs text-[#1A1A1A]">
                            <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href="/contact" className="btn-primary text-xs mt-6 self-start">{p.requestQuote}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">{p.ctaH2}</h2>
          <p className="text-white/70 mb-8 text-lg leading-relaxed">{p.ctaP}</p>
          <Link href="/contact" className="btn-gold text-base px-8 py-4">{p.ctaBtn}</Link>
        </div>
      </section>
    </>
  );
}
