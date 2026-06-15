import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "About Us — PrimePack Packaging Solutions",
  description:
    "Learn about PrimePack, a Latvia-based B2B packaging supplier dedicated to providing reliable, high-quality packaging solutions for businesses across Europe.",
};

const values = [
  {
    icon: "🏆",
    title: "Quality",
    desc: "We source and supply only materials that meet our strict quality standards and EU certifications.",
  },
  {
    icon: "⚡",
    title: "Reliability",
    desc: "Consistent supply, on-time delivery, and dependable service are the foundation of everything we do.",
  },
  {
    icon: "🤝",
    title: "Integrity",
    desc: "We are transparent in our pricing, honest in our capabilities, and committed to long-term partnerships.",
  },
  {
    icon: "👥",
    title: "Customer Focus",
    desc: "Every customer gets dedicated support and solutions tailored to their specific business requirements.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We continuously expand our product range and services to meet the evolving needs of modern businesses.",
  },
  {
    icon: "🌿",
    title: "Sustainability",
    desc: "We actively expand our range of eco-friendly and sustainable packaging options for businesses committed to reducing environmental impact.",
  },
];

const whyTrust = [
  {
    title: "EU Certified Materials",
    desc: "All packaging products comply with applicable EU directives and food safety regulations.",
  },
  {
    title: "Established Supply Network",
    desc: "We work with vetted manufacturers across Europe to ensure quality and availability.",
  },
  {
    title: "Flexible Minimum Orders",
    desc: "We work with businesses of all sizes — from SMEs to large manufacturers.",
  },
  {
    title: "Dedicated Account Support",
    desc: "Every customer gets a direct contact for ongoing orders, queries, and reorders.",
  },
  {
    title: "Fast Quotation Turnaround",
    desc: "We aim to respond to all quotation requests within one business day.",
  },
  {
    title: "Custom Development",
    desc: "We develop bespoke packaging solutions from concept through to delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #C9A15A 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">About Us</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            About PrimePack
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            A Latvian packaging solutions provider dedicated to helping businesses protect, transport,
            and present their products efficiently.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="section-title mt-3">
                Built Around One Goal: Reliable Packaging Supply
              </h2>
              <p className="text-[#6B7280] mt-6 leading-relaxed">
                PrimePack was founded with a straightforward purpose: to give businesses in Latvia and
                across Europe access to high-quality packaging products at competitive prices, backed by
                consistent supply and professional service.
              </p>
              <p className="text-[#6B7280] mt-4 leading-relaxed">
                We serve a broad range of industries — from food producers and retailers to logistics
                companies and e-commerce brands — providing everything from standard packaging
                materials to fully bespoke custom solutions.
              </p>
              <p className="text-[#6B7280] mt-4 leading-relaxed">
                Based in Riga, Latvia, we combine the agility of a specialist supplier with the
                product depth and supply chain reliability that larger businesses demand.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80"
                alt="PrimePack warehouse facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <svg className="w-32 h-32 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Our Mission</span>
              <h3 className="font-heading text-2xl font-bold text-white mt-3 mb-4">
                Reliable Packaging for Every Business
              </h3>
              <p className="text-white/70 leading-relaxed">
                To provide packaging solutions that help businesses operate efficiently while ensuring
                product protection, presentation quality, and supply reliability — at every scale and
                in every industry.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-5">
                <svg className="w-32 h-32 text-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Our Vision</span>
              <h3 className="font-heading text-2xl font-bold text-navy mt-3 mb-4">
                The Baltic Region&apos;s Most Trusted Packaging Partner
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                To become one of the most trusted packaging suppliers in the Baltic region by
                delivering quality products, dependable service, and long-term value to every
                customer we work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">What Drives Us</span>
            <h2 className="section-title mt-3 mx-auto">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-7 hover:-translate-y-1 transition-transform duration-300">
                <span className="text-3xl">{v.icon}</span>
                <h3 className="font-heading font-bold text-navy mt-4 mb-2 text-lg">{v.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            <StatCounter end={1000} suffix="+" label="Products Available" />
            <StatCounter end={500} suffix="+" label="Business Customers" />
            <StatCounter end={10} suffix="+" label="Product Categories" />
            <StatCounter end={15} suffix=" Countries" label="European Reach" />
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Trust & Reliability</span>
            <h2 className="section-title mt-3 mx-auto">Why Businesses Choose PrimePack</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyTrust.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner With PrimePack?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Contact our team today to discuss your packaging requirements and receive a competitive quotation.
          </p>
          <Link href="/contact" className="btn-gold text-base px-8 py-4">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
