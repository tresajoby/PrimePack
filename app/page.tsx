import Image from "next/image";
import Link from "next/link";
import StatCounter from "@/components/StatCounter";

const trustFeatures = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Premium Quality",
    desc: "Certified materials meeting EU standards",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Custom Packaging",
    desc: "Tailored solutions for your exact requirements",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Response",
    desc: "Quick quotes and same-day support",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Competitive Pricing",
    desc: "Best market value without compromising quality",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Reliable Supply",
    desc: "Consistent stock and on-time deliveries",
  },
];

const productCategories = [
  {
    title: "Paper Bags",
    desc: "Eco-friendly and durable paper bags for retail and food industry.",
    img: "https://images.unsplash.com/photo-1607435097405-db78e1b3ba6c?w=600&q=80",
  },
  {
    title: "Plastic Bags",
    desc: "High-strength polyethylene bags for industrial and commercial use.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    title: "Stand-Up Pouches",
    desc: "Resealable pouches ideal for food, supplements, and retail products.",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
  },
  {
    title: "Packaging Films",
    desc: "Stretch, shrink, and barrier films for wrapping and protection.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
  },
  {
    title: "Food Packaging",
    desc: "Safe, certified materials for food production environments.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  },
  {
    title: "Industrial Packaging",
    desc: "Heavy-duty solutions for manufacturing and logistics operations.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    title: "Custom Packaging",
    desc: "Bespoke designs and specifications built to your requirements.",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
  },
  {
    title: "Protective Packaging",
    desc: "Bubble wrap, foam inserts, and cushioning for safe transit.",
    img: "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?w=600&q=80",
  },
];

const whyChoose = [
  {
    icon: "🏭",
    title: "Reliable Supply Chain",
    desc: "We maintain consistent stock levels and partnerships with trusted European manufacturers to ensure uninterrupted supply.",
  },
  {
    icon: "✏️",
    title: "Custom Solutions",
    desc: "From dimensions and materials to print and branding — we develop packaging solutions built precisely for your requirements.",
  },
  {
    icon: "🏆",
    title: "Premium Quality",
    desc: "All our products comply with EU quality and safety standards, backed by technical certifications and rigorous QC.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    desc: "We focus on building long-term business relationships, offering flexible pricing, dedicated account support, and loyalty terms.",
  },
];

const industries = [
  {
    icon: "🍽️",
    title: "Food & Beverage",
    desc: "Food-safe certified packaging for production and retail.",
  },
  {
    icon: "🛒",
    title: "Retail",
    desc: "Branded bags, pouches, and display-ready packaging.",
  },
  {
    icon: "📦",
    title: "E-commerce",
    desc: "Lightweight, protective shipping materials at scale.",
  },
  {
    icon: "⚙️",
    title: "Manufacturing",
    desc: "Industrial-grade bulk packaging for factory environments.",
  },
  {
    icon: "🚚",
    title: "Logistics",
    desc: "Stretch films, palletizing materials, and transit solutions.",
  },
  {
    icon: "🏪",
    title: "Wholesale",
    desc: "Flexible bulk ordering with competitive wholesale pricing.",
  },
];

const testimonials = [
  {
    quote:
      "PrimePack has been an incredibly reliable supplier for our food production facility. The quality of their packaging materials is consistently excellent, and their team always responds quickly.",
    author: "Māris Kalniņš",
    company: "Baltic Food Group",
    role: "Procurement Director",
  },
  {
    quote:
      "We switched to PrimePack for our custom pouch requirements and haven't looked back. Competitive pricing, flexible MOQs, and the custom print quality exceeded our expectations.",
    author: "Laura Bērziņa",
    company: "Nordic Organics",
    role: "Operations Manager",
  },
  {
    quote:
      "As a logistics company, consistent supply is non-negotiable for us. PrimePack delivers on time, every time. Their stretch films and industrial packaging are top quality.",
    author: "Jānis Ozoliņš",
    company: "EuroLogistics LV",
    role: "Supply Chain Lead",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&q=80"
          alt="Industrial packaging facility"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy-dark/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium tracking-wide">
              Latvia&apos;s Trusted B2B Packaging Supplier
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Reliable Packaging
            <span className="text-gold block mt-2">Solutions for Every Business</span>
          </h1>

          <p className="text-white/75 text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
            High-quality packaging materials, custom packaging products, and
            flexible supply solutions for businesses across Latvia and Europe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/contact" className="btn-gold text-base px-8 py-4">
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="/products" className="btn-outline-white text-base px-8 py-4">
              View Products
            </Link>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-14">
            {["Wide Product Range", "Custom Packaging", "Fast Response", "Competitive Pricing", "Reliable Supply"].map(
              (f) => (
                <span
                  key={f}
                  className="flex items-center gap-2 text-white/80 text-sm bg-white/10 rounded-full px-4 py-2"
                >
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </span>
              )
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Trust Indicators ── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {trustFeatures.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl hover:bg-gray-light transition-colors">
                <span className="text-gold">{f.icon}</span>
                <h3 className="font-heading font-bold text-navy text-sm">{f.title}</h3>
                <p className="text-[#6B7280] text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80"
                alt="PrimePack warehouse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/10" />
            </div>

            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">About PrimePack</span>
              <h2 className="section-title mt-3">
                A Trusted Packaging Partner in the Baltic Region
              </h2>
              <p className="section-subtitle">
                PrimePack is a Latvian packaging solutions provider dedicated to helping businesses
                protect, transport, and present their products efficiently. We serve manufacturers,
                food producers, logistics companies, retailers, and e-commerce brands.
              </p>
              <p className="text-[#6B7280] mt-4 leading-relaxed">
                Our mission is simple: provide reliable packaging products, consistent supply,
                competitive pricing, and excellent customer service — whether you need standard
                materials or fully custom-made solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "Wide product range",
                  "Custom sizes & materials",
                  "Competitive pricing",
                  "Reliable supply chain",
                  "Fast customer support",
                  "Sustainable options",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#1A1A1A]">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Our Products</span>
            <h2 className="section-title mt-3 mx-auto">Comprehensive Packaging Range</h2>
            <p className="section-subtitle mx-auto text-center">
              From standard materials to specialist custom solutions — we supply what your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat) => (
              <Link
                key={cat.title}
                href="/products"
                className="group card overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.img}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-navy group-hover:text-gold transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm mt-2 leading-relaxed">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-xs font-semibold mt-4 group-hover:gap-2 transition-all">
                    View Products
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View Full Product Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose PrimePack ── */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Why PrimePack</span>
            <h2 className="section-title mt-3 mx-auto">Built for Business. Focused on Results.</h2>
            <p className="section-subtitle mx-auto text-center">
              We go beyond packaging products — we build partnerships that help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="font-heading font-bold text-navy mt-4 mb-3 text-lg">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Industries We Serve</span>
            <h2 className="section-title mt-3 mx-auto">Packaging Solutions Across Every Sector</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="group flex items-start gap-5 p-7 rounded-2xl border border-gray-100 hover:border-gold/40 hover:bg-navy/[0.02] transition-all duration-300"
              >
                <span className="text-3xl flex-shrink-0">{ind.icon}</span>
                <div>
                  <h3 className="font-heading font-bold text-navy group-hover:text-gold transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm mt-1 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statistics ── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #C9A15A 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Trusted by Businesses Across Europe
            </h2>
            <p className="text-white/60 mt-4 max-w-xl mx-auto">
              Numbers that reflect our commitment to quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            <StatCounter end={1000} suffix="+" label="Products Available" />
            <StatCounter end={500} suffix="+" label="Business Customers" />
            <StatCounter end={10} suffix="+" label="Product Categories" />
            <StatCounter end={15} suffix=" Countries" label="Delivery Range" />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Client Feedback</span>
            <h2 className="section-title mt-3 mx-auto">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-[#6B7280] text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="font-heading font-bold text-navy text-sm">{t.author}</p>
                  <p className="text-[#6B7280] text-xs mt-1">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy to-navy-light opacity-80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
            Need Packaging Solutions
            <span className="text-gold block mt-2">For Your Business?</span>
          </h2>
          <p className="text-white/70 text-xl mt-6 leading-relaxed">
            Our team is ready to help you find the right packaging products and custom solutions
            tailored to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/contact" className="btn-gold text-base px-10 py-4">
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a href="tel:+37129429945" className="btn-outline-white text-base px-10 py-4">
              Call +371 29 429 945
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
