"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./language-context";
import { professions } from "@/lib/site-data";
import { professionPages } from "@/lib/profession-data";

export function ProfessionSelector() {
  const { t } = useLanguage();

  return (
    <section className="scroll-fade-in mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
          {t({ gr: "Για κάθε επάγγελμα", en: "For every profession" })}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl font-[var(--font-display)]">
          {t({
            gr: "Σχεδιασμένο για τον τρόπο που δουλεύετε",
            en: "Designed for how you work",
          })}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-muted)]">
          {t({
            gr: "Κάθε επάγγελμα έχει διαφορετική ροή εργασίας. Το Clyro προσαρμόζεται.",
            en: "Every profession has a different workflow. Clyro adapts.",
          })}
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 stagger-children">
        {professions.map((prof) => {
          const pageData = professionPages[prof.key];
          const Icon = pageData.icon;
          return (
            <Link
              key={prof.key}
              href={`/${prof.slug}`}
              className="card-hover group flex flex-col items-center rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-6 text-center shadow-[var(--shadow-card)] transition-all"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                style={{ background: `${pageData.color}14`, color: pageData.color }}
              >
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[var(--color-navy)]">
                {t(prof.label)}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-muted)]">
                {t(prof.strapline)}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--color-blue-dark)] opacity-0 transition-opacity group-hover:opacity-100">
                {t({ gr: "Μάθε περισσότερα", en: "Learn more" })}
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
