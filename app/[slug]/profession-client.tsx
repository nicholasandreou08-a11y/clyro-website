"use client";

import Link from "next/link";
import { ArrowRight, Check, Shield, Smartphone } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { FeaturesGrid } from "@/components/features-grid";
import { ProductTabs } from "@/components/product-tabs";
import { CtaBanner } from "@/components/cta-banner";
import { useLanguage } from "@/components/language-context";
import { CalendarMockup } from "@/components/app-mockups";
import { professions, type Language, type Profession } from "@/lib/site-data";

export function ProfessionPageClient({
  language,
  profession,
}: {
  language: Language;
  profession: Profession;
}) {
  const { t } = useLanguage();
  const profData = professions.find((p) => p.key === profession) ?? professions[0];

  const trustBadges = [
    { icon: Check, text: t({ gr: "Χωρίς κάρτα", en: "No card required" }) },
    { icon: Shield, text: t({ gr: "GDPR compliant", en: "GDPR compliant" }) },
    { icon: Smartphone, text: t({ gr: "Κάθε συσκευή", en: "Any device" }) },
  ];

  return (
    <PageShell language={language}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_68%)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:px-8 lg:pt-20 lg:pb-24">
          <div className="flex flex-col justify-center">
            <div className="animate-fade-in inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(59,130,246,0.16)] bg-white/80 px-4 py-2 text-sm text-[var(--color-muted)] shadow-[0_12px_30px_-24px_rgba(17,24,39,0.34)]">
              <span className="rounded-full bg-[var(--color-blue)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-blue-dark)]">
                {t({ gr: "Για", en: "For" })}
              </span>
              <span>{t(profData.label)}</span>
            </div>

            <h1 className="mt-6 max-w-xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
              <span className="gradient-text">{t(profData.headline)}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-muted)] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              {t(profData.strapline)}
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

      <FeaturesGrid />
      <ProductTabs />
      <CtaBanner />
    </PageShell>
  );
}
