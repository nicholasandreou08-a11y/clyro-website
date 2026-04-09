"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "./language-context";

/* ------------------------------------------------------------------ */
/* Shared mockup primitives                                            */
/* ------------------------------------------------------------------ */

function MockupShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mockup-chrome", className)}>
      <div className="bg-[#F4F7FB]">{children}</div>
    </div>
  );
}

function SidebarIcon({ emoji, active }: { emoji: string; active?: boolean }) {
  return (
    <div
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-xl text-sm transition-colors",
        active
          ? "bg-[var(--color-blue)] text-white shadow-sm"
          : "text-[var(--color-muted)] hover:bg-white/80",
      )}
    >
      {emoji}
    </div>
  );
}

function Sidebar() {
  return (
    <div className="flex w-14 shrink-0 flex-col items-center gap-2 border-r border-[var(--color-border)] bg-white/80 py-4">
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-[12px] bg-[var(--color-navy)] text-[10px] font-bold text-white">
        C
      </div>
      <SidebarIcon emoji="📅" active />
      <SidebarIcon emoji="👥" />
      <SidebarIcon emoji="📝" />
      <SidebarIcon emoji="✅" />
      <SidebarIcon emoji="💶" />
      <div className="mt-auto">
        <SidebarIcon emoji="⚙️" />
      </div>
    </div>
  );
}

function AppointmentCard({
  time,
  name,
  emoji,
  color,
  type,
}: {
  time: string;
  name: string;
  emoji: string;
  color: string;
  type: string;
}) {
  return (
    <div
      className="flex items-center gap-2.5 rounded-[14px] border px-3 py-2"
      style={{
        borderColor: `${color}33`,
        background: `${color}0D`,
      }}
    >
      <span className="text-lg">{emoji}</span>
      <div className="flex-1 min-w-0">
        <p className="truncate text-xs font-semibold text-[var(--color-navy)]">
          {name}
        </p>
        <p className="text-[10px] text-[var(--color-muted)]">{type}</p>
      </div>
      <span
        className="shrink-0 text-[10px] font-semibold"
        style={{ color }}
      >
        {time}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Calendar Mockup                                                     */
/* ------------------------------------------------------------------ */

export function CalendarMockup({ className }: { className?: string }) {
  const { t } = useLanguage();
  const hours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

  const appointments = [
    { time: "09:30", name: "Maria P.", emoji: "👩", color: "#3B82F6", type: t({ gr: "Follow-up", en: "Follow-up" }), row: 0 },
    { time: "10:00", name: "Andreas K.", emoji: "👨", color: "#2EC4B6", type: t({ gr: "Αρχική", en: "Initial" }), row: 1 },
    { time: "11:30", name: "Elena D.", emoji: "👩‍🦰", color: "#F59E0B", type: t({ gr: "Αξιολόγηση", en: "Assessment" }), row: 2 },
    { time: "13:00", name: "Nikos M.", emoji: "🧔", color: "#F43F5E", type: t({ gr: "Θεραπεία", en: "Treatment" }), row: 4 },
    { time: "14:00", name: "Sofia T.", emoji: "👱‍♀️", color: "#16A34A", type: t({ gr: "Follow-up", en: "Follow-up" }), row: 5 },
  ];

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[360px]">
        <Sidebar />
        <div className="flex-1 p-3">
          {/* Header bar */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[var(--color-navy)]">
                {t({ gr: "Ημερολόγιο", en: "Calendar" })}
              </p>
              <p className="text-[10px] text-[var(--color-muted)]">
                {t({ gr: "Σήμερα — 5 ραντεβού", en: "Today — 5 appointments" })}
              </p>
            </div>
            <div className="flex gap-1">
              <div className="rounded-lg bg-[var(--color-blue)] px-2 py-1 text-[10px] font-semibold text-white">
                {t({ gr: "Ημέρα", en: "Day" })}
              </div>
              <div className="rounded-lg bg-white px-2 py-1 text-[10px] text-[var(--color-muted)] border border-[var(--color-border)]">
                {t({ gr: "Εβδομάδα", en: "Week" })}
              </div>
            </div>
          </div>

          {/* Time grid */}
          <div className="space-y-0">
            {hours.map((hour, i) => {
              const appt = appointments.find((a) => a.row === i);
              return (
                <div
                  key={hour}
                  className="flex min-h-[48px] border-t border-dashed border-[var(--color-border)]/60"
                >
                  <span className="w-10 shrink-0 pt-1 text-[10px] text-[var(--color-muted)]">
                    {hour}
                  </span>
                  <div className="flex-1 py-1">
                    {appt && (
                      <AppointmentCard
                        time={appt.time}
                        name={appt.name}
                        emoji={appt.emoji}
                        color={appt.color}
                        type={appt.type}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/* Patients Mockup                                                     */
/* ------------------------------------------------------------------ */

export function PatientsMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  const patients = [
    { name: "Maria Papadopoulou", emoji: "👩", stage: t({ gr: "Ενεργή", en: "Active" }), stageColor: "#16A34A", visits: 8 },
    { name: "Andreas Kosta", emoji: "👨", stage: t({ gr: "Νέος", en: "New" }), stageColor: "#3B82F6", visits: 1 },
    { name: "Elena Dimitriou", emoji: "👩‍🦰", stage: t({ gr: "Ενεργή", en: "Active" }), stageColor: "#16A34A", visits: 12 },
    { name: "Nikos Michail", emoji: "🧔", stage: t({ gr: "Ολοκλήρωση", en: "Completed" }), stageColor: "#F59E0B", visits: 6 },
    { name: "Sofia Theodorou", emoji: "👱‍♀️", stage: t({ gr: "Ενεργή", en: "Active" }), stageColor: "#16A34A", visits: 4 },
  ];

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[360px]">
        <Sidebar />
        <div className="flex-1 p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-[var(--color-navy)]">
              {t({ gr: "Ασθενείς", en: "Patients" })}
            </p>
            <div className="rounded-lg border border-[var(--color-border)] bg-white px-2 py-1 text-[10px] text-[var(--color-muted)]">
              🔍 {t({ gr: "Αναζήτηση...", en: "Search..." })}
            </div>
          </div>

          <div className="space-y-2">
            {patients.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2.5 rounded-[14px] border border-[var(--color-border)] bg-white px-3 py-2.5"
              >
                <span className="text-lg">{p.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-xs font-semibold text-[var(--color-navy)]">
                    {p.name}
                  </p>
                  <p className="text-[10px] text-[var(--color-muted)]">
                    {p.visits} {t({ gr: "επισκέψεις", en: "visits" })}
                  </p>
                </div>
                <span
                  className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                  style={{ background: p.stageColor }}
                >
                  {p.stage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/* Notes Mockup                                                        */
/* ------------------------------------------------------------------ */

export function NotesMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[360px]">
        <Sidebar />
        <div className="flex-1 p-3">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[var(--color-navy)]">
                {t({ gr: "Κλινικές Σημειώσεις", en: "Clinical Notes" })}
              </p>
              <p className="text-[10px] text-[var(--color-muted)]">
                👩 Maria P. — {t({ gr: "Συνεδρία #8", en: "Session #8" })}
              </p>
            </div>
            <div className="rounded-lg bg-[var(--color-success)] px-2 py-1 text-[10px] font-semibold text-white">
              {t({ gr: "Αποθηκεύτηκε", en: "Saved" })}
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            {/* Note fields */}
            <div className="space-y-2">
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  {t({ gr: "Υποκειμενικά", en: "Subjective" })}
                </p>
                <p className="mt-1 text-[11px] text-[var(--color-navy)]">
                  {t({
                    gr: "Ο ασθενής αναφέρει βελτίωση στον πόνο. Κλίμακα 4/10.",
                    en: "Patient reports pain improvement. Scale 4/10.",
                  })}
                </p>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  {t({ gr: "Αντικειμενικά", en: "Objective" })}
                </p>
                <p className="mt-1 text-[11px] text-[var(--color-navy)]">
                  {t({
                    gr: "ROM βελτιωμένο. Ενεργητική κάμψη 120°.",
                    en: "ROM improved. Active flexion 120 degrees.",
                  })}
                </p>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  {t({ gr: "Σχέδιο", en: "Plan" })}
                </p>
                <p className="mt-1 text-[11px] text-[var(--color-navy)]">
                  {t({
                    gr: "Συνέχεια ασκήσεων. Επόμενη συνεδρία σε 1 εβδομάδα.",
                    en: "Continue exercises. Next session in 1 week.",
                  })}
                </p>
              </div>
            </div>

            {/* Body chart placeholder */}
            <div className="rounded-xl border border-[var(--color-border)] bg-white p-3 flex flex-col items-center justify-center">
              <div className="relative h-36 w-20">
                {/* Simple body outline */}
                <div className="absolute inset-x-0 top-0 mx-auto h-7 w-7 rounded-full border-2 border-[var(--color-border)]" />
                <div className="absolute inset-x-0 top-8 mx-auto h-14 w-10 rounded-lg border-2 border-[var(--color-border)]" />
                <div className="absolute left-0 top-9 h-12 w-3 rounded-full border-2 border-[var(--color-border)]" />
                <div className="absolute right-0 top-9 h-12 w-3 rounded-full border-2 border-[var(--color-border)]" />
                <div className="absolute left-1 top-[88px] h-12 w-4 rounded-full border-2 border-[var(--color-border)]" />
                <div className="absolute right-1 top-[88px] h-12 w-4 rounded-full border-2 border-[var(--color-border)]" />
                {/* Pain marker */}
                <div className="absolute right-0 top-12 h-3 w-3 rounded-full bg-[var(--color-rose)] shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
              </div>
              <p className="mt-2 text-[10px] text-[var(--color-muted)]">
                {t({ gr: "Σώμα χάρτης", en: "Body chart" })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/* Dashboard / Tasks Mockup                                            */
/* ------------------------------------------------------------------ */

export function DashboardMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  const kpis = [
    { label: t({ gr: "Σημερινά", en: "Today" }), value: "7", color: "#3B82F6" },
    { label: t({ gr: "Εκκρεμή", en: "Pending" }), value: "3", color: "#F59E0B" },
    { label: t({ gr: "Ολοκληρωμένα", en: "Done" }), value: "12", color: "#16A34A" },
    { label: t({ gr: "Έσοδα", en: "Revenue" }), value: "€840", color: "#2EC4B6" },
  ];

  const tasks = [
    { text: t({ gr: "Στείλε υπενθύμιση στον Andreas", en: "Send reminder to Andreas" }), done: false },
    { text: t({ gr: "Σημειώσεις για Elena D.", en: "Notes for Elena D." }), done: false },
    { text: t({ gr: "Τιμολόγηση Nikos M.", en: "Invoice Nikos M." }), done: true },
  ];

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[360px]">
        <Sidebar />
        <div className="flex-1 p-3">
          <p className="mb-3 text-xs font-semibold text-[var(--color-navy)]">
            {t({ gr: "Πίνακας ελέγχου", en: "Dashboard" })}
          </p>

          {/* KPI cards */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-[var(--color-border)] bg-white p-2.5"
              >
                <p className="text-[10px] text-[var(--color-muted)]">{kpi.label}</p>
                <p
                  className="mt-1 text-lg font-bold"
                  style={{ color: kpi.color }}
                >
                  {kpi.value}
                </p>
              </div>
            ))}
          </div>

          {/* Quick actions / Tasks */}
          <div className="rounded-xl border border-[var(--color-border)] bg-white p-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-2">
              {t({ gr: "Εργασίες", en: "Tasks" })}
            </p>
            <div className="space-y-1.5">
              {tasks.map((task) => (
                <div
                  key={task.text}
                  className="flex items-center gap-2 rounded-lg bg-[var(--color-surface-soft)] px-2.5 py-2"
                >
                  <div
                    className={cn(
                      "h-3.5 w-3.5 shrink-0 rounded border",
                      task.done
                        ? "border-[var(--color-success)] bg-[var(--color-success)]"
                        : "border-[var(--color-border)] bg-white",
                    )}
                  >
                    {task.done && (
                      <svg viewBox="0 0 14 14" className="h-full w-full text-white">
                        <path
                          d="M3 7l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-[11px]",
                      task.done
                        ? "text-[var(--color-muted)] line-through"
                        : "text-[var(--color-navy)]",
                    )}
                  >
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/* Billing Mockup                                                      */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Inbox / Communication Mockup                                       */
/* ------------------------------------------------------------------ */

export function InboxMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  const threads = [
    { name: "Maria P.", emoji: "👩", preview: t({ gr: "Σας ευχαριστώ, θα...", en: "Thank you, I will..." }), status: t({ gr: "Ανοιχτό", en: "Open" }), statusColor: "#3B82F6", channel: "Email", unread: true },
    { name: "Andreas K.", emoji: "👨", preview: t({ gr: "Πότε είναι το ραντ...", en: "When is my appointm..." }), status: t({ gr: "Εκκρεμεί", en: "Pending" }), statusColor: "#F59E0B", channel: "WhatsApp", unread: true },
    { name: "Elena D.", emoji: "👩‍🦰", preview: t({ gr: "Ναι, εντάξει!", en: "Yes, sounds good!" }), status: t({ gr: "Επιλυμένο", en: "Resolved" }), statusColor: "#16A34A", channel: "SMS", unread: false },
    { name: "Nikos M.", emoji: "🧔", preview: t({ gr: "Μπορώ να αλλάξω...", en: "Can I reschedule..." }), status: t({ gr: "Ανοιχτό", en: "Open" }), statusColor: "#3B82F6", channel: "Email", unread: false },
  ];

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[360px]">
        <Sidebar />
        <div className="flex-1 p-3">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[var(--color-navy)]">
                {t({ gr: "Εισερχόμενα", en: "Inbox" })}
              </p>
              <p className="text-[10px] text-[var(--color-muted)]">
                {t({ gr: "2 αδιάβαστα", en: "2 unread" })}
              </p>
            </div>
            <div className="rounded-lg bg-[var(--color-blue)] px-2 py-1 text-[10px] font-semibold text-white">
              + {t({ gr: "Νέο μήνυμα", en: "New message" })}
            </div>
          </div>

          <div className="space-y-2">
            {threads.map((thread) => (
              <div
                key={thread.name}
                className={cn(
                  "flex items-center gap-2.5 rounded-[14px] border px-3 py-2.5",
                  thread.unread
                    ? "border-[var(--color-blue)]/20 bg-[var(--color-blue)]/5"
                    : "border-[var(--color-border)] bg-white",
                )}
              >
                <span className="text-lg">{thread.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className={cn("truncate text-xs text-[var(--color-navy)]", thread.unread && "font-semibold")}>
                      {thread.name}
                    </p>
                    {thread.unread && <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blue)]" />}
                  </div>
                  <p className="truncate text-[10px] text-[var(--color-muted)]">{thread.preview}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span className="rounded-full px-1.5 py-0.5 text-[8px] font-semibold text-white" style={{ background: thread.statusColor }}>
                    {thread.status}
                  </span>
                  <span className="text-[8px] text-[var(--color-muted)]">{thread.channel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/* Reports / Analytics Mockup                                          */
/* ------------------------------------------------------------------ */

export function ReportsMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  const kpis = [
    { label: t({ gr: "Σημερινά", en: "Today" }), value: "7", color: "#3B82F6", trend: "+2" },
    { label: t({ gr: "Εκκρεμή", en: "Pending" }), value: "3", color: "#F59E0B", trend: "-1" },
    { label: t({ gr: "Ολοκληρωμένα", en: "Done" }), value: "12", color: "#16A34A", trend: "+5" },
    { label: t({ gr: "Έσοδα", en: "Revenue" }), value: "€840", color: "#2EC4B6", trend: "+12%" },
  ];

  const barData = [40, 65, 45, 80, 55, 70, 90];
  const maxBar = Math.max(...barData);

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[360px]">
        <Sidebar />
        <div className="flex-1 p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-[var(--color-navy)]">
              {t({ gr: "Αναφορές", en: "Reports" })}
            </p>
            <div className="flex gap-1">
              <div className="rounded-lg bg-[var(--color-blue)] px-2 py-1 text-[10px] font-semibold text-white">
                {t({ gr: "Εβδομάδα", en: "Week" })}
              </div>
              <div className="rounded-lg bg-white px-2 py-1 text-[10px] text-[var(--color-muted)] border border-[var(--color-border)]">
                {t({ gr: "Μήνας", en: "Month" })}
              </div>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-1.5 mb-3">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-[var(--color-border)] bg-white p-2">
                <p className="text-[9px] text-[var(--color-muted)]">{kpi.label}</p>
                <p className="text-sm font-bold" style={{ color: kpi.color }}>{kpi.value}</p>
                <p className="text-[8px] text-[var(--color-success)]">{kpi.trend}</p>
              </div>
            ))}
          </div>

          {/* Revenue chart */}
          <div className="rounded-xl border border-[var(--color-border)] bg-white p-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-2">
              {t({ gr: "Έσοδα εβδομάδας", en: "Weekly revenue" })}
            </p>
            <div className="flex items-end gap-1 h-16">
              {barData.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className="w-full rounded-t-sm bg-[var(--color-blue)]"
                    style={{ height: `${(val / maxBar) * 100}%`, opacity: 0.7 + (val / maxBar) * 0.3 }}
                  />
                  <span className="text-[7px] text-[var(--color-muted)]">
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Patient funnel */}
          <div className="mt-2 rounded-xl border border-[var(--color-border)] bg-white p-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1.5">
              {t({ gr: "Patient funnel", en: "Patient funnel" })}
            </p>
            <div className="space-y-1">
              {[
                { label: t({ gr: "Ενεργοί", en: "Active" }), pct: 85, color: "#16A34A" },
                { label: t({ gr: "Κλεισμένοι", en: "Booked" }), pct: 60, color: "#3B82F6" },
                { label: t({ gr: "Enquiry", en: "Enquiry" }), pct: 30, color: "#F59E0B" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="w-12 text-[9px] text-[var(--color-muted)]">{item.label}</span>
                  <div className="flex-1 h-2 rounded-full bg-[var(--color-surface-soft)]">
                    <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/* Letters Mockup                                                      */
/* ------------------------------------------------------------------ */

export function LettersMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[360px]">
        <Sidebar />
        <div className="flex-1 p-3">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[var(--color-navy)]">
                {t({ gr: "AI Επιστολή", en: "AI Letter" })}
              </p>
              <p className="text-[10px] text-[var(--color-muted)]">
                👩 Maria P. — {t({ gr: "Παραπομπή", en: "Referral" })}
              </p>
            </div>
            <div className="flex gap-1">
              <div className="rounded-lg bg-[var(--color-blue)] px-2 py-1 text-[10px] font-semibold text-white">
                {t({ gr: "Αποστολή", en: "Send" })}
              </div>
              <div className="rounded-lg bg-white px-2 py-1 text-[10px] text-[var(--color-muted)] border border-[var(--color-border)]">
                PDF
              </div>
            </div>
          </div>

          {/* Tone selector */}
          <div className="mb-3 flex gap-1.5">
            {[
              { key: "formal", label: t({ gr: "Επίσημο", en: "Formal" }), active: true },
              { key: "clinical", label: t({ gr: "Κλινικό", en: "Clinical" }), active: false },
              { key: "simple", label: t({ gr: "Απλό", en: "Simple" }), active: false },
            ].map((tone) => (
              <div
                key={tone.key}
                className={cn(
                  "rounded-lg px-2 py-1 text-[10px] font-medium",
                  tone.active
                    ? "bg-[var(--color-navy)] text-white"
                    : "border border-[var(--color-border)] bg-white text-[var(--color-muted)]",
                )}
              >
                {tone.label}
              </div>
            ))}
          </div>

          {/* Letter preview */}
          <div className="rounded-xl border border-[var(--color-border)] bg-white p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[var(--color-teal)] animate-pulse" />
              <span className="text-[10px] font-medium text-[var(--color-teal)]">
                {t({ gr: "AI generated", en: "AI generated" })}
              </span>
            </div>
            <p className="text-[11px] text-[var(--color-navy)] font-semibold">
              {t({ gr: "Προς: Dr. Παπαδόπουλος", en: "To: Dr. Papadopoulos" })}
            </p>
            <p className="text-[10px] text-[var(--color-muted)] leading-relaxed">
              {t({
                gr: "Αγαπητέ συνάδελφε, σας παραπέμπω την ασθενή Maria P., 34 ετών, για περαιτέρω αξιολόγηση...",
                en: "Dear colleague, I am referring patient Maria P., 34 years old, for further assessment...",
              })}
            </p>
            <div className="border-t border-dashed border-[var(--color-border)] pt-2">
              <p className="text-[10px] text-[var(--color-muted)] leading-relaxed">
                {t({
                  gr: "Η ασθενής παρουσίασε βελτίωση στο ROM αλλά συνεχίζει να αναφέρει δυσφορία...",
                  en: "The patient showed improvement in ROM but continues to report discomfort...",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/* Billing Mockup                                                      */
/* ------------------------------------------------------------------ */

export function BillingMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  const invoices = [
    { client: "Maria P.", emoji: "👩", amount: "€60", status: t({ gr: "Πληρωμένο", en: "Paid" }), paid: true },
    { client: "Andreas K.", emoji: "👨", amount: "€45", status: t({ gr: "Εκκρεμεί", en: "Pending" }), paid: false },
    { client: "Elena D.", emoji: "👩‍🦰", amount: "€60", status: t({ gr: "Πληρωμένο", en: "Paid" }), paid: true },
    { client: "Nikos M.", emoji: "🧔", amount: "€50", status: t({ gr: "Εκκρεμεί", en: "Pending" }), paid: false },
  ];

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[360px]">
        <Sidebar />
        <div className="flex-1 p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-[var(--color-navy)]">
              {t({ gr: "Χρεώσεις", en: "Billing" })}
            </p>
            <div className="rounded-lg bg-[var(--color-blue)] px-2 py-1 text-[10px] font-semibold text-white">
              + {t({ gr: "Νέα χρέωση", en: "New invoice" })}
            </div>
          </div>

          {/* Summary */}
          <div className="mb-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-[var(--color-border)] bg-white p-2.5">
              <p className="text-[10px] text-[var(--color-muted)]">{t({ gr: "Αυτόν τον μήνα", en: "This month" })}</p>
              <p className="mt-1 text-lg font-bold text-[var(--color-success)]">€840</p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-white p-2.5">
              <p className="text-[10px] text-[var(--color-muted)]">{t({ gr: "Εκκρεμή", en: "Outstanding" })}</p>
              <p className="mt-1 text-lg font-bold text-[var(--color-amber)]">€95</p>
            </div>
          </div>

          <div className="space-y-2">
            {invoices.map((inv) => (
              <div
                key={inv.client}
                className="flex items-center gap-2.5 rounded-[14px] border border-[var(--color-border)] bg-white px-3 py-2"
              >
                <span className="text-lg">{inv.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-xs font-semibold text-[var(--color-navy)]">{inv.client}</p>
                </div>
                <span className="text-xs font-semibold text-[var(--color-navy)]">{inv.amount}</span>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white",
                    inv.paid ? "bg-[var(--color-success)]" : "bg-[var(--color-amber)]",
                  )}
                >
                  {inv.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupShell>
  );
}
