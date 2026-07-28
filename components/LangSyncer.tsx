"use client";

import { useEffect } from "react";
import { useT } from "@/lib/i18n";

export function LangSyncer() {
  const { locale } = useT();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
