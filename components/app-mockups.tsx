"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "./language-context";

/* ------------------------------------------------------------------ */
/* Shared mockup primitives — HIGH FIDELITY                           */
/* ------------------------------------------------------------------ */

function MockupShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mockup-chrome select-none", className)}>
      <div className="bg-[#F4F7FB]">{children}</div>
    </div>
  );
}

function Avatar({
  initials,
  color,
  size = "md",
}: {
  initials: string;
  color: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = { sm: "h-6 w-6 text-[8px]", md: "h-8 w-8 text-[10px]", lg: "h-10 w-10 text-xs" };
  return (
    <div
      className={cn("shrink-0 flex items-center justify-center rounded-full font-bold text-white", sizes[size])}
      style={{ background: color }}
    >
      {initials}
    </div>
  );
}

function Badge({
  label,
  color,
  variant = "solid",
}: {
  label: string;
  color: string;
  variant?: "solid" | "soft";
}) {
  return variant === "solid" ? (
    <span className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold text-white" style={{ background: color }}>
      {label}
    </span>
  ) : (
    <span className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold" style={{ background: `${color}18`, color }}>
      {label}
    </span>
  );
}

function MiniButton({ label, primary }: { label: string; primary?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-lg px-2.5 py-1 text-[10px] font-semibold cursor-default",
        primary
          ? "bg-[var(--color-blue)] text-white shadow-sm"
          : "border border-[var(--color-border)] bg-white text-[var(--color-muted)]",
      )}
    >
      {label}
    </div>
  );
}

function SidebarNav({ active }: { active: number }) {
  const { t } = useLanguage();
  const items = [
    { icon: "📅", label: t({ gr: "Ημερολόγιο", en: "Calendar" }) },
    { icon: "👥", label: t({ gr: "Ασθενείς", en: "Patients" }) },
    { icon: "📋", label: t({ gr: "Σημειώσεις", en: "Notes" }) },
    { icon: "💶", label: t({ gr: "Χρεώσεις", en: "Billing" }) },
    { icon: "💬", label: t({ gr: "Εισερχόμενα", en: "Inbox" }) },
    { icon: "📊", label: t({ gr: "Αναφορές", en: "Reports" }) },
    { icon: "✅", label: t({ gr: "Εργασίες", en: "Tasks" }) },
  ];
  return (
    <div className="flex w-[52px] shrink-0 flex-col items-center gap-1 border-r border-[var(--color-border)] bg-white py-3">
      {/* Logo */}
      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-blue-dark)] text-[10px] font-extrabold text-white shadow-sm">
        C
      </div>
      {items.map((item, i) => (
        <div
          key={item.label}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-xl text-[13px] transition-colors",
            i === active
              ? "bg-[var(--color-blue)]/10 shadow-sm ring-1 ring-[var(--color-blue)]/20"
              : "hover:bg-[var(--color-surface-soft)]",
          )}
          title={item.label}
        >
          {item.icon}
        </div>
      ))}
      <div className="mt-auto flex h-8 w-8 items-center justify-center rounded-xl text-[13px] hover:bg-[var(--color-surface-soft)]">
        ⚙️
      </div>
    </div>
  );
}

function TopBar({ title, subtitle, children }: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-white/80 px-3.5 py-2.5">
      <div>
        <p className="text-[11px] font-bold text-[var(--color-navy)] tracking-tight">{title}</p>
        {subtitle && <p className="text-[9px] text-[var(--color-muted)] mt-0.5">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-1.5">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Calendar Mockup — Day view with time grid & overlapping events     */
/* ------------------------------------------------------------------ */

export function CalendarMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];

  const appointments = [
    { top: 24, height: 44, name: "Maria P.", initials: "MP", color: "#3B82F6", type: t({ gr: "Follow-up", en: "Follow-up" }), time: "09:00–09:45", col: 0 },
    { top: 68, height: 58, name: "Andreas K.", initials: "AK", color: "#2EC4B6", type: t({ gr: "Αρχική αξιολόγηση", en: "Initial assessment" }), time: "10:00–11:00", col: 0 },
    { top: 84, height: 30, name: "Elena D.", initials: "ED", color: "#F59E0B", type: t({ gr: "Τηλ. ραντεβού", en: "Phone consult" }), time: "10:30–11:00", col: 1 },
    { top: 150, height: 44, name: "Nikos M.", initials: "NM", color: "#F43F5E", type: t({ gr: "Θεραπεία", en: "Treatment" }), time: "12:30–13:15", col: 0 },
    { top: 175, height: 44, name: "Sofia T.", initials: "ST", color: "#16A34A", type: t({ gr: "Follow-up", en: "Follow-up" }), time: "13:00–13:45", col: 0 },
    { top: 200, height: 30, name: "Christos L.", initials: "CL", color: "#8B5CF6", type: t({ gr: "Αξιολόγηση", en: "Assessment" }), time: "14:00–14:30", col: 0 },
  ];

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[380px]">
        <SidebarNav active={0} />
        <div className="flex-1 flex flex-col">
          <TopBar
            title={t({ gr: "Ημερολόγιο", en: "Calendar" })}
            subtitle={t({ gr: "Τετάρτη, 9 Απρ 2026 — 6 ραντεβού", en: "Wednesday, 9 Apr 2026 — 6 appointments" })}
          >
            <MiniButton label={t({ gr: "Ημέρα", en: "Day" })} primary />
            <MiniButton label={t({ gr: "Εβδομάδα", en: "Week" })} />
            <MiniButton label={t({ gr: "Μήνας", en: "Month" })} />
            <div className="ml-1 rounded-lg bg-[var(--color-navy)] px-2.5 py-1 text-[10px] font-semibold text-white">
              + {t({ gr: "Νέο", en: "New" })}
            </div>
          </TopBar>

          <div className="flex-1 overflow-hidden px-3 py-2">
            {/* Practitioner tabs */}
            <div className="mb-2 flex gap-1.5">
              <div className="flex items-center gap-1 rounded-full bg-[var(--color-blue)]/10 px-2 py-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)]" />
                <span className="text-[9px] font-semibold text-[var(--color-blue)]">Dr. K.</span>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-[var(--color-surface-soft)] px-2 py-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal)]" />
                <span className="text-[9px] text-[var(--color-muted)]">Maria T.</span>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-[var(--color-surface-soft)] px-2 py-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-rose)]" />
                <span className="text-[9px] text-[var(--color-muted)]">{t({ gr: "Όλοι", en: "All" })}</span>
              </div>
            </div>

            {/* Time grid */}
            <div className="relative">
              {hours.map((hour) => (
                <div key={hour} className="flex h-[32px] border-t border-dashed border-[var(--color-border)]/50">
                  <span className="w-9 shrink-0 -mt-1.5 text-[8px] text-[var(--color-muted)]/70">{hour}</span>
                </div>
              ))}
              {/* Current time indicator */}
              <div className="absolute left-9 right-0 top-[55px] flex items-center z-20">
                <div className="h-2 w-2 -ml-1 rounded-full bg-[var(--color-rose)]" />
                <div className="flex-1 h-[1.5px] bg-[var(--color-rose)]" />
              </div>
              {/* Appointment blocks */}
              {appointments.map((appt) => (
                <div
                  key={appt.name}
                  className="absolute rounded-lg px-2 py-1 border-l-[3px] overflow-hidden"
                  style={{
                    top: `${appt.top}px`,
                    height: `${appt.height}px`,
                    left: appt.col === 1 ? "calc(50% + 18px)" : "36px",
                    right: appt.col === 1 ? "4px" : (appointments.some(a => a !== appt && a.col === 1 && Math.abs(a.top - appt.top) < 40) ? "50%" : "4px"),
                    borderColor: appt.color,
                    background: `${appt.color}12`,
                  }}
                >
                  <div className="flex items-center gap-1">
                    <Avatar initials={appt.initials} color={appt.color} size="sm" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[9px] font-semibold text-[var(--color-navy)]">{appt.name}</p>
                      <p className="truncate text-[8px] text-[var(--color-muted)]">{appt.type} · {appt.time}</p>
                    </div>
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
/* Patients Mockup — Table view with columns, search, filters         */
/* ------------------------------------------------------------------ */

export function PatientsMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  const patients = [
    { name: "Maria Papadopoulou", initials: "MP", color: "#3B82F6", stage: t({ gr: "Ενεργή", en: "Active" }), stageColor: "#16A34A", visits: 8, lastVisit: "07 Apr", phone: "+357 99 ···42", insurance: "GESY" },
    { name: "Andreas Kosta", initials: "AK", color: "#2EC4B6", stage: t({ gr: "Νέος", en: "New" }), stageColor: "#3B82F6", visits: 1, lastVisit: "09 Apr", phone: "+357 96 ···18", insurance: "—" },
    { name: "Elena Dimitriou", initials: "ED", color: "#F59E0B", stage: t({ gr: "Ενεργή", en: "Active" }), stageColor: "#16A34A", visits: 12, lastVisit: "05 Apr", phone: "+357 97 ···55", insurance: "GESY" },
    { name: "Nikos Michail", initials: "NM", color: "#F43F5E", stage: t({ gr: "Ολοκλ.", en: "Done" }), stageColor: "#D97706", visits: 6, lastVisit: "28 Mar", phone: "+357 99 ···71", insurance: "Private" },
    { name: "Sofia Theodorou", initials: "ST", color: "#16A34A", stage: t({ gr: "Ενεργή", en: "Active" }), stageColor: "#16A34A", visits: 4, lastVisit: "08 Apr", phone: "+357 96 ···34", insurance: "GESY" },
    { name: "Christos Loizou", initials: "CL", color: "#8B5CF6", stage: t({ gr: "Enquiry", en: "Enquiry" }), stageColor: "#8B5CF6", visits: 0, lastVisit: "—", phone: "+357 99 ···09", insurance: "—" },
  ];

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[380px]">
        <SidebarNav active={1} />
        <div className="flex-1 flex flex-col">
          <TopBar
            title={t({ gr: "Ασθενείς", en: "Patients" })}
            subtitle={`${patients.length} ${t({ gr: "εγγραφές", en: "records" })}`}
          >
            <div className="flex items-center gap-1 rounded-lg border border-[var(--color-border)] bg-white px-2 py-1">
              <span className="text-[10px] text-[var(--color-muted)]">🔍</span>
              <span className="text-[9px] text-[var(--color-muted)]/60">{t({ gr: "Αναζήτηση...", en: "Search..." })}</span>
            </div>
            <MiniButton label={t({ gr: "Φίλτρα", en: "Filters" })} />
            <div className="rounded-lg bg-[var(--color-navy)] px-2.5 py-1 text-[10px] font-semibold text-white">
              + {t({ gr: "Νέος", en: "New" })}
            </div>
          </TopBar>

          <div className="flex-1 px-3 py-2">
            {/* Column headers */}
            <div className="flex items-center gap-2 px-2 pb-1.5 border-b border-[var(--color-border)]">
              <span className="flex-1 text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)]">{t({ gr: "Ονοματεπώνυμο", en: "Name" })}</span>
              <span className="w-14 text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)]">{t({ gr: "Κατάσταση", en: "Status" })}</span>
              <span className="w-10 text-center text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)]">{t({ gr: "Επισκ.", en: "Visits" })}</span>
              <span className="w-14 text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)]">{t({ gr: "Τελευταία", en: "Last" })}</span>
              <span className="w-14 text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)] hidden sm:block">{t({ gr: "Ασφάλεια", en: "Insurance" })}</span>
            </div>

            {/* Patient rows */}
            <div className="divide-y divide-[var(--color-border)]/50">
              {patients.map((p, i) => (
                <div
                  key={p.name}
                  className={cn(
                    "flex items-center gap-2 px-2 py-2 rounded-lg transition-colors",
                    i === 0 && "bg-[var(--color-blue)]/5",
                  )}
                >
                  <div className="flex flex-1 items-center gap-2 min-w-0">
                    <Avatar initials={p.initials} color={p.color} size="sm" />
                    <div className="min-w-0">
                      <p className="truncate text-[10px] font-semibold text-[var(--color-navy)]">{p.name}</p>
                      <p className="text-[8px] text-[var(--color-muted)]">{p.phone}</p>
                    </div>
                  </div>
                  <div className="w-14"><Badge label={p.stage} color={p.stageColor} variant="soft" /></div>
                  <span className="w-10 text-center text-[10px] font-semibold text-[var(--color-navy)]">{p.visits}</span>
                  <span className="w-14 text-[9px] text-[var(--color-muted)]">{p.lastVisit}</span>
                  <span className="w-14 text-[9px] text-[var(--color-muted)] hidden sm:block">{p.insurance}</span>
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
/* Notes Mockup — SOAP fields + body chart + toolbar                  */
/* ------------------------------------------------------------------ */

export function NotesMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[380px]">
        <SidebarNav active={2} />
        <div className="flex-1 flex flex-col">
          <TopBar
            title={t({ gr: "Κλινικές σημειώσεις", en: "Clinical Notes" })}
            subtitle="Maria P. — Session #8"
          >
            <Badge label={t({ gr: "Αυτόματη αποθήκευση", en: "Auto-saved" })} color="#16A34A" variant="soft" />
            <MiniButton label={t({ gr: "Κλείδωμα", en: "Lock" })} />
            <MiniButton label="PDF" />
          </TopBar>

          <div className="flex-1 p-3">
            {/* Template selector */}
            <div className="mb-2.5 flex items-center gap-1.5">
              <span className="text-[9px] text-[var(--color-muted)]">{t({ gr: "Template:", en: "Template:" })}</span>
              <div className="rounded-md bg-[var(--color-blue)]/10 px-2 py-0.5 text-[9px] font-semibold text-[var(--color-blue)]">
                SOAP
              </div>
              <div className="rounded-md bg-[var(--color-surface-soft)] px-2 py-0.5 text-[9px] text-[var(--color-muted)]">
                MSK
              </div>
              <div className="rounded-md bg-[var(--color-surface-soft)] px-2 py-0.5 text-[9px] text-[var(--color-muted)]">
                Custom
              </div>
              <div className="ml-auto flex items-center gap-1 rounded-md bg-[var(--color-teal)]/10 px-2 py-0.5">
                <span className="text-[9px]">✨</span>
                <span className="text-[9px] font-semibold text-[var(--color-teal)]">AI Assist</span>
              </div>
            </div>

            <div className="grid gap-2 md:grid-cols-[1fr_140px]">
              {/* SOAP note fields */}
              <div className="space-y-1.5">
                {[
                  { label: t({ gr: "Υποκειμενικά", en: "Subjective" }), color: "#3B82F6", text: t({ gr: "Ασθενής αναφέρει βελτίωση πόνου. VAS 4/10 (ήταν 7/10). Καλύτερος ύπνος.", en: "Patient reports pain improvement. VAS 4/10 (was 7/10). Better sleep." }) },
                  { label: t({ gr: "Αντικειμενικά", en: "Objective" }), color: "#16A34A", text: t({ gr: "ROM βελτιωμένο. Ενεργητική κάμψη 120° (ήταν 95°). MMT 4/5 deltoid.", en: "ROM improved. Active flexion 120° (was 95°). MMT 4/5 deltoid." }) },
                  { label: t({ gr: "Αξιολόγηση", en: "Assessment" }), color: "#F59E0B", text: t({ gr: "Σημαντική πρόοδος. Στόχοι 75% επιτευχθέντες.", en: "Significant progress. Goals 75% achieved." }) },
                  { label: t({ gr: "Σχέδιο", en: "Plan" }), color: "#8B5CF6", text: t({ gr: "Ασκήσεις σπιτιού ×2/ημέρα. Επόμενη σε 1 εβδ. Referral ορθοπεδικό.", en: "Home exercises ×2/day. Next in 1 wk. Referral orthopaedic." }) },
                ].map((field) => (
                  <div key={field.label} className="rounded-xl border border-[var(--color-border)] bg-white p-2">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="h-1.5 w-1.5 rounded-full" style={{ background: field.color }} />
                      <p className="text-[8px] font-bold uppercase tracking-wider" style={{ color: field.color }}>{field.label}</p>
                    </div>
                    <p className="text-[10px] leading-[1.5] text-[var(--color-navy)]">{field.text}</p>
                  </div>
                ))}
              </div>

              {/* Body chart */}
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-2 flex flex-col items-center">
                <p className="text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)] mb-1.5">
                  {t({ gr: "Body chart", en: "Body chart" })}
                </p>
                <div className="relative h-[130px] w-[56px] mx-auto">
                  {/* Head */}
                  <div className="absolute inset-x-0 top-0 mx-auto h-[16px] w-[16px] rounded-full border-[1.5px] border-[#CBD5E1]" />
                  {/* Torso */}
                  <div className="absolute left-[10px] top-[18px] h-[36px] w-[36px] rounded-[6px] border-[1.5px] border-[#CBD5E1]" />
                  {/* Arms */}
                  <div className="absolute left-[2px] top-[20px] h-[30px] w-[8px] rounded-full border-[1.5px] border-[#CBD5E1]" />
                  <div className="absolute right-[2px] top-[20px] h-[30px] w-[8px] rounded-full border-[1.5px] border-[#CBD5E1]" />
                  {/* Legs */}
                  <div className="absolute left-[12px] top-[56px] h-[38px] w-[12px] rounded-full border-[1.5px] border-[#CBD5E1]" />
                  <div className="absolute right-[12px] top-[56px] h-[38px] w-[12px] rounded-full border-[1.5px] border-[#CBD5E1]" />

                  {/* Pain markers */}
                  <div className="absolute right-[3px] top-[28px] h-[10px] w-[10px] rounded-full bg-[var(--color-rose)] shadow-[0_0_6px_rgba(244,63,94,0.6)] flex items-center justify-center">
                    <span className="text-[6px] font-bold text-white">7</span>
                  </div>
                  <div className="absolute left-[14px] top-[62px] h-[8px] w-[8px] rounded-full bg-[var(--color-amber)] shadow-[0_0_6px_rgba(245,158,11,0.5)] flex items-center justify-center">
                    <span className="text-[5px] font-bold text-white">4</span>
                  </div>
                </div>
                {/* Legend */}
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-rose)]" />
                    <span className="text-[7px] text-[var(--color-muted)]">{t({ gr: "Πόνος", en: "Pain" })}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-amber)]" />
                    <span className="text-[7px] text-[var(--color-muted)]">{t({ gr: "Δυσκαμψία", en: "Stiffness" })}</span>
                  </div>
                </div>

                {/* Measurements mini-table */}
                <div className="mt-2 w-full border-t border-dashed border-[var(--color-border)] pt-1.5">
                  <p className="text-[7px] font-bold uppercase text-[var(--color-muted)] mb-1">{t({ gr: "Μετρήσεις", en: "Measurements" })}</p>
                  {[
                    { label: "Flexion", val: "120°", prev: "95°" },
                    { label: "Extension", val: "0°", prev: "−5°" },
                  ].map((m) => (
                    <div key={m.label} className="flex items-center justify-between text-[7px]">
                      <span className="text-[var(--color-muted)]">{m.label}</span>
                      <span className="font-semibold text-[var(--color-navy)]">{m.val}</span>
                      <span className="text-[var(--color-success)]">↑ {m.prev}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/* Dashboard / Tasks Mockup                                           */
/* ------------------------------------------------------------------ */

export function DashboardMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  const kpis = [
    { label: t({ gr: "Σήμερα", en: "Today" }), value: "7", sub: t({ gr: "ραντεβού", en: "appts" }), color: "#3B82F6", trend: "+2" },
    { label: t({ gr: "Εκκρεμή", en: "Pending" }), value: "3", sub: t({ gr: "εργασίες", en: "tasks" }), color: "#F59E0B", trend: "" },
    { label: t({ gr: "Ολοκληρωμένα", en: "Done" }), value: "12", sub: t({ gr: "αυτή τη βδ.", en: "this week" }), color: "#16A34A", trend: "+5" },
    { label: t({ gr: "Έσοδα", en: "Revenue" }), value: "€840", sub: t({ gr: "μήνας", en: "month" }), color: "#2EC4B6", trend: "+12%" },
  ];

  const tasks = [
    { text: t({ gr: "Υπενθύμιση → Andreas K.", en: "Reminder → Andreas K." }), done: false, priority: "high" },
    { text: t({ gr: "Σημειώσεις Elena D.", en: "Notes for Elena D." }), done: false, priority: "med" },
    { text: t({ gr: "GESY claim #4821", en: "GESY claim #4821" }), done: false, priority: "med" },
    { text: t({ gr: "Τιμολόγιο Nikos M.", en: "Invoice Nikos M." }), done: true, priority: "low" },
    { text: t({ gr: "Follow-up SMS Sofia T.", en: "Follow-up SMS Sofia T." }), done: true, priority: "low" },
  ];

  const priorityColors: Record<string, string> = { high: "#F43F5E", med: "#F59E0B", low: "#16A34A" };

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[380px]">
        <SidebarNav active={6} />
        <div className="flex-1 flex flex-col">
          <TopBar
            title={t({ gr: "Πίνακας ελέγχου", en: "Dashboard" })}
            subtitle={t({ gr: "Καλημέρα, Dr. Christos", en: "Good morning, Dr. Christos" })}
          >
            <MiniButton label={t({ gr: "Σήμερα", en: "Today" })} primary />
            <MiniButton label={t({ gr: "Εβδομάδα", en: "Week" })} />
          </TopBar>

          <div className="flex-1 p-3">
            {/* KPI cards */}
            <div className="grid grid-cols-4 gap-1.5 mb-3">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-[var(--color-border)] bg-white p-2">
                  <p className="text-[8px] text-[var(--color-muted)]">{kpi.label}</p>
                  <div className="flex items-baseline gap-1">
                    <p className="text-base font-bold" style={{ color: kpi.color }}>{kpi.value}</p>
                    {kpi.trend && <span className="text-[7px] font-semibold text-[var(--color-success)]">{kpi.trend}</span>}
                  </div>
                  <p className="text-[7px] text-[var(--color-muted)]">{kpi.sub}</p>
                </div>
              ))}
            </div>

            {/* Tasks */}
            <div className="rounded-xl border border-[var(--color-border)] bg-white p-2.5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  {t({ gr: "Εργασίες", en: "Tasks" })}
                </p>
                <span className="text-[8px] text-[var(--color-muted)]">3/5</span>
              </div>
              <div className="space-y-1">
                {tasks.map((task) => (
                  <div key={task.text} className="flex items-center gap-2 rounded-lg bg-[var(--color-surface-soft)] px-2.5 py-1.5">
                    <div className={cn(
                      "h-3.5 w-3.5 shrink-0 rounded border flex items-center justify-center",
                      task.done ? "border-[var(--color-success)] bg-[var(--color-success)]" : "border-[var(--color-border)] bg-white",
                    )}>
                      {task.done && (
                        <svg viewBox="0 0 14 14" className="h-2.5 w-2.5 text-white">
                          <path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className={cn("flex-1 text-[10px]", task.done ? "text-[var(--color-muted)] line-through" : "text-[var(--color-navy)]")}>
                      {task.text}
                    </span>
                    {!task.done && (
                      <div className="h-1.5 w-1.5 rounded-full" style={{ background: priorityColors[task.priority] }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/* Inbox / Communication Mockup                                       */
/* ------------------------------------------------------------------ */

export function InboxMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  const channelIcons: Record<string, string> = { Email: "📧", WhatsApp: "💬", SMS: "📱" };
  const threads = [
    { name: "Maria P.", initials: "MP", color: "#3B82F6", preview: t({ gr: "Σας ευχαριστώ για τη σημερινή συνεδρία...", en: "Thank you for today's session..." }), status: t({ gr: "Ανοιχτό", en: "Open" }), statusColor: "#3B82F6", channel: "Email", time: "10:32", unread: true },
    { name: "Andreas K.", initials: "AK", color: "#2EC4B6", preview: t({ gr: "Μπορώ να αλλάξω το ραντεβού μου;", en: "Can I reschedule my appointment?" }), status: t({ gr: "Εκκρεμεί", en: "Pending" }), statusColor: "#F59E0B", channel: "WhatsApp", time: "09:45", unread: true },
    { name: "Elena D.", initials: "ED", color: "#F59E0B", preview: t({ gr: "Ναι, τέλεια! Τα λέμε τότε.", en: "Yes, perfect! See you then." }), status: t({ gr: "Κλειστό", en: "Closed" }), statusColor: "#16A34A", channel: "SMS", time: t({ gr: "Χθες", en: "Yday" }), unread: false },
    { name: "Nikos M.", initials: "NM", color: "#F43F5E", preview: t({ gr: "Στέλνω τα αποτελέσματα εξετάσεων...", en: "Sending the lab results over..." }), status: t({ gr: "Ανοιχτό", en: "Open" }), statusColor: "#3B82F6", channel: "Email", time: t({ gr: "Χθες", en: "Yday" }), unread: false },
  ];

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[380px]">
        <SidebarNav active={4} />
        <div className="flex-1 flex flex-col">
          <TopBar
            title={t({ gr: "Εισερχόμενα", en: "Inbox" })}
            subtitle={`2 ${t({ gr: "αδιάβαστα", en: "unread" })}`}
          >
            <MiniButton label={t({ gr: "Όλα", en: "All" })} primary />
            <MiniButton label="Email" />
            <MiniButton label="WhatsApp" />
            <MiniButton label="SMS" />
            <div className="ml-1 rounded-lg bg-[var(--color-navy)] px-2.5 py-1 text-[10px] font-semibold text-white">
              + {t({ gr: "Νέο", en: "New" })}
            </div>
          </TopBar>

          <div className="flex-1 px-3 py-2 space-y-1.5">
            {threads.map((thread) => (
              <div
                key={thread.name}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-colors",
                  thread.unread
                    ? "border-[var(--color-blue)]/20 bg-[var(--color-blue)]/[0.04]"
                    : "border-[var(--color-border)] bg-white",
                )}
              >
                <Avatar initials={thread.initials} color={thread.color} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className={cn("truncate text-[10px] text-[var(--color-navy)]", thread.unread && "font-bold")}>
                      {thread.name}
                    </p>
                    {thread.unread && <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blue)]" />}
                    <span className="ml-auto shrink-0 text-[8px] text-[var(--color-muted)]">{thread.time}</span>
                  </div>
                  <p className="truncate text-[9px] text-[var(--color-muted)] mt-0.5">{thread.preview}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <Badge label={thread.status} color={thread.statusColor} variant="soft" />
                  <span className="text-[9px]">{channelIcons[thread.channel]}</span>
                </div>
              </div>
            ))}

            {/* Quick reply bar */}
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-dashed border-[var(--color-border)] bg-white/60 px-3 py-2">
              <span className="text-[9px] text-[var(--color-muted)]">💡</span>
              <span className="text-[9px] text-[var(--color-muted)] italic">
                {t({ gr: "Επιλέξτε thread για γρήγορη απάντηση...", en: "Select a thread to quick-reply..." })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/* Reports / Analytics Mockup                                         */
/* ------------------------------------------------------------------ */

export function ReportsMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  const kpis = [
    { label: t({ gr: "Ασθενείς", en: "Patients" }), value: "142", color: "#3B82F6", trend: "+8" },
    { label: t({ gr: "Ραντεβού", en: "Appts" }), value: "87", color: "#2EC4B6", trend: "+12" },
    { label: t({ gr: "Έσοδα", en: "Revenue" }), value: "€4.2k", color: "#16A34A", trend: "+18%" },
    { label: t({ gr: "No-shows", en: "No-shows" }), value: "3%", color: "#F43F5E", trend: "−2%" },
  ];

  const barData = [32, 48, 42, 58, 52, 68, 72];
  const maxBar = Math.max(...barData);
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[380px]">
        <SidebarNav active={5} />
        <div className="flex-1 flex flex-col">
          <TopBar
            title={t({ gr: "Αναφορές", en: "Reports" })}
            subtitle={t({ gr: "Απρίλιος 2026", en: "April 2026" })}
          >
            <MiniButton label={t({ gr: "Εβδομάδα", en: "Week" })} primary />
            <MiniButton label={t({ gr: "Μήνας", en: "Month" })} />
            <MiniButton label={t({ gr: "Έτος", en: "Year" })} />
            <MiniButton label="CSV ↓" />
          </TopBar>

          <div className="flex-1 p-3">
            {/* KPI row */}
            <div className="grid grid-cols-4 gap-1.5 mb-3">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-[var(--color-border)] bg-white p-2">
                  <p className="text-[8px] text-[var(--color-muted)]">{kpi.label}</p>
                  <p className="text-sm font-bold" style={{ color: kpi.color }}>{kpi.value}</p>
                  <p className={cn("text-[7px] font-semibold", kpi.trend.startsWith("−") || kpi.trend.startsWith("-") ? "text-[var(--color-rose)]" : "text-[var(--color-success)]")}>{kpi.trend}</p>
                </div>
              ))}
            </div>

            {/* Revenue chart */}
            <div className="rounded-xl border border-[var(--color-border)] bg-white p-2.5 mb-2">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  {t({ gr: "Εβδομαδιαία έσοδα", en: "Weekly revenue" })}
                </p>
                <span className="text-[9px] font-semibold text-[var(--color-navy)]">€4,218</span>
              </div>
              <div className="flex items-end gap-1 h-14">
                {barData.map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className="w-full rounded-t-sm transition-all"
                      style={{
                        height: `${(val / maxBar) * 100}%`,
                        background: i === barData.length - 1 ? "var(--color-blue)" : `var(--color-blue)`,
                        opacity: 0.4 + (val / maxBar) * 0.6,
                      }}
                    />
                    <span className="text-[7px] text-[var(--color-muted)]">{days[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Funnel + utilisation side by side */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-2">
                <p className="text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)] mb-1.5">
                  {t({ gr: "Patient funnel", en: "Patient funnel" })}
                </p>
                {[
                  { label: t({ gr: "Ενεργοί", en: "Active" }), pct: 85, color: "#16A34A" },
                  { label: t({ gr: "Κλεισμένοι", en: "Booked" }), pct: 60, color: "#3B82F6" },
                  { label: t({ gr: "Νέοι", en: "New" }), pct: 35, color: "#F59E0B" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5 mb-1">
                    <span className="w-10 text-[8px] text-[var(--color-muted)]">{item.label}</span>
                    <div className="flex-1 h-2 rounded-full bg-[var(--color-surface-soft)]">
                      <div className="h-full rounded-full transition-all" style={{ width: `${item.pct}%`, background: item.color }} />
                    </div>
                    <span className="text-[7px] font-semibold" style={{ color: item.color }}>{item.pct}%</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-2">
                <p className="text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)] mb-1.5">
                  {t({ gr: "Χρήση", en: "Utilisation" })}
                </p>
                {/* Donut-like ring */}
                <div className="flex items-center justify-center">
                  <div className="relative h-12 w-12">
                    <svg viewBox="0 0 36 36" className="h-full w-full">
                      <circle cx="18" cy="18" r="15" fill="none" stroke="var(--color-surface-soft)" strokeWidth="3" />
                      <circle cx="18" cy="18" r="15" fill="none" stroke="var(--color-blue)" strokeWidth="3" strokeDasharray="72 28" strokeDashoffset="25" strokeLinecap="round" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[var(--color-navy)]">72%</span>
                  </div>
                </div>
                <p className="text-center text-[8px] text-[var(--color-muted)] mt-1">{t({ gr: "Πληρότητα", en: "Fill rate" })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/* AI Letters Mockup                                                  */
/* ------------------------------------------------------------------ */

export function LettersMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[380px]">
        <SidebarNav active={2} />
        <div className="flex-1 flex flex-col">
          <TopBar
            title={t({ gr: "AI Επιστολή Παραπομπής", en: "AI Referral Letter" })}
            subtitle="Maria P. → Dr. Papadopoulos"
          >
            <MiniButton label={t({ gr: "Αποστολή", en: "Send" })} primary />
            <MiniButton label="PDF" />
            <MiniButton label={t({ gr: "Αντιγραφή", en: "Copy" })} />
          </TopBar>

          <div className="flex-1 p-3">
            {/* Tone selector */}
            <div className="mb-2.5 flex items-center gap-1.5">
              <span className="text-[9px] text-[var(--color-muted)]">{t({ gr: "Τόνος:", en: "Tone:" })}</span>
              {[
                { key: "formal", label: t({ gr: "Επίσημο", en: "Formal" }), active: true },
                { key: "clinical", label: t({ gr: "Κλινικό", en: "Clinical" }), active: false },
                { key: "simple", label: t({ gr: "Απλό", en: "Simple" }), active: false },
              ].map((tone) => (
                <div key={tone.key} className={cn(
                  "rounded-lg px-2 py-0.5 text-[9px] font-medium",
                  tone.active ? "bg-[var(--color-navy)] text-white" : "border border-[var(--color-border)] bg-white text-[var(--color-muted)]",
                )}>
                  {tone.label}
                </div>
              ))}
              <div className="ml-auto flex items-center gap-1 rounded-md bg-[var(--color-teal)]/10 px-2 py-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal)] animate-pulse" />
                <span className="text-[9px] font-semibold text-[var(--color-teal)]">AI Generated</span>
              </div>
            </div>

            {/* Letter content */}
            <div className="rounded-xl border border-[var(--color-border)] bg-white p-3.5 space-y-2.5">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2">
                <div>
                  <p className="text-[10px] font-bold text-[var(--color-navy)]">{t({ gr: "Επιστολή παραπομπής", en: "Referral Letter" })}</p>
                  <p className="text-[8px] text-[var(--color-muted)]">{t({ gr: "Ημ/νία: 9 Απρ 2026", en: "Date: 9 Apr 2026" })}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-semibold text-[var(--color-navy)]">Dr. Christos K.</p>
                  <p className="text-[8px] text-[var(--color-muted)]">{t({ gr: "Φυσιοθεραπευτής", en: "Physiotherapist" })}</p>
                </div>
              </div>

              <p className="text-[10px] font-semibold text-[var(--color-navy)]">
                {t({ gr: "Προς: Dr. Ν. Παπαδόπουλος — Ορθοπεδικός", en: "To: Dr. N. Papadopoulos — Orthopaedic" })}
              </p>

              <div className="space-y-1.5">
                <p className="text-[9px] text-[var(--color-muted)] leading-relaxed">
                  {t({
                    gr: "Αγαπητέ συνάδελφε, σας παραπέμπω την ασθενή Maria P., 34 ετών, με χρόνιο πόνο δεξιού ώμου 6 μηνών.",
                    en: "Dear colleague, I am referring patient Maria P., 34 years old, with chronic right shoulder pain for 6 months.",
                  })}
                </p>
                <p className="text-[9px] text-[var(--color-muted)] leading-relaxed">
                  {t({
                    gr: "Μετά από 8 συνεδρίες φυσιοθεραπείας, παρατηρήθηκε βελτίωση ROM (κάμψη 120°) αλλά επιμένει νυχτερινός πόνος.",
                    en: "After 8 physiotherapy sessions, ROM improved (flexion 120°) but nocturnal pain persists.",
                  })}
                </p>
              </div>

              {/* Clinical data pulled from notes */}
              <div className="rounded-lg bg-[var(--color-surface-soft)] p-2">
                <p className="text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)] mb-1">
                  {t({ gr: "Κλινικά δεδομένα (auto-filled)", en: "Clinical data (auto-filled)" })}
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-[8px]">
                  <span className="text-[var(--color-muted)]">VAS:</span>
                  <span className="font-semibold text-[var(--color-navy)]">4/10</span>
                  <span className="text-[var(--color-muted)]">ROM Flex:</span>
                  <span className="font-semibold text-[var(--color-navy)]">120°</span>
                  <span className="text-[var(--color-muted)]">Sessions:</span>
                  <span className="font-semibold text-[var(--color-navy)]">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ------------------------------------------------------------------ */
/* Billing Mockup — Invoice table + summary                           */
/* ------------------------------------------------------------------ */

export function BillingMockup({ className }: { className?: string }) {
  const { t } = useLanguage();

  const invoices = [
    { id: "INV-041", client: "Maria P.", initials: "MP", color: "#3B82F6", amount: "€60", date: "09 Apr", status: t({ gr: "Πληρωμένο", en: "Paid" }), paid: true },
    { id: "INV-040", client: "Andreas K.", initials: "AK", color: "#2EC4B6", amount: "€45", date: "09 Apr", status: t({ gr: "Εκκρεμεί", en: "Pending" }), paid: false },
    { id: "INV-039", client: "Elena D.", initials: "ED", color: "#F59E0B", amount: "€60", date: "07 Apr", status: t({ gr: "Πληρωμένο", en: "Paid" }), paid: true },
    { id: "INV-038", client: "Nikos M.", initials: "NM", color: "#F43F5E", amount: "€50", date: "05 Apr", status: t({ gr: "Αποσταλμένο", en: "Sent" }), paid: false },
    { id: "INV-037", client: "Sofia T.", initials: "ST", color: "#16A34A", amount: "€55", date: "04 Apr", status: t({ gr: "Πληρωμένο", en: "Paid" }), paid: true },
  ];

  return (
    <MockupShell className={className}>
      <div className="flex min-h-[380px]">
        <SidebarNav active={3} />
        <div className="flex-1 flex flex-col">
          <TopBar
            title={t({ gr: "Χρεώσεις", en: "Billing" })}
            subtitle={t({ gr: "Απρίλιος 2026", en: "April 2026" })}
          >
            <MiniButton label={t({ gr: "Φίλτρα", en: "Filters" })} />
            <div className="rounded-lg bg-[var(--color-navy)] px-2.5 py-1 text-[10px] font-semibold text-white">
              + {t({ gr: "Νέο τιμολόγιο", en: "New invoice" })}
            </div>
          </TopBar>

          <div className="flex-1 p-3">
            {/* Summary cards */}
            <div className="grid grid-cols-3 gap-1.5 mb-3">
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-2">
                <p className="text-[8px] text-[var(--color-muted)]">{t({ gr: "Μηνιαία", en: "Monthly" })}</p>
                <p className="text-base font-bold text-[var(--color-success)]">€840</p>
                <p className="text-[7px] text-[var(--color-success)]">+12% ↑</p>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-2">
                <p className="text-[8px] text-[var(--color-muted)]">{t({ gr: "Εκκρεμή", en: "Outstanding" })}</p>
                <p className="text-base font-bold text-[var(--color-amber)]">€95</p>
                <p className="text-[7px] text-[var(--color-muted)]">2 {t({ gr: "τιμολόγια", en: "invoices" })}</p>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-2">
                <p className="text-[8px] text-[var(--color-muted)]">{t({ gr: "Εισπραχθέντα", en: "Collected" })}</p>
                <p className="text-base font-bold text-[var(--color-blue)]">€745</p>
                <p className="text-[7px] text-[var(--color-muted)]">88%</p>
              </div>
            </div>

            {/* Invoice table headers */}
            <div className="flex items-center gap-2 px-2 pb-1.5 border-b border-[var(--color-border)]">
              <span className="w-14 text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)]">#</span>
              <span className="flex-1 text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)]">{t({ gr: "Πελάτης", en: "Client" })}</span>
              <span className="w-12 text-right text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)]">{t({ gr: "Ποσό", en: "Amount" })}</span>
              <span className="w-12 text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)]">{t({ gr: "Ημ/νία", en: "Date" })}</span>
              <span className="w-16 text-[8px] font-bold uppercase tracking-wider text-[var(--color-muted)]">{t({ gr: "Κατάσταση", en: "Status" })}</span>
            </div>

            <div className="divide-y divide-[var(--color-border)]/50">
              {invoices.map((inv) => (
                <div key={inv.id} className="flex items-center gap-2 px-2 py-1.5">
                  <span className="w-14 text-[9px] font-mono text-[var(--color-muted)]">{inv.id}</span>
                  <div className="flex flex-1 items-center gap-1.5 min-w-0">
                    <Avatar initials={inv.initials} color={inv.color} size="sm" />
                    <span className="truncate text-[10px] font-semibold text-[var(--color-navy)]">{inv.client}</span>
                  </div>
                  <span className="w-12 text-right text-[10px] font-semibold text-[var(--color-navy)]">{inv.amount}</span>
                  <span className="w-12 text-[9px] text-[var(--color-muted)]">{inv.date}</span>
                  <div className="w-16">
                    <Badge label={inv.status} color={inv.paid ? "#16A34A" : "#F59E0B"} variant="soft" />
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
