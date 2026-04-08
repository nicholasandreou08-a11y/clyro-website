"use client";

import { useLanguage } from "./language-context";

const testimonials = [
  {
    name: "Dr. Christos K.",
    role: { gr: "Φυσιοθεραπευτής, Λεμεσός", en: "Physiotherapist, Limassol" },
    quote: {
      gr: "Επιτέλους ένα σύστημα που δεν χρειάζεται tutorial. Απλό, γρήγορο, ακριβώς αυτό που χρειαζόμουν.",
      en: "Finally a system that doesn't need a tutorial. Simple, fast, exactly what I needed.",
    },
    emoji: "🧑‍⚕️",
  },
  {
    name: "Maria T.",
    role: { gr: "Διαιτολόγος, Λευκωσία", en: "Dietician, Nicosia" },
    quote: {
      gr: "Χρησιμοποιούσα Excel για τα ραντεβού μου. Τώρα τα βλέπω όλα σε ένα μέρος.",
      en: "I used Excel for my appointments. Now I see everything in one place.",
    },
    emoji: "👩‍💼",
  },
  {
    name: "Andreas P.",
    role: { gr: "Ψυχολόγος, Πάφος", en: "Psychologist, Paphos" },
    quote: {
      gr: "Η καταγραφή σημειώσεων κατά τη συνεδρία γίνεται χωρίς να χάνω ροή.",
      en: "Note-taking during sessions happens without breaking my flow.",
    },
    emoji: "🧠",
  },
];

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="scroll-fade-in mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
          {t({ gr: "Τι λένε οι χρήστες", en: "What users say" })}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl font-[var(--font-display)]">
          {t({
            gr: "Αγαπημένο από επαγγελματίες υγείας",
            en: "Loved by health professionals",
          })}
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3 stagger-children">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="card-hover rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-6 shadow-[var(--shadow-card)]"
          >
            <p className="text-sm leading-6 text-[var(--color-muted)] italic">
              &ldquo;{t(item.quote)}&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface-soft)] text-lg">
                {item.emoji}
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-navy)]">
                  {item.name}
                </p>
                <p className="text-xs text-[var(--color-muted)]">
                  {t(item.role)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
