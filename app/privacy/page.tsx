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

export default function PrivacyPage() {
  const { locale } = useT();
  const p = legalT[locale].privacy;
  const lu = legalT[locale].lastUpdatedGdpr;

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy mb-2">{p.h1}</h1>
        <p className="text-[#6B7280] text-sm mb-10">{lu}</p>

        <div className="space-y-8">
          <Section title={p.s1t}>{p.s1b}</Section>

          <Section title={p.s2t}>
            {p.s2b}
            <ul className="list-disc list-inside mt-2 space-y-1">
              {p.s2list.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Section>

          <Section title={p.s3t}>
            {p.s3b}
            <ul className="list-disc list-inside mt-2 space-y-1">
              {p.s3list.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Section>

          <Section title={p.s4t}>{p.s4b}</Section>
          <Section title={p.s5t}>{p.s5b}</Section>
          <Section title={p.s6t}>{p.s6b}</Section>

          <Section title={p.s7t}>
            {p.s7b}
            <ul className="list-disc list-inside mt-2 space-y-1">
              {p.s7list.map((item) => <li key={item}>{item}</li>)}
            </ul>
            {p.s7trailing}
          </Section>

          <Section title={p.s8t}>{p.s8b}</Section>
          <Section title={p.s9t}>{p.s9b}</Section>
        </div>
      </div>
    </div>
  );
}
