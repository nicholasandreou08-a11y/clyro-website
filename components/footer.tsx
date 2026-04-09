"use client";

import Link from "next/link";
import { useLanguage } from "./language-context";
import { Logo } from "./logo";

const footerLinks = {
  product: [
    { href: "/features", label: { gr: "Δυνατότητες", en: "Features" } },
    { href: "/features/calendar", label: { gr: "Ημερολόγιο", en: "Calendar" } },
    { href: "/features/patients", label: { gr: "Ασθενείς", en: "Patients" } },
    { href: "/features/clinical-notes", label: { gr: "Σημειώσεις", en: "Notes" } },
    { href: "/features/billing", label: { gr: "Τιμολόγηση", en: "Billing" } },
    { href: "/features/reports", label: { gr: "Αναφορές", en: "Reports" } },
    { href: "/pricing", label: { gr: "Τιμολόγηση", en: "Pricing" } },
    { href: "/demo", label: { gr: "Demo", en: "Demo" } },
  ],
  professions: [
    { href: "/physiotherapists", label: { gr: "Φυσιοθεραπευτές", en: "Physiotherapists" } },
    { href: "/dieticians", label: { gr: "Διαιτολόγοι", en: "Dieticians" } },
    { href: "/psychologists", label: { gr: "Ψυχολόγοι", en: "Psychologists" } },
    { href: "/doctors", label: { gr: "Γιατροί", en: "Doctors" } },
    { href: "/clinics", label: { gr: "Κλινικές", en: "Clinics" } },
  ],
  company: [
    { href: "/contact", label: { gr: "Επικοινωνία", en: "Contact" } },
    { href: "/privacy", label: { gr: "Απόρρητο", en: "Privacy" } },
    { href: "/terms", label: { gr: "Όροι", en: "Terms" } },
  ],
};

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--color-border)] bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--color-muted)]">
              {t({
                gr: "Πλήρες σύστημα διαχείρισης ιατρείου για επαγγελματίες υγείας στην Κύπρο και την Ελλάδα. Ημερολόγιο, ασθενείς, σημειώσεις, τιμολόγηση, επικοινωνία και αναφορές.",
                en: "Complete practice management for health professionals in Cyprus & Greece. Calendar, patients, notes, billing, communication, and reports.",
              })}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-2 text-xs font-medium text-[var(--color-muted)]">
              <span className="text-base">🇨🇾</span>
              {t({ gr: "Φτιαγμένο στην Κύπρο", en: "Made in Cyprus" })}
            </div>
          </div>

          {/* Product links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {t({ gr: "Προϊόν", en: "Product" })}
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-navy)]"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Profession links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {t({ gr: "Για", en: "For" })}
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.professions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-navy)]"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {t({ gr: "Εταιρεία", en: "Company" })}
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-navy)]"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()} Clyro.{" "}
            {t({ gr: "Με επιφύλαξη κάθε δικαιώματος.", en: "All rights reserved." })}
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:hello@clyroapp.com"
              className="text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-navy)]"
            >
              hello@clyroapp.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
