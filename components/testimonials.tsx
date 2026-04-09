"use client";

import { useLanguage } from "./language-context";

const testimonials = [
  {
    name: "Dr. Christos K.",
    role: { gr: "Φυσιοθεραπευτής, Λεμεσός", en: "Physiotherapist, Limassol" },
    quote: {
      gr: "Το body chart και οι SOAP σημειώσεις μου εξοικονομούν 20 λεπτά τη μέρα. Επιτέλους σύστημα που καταλαβαίνει πώς δουλεύω.",
      en: "The body chart and SOAP notes save me 20 minutes a day. Finally a system that understands how I work.",
    },
    emoji: "🧑‍⚕️",
  },
  {
    name: "Maria T.",
    role: { gr: "Διαιτολόγος, Λευκωσία", en: "Dietician, Nicosia" },
    quote: {
      gr: "Χρησιμοποιούσα Excel για τα ραντεβού μου. Τώρα έχω ιστορικό κάθε πελάτη, μετρήσεις, follow-ups — σε ένα κλικ.",
      en: "I used Excel for my appointments. Now I have every client's history, measurements, follow-ups — in one click.",
    },
    emoji: "👩‍💼",
  },
  {
    name: "Andreas P.",
    role: { gr: "Ψυχολόγος, Πάφος", en: "Psychologist, Paphos" },
    quote: {
      gr: "Η ιδιωτικότητα ήταν η προτεραιότητά μου. Κλειδωμένες σημειώσεις, audit trail — νιώθω ασφαλής.",
      en: "Privacy was my priority. Locked notes, audit trail — I feel secure.",
    },
    emoji: "🧠",
  },
  {
    name: "Dr. Elena D.",
    role: { gr: "Παθολόγος, Αθήνα", en: "Internist, Athens" },
    quote: {
      gr: "Τα AI referral letters μου γλιτώνουν χρόνο κάθε μέρα. Η τιμολόγηση δεν ήταν ποτέ πιο εύκολη.",
      en: "AI referral letters save me time every day. Invoicing has never been easier.",
    },
    emoji: "👩‍⚕️",
  },
  {
    name: "Kyriakos L.",
    role: { gr: "Διευθυντής κλινικής, Λάρνακα", en: "Clinic manager, Larnaca" },
    quote: {
      gr: "Διαχειρίζομαι 3 τοποθεσίες και 8 θεραπευτές. Πριν χρησιμοποιούσα 4 εφαρμογές. Τώρα μία.",
      en: "I manage 3 locations and 8 practitioners. Before I used 4 apps. Now one.",
    },
    emoji: "🏥",
  },
  {
    name: "Georgia M.",
    role: { gr: "Φυσιοθεραπεύτρια, Λευκωσία", en: "Physiotherapist, Nicosia" },
    quote: {
      gr: "Οι αυτόματες υπενθυμίσεις μείωσαν τα no-shows κατά 50%. Τα ΓΕΣΥ claims γίνονται σε δευτερόλεπτα.",
      en: "Auto reminders cut no-shows by 50%. GESY claims happen in seconds.",
    },
    emoji: "👩‍⚕️",
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

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-children">
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
