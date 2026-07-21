"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const sizes = [
  {
    id: "size-m",
    name: "Size M — For a Cup",
    subtitle: "65×80×50 mm · Filter paper 18",
    image: "/tea-filter-bags.png",
    price1_10: 95,
    priceOver10: 85.5,
  },
  {
    id: "size-l",
    name: "Size L — For a Teapot",
    subtitle: "85×135×50 mm · Filter paper 18",
    image: "/tea-filter-bags.png",
    price1_10: 150,
    priceOver10: 135,
  },
];

function TeaSizeCard({ size, open, onToggle }: {
  size: typeof sizes[number];
  open: boolean;
  onToggle: () => void;
}) {
  const [boxes, setBoxes] = useState("");
  const boxCount = parseInt(boxes) || 0;
  const pricePerBox = boxCount > 10 ? size.priceOver10 : size.price1_10;
  const total = boxCount > 0 ? (pricePerBox * boxCount).toFixed(2) : null;
  const totalPcs = boxCount > 0 ? (boxCount * 10000).toLocaleString() : null;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col group hover:shadow-lg transition-shadow duration-200">
      {/* Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={size.image}
          alt={size.name}
          fill
          className="object-contain p-8 transition-all duration-300 group-hover:scale-105"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
        />
      </div>

      {/* Card info */}
      <div className="p-5 flex flex-col">
        <p className="text-navy font-bold text-[15px] leading-snug mb-1">{size.name}</p>
        <p className="text-[#6B7280] text-xs mb-3">{size.subtitle}</p>

        {/* Price range */}
        <div className="mb-4">
          <p className="text-navy text-sm">
            <span className="font-bold">€{size.priceOver10}</span>
            {" – "}
            <span className="font-bold">€{size.price1_10}</span>
            <span className="text-[#6B7280] text-xs ml-1">/ box</span>
          </p>
          <p className="text-[10px] text-[#6B7280] mt-0.5">1 box = 10,000 pcs · Branding available</p>
        </div>

        {/* Toggle button */}
        <button
          onClick={onToggle}
          className={`w-full text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 ${
            open
              ? "bg-navy text-white"
              : "bg-navy/5 text-navy hover:bg-gold hover:text-navy border border-navy/10 hover:border-gold"
          }`}
        >
          {open ? "Hide Pricing" : "Configure & Price →"}
        </button>

        {/* Configurator */}
        {open && (
          <div className="mt-4 space-y-4 border-t border-gray-100 pt-4">
            {/* Quantity tiers */}
            <div>
              <p className="text-[11px] font-bold text-navy uppercase tracking-widest mb-2">Box Quantity</p>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center bg-gray-50 rounded-xl px-3 py-2 text-xs">
                  <span className="text-[#6B7280]">1 – 10 boxes</span>
                  <span className="font-bold text-navy">€{size.price1_10} / box</span>
                </div>
                <div className="flex justify-between items-center bg-gold/5 border border-gold/20 rounded-xl px-3 py-2 text-xs">
                  <span className="text-[#6B7280]">&gt; 10 boxes</span>
                  <span className="font-bold text-gold">€{size.priceOver10} / box</span>
                </div>
              </div>
            </div>

            {/* Order estimator */}
            <div className="bg-navy rounded-2xl p-4">
              <p className="text-white/60 text-[11px] uppercase tracking-widest mb-3">Estimate Your Order</p>
              <label className="text-white/50 text-xs block mb-1.5">Number of boxes</label>
              <input
                type="number"
                min="1"
                value={boxes}
                onChange={(e) => setBoxes(e.target.value)}
                placeholder="e.g. 5"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold mb-2"
              />
              {boxCount > 0 && (
                <p className="text-white/50 text-xs mb-2">= {totalPcs} pcs · €{pricePerBox}/box</p>
              )}
              {total && (
                <div className="text-center py-2 mb-2">
                  <span className="text-white/50 text-[10px] block">Estimated total</span>
                  <p className="text-gold font-bold text-lg">€{total}</p>
                </div>
              )}
              <Link
                href="/contact"
                className="block w-full text-center font-bold text-sm py-2.5 rounded-xl bg-gold text-navy hover:bg-gold/90 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
            <p className="text-[10px] text-[#6B7280]">* All prices in EUR. Branding priced separately on request.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TeaCatalogPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-14 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #C9A15A 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products/tea-filter-bags" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Tea Filter Bags
          </Link>
          <span className="text-gold text-sm font-semibold uppercase tracking-widest block mb-3">Full Catalog</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">Tea Filter Bags</h1>
          <p className="text-white/60 text-base">All sizes · select quantity and configure your order</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {sizes.map((s, idx) => (
              <TeaSizeCard
                key={s.id}
                size={s}
                open={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
