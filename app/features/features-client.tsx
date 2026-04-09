"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { CtaBanner } from "@/components/cta-banner";
import { FeatureSection } from "@/components/feature-section";
import { useLanguage } from "@/components/language-context";
import { featureCategories, additionalFeatures } from "@/lib/feature-data";
import {
  CalendarMockup,
  PatientsMockup,
  NotesMockup,
  BillingMockup,
  InboxMockup,
  ReportsMockup,
} from "@/components/app-mockups";
import type { Language } from "@/lib/site-data";

const mockupMap: Record<string, React.FC<{ className?: string }>> = {
  calendar: CalendarMockup,
  patients: PatientsMockup,
  "clinical-notes": NotesMockup,
  billing: BillingMockup,
  communication: InboxMockup,
  reports: ReportsMockup,
};

export function FeaturesPageClient({ language }: { language: Language }) {
  return (
    <PageShell language={language}>
      <FeaturesContent />
    </PageShell>
  );
}

function FeaturesContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
          {t({ gr: "Δυνατότητες", en: "Features" })}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl font-[var(--font-display)] animate-fade-in-up">
          {t({
            gr: "Ό,τι χρειάζεται το ιατρείο σας",
            en: "Everything your practice needs",
          })}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-muted)] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          {t({
            gr: "Ένα πλήρες σύστημα — ημερολόγιο, ασθενείς, κλινικές σημειώσεις, τιμολόγηση, επικοινωνία, αναφορές, ομάδα και ασφαλιστικές αξιώσεις.",
            en: "A complete system — calendar, patients, clinical notes, billing, communication, reports, team management, and insurance claims.",
          })}
        </p>
      </section>

      {/* Quick jump nav */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {featureCategories.map((feat) => {
            const Icon = feat.icon;
            return (
              <a
                key={feat.slug}
                href={`#${feat.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-blue)]/30 hover:text-[var(--color-navy)]"
              >
                <Icon className="h-3.5 w-3.5" style={{ color: feat.color }} />
                {t(feat.title)}
              </a>
            );
          })}
        </div>
      </section>

      {/* Feature category deep-dives */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 py-16">
          {featureCategories.map((feat, idx) => {
            const MockupComp = mockupMap[feat.slug];
            return (
              <div key={feat.slug} id={feat.slug} className="scroll-mt-24">
                <FeatureSection
                  icon={feat.icon}
                  color={feat.color}
                  title={feat.title}
                  description={feat.heroDescription}
                  highlights={feat.highlights}
                  href={`/features/${feat.slug}`}
                  reverse={idx % 2 === 1}
                  mockup={MockupComp ? <MockupComp /> : undefined}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional features grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
            {t({ gr: "Και ακόμη περισσότερα", en: "And even more" })}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--color-navy)] sm:text-3xl font-[var(--font-display)]">
            {t({ gr: "Επιπλέον λειτουργίες", en: "Additional features" })}
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
          {additionalFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <article
                key={feat.title.en}
                className="card-hover rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-6 shadow-[var(--shadow-card)]"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: `${feat.color}14`, color: feat.color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[var(--color-navy)]">
                  {t(feat.title)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {t(feat.body)}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Feature comparison teaser */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-[var(--color-navy)] font-[var(--font-display)]">
          {t({ gr: "Σύγκρινε τα πλάνα", en: "Compare plans" })}
        </h2>
        <p className="mt-3 text-base text-[var(--color-muted)]">
          {t({
            gr: "Δες ποιες δυνατότητες περιλαμβάνονται σε κάθε πλάνο.",
            en: "See which features are included in each plan.",
          })}
        </p>
        <Link
          href="/pricing"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_-16px_rgba(30,42,56,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-blue-dark)]"
        >
          {t({ gr: "Δες τιμολόγηση", en: "View pricing" })}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <CtaBanner />
    </>
  );
}
