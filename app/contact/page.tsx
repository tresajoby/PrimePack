"use client";

import { useT } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const { t } = useT();
  const c = t.contactPage;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #C9A15A 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">{c.heroBadge}</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-4 mb-6">{c.heroH1}</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">{c.heroSubtitle}</p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">{c.infoH2}</h2>
                <p className="text-[#6B7280] text-sm leading-relaxed">{c.infoP}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-sm mb-1">{c.phone}</h3>
                    <a href="tel:+37129429945" className="text-[#6B7280] hover:text-gold transition-colors text-sm">+371 29 429 945</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-sm mb-1">{c.email}</h3>
                    <a href="mailto:PrimePack.lv@gmail.com" className="text-[#6B7280] hover:text-gold transition-colors text-sm">PrimePack.lv@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-sm mb-1">{c.address}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      Salaspils iela 6 K 4 ap.61<br />Riga LV-1057, Latvia
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-sm mb-1">{c.hours}</h3>
                    <p className="text-[#6B7280] text-sm">
                      {c.hoursDetail}<br />
                      <span className="text-[#6B7280]/60">{c.hoursClosed}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-80 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-navy/5">
          <div className="text-center">
            <svg className="w-12 h-12 text-navy/30 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-navy/50 font-medium text-sm">Salaspils iela 6 K 4 ap.61, Riga LV-1057, Latvia</p>
            <a
              href="https://maps.google.com/?q=Salaspils+iela+6,+Riga,+Latvia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-xs font-semibold mt-2 inline-block hover:underline"
            >
              {c.mapLink}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">{c.faqLabel}</span>
            <h2 className="section-title mt-3 mx-auto">{c.faqH2}</h2>
          </div>
          <div className="space-y-4">
            {c.faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-light rounded-2xl p-7">
                <h3 className="font-heading font-bold text-navy mb-3">{faq.q}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
