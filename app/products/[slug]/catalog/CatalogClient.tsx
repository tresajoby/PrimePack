"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PRODUCT_MAP, ProductVariant } from "@/lib/product-data";
import { useCart } from "@/lib/cart";
import { useT } from "@/lib/i18n";

const TIERS = ["500–1,500 pcs", "1,500–3,000 pcs", "3,000–5,000 pcs", ">5,000 pcs"];

const COLOR_MAP: Record<string, string> = {
  "White": "#F0F0F0",
  "Black": "#1A1A1A",
  "Brown": "#7C4A1E",
  "Gold": "#C9A15A",
  "Red": "#DC2626",
  "Kraft Paper": "#C4A46B",
  "Silver": "#C0C0C0",
  "Pine": "#2D5016",
  "Blue": "#1D4ED8",
  "Orange": "#EA580C",
  "Illuminating Yellow": "#F5E642",
  "Olive Green": "#6B7C3E",
  "Ultimate Gray": "#939597",
  "Purple (Very Peri)": "#6667AB",
  "Green (Emerald)": "#50C878",
  "Red (Viva Magenta)": "#BB2649",
  "Transparent": "transparent",
  "Latte": "#C4A882",
  "Lavender": "#DDA0DD",
  "Peach": "#FFDAB9",
  "Pink": "#FFB6C1",
  "Pistachio": "#93C572",
  "Pine Paper": "#8FAF7E",
};

function tierFromQty(qty: number): number {
  if (qty >= 5000) return 3;
  if (qty >= 3000) return 2;
  if (qty >= 1500) return 1;
  return 0;
}

// Groups weights: zipper pairs ("1000 g (with zipper)" + "1000 g (no zipper)") become one entry
function buildWeightGroups(weights: ProductVariant["weights"]) {
  const seen = new Set<string>();
  return weights.map((w, i) => {
    const isZipper = w.label.includes("(with zipper)") || w.label.includes("(no zipper)");
    const base = isZipper
      ? w.label.replace(" (with zipper)", "").replace(" (no zipper)", "")
      : w.label;
    return { base, dimensions: w.dimensions, firstIdx: i, isZipperGroup: isZipper };
  }).filter(g => {
    if (seen.has(g.base)) return false;
    seen.add(g.base);
    return true;
  });
}

function resolveWi(
  weights: ProductVariant["weights"],
  firstIdx: number,
  isZipperGroup: boolean,
  zipperMode: "with" | "without"
): number {
  if (!isZipperGroup) return firstIdx;
  const base = weights[firstIdx].label.replace(" (with zipper)", "").replace(" (no zipper)", "");
  const target = zipperMode === "with" ? `${base} (with zipper)` : `${base} (no zipper)`;
  const idx = weights.findIndex(w => w.label === target);
  return idx !== -1 ? idx : firstIdx;
}

function SkuCard({ variant, image, productSlug, open, onToggle }: {
  variant: ProductVariant;
  image: string;
  productSlug: string;
  open: boolean;
  onToggle: () => void;
}) {
  const { addItem } = useCart();
  const { t } = useT();
  const c = t.catalog;
  const vn = t.variantNames as Record<string, { name: string; subtitle?: string }>;
  const router = useRouter();
  const displayGroups = buildWeightGroups(variant.weights);
  const [groupIdx, setGroupIdx] = useState(0);
  const [zipperMode, setZipperMode] = useState<"with" | "without">("with");
  const [ti, setTi] = useState(0);
  const [valve, setValve] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(variant.colors?.[0] ?? null);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [qty, setQty] = useState("");
  const [added, setAdded] = useState(false);

  const currentGallery = (selectedColor ? variant.colorImages?.[selectedColor] : undefined) ?? variant.gallery ?? [];

  function selectColor(col: string) {
    setSelectedColor(col);
    setSelectedImageIdx(0);
  }

  const activeGroup = displayGroups[groupIdx];
  const colorWeightImg = selectedColor ? variant.colorWeightImages?.[selectedColor]?.[activeGroup.base] : undefined;
  const mainImage = colorWeightImg ?? currentGallery[selectedImageIdx] ?? image;
  const wi = resolveWi(variant.weights, activeGroup.firstIdx, activeGroup.isZipperGroup, zipperMode);
  const weight = variant.weights[wi];
  const price = valve && weight.withValve ? weight.withValve[ti] : weight.without[ti];
  const qtyNum = parseInt(qty) || 0;
  const total = qtyNum > 0 ? (price * qtyNum).toFixed(2) : null;

  const allPrices = variant.weights.flatMap(w => w.without);
  const minPrice = Math.min(...allPrices).toFixed(3);
  const maxPrice = Math.max(...allPrices).toFixed(3);
  const showRange = minPrice !== maxPrice;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col group hover:shadow-lg transition-shadow duration-200">
      {/* Main image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          key={mainImage}
          src={mainImage}
          alt={selectedColor ? `${variant.name} – ${selectedColor}` : variant.name}
          fill
          className="object-contain p-8 transition-all duration-300 group-hover:scale-105"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
        />
      </div>

      {/* Thumbnail strip */}
      {currentGallery.length > 1 && (
        <div className="flex gap-1.5 px-3 py-2 bg-gray-50 border-t border-gray-100 overflow-x-auto">
          {currentGallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIdx(idx)}
              className={`relative flex-shrink-0 w-11 h-11 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImageIdx === idx
                  ? "border-gold shadow-sm"
                  : "border-gray-200 hover:border-gold/50"
              }`}
            >
              <Image src={img} alt="" fill className="object-contain p-0.5" sizes="44px" />
            </button>
          ))}
        </div>
      )}

      {/* Card info */}
      <div className="p-5 flex flex-col">
        <p className="text-navy font-bold text-[15px] leading-snug mb-1">{vn[variant.id]?.name ?? variant.name}</p>
        {variant.subtitle && <p className="text-[#6B7280] text-xs mb-2">{vn[variant.id]?.subtitle ?? variant.subtitle}</p>}

        {/* Color dot preview */}
        {variant.colors && variant.colors.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {variant.colors.slice(0, 10).map(col => (
              <div
                key={col}
                title={col}
                className="w-3.5 h-3.5 rounded-full border border-gray-300 flex-shrink-0"
                style={
                  COLOR_MAP[col] === "transparent"
                    ? { backgroundImage: "repeating-conic-gradient(#e5e7eb 0% 25%, white 0% 50%)", backgroundSize: "6px 6px" }
                    : { backgroundColor: COLOR_MAP[col] ?? "#999" }
                }
              />
            ))}
            {variant.colors.length > 10 && (
              <span className="text-[10px] text-[#6B7280] self-center">+{variant.colors.length - 10}</span>
            )}
          </div>
        )}

        {/* Price range */}
        <div className="mb-4">
          <p className="text-navy text-sm">
            {showRange ? (
              <><span className="font-bold">€{minPrice}</span>{" – "}<span className="font-bold">€{maxPrice}</span></>
            ) : (
              <span className="font-bold">€{minPrice}</span>
            )}
            <span className="text-[#6B7280] text-xs ml-1">/pc</span>
          </p>
          <p className="text-[10px] text-[#6B7280] mt-0.5">
            {variant.weights.length} {variant.weights.length !== 1 ? c.sizePlural : c.sizeSingular}
            {variant.colors ? ` · ${variant.colors.length} ${variant.colors.length !== 1 ? c.colourPlural : c.colourSingular}` : ""}
          </p>
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

            {/* Weight / Size */}
            <div>
              <p className="text-[11px] font-bold text-navy uppercase tracking-widest mb-2">{c.weightSize}</p>
              {displayGroups.length === 1 ? (
                <div className="bg-gray-50 rounded-xl px-3 py-2 text-xs">
                  <span className="font-semibold text-navy">{displayGroups[0].base}</span>
                  <span className="text-[#6B7280] ml-2">{displayGroups[0].dimensions}</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-1.5">
                  {displayGroups.map((g, i) => (
                    <button
                      key={i}
                      onClick={() => { setGroupIdx(i); setValve(false); setZipperMode("with"); }}
                      className={`text-left px-3 py-2 rounded-xl border transition-all ${
                        groupIdx === i
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-gray-100 bg-gray-50 text-[#6B7280] hover:border-gold/50"
                      }`}
                    >
                      <span className="block text-xs font-bold">{g.base}</span>
                      <span className="block text-[10px] text-[#6B7280] mt-0.5">{g.dimensions}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Zipper option — shown only when the selected size has a zipper variant */}
            {activeGroup.isZipperGroup && (
              <div>
                <p className="text-[11px] font-bold text-navy uppercase tracking-widest mb-2">{c.zipper}</p>
                <div className="flex gap-2">
                  {(["with", "without"] as const).map((z) => (
                    <button
                      key={z}
                      onClick={() => setZipperMode(z)}
                      className={`flex-1 py-2 rounded-xl border text-xs font-medium transition-all ${
                        zipperMode === z
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-gray-100 bg-gray-50 text-[#6B7280] hover:border-gold/50"
                      }`}
                    >
                      {z === "with" ? c.withZipper : c.noZipper}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Tier */}
            <div>
              <p className="text-[11px] font-bold text-navy uppercase tracking-widest mb-2">{c.quantityTier}</p>
              <div className="grid grid-cols-2 gap-1.5">
                {TIERS.map((label, i) => (
                  <button
                    key={i}
                    onClick={() => setTi(i)}
                    className={`text-left px-3 py-2.5 rounded-xl border transition-all ${
                      ti === i
                        ? "border-gold bg-gold/10 text-navy font-semibold"
                        : "border-gray-100 bg-gray-50 text-[#6B7280] hover:border-gold/50"
                    }`}
                  >
                    <span className="block text-[11px] leading-tight">{label}</span>
                    <span className={`block font-bold text-xs mt-0.5 ${ti === i ? "text-gold" : "text-navy"}`}>
                      €{(valve && weight.withValve ? weight.withValve[i] : weight.without[i]).toFixed(3)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Valve Option */}
            {weight.hasValve && (
              <div>
                <p className="text-[11px] font-bold text-navy uppercase tracking-widest mb-2">{c.valveOption}</p>
                <div className="flex gap-2">
                  {([false, true] as const).map((v) => (
                    <button
                      key={String(v)}
                      onClick={() => setValve(v)}
                      className={`flex-1 py-2 rounded-xl border text-xs font-medium transition-all ${
                        valve === v
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-gray-100 bg-gray-50 text-[#6B7280] hover:border-gold/50"
                      }`}
                    >
                      {v ? c.withValve : c.withoutValve}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colour selection */}
            {variant.colors && variant.colors.length > 0 && (
              <div>
                <p className="text-[11px] font-bold text-navy uppercase tracking-widest mb-2">
                  {c.colourLabel}
                  {selectedColor && <span className="text-gold font-normal normal-case tracking-normal ml-1">· {selectedColor}</span>}
                </p>
                <div className="flex flex-wrap gap-2">
                  {variant.colors.map(col => (
                    <button
                      key={col}
                      title={col}
                      onClick={() => selectColor(col)}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        selectedColor === col
                          ? "border-gold scale-110 shadow-md"
                          : "border-gray-200 hover:border-gold/60"
                      }`}
                      style={
                        COLOR_MAP[col] === "transparent"
                          ? { backgroundImage: "repeating-conic-gradient(#e5e7eb 0% 25%, white 0% 50%)", backgroundSize: "8px 8px" }
                          : { backgroundColor: COLOR_MAP[col] ?? "#999" }
                      }
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Price summary */}
            <div className="bg-navy rounded-2xl p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/60 text-xs">{c.pricePerPc}</span>
                <span className="text-gold font-bold text-xl">€{price.toFixed(3)}</span>
              </div>
              <input
                type="number"
                value={qty}
                onChange={(e) => {
                  const val = e.target.value;
                  setQty(val);
                  const num = parseInt(val) || 0;
                  if (num > 0) setTi(tierFromQty(num));
                }}
                placeholder={c.enterQty}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold mb-2"
              />
              {total && (
                <div className="text-center py-2 mb-2">
                  <span className="text-white/50 text-[10px] block">{c.estimatedTotal}</span>
                  <p className="text-gold font-bold text-lg">€{total}</p>
                </div>
              )}
              <button
                disabled={!qtyNum || qtyNum <= 0}
                onClick={() => {
                  addItem({
                    productSlug,
                    variantId: variant.id,
                    variantName: variant.name,
                    weight: activeGroup.base,
                    dimensions: weight.dimensions,
                    zipperMode: activeGroup.isZipperGroup ? zipperMode : undefined,
                    valve,
                    color: selectedColor,
                    qty: qtyNum,
                    pricePerPc: price,
                    productImage: image,
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
            <p className="text-[10px] text-[#6B7280]">{c.pricesNote}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CatalogClient({ slug }: { slug: string }) {
  const product = PRODUCT_MAP[slug];
  const { t } = useT();
  const c = t.catalog;
  const pn = t.productNames as Record<string, string>;
  const vn = t.variantNames as Record<string, { name: string; subtitle?: string }>;
  const [activeId, setActiveId] = useState<string>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    const readHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      setActiveId(hash || "all");
      setOpenIdx(null);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  if (!product) {
    return (
      <div className="pt-40 text-center text-navy">
        <p>{c.notFound}</p>
        <Link href="/products" className="text-gold underline mt-4 inline-block">{c.backToProducts}</Link>
      </div>
    );
  }

  // Build unique tabs: variants sharing a filterGroup collapse into one tab
  const tabEntries = (() => {
    const seen = new Set<string>();
    const entries: { id: string; isGroup: boolean; variants: ProductVariant[] }[] = [];
    for (const v of product.variants) {
      const tabId = v.filterGroup ?? v.id;
      if (!seen.has(tabId)) {
        seen.add(tabId);
        entries.push({ id: tabId, isGroup: !!v.filterGroup, variants: [] });
      }
      entries.find(e => e.id === tabId)!.variants.push(v);
    }
    return entries;
  })();

  const activeVariants: ProductVariant[] = activeId === "all"
    ? product.variants
    : product.variants.filter(v => v.id === activeId || v.filterGroup === activeId);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-14 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #C9A15A 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/products/${slug}`} className="inline-flex items-center gap-2 text-gold/80 hover:text-gold text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {c.backTo} {pn[slug] ?? product.name}
          </Link>
          <span className="text-gold text-sm font-semibold uppercase tracking-widest block mb-3">{c.fullCatalog}</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">{pn[slug] ?? product.name}</h1>
          <p className="text-white/60 text-base">{c.subtitle}</p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => { setActiveId("all"); setOpenIdx(null); history.replaceState(null, "", window.location.pathname); }}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeId === "all" ? "bg-navy text-white" : "text-[#6B7280] hover:text-navy hover:bg-gray-100"
              }`}
            >
              {c.allTab} ({product.variants.length})
            </button>
            {tabEntries.map(entry => {
              const label = entry.isGroup
                ? entry.id
                : (vn[entry.id]?.name ?? entry.variants[0].name);
              const countNum = entry.isGroup
                ? entry.variants.length
                : entry.variants[0].weights.length;
              const countUnit = entry.isGroup
                ? (countNum !== 1 ? c.variantPlural : c.variantSingular)
                : (countNum !== 1 ? c.sizePlural : c.sizeSingular);
              return (
                <button
                  key={entry.id}
                  onClick={() => { setActiveId(entry.id); setOpenIdx(null); history.replaceState(null, "", `#${encodeURIComponent(entry.id)}`); }}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                    activeId === entry.id ? "bg-gold text-navy" : "text-[#6B7280] hover:text-navy hover:bg-gray-100"
                  }`}
                >
                  {label} ({countNum} {countUnit})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active variant info strip */}
      {activeId !== "all" && (() => {
        const v = product.variants.find(x => x.id === activeId);
        if (!v) return null;
        return (
          <div className="bg-gold/5 border-b border-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-4">
              <div>
                <h2 className="font-heading font-bold text-navy">{vn[v.id]?.name ?? v.name}</h2>
                {v.subtitle && <p className="text-xs text-[#6B7280]">{vn[v.id]?.subtitle ?? v.subtitle}</p>}
              </div>
              {v.colors && (
                <div className="flex flex-wrap gap-1.5">
                  {v.colors.map(col => (
                    <span key={col} className="text-[11px] px-2 py-0.5 bg-white border border-gray-200 rounded-full text-[#6B7280]">{col}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })()}

      {/* Variant grid */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#6B7280] mb-8">
            {activeVariants.length} {activeVariants.length !== 1 ? c.variantPlural : c.variantSingular}
            {activeId !== "all"
              ? ` · ${vn[activeId]?.name ?? product.variants.find(v => v.id === activeId)?.name ?? activeId}`
              : ` ${c.across} ${product.variants.length} ${c.options}`}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 items-start">
            {activeVariants.map((variant, idx) => (
              <SkuCard
                key={variant.id}
                variant={variant}
                image={product.image}
                productSlug={slug}
                open={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-3">{c.customSolution}</h2>
          <p className="text-white/60 mb-6 text-sm">{c.customDesc}</p>
          <Link href="/contact" className="btn-gold text-base px-8 py-4">{c.requestCustomQuote}</Link>
        </div>
      </section>
    </>
  );
}
