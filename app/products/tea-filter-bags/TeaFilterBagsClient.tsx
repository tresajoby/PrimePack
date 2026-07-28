"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "@/lib/i18n";

const featureIcons = [
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
  "M4 6h16M4 10h16M4 14h16M4 18h16",
  "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
  "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
];

const teaSizes = [
  { id: "size-m", dimensions: "65×80×50 mm", image: "/Tea bag size M.webp" },
  { id: "size-l", dimensions: "85×135×50 mm", image: "/Tea bag size L.webp" },
];

const ACCENT_CLASSES = ["ring-amber-400", "ring-emerald-400"];

export default function TeaFilterBagsPage() {
  const { t } = useT();
  const pp = t.productPages;
  const p = pp.teaFilterBags;

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

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">{p.sizesLabel}</span>
            <h2 className="font-heading text-3xl font-bold text-navy mt-3">{p.chooseSizeH2}</h2>
            <p className="text-[#6B7280] mt-2 text-sm">{p.chooseSizeP}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {teaSizes.map((s, i) => (
              <Link
                key={s.id}
                href={`/products/tea-filter-bags/catalog#${s.id}`}
                className="group flex flex-col items-center w-[140px] sm:w-[160px]"
              >
                <div className={`relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-gold transition-all duration-300 shadow-sm group-hover:shadow-xl bg-white ring-2 ring-transparent group-hover:${ACCENT_CLASSES[i]}`}>
                  <Image
                    src={s.image}
                    alt={p.sizes[s.id].name}
                    fill
                    className="object-contain p-4 transition-all duration-300 group-hover:scale-110"
                    sizes="160px"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-bold text-navy group-hover:text-gold transition-colors leading-tight">{p.sizes[s.id].name}</p>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">{p.sizes[s.id].for}</p>
                  <p className="text-[10px] text-[#9CA3AF] mt-0.5">{s.dimensions}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products/tea-filter-bags/catalog"
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-navy/90 transition-colors"
            >
              {p.viewSizesPricing}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/tea-filter-bags.png" alt={p.h1} fill className="object-contain" />
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
