"use client";

import Link from "next/link";
import { ArrowRight, Check, Shield, Smartphone, Clock } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { useLanguage } from "@/components/language-context";
import { CalendarMockup } from "@/components/app-mockups";
import type { Language } from "@/lib/site-data";

const trustBadges = [
  { icon: Check, text: { gr: "Χωρίς κάρτα", en: "No card required" } },
  { icon: Clock, text: { gr: "Έτοιμο σε 2 λεπτά", en: "Ready in 2 minutes" } },
  { icon: Shield, text: { gr: "GDPR compliant", en: "GDPR compliant" } },
  { icon: Smartphone, text: { gr: "Κάθε συσκευή", en: "Any device" } },
];

export function SignupPageClient({ language }: { language: Language }) {
  const { t } = useLanguage();

  return (
    <PageShell language={language}>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Left: signup CTA */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl font-[var(--font-display)] animate-fade-in-up">
            {t({
              gr: "Ξεκίνα δωρεάν",
              en: "Start free",
            })}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-[var(--color-muted)] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {t({
              gr: "Δημιούργησε τον λογαριασμό σου σε 2 λεπτά. Δοκίμασε όλα τα features χωρίς δεσμεύσεις.",
              en: "Create your account in 2 minutes. Try all features with no commitments.",
            })}
          </p>

          {/* Redirect to Clerk signup on my.clyroapp.com */}
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Link
              href="https://my.clyroapp.com/sign-up"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_32px_-16px_rgba(30,42,56,0.5)] transition-all hover:-translate-y-1 hover:bg-[var(--color-blue-dark)] hover:shadow-[0_20px_40px_-16px_rgba(30,42,56,0.55)]"
            >
              {t({ gr: "Δημιουργία λογαριασμού", en: "Create account" })}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <p className="mt-4 text-sm text-[var(--color-muted)] animate-fade-in-up" style={{ animationDelay: "250ms" }}>
            {t({
              gr: "Ήδη έχεις λογαριασμό; ",
              en: "Already have an account? ",
            })}
            <Link
              href="https://my.clyroapp.com"
              className="font-semibold text-[var(--color-blue-dark)] hover:underline"
            >
              {t({ gr: "Σύνδεση", en: "Log in" })}
            </Link>
          </p>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.text.en}
                  className="flex items-center gap-1.5 text-sm text-[var(--color-muted)]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)]">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {t(badge.text)}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: mockup */}
        <div className="mt-12 flex items-center lg:mt-0">
          <div className="animate-float w-full">
            <CalendarMockup />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
