import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Returns & Refund Policy — PrimePack",
};

export default function ReturnsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy mb-2">Returns & Refund Policy</h1>
        <p className="text-[#6B7280] text-sm mb-10">Last updated: June 2025</p>

        <div className="space-y-8">
          <Section title="Inspection Upon Delivery">
            All customers are required to inspect products upon delivery. Goods should be checked
            against the order confirmation for quantity, specification, and condition before
            accepting the delivery.
          </Section>

          <Section title="Reporting Defects or Discrepancies">
            If products are found to be defective, damaged during transit, or incorrectly supplied,
            customers must notify PrimePack in writing within 7 business days of the delivery date.
            Claims raised after this period may not be accepted.
            <br /><br />
            To report a claim, please contact us at PrimePack.lv@gmail.com with the following
            information:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Order reference number</li>
              <li>Description of the defect or discrepancy</li>
              <li>Photographic evidence where applicable</li>
              <li>Quantity affected</li>
            </ul>
          </Section>

          <Section title="Custom and Specially Manufactured Products">
            Custom-made or specially manufactured products — including products produced to
            customer-specific sizes, materials, or with customer branding — are generally not
            eligible for return unless they are found to be defective or fail to meet the agreed
            specification.
          </Section>

          <Section title="Returns Process">
            Approved returns must be arranged in advance with PrimePack. Products must be returned
            in their original condition and packaging where possible. Return shipping arrangements
            and costs will be agreed on a case-by-case basis depending on the nature of the claim.
          </Section>

          <Section title="Refunds">
            Approved refunds will be processed using the original payment method where applicable.
            Refund processing times may vary depending on the payment method. PrimePack reserves
            the right to offer replacement goods in lieu of a monetary refund.
          </Section>

          <Section title="Exclusions">
            Returns and refunds will not be accepted for:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Products damaged after delivery due to improper storage or handling</li>
              <li>Products returned without prior written agreement from PrimePack</li>
              <li>Claims raised outside of the 7 business day notification window</li>
            </ul>
          </Section>

          <Section title="Contact">
            For returns enquiries, please contact our team:
            <br />Email: PrimePack.lv@gmail.com
            <br />Phone: +371 29 429 945
          </Section>
        </div>

        <div className="mt-12 p-6 bg-gray-light rounded-2xl">
          <p className="text-[#6B7280] text-sm">
            Have a question about an order or return?{" "}
            <Link href="/contact" className="text-gold font-semibold hover:underline">
              Contact our team
            </Link>{" "}
            and we&apos;ll help resolve it as quickly as possible.
          </p>
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
