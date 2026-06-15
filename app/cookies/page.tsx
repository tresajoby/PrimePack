import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — PrimePack",
};

export default function CookiesPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-navy mb-2">Cookie Policy</h1>
        <p className="text-[#6B7280] text-sm mb-10">Last updated: June 2025</p>

        <div className="space-y-8">
          <Section title="What Are Cookies?">
            Cookies are small text files stored on your device when you visit a website. They help
            websites function correctly, remember your preferences, and provide information about
            how visitors use the site.
          </Section>

          <Section title="How We Use Cookies">
            PrimePack uses cookies to improve your browsing experience, analyse website traffic,
            and remember user preferences. We do not use cookies to collect personally identifiable
            information without your consent.
          </Section>

          <Section title="Types of Cookies We Use">
            <div className="space-y-4 mt-2">
              <div>
                <h3 className="font-semibold text-navy text-sm">Essential Cookies</h3>
                <p>Required for the website to function correctly. These cannot be disabled without affecting site functionality.</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy text-sm">Analytics Cookies</h3>
                <p>Help us understand how visitors interact with the website. Data is aggregated and anonymous. We may use tools such as Google Analytics.</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy text-sm">Preference Cookies</h3>
                <p>Remember your settings and preferences for a better browsing experience on return visits.</p>
              </div>
            </div>
          </Section>

          <Section title="Managing Cookies">
            You can manage or disable cookies through your browser settings at any time. Please note
            that disabling certain cookies may affect the functionality of the website. Most modern
            browsers allow you to:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>View cookies currently stored</li>
              <li>Block cookies from specific websites</li>
              <li>Delete all cookies when you close the browser</li>
              <li>Set preferences for specific website cookies</li>
            </ul>
          </Section>

          <Section title="Third-Party Cookies">
            Some pages on our website may include content from third-party services (such as Google
            Maps or analytics platforms) that may set their own cookies. These are governed by the
            respective third party&apos;s cookie policies.
          </Section>

          <Section title="Contact">
            For any questions about our use of cookies, contact us at:
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
