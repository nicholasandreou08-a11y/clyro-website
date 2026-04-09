"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "./language-context";
import { LanguageToggle } from "./language-toggle";
import { Logo } from "./logo";

const navLinks = [
  { href: "/features", label: { gr: "Δυνατότητες", en: "Features" } },
  { href: "/pricing", label: { gr: "Τιμολόγηση", en: "Pricing" } },
  { href: "/demo", label: { gr: "Επίδειξη", en: "Demo" } },
  { href: "/contact", label: { gr: "Επικοινωνία", en: "Contact" } },
];

export function Nav() {
  const { language, t } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[rgba(244,247,251,0.76)] backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-[16px] bg-[var(--color-navy)] text-white shadow-[0_14px_28px_-18px_rgba(30,42,56,0.55)]">
            <span className="text-sm font-bold">C</span>
          </div>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-white text-[var(--color-navy)] shadow-[0_8px_18px_-18px_rgba(17,24,39,0.45)]"
                  : "text-[var(--color-muted)] hover:bg-white/80 hover:text-[var(--color-navy)]",
              )}
            >
              {t(link.label)}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2">
          <LanguageToggle className="hidden sm:flex" />

          <Link
            href="https://my.clyroapp.com"
            className="hidden rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-navy)] sm:inline-flex"
          >
            {t({ gr: "Σύνδεση", en: "Log in" })}
          </Link>

          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_-16px_rgba(30,42,56,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-blue-dark)]"
          >
            {t({ gr: "Δοκίμασέ το", en: "Try free" })}
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-muted)] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-white/95 backdrop-blur-xl lg:hidden animate-fade-in">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-[var(--color-surface-soft)] text-[var(--color-navy)]"
                    : "text-[var(--color-muted)] hover:bg-[var(--color-surface-soft)]",
                )}
              >
                {t(link.label)}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3 px-4">
              <LanguageToggle />
              <Link
                href="https://my.clyroapp.com"
                className="text-sm font-medium text-[var(--color-muted)]"
              >
                {t({ gr: "Σύνδεση", en: "Log in" })}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
