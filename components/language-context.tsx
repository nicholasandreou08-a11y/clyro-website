"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import type { Language } from "@/lib/site-data";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (copy: { gr: string; en: string }) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  initial,
  children,
}: {
  initial: Language;
  children: ReactNode;
}) {
  const [language, setLang] = useState<Language>(initial);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setLanguage = useCallback(
    (next: Language) => {
      setLang(next);
      document.cookie = `clyro-language=${next}; path=/; max-age=31536000; samesite=lax`;
      const params = new URLSearchParams(searchParams.toString());
      params.set("lang", next);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  const t = useCallback(
    (copy: { gr: string; en: string }) => copy[language],
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
