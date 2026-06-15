import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — PrimePack Packaging Solutions",
  description:
    "Browse PrimePack's full range of packaging products including paper bags, plastic bags, stand-up pouches, packaging films, food packaging, and custom solutions.",
};

const categories = [
  {
    id: "paper-bags",
    title: "Paper Bags",
    desc: "Eco-friendly, biodegradable paper bags suitable for retail, food service, and promotional use. Available in kraft, white, and custom printed options.",
    img: "https://images.unsplash.com/photo-1607435097405-db78e1b3ba6c?w=800&q=80",
    specs: ["Kraft & white paper", "SOS & flat bottom styles", "Various handle types", "Custom print available"],
  },
  {
    id: "plastic-bags",
    title: "Plastic Bags",
    desc: "High-strength polyethylene and polypropylene bags for industrial, commercial, and retail use. LDPE and HDPE options available.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    specs: ["LDPE & HDPE options", "Clear & opaque", "Various thicknesses", "Bulk roll and flat pack"],
  },
  {
    id: "stand-up-pouches",
    title: "Stand-Up Pouches",
    desc: "Flexible, resealable stand-up pouches for food, supplements, pet food, and retail products. Excellent barrier properties.",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    specs: ["Resealable zip-lock", "Barrier & foil lining", "Window options", "Custom sizes"],
  },
  {
    id: "packaging-films",
    title: "Packaging Films",
    desc: "Stretch, shrink, and barrier films for product wrapping, pallet securing, and industrial packaging applications.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    specs: ["Stretch & shrink films", "PE, PP, PET options", "Machine & hand grades", "Custom gauge"],
  },
  {
    id: "food-packaging",
    title: "Food Packaging",
    desc: "Food-contact certified packaging materials for bakeries, restaurants, food producers, and FMCG brands.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    specs: ["EU food-safe certified", "Greaseproof options", "Cold & hot food suitable", "Compostable available"],
  },
  {
    id: "industrial-packaging",
    title: "Industrial Packaging",
    desc: "Heavy-duty packaging solutions for manufacturing, construction, chemical, and agricultural industries.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    specs: ["Woven & non-woven bags", "FIBCs / big bags", "Pallet covers", "Heavy-duty poly"],
  },
  {
    id: "custom-packaging",
    title: "Custom Packaging",
    desc: "Bespoke packaging solutions designed and manufactured to your exact specifications — size, material, print, and finish.",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
    specs: ["Full custom sizing", "Private label printing", "Brand colour matching", "Low MOQ options"],
  },
  {
    id: "protective-packaging",
    title: "Protective Packaging",
    desc: "Cushioning, void fill, and protective materials to keep products safe during storage and transit.",
    img: "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?w=800&q=80",
    specs: ["Bubble wrap rolls", "Foam sheets & rolls", "Air pillows", "Void fill paper"],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #C9A15A 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Product Catalog</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Our Packaging Products
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Browse our comprehensive range of packaging materials and solutions. All products
            are available in standard and custom specifications.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-gold text-base px-8 py-4">
              Request a Quote for Any Product
            </Link>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg-gray-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm">
            Looking for specifications or bulk pricing?
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="btn-primary text-sm">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categories.map((cat) => (
              <div key={cat.id} className="card overflow-hidden group">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden">
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-7 flex flex-col justify-between">
                    <div>
                      <h2 className="font-heading font-bold text-navy text-xl mb-3">
                        {cat.title}
                      </h2>
                      <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{cat.desc}</p>
                      <ul className="space-y-1.5">
                        {cat.specs.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-xs text-[#1A1A1A]">
                            <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      className="btn-primary text-xs mt-6 self-start"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Don&apos;t See What You Need?
          </h2>
          <p className="text-white/70 mb-8 text-lg leading-relaxed">
            We offer custom packaging development and sourcing services. Tell us your requirements
            and we&apos;ll find or create the right solution for you.
          </p>
          <Link href="/contact" className="btn-gold text-base px-8 py-4">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
