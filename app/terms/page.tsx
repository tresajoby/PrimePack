import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — PrimePack",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy mb-2">Terms & Conditions</h1>
        <p className="text-[#6B7280] text-sm mb-10">Last updated: June 2025</p>

        <div className="prose prose-navy max-w-none space-y-8 text-[#1A1A1A]">
          <Section title="1. Introduction">
            Welcome to PrimePack. By accessing and using this website, you agree to comply with and
            be bound by these Terms and Conditions. Please read them carefully before using our
            website or services.
          </Section>

          <Section title="2. Company Information">
            <p className="not-prose">
              PrimePack<br />
              Salaspils iela 6 K 4 ap.61<br />
              Riga LV-1057, Latvia<br />
              Phone: +371 29 429 945<br />
              Email: PrimePack.lv@gmail.com
            </p>
          </Section>

          <Section title="3. Products and Services">
            All product descriptions, specifications, dimensions, and availability information are
            provided for informational purposes and may be updated without notice. Product images are
            illustrative only and may not exactly represent the delivered product.
          </Section>

          <Section title="4. Pricing">
            Prices displayed on the website are indicative and may change without prior notice. All
            formal quotations remain valid only for the period specified within the quotation
            document. Prices exclude applicable taxes and delivery charges unless stated otherwise.
          </Section>

          <Section title="5. Orders">
            Submission of an enquiry or order request does not constitute a binding order. Orders
            are confirmed only upon written acceptance by PrimePack. PrimePack reserves the right
            to accept or reject any order at its sole discretion.
          </Section>

          <Section title="6. Payment">
            Payment terms will be agreed upon separately with each customer unless otherwise stated
            in a quotation or contract. PrimePack reserves the right to require payment in advance
            for new customers or large orders.
          </Section>

          <Section title="7. Delivery">
            Delivery times provided are estimates only. PrimePack shall not be liable for delays
            caused by suppliers, carriers, customs authorities, or events beyond our reasonable
            control, including force majeure events.
          </Section>

          <Section title="8. Returns and Claims">
            Customers should inspect all goods upon receipt. Any defects, damages, or discrepancies
            must be reported to PrimePack in writing within 7 business days of delivery.
            PrimePack will not accept claims raised after this period.
          </Section>

          <Section title="9. Limitation of Liability">
            PrimePack&apos;s total liability to any customer in connection with any order shall be
            limited to the value of the products supplied under that order. We shall not be liable
            for indirect or consequential losses.
          </Section>

          <Section title="10. Intellectual Property">
            All website content, logos, graphics, text, and materials are the property of PrimePack
            unless otherwise stated and may not be reproduced without written permission.
          </Section>

          <Section title="11. Governing Law">
            These Terms and Conditions are governed by the laws of the Republic of Latvia. Any
            disputes shall be subject to the exclusive jurisdiction of Latvian courts.
          </Section>

          <Section title="12. Contact">
            For any questions regarding these Terms, please contact us at:
            <br />PrimePack.lv@gmail.com · +371 29 429 945
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading font-bold text-navy text-xl mb-3">{title}</h2>
      <div className="text-[#6B7280] text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
