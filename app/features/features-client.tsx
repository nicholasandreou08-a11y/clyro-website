"use client";

import { PageShell } from "@/components/page-shell";
import { ProductTabs } from "@/components/product-tabs";
import { CtaBanner } from "@/components/cta-banner";
import { useLanguage } from "@/components/language-context";
import {
  CalendarDays,
  Users,
  NotebookPen,
  ListChecks,
  Receipt,
  Users2,
  Bell,
  FileText,
  BarChart3,
  Smartphone,
  Lock,
  Zap,
} from "lucide-react";
import type { Language } from "@/lib/site-data";

const detailedFeatures = [
  {
    icon: CalendarDays,
    color: "#3B82F6",
    title: { gr: "Ημερολόγιο & Προγραμματισμός", en: "Calendar & Scheduling" },
    body: {
      gr: "Ημερήσια και εβδομαδιαία προβολή με drag-and-drop. Αυτόματες υπενθυμίσεις, χρωματική κωδικοποίηση ανά τύπο ραντεβού, και γρήγορη κράτηση με ένα κλικ.",
      en: "Day and week views with drag-and-drop. Automatic reminders, color-coded appointment types, and one-click booking.",
    },
    bullets: {
      gr: ["Drag-and-drop μετακίνηση", "Χρωματική κωδικοποίηση", "Αυτόματες υπενθυμίσεις", "Πολλαπλοί θεραπευτές"],
      en: ["Drag-and-drop rescheduling", "Color-coded types", "Automatic reminders", "Multi-practitioner"],
    },
  },
  {
    icon: Users,
    color: "#2EC4B6",
    title: { gr: "Αρχεία Ασθενών", en: "Patient Records" },
    body: {
      gr: "Πλήρες προφίλ με ιστορικό, στοιχεία επικοινωνίας, σημειώσεις και στάδιο θεραπείας. Emoji avatars και γρήγορη αναζήτηση.",
      en: "Full profiles with history, contact details, notes, and treatment stage. Emoji avatars and fast search.",
    },
    bullets: {
      gr: ["Πλήρες ιστορικό", "Στάδιο θεραπείας", "Αναζήτηση & φίλτρα", "Emoji avatars"],
      en: ["Full history", "Treatment stages", "Search & filters", "Emoji avatars"],
    },
  },
  {
    icon: NotebookPen,
    color: "#F59E0B",
    title: { gr: "Κλινικές Σημειώσεις", en: "Clinical Notes" },
    body: {
      gr: "SOAP σημειώσεις, body chart, templates και γρήγορη καταγραφή κατά τη συνεδρία.",
      en: "SOAP notes, body chart, templates, and fast capture during sessions.",
    },
    bullets: {
      gr: ["SOAP format", "Body chart", "Templates", "Αποθήκευση με ένα κλικ"],
      en: ["SOAP format", "Body chart", "Templates", "One-click save"],
    },
  },
  {
    icon: ListChecks,
    color: "#F43F5E",
    title: { gr: "Διαχείριση Εργασιών", en: "Task Management" },
    body: {
      gr: "Post-it style tasks, λίστες εργασιών, προτεραιότητες και reminders για τη καθημερινότητά σου.",
      en: "Post-it style tasks, to-do lists, priorities, and reminders for your daily workflow.",
    },
    bullets: {
      gr: ["Post-it notes", "Προτεραιότητες", "Reminders", "Ανά ασθενή"],
      en: ["Post-it notes", "Priorities", "Reminders", "Per-patient"],
    },
  },
  {
    icon: Receipt,
    color: "#16A34A",
    title: { gr: "Χρεώσεις & Τιμολόγηση", en: "Billing & Invoicing" },
    body: {
      gr: "Δημιουργία χρεώσεων, παρακολούθηση πληρωμών, εξαγωγή τιμολογίων. Υποστήριξη EUR.",
      en: "Create charges, track payments, export invoices. Full EUR support.",
    },
    bullets: {
      gr: ["Χρεώσεις ανά ραντεβού", "Tracking πληρωμών", "PDF τιμολόγια", "EUR νόμισμα"],
      en: ["Per-appointment charges", "Payment tracking", "PDF invoices", "EUR currency"],
    },
  },
  {
    icon: Users2,
    color: "#8B5CF6",
    title: { gr: "Ομαδική Συνεργασία", en: "Team Collaboration" },
    body: {
      gr: "Πολλοί χρήστες, κοινό ημερολόγιο, ρόλοι πρόσβασης και κοινή εικόνα κλινικής.",
      en: "Multiple users, shared calendar, access roles, and a unified clinic view.",
    },
    bullets: {
      gr: ["Πολλοί χρήστες", "Κοινό ημερολόγιο", "Ρόλοι (Admin, Physio, Reception)", "Multi-clinic"],
      en: ["Multiple users", "Shared calendar", "Roles (Admin, Physio, Reception)", "Multi-clinic"],
    },
  },
  {
    icon: Bell,
    color: "#D97706",
    title: { gr: "Υπενθυμίσεις", en: "Reminders" },
    body: {
      gr: "Αυτόματες SMS και WhatsApp υπενθυμίσεις μέσω Twilio. Μείωσε τα no-shows.",
      en: "Automatic SMS and WhatsApp reminders via Twilio. Reduce no-shows.",
    },
    bullets: {
      gr: ["SMS υπενθυμίσεις", "WhatsApp", "Αυτόματη αποστολή", "Configurable timing"],
      en: ["SMS reminders", "WhatsApp", "Auto-send", "Configurable timing"],
    },
  },
  {
    icon: FileText,
    color: "#3B82F6",
    title: { gr: "Επιστολές & Αναφορές", en: "Letters & Reports" },
    body: {
      gr: "Δημιουργία επιστολών παραπομπής, αναφορών και κλινικών εγγράφων.",
      en: "Generate referral letters, reports, and clinical documents.",
    },
    bullets: {
      gr: ["Templates", "PDF εξαγωγή", "Email αποστολή", "Ιστορικό εγγράφων"],
      en: ["Templates", "PDF export", "Email sending", "Document history"],
    },
  },
  {
    icon: BarChart3,
    color: "#2EC4B6",
    title: { gr: "Αναφορές & Στατιστικά", en: "Reports & Analytics" },
    body: {
      gr: "Dashboard με KPIs, ημερήσια σύνοψη, και παρακολούθηση απόδοσης.",
      en: "Dashboard with KPIs, daily summary, and performance tracking.",
    },
    bullets: {
      gr: ["Dashboard KPIs", "Ημερήσια σύνοψη", "Trending", "Εξαγωγή δεδομένων"],
      en: ["Dashboard KPIs", "Daily summary", "Trending", "Data export"],
    },
  },
  {
    icon: Smartphone,
    color: "#F43F5E",
    title: { gr: "Mobile-Ready", en: "Mobile-Ready" },
    body: {
      gr: "Πλήρως responsive σχεδίαση που λειτουργεί σε κινητό, tablet και desktop.",
      en: "Fully responsive design that works on mobile, tablet, and desktop.",
    },
    bullets: {
      gr: ["Responsive UI", "Touch-friendly", "Tablet-first", "Offline-capable"],
      en: ["Responsive UI", "Touch-friendly", "Tablet-first", "Offline-capable"],
    },
  },
  {
    icon: Lock,
    color: "#16A34A",
    title: { gr: "Ασφάλεια & GDPR", en: "Security & GDPR" },
    body: {
      gr: "GDPR-first σχεδίαση, MFA, audit logs, και ασφαλής αποθήκευση.",
      en: "GDPR-first design, MFA, audit logs, and secure storage.",
    },
    bullets: {
      gr: ["GDPR compliant", "MFA", "Audit trail", "Encrypted storage"],
      en: ["GDPR compliant", "MFA", "Audit trail", "Encrypted storage"],
    },
  },
  {
    icon: Zap,
    color: "#F59E0B",
    title: { gr: "Γρήγορη εγκατάσταση", en: "Quick Setup" },
    body: {
      gr: "Ξεκινήστε σε λίγα λεπτά. Demo mode για να δοκιμάσεις πριν δεσμευτείς.",
      en: "Get started in minutes. Demo mode to try before you commit.",
    },
    bullets: {
      gr: ["2 λεπτά εγγραφή", "Demo mode", "Guided tour", "Εισαγωγή δεδομένων"],
      en: ["2-min signup", "Demo mode", "Guided tour", "Data import"],
    },
  },
];

export function FeaturesPageClient({ language }: { language: Language }) {
  return (
    <PageShell language={language}>
      <FeaturesContent />
    </PageShell>
  );
}

function FeaturesContent() {
  const { language: lang, t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
          {t({ gr: "Δυνατότητες", en: "Features" })}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl font-[var(--font-display)] animate-fade-in-up">
          {t({
            gr: "Όλα τα εργαλεία που χρειάζεσαι",
            en: "All the tools you need",
          })}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-muted)] animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          {t({
            gr: "Ένα πλήρες σύστημα για τη διαχείριση του ιατρείου σου — από ραντεβού μέχρι τιμολόγηση.",
            en: "A complete system for managing your practice — from appointments to billing.",
          })}
        </p>
      </section>

      {/* Detailed features grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {detailedFeatures.map((f) => {
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
                <ul className="mt-3 space-y-1">
                  {(lang === "gr" ? f.bullets.gr : f.bullets.en).map((bullet: string) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-xs text-[var(--color-muted)]"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)]">
                        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Interactive product tabs */}
      <ProductTabs />

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
