"use client";

import { Globe, Shield, Euro, MessageSquare, Brain, Lock, FileCheck, Wifi } from "lucide-react";
import { useLanguage } from "./language-context";

const highlights = [
  {
    icon: Globe,
    color: "#3B82F6",
    title: { gr: "Δίγλωσσο (EL/EN)", en: "Bilingual (EL/EN)" },
    body: { gr: "Αλλαγή γλώσσας με ένα κλικ.", en: "Switch language in one click." },
  },
  {
    icon: Shield,
    color: "#16A34A",
    title: { gr: "GDPR & Ασφάλεια", en: "GDPR & Security" },
    body: { gr: "MFA, ιστορικό ενεργειών, κρυπτογράφηση. Δεδομένα στη Φρανκφούρτη.", en: "MFA, audit logs, encryption. Data in Frankfurt." },
  },
  {
    icon: Euro,
    color: "#F59E0B",
    title: { gr: "EUR & ΓΕΣΥ / ΕΟΠΥΥ", en: "EUR & GESY / EOPYY" },
    body: { gr: "Τιμολόγηση σε € + ασφαλιστικές αξιώσεις.", en: "EUR invoicing + insurance claims." },
  },
  {
    icon: MessageSquare,
    color: "#2EC4B6",
    title: { gr: "SMS / WhatsApp / Email", en: "SMS / WhatsApp / Email" },
    body: { gr: "Αυτόματες υπενθυμίσεις, μηνύματα, επιστολές.", en: "Auto reminders, messages & letters." },
  },
  {
    icon: Brain,
    color: "#8B5CF6",
    title: { gr: "Τεχνητή νοημοσύνη", en: "AI-Powered" },
    body: { gr: "Σημειώσεις & επιστολές με AI. Χωρίς αποθήκευση δεδομένων.", en: "Notes & letters with AI. Zero-retention." },
  },
  {
    icon: Lock,
    color: "#F43F5E",
    title: { gr: "Κλείδωμα σημειώσεων", en: "Note locking" },
    body: { gr: "Κλειδώστε σημειώσεις. Προσθήκες χωρίς αλλαγή πρωτοτύπου.", en: "Lock notes. Addenda without edits." },
  },
  {
    icon: FileCheck,
    color: "#D97706",
    title: { gr: "Πρότυπα εγγράφων", en: "Custom templates" },
    body: { gr: "Πρότυπα συνεδριών ανά επάγγελμα.", en: "Consultation templates per profession." },
  },
  {
    icon: Wifi,
    color: "#3B82F6",
    title: { gr: "Στο cloud", en: "Cloud-based" },
    body: { gr: "Κινητό, tablet, PC. Αυτόματη αποθήκευση & συγχρονισμός.", en: "Mobile, tablet, desktop. Auto-save & sync." },
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
            <span>🇬🇷</span>
            <span>🇨🇾</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl font-[var(--font-display)]">
            {t({
              gr: "Φτιαγμένο για Ελλάδα & Κύπρο",
              en: "Built for Greece & Cyprus",
            })}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/60 sm:text-lg">
            {t({
              gr: "Δίγλωσσο, τοπικό νόμισμα, GDPR, AI.",
              en: "Bilingual, local currency, GDPR, AI.",
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
