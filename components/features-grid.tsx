"use client";

import {
  CalendarDays,
  Users,
  NotebookPen,
  ListChecks,
  Receipt,
  Users2,
} from "lucide-react";
import { useLanguage } from "./language-context";

const features = [
  {
    icon: CalendarDays,
    color: "#3B82F6",
    title: { gr: "Ημερολόγιο & Προγραμματισμός", en: "Calendar & Scheduling" },
    body: {
      gr: "Ημερήσια και εβδομαδιαία προβολή με drag-and-drop. Γρήγορη κράτηση ραντεβού και αυτόματες υπενθυμίσεις.",
      en: "Day and week views with drag-and-drop. Quick appointment booking and automatic reminders.",
    },
  },
  {
    icon: Users,
    color: "#2EC4B6",
    title: { gr: "Αρχεία Ασθενών", en: "Patient Records" },
    body: {
      gr: "Πλήρες προφίλ με ιστορικό, στοιχεία επικοινωνίας, σημειώσεις και στάδιο θεραπείας. Emoji avatars για γρήγορη αναγνώριση.",
      en: "Full profiles with history, contact details, notes, and treatment stage. Emoji avatars for quick recognition.",
    },
  },
  {
    icon: NotebookPen,
    color: "#F59E0B",
    title: { gr: "Κλινικές Σημειώσεις", en: "Clinical Notes" },
    body: {
      gr: "SOAP σημειώσεις, body chart, και γρήγορη καταγραφή κατά τη συνεδρία. Αποθήκευση με ένα κλικ.",
      en: "SOAP notes, body chart, and fast capture during sessions. One-click save.",
    },
  },
  {
    icon: ListChecks,
    color: "#F43F5E",
    title: { gr: "Διαχείριση Εργασιών", en: "Task Management" },
    body: {
      gr: "Post-it style tasks, λίστες εργασιών και reminders. Μην ξεχάσεις τίποτα στην καθημερινότητά σου.",
      en: "Post-it style tasks, to-do lists, and reminders. Never miss a follow-up.",
    },
  },
  {
    icon: Receipt,
    color: "#16A34A",
    title: { gr: "Χρεώσεις & Τιμολόγηση", en: "Billing & Invoicing" },
    body: {
      gr: "Δημιουργία χρεώσεων, παρακολούθηση πληρωμών και εξαγωγή τιμολογίων. Υποστήριξη EUR.",
      en: "Create charges, track payments, and export invoices. EUR currency support.",
    },
  },
  {
    icon: Users2,
    color: "#8B5CF6",
    title: { gr: "Ομαδική Συνεργασία", en: "Team Collaboration" },
    body: {
      gr: "Πολλοί χρήστες, κοινό ημερολόγιο, και ρόλοι πρόσβασης. Ιδανικό για κλινικές.",
      en: "Multiple users, shared calendar, and access roles. Ideal for clinics.",
    },
  },
];

export function FeaturesGrid() {
  const { t } = useLanguage();

  return (
    <section className="scroll-fade-in mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
          {t({ gr: "Δυνατότητες", en: "Features" })}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl font-[var(--font-display)]">
          {t({
            gr: "Τα εργαλεία που χρειάζεστε",
            en: "The tools you need",
          })}
        </h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <article
              key={f.title.en}
              className="card-hover rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-6 shadow-[var(--shadow-card)]"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{ background: `${f.color}14`, color: f.color }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-navy)]">
                {t(f.title)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                {t(f.body)}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
