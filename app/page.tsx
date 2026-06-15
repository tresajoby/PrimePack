"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/i18n";

const productImgs = [
  "https://images.unsplash.com/photo-1607435097405-db78e1b3ba6c?w=600&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
  "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?w=600&q=80",
];

const tickerKeys = [
  "Paper Bags", "Stand-Up Pouches", "Packaging Films", "Custom Solutions",
  "Food Packaging", "Industrial Packaging", "Protective Packaging", "Plastic Bags",
  "Paper Bags", "Stand-Up Pouches", "Packaging Films", "Custom Solutions",
  "Food Packaging", "Industrial Packaging", "Protective Packaging", "Plastic Bags",
];

const trustIcons = [
  <svg key="q" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="c" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
  <svg key="f" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  <svg key="p" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="s" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
];

export default function HomePage() {
  const { t } = useT();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative z-10 px-4 sm:px-6 lg:pl-8 lg:pr-16 pt-36 pb-16 lg:pt-40 lg:pb-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-gold" />
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">{t.hero.badge}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1]">
                {t.hero.line1}
                <br /><span className="text-gold">{t.hero.accent}</span>
                <br />{t.hero.line3}
              </h1>
              <p className="text-white/65 text-[15px] mt-6 max-w-md leading-relaxed">{t.hero.subtitle}</p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn-gold">
                  {t.hero.cta1}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <Link href="/products" className="btn-outline-white">{t.hero.cta2}</Link>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {t.hero.features.map((f) => (
                  <span key={f} className="flex items-center gap-1.5 text-white/50 text-xs border border-white/10 rounded-full px-3 py-1">
                    <span className="w-1 h-1 rounded-full bg-gold/80 flex-shrink-0" />{f}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 lg:h-auto">
              <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80" alt="Industrial packaging facility" fill className="object-cover object-center" priority sizes="(max-width: 1024px) 100vw, 42vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-8 right-6 z-10 bg-navy/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 hidden lg:block">
                <div className="text-2xl font-bold text-white font-heading">500+</div>
                <div className="text-xs text-white/60 mt-0.5">{t.hero.statLabel}</div>
              </div>
              <div className="absolute top-10 right-10 w-20 h-20 border border-gold/20 rounded-full hidden lg:block" />
              <div className="absolute top-14 right-14 w-10 h-10 border border-gold/10 rounded-full hidden lg:block" />
            </div>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* ── Ticker ── */}
      <div className="bg-navy-dark py-3 overflow-hidden border-b border-white/5">
        <div className="flex animate-ticker whitespace-nowrap">
          {tickerKeys.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-6 text-xs font-semibold uppercase tracking-widest text-white/40">
              <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />{item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Trust bar ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-gray-100">
            {t.trust.map((f, i) => (
              <div key={f.title} className="flex items-center gap-3 px-6 py-5">
                <span className="text-gold flex-shrink-0">{trustIcons[i]}</span>
                <div>
                  <p className="font-heading font-bold text-navy text-xs">{f.title}</p>
                  <p className="text-[#6B7280] text-[11px] mt-0.5">{f.desc}</p>
                </div>
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
              <Image src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80" alt="PrimePack warehouse" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute bottom-6 left-6 bg-navy/90 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/10">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest">{t.aboutPreview.badge}</p>
                <p className="text-white font-heading font-bold text-sm mt-0.5">{t.aboutPreview.badgeSub}</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-gold" />
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">{t.aboutPreview.label}</span>
              </div>
              <h2 className="section-title">{t.aboutPreview.heading}</h2>
              <p className="text-[#6B7280] mt-5 leading-relaxed">{t.aboutPreview.p1}</p>
              <p className="text-[#6B7280] mt-4 leading-relaxed">{t.aboutPreview.p2}</p>
              <div className="grid grid-cols-2 gap-3 mt-8">
                {t.aboutPreview.features.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#1A1A1A]">
                    <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/about" className="btn-primary">{t.aboutPreview.cta}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">{t.products.label}</span>
              </div>
              <h2 className="section-title">{t.products.heading}</h2>
            </div>
            <Link href="/products" className="btn-outline flex-shrink-0">{t.products.viewCatalog}</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.products.items.map((cat, i) => (
              <Link key={cat.title} href="/products" className="group relative overflow-hidden rounded-2xl bg-gray-100">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={productImgs[i]} alt={cat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <span className="text-white/70 text-[10px] font-bold">0{i + 1}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading font-bold text-white text-base group-hover:text-gold transition-colors">{cat.title}</h3>
                    <p className="text-white/60 text-xs mt-1 leading-relaxed line-clamp-2">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1 text-gold text-xs font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {t.products.viewCatalog}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-heading font-bold text-[12rem] text-white/[0.03] whitespace-nowrap tracking-widest">PRIMEPACK</span>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">{t.why.label}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white max-w-sm leading-tight">{t.why.heading}</h2>
            <Link href="/about" className="btn-outline-white flex-shrink-0">{t.why.aboutUs}</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {t.why.items.map((item) => (
              <div key={item.num} className="group bg-navy hover:bg-navy-light transition-colors duration-300 p-8 flex gap-5">
                <span className="font-heading text-4xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors flex-shrink-0 leading-none">{item.num}</span>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">{t.industries.label}</span>
          </div>
          <h2 className="section-title mb-12">{t.industries.heading}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.industries.items.map((ind) => (
              <div key={ind.title} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all duration-300">
                <span className="text-3xl block mb-4">{ind.icon}</span>
                <h3 className="font-heading font-bold text-navy group-hover:text-gold transition-colors text-sm">{ind.title}</h3>
                <p className="text-[#6B7280] text-xs mt-1 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full border border-white/5" />
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/5" />
        <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-gold/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold text-xs font-medium tracking-widest uppercase">{t.cta.badge}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
            {t.cta.heading}<br /><span className="text-gold">{t.cta.accent}</span>
          </h2>
          <p className="text-white/60 text-lg mt-6 max-w-xl mx-auto leading-relaxed">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/contact" className="btn-gold text-base px-10 py-4">
              {t.cta.cta1}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <a href="tel:+37129429945" className="btn-outline-white text-base px-10 py-4">{t.cta.cta2}</a>
          </div>
        </div>
      </section>
    </>
  );
}
