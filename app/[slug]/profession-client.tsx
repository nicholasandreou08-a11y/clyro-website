"use client";

import Link from "next/link";
import { ArrowRight, Check, Shield, Smartphone } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { ProductTabs } from "@/components/product-tabs";
import { CtaBanner } from "@/components/cta-banner";
import { WorkflowSteps } from "@/components/workflow-steps";
import { FeatureSection } from "@/components/feature-section";
import { useLanguage } from "@/components/language-context";
import { professions, type Language, type Profession } from "@/lib/site-data";
import { professionPages } from "@/lib/profession-data";
import { getFeatureBySlug } from "@/lib/feature-data";
import {
  CalendarMockup,
  PatientsMockup,
  NotesMockup,
  BillingMockup,
  InboxMockup,
  ReportsMockup,
  DashboardMockup,
} from "@/components/app-mockups";

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

export function ProfessionPageClient({
  language,
  profession,
}: {
  language: Language;
  profession: Profession;
}) {
  return (
    <PageShell language={language}>
      <ProfessionContent profession={profession} />
    </PageShell>
  );
}

function ProfessionContent({ profession }: { profession: Profession }) {
  const { t } = useLanguage();
  const profData = professions.find((p) => p.key === profession) ?? professions[0];
  const pageData = professionPages[profession];
  const HeroIcon = pageData.icon;

  const trustBadges = [
    { icon: Check, text: t({ gr: "Χωρίς κάρτα", en: "No card required" }) },
    { icon: Shield, text: t({ gr: "GDPR compliant", en: "GDPR compliant" }) },
    { icon: Smartphone, text: t({ gr: "Κάθε συσκευή", en: "Any device" }) },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_68%)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:px-8 lg:pt-20 lg:pb-24">
          <div className="flex flex-col justify-center">
            <div className="animate-fade-in inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(59,130,246,0.16)] bg-white/80 px-4 py-2 text-sm text-[var(--color-muted)] shadow-[0_12px_30px_-24px_rgba(17,24,39,0.34)]">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full"
                style={{ background: `${pageData.color}14`, color: pageData.color }}
              >
                <HeroIcon className="h-3.5 w-3.5" />
              </span>
              <span>{t(pageData.heroSubtitle)}</span>
            </div>

            <h1 className="mt-6 max-w-xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
              <span className="gradient-text">{t(pageData.heroTitle)}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-muted)] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              {t(pageData.heroDescription)}
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

            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.text} className="flex items-center gap-1.5 text-sm text-[var(--color-muted)]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)]">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {badge.text}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 flex items-center lg:mt-0">
            <div className="animate-float w-full">
              <CalendarMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow steps */}
      <section className="scroll-fade-in mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: pageData.color }}>
            {t({ gr: "Η ροή εργασίας σας", en: "Your workflow" })}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl font-[var(--font-display)]">
            {t({
              gr: "Από το πρώτο ραντεβού μέχρι την ολοκλήρωση",
              en: "From first appointment to completion",
            })}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-muted)]">
            {t({
              gr: "Κάθε βήμα οργανωμένο σε ένα σύστημα. Χωρίς χαμένα αρχεία, χωρίς ξεχασμένα follow-ups.",
              en: "Every step organised in one system. No lost files, no forgotten follow-ups.",
            })}
          </p>
        </div>
        <WorkflowSteps steps={pageData.workflowSteps} />
      </section>

      {/* Feature highlights — profession-specific deep-dives */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface-soft)]/50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
              {t({ gr: "Βασικές δυνατότητες", en: "Key features" })}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl font-[var(--font-display)]">
              {t({
                gr: `Γιατί οι ${t(profData.label).toLowerCase()} επιλέγουν Clyro`,
                en: `Why ${t(profData.label).toLowerCase()} choose Clyro`,
              })}
            </h2>
          </div>

          <div className="space-y-20">
            {pageData.featureHighlights.map((highlight, idx) => {
              const featureCat = getFeatureBySlug(highlight.featureSlug);
              if (!featureCat) return null;
              const MockupComp = mockupMap[highlight.featureSlug];
              return (
                <FeatureSection
                  key={highlight.featureSlug}
                  icon={featureCat.icon}
                  color={featureCat.color}
                  title={highlight.title}
                  description={highlight.description}
                  highlights={featureCat.highlights.slice(0, 4)}
                  href={`/features/${highlight.featureSlug}`}
                  reverse={idx % 2 === 1}
                  mockup={MockupComp ? <MockupComp /> : undefined}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {pageData.testimonials.length > 0 && (
        <section className="scroll-fade-in mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
              {t({ gr: "Τι λένε οι χρήστες", en: "What users say" })}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--color-navy)] sm:text-3xl font-[var(--font-display)]">
              {t({
                gr: "Αγαπημένο από επαγγελματίες",
                en: "Loved by professionals",
              })}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {pageData.testimonials.map((item) => (
              <article
                key={item.name}
                className="card-hover rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-6 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm leading-6 text-[var(--color-muted)] italic">
                  &ldquo;{t(item.quote)}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface-soft)] text-lg">
                    {item.emoji}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-navy)]">{item.name}</p>
                    <p className="text-xs text-[var(--color-muted)]">{t(item.role)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Pricing teaser */}
      <section className="border-y border-[var(--color-border)] bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] font-[var(--font-display)]">
            {t({ gr: "Ξεκινήστε δωρεάν", en: "Start for free" })}
          </h2>
          <p className="mt-3 text-base text-[var(--color-muted)]">
            {t({
              gr: "Το Free πλάνο περιλαμβάνει ραντεβού, ασθενείς και σημειώσεις. Αναβαθμίστε όταν χρειαστείτε περισσότερα.",
              en: "The Free plan includes appointments, patients, and notes. Upgrade when you need more.",
            })}
          </p>
          <Link
            href="/pricing"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-all hover:border-[var(--color-blue)]/30"
          >
            {t({ gr: "Δες τιμολόγηση", en: "View pricing" })}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Profession-specific CTA */}
      <section className="scroll-fade-in mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[var(--color-navy)] px-8 py-16 text-center shadow-[0_32px_64px_-24px_rgba(22,33,45,0.5)] sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(46,196,182,0.15),transparent_50%)]" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-[var(--font-display)]">
              {t(pageData.ctaTitle)}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/70 sm:text-lg">
              {t(pageData.ctaSubtitle)}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)] shadow-[0_12px_24px_-16px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-0.5"
              >
                {t({ gr: "Δοκίμασέ το δωρεάν", en: "Try it free" })}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
              >
                {t({ gr: "Δες demo", en: "See demo" })}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
