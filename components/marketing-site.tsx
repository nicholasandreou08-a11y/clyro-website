"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  MessageSquareText,
  NotebookPen,
  Phone,
  Sparkles,
  TimerReset,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  blogCategories,
  contactCopy,
  faqItems,
  featureCards,
  getProfessionCard,
  getProfessionCopy,
  heroCopy,
  integrations,
  marketingPages,
  pageTitles,
  pricingPlans,
  productModules,
  professions,
  signupFields,
  trustPoints,
  type Language,
  type Profession,
  type SitePage,
} from "@/lib/site-data";

type MarketingSiteProps = {
  page: SitePage;
  language: Language;
  profession: Profession;
};

const pageSubtitles: Record<Exclude<SitePage, "home" | "profession">, Record<Language, string>> = {
  features: {
    gr: "Τα δομικά κομμάτια του Clyro για ένα καθαρό practice flow.",
    en: "The core building blocks behind a clear practice workflow.",
  },
  pricing: {
    gr: "Διάλεξε πλάνο ανάλογα με το μέγεθος και τη φάση του ιατρείου σου.",
    en: "Choose a plan that matches the size and stage of your practice.",
  },
  demo: {
    gr: "Δες το Clyro σε ένα μικρό, πρακτικό preview.",
    en: "See Clyro through a focused, practical preview.",
  },
  integrations: {
    gr: "Συνδέσου με τα εργαλεία που χρησιμοποιείς ήδη.",
    en: "Connect the tools your team already uses.",
  },
  faq: {
    gr: "Μερικές γρήγορες απαντήσεις πριν ξεκινήσεις.",
    en: "A few quick answers before you start.",
  },
  blog: {
    gr: "Σύντομο περιεχόμενο για practice management και ανάπτυξη.",
    en: "Short content on practice management and growth.",
  },
  contact: {
    gr: "Μίλα με την ομάδα για το δικό σου practice.",
    en: "Talk to the team about your own practice.",
  },
  signup: {
    gr: "Ξεκίνα σε λίγα λεπτά, χωρίς κάρτα.",
    en: "Get started in minutes, no card required.",
  },
};

function isProfessionSlug(slug: string): slug is Profession {
  return professions.some((item) => item.key === slug);
}

function copyFor(value: { gr: string; en: string }, language: Language) {
  return value[language];
}

function pillClass(active: boolean) {
  return cn(
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
    active
      ? "border-[var(--color-blue)] bg-[var(--color-blue)]/10 text-[var(--color-blue-dark)]"
      : "border-[var(--color-border)] bg-white text-[var(--color-muted)] hover:border-[var(--color-blue)]/40 hover:text-[var(--color-text)]",
  );
}

function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all",
        variant === "solid"
          ? "bg-[var(--color-navy)] text-white shadow-[0_12px_24px_-16px_rgba(30,42,56,0.45)] hover:-translate-y-0.5 hover:bg-[var(--color-blue-dark)]"
          : "border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-blue)]/30 hover:bg-[var(--color-surface-soft)]",
      )}
    >
      {children}
    </Link>
  );
}

function StatPill({
  label,
  value,
  language,
  tone = "default",
}: {
  label: string;
  value: string;
  language: Language;
  tone?: "default" | "accent" | "soft";
}) {
  return (
    <div
      className={cn(
        "rounded-[20px] border p-4",
        tone === "accent"
          ? "border-[rgba(59,130,246,0.18)] bg-[linear-gradient(180deg,rgba(59,130,246,0.10),rgba(255,255,255,0.92))]"
          : tone === "soft"
            ? "border-[var(--color-border)] bg-[var(--color-surface-soft)]"
            : "border-[var(--color-border)] bg-white",
      )}
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {label}
      </p>
      <p
        className={cn(
          "mt-2 text-2xl font-semibold tracking-tight",
          language === "gr" ? "font-[var(--font-display)]" : "font-[var(--font-display)]",
          "text-[var(--color-navy)]",
        )}
      >
        {value}
      </p>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ProductPreview({
  language,
  profession,
}: {
  language: Language;
  profession: Profession;
}) {
  const selected = getProfessionCard(profession);

  return (
    <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,248,252,0.92))] p-4 shadow-[0_28px_80px_-40px_rgba(17,24,39,0.38)] backdrop-blur">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_70%)]" />
      <div className="relative grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-[var(--color-border)] bg-[linear-gradient(180deg,#ffffff,#f5f8fc)] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Clyro dashboard
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--color-navy)]">
                {copyFor(selected.label, language)}
              </h3>
            </div>
            <div className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-medium text-[var(--color-muted)]">
              {language === "gr" ? "Live view" : "Live view"}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <StatPill
              label={language === "gr" ? "Ραντεβού" : "Appointments"}
              value="12"
              language={language}
              tone="accent"
            />
            <StatPill
              label={language === "gr" ? "Σημειώσεις" : "Notes"}
              value="8"
              language={language}
              tone="soft"
            />
            <StatPill
              label={language === "gr" ? "Υπενθυμίσεις" : "Reminders"}
              value="4"
              language={language}
            />
          </div>

          <div className="mt-4 rounded-[24px] border border-[var(--color-border)] bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--color-navy)]">
                  {language === "gr" ? "Σημερινό πρόγραμμα" : "Today’s schedule"}
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  {language === "gr"
                    ? "Καθαρή εικόνα, λίγα βήματα."
                    : "A clear schedule in a few steps."}
                </p>
              </div>
              <CalendarDays className="h-5 w-5 text-[var(--color-blue-dark)]" />
            </div>
            <div className="mt-4 space-y-3">
              {[
                { time: "09:30", name: "Maria P.", type: language === "gr" ? "Follow-up" : "Follow-up" },
                { time: "11:00", name: "A. Costa", type: language === "gr" ? "Initial consult" : "Initial consult" },
                { time: "13:15", name: "Room 2", type: language === "gr" ? "Team slot" : "Team slot" },
              ].map((item, index) => (
                <div
                  key={`${item.time}-${index}`}
                  className="flex items-center justify-between rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-navy)]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[var(--color-muted)]">{item.type}</p>
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-blue-dark)]">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  {language === "gr" ? "Workflow" : "Workflow"}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--color-navy)]">
                  {language === "gr" ? "Τα βασικά της ημέρας" : "What matters today"}
                </h3>
              </div>
              <MessageSquareText className="h-5 w-5 text-[var(--color-blue-dark)]" />
            </div>
            <div className="mt-4 space-y-3">
              {productModules[language].map((item, index) => (
                <div
                  key={copyFor(item.label, language)}
                  className={cn(
                    "rounded-[20px] border p-3",
                    index === 0
                      ? "border-[rgba(59,130,246,0.18)] bg-[rgba(59,130,246,0.06)]"
                      : "border-[var(--color-border)] bg-[var(--color-surface-soft)]",
                  )}
                >
                  <p className="text-sm font-semibold text-[var(--color-navy)]">
                    {copyFor(item.label, language)}
                  </p>
                  {item.detail ? (
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {copyFor(item.detail, language)}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-[var(--color-border)] bg-[linear-gradient(180deg,#ffffff,#f7fbff)] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                {language === "gr" ? "Προσαρμογή" : "Tailoring"}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--color-navy)]">
                {copyFor(selected.headline, language)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                {copyFor(selected.strapline, language)}
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-navy)] p-5 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  {language === "gr" ? "Υπενθύμιση" : "Reminder"}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12">
                    <TimerReset className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {language === "gr" ? "Αυτόματη αποστολή αύριο" : "Auto-send tomorrow"}
                    </p>
                    <p className="text-xs text-white/70">
                      {language === "gr" ? "Σε 6 ασθενείς" : "For 6 patients"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                      Billing
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[var(--color-navy)]">
                      {language === "gr" ? "Έξυπνες χρεώσεις" : "Smart billing"}
                    </p>
                  </div>
                  <CircleDollarSign className="h-5 w-5 text-[var(--color-blue-dark)]" />
                </div>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {language === "gr"
                    ? "Μικρή τριβή, καθαρή πληρωμή."
                    : "Less friction, cleaner payments."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MarketingSite({ page, language, profession }: MarketingSiteProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeProfessionQuery = searchParams.get("profession");
  const currentProfession: Profession =
    activeProfessionQuery && isProfessionSlug(activeProfessionQuery)
      ? activeProfessionQuery
      : profession;
  const staticPage = page as Exclude<SitePage, "home" | "profession">;

  function updateQuery(next: URLSearchParams) {
    const query = next.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function setLanguage(nextLanguage: Language) {
    document.cookie = `clyro-language=${nextLanguage}; path=/; max-age=31536000; samesite=lax`;
    const next = new URLSearchParams(searchParams.toString());
    next.set("lang", nextLanguage);
    updateQuery(next);
  }

  function setProfession(nextProfession: Profession) {
    document.cookie = `clyro-profession=${nextProfession}; path=/; max-age=31536000; samesite=lax`;
    if (page === "home") {
      const next = new URLSearchParams(searchParams.toString());
      next.set("profession", nextProfession);
      updateQuery(next);
      return;
    }
    router.push(`/${getProfessionCard(nextProfession).slug}?lang=${language}`, { scroll: false });
  }

  const hero = page === "home" || page === "profession" ? heroCopy[language] : null;
  const selectedProfession = currentProfession ?? profession;
  const professionCard = getProfessionCard(selectedProfession);
  const currentPageTitle =
    page === "home"
      ? heroCopy[language].title
      : page === "profession"
        ? getProfessionCopy(currentProfession, language)
        : pageTitles[staticPage][language];
  const currentSubtitle =
    page === "home"
      ? heroCopy[language].subtitle
      : page === "profession"
        ? professionCard.strapline[language]
        : pageSubtitles[staticPage][language];
  const pageBadge =
    page === "home" || page === "profession"
      ? heroCopy[language].eyebrow
      : pageTitles[staticPage][language];

  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-120px] top-[30vh] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(46,196,182,0.10),transparent_62%)] blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/60 bg-[rgba(244,247,251,0.76)] backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[var(--color-navy)] text-white shadow-[0_14px_28px_-18px_rgba(30,42,56,0.55)]">
              <span className="text-sm font-semibold">C</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-[var(--color-navy)]">
                Clyro
              </p>
              <p className="text-xs text-[var(--color-muted)]">
                {language === "gr"
                  ? "Απλό σύστημα για επαγγελματίες υγείας"
                  : "Simple practice software"}
              </p>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {marketingPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-white text-[var(--color-navy)] shadow-[0_8px_18px_-18px_rgba(17,24,39,0.45)]"
                    : "text-[var(--color-muted)] hover:bg-white/80 hover:text-[var(--color-navy)]",
                )}
              >
                {item.label[language]}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden rounded-full border border-[var(--color-border)] bg-white p-1 text-xs font-semibold sm:flex">
              {(["gr", "en"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLanguage(item)}
                  className={cn(
                    "rounded-full px-3 py-1.5 transition-colors",
                    language === item
                      ? "bg-[var(--color-navy)] text-white"
                      : "text-[var(--color-muted)] hover:text-[var(--color-text)]",
                  )}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            <ButtonLink href="/signup">
              {language === "gr" ? "Ξεκίνα" : "Get started"}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(59,130,246,0.16)] bg-white/80 px-4 py-2 text-sm text-[var(--color-muted)] shadow-[0_12px_30px_-24px_rgba(17,24,39,0.34)]">
              <span className="rounded-full bg-[var(--color-blue)]/10 px-2 py-0.5 text-xs font-semibold text-[var(--color-blue-dark)]">
                {language === "gr" ? "Greek-first" : "Greek-first"}
              </span>
              <span>{pageBadge}</span>
            </div>
            <h1 className="mt-6 max-w-2xl text-[clamp(3rem,7vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--color-navy)]">
              {currentPageTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              {currentSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/signup">
                {page === "home" || page === "profession"
                  ? hero?.primaryCta ?? (language === "gr" ? "Δοκίμασέ το δωρεάν" : "Try it free")
                  : language === "gr"
                    ? "Δοκίμασέ το δωρεάν"
                    : "Try it free"}
                <ChevronRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={page === "pricing" ? "/contact" : "/demo"} variant="ghost">
                {page === "home" || page === "profession"
                  ? hero?.secondaryCta ?? (language === "gr" ? "Δες πώς λειτουργεί" : "See how it works")
                  : page === "pricing"
                    ? contactCopy[language].cta
                    : language === "gr"
                      ? "Δες πώς λειτουργεί"
                      : "See how it works"}
              </ButtonLink>
            </div>

            {page === "home" || page === "profession" ? (
              <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
                <StatPill
                  label={language === "gr" ? "Άμεση εικόνα" : "Instant clarity"}
                  value={language === "gr" ? "<10 δευτ." : "<10 sec"}
                  language={language}
                />
                <StatPill
                  label={language === "gr" ? "Επαγγέλματα" : "Professions"}
                  value="5"
                  language={language}
                  tone="accent"
                />
                <StatPill
                  label={language === "gr" ? "Καθαρή ροή" : "Clean flow"}
                  value="1"
                  language={language}
                  tone="soft"
                />
              </div>
            ) : (
              <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
                <StatPill
                  label={language === "gr" ? "Σταθερή εμπειρία" : "Consistent UX"}
                  value={language === "gr" ? "Όμορφη" : "Clean"}
                  language={language}
                />
                <StatPill
                  label={language === "gr" ? "Καθαρή αρχιτεκτονική" : "Clear structure"}
                  value={language === "gr" ? "Απλή" : "Simple"}
                  language={language}
                  tone="accent"
                />
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {professions.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setProfession(item.key)}
                  className={pillClass(selectedProfession === item.key)}
                >
                  {item.label[language]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <ProductPreview language={language} profession={selectedProfession} />
          </div>
        </section>

        {page === "home" || page === "profession" || page === "features" ? (
          <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {featureCards[language].map((feature) => (
                <article
                  key={copyFor(feature.title, language)}
                  className="rounded-[24px] border border-white/70 bg-white/90 p-5 shadow-[var(--shadow-card)]"
                >
                  <p className="text-sm font-semibold text-[var(--color-navy)]">
                    {copyFor(feature.title, language)}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    {copyFor(feature.body, language)}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={language === "gr" ? "Εμπιστοσύνη" : "Trust"}
            title={language === "gr" ? "Χωρίς περιττή πολυπλοκότητα" : "Minimal on the surface, solid underneath"}
            subtitle={language === "gr"
              ? "Κρατάς το practice σου καθαρό, γρήγορο και αξιόπιστο."
              : "Keep your practice clear, fast, and reliable."}
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {trustPoints[language].map((item) => (
              <div
                key={item.label[language]}
                className="rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-blue)]/10 text-[var(--color-blue-dark)]">
                  <Check className="h-5 w-5" />
                </div>
                <p className="mt-4 text-base font-medium text-[var(--color-navy)]">
                  {item.label[language]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {page === "pricing" ? (
          <section className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow={language === "gr" ? "Τιμολόγηση" : "Pricing"}
              title={language === "gr" ? "Απλή τιμολόγηση, χωρίς εκπλήξεις" : "Simple pricing, no surprises"}
              subtitle={pageSubtitles.pricing[language]}
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {pricingPlans[language].map((plan) => (
                <article
                  key={plan.name[language]}
                  className={cn(
                    "rounded-[24px] border p-6 shadow-[var(--shadow-card)]",
                    plan.featured
                      ? "border-[var(--color-blue)] bg-[linear-gradient(180deg,#ffffff,#f7fbff)]"
                      : "border-[var(--color-border)] bg-white",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-[var(--color-navy)]">
                        {plan.name[language]}
                      </p>
                      <p className="mt-2 text-sm text-[var(--color-muted)]">
                        {plan.description[language]}
                      </p>
                    </div>
                    {plan.featured ? (
                      <span className="rounded-full bg-[var(--color-blue)] px-3 py-1 text-xs font-semibold text-white">
                        {language === "gr" ? "Popular" : "Popular"}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-5 text-3xl font-semibold text-[var(--color-navy)]">
                    {plan.price[language]}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {plan.bullets.map((bullet) => (
                      <li key={bullet[language]} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                        <Check className="h-4 w-4 text-[var(--color-blue-dark)]" />
                        {bullet[language]}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {page === "faq" ? (
          <section className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="FAQ"
              title={pageTitles.faq[language]}
              subtitle={pageSubtitles.faq[language]}
            />
            <div className="mt-8 space-y-4">
              {faqItems[language].map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-[var(--color-navy)]">
                    {item.question}
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {page === "integrations" ? (
          <section className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow={pageTitles.integrations[language]}
              title={language === "gr" ? "Συνδέσεις που βγάζουν νόημα" : "Integrations that fit the workflow"}
              subtitle={pageSubtitles.integrations[language]}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {integrations[language].map((integration) => (
                <article key={integration.name} className="rounded-[24px] border border-[var(--color-border)] bg-white p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-sky)] text-[var(--color-blue-dark)]">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-base font-semibold text-[var(--color-navy)]">
                    {integration.name}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    {integration.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {page === "blog" ? (
          <section className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Blog"
              title={language === "gr" ? "Σύντομες σημειώσεις για καλύτερο practice flow" : "Short notes on better practice flow"}
              subtitle={pageSubtitles.blog[language]}
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {blogCategories[language].map((category, index) => (
                <article key={category} className="rounded-[24px] border border-[var(--color-border)] bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-blue-dark)]">
                    {category}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-[var(--color-navy)]">
                    {language === "gr"
                      ? `Σύντομο άρθρο ${index + 1}`
                      : `Short article ${index + 1}`}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    {language === "gr"
                      ? "Πρακτικό περιεχόμενο για να οργανώνεις καλύτερα το ιατρείο σου."
                      : "Practical content to help you run your practice better."}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {page === "contact" ? (
          <section className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="grid gap-6 rounded-[32px] border border-white/80 bg-[linear-gradient(180deg,#ffffff,#f8fbff)] p-6 shadow-[var(--shadow-card)] lg:grid-cols-[1fr_0.8fr]">
              <div>
                <SectionTitle
                  eyebrow={pageTitles.contact[language]}
                  title={contactCopy[language].title}
                  subtitle={contactCopy[language].subtitle}
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/signup">
                    {contactCopy[language].cta}
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink href="/demo" variant="ghost">
                    {language === "gr" ? "Δες το demo" : "View the demo"}
                  </ButtonLink>
                </div>
              </div>
              <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-5">
                <p className="text-sm font-semibold text-[var(--color-navy)]">
                  {language === "gr" ? "Κύρια υπόσχεση" : "Core promise"}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {language === "gr"
                    ? "Ένα προϊόν, μία μάρκα, μία καθαρή εμπειρία για κάθε ειδικότητα."
                    : "One product, one brand, one clean experience for every profession."}
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {page === "signup" ? (
          <section className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionTitle
                  eyebrow={pageTitles.signup[language]}
                  title={language === "gr" ? "Ξεκίνα σε λίγα λεπτά" : "Get started in minutes"}
                  subtitle={pageSubtitles.signup[language]}
                />
                <div className="mt-8 space-y-3">
                  {signupFields[language].trust.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                      <Check className="h-4 w-4 text-[var(--color-blue-dark)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <form className="rounded-[32px] border border-white/80 bg-[linear-gradient(180deg,#ffffff,#f8fbff)] p-6 shadow-[var(--shadow-card)]">
                <div className="grid gap-4">
                  {[
                    signupFields[language].name,
                    signupFields[language].email,
                    signupFields[language].password,
                  ].map((label) => (
                    <label key={label} className="grid gap-2 text-sm font-medium text-[var(--color-navy)]">
                      {label}
                      <input
                        className="rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-blue)]"
                        placeholder={label}
                      />
                    </label>
                  ))}
                  <label className="grid gap-2 text-sm font-medium text-[var(--color-navy)]">
                    {signupFields[language].profession}
                    <select className="rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-blue)]">
                      {professions.map((item) => (
                        <option key={item.key} value={item.key}>
                          {item.label[language]}
                        </option>
                      ))}
                    </select>
                  </label>
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-blue-dark)]"
                  >
                    {language === "gr" ? "Δημιούργησε λογαριασμό" : "Create account"}
                  </button>
                </div>
              </form>
            </div>
          </section>
        ) : null}

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[32px] border border-[var(--color-navy)] bg-[linear-gradient(135deg,#16212D,#233241_52%,#16212D)] px-6 py-8 text-white shadow-[0_24px_40px_-28px_rgba(30,42,56,0.6)] md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                {language === "gr" ? "Final CTA" : "Final CTA"}
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                {language === "gr" ? "Ξεκίνα σήμερα" : "Start today"}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                {language === "gr"
                  ? "Χωρίς δέσμευση. Με καθαρή δομή και άμεση αξία."
                  : "No commitment. Clear structure, immediate value."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/signup" variant="ghost">
                {language === "gr" ? "Δοκίμασέ το δωρεάν" : "Try it free"}
              </ButtonLink>
              <ButtonLink href="/contact">
                {language === "gr" ? "Κλείσε demo" : "Book a demo"}
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
