"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "@/lib/i18n";
import VariantImageSelector from "@/components/VariantImageSelector";
import { recyclableBagsData } from "@/lib/product-data";

const featureIcons = [
  "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
];

export default function RecyclableBagsPage() {
  const { t } = useT();
  const pp = t.productPages;
  const p = pp.recyclableBags;

  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #C9A15A 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {pp.backLink}
          </Link>
          <span className="text-gold text-sm font-semibold uppercase tracking-widest block mb-4">{p.badge}</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">{p.h1}</h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">{p.heroDesc}</p>
        </div>
      </section>

      <VariantImageSelector
        variants={recyclableBagsData.variants}
        productSlug="recyclable-bags"
        productImage="/recyclable-bags.png"
        title="Choose Your Variant"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/recyclable-bags.png" alt={p.h1} fill className="object-contain" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">{p.overviewH2}</h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">{p.overviewP1}</p>
              <p className="text-[#6B7280] leading-relaxed mb-8">{p.overviewP2}</p>
              <div className="flex flex-wrap gap-3">
                {p.applications.map((app) => (
                  <span key={app} className="px-4 py-1.5 bg-gold/10 text-navy text-sm font-medium rounded-full border border-gold/20">{app}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">{pp.whyBadge}</span>
            <h2 className="font-heading text-3xl font-bold text-navy mt-3">{pp.featuresH2}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.features.map((f, i) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={featureIcons[i]} />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{f.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">{pp.specsBadge}</span>
            <h2 className="font-heading text-3xl font-bold text-white mt-3">{pp.specsH2}</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            {p.specs.map((s, i) => (
              <div key={s.label} className={`flex flex-col sm:flex-row sm:items-center gap-2 px-8 py-5 ${i < p.specs.length - 1 ? "border-b border-white/10" : ""}`}>
                <span className="text-gold font-semibold text-sm w-40 flex-shrink-0">{s.label}</span>
                <span className="text-white/80 text-sm">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy mb-4">{p.ctaH2}</h2>
          <p className="text-[#6B7280] mb-8 leading-relaxed">{p.ctaP}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base px-8 py-4">{pp.requestQuote}</Link>
            <Link href="/products" className="btn-primary text-base px-8 py-4">{pp.viewAll}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
