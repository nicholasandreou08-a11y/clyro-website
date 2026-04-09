"use client";

import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { useLanguage } from "./language-context";

type CP = Record<"gr" | "en", string>;

interface FeatureSectionProps {
  icon: LucideIcon;
  color: string;
  title: CP;
  description: CP;
  highlights: CP[];
  href?: string;
  /** Flip the layout so the bullets appear on the right */
  reverse?: boolean;
  /** Mockup component to render on the visual side */
  mockup?: React.ReactNode;
}

export function FeatureSection({
  icon: Icon,
  color,
  title,
  description,
  highlights,
  href,
  reverse,
  mockup,
}: FeatureSectionProps) {
  const { t } = useLanguage();

  const copyBlock = (
    <div className="flex flex-col justify-center">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{ background: `${color}14`, color }}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-2xl font-bold text-[var(--color-navy)] font-[var(--font-display)]">
        {t(title)}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
        {t(description)}
      </p>
      <ul className="mt-5 space-y-2">
        {highlights.map((h) => (
          <li key={h.en} className="flex items-center gap-2.5 text-sm text-[var(--color-muted)]">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)]">
              <svg viewBox="0 0 12 12" className="h-3 w-3">
                <path
                  d="M2 6l3 3 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {t(h)}
          </li>
        ))}
      </ul>
      {href && (
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-blue-dark)] hover:underline"
        >
          {t({ gr: "Μάθε περισσότερα", en: "Learn more" })}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );

  const visualBlock = mockup ? (
    <div className="flex items-center justify-center">{mockup}</div>
  ) : (
    <div className="flex items-center justify-center">
      <div
        className="flex h-64 w-full items-center justify-center rounded-[var(--radius-card)] border border-white/70 bg-white/90 shadow-[var(--shadow-card)]"
        style={{ background: `${color}08` }}
      >
        <Icon className="h-16 w-16 opacity-20" style={{ color }} />
      </div>
    </div>
  );

  return (
    <div className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${reverse ? "lg:[direction:rtl] lg:[&>*]:[direction:ltr]" : ""}`}>
      {copyBlock}
      {visualBlock}
    </div>
  );
}
