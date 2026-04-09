"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { CtaBanner } from "@/components/cta-banner";
import { useLanguage } from "@/components/language-context";
import { getFeatureBySlug, featureCategories } from "@/lib/feature-data";
import {
  CalendarMockup,
  PatientsMockup,
  NotesMockup,
  BillingMockup,
  InboxMockup,
  ReportsMockup,
  DashboardMockup,
} from "@/components/app-mockups";
import type { Language } from "@/lib/site-data";

const mockupMap: Record<string, React.FC<{ className?: string }>> = {
  calendar: CalendarMockup,
  patients: PatientsMockup,
  "clinical-notes": NotesMockup,
  billing: BillingMockup,
  communication: InboxMockup,
  reports: ReportsMockup,
  team: DashboardMockup,
  insurance: DashboardMockup,
};

export function FeatureDetailClient({
  language,
  featureSlug,
}: {
  language: Language;
  featureSlug: string;
}) {
  return (
    <PageShell language={language}>
      <FeatureDetailContent slug={featureSlug} />
    </PageShell>
  );
}

function FeatureDetailContent({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const feat = getFeatureBySlug(slug);
  if (!feat) return null;

  const Icon = feat.icon;
  const MockupComp = mockupMap[slug];

  // Find prev/next features for navigation
  const idx = featureCategories.findIndex((f) => f.slug === slug);
  const prev = idx > 0 ? featureCategories[idx - 1] : null;
  const next = idx < featureCategories.length - 1 ? featureCategories[idx + 1] : null;

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/features"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-navy)] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t({ gr: "Δυνατότητες", en: "Features" })}
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: `${feat.color}14`, color: feat.color }}
            >
              <Icon className="h-7 w-7" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: feat.color }}>
              {t(feat.tagline)}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl font-[var(--font-display)] animate-fade-in-up">
              {t(feat.title)}
            </h1>
            <p className="mt-4 max-w-lg text-lg text-[var(--color-muted)] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              {t(feat.heroDescription)}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_-16px_rgba(30,42,56,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-blue-dark)]"
              >
                {t({ gr: "Δοκίμασέ το δωρεάν", en: "Try it free" })}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-text)] transition-all hover:border-[var(--color-blue)]/30"
              >
                {t({ gr: "Δες demo", en: "See demo" })}
              </Link>
            </div>
          </div>

          {/* Mockup */}
          <div className="flex items-center">
            {MockupComp && (
              <div className="animate-float w-full">
                <MockupComp />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
            {t({ gr: "Δυνατότητες", en: "Capabilities" })}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl font-[var(--font-display)]">
            {t({ gr: "Τι περιλαμβάνει", en: "What\u2019s included" })}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {feat.capabilities.map((cap, i) => (
            <article
              key={cap.title.en}
              className="card-hover rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-6 shadow-[var(--shadow-card)]"
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{ background: feat.color }}
              >
                {i + 1}
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-navy)]">
                {t(cap.title)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                {t(cap.description)}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Highlights checklist */}
      <section className="border-y border-[var(--color-border)] bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[var(--color-navy)] font-[var(--font-display)]">
            {t({ gr: "Στα δυνατά σημεία", en: "Key highlights" })}
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {feat.highlights.map((h) => (
              <div key={h.en} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-[var(--color-border)]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white" style={{ background: feat.color }}>
                  <svg viewBox="0 0 12 12" className="h-3 w-3">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-[var(--color-navy)]">{t(h)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-4">
          {prev ? (
            <Link
              href={`/features/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-navy)] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t(prev.title)}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/features/${next.slug}`}
              className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-navy)] transition-colors"
            >
              {t(next.title)}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
