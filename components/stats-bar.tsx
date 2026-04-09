"use client";

import { useLanguage } from "./language-context";

const stats = [
  {
    value: "5",
    label: { gr: "Επαγγέλματα", en: "Professions" },
    description: { gr: "Φυσιοθεραπευτές, γιατροί, διαιτολόγοι, ψυχολόγοι, κλινικές", en: "Physios, doctors, dieticians, psychologists, clinics" },
  },
  {
    value: "2",
    label: { gr: "Γλώσσες", en: "Languages" },
    description: { gr: "Πλήρης υποστήριξη Ελληνικών & Αγγλικών", en: "Full Greek & English support" },
  },
  {
    value: "20+",
    label: { gr: "Modules", en: "Modules" },
    description: { gr: "Ημερολόγιο, ασθενείς, σημειώσεις, τιμολόγηση, AI & πολλά ακόμη", en: "Calendar, patients, notes, billing, AI & many more" },
  },
  {
    value: "2min",
    label: { gr: "Εγγραφή", en: "Signup" },
    description: { gr: "Χωρίς κάρτα, χωρίς δεσμεύσεις", en: "No card, no commitments" },
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
