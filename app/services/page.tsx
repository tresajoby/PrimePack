import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — PrimePack Packaging Solutions",
  description:
    "PrimePack offers packaging consultation, custom development, material sourcing, bulk supply, private label packaging, and logistics support for B2B clients.",
};

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Packaging Consultation",
    desc: "Our specialists work with you to understand your packaging challenges and recommend the most suitable materials, formats, and specifications for your products and budget.",
    benefits: [
      "Free initial consultation",
      "Specialist product knowledge",
      "Material recommendations",
      "Cost optimisation advice",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Custom Packaging Development",
    desc: "We develop packaging products built to your exact specifications — from custom sizes and materials to print-ready branded packaging with your logo and design.",
    benefits: [
      "Custom sizes and dimensions",
      "Material and barrier selection",
      "Brand colour and print matching",
      "Sample development available",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Packaging Material Sourcing",
    desc: "Access our established network of EU and international manufacturers to source packaging materials that meet your technical and commercial requirements.",
    benefits: [
      "Broad supplier network",
      "Technical specification matching",
      "Competitive sourcing pricing",
      "Quality assurance support",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Bulk Supply Solutions",
    desc: "For high-volume requirements, we offer flexible bulk supply arrangements with scheduled deliveries, warehousing support, and volume-based pricing structures.",
    benefits: [
      "Volume pricing discounts",
      "Scheduled delivery programs",
      "Stock reservation options",
      "Flexible payment terms",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "Private Label Packaging",
    desc: "Launch your own branded packaging line. We handle material sourcing, production, and quality control — you get finished packaging with your brand identity.",
    benefits: [
      "Full brand customisation",
      "Logo and print integration",
      "Low minimum order quantities",
      "Consistent quality control",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Logistics Support",
    desc: "We coordinate delivery of your packaging orders across Latvia and the wider Baltic-European region, managing logistics to fit your operational schedule.",
    benefits: [
      "Latvia-wide delivery",
      "European export capability",
      "Flexible delivery scheduling",
      "Consolidated shipment options",
    ],
  },
];

const process = [
  { step: "01", title: "Initial Enquiry", desc: "Contact us with your requirements — product type, volume, specifications, and timeline." },
  { step: "02", title: "Consultation & Quote", desc: "Our team reviews your needs, suggests appropriate products, and provides a competitive quotation." },
  { step: "03", title: "Sample & Approval", desc: "For custom orders, we produce samples for your review and approval before full production." },
  { step: "04", title: "Production & Quality Check", desc: "Your order is manufactured to spec with QC checks at every stage." },
  { step: "05", title: "Delivery", desc: "We arrange delivery to your location on a schedule that works for your business." },
  { step: "06", title: "Ongoing Partnership", desc: "We assign a dedicated contact for future orders, reorders, and any support needed." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #C9A15A 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">What We Offer</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Packaging Services
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            From consultation and custom development to bulk supply and logistics — we support every
            stage of your packaging journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="card p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-navy mb-6">
                  {s.icon}
                </div>
                <h3 className="font-heading font-bold text-navy text-xl mb-3">{s.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                <ul className="space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-[#1A1A1A]">
                      <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">How It Works</span>
            <h2 className="section-title mt-3 mx-auto">Our Simple Process</h2>
            <p className="section-subtitle mx-auto text-center">
              From first enquiry to long-term supply — straightforward, transparent, and tailored to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 relative">
                <span className="font-heading text-6xl font-bold text-navy/8 absolute top-4 right-5 select-none">
                  {p.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <span className="text-gold font-bold text-sm">{p.step}</span>
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{p.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Requirements?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get in touch with our team today for a free consultation and competitive quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base px-8 py-4">
              Request a Quote
            </Link>
            <a href="tel:+37129429945" className="btn-outline-white text-base px-8 py-4">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
