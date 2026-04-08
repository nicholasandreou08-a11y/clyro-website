"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageShell } from "@/components/page-shell";
import { CtaBanner } from "@/components/cta-banner";
import { useLanguage } from "@/components/language-context";
import type { Language } from "@/lib/site-data";

const plans = [
  {
    name: { gr: "Starter", en: "Starter" },
    price: { gr: "Δωρεάν", en: "Free" },
    period: { gr: "", en: "" },
    description: {
      gr: "Ιδανικό για να ξεκινήσεις και να δοκιμάσεις το σύστημα.",
      en: "Perfect to get started and try the system.",
    },
    features: {
      gr: [
        "Ημερολόγιο ραντεβού",
        "Μέχρι 20 ασθενείς",
        "Βασικές σημειώσεις",
        "1 χρήστης",
        "Email υποστήριξη",
      ],
      en: [
        "Appointment calendar",
        "Up to 20 patients",
        "Basic notes",
        "1 user",
        "Email support",
      ],
    },
    featured: false,
    cta: { gr: "Ξεκίνα δωρεάν", en: "Start free" },
  },
  {
    name: { gr: "Pro", en: "Pro" },
    price: { gr: "€29", en: "€29" },
    period: { gr: "/ μήνα", en: "/ month" },
    description: {
      gr: "Πλήρες σύστημα για καθημερινή χρήση.",
      en: "Full system for daily use.",
    },
    features: {
      gr: [
        "Απεριόριστοι ασθενείς",
        "Κλινικές σημειώσεις SOAP",
        "SMS & WhatsApp υπενθυμίσεις",
        "Χρεώσεις & τιμολόγηση",
        "Body chart",
        "Εργασίες & reminders",
        "3 χρήστες",
        "Priority υποστήριξη",
      ],
      en: [
        "Unlimited patients",
        "SOAP clinical notes",
        "SMS & WhatsApp reminders",
        "Billing & invoicing",
        "Body chart",
        "Tasks & reminders",
        "3 users",
        "Priority support",
      ],
    },
    featured: true,
    cta: { gr: "Δοκίμασέ το δωρεάν", en: "Try it free" },
  },
  {
    name: { gr: "Clinic", en: "Clinic" },
    price: { gr: "Custom", en: "Custom" },
    period: { gr: "", en: "" },
    description: {
      gr: "Για ομάδες με πολλούς χρήστες και πολλαπλές κλινικές.",
      en: "For teams with multiple users and clinics.",
    },
    features: {
      gr: [
        "Όλα του Pro",
        "Απεριόριστοι χρήστες",
        "Πολλαπλές κλινικές",
        "Κοινό ημερολόγιο",
        "Ρόλοι πρόσβασης",
        "Audit trail",
        "Dedicated onboarding",
        "SLA υποστήριξη",
      ],
      en: [
        "Everything in Pro",
        "Unlimited users",
        "Multiple clinics",
        "Shared calendar",
        "Access roles",
        "Audit trail",
        "Dedicated onboarding",
        "SLA support",
      ],
    },
    featured: false,
    cta: { gr: "Επικοινώνησε μαζί μας", en: "Contact us" },
  },
];

export function PricingPageClient({ language }: { language: Language }) {
  const { language: lang, t } = useLanguage();

  return (
    <PageShell language={language}>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
          {t({ gr: "Τιμολόγηση", en: "Pricing" })}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl font-[var(--font-display)] animate-fade-in-up">
          {t({
            gr: "Απλή, διαφανής τιμολόγηση",
            en: "Simple, transparent pricing",
          })}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-muted)] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          {t({
            gr: "Ξεκίνα δωρεάν. Αναβάθμισε όταν είσαι έτοιμος.",
            en: "Start free. Upgrade when you're ready.",
          })}
        </p>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3 stagger-children">
          {plans.map((plan) => (
            <div
              key={plan.name.en}
              className={cn(
                "relative rounded-[var(--radius-card)] border p-8 transition-all",
                plan.featured
                  ? "border-[var(--color-blue)]/30 bg-white shadow-[0_24px_60px_-20px_rgba(59,130,246,0.2)] scale-[1.02]"
                  : "border-white/70 bg-white/90 shadow-[var(--shadow-card)]",
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-blue)] px-4 py-1 text-xs font-semibold text-white">
                  {t({ gr: "Δημοφιλές", en: "Popular" })}
                </div>
              )}
              <p className="text-sm font-semibold text-[var(--color-muted)]">
                {t(plan.name)}
              </p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[var(--color-navy)]">
                  {t(plan.price)}
                </span>
                {plan.period.en && (
                  <span className="text-sm text-[var(--color-muted)]">
                    {t(plan.period)}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                {t(plan.description)}
              </p>
              <ul className="mt-6 space-y-3">
                {(lang === "gr" ? plan.features.gr : plan.features.en).map((feature: string) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[var(--color-text)]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-success)]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.name.en === "Clinic" ? "/contact" : "/signup"}
                className={cn(
                  "mt-8 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5",
                  plan.featured
                    ? "bg-[var(--color-navy)] text-white shadow-[0_12px_24px_-16px_rgba(30,42,56,0.45)] hover:bg-[var(--color-blue-dark)]"
                    : "border border-[var(--color-border)] bg-white text-[var(--color-navy)] hover:border-[var(--color-blue)]/30",
                )}
              >
                {t(plan.cta)}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ-style trust section */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-[var(--color-navy)] font-[var(--font-display)]">
          {t({ gr: "Συχνές ερωτήσεις", en: "Frequently asked" })}
        </h2>
        <div className="mt-8 space-y-4">
          {[
            {
              q: { gr: "Χρειάζεται κάρτα για εγγραφή;", en: "Do I need a card to sign up?" },
              a: { gr: "Όχι. Ξεκινάς δωρεάν χωρίς κάρτα.", en: "No. Start free with no card required." },
            },
            {
              q: { gr: "Μπορώ να αναβαθμίσω αργότερα;", en: "Can I upgrade later?" },
              a: { gr: "Ναι. Αναβάθμισε ή υποβάθμισε οποτεδήποτε.", en: "Yes. Upgrade or downgrade anytime." },
            },
            {
              q: { gr: "Τι γίνεται αν θέλω ακύρωση;", en: "What if I want to cancel?" },
              a: { gr: "Ακύρωσε οποτεδήποτε. Χωρίς δεσμεύσεις.", en: "Cancel anytime. No commitments." },
            },
            {
              q: { gr: "Υπάρχει δοκιμαστική περίοδος;", en: "Is there a trial period?" },
              a: { gr: "Ναι — 14 ημέρες πλήρης πρόσβαση στο Pro πλάνο.", en: "Yes — 14 days full access to the Pro plan." },
            },
          ].map((item) => (
            <div
              key={item.q.en}
              className="rounded-2xl border border-[var(--color-border)] bg-white/80 p-5"
            >
              <p className="text-sm font-semibold text-[var(--color-navy)]">
                {t(item.q)}
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {t(item.a)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
