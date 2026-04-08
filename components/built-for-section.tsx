"use client";

import { Globe, Shield, Euro, MessageSquare } from "lucide-react";
import { useLanguage } from "./language-context";

const highlights = [
  {
    icon: Globe,
    color: "#3B82F6",
    title: { gr: "Δίγλωσσο (EL/EN)", en: "Bilingual (EL/EN)" },
    body: {
      gr: "Πλήρης υποστήριξη ελληνικών και αγγλικών σε όλο το σύστημα.",
      en: "Full Greek and English support throughout the entire system.",
    },
  },
  {
    icon: Shield,
    color: "#16A34A",
    title: { gr: "GDPR Compliant", en: "GDPR Compliant" },
    body: {
      gr: "Σχεδιασμένο με GDPR-first σκέψη. Ασφαλής αποθήκευση δεδομένων ασθενών.",
      en: "Designed with GDPR-first thinking. Secure patient data storage.",
    },
  },
  {
    icon: Euro,
    color: "#F59E0B",
    title: { gr: "Τοπικό νόμισμα (EUR)", en: "Local currency (EUR)" },
    body: {
      gr: "Τιμολόγηση και χρεώσεις σε ευρώ. Κατάλληλο για Κύπρο και Ελλάδα.",
      en: "Invoicing and billing in euros. Built for Cyprus and Greece.",
    },
  },
  {
    icon: MessageSquare,
    color: "#2EC4B6",
    title: { gr: "SMS / WhatsApp υπενθυμίσεις", en: "SMS / WhatsApp reminders" },
    body: {
      gr: "Αυτόματες υπενθυμίσεις μέσω SMS και WhatsApp (Twilio). Μείωσε τα no-shows.",
      en: "Automatic reminders via SMS and WhatsApp (Twilio). Reduce no-shows.",
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
          <p className="mt-3 text-base text-white/60 sm:text-lg">
            {t({
              gr: "Τοπική αγορά, τοπικές ανάγκες, σωστά εργαλεία.",
              en: "Local market, local needs, the right tools.",
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
