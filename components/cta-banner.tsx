"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./language-context";

export function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="scroll-fade-in mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[28px] bg-[var(--color-navy)] px-8 py-16 text-center shadow-[0_32px_64px_-24px_rgba(22,33,45,0.5)] sm:px-16">
        {/* Decorative gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(46,196,182,0.15),transparent_50%)]" />

        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-[var(--font-display)]">
            {t({
              gr: "Ξεκίνα δωρεάν σήμερα",
              en: "Start free today",
            })}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/70 sm:text-lg">
            {t({
              gr: "Δημιούργησε τον λογαριασμό σου σε 2 λεπτά. Χωρίς κάρτα, χωρίς δεσμεύσεις.",
              en: "Create your account in 2 minutes. No card, no commitments.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)] shadow-[0_12px_24px_-16px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(255,255,255,0.4)]"
            >
              {t({ gr: "Δοκίμασέ το δωρεάν", en: "Try it free" })}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              {t({ gr: "Δες demo", en: "See demo" })}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
