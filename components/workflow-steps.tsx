"use client";

import { useLanguage } from "./language-context";
import type { WorkflowStep } from "@/lib/profession-data";

export function WorkflowSteps({ steps }: { steps: WorkflowStep[] }) {
  const { t } = useLanguage();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 stagger-children">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div key={step.title.en} className="relative flex flex-col items-center text-center">
            {/* Connector line (hidden on first item and on mobile) */}
            {i > 0 && (
              <div className="absolute left-0 top-7 hidden h-0.5 w-full -translate-x-1/2 bg-gradient-to-r from-[var(--color-border)] to-transparent lg:block" />
            )}

            {/* Step number + icon */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                style={{ background: `${step.color}14`, color: step.color }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span
                className="mt-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: step.color }}
              >
                {i + 1}
              </span>
            </div>

            <h4 className="mt-3 text-sm font-semibold text-[var(--color-navy)]">
              {t(step.title)}
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-muted)]">
              {t(step.description)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
