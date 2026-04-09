"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./language-context";
import { featureCategories } from "@/lib/feature-data";

export function FeatureShowcase() {
  const { t } = useLanguage();

  // Show top 8 feature categories
  return (
    <section className="scroll-fade-in mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
          {t({ gr: "Δυνατότητες", en: "Features" })}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl font-[var(--font-display)]">
          {t({
            gr: "Ό,τι χρειάζεται το ιατρείο σας",
            en: "Everything your practice needs",
          })}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-muted)]">
          {t({
            gr: "Ένα σύστημα, μηδέν βάρος.",
            en: "One system, zero overhead.",
          })}
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
        {featureCategories.map((feat) => {
          const Icon = feat.icon;
          return (
            <Link
              key={feat.slug}
              href={`/features/${feat.slug}`}
              className="card-hover group rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-6 shadow-[var(--shadow-card)] transition-all"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                style={{ background: `${feat.color}14`, color: feat.color }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-navy)]">
                {t(feat.title)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                {t(feat.description)}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--color-blue-dark)] opacity-0 transition-opacity group-hover:opacity-100">
                {t({ gr: "Μάθε περισσότερα", en: "Learn more" })}
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/features"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-all hover:border-[var(--color-blue)]/30 hover:bg-[var(--color-surface-soft)]"
        >
          {t({ gr: "Δες όλες τις δυνατότητες", en: "See all features" })}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
