"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "./language-context";
import {
  CalendarMockup,
  PatientsMockup,
  NotesMockup,
  DashboardMockup,
  BillingMockup,
} from "./app-mockups";

const tabs = [
  { key: "calendar", label: { gr: "Ημερολόγιο", en: "Calendar" }, emoji: "📅" },
  { key: "patients", label: { gr: "Ασθενείς", en: "Patients" }, emoji: "👥" },
  { key: "notes", label: { gr: "Σημειώσεις", en: "Notes" }, emoji: "📝" },
  { key: "tasks", label: { gr: "Εργασίες", en: "Tasks" }, emoji: "✅" },
  { key: "billing", label: { gr: "Χρεώσεις", en: "Billing" }, emoji: "💶" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

const mockupMap: Record<TabKey, React.FC<{ className?: string }>> = {
  calendar: CalendarMockup,
  patients: PatientsMockup,
  notes: NotesMockup,
  tasks: DashboardMockup,
  billing: BillingMockup,
};

export function ProductTabs() {
  const { t } = useLanguage();
  const [active, setActive] = useState<TabKey>("calendar");
  const Mockup = mockupMap[active];

  return (
    <section className="scroll-fade-in mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
          {t({ gr: "Ξεναγηθείτε", en: "Product tour" })}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl font-[var(--font-display)]">
          {t({
            gr: "Όλα όσα χρειάζεστε, σε ένα σύστημα",
            en: "Everything you need, in one system",
          })}
        </h2>
        <p className="mt-3 text-base text-[var(--color-muted)] sm:text-lg">
          {t({
            gr: "Εξερευνήστε τα βασικά modules του Clyro.",
            en: "Explore the core modules of Clyro.",
          })}
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
              active === tab.key
                ? "bg-[var(--color-navy)] text-white shadow-[0_8px_20px_-12px_rgba(22,33,45,0.5)]"
                : "border border-[var(--color-border)] bg-white text-[var(--color-muted)] hover:border-[var(--color-blue)]/30 hover:text-[var(--color-navy)]",
            )}
          >
            <span>{tab.emoji}</span>
            {t(tab.label)}
          </button>
        ))}
      </div>

      {/* Mockup */}
      <div className="mt-10 mx-auto max-w-4xl animate-scale-in" key={active}>
        <Mockup />
      </div>
    </section>
  );
}
