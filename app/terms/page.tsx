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

export default function TermsPage() {
  const { locale } = useT();
  const lt = legalT[locale].terms;
  const lu = legalT[locale].lastUpdated;

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy mb-2">{lt.h1}</h1>
        <p className="text-[#6B7280] text-sm mb-10">{lu}</p>

        <div className="prose prose-navy max-w-none space-y-8 text-[#1A1A1A]">
          {lt.s.map((sec, i) =>
            i === 1 ? (
              <Section key={sec.t} title={sec.t}>
                <p className="not-prose">
                  PrimePack<br />
                  Salaspils iela 6 K 4<br />
                  Riga LV-1057, Latvia<br />
                  Phone: +371 29 429 945<br />
                  Email: PrimePack.lv@gmail.com
                </p>
              </Section>
            ) : (
              <Section key={sec.t} title={sec.t}>{sec.b}</Section>
            )
          )}
        </div>
      </div>
    </div>
  );
}
