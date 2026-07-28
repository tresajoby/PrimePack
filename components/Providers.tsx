"use client";

import { LanguageProvider } from "@/lib/i18n";
import { CartProvider } from "@/lib/cart";
import { LangSyncer } from "@/components/LangSyncer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LangSyncer />
      <CartProvider>{children}</CartProvider>
    </LanguageProvider>
  );
}
