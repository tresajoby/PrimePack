"use client";

import { useState } from "react";
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

const sizes = [
  {
    id: "size-m",
    label: "Size M",
    subtitle: "For a Cup",
    dimensions: "65×80×50 mm",
    image: "/tea-filter-bags.png",
    price1_10: 95,
    priceOver10: 85.5,
  },
  {
    id: "size-l",
    label: "Size L",
    subtitle: "For a Teapot",
    dimensions: "85×135×50 mm",
    image: "/tea-filter-bags.png",
    price1_10: 150,
    priceOver10: 135,
  },
];

const ACCENT_CLASSES = ["ring-amber-400", "ring-emerald-400"];

function SizeSelector({ selectedSize, onSelect }: { selectedSize: number; onSelect: (i: number) => void }) {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Sizes</span>
          <h2 className="font-heading text-3xl font-bold text-navy mt-3">Choose Your Size</h2>
          <p className="text-[#6B7280] mt-2 text-sm">Select a size to see pricing and configure your order</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {sizes.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                onSelect(i);
                document.getElementById("tea-pricing")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex flex-col items-center w-[140px] sm:w-[160px]"
            >
              <div
                className={`relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full overflow-hidden border-4 transition-all duration-300 shadow-sm group-hover:shadow-xl ring-2 ring-transparent ${
                  selectedSize === i
                    ? `border-gold ${ACCENT_CLASSES[i]} shadow-lg`
                    : "border-gray-100 group-hover:border-gold"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.label}
                  fill
                  className="object-contain p-4 transition-all duration-300 group-hover:scale-110"
                  sizes="160px"
                />
              </div>
              <div className="mt-3 text-center">
                <p className={`text-sm font-bold transition-colors leading-tight ${selectedSize === i ? "text-gold" : "text-navy group-hover:text-gold"}`}>
                  {s.label}
                </p>
                <p className="text-[11px] text-[#6B7280] mt-0.5">{s.subtitle}</p>
                <p className="text-[10px] text-[#9CA3AF] mt-0.5">{s.dimensions}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => document.getElementById("tea-pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-navy/90 transition-colors"
          >
            View Sizes &amp; Pricing
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function TeaPriceCalc({ selectedSize, onSelect }: { selectedSize: number; onSelect: (i: number) => void }) {
  const [boxes, setBoxes] = useState("");

  const size = sizes[selectedSize];
  const boxCount = parseInt(boxes) || 0;
  const pricePerBox = boxCount > 10 ? size.priceOver10 : size.price1_10;
  const total = boxCount > 0 ? (pricePerBox * boxCount).toFixed(2) : null;
  const totalPcs = boxCount > 0 ? (boxCount * 10000).toLocaleString() : null;

  return (
    <section id="tea-pricing" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="font-heading text-3xl font-bold text-navy mt-3">Tea Filter Bag Sizes &amp; Pricing</h2>
          <p className="text-[#6B7280] mt-3 text-sm">Material: Filter paper 18 · 1 box = 10,000 pcs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {sizes.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { onSelect(i); setBoxes(""); }}
              className={`text-left p-6 rounded-2xl border-2 transition-all ${
                selectedSize === i
                  ? "border-gold bg-gold/5 shadow-md"
                  : "border-gray-200 bg-white hover:border-gold/50"
              }`}
            >
              <h3 className="font-heading font-bold text-navy mb-1">{s.label} — {s.subtitle}</h3>
              <p className="text-xs text-[#6B7280] mb-4">{s.dimensions}</p>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">1–10 boxes</span>
                  <span className="font-bold text-navy">€{s.price1_10} <span className="font-normal text-[#6B7280] text-xs">/ box</span></span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">&gt;10 boxes</span>
                  <span className="font-bold text-gold">€{s.priceOver10} <span className="font-normal text-[#6B7280] text-xs">/ box</span></span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-navy rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-gold text-sm font-bold uppercase tracking-widest mb-4">Estimate Your Order</h4>
            <p className="text-white/70 text-sm mb-4">Selected: <span className="text-white font-medium">{size.label} — {size.subtitle}</span></p>
            <label className="text-white/50 text-xs block mb-1.5">Number of boxes</label>
            <input
              type="number"
              min="1"
              value={boxes}
              onChange={(e) => setBoxes(e.target.value)}
              placeholder="e.g. 5"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-gold"
            />
            {boxCount > 0 && (
              <p className="text-white/50 text-xs mt-2">
                = {totalPcs} pcs · €{pricePerBox}/box
              </p>
            )}
          </div>

          <div className="text-center">
            {total ? (
              <>
                <p className="text-white/50 text-xs mb-1">Estimated total</p>
                <p className="text-gold font-bold text-4xl mb-1">€{total}</p>
                <p className="text-white/40 text-xs">{totalPcs} pieces</p>
              </>
            ) : (
              <p className="text-white/30 text-sm">Enter number of boxes to see total</p>
            )}
            <Link
              href="/contact"
              className="mt-6 block w-full sm:w-auto sm:inline-block text-center bg-gold text-navy font-bold text-sm px-8 py-3 rounded-xl hover:bg-gold/90 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
        <p className="text-[#6B7280] text-xs mt-4 text-center">* All prices in EUR. Branding (screen printing / foil stamping) priced separately on request.</p>
      </div>
    </section>
  );
}

export default function TeaFilterBagsPage() {
  const { t } = useT();
  const pp = t.productPages;
  const p = pp.teaFilterBags;
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <>
      {/* Hero */}
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

      {/* Size selector */}
      <SizeSelector selectedSize={selectedSize} onSelect={setSelectedSize} />

      {/* Pricing */}
      <TeaPriceCalc selectedSize={selectedSize} onSelect={setSelectedSize} />

      {/* Overview */}
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

      {/* Features */}
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

      {/* Specs */}
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

      {/* CTA */}
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
