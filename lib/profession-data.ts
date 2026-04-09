import type { Language, Profession } from "./site-data";
import type { FeatureSlug } from "./feature-data";
import {
  ClipboardCheck,
  Stethoscope,
  Target,
  CalendarCheck,
  FileText,
  Users,
  HeartPulse,
  Brain,
  Apple,
  Building2,
  type LucideIcon,
} from "lucide-react";

type CP = Record<Language, string>;

/* ------------------------------------------------------------------ */
/* Workflow steps — unique per profession                              */
/* ------------------------------------------------------------------ */

export interface WorkflowStep {
  icon: LucideIcon;
  color: string;
  title: CP;
  description: CP;
}

/* ------------------------------------------------------------------ */
/* Feature highlight — profession-specific description for a feature  */
/* ------------------------------------------------------------------ */

export interface ProfessionFeatureHighlight {
  featureSlug: FeatureSlug;
  title: CP;
  description: CP;
}

/* ------------------------------------------------------------------ */
/* Testimonial                                                         */
/* ------------------------------------------------------------------ */

export interface ProfessionTestimonial {
  name: string;
  role: CP;
  quote: CP;
  emoji: string;
}

/* ------------------------------------------------------------------ */
/* Per-profession data                                                 */
/* ------------------------------------------------------------------ */

export interface ProfessionPageData {
  key: Profession;
  icon: LucideIcon;
  color: string;
  heroTitle: CP;
  heroSubtitle: CP;
  /** A richer description for the profession page */
  heroDescription: CP;
  workflowSteps: WorkflowStep[];
  featureHighlights: ProfessionFeatureHighlight[];
  testimonials: ProfessionTestimonial[];
  ctaTitle: CP;
  ctaSubtitle: CP;
}

export const professionPages: Record<Profession, ProfessionPageData> = {
  physio: {
    key: "physio",
    icon: HeartPulse,
    color: "#3B82F6",
    heroTitle: {
      gr: "Φυσιοθεραπεία. Χωρίς χαρτούρα.",
      en: "Physiotherapy. Without paperwork.",
    },
    heroSubtitle: {
      gr: "Σχεδιασμένο για φυσιοθεραπευτές",
      en: "Designed for physiotherapists",
    },
    heroDescription: {
      gr: "Από την αρχική αξιολόγηση μέχρι το discharge. Ημερολόγιο, SOAP σημειώσεις, body chart, πλάνα θεραπείας, τιμολόγηση και ΓΕΣΥ αξιώσεις — σε ένα σύστημα.",
      en: "From initial assessment to discharge. Calendar, SOAP notes, body chart, treatment plans, invoicing and GESY claims — in one system.",
    },
    workflowSteps: [
      {
        icon: ClipboardCheck,
        color: "#3B82F6",
        title: { gr: "Εισαγωγή", en: "Intake" },
        description: {
          gr: "Ο ασθενής συμπληρώνει φόρμα online. Ιστορικό, συμπτώματα, παραπομπή.",
          en: "Patient fills in an online form. History, symptoms, referral.",
        },
      },
      {
        icon: Stethoscope,
        color: "#2EC4B6",
        title: { gr: "Αξιολόγηση", en: "Assessment" },
        description: {
          gr: "SOAP σημείωση. Χάρτης σώματος για σήμανση πόνου. ROM μετρήσεις.",
          en: "SOAP note. Body chart for pain marking. ROM measurements.",
        },
      },
      {
        icon: Target,
        color: "#F59E0B",
        title: { gr: "Πλάνο θεραπείας", en: "Treatment plan" },
        description: {
          gr: "Στόχοι θεραπείας, αριθμός συνεδριών, ασκήσεις για το σπίτι.",
          en: "Care goals, number of sessions, home exercises.",
        },
      },
      {
        icon: CalendarCheck,
        color: "#16A34A",
        title: { gr: "Συνεδρίες", en: "Sessions" },
        description: {
          gr: "Σημειώσεις παρακολούθησης, μετρήσεις προόδου, συμπληρώματα.",
          en: "Follow-up notes, progress measurements, addenda.",
        },
      },
      {
        icon: FileText,
        color: "#F43F5E",
        title: { gr: "Εξιτήριο & αναφορά", en: "Discharge & report" },
        description: {
          gr: "Επιστολή εξιτηρίου με υποβοήθηση AI. Εξαγωγή PDF. Αποστολή μέσω email.",
          en: "AI-assisted discharge letter. PDF export. Send via email.",
        },
      },
    ],
    featureHighlights: [
      {
        featureSlug: "calendar",
        title: { gr: "Ημερολόγιο συνεδριών", en: "Session calendar" },
        description: {
          gr: "Δείτε ολόκληρη τη μέρα σας σε μία ματιά. Αρχική αξιολόγηση, επανεξέταση, θεραπεία — κάθε τύπος με δικό του χρώμα. Σύρετε και αφήστε για γρήγορη αλλαγή.",
          en: "See your entire day at a glance. Initial assessment, follow-up, treatment — each type colour-coded. Drag-and-drop for quick changes.",
        },
      },
      {
        featureSlug: "clinical-notes",
        title: { gr: "SOAP σημειώσεις & Χάρτης σώματος", en: "SOAP notes & Body chart" },
        description: {
          gr: "Δομημένη καταγραφή SOAP με χάρτη σώματος για σήμανση πόνου. Πίνακες μετρήσεων (ROM, VAS, MMT). Πρότυπα ειδικά για φυσιοθεραπεία.",
          en: "Structured SOAP notes with body chart for pain marking. Measurement tables (ROM, VAS, MMT). Physio-specific templates.",
        },
      },
      {
        featureSlug: "patients",
        title: { gr: "Ιστορικό ασθενών", en: "Patient history" },
        description: {
          gr: "Πλήρες προφίλ με στάδια (ενδιαφέρον → ενεργός → ολοκληρωμένος), ραντεβού, σημειώσεις, στόχοι θεραπείας, χρεώσεις — σε ένα μέρος.",
          en: "Complete profile with stages (enquiry → active → discharged), appointments, notes, care goals, billing — in one place.",
        },
      },
      {
        featureSlug: "billing",
        title: { gr: "Τιμολόγηση & ΓΕΣΥ", en: "Invoicing & GESY claims" },
        description: {
          gr: "Τιμολόγιο μετά τη συνεδρία με ένα κλικ. Υποστήριξη ΓΕΣΥ αξιώσεων για Κύπρο.",
          en: "Invoice after the session with one click. GESY claim support for Cyprus.",
        },
      },
      {
        featureSlug: "communication",
        title: { gr: "Υπενθυμίσεις & επιστολές", en: "Reminders & letters" },
        description: {
          gr: "Αυτόματες υπενθυμίσεις SMS/WhatsApp. Επιστολές παραπομπής και εξιτηρίου με υποβοήθηση AI.",
          en: "Automatic SMS/WhatsApp reminders. AI-assisted referral and discharge letters.",
        },
      },
    ],
    testimonials: [
      {
        name: "Dr. Christos K.",
        role: { gr: "Φυσιοθεραπευτής, Θεσσαλονίκη", en: "Physiotherapist, Thessaloniki" },
        quote: {
          gr: "Ο χάρτης σώματος και οι SOAP σημειώσεις μου εξοικονομούν 20 λεπτά τη μέρα. Επιτέλους σύστημα που καταλαβαίνει πώς δουλεύω.",
          en: "The body chart and SOAP notes save me 20 minutes a day. Finally a system that understands how I work.",
        },
        emoji: "🧑‍⚕️",
      },
      {
        name: "Georgia M.",
        role: { gr: "Φυσιοθεραπεύτρια, Λευκωσία", en: "Physiotherapist, Nicosia" },
        quote: {
          gr: "Οι αυτόματες υπενθυμίσεις μείωσαν τις ακυρώσεις κατά 50%. Οι αξιώσεις ΓΕΣΥ γίνονται σε δευτερόλεπτα.",
          en: "Auto reminders cut no-shows by 50%. GESY claims happen in seconds.",
        },
        emoji: "👩‍⚕️",
      },
    ],
    ctaTitle: {
      gr: "Ξεκίνα να οργανώνεις το φυσιοθεραπευτήριό σου σήμερα",
      en: "Start organising your physiotherapy practice today",
    },
    ctaSubtitle: {
      gr: "Δωρεάν εγγραφή. Χωρίς κάρτα, χωρίς δεσμεύσεις.",
      en: "Free signup. No card, no commitments.",
    },
  },

  dietician: {
    key: "dietician",
    icon: Apple,
    color: "#16A34A",
    heroTitle: {
      gr: "Διαιτολογικό ιατρείο. Ψηφιακά.",
      en: "Nutrition practice. Digitised.",
    },
    heroSubtitle: {
      gr: "Σχεδιασμένο για διαιτολόγους",
      en: "Designed for dieticians",
    },
    heroDescription: {
      gr: "Διαχειριστείτε πελάτες, επανελέγχους, μετρήσεις, διατροφικά πλάνα και τιμολόγηση. Από το πρώτο ραντεβού μέχρι τον στόχο.",
      en: "Manage clients, follow-ups, measurements, nutrition plans, and billing. From first appointment to goal.",
    },
    workflowSteps: [
      {
        icon: ClipboardCheck,
        color: "#16A34A",
        title: { gr: "Πρώτη συνάντηση", en: "First meeting" },
        description: {
          gr: "Καταγραφή ιστορικού, στόχων, μετρήσεων BMI/BF%.",
          en: "Record history, goals, BMI/BF% measurements.",
        },
      },
      {
        icon: FileText,
        color: "#F59E0B",
        title: { gr: "Πλάνο διατροφής", en: "Nutrition plan" },
        description: {
          gr: "Δημιουργήστε πλάνο με προσαρμοσμένο πρότυπο. Στόχοι θεραπείας ανά πελάτη.",
          en: "Create plan with custom template. Care goals per client.",
        },
      },
      {
        icon: CalendarCheck,
        color: "#3B82F6",
        title: { gr: "Follow-ups", en: "Follow-ups" },
        description: {
          gr: "Μηνιαία ή εβδομαδιαία σημειώσεις. Μετρήσεις προόδου.",
          en: "Monthly or weekly notes. Progress measurements.",
        },
      },
      {
        icon: Target,
        color: "#F43F5E",
        title: { gr: "Στόχος", en: "Goal reached" },
        description: {
          gr: "Σημείωση στόχου, αναφορά, πρόγραμμα παρακολούθησης.",
          en: "Mark goal, generate report, schedule follow-ups.",
        },
      },
    ],
    featureHighlights: [
      {
        featureSlug: "patients",
        title: { gr: "Προφίλ πελατών", en: "Client profiles" },
        description: {
          gr: "Πλήρες ιστορικό: στόχοι, μετρήσεις, αλλεργίες, προτιμήσεις. Στάδια (ενδιαφέρον → ενεργός → συντήρηση).",
          en: "Full history: goals, measurements, allergies, preferences. Stages (enquiry → active → maintenance).",
        },
      },
      {
        featureSlug: "clinical-notes",
        title: { gr: "Templates διατροφής", en: "Nutrition templates" },
        description: {
          gr: "Προσαρμοσμένα πρότυπα με πεδία για μετρήσεις, πλάνα, σημειώσεις. Πίνακες βάρους και σωματομετρήσεων.",
          en: "Custom templates with fields for measurements, plans, notes. Weight and body measurement tables.",
        },
      },
      {
        featureSlug: "calendar",
        title: { gr: "Ημερολόγιο", en: "Calendar" },
        description: {
          gr: "Πρώτη συνεδρία, επανέλεγχος, ανασκόπηση — κάθε τύπος με δικό χρώμα. Αυτόματες υπενθυμίσεις.",
          en: "First session, follow-up, review — each type colour-coded. Auto reminders.",
        },
      },
      {
        featureSlug: "reports",
        title: { gr: "Στατιστικά", en: "Analytics" },
        description: {
          gr: "Πόσοι πελάτες πέτυχαν στόχο, μέσος αριθμός συνεδριών, έσοδα ανά μήνα.",
          en: "How many clients reached their goal, average sessions, revenue per month.",
        },
      },
    ],
    testimonials: [
      {
        name: "Maria T.",
        role: { gr: "Διαιτολόγος, Λευκωσία", en: "Dietician, Nicosia" },
        quote: {
          gr: "Χρησιμοποιούσα Excel. Τώρα έχω ολόκληρο το ιστορικό κάθε πελάτη, μετρήσεις, follow-ups — σε ένα κλικ.",
          en: "I used Excel. Now I have every client's full history, measurements, follow-ups — in one click.",
        },
        emoji: "👩‍💼",
      },
    ],
    ctaTitle: {
      gr: "Οργάνωσε το διαιτολογικό σου ιατρείο σήμερα",
      en: "Organise your nutrition practice today",
    },
    ctaSubtitle: {
      gr: "Δωρεάν εγγραφή. Χωρίς κάρτα.",
      en: "Free signup. No card required.",
    },
  },

  psychologist: {
    key: "psychologist",
    icon: Brain,
    color: "#8B5CF6",
    heroTitle: {
      gr: "Ψυχολογικό ιατρείο. Ήρεμα.",
      en: "Psychology practice. Calmly.",
    },
    heroSubtitle: {
      gr: "Σχεδιασμένο για ψυχολόγους",
      en: "Designed for psychologists",
    },
    heroDescription: {
      gr: "Ιδιωτικότητα, δομή, και αξιοπιστία. Ραντεβού, σημειώσεις συνεδριών, στόχοι θεραπείας — με σεβασμό στο απόρρητο.",
      en: "Privacy, structure, and reliability. Appointments, session notes, care goals — with respect for confidentiality.",
    },
    workflowSteps: [
      {
        icon: ClipboardCheck,
        color: "#8B5CF6",
        title: { gr: "Πρώτη συνεδρία", en: "First session" },
        description: {
          gr: "Εισαγωγή ιστορικού. Στόχοι θεραπείας. Συγκατάθεση.",
          en: "Intake history. Therapy goals. Consent.",
        },
      },
      {
        icon: FileText,
        color: "#3B82F6",
        title: { gr: "Σημειώσεις", en: "Session notes" },
        description: {
          gr: "Δομημένη καταγραφή ανά συνεδρία. Κλειδωμένες μετά την ολοκλήρωση.",
          en: "Structured notes per session. Locked after completion.",
        },
      },
      {
        icon: Target,
        color: "#2EC4B6",
        title: { gr: "Στόχοι θεραπείας", en: "Care goals" },
        description: {
          gr: "Θέστε στόχους θεραπείας. Παρακολουθήστε πρόοδο ανά συνεδρία.",
          en: "Set therapy goals. Track progress per session.",
        },
      },
      {
        icon: CalendarCheck,
        color: "#F59E0B",
        title: { gr: "Συνέχεια", en: "Continuation" },
        description: {
          gr: "Αυτόματες υπενθυμίσεις. Εύκολη αλλαγή ραντεβού.",
          en: "Auto reminders. Easy rescheduling.",
        },
      },
    ],
    featureHighlights: [
      {
        featureSlug: "clinical-notes",
        title: { gr: "Ασφαλείς σημειώσεις", en: "Secure notes" },
        description: {
          gr: "Κλειδωμένες σημειώσεις μετά την υπογραφή. Συμπληρώματα χωρίς αλλαγή πρωτοτύπου. Συμβατό με GDPR.",
          en: "Locked notes after signing. Addenda without changing the original. GDPR compliant.",
        },
      },
      {
        featureSlug: "calendar",
        title: { gr: "Απλό ημερολόγιο", en: "Simple calendar" },
        description: {
          gr: "Εβδομαδιαίο πρόγραμμα, επαναλαμβανόμενα ραντεβού, γρήγορη αλλαγή.",
          en: "Weekly schedule, recurring appointments, quick rescheduling.",
        },
      },
      {
        featureSlug: "patients",
        title: { gr: "Ιστορικό ασθενών", en: "Patient history" },
        description: {
          gr: "Ιστορικό συνεδριών, στόχοι θεραπείας, σημειώσεις — πλήρης εικόνα κάθε ασθενή.",
          en: "Session history, care goals, notes — complete picture of every patient.",
        },
      },
      {
        featureSlug: "billing",
        title: { gr: "Τιμολόγηση", en: "Invoicing" },
        description: {
          gr: "Τιμολόγιο μετά τη συνεδρία. PDF, email, παρακολούθηση πληρωμών.",
          en: "Invoice after session. PDF, email, payment tracking.",
        },
      },
    ],
    testimonials: [
      {
        name: "Andreas P.",
        role: { gr: "Ψυχολόγος, Πάφος", en: "Psychologist, Paphos" },
        quote: {
          gr: "Η ιδιωτικότητα ήταν η προτεραιότητά μου. Κλειδωμένες σημειώσεις, audit trail — νιώθω ασφαλής.",
          en: "Privacy was my priority. Locked notes, audit trail — I feel secure.",
        },
        emoji: "🧠",
      },
    ],
    ctaTitle: {
      gr: "Ξεκίνα να οργανώνεις τις συνεδρίες σου σήμερα",
      en: "Start organising your sessions today",
    },
    ctaSubtitle: {
      gr: "Δωρεάν, με σεβασμό στο απόρρητο.",
      en: "Free, with respect for privacy.",
    },
  },

  doctor: {
    key: "doctor",
    icon: Stethoscope,
    color: "#F43F5E",
    heroTitle: {
      gr: "Ιατρείο. Ψηφιακά. Απλά.",
      en: "Medical practice. Digital. Simple.",
    },
    heroSubtitle: {
      gr: "Σχεδιασμένο για γιατρούς",
      en: "Designed for doctors",
    },
    heroDescription: {
      gr: "Διαχειριστείτε ραντεβού, αρχεία ασθενών, κλινικές σημειώσεις, τιμολόγηση, και ασφαλιστικές αξιώσεις — χωρίς περιττή πολυπλοκότητα.",
      en: "Manage appointments, patient records, clinical notes, invoicing, and insurance claims — without unnecessary complexity.",
    },
    workflowSteps: [
      {
        icon: Users,
        color: "#F43F5E",
        title: { gr: "Υποδοχή", en: "Reception" },
        description: {
          gr: "Προσέλευση ασθενή, ενημέρωση κατάστασης σε 'αφίχθη'.",
          en: "Patient check-in, status update to 'arrived'.",
        },
      },
      {
        icon: Stethoscope,
        color: "#3B82F6",
        title: { gr: "Εξέταση", en: "Examination" },
        description: {
          gr: "Κλινική σημείωση με πρότυπο. Μετρήσεις, διάγνωση.",
          en: "Clinical note with template. Measurements, diagnosis.",
        },
      },
      {
        icon: FileText,
        color: "#F59E0B",
        title: { gr: "Παραπομπή", en: "Referral" },
        description: {
          gr: "Επιστολή παραπομπής με υποβοήθηση AI. Επιλέξτε τόνο, στείλτε με email.",
          en: "AI-assisted referral letter. Choose tone, send via email.",
        },
      },
      {
        icon: CalendarCheck,
        color: "#16A34A",
        title: { gr: "Follow-up", en: "Follow-up" },
        description: {
          gr: "Κλείστε επόμενο ραντεβού, αυτόματη υπενθύμιση.",
          en: "Book next appointment, automatic reminder.",
        },
      },
    ],
    featureHighlights: [
      {
        featureSlug: "calendar",
        title: { gr: "Πολύ-αίθουσο ημερολόγιο", en: "Multi-room calendar" },
        description: {
          gr: "Δείτε πολλές αίθουσες ή γιατρούς σε παράλληλες στήλες. Κατάσταση ραντεβού σε πραγματικό χρόνο.",
          en: "See multiple rooms or doctors in side-by-side columns. Real-time appointment status.",
        },
      },
      {
        featureSlug: "clinical-notes",
        title: { gr: "Κλινικές σημειώσεις", en: "Clinical notes" },
        description: {
          gr: "Templates ανά ειδικότητα. Μετρήσεις, διάγνωση, πλάνο θεραπείας. Κλείδωμα μετά υπογραφή.",
          en: "Templates per specialty. Measurements, diagnosis, treatment plan. Lock after signing.",
        },
      },
      {
        featureSlug: "insurance",
        title: { gr: "Ασφαλιστικές αξιώσεις", en: "Insurance claims" },
        description: {
          gr: "ΓΕΣΥ και ΕΟΠΥΥ. Draft → Submitted → Paid. Κωδικοί διάγνωσης, ιστορικό παραπομπών.",
          en: "GESY and EOPYY. Draft → Submitted → Paid. Diagnosis codes, referral history.",
        },
      },
      {
        featureSlug: "communication",
        title: { gr: "AI επιστολές", en: "AI letters" },
        description: {
          gr: "Δημιουργήστε επιστολές παραπομπής σε δευτερόλεπτα. Επίσημος, κλινικός ή απλοποιημένος τόνος.",
          en: "Generate referral letters in seconds. Formal, clinical, or simplified tone.",
        },
      },
      {
        featureSlug: "reports",
        title: { gr: "Στατιστικά ιατρείου", en: "Practice analytics" },
        description: {
          gr: "Ημερήσια σύνοψη, έσοδα, διαδρομή ασθενών, αξιοποίηση. Εξαγωγή CSV.",
          en: "Daily summary, revenue, patient funnel, utilisation. CSV export.",
        },
      },
    ],
    testimonials: [
      {
        name: "Dr. Elena D.",
        role: { gr: "Παθολόγος, Αθήνα", en: "Internist, Athens" },
        quote: {
          gr: "Οι επιστολές παραπομπής με AI μου γλιτώνουν χρόνο κάθε μέρα. Και η τιμολόγηση δεν ήταν ποτέ πιο εύκολη.",
          en: "AI referral letters save me time every day. And invoicing has never been easier.",
        },
        emoji: "👩‍⚕️",
      },
    ],
    ctaTitle: {
      gr: "Ψηφιοποίησε το ιατρείο σου σήμερα",
      en: "Digitise your practice today",
    },
    ctaSubtitle: {
      gr: "Δωρεάν εγγραφή σε 2 λεπτά.",
      en: "Free signup in 2 minutes.",
    },
  },

  clinic: {
    key: "clinic",
    icon: Building2,
    color: "#2563EB",
    heroTitle: {
      gr: "Κλινική. Μία πλατφόρμα. Πλήρης έλεγχος.",
      en: "Clinic. One platform. Full control.",
    },
    heroSubtitle: {
      gr: "Σχεδιασμένο για κλινικές & ομάδες",
      en: "Designed for clinics & teams",
    },
    heroDescription: {
      gr: "Πολλοί θεραπευτές, πολλές τοποθεσίες, κοινό ημερολόγιο, ρόλοι, inbox, αναφορές — σε ένα σύστημα που μεγαλώνει μαζί σας.",
      en: "Multiple practitioners, multiple locations, shared calendar, roles, inbox, reports — in a system that grows with you.",
    },
    workflowSteps: [
      {
        icon: Building2,
        color: "#2563EB",
        title: { gr: "Ρύθμιση", en: "Setup" },
        description: {
          gr: "Δημιουργήστε κλινικές, αίθουσες, ωράρια. Προσκαλέστε θεραπευτές.",
          en: "Create clinics, rooms, hours. Invite practitioners.",
        },
      },
      {
        icon: Users,
        color: "#2EC4B6",
        title: { gr: "Ομάδα", en: "Team" },
        description: {
          gr: "Ρόλοι: Ιδιοκτήτης, Διαχειριστής, Θεραπευτής, Υποδοχή. Κάθε ρόλος με δικά δικαιώματα.",
          en: "Roles: Owner, Admin, Practitioner, Reception. Each role with its own permissions.",
        },
      },
      {
        icon: CalendarCheck,
        color: "#F59E0B",
        title: { gr: "Λειτουργία", en: "Operations" },
        description: {
          gr: "Κοινό ημερολόγιο, κοινά εισερχόμενα, εργασίες ανά θεραπευτή.",
          en: "Shared calendar, shared inbox, tasks per practitioner.",
        },
      },
      {
        icon: Target,
        color: "#16A34A",
        title: { gr: "Αναφορές", en: "Reports" },
        description: {
          gr: "Έσοδα ανά θεραπευτή, αξιοποίηση, διαδρομή ασθενών. Εξαγωγή CSV.",
          en: "Revenue per practitioner, utilisation, patient funnel. CSV export.",
        },
      },
    ],
    featureHighlights: [
      {
        featureSlug: "team",
        title: { gr: "Πολλοί χρήστες & ρόλοι", en: "Multiple users & roles" },
        description: {
          gr: "Ιδιοκτήτης, Διαχειριστής, Θεραπευτής, Υποδοχή — κάθε ρόλος βλέπει ό,τι χρειάζεται. Προσκλήσεις ομάδας μέσω email.",
          en: "Owner, Admin, Practitioner, Reception — each role sees what's needed. Team invitations via email.",
        },
      },
      {
        featureSlug: "calendar",
        title: { gr: "Κοινό ημερολόγιο", en: "Shared calendar" },
        description: {
          gr: "Όλοι οι θεραπευτές σε ένα ημερολόγιο. Παράλληλες στήλες. Εναλλαγή κλινικής για πολλαπλές τοποθεσίες.",
          en: "All practitioners in one calendar. Side-by-side columns. Clinic switcher for multiple locations.",
        },
      },
      {
        featureSlug: "reports",
        title: { gr: "Analytics ομάδας", en: "Team analytics" },
        description: {
          gr: "Δείτε έσοδα ανά θεραπευτή, ποσοστά αξιοποίησης, διαδρομή ασθενών. Πάρτε τις σωστές αποφάσεις.",
          en: "See revenue per practitioner, utilisation rates, patient funnel. Make the right decisions.",
        },
      },
      {
        featureSlug: "communication",
        title: { gr: "Κοινό inbox", en: "Shared inbox" },
        description: {
          gr: "Ένα σύστημα εισερχομένων για όλη την ομάδα. Νήματα ανά ασθενή, κατάσταση, ανάθεση.",
          en: "One inbox for the whole team. Per-patient threads, status, assignment.",
        },
      },
      {
        featureSlug: "billing",
        title: { gr: "Κεντρική τιμολόγηση", en: "Centralised billing" },
        description: {
          gr: "Τιμολόγηση από οποιονδήποτε θεραπευτή. Συγκεντρωτικά στατιστικά εσόδων.",
          en: "Invoicing from any practitioner. Aggregated revenue reporting.",
        },
      },
    ],
    testimonials: [
      {
        name: "Kyriakos L.",
        role: { gr: "Διευθυντής κλινικής, Λάρνακα", en: "Clinic manager, Larnaca" },
        quote: {
          gr: "Διαχειρίζομαι 3 τοποθεσίες και 8 θεραπευτές. Πριν χρησιμοποιούσα 4 εφαρμογές. Τώρα μία.",
          en: "I manage 3 locations and 8 practitioners. Before I used 4 apps. Now one.",
        },
        emoji: "🏥",
      },
    ],
    ctaTitle: {
      gr: "Φέρε ολόκληρη την ομάδα σε ένα σύστημα",
      en: "Bring your whole team into one system",
    },
    ctaSubtitle: {
      gr: "Δωρεάν εγγραφή. Κλιμάκωσε όποτε θέλεις.",
      en: "Free signup. Scale whenever you want.",
    },
  },
};
