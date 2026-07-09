"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useT } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

const COUNTRIES = [
  "Latvia", "Lithuania", "Estonia", "Finland", "Sweden", "Germany", "France", "Netherlands",
  "Belgium", "Poland", "Czech Republic", "Slovakia", "Hungary", "Austria", "Switzerland",
  "United Kingdom", "Ireland", "Denmark", "Norway", "Italy", "Spain", "Portugal", "Other",
];

const FORMSPREE = "https://formspree.io/f/xzdqwgkv";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-1.5">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-navy placeholder:text-gray-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart, mounted } = useCart();
  const { t } = useT();
  const c = t.checkout;

  const [shipDiff, setShipDiff] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const [bill, setBill] = useState({
    companyName: "", companyStreet: "", postcode: "", country: "Latvia",
    city: "", addressLine1: "", addressLine2: "",
    firstName: "", lastName: "", email: "", mobile: "", homePhone: "", vatNumber: "",
  });

  const [ship, setShip] = useState({
    firstName: "", lastName: "", companyName: "", country: "Latvia",
    addressLine1: "", addressLine2: "", city: "", postcode: "",
  });

  const [orderNotes, setOrderNotes] = useState("");

  const billChange = (k: keyof typeof bill) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setBill(p => ({ ...p, [k]: e.target.value }));

  const shipChange = (k: keyof typeof ship) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setShip(p => ({ ...p, [k]: e.target.value }));

  const canSubmit = bill.firstName && bill.lastName && bill.email && bill.mobile &&
    bill.postcode && bill.city && bill.addressLine1 && agreed && items.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("sending");

    const orderLines = items.map(item =>
      `• ${item.variantName} | ${item.weight} (${item.dimensions})` +
      (item.zipperMode ? ` | Zipper: ${item.zipperMode === "with" ? "With" : "No"} Zipper` : "") +
      ` | Valve: ${item.valve ? "With Valve" : "Without Valve"}` +
      (item.color ? ` | Colour: ${item.color}` : "") +
      ` | Qty: ${item.qty.toLocaleString()} pcs | €${item.pricePerPc.toFixed(3)}/pc | Total: €${(item.qty * item.pricePerPc).toFixed(2)}`
    ).join("\n");

    const shippingBlock = shipDiff
      ? `\n--- SHIPPING ADDRESS ---\nName: ${ship.firstName} ${ship.lastName}\nCompany: ${ship.companyName || "—"}\nAddress: ${ship.addressLine1}${ship.addressLine2 ? ", " + ship.addressLine2 : ""}\nCity: ${ship.city}, ${ship.postcode}\nCountry: ${ship.country}`
      : "Shipping: Same as billing";

    const message = `=== ORDER REQUEST ===

--- ORDER ITEMS ---
${orderLines}

ESTIMATED TOTAL: €${totalPrice.toFixed(2)}

--- BILLING DETAILS ---
Company: ${bill.companyName || "—"}
Company Street: ${bill.companyStreet || "—"}
Name: ${bill.firstName} ${bill.lastName}
Address: ${bill.addressLine1}${bill.addressLine2 ? ", " + bill.addressLine2 : ""}
City: ${bill.city}, ${bill.postcode}
Country: ${bill.country}
Email: ${bill.email}
Mobile: ${bill.mobile}
Home Phone: ${bill.homePhone || "—"}
EU VAT: ${bill.vatNumber || "—"}
${shippingBlock}

${orderNotes ? "--- ORDER NOTES ---\n" + orderNotes : ""}`;

    try {
      const body = new FormData();
      body.append("name", `${bill.firstName} ${bill.lastName}`);
      body.append("email", bill.email);
      body.append("company", bill.companyName || "—");
      body.append("phone", bill.mobile);
      body.append("message", message);
      body.append("_subject", `New Order Request — €${totalPrice.toFixed(2)} — ${bill.firstName} ${bill.lastName}`);

      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });

      if (res.ok) {
        clearCart();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!mounted) {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-heading text-2xl font-bold text-navy mb-3">{c.orderReceived}</h1>
          <p className="text-[#6B7280] mb-2">{c.thankYou} <strong>{bill.email}</strong>.</p>
          <p className="text-[#6B7280] text-sm mb-8">{c.contactSoon}</p>
          <Link href="/products" className="btn-gold text-base px-8 py-4">{c.continueShopping}</Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <h1 className="font-heading text-2xl font-bold text-navy mb-4">{c.emptyCart}</h1>
          <Link href="/products" className="btn-gold text-base px-8 py-4">{c.browseProducts}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <p className="text-xs text-[#6B7280] mb-6">
          <Link href="/" className="hover:text-navy">{c.home}</Link>
          {" / "}
          <Link href="/cart" className="hover:text-navy">{c.cart}</Link>
          {" / "}
          <span className="text-navy font-semibold">{c.title}</span>
        </p>

        <h1 className="font-heading text-3xl font-bold text-navy mb-8">{c.title}</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* LEFT — Billing */}
            <div className="lg:col-span-3 space-y-5">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="font-heading font-bold text-navy text-base uppercase tracking-widest mb-5">{c.billingDetails}</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Field label={c.firstName} required>
                      <input className={inputCls} placeholder={c.phFirstName} value={bill.firstName} onChange={billChange("firstName")} required />
                    </Field>
                    <Field label={c.lastName} required>
                      <input className={inputCls} placeholder={c.phLastName} value={bill.lastName} onChange={billChange("lastName")} required />
                    </Field>
                  </div>
                  <Field label={c.companyName}>
                    <input className={inputCls} placeholder={c.phCompany} value={bill.companyName} onChange={billChange("companyName")} />
                  </Field>
                  <Field label={c.companyStreet}>
                    <input className={inputCls} placeholder={c.phCompanyStreet} value={bill.companyStreet} onChange={billChange("companyStreet")} />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label={c.countryRegion} required>
                      <select className={inputCls} value={bill.country} onChange={billChange("country")} required>
                        {COUNTRIES.map(co => <option key={co}>{co}</option>)}
                      </select>
                    </Field>
                    <Field label={c.townCity} required>
                      <input className={inputCls} placeholder={c.phCity} value={bill.city} onChange={billChange("city")} required />
                    </Field>
                  </div>
                  <Field label={c.streetAddress} required>
                    <input className={inputCls} placeholder={c.phStreet} value={bill.addressLine1} onChange={billChange("addressLine1")} required />
                    <input className={`${inputCls} mt-2`} placeholder={c.phApartment} value={bill.addressLine2} onChange={billChange("addressLine2")} />
                  </Field>
                  <Field label={c.postcode} required>
                    <input className={inputCls} placeholder={c.phPostcode} value={bill.postcode} onChange={billChange("postcode")} required />
                  </Field>
                  <Field label={c.emailAddress} required>
                    <input type="email" className={inputCls} placeholder={c.phEmail} value={bill.email} onChange={billChange("email")} required />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label={c.mobilePhone} required>
                      <input type="tel" className={inputCls} placeholder={c.phMobile} value={bill.mobile} onChange={billChange("mobile")} required />
                    </Field>
                    <Field label={c.homePhone}>
                      <input type="tel" className={inputCls} placeholder={c.phHomePhone} value={bill.homePhone} onChange={billChange("homePhone")} />
                    </Field>
                  </div>
                  <Field label={c.euVat}>
                    <input className={inputCls} placeholder={c.phVat} value={bill.vatNumber} onChange={billChange("vatNumber")} />
                  </Field>
                </div>
              </div>

              {/* Ship to different address */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={shipDiff}
                    onChange={e => setShipDiff(e.target.checked)}
                    className="w-4 h-4 accent-gold"
                  />
                  <span className="font-bold text-navy text-sm">{c.shipDiffAddress}</span>
                </label>

                {shipDiff && (
                  <div className="mt-5 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Field label={c.firstName} required>
                        <input className={inputCls} placeholder={c.phShipFirstName} value={ship.firstName} onChange={shipChange("firstName")} required={shipDiff} />
                      </Field>
                      <Field label={c.lastName} required>
                        <input className={inputCls} placeholder={c.phShipLastName} value={ship.lastName} onChange={shipChange("lastName")} required={shipDiff} />
                      </Field>
                    </div>
                    <Field label={c.companyName}>
                      <input className={inputCls} placeholder={c.phShipCompany} value={ship.companyName} onChange={shipChange("companyName")} />
                    </Field>
                    <Field label={c.countryRegion} required>
                      <select className={inputCls} value={ship.country} onChange={shipChange("country")} required={shipDiff}>
                        {COUNTRIES.map(co => <option key={co}>{co}</option>)}
                      </select>
                    </Field>
                    <Field label={c.streetAddress} required>
                      <input className={inputCls} placeholder={c.phShipStreet} value={ship.addressLine1} onChange={shipChange("addressLine1")} required={shipDiff} />
                      <input className={`${inputCls} mt-2`} placeholder={c.phApartment} value={ship.addressLine2} onChange={shipChange("addressLine2")} />
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                      <Field label={c.townCity} required>
                        <input className={inputCls} placeholder={c.phShipCity} value={ship.city} onChange={shipChange("city")} required={shipDiff} />
                      </Field>
                      <Field label={c.postcode} required>
                        <input className={inputCls} placeholder={c.phShipPostcode} value={ship.postcode} onChange={shipChange("postcode")} required={shipDiff} />
                      </Field>
                    </div>
                  </div>
                )}
              </div>

              {/* Order notes */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <Field label={c.orderNotes}>
                  <textarea
                    className={`${inputCls} resize-none`}
                    rows={3}
                    placeholder={c.phOrderNotes}
                    value={orderNotes}
                    onChange={e => setOrderNotes(e.target.value)}
                  />
                </Field>
              </div>
            </div>

            {/* RIGHT — Order summary */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28">
                <h2 className="font-heading font-bold text-navy text-base uppercase tracking-widest mb-5">{c.yourOrder}</h2>

                <div className="space-y-4 mb-5">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                        <Image src={item.productImage} alt={item.variantName} fill className="object-contain p-1" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-navy text-xs leading-snug">{item.variantName}</p>
                        <p className="text-[10px] text-[#6B7280] mt-0.5">
                          {item.weight} · {item.qty.toLocaleString()} {c.pcs}
                          {item.valve ? ` · ${c.valveLabel}` : ` · ${c.noValve}`}
                        </p>
                        {item.color && <p className="text-[10px] text-[#6B7280]">{item.color}</p>}
                      </div>
                      <span className="font-bold text-navy text-sm flex-shrink-0">€{(item.qty * item.pricePerPc).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B7280]">{c.subtotal}</span>
                    <span className="font-semibold text-navy">€{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-navy">
                    <span>{c.total}</span>
                    <span className="text-gold text-lg">€{totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment note */}
                <div className="mt-5 bg-gold/5 border border-gold/20 rounded-xl p-4">
                  <p className="text-[11px] font-bold text-navy uppercase tracking-widest mb-1">{c.paymentInvoice}</p>
                  <p className="text-xs text-[#6B7280]">{c.taxNote}</p>
                </div>

                {/* Agreement */}
                <label className="flex items-start gap-3 mt-5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={e => setAgreed(e.target.checked)}
                    className="w-4 h-4 mt-0.5 accent-gold flex-shrink-0"
                  />
                  <span className="text-xs text-[#6B7280]">
                    {c.termsAgreement}{" "}
                    <Link href="/terms" className="text-navy underline hover:text-gold">{c.termsLink}</Link>
                    <span className="text-red-500"> *</span>
                  </span>
                </label>

                {status === "error" && (
                  <p className="text-red-500 text-xs mt-3">
                    {c.errorMsg}{" "}
                    <a href="mailto:PrimePack.lv@gmail.com" className="underline">PrimePack.lv@gmail.com</a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit || status === "sending"}
                  className="mt-5 w-full bg-gold text-navy font-bold py-3.5 rounded-xl hover:bg-gold/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {c.placingOrder}
                    </>
                  ) : c.placeOrder}
                </button>

                <p className="text-[10px] text-[#6B7280] text-center mt-3">
                  {c.privacyNote}{" "}
                  <Link href="/privacy" className="underline hover:text-navy">{c.privacyPolicy}</Link>.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
