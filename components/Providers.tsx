"use client";

import { LanguageProvider } from "@/lib/i18n";
import { CartProvider } from "@/lib/cart";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <CartProvider>{children}</CartProvider>
    </LanguageProvider>
  );
}
