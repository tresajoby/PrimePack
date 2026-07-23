"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProductVariant } from "@/lib/product-data";
import { useT } from "@/lib/i18n";

const ACCENT_CLASSES = [
  "ring-blue-400",
  "ring-amber-400",
  "ring-emerald-400",
  "ring-rose-400",
  "ring-purple-400",
  "ring-cyan-400",
  "ring-orange-400",
];

const COLOR_MAP: Record<string, string> = {
  "White": "#F0F0F0", "Black": "#1A1A1A", "Brown": "#7C4A1E", "Gold": "#C9A15A",
  "Red": "#DC2626", "Kraft Paper": "#C4A46B", "Silver": "#C0C0C0", "Pine": "#2D7070",
  "Blue": "#1D4ED8", "Orange": "#EA580C", "Illuminating Yellow": "#F5E642",
  "Olive Green": "#6B7C3E", "Ultimate Gray": "#939597", "Purple (Very Peri)": "#6667AB",
  "Green (Emerald)": "#50C878", "Red (Viva Magenta)": "#BB2649", "Transparent": "transparent",
  "Latte": "#C4A882", "Lavender": "#DDA0DD", "Peach": "#FFDAB9", "Pink": "#FFB6C1",
  "Pistachio": "#93C572", "Pine Paper": "#8FAF7E", "White Paper": "#F5F0E8",
};

interface Props {
  variants: ProductVariant[];
  productSlug: string;
  productImage: string;
}

export default function VariantImageSelector({ variants, productSlug, productImage }: Props) {
  const { t } = useT();
  const vs = t.variantSelector;
  const vn = t.variantNames as Record<string, { name: string; subtitle?: string }>;
  const [hoveredColor, setHoveredColor] = useState<Record<string, string>>({});
  const [selectedColor, setSelectedColor] = useState<Record<string, string>>({});

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">{vs.eyebrow}</span>
          <h2 className="font-heading text-3xl font-bold text-navy mt-3">{vs.title}</h2>
          <p className="text-[#6B7280] mt-2 text-sm">{vs.subtitle}</p>
        </div>

        {/* Variant image cards */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
          {variants.map((v, i) => {
            const activeColor = hoveredColor[v.id] ?? selectedColor[v.id];
            const defaultColor = v.colors?.[0];
            const displayColor = activeColor ?? defaultColor;
            const gallery = displayColor ? v.colorImages?.[displayColor] : undefined;
            const src = gallery?.[0] ?? productImage;

            return (
              <Link
                key={v.id}
                href={`/products/${productSlug}/catalog#${v.id}`}
                className="group flex flex-col items-center w-[140px] sm:w-[160px]"
              >
                {/* Image circle */}
                <div
                  className={`relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-gold transition-all duration-300 shadow-sm group-hover:shadow-xl bg-white ring-2 ring-transparent group-hover:${ACCENT_CLASSES[i % ACCENT_CLASSES.length]}`}
                >
                  <Image
                    key={src}
                    src={src}
                    alt={activeColor ? `${v.name} – ${activeColor}` : v.name}
                    fill
                    className="object-contain p-4 transition-all duration-300 group-hover:scale-110"
                    sizes="160px"
                  />
                </div>

                {/* Label */}
                <div className="mt-3 text-center">
                  <p className="text-sm font-bold text-navy group-hover:text-gold transition-colors leading-tight">
                    {vn[v.id]?.name ?? v.name}
                  </p>
                  {activeColor && (
                    <p className="text-[10px] text-gold mt-0.5">{activeColor}</p>
                  )}
                  {v.colors && v.colors.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-1 mt-1.5">
                      {v.colors.slice(0, 9).map(c => (
                        <div
                          key={c}
                          title={c}
                          onMouseEnter={() => setHoveredColor(h => ({ ...h, [v.id]: c }))}
                          onMouseLeave={() => setHoveredColor(h => { const n = { ...h }; delete n[v.id]; return n; })}
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedColor(s => ({ ...s, [v.id]: c })); }}
                          className={`w-3 h-3 rounded-full border flex-shrink-0 cursor-pointer transition-transform hover:scale-125 ${
                            selectedColor[v.id] === c ? "border-gold ring-1 ring-gold scale-125" : "border-gray-300"
                          }`}
                          style={
                            COLOR_MAP[c] === "transparent"
                              ? { backgroundImage: "repeating-conic-gradient(#e5e7eb 0% 25%, white 0% 50%)", backgroundSize: "6px 6px" }
                              : { backgroundColor: COLOR_MAP[c] ?? "#999" }
                          }
                        />
                      ))}
                      {v.colors.length > 9 && (
                        <span className="text-[9px] text-[#6B7280] self-center">+{v.colors.length - 9}</span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href={`/products/${productSlug}/catalog`}
            className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-navy/90 transition-colors"
          >
            {vs.viewAll}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
