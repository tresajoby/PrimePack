"use client";

import { useState } from "react";
import { useT } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useT();
  const f = t.form;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xdkongqn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", company: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-navy text-2xl mb-3">{f.successTitle}</h3>
        <p className="text-[#6B7280] text-sm leading-relaxed max-w-sm">{f.successMsg}</p>
        <button onClick={() => setStatus("idle")} className="btn-primary mt-8">{f.sendAnother}</button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
      <h2 className="font-heading text-2xl font-bold text-navy mb-2">{f.title}</h2>
      <p className="text-[#6B7280] text-sm mb-8">{f.subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
              {f.fullName} <span className="text-red-400">*</span>
            </label>
            <input type="text" name="name" required value={form.name} onChange={handleChange}
              placeholder={f.namePlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
              {f.company}
            </label>
            <input type="text" name="company" value={form.company} onChange={handleChange}
              placeholder={f.companyPlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
              {f.emailLabel} <span className="text-red-400">*</span>
            </label>
            <input type="email" name="email" required value={form.email} onChange={handleChange}
              placeholder={f.emailPlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
              {f.phone}
            </label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange}
              placeholder={f.phonePlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy mb-2 uppercase tracking-wide">
            {f.message} <span className="text-red-400">*</span>
          </label>
          <textarea name="message" required value={form.message} onChange={handleChange} rows={6}
            placeholder={f.messagePlaceholder}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none" />
        </div>

        {status === "error" && (
          <p className="text-red-500 text-sm">
            {f.errorMsg}{" "}
            <a href="mailto:PrimePack.lv@gmail.com" className="underline">PrimePack.lv@gmail.com</a>
          </p>
        )}

        <button type="submit" disabled={status === "sending"}
          className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
          {status === "sending" ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {f.sending}
            </>
          ) : (
            <>
              {f.submit}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>

        <p className="text-[#6B7280] text-xs text-center">
          {f.privacyNote}{" "}
          <a href="/privacy" className="text-gold hover:underline">{f.privacyLink}</a>.
        </p>
      </form>
    </div>
  );
}
