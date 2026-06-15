import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PrimePack",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy mb-2">Privacy Policy</h1>
        <p className="text-[#6B7280] text-sm mb-10">Last updated: June 2025 · GDPR Compliant</p>

        <div className="space-y-8">
          <Section title="Who We Are">
            PrimePack respects your privacy and is committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard your information when you
            visit our website or use our services.
          </Section>

          <Section title="Data We Collect">
            We may collect the following personal data when you contact us or use our website:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Full name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and delivery information</li>
              <li>Website usage data (via cookies)</li>
            </ul>
          </Section>

          <Section title="How We Use Your Data">
            We use your personal data for the following purposes:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>To respond to enquiries and quotation requests</li>
              <li>To process and fulfil orders</li>
              <li>To provide customer support</li>
              <li>To improve website performance and user experience</li>
              <li>To meet our legal and regulatory obligations</li>
            </ul>
          </Section>

          <Section title="Legal Basis for Processing">
            We process your personal data on the following legal bases under GDPR: contract
            performance, legitimate interests, legal obligation, and — where applicable — your
            explicit consent.
          </Section>

          <Section title="Data Retention">
            We retain personal data only for as long as necessary for business and legal purposes.
            Transaction records may be retained for up to 7 years in accordance with Latvian
            accounting and tax law.
          </Section>

          <Section title="Data Sharing">
            We do not sell your personal data. We may share data with trusted third-party service
            providers (e.g. email, logistics, payment processing) only to the extent necessary to
            fulfil our services. All third parties are required to handle your data securely and in
            compliance with applicable laws.
          </Section>

          <Section title="Your Rights Under GDPR">
            As a data subject, you have the following rights:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
            To exercise any of these rights, please contact us at PrimePack.lv@gmail.com.
          </Section>

          <Section title="Data Security">
            We implement appropriate technical and organisational measures to protect your personal
            data against unauthorised access, loss, or alteration.
          </Section>

          <Section title="Contact">
            PrimePack · Salaspils iela 6 K 4 ap.61, Riga LV-1057, Latvia
            <br />Email: PrimePack.lv@gmail.com · Phone: +371 29 429 945
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
