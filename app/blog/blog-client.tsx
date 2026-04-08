"use client";

import { PageShell } from "@/components/page-shell";
import { CtaBanner } from "@/components/cta-banner";
import { useLanguage } from "@/components/language-context";
import type { Language } from "@/lib/site-data";

export function BlogPageClient({ language }: { language: Language }) {
  return (
    <PageShell language={language}>
      <BlogContent />
    </PageShell>
  );
}

function BlogContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
          {t({ gr: "Blog", en: "Blog" })}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl font-[var(--font-display)] animate-fade-in-up">
          {t({
            gr: "Σύντομα κοντά σας",
            en: "Coming soon",
          })}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-[var(--color-muted)] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          {t({
            gr: "Ετοιμάζουμε χρήσιμα άρθρα και συμβουλές για επαγγελματίες υγείας. Μείνετε συντονισμένοι.",
            en: "We're preparing helpful articles and tips for health professionals. Stay tuned.",
          })}
        </p>
        <div className="mt-8 text-5xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          ✍️
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
