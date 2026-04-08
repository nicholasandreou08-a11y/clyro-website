"use client";

import Link from "next/link";
import { ArrowRight, Play, Monitor, Shield, Clock } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { ProductTabs } from "@/components/product-tabs";
import { useLanguage } from "@/components/language-context";
import type { Language } from "@/lib/site-data";

const steps = [
  {
    icon: Play,
    color: "#3B82F6",
    title: { gr: "Πάτα Demo", en: "Click Demo" },
    body: {
      gr: "Μπες στο σύστημα αμέσως με demo δεδομένα. Χωρίς εγγραφή.",
      en: "Enter the system instantly with demo data. No signup needed.",
    },
  },
  {
    icon: Monitor,
    color: "#2EC4B6",
    title: { gr: "Εξερεύνησε", en: "Explore" },
    body: {
      gr: "Δοκίμασε ημερολόγιο, ασθενείς, σημειώσεις, χρεώσεις — όλα πραγματικά.",
      en: "Try calendar, patients, notes, billing — all real features.",
    },
  },
  {
    icon: Shield,
    color: "#16A34A",
    title: { gr: "Χωρίς κίνδυνο", en: "No risk" },
    body: {
      gr: "Τα demo δεδομένα επαναφέρονται κάθε 24 ώρες. Κανένα ρίσκο.",
      en: "Demo data resets every 24 hours. Zero risk.",
    },
  },
  {
    icon: Clock,
    color: "#F59E0B",
    title: { gr: "2 λεπτά", en: "2 minutes" },
    body: {
      gr: "Αρκετά για να καταλάβεις αν ταιριάζει στο πρόγραμμά σου.",
      en: "Enough to see if it fits your workflow.",
    },
  },
];

export function DemoPageClient({ language }: { language: Language }) {
  return (
    <PageShell language={language}>
      <DemoContent />
    </PageShell>
  );
}

function DemoContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
          {t({ gr: "Demo", en: "Demo" })}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl font-[var(--font-display)] animate-fade-in-up">
          {t({
            gr: "Δοκίμασε το Clyro τώρα",
            en: "Try Clyro now",
          })}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-muted)] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          {t({
            gr: "Μπες στο σύστημα με demo δεδομένα — ραντεβού, ασθενείς, σημειώσεις — χωρίς εγγραφή.",
            en: "Enter the system with demo data — appointments, patients, notes — no signup required.",
          })}
        </p>
        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <Link
            href="https://my.clyroapp.com?demo=true"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_32px_-16px_rgba(30,42,56,0.5)] transition-all hover:-translate-y-1 hover:bg-[var(--color-blue-dark)] hover:shadow-[0_20px_40px_-16px_rgba(30,42,56,0.55)] animate-pulse-glow"
          >
            <Play className="h-5 w-5" />
            {t({ gr: "Μπες στο Demo", en: "Launch Demo" })}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title.en}
                className="card-hover rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl"
                    style={{ background: `${step.color}14`, color: step.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl font-bold text-[var(--color-border)]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-[var(--color-navy)]">
                  {t(step.title)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {t(step.body)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Product preview */}
      <ProductTabs />
    </>
  );
}
