"use client";

import Link from "next/link";
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

export default function ReturnsPage() {
  const { locale } = useT();
  const r = legalT[locale].returns;
  const lu = legalT[locale].lastUpdated;

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy mb-2">{r.h1}</h1>
        <p className="text-[#6B7280] text-sm mb-10">{lu}</p>

        <div className="space-y-8">
          <Section title={r.s1t}>{r.s1b}</Section>

          <Section title={r.s2t}>
            {r.s2b}
            <ul className="list-disc list-inside mt-2 space-y-1">
              {r.s2list.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Section>

          <Section title={r.s3t}>{r.s3b}</Section>
          <Section title={r.s4t}>{r.s4b}</Section>
          <Section title={r.s5t}>{r.s5b}</Section>

          <Section title={r.s6t}>
            {r.s6b}
            <ul className="list-disc list-inside mt-2 space-y-1">
              {r.s6list.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Section>

          <Section title={r.s7t}>{r.s7b}</Section>
        </div>

        <div className="mt-12 p-6 bg-gray-light rounded-2xl">
          <p className="text-[#6B7280] text-sm">
            {r.ctaText}{" "}
            <Link href="/contact" className="text-gold font-semibold hover:underline">{r.ctaLink}</Link>{" "}
            {r.ctaSuffix}
          </p>
        </div>
      </div>
    </div>
  );
}
