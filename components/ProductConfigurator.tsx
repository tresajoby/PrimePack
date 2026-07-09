"use client";
import { useState } from "react";
import Link from "next/link";
import type { WeightOption, ProductVariant } from "@/lib/product-data";

export type { WeightOption, ProductVariant };

const TIERS = ["500–1,500 pcs", "1,500–3,000 pcs", "3,000–5,000 pcs", ">5,000 pcs"];

interface Props {
  variants: ProductVariant[];
  sectionTitle?: string;
}

export default function ProductConfigurator({ variants, sectionTitle = "Configure & Price" }: Props) {
  const [vi, setVi] = useState<number | null>(null);
  const [wi, setWi] = useState(0);
  const [ti, setTi] = useState(0);
  const [valve, setValve] = useState(false);
  const [qty, setQty] = useState("");

  const variant = vi !== null ? variants[vi] : null;
  const weight = variant ? variant.weights[wi] : null;

  const pricePer =
    weight
      ? valve && weight.withValve
        ? weight.withValve[ti]
        : weight.without[ti]
      : null;

  const qtyNum = parseInt(qty.replace(/,/g, "")) || 0;
  const total = pricePer && qtyNum > 0 ? (pricePer * qtyNum).toFixed(2) : null;

  function selectVariant(i: number) {
    setVi(i);
    setWi(0);
    setTi(0);
    setValve(false);
    setQty("");
  }

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="font-heading text-3xl font-bold text-navy mt-3">{sectionTitle}</h2>
          <p className="text-[#6B7280] mt-3 text-sm">Select a variant below to see pricing and configure your order</p>
        </div>

        {/* Variant cards */}
        <div className={`grid gap-4 mb-10 grid-cols-1 sm:grid-cols-2 ${variants.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {variants.map((v, i) => (
            <button
              key={v.id}
              onClick={() => selectVariant(i)}
              className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                vi === i
                  ? "border-gold bg-gold/5 shadow-md"
                  : "border-gray-200 bg-white hover:border-gold/50 hover:shadow-sm"
              }`}
            >
              <h3 className="font-heading font-bold text-navy text-sm mb-1">{v.name}</h3>
              {v.subtitle && <p className="text-xs text-gold mb-2">{v.subtitle}</p>}
              {v.colors && (
                <p className="text-[11px] text-[#6B7280] mb-2 leading-snug">
                  {v.colors.slice(0, 6).join(", ")}
                  {v.colors.length > 6 ? ` +${v.colors.length - 6} more` : ""}
                </p>
              )}
              <ul className="mt-2 space-y-0.5">
                {v.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-[11px] text-[#6B7280]">
                    <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        {/* Configurator panel */}
        {variant && (
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-navy/5 border-b border-gray-100 flex flex-wrap items-center gap-3">
              <h3 className="font-heading font-bold text-navy">{variant.name}</h3>
              {variant.moq && (
                <span className="text-xs text-[#6B7280] bg-gray-100 px-2 py-1 rounded-full">
                  MOQ: {variant.moq}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              {/* Step 1 — Weight */}
              <div className="p-6">
                <h4 className="text-[11px] font-bold text-navy uppercase tracking-widest mb-4">
                  1 · Select Weight
                </h4>
                <div className="space-y-2">
                  {variant.weights.map((w, i) => (
                    <button
                      key={i}
                      onClick={() => { setWi(i); setTi(0); setValve(false); }}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                        wi === i
                          ? "border-gold bg-gold/10"
                          : "border-gray-100 bg-gray-50 hover:border-gold/40"
                      }`}
                    >
                      <span className={`font-semibold text-sm ${wi === i ? "text-navy" : "text-[#1A1A1A]"}`}>
                        {w.label}
                      </span>
                      <span className="text-xs text-[#6B7280] ml-2">{w.dimensions}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 — Quantity tier + valve */}
              <div className="p-6">
                <h4 className="text-[11px] font-bold text-navy uppercase tracking-widest mb-4">
                  2 · Select Quantity Tier
                </h4>
                <div className="space-y-2">
                  {TIERS.map((label, i) => (
                    <button
                      key={i}
                      onClick={() => setTi(i)}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center justify-between ${
                        ti === i
                          ? "border-gold bg-gold/10"
                          : "border-gray-100 bg-gray-50 hover:border-gold/40"
                      }`}
                    >
                      <span className={`text-sm font-medium ${ti === i ? "text-navy" : "text-[#1A1A1A]"}`}>
                        {label}
                      </span>
                      {weight && (
                        <span className="text-xs text-gold font-semibold">
                          €{(valve && weight.withValve ? weight.withValve[i] : weight.without[i]).toFixed(3)}
                          <span className="text-[#6B7280] font-normal">/pc</span>
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {weight?.hasValve && (
                  <div className="mt-6">
                    <h4 className="text-[11px] font-bold text-navy uppercase tracking-widest mb-3">
                      3 · Valve Option
                    </h4>
                    <div className="flex gap-2">
                      {([false, true] as const).map((v) => (
                        <button
                          key={String(v)}
                          onClick={() => setValve(v)}
                          className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                            valve === v
                              ? "border-gold bg-gold/10 text-navy"
                              : "border-gray-100 bg-gray-50 text-[#6B7280] hover:border-gold/40"
                          }`}
                        >
                          {v ? "With Valve" : "Without Valve"}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Price summary */}
              <div className="p-6 bg-navy flex flex-col gap-4">
                <h4 className="text-[11px] font-bold text-gold uppercase tracking-widest">
                  Price Summary
                </h4>

                <div className="flex-1 space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Variant</span>
                    <span className="text-white font-medium text-xs text-right max-w-[140px] leading-tight">
                      {variant.name}
                    </span>
                  </div>
                  {weight && (
                    <div className="flex justify-between">
                      <span className="text-white/50">Weight</span>
                      <span className="text-white font-medium">{weight.label}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-white/50">Qty Tier</span>
                    <span className="text-white font-medium text-xs">{TIERS[ti]}</span>
                  </div>
                  {weight?.hasValve && (
                    <div className="flex justify-between">
                      <span className="text-white/50">Valve</span>
                      <span className="text-white font-medium">
                        {valve ? "With valve" : "Without valve"}
                      </span>
                    </div>
                  )}
                </div>

                {pricePer !== null && (
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-white/50 text-xs mb-1">Price per piece</p>
                    <p className="text-gold font-bold text-3xl">€{pricePer.toFixed(3)}</p>
                  </div>
                )}

                <div>
                  <label className="text-white/50 text-xs block mb-1.5">
                    Enter quantity for total estimate
                  </label>
                  <input
                    type="number"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    placeholder="e.g. 1000"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-gold mb-3"
                  />
                  {total && (
                    <div className="bg-gold/20 rounded-xl p-3 text-center mb-3">
                      <p className="text-white/60 text-xs">Estimated total</p>
                      <p className="text-gold font-bold text-2xl">€{total}</p>
                    </div>
                  )}
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-gold text-navy font-bold text-sm py-3 rounded-xl hover:bg-gold/90 transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>
                <p className="text-white/30 text-[10px] leading-relaxed">
                  * All prices in EUR. Branding (screen printing / foil stamping) priced separately.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
