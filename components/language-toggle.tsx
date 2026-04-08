"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "./language-context";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "rounded-full border border-[var(--color-border)] bg-white p-1 text-xs font-semibold flex",
        className,
      )}
    >
      {(["gr", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          className={cn(
            "rounded-full px-3 py-1.5 transition-colors",
            language === lang
              ? "bg-[var(--color-navy)] text-white"
              : "text-[var(--color-muted)] hover:text-[var(--color-text)]",
          )}
        >
          {lang === "gr" ? "EL" : "EN"}
        </button>
      ))}
    </div>
  );
}
