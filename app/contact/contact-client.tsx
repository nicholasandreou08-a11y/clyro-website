"use client";

import { Mail, MapPin, Clock } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { useLanguage } from "@/components/language-context";
import type { Language } from "@/lib/site-data";

const contactMethods = [
  {
    icon: Mail,
    color: "#3B82F6",
    title: { gr: "Email", en: "Email" },
    body: { gr: "hello@clyroapp.com", en: "hello@clyroapp.com" },
    href: "mailto:hello@clyroapp.com",
  },
  {
    icon: MapPin,
    color: "#2EC4B6",
    title: { gr: "Τοποθεσία", en: "Location" },
    body: { gr: "Λεμεσός, Κύπρος", en: "Limassol, Cyprus" },
    href: null,
  },
  {
    icon: Clock,
    color: "#F59E0B",
    title: { gr: "Ώρες υποστήριξης", en: "Support hours" },
    body: {
      gr: "Δευτέρα – Παρασκευή, 09:00 – 18:00 EET",
      en: "Monday – Friday, 09:00 – 18:00 EET",
    },
    href: null,
  },
];

export function ContactPageClient({ language }: { language: Language }) {
  const { t } = useLanguage();

  return (
    <PageShell language={language}>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
          {t({ gr: "Επικοινωνία", en: "Contact" })}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl font-[var(--font-display)] animate-fade-in-up">
          {t({
            gr: "Μίλα με την ομάδα",
            en: "Talk to the team",
          })}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-muted)] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          {t({
            gr: "Θέλεις να δεις το Clyro για το δικό σου ιατρείο ή κλινική; Κλείσε σύντομο demo ή στείλε μας μήνυμα.",
            en: "Want to see Clyro for your practice or clinic? Book a short demo or send us a message.",
          })}
        </p>
      </section>

      {/* Contact methods */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3 stagger-children">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const Wrapper = method.href ? "a" : "div";
            return (
              <Wrapper
                key={method.title.en}
                {...(method.href ? { href: method.href } : {})}
                className="card-hover flex flex-col items-center rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-6 text-center shadow-[var(--shadow-card)]"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: `${method.color}14`, color: method.color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-semibold text-[var(--color-navy)]">
                  {t(method.title)}
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {t(method.body)}
                </p>
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* Contact form */}
      <section className="mx-auto max-w-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-xl font-bold text-[var(--color-navy)] font-[var(--font-display)]">
            {t({ gr: "Στείλε μήνυμα", en: "Send a message" })}
          </h2>
          <form className="mt-6 space-y-4" action="https://formspree.io/f/placeholder" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--color-navy)]">
                {t({ gr: "Όνομα", en: "Name" })}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue)]/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-navy)]">
                {t({ gr: "Email", en: "Email" })}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue)]/20"
              />
            </div>
            <div>
              <label htmlFor="profession" className="block text-sm font-medium text-[var(--color-navy)]">
                {t({ gr: "Επάγγελμα", en: "Profession" })}
              </label>
              <select
                id="profession"
                name="profession"
                className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue)]/20"
              >
                <option value="">{t({ gr: "Επιλέξτε...", en: "Select..." })}</option>
                <option value="physio">{t({ gr: "Φυσιοθεραπευτής", en: "Physiotherapist" })}</option>
                <option value="dietician">{t({ gr: "Διαιτολόγος", en: "Dietician" })}</option>
                <option value="psychologist">{t({ gr: "Ψυχολόγος", en: "Psychologist" })}</option>
                <option value="doctor">{t({ gr: "Γιατρός", en: "Doctor" })}</option>
                <option value="clinic">{t({ gr: "Κλινική", en: "Clinic" })}</option>
                <option value="other">{t({ gr: "Άλλο", en: "Other" })}</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--color-navy)]">
                {t({ gr: "Μήνυμα", en: "Message" })}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue)]/20 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[var(--color-navy)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_-16px_rgba(30,42,56,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-blue-dark)]"
            >
              {t({ gr: "Αποστολή", en: "Send" })}
            </button>
          </form>
        </div>
      </section>

      {/* Made in Cyprus badge */}
      <div className="py-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-5 py-2.5 text-sm text-[var(--color-muted)]">
          <span className="text-lg">🇨🇾</span>
          {t({ gr: "Φτιαγμένο στην Κύπρο", en: "Made in Cyprus" })}
        </div>
      </div>
    </PageShell>
  );
}
