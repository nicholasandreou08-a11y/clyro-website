"use client";

import Link from "next/link";
import { ArrowRight, Check, Shield, Smartphone, Zap } from "lucide-react";
import { useLanguage } from "./language-context";
import { CalendarMockup } from "./app-mockups";
import { ScreenshotMockup } from "./screenshot-mockup";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Rotating‑word component for the headline                            */
/* ------------------------------------------------------------------ */

const rotatingWords = {
  gr: [
    { prefix: "Ολόκληρο το", word: "ιατρείο", suffix: "σας." },
    { prefix: "Ολόκληρη η", word: "κλινική", suffix: "σας." },
    { prefix: "Ολόκληρο το", word: "κέντρο", suffix: "σας." },
    { prefix: "Ολόκληρο το", word: "εργαστήριο", suffix: "σας." },
  ],
  en: [
    { prefix: "Your entire", word: "practice", suffix: "." },
    { prefix: "Your entire", word: "clinic", suffix: "." },
    { prefix: "Your entire", word: "centre", suffix: "." },
    { prefix: "Your entire", word: "studio", suffix: "." },
  ],
};

const WORD_DURATION = 2800;

function RotatingHeadline() {
  const { language } = useLanguage();
  const words = rotatingWords[language];
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setIdx((i) => (i + 1) % words.length);
        setPhase("in");
      }, 350);
    }, WORD_DURATION);
    return () => clearInterval(timer);
  }, [words.length]);

  const current = words[idx];

  return (
    <>
      {current.prefix}{" "}
      <span
        key={idx}
        className={cn(
          "inline-block gradient-text",
          phase === "in" ? "word-rotate-in" : "word-rotate-out",
        )}
      >
        {current.word}
      </span>{" "}
      {current.suffix}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function Hero() {
  const { t } = useLanguage();

  const trustBadges = [
    { icon: <Check className="h-3.5 w-3.5" />, text: t({ gr: "Χωρίς κάρτα", en: "No card required" }) },
    { icon: <Shield className="h-3.5 w-3.5" />, text: t({ gr: "Συμβατό με GDPR", en: "GDPR compliant" }) },
    { icon: <Smartphone className="h-3.5 w-3.5" />, text: t({ gr: "Κάθε συσκευή", en: "Any device" }) },
    { icon: <Zap className="h-3.5 w-3.5" />, text: t({ gr: "Εγγραφή σε 2'", en: "Setup in 2min" }) },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-120px] top-[20vh] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(46,196,182,0.10),transparent_62%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:px-8 lg:pt-20 lg:pb-24">
        {/* Left: copy */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="animate-fade-in inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(59,130,246,0.16)] bg-white/80 px-4 py-2 text-sm text-[var(--color-muted)] shadow-[0_12px_30px_-24px_rgba(17,24,39,0.34)]">
            <span className="rounded-full bg-[var(--color-blue)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-blue-dark)]">
              {t({ gr: "Ελλάδα & Κύπρος", en: "Greece & Cyprus" })}
            </span>
            <span>{t({ gr: "Λογισμικό διαχείρισης ιατρείου", en: "Practice management software" })}</span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 max-w-xl text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--color-navy)]">
            <RotatingHeadline />
            <br />
            <span className="text-[var(--color-navy)]">
              {t({
                gr: "Σε ένα σύστημα.",
                en: "One system.",
              })}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-muted)] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {t({
              gr: "Ημερολόγιο, ασθενείς, σημειώσεις, τιμολόγηση, AI — μία πλατφόρμα για επαγγελματίες υγείας.",
              en: "Calendar, patients, notes, billing, AI — one platform for health professionals.",
            })}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_-16px_rgba(30,42,56,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-blue-dark)] hover:shadow-[0_16px_32px_-16px_rgba(30,42,56,0.5)]"
            >
              {t({ gr: "Δοκίμασέ το δωρεάν", en: "Try it free" })}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-text)] transition-all hover:border-[var(--color-blue)]/30 hover:bg-[var(--color-surface-soft)]"
            >
              {t({ gr: "Δες πώς λειτουργεί", en: "See how it works" })}
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-1.5 text-sm text-[var(--color-muted)]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)]">
                  {badge.icon}
                </span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: app screenshot carousel */}
        <div className="mt-12 flex items-center lg:mt-0">
          <div className="animate-float w-full">
            <ScreenshotMockup
              moduleKey="calendar"
              fallback={CalendarMockup}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
