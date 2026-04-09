"use client";

import { useLanguage } from "./language-context";

const stats = [
  {
    value: "8",
    label: { gr: "Modules", en: "Modules" },
    description: { gr: "Ημερολόγιο → Τιμολόγηση → AI", en: "Calendar → Billing → AI" },
  },
  {
    value: "🇬🇷 🇨🇾",
    label: { gr: "Δίγλωσσο", en: "Bilingual" },
    description: { gr: "Ελληνικά & Αγγλικά", en: "Greek & English" },
  },
  {
    value: "GDPR",
    label: { gr: "Συμβατό", en: "Compliant" },
    description: { gr: "EU data, κρυπτογράφηση", en: "EU data, encrypted" },
  },
  {
    value: "2′",
    label: { gr: "Εγγραφή", en: "Signup" },
    description: { gr: "Χωρίς κάρτα", en: "No card needed" },
  },
];

export function StatsBar() {
  const { t } = useLanguage();

  return (
    <section className="scroll-fade-in border-y border-[var(--color-border)] bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label.en} className="text-center">
              <p className="text-3xl font-bold text-[var(--color-navy)] font-[var(--font-display)]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-navy)]">
                {t(stat.label)}
              </p>
              <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                {t(stat.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
