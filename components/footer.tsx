"use client";

import Link from "next/link";
import { useLanguage } from "./language-context";
import { Logo } from "./logo";

const footerLinks = {
  product: [
    { href: "/features", label: { gr: "Δυνατότητες", en: "Features" } },
    { href: "/pricing", label: { gr: "Τιμολόγηση", en: "Pricing" } },
    { href: "/demo", label: { gr: "Demo", en: "Demo" } },
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
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--color-muted)]">
              {t({
                gr: "Απλό σύστημα για επαγγελματίες υγείας στην Κύπρο και την Ελλάδα. Ραντεβού, ασθενείς και σημειώσεις σε ένα μέρος.",
                en: "Simple practice software for health professionals in Cyprus & Greece. Appointments, patients, and notes in one place.",
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
