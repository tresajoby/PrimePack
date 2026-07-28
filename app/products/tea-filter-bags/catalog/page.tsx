"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart";
import { useT } from "@/lib/i18n";

const sizes = [
  {
    id: "size-m",
    image: "/Tea bag size M.webp",
    dimensions: "65×80×50 mm",
    price1_10: 95,
    priceOver10: 85.5,
  },
  {
    id: "size-l",
    image: "/Tea bag size L.webp",
    dimensions: "85×135×50 mm",
    price1_10: 150,
    priceOver10: 135,
  },
];

function TeaSizeCard({ size, open, onToggle }: {
  size: typeof sizes[number];
  open: boolean;
  onToggle: () => void;
}) {
  const { addItem } = useCart();
  const router = useRouter();
  const { t } = useT();
  const p = t.productPages.teaFilterBags;
  const c = t.catalog;
  const [boxes, setBoxes] = useState("");
  const [added, setAdded] = useState(false);

  const boxCount = parseInt(boxes) || 0;
  const activeTier = boxCount > 10 ? 1 : 0;
  const pricePerBox = activeTier === 1 ? size.priceOver10 : size.price1_10;
  const total = boxCount > 0 ? (pricePerBox * boxCount).toFixed(2) : null;
  const totalPcs = boxCount > 0 ? (boxCount * 10000).toLocaleString() : null;

  const sizeData = p.sizes[size.id];
  const sizeName = `${sizeData.name} — ${sizeData.for}`;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col group hover:shadow-lg transition-shadow duration-200">
      {/* Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={size.image}
          alt={sizeName}
          fill
          className="object-contain p-8 transition-all duration-300 group-hover:scale-105"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
        />
      </div>

      {/* Card info */}
      <div className="p-5 flex flex-col">
        <p className="text-navy font-bold text-[15px] leading-snug mb-1">{sizeName}</p>
        <p className="text-[#6B7280] text-xs mb-3">{size.dimensions} · Filter paper 18</p>

        {/* Price range */}
        <div className="mb-4">
          <p className="text-navy text-sm">
            <span className="font-bold">€{size.priceOver10}</span>
            {" – "}
            <span className="font-bold">€{size.price1_10}</span>
            <span className="text-[#6B7280] text-xs ml-1">{p.perBox}</span>
          </p>
          <p className="text-[10px] text-[#6B7280] mt-0.5">{p.boxNote}</p>
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
          {open ? c.hideConfigurator : c.configurePrice}
        </button>

        {/* Configurator */}
        {open && (
          <div className="mt-4 space-y-4 border-t border-gray-100 pt-4">
            {/* Quantity tiers */}
            <div>
              <p className="text-[11px] font-bold text-navy uppercase tracking-widest mb-2">{p.boxQtyLabel}</p>
              <div className="space-y-1.5">
                {[
                  { label: p.tier1to10, price: size.price1_10, tier: 0 },
                  { label: p.tierOver10, price: size.priceOver10, tier: 1 },
                ].map(({ label, price, tier }) => (
                  <div
                    key={tier}
                    className={`flex justify-between items-center rounded-xl px-3 py-2 text-xs transition-all ${
                      activeTier === tier
                        ? "bg-gold/10 border border-gold/40"
                        : "bg-gray-50 border border-transparent"
                    }`}
                  >
                    <span className="text-[#6B7280]">{label}</span>
                    <span className={`font-bold ${activeTier === tier ? "text-gold" : "text-navy"}`}>
                      €{price} {p.perBox}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order estimator + add to cart */}
            <div className="bg-navy rounded-2xl p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/60 text-xs">{p.pricePerBoxLabel}</span>
                <span className="text-gold font-bold text-xl">€{boxCount > 0 ? pricePerBox.toFixed(2) : size.price1_10}</span>
              </div>
              <input
                type="number"
                min="1"
                value={boxes}
                onChange={(e) => { setBoxes(e.target.value); setAdded(false); }}
                placeholder={p.boxesPlaceholder}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold mb-2"
              />
              {boxCount > 0 && (
                <p className="text-white/50 text-xs mb-2">= {totalPcs} {p.pcsAbbr} · €{pricePerBox}/{p.boxUnit}</p>
              )}
              {total && (
                <div className="text-center py-2 mb-2">
                  <span className="text-white/50 text-[10px] block">{c.estimatedTotal}</span>
                  <p className="text-gold font-bold text-lg">€{total}</p>
                </div>
              )}
              <button
                disabled={!boxCount || boxCount <= 0}
                onClick={() => {
                  addItem({
                    productSlug: "tea-filter-bags",
                    variantId: size.id,
                    variantName: sizeName,
                    weight: sizeName,
                    dimensions: size.dimensions,
                    valve: false,
                    color: null,
                    qty: boxCount,
                    pricePerPc: pricePerBox,
                    productImage: size.image,
                  });
                  setAdded(true);
                  setTimeout(() => setAdded(false), 2000);
                }}
                className="block w-full text-center font-bold text-sm py-2.5 rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-gold text-navy hover:bg-gold/90"
              >
                {added ? c.addedToCart : c.addToCart}
              </button>
              {added && (
                <button
                  onClick={() => router.push("/cart")}
                  className="block w-full text-center text-white/70 text-xs mt-2 hover:text-gold transition-colors"
                >
                  {c.viewCart}
                </button>
              )}
            </div>
            <p className="text-[10px] text-[#6B7280]">{p.pricesNoteBox}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TeaCatalogPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const { t } = useT();

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    const idx = sizes.findIndex(s => s.id === hash);
    if (idx !== -1) setOpenIdx(idx);
  }, []);
  const p = t.productPages.teaFilterBags;
  const c = t.catalog;

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
            {p.backToCatalogLink}
          </Link>
          <span className="text-gold text-sm font-semibold uppercase tracking-widest block mb-3">{c.fullCatalog}</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">{p.h1}</h1>
          <p className="text-white/60 text-base">{p.catalogSubtitle}</p>
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
