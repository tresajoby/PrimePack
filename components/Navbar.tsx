"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useT, type Locale } from "@/lib/i18n";
import { useCart } from "@/lib/cart";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "lv", label: "LV" },
  { code: "ru", label: "RU" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale, setLocale } = useT();
  const { totalItems, mounted } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.products, href: "/products" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-navy shadow-lg" : "bg-navy/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="PrimePack Logo"
              width={160}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href ? "text-gold" : "text-white/90 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: language switcher + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-0.5 bg-white/8 border border-white/15 rounded-lg p-1">
              {LOCALES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLocale(code)}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wider transition-all duration-200 ${
                    locale === code
                      ? "bg-gold text-navy"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Cart icon */}
            <Link href="/cart" className="relative text-white hover:text-gold transition-colors p-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-navy text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>

            <Link href="/contact" className="btn-gold text-sm">
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gold bg-white/5"
                    : "text-white/90 hover:text-gold hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile language switcher */}
            <div className="px-4 pt-2">
              <div className="flex items-center gap-1 bg-white/8 border border-white/15 rounded-lg p-1 w-fit">
                {LOCALES.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => setLocale(code)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold tracking-wider transition-all duration-200 ${
                      locale === code
                        ? "bg-gold text-navy"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 px-4 flex gap-3">
              <Link href="/cart" className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-white hover:bg-gold hover:text-navy transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {mounted && totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-navy text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </Link>
              <Link href="/contact" className="btn-gold flex-1 justify-center">
                {t.nav.cta}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
