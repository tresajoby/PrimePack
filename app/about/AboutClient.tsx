"use client";

import Image from "next/image";
import Link from "next/link";
import StatCounter from "@/components/StatCounter";
import { useT } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useT();
  const a = t.about;

  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #C9A15A 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">{a.heroBadge}</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-6">{a.heroH1}</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">{a.heroSubtitle}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">{a.storyLabel}</span>
              <h2 className="section-title mt-3">{a.storyH2}</h2>
              <p className="text-[#6B7280] mt-6 leading-relaxed">{a.storyP1}</p>
              <p className="text-[#6B7280] mt-4 leading-relaxed">{a.storyP2}</p>
              <p className="text-[#6B7280] mt-4 leading-relaxed">{a.storyP3}</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image src="/about-img.png" alt="PrimePack warehouse facility" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <svg className="w-32 h-32 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest">{a.missionLabel}</span>
              <h3 className="font-heading text-2xl font-bold text-white mt-3 mb-4">{a.missionH3}</h3>
              <p className="text-white/70 leading-relaxed">{a.missionP}</p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-5">
                <svg className="w-32 h-32 text-navy" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest">{a.visionLabel}</span>
              <h3 className="font-heading text-2xl font-bold text-navy mt-3 mb-4">{a.visionH3}</h3>
              <p className="text-[#6B7280] leading-relaxed">{a.visionP}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">{a.valuesLabel}</span>
            <h2 className="section-title mt-3 mx-auto">{a.valuesH2}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.values.map((v) => (
              <div key={v.title} className="card p-7 hover:-translate-y-1 transition-transform duration-300">
                <span className="text-3xl">{v.icon}</span>
                <h3 className="font-heading font-bold text-navy mt-4 mb-2 text-lg">{v.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              { end: 1000, suffix: "+", label: a.statsLabel1 },
              { end: 10, suffix: "+", label: a.statsLabel2 },
              { end: 15, suffix: a.statsSuffix3, label: a.statsLabel3 },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-gold mb-2">
                  <StatCounter end={s.end} suffix={s.suffix} label={s.label} />
                </div>
                <p className="text-white/70 text-xs uppercase tracking-widest font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">{a.trustLabel}</span>
            <h2 className="section-title mt-3 mx-auto">{a.trustH2}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.trust.map((item) => (
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

      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">{a.ctaH2}</h2>
          <p className="text-white/70 mb-8 text-lg">{a.ctaP}</p>
          <Link href="/contact" className="btn-gold text-base px-8 py-4">{a.ctaBtn}</Link>
        </div>
      </section>
    </>
  );
}
