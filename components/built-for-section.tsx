"use client";

import { Globe, Shield, Euro, MessageSquare, Brain, Lock, FileCheck, Wifi } from "lucide-react";
import { useLanguage } from "./language-context";

const highlights = [
  {
    icon: Globe,
    color: "#3B82F6",
    title: { gr: "Δίγλωσσο (EL/EN)", en: "Bilingual (EL/EN)" },
    body: {
      gr: "Πλήρης υποστήριξη ελληνικών και αγγλικών σε όλο το σύστημα. Αλλαγή γλώσσας με ένα κλικ.",
      en: "Full Greek and English support throughout. Switch language with one click.",
    },
  },
  {
    icon: Shield,
    color: "#16A34A",
    title: { gr: "GDPR & Ασφάλεια", en: "GDPR & Security" },
    body: {
      gr: "GDPR-first σχεδίαση. MFA, audit logs, RLS, κρυπτογράφηση. Δεδομένα στη Φρανκφούρτη (ΕΕ).",
      en: "GDPR-first design. MFA, audit logs, RLS, encryption. Data hosted in Frankfurt (EU).",
    },
  },
  {
    icon: Euro,
    color: "#F59E0B",
    title: { gr: "EUR & ΓΕΣΥ / ΕΟΠΥΥ", en: "EUR & GESY / EOPYY" },
    body: {
      gr: "Τιμολόγηση σε ευρώ. Υποστήριξη ασφαλιστικών αξιώσεων ΓΕΣΥ (Κύπρος) και ΕΟΠΥΥ (Ελλάδα).",
      en: "EUR invoicing. Insurance claim support for GESY (Cyprus) and EOPYY (Greece).",
    },
  },
  {
    icon: MessageSquare,
    color: "#2EC4B6",
    title: { gr: "SMS / WhatsApp / Email", en: "SMS / WhatsApp / Email" },
    body: {
      gr: "Αυτόματες υπενθυμίσεις, μηνύματα και επιστολές — μέσω SMS, WhatsApp ή email.",
      en: "Auto reminders, messages, and letters — via SMS, WhatsApp, or email.",
    },
  },
  {
    icon: Brain,
    color: "#8B5CF6",
    title: { gr: "AI-Powered", en: "AI-Powered" },
    body: {
      gr: "AI-υποβοηθούμενη σύνταξη σημειώσεων, επιστολών παραπομπής. Zero-retention — κανένα δεδομένο δεν αποθηκεύεται.",
      en: "AI-assisted note drafting, referral letters. Zero-retention — no data stored by AI.",
    },
  },
  {
    icon: Lock,
    color: "#F43F5E",
    title: { gr: "Κλείδωμα σημειώσεων", en: "Note locking" },
    body: {
      gr: "Υπογράψτε και κλειδώστε κλινικές σημειώσεις. Addenda χωρίς αλλαγή πρωτοτύπου.",
      en: "Sign and lock clinical notes. Addenda without changing the original.",
    },
  },
  {
    icon: FileCheck,
    color: "#D97706",
    title: { gr: "Custom templates", en: "Custom templates" },
    body: {
      gr: "Φτιάξτε δικά σας consultation templates ανά επάγγελμα. Πεδία κειμένου, αριθμοί, κλίμακες, body chart.",
      en: "Build your own consultation templates per profession. Text fields, numbers, scales, body chart.",
    },
  },
  {
    icon: Wifi,
    color: "#3B82F6",
    title: { gr: "Cloud-based", en: "Cloud-based" },
    body: {
      gr: "Δουλεύει παντού — κινητό, tablet, υπολογιστή. Αυτόματη αποθήκευση, real-time sync.",
      en: "Works everywhere — mobile, tablet, desktop. Auto-save, real-time sync.",
    },
  },
];

export function BuiltForSection() {
  const { t } = useLanguage();

  return (
    <section className="scroll-fade-in relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-navy)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span>🇨🇾</span>
            <span>🇬🇷</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl font-[var(--font-display)]">
            {t({
              gr: "Φτιαγμένο για Κύπρο & Ελλάδα",
              en: "Built for Cyprus & Greece",
            })}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/60 sm:text-lg">
            {t({
              gr: "Τοπική αγορά, τοπικές ανάγκες, σωστά εργαλεία. Δίγλωσσο σύστημα, τοπικό νόμισμα, ασφαλιστικές αξιώσεις, GDPR, AI.",
              en: "Local market, local needs, the right tools. Bilingual system, local currency, insurance claims, GDPR, AI.",
            })}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title.en}
                className="card-hover rounded-[var(--radius-card)] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: `${h.color}22`, color: h.color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {t(h.title)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {t(h.body)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
