"use client";

import { useT } from "@/lib/i18n";
import { legalT } from "@/lib/legal-translations";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading font-bold text-navy text-xl mb-3">{title}</h2>
      <div className="text-[#6B7280] text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export default function CookiesPage() {
  const { locale } = useT();
  const c = legalT[locale].cookies;
  const lu = legalT[locale].lastUpdated;

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy mb-2">{c.h1}</h1>
        <p className="text-[#6B7280] text-sm mb-10">{lu}</p>

        <div className="space-y-8">
          <Section title={c.s1t}>{c.s1b}</Section>
          <Section title={c.s2t}>{c.s2b}</Section>

          <Section title={c.s3t}>
            <div className="space-y-4 mt-2">
              <div>
                <h3 className="font-semibold text-navy text-sm">{c.s3e1t}</h3>
                <p>{c.s3e1b}</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy text-sm">{c.s3e2t}</h3>
                <p>{c.s3e2b}</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy text-sm">{c.s3e3t}</h3>
                <p>{c.s3e3b}</p>
              </div>
            </div>
          </Section>

          <Section title={c.s4t}>
            {c.s4b}
            <ul className="list-disc list-inside mt-2 space-y-1">
              {c.s4list.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Section>

          <Section title={c.s5t}>{c.s5b}</Section>
          <Section title={c.s6t}>{c.s6b}</Section>
        </div>
      </div>
    </div>
  );
}
