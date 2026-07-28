"use client";

import { useCart } from "@/lib/cart";
import { useT } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

const COLOR_MAP: Record<string, string> = {
  "White": "#F0F0F0", "Black": "#1A1A1A", "Brown": "#7C4A1E", "Gold": "#C9A15A",
  "Red": "#DC2626", "Kraft Paper": "#C4A46B", "Silver": "#C0C0C0", "Pine": "#2D7070",
  "Blue": "#1D4ED8", "Orange": "#EA580C", "Illuminating Yellow": "#F5E642",
  "Olive Green": "#6B7C3E", "Ultimate Gray": "#939597", "Purple (Very Peri)": "#6667AB",
  "Green (Emerald)": "#50C878", "Red (Viva Magenta)": "#BB2649", "Transparent": "transparent",
  "Latte": "#C4A882", "Lavender": "#DDA0DD", "Peach": "#FFDAB9", "Pink": "#FFB6C1",
  "Pistachio": "#93C572", "Pine Paper": "#8FAF7E", "White Paper": "#F5F0E8",
};

export default function CartPage() {
  const { items, mounted, removeItem, updateQty, totalPrice } = useCart();
  const { t } = useT();
  const c = t.cart;

  if (!mounted) {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-gray-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="font-heading text-2xl font-bold text-navy mb-2">{c.empty}</h1>
          <p className="text-[#6B7280] mb-8">{c.emptyDesc}</p>
          <Link href="/products" className="btn-gold text-base px-8 py-4">{c.browseProducts}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-navy mb-8">{c.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-200 p-5 flex gap-4">
                {/* Image */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <Image src={item.productImage} alt={item.variantName} fill className="object-contain p-2" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-navy text-sm leading-snug">{item.variantName}</p>
                  <div className="text-xs text-[#6B7280] mt-1 space-y-0.5">
                    <p>{item.weight} · {item.dimensions}</p>
                    {item.zipperMode && (
                      <p>{c.zipper}: {item.zipperMode === "with" ? c.withZipper : c.noZipper}</p>
                    )}
                    <p>{c.valve}: {item.valve ? c.withValve : c.withoutValve}</p>
                    {item.color && (
                      <p className="flex items-center gap-1.5">
                        {c.colour}:
                        <span
                          className="inline-block w-3 h-3 rounded-full border border-gray-300"
                          style={
                            COLOR_MAP[item.color] === "transparent"
                              ? { backgroundImage: "repeating-conic-gradient(#e5e7eb 0% 25%, white 0% 50%)", backgroundSize: "6px 6px" }
                              : { backgroundColor: COLOR_MAP[item.color] ?? "#999" }
                          }
                        />
                        {c.colorNames[item.color] ?? item.color}
                      </p>
                    )}
                  </div>

                  {/* Qty + price row */}
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-xl px-2 py-1">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 flex items-center justify-center text-navy hover:text-gold transition-colors font-bold"
                      >−</button>
                      <span className="text-navy font-semibold text-sm w-12 text-center">{item.qty.toLocaleString()}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 flex items-center justify-center text-navy hover:text-gold transition-colors font-bold"
                      >+</button>
                    </div>
                    <span className="text-xs text-[#6B7280]">× €{item.pricePerPc.toFixed(item.productSlug === "tea-filter-bags" ? 2 : 3)}{item.productSlug === "tea-filter-bags" ? t.productPages.teaFilterBags.perBox : c.perPc}</span>
                    <span className="font-bold text-navy text-sm ml-auto">€{(item.qty * item.pricePerPc).toFixed(2)}</span>
                  </div>
                </div>

                {/* Remove */}
                <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-400 transition-colors flex-shrink-0 self-start mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}

            <Link href="/products" className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-navy transition-colors mt-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {c.continueShopping}
            </Link>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28">
              <h2 className="font-heading font-bold text-navy text-lg mb-5">{c.orderSummary}</h2>

              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-[#6B7280] truncate mr-2">{item.variantName} × {item.qty.toLocaleString()}</span>
                    <span className="font-semibold text-navy flex-shrink-0">€{(item.qty * item.pricePerPc).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between font-bold text-navy">
                  <span>{c.estimatedTotal}</span>
                  <span className="text-gold text-xl">€{totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-[#6B7280] mt-1">{c.exclNote}</p>
              </div>

              <Link href="/checkout" className="block w-full text-center bg-navy text-white font-bold py-3.5 rounded-xl hover:bg-navy/90 transition-colors">
                {c.proceedCheckout}
              </Link>
              <p className="text-[11px] text-[#6B7280] text-center mt-3">{c.confirmEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
