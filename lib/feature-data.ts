import type { Language } from "./site-data";
import {
  CalendarDays,
  Users,
  NotebookPen,
  Receipt,
  MessageSquare,
  BarChart3,
  Users2,
  ShieldCheck,
  Bell,
  FileText,
  ClipboardList,
  Target,
  type LucideIcon,
} from "lucide-react";

type CP = Record<Language, string>;

/* ------------------------------------------------------------------ */
/* Feature categories (used on features hub + feature detail pages)    */
/* ------------------------------------------------------------------ */

export type FeatureSlug =
  | "calendar"
  | "patients"
  | "clinical-notes"
  | "billing"
  | "communication"
  | "reports"
  | "team"
  | "insurance";

export interface FeatureCapability {
  title: CP;
  description: CP;
}

export interface FeatureCategory {
  slug: FeatureSlug;
  icon: LucideIcon;
  color: string;
  title: CP;
  tagline: CP;
  description: CP;
  heroDescription: CP;
  capabilities: FeatureCapability[];
  highlights: CP[];
}

export const featureCategories: FeatureCategory[] = [
  {
    slug: "calendar",
    icon: CalendarDays,
    color: "#3B82F6",
    title: { gr: "Ημερολόγιο & Προγραμματισμός", en: "Calendar & Scheduling" },
    tagline: {
      gr: "Η ραχοκοκαλιά του ιατρείου σας",
      en: "The backbone of your practice",
    },
    description: {
      gr: "Drag-and-drop, πολλαπλοί θεραπευτές, χρωματικοί κώδικες.",
      en: "Drag-and-drop, multi-practitioner, color-coded.",
    },
    heroDescription: {
      gr: "Ένα ημερολόγιο σχεδιασμένο γύρω από τον τρόπο που δουλεύουν πραγματικά οι κλινικές. Δείτε ολόκληρη την ομάδα σας σε μία ματιά, σύρετε ραντεβού, διαχειριστείτε αίθουσες — χωρίς μπερδέματα.",
      en: "A calendar designed around how clinics actually work. See your entire team at a glance, drag appointments, manage rooms — no fuss.",
    },
    capabilities: [
      {
        title: { gr: "Πολλαπλές προβολές", en: "Multiple views" },
        description: {
          gr: "Ημέρα, εβδομάδα, μήνα και agenda. Αλλάξτε προβολή με ένα κλικ. Κάθε θεραπευτής σε δική του στήλη.",
          en: "Day, week, month, and agenda. Switch views with a click. Each practitioner in their own column.",
        },
      },
      {
        title: { gr: "Drag-and-drop προγραμματισμός", en: "Drag-and-drop scheduling" },
        description: {
          gr: "Μετακινήστε ραντεβού σύροντάς τα. Αλλάξτε ημέρα, ώρα ή θεραπευτή χωρίς να χρειαστεί να ανοίξετε τίποτα.",
          en: "Move appointments by dragging them. Change day, time, or practitioner without opening anything.",
        },
      },
      {
        title: { gr: "Τύποι ραντεβού", en: "Appointment types" },
        description: {
          gr: "Δημιουργήστε τους δικούς σας τύπους — αρχική αξιολόγηση, follow-up, θεραπεία. Κάθε τύπος με δικό του χρώμα και διάρκεια.",
          en: "Create your own types — initial assessment, follow-up, treatment. Each type with its own colour and duration.",
        },
      },
      {
        title: { gr: "Κατάσταση ραντεβού", en: "Appointment status" },
        description: {
          gr: "Παρακολουθήστε κάθε ραντεβού: προγραμματισμένο, αφίχθη, σε εξέλιξη, ολοκληρωμένο, δεν εμφανίστηκε, ακυρωμένο. Άμεση εικόνα ροής.",
          en: "Track every appointment: scheduled, arrived, in-session, completed, no-show, cancelled. Instant flow overview.",
        },
      },
      {
        title: { gr: "Αίθουσες & εξοπλισμός", en: "Rooms & equipment" },
        description: {
          gr: "Αναθέστε αίθουσα ή εξοπλισμό σε κάθε ραντεβού. Αποφύγετε διπλές κρατήσεις.",
          en: "Assign a room or equipment to each appointment. Avoid double bookings.",
        },
      },
      {
        title: { gr: "Ωράριο & εξαιρέσεις", en: "Working hours & overrides" },
        description: {
          gr: "Ορίστε ωράριο ανά κλινική, ανά ημέρα. Προσθέστε αργίες και ειδικές μέρες.",
          en: "Set hours per clinic, per day. Add bank holidays and special dates.",
        },
      },
    ],
    highlights: [
      { gr: "Ημέρα / Εβδομάδα / Μήνας", en: "Day / Week / Month views" },
      { gr: "Σύρε και άφησε", en: "Drag-and-drop" },
      { gr: "Παράλληλες στήλες θεραπευτών", en: "Side-by-side practitioner columns" },
      { gr: "Χρωματική κωδικοποίηση", en: "Color-coded types" },
      { gr: "Κατάσταση ραντεβού", en: "Appointment status tracking" },
      { gr: "Αίθουσες & εξοπλισμός", en: "Room & equipment assignment" },
    ],
  },
  {
    slug: "patients",
    icon: Users,
    color: "#2EC4B6",
    title: { gr: "Διαχείριση Ασθενών", en: "Patient Management" },
    tagline: {
      gr: "Ολόκληρο το ιστορικό σε ένα μέρος",
      en: "The complete patient picture",
    },
    description: {
      gr: "Προφίλ, ιστορικό, στάδιο θεραπείας — σε ένα μέρος.",
      en: "Profiles, history, treatment stage — in one place.",
    },
    heroDescription: {
      gr: "Από την πρώτη επαφή μέχρι το discharge. Ολόκληρο το ιστορικό του ασθενή — ραντεβού, σημειώσεις, χρεώσεις, αρχεία — σε ένα προφίλ.",
      en: "From first contact to discharge. The entire patient journey — appointments, notes, billing, files — in one profile.",
    },
    capabilities: [
      {
        title: { gr: "Πλήρες προφίλ", en: "Complete profiles" },
        description: {
          gr: "Όνομα, email, τηλέφωνο, ημερομηνία γέννησης, διεύθυνση, γλώσσα, αριθμός ταυτότητας, πηγή παραπομπής. Emoji avatar για γρήγορη αναγνώριση.",
          en: "Name, email, phone, date of birth, address, language, national ID, referral source. Emoji avatars for quick recognition.",
        },
      },
      {
        title: { gr: "Στάδια θεραπείας", en: "Treatment stages" },
        description: {
          gr: "Ενδιαφέρον → Κρατημένο → Ενεργός → Ολοκληρωμένος → Ανενεργός. Παρακολουθήστε κάθε ασθενή στη διαδρομή.",
          en: "Enquiry → Booked → Active → Discharged → Inactive. Track every patient through the funnel.",
        },
      },
      {
        title: { gr: "Γρήγορη αναζήτηση & φίλτρα", en: "Fast search & filters" },
        description: {
          gr: "Αναζήτηση με όνομα, email ή αριθμό. Φιλτράρισμα κατά στάδιο, κλινική ή θεραπευτή.",
          en: "Search by name, email, or number. Filter by stage, clinic, or practitioner.",
        },
      },
      {
        title: { gr: "Tabs ανά ασθενή", en: "Per-patient tabs" },
        description: {
          gr: "Ραντεβού, συνεδρίες, σημειώσεις, χρεώσεις, αρχεία, care goals — σε ξεχωριστά tabs.",
          en: "Appointments, consultations, notes, billing, files, care goals — in separate tabs.",
        },
      },
      {
        title: { gr: "Κηδεμόνες & συγγενείς", en: "Guardians & relations" },
        description: {
          gr: "Προσθέστε γονείς ή κηδεμόνες για ανήλικους ασθενείς. Σύνδεση οικογένειας.",
          en: "Add parents or guardians for minor patients. Link families together.",
        },
      },
      {
        title: { gr: "Φόρμα εισαγωγής (Intake)", en: "Intake forms" },
        description: {
          gr: "Δημόσια φόρμα εισαγωγής. Οι ασθενείς συμπληρώνουν στοιχεία και ερωτηματολόγιο πριν την πρώτη επίσκεψη.",
          en: "Public intake form. Patients fill in details and questionnaire before the first visit.",
        },
      },
    ],
    highlights: [
      { gr: "Πλήρες προφίλ & ιστορικό", en: "Full profile & history" },
      { gr: "Στάδια θεραπείας (funnel)", en: "Treatment stages (funnel)" },
      { gr: "Αναζήτηση & φίλτρα", en: "Search & filters" },
      { gr: "Εικονίδια Emoji", en: "Emoji avatars" },
      { gr: "Κηδεμόνες", en: "Guardian relationships" },
      { gr: "Φόρμα εισαγωγής", en: "Intake forms" },
    ],
  },
  {
    slug: "clinical-notes",
    icon: NotebookPen,
    color: "#F59E0B",
    title: { gr: "Κλινικές Σημειώσεις", en: "Clinical Notes" },
    tagline: {
      gr: "Δομημένη καταγραφή, χωρίς χαμένο χρόνο",
      en: "Structured documentation, zero wasted time",
    },
    description: {
      gr: "SOAP, body chart, custom templates, AI drafting.",
      en: "SOAP, body chart, custom templates, AI drafting.",
    },
    heroDescription: {
      gr: "Σταματήστε να γράφετε σε χαρτί ή σε ανοργάνωτα αρχεία. Templates σχεδιασμένα για τον τρόπο που δουλεύετε, body chart για επισήμανση προβλημάτων, και AI που σας βοηθά να γράψετε πιο γρήγορα.",
      en: "Stop writing on paper or in messy files. Templates designed for how you work, body chart for marking issues, and AI that helps you write faster.",
    },
    capabilities: [
      {
        title: { gr: "SOAP σημειώσεις", en: "SOAP notes" },
        description: {
          gr: "Δομημένη φόρμα Subjective-Objective-Assessment-Plan. Γρήγορη καταγραφή κατά τη συνεδρία.",
          en: "Structured Subjective-Objective-Assessment-Plan form. Fast capture during the session.",
        },
      },
      {
        title: { gr: "Χάρτης σώματος", en: "Body chart" },
        description: {
          gr: "Διαδραστικός χάρτης σώματος. Κλικ στο σημείο του πόνου, προσθήκη σημείωσης.",
          en: "Interactive body manikin. Click the pain point, add a note.",
        },
      },
      {
        title: { gr: "Προσαρμοσμένα πρότυπα", en: "Bespoke templates" },
        description: {
          gr: "Δημιουργήστε τα δικά σας templates με πεδία κειμένου, αριθμούς, κλίμακες, checkboxes, πίνακες μετρήσεων. Ανά επάγγελμα.",
          en: "Create your own templates with text fields, numbers, scales, checkboxes, measurement tables. Per profession.",
        },
      },
      {
        title: { gr: "AI-υποβοηθούμενη σύνταξη", en: "AI-assisted drafting" },
        description: {
          gr: "Χρησιμοποιήστε AI για να δημιουργήσετε κλινικές επιστολές, αναφορές, και σημειώσεις. Επιλέξτε τόνο (formal, friendly, clinical).",
          en: "Use AI to draft clinical letters, reports, and notes. Choose tone (formal, friendly, clinical).",
        },
      },
      {
        title: { gr: "Addenda & κλείδωμα", en: "Addenda & locking" },
        description: {
          gr: "Υπογράψτε και κλειδώστε σημειώσεις. Προσθέστε addendum χωρίς αλλαγή του πρωτότυπου.",
          en: "Sign and lock notes. Add an addendum without changing the original.",
        },
      },
      {
        title: { gr: "Πίνακες μετρήσεων", en: "Measurement tables" },
        description: {
          gr: "Καταγράψτε ROM, VAS, BMI, και άλλα. Παρακολουθήστε την πρόοδο σε πίνακα ανά συνεδρία.",
          en: "Record ROM, VAS, BMI, and more. Track progress in a per-session table.",
        },
      },
    ],
    highlights: [
      { gr: "Μορφή SOAP", en: "SOAP format" },
      { gr: "Χάρτης σώματος με δείκτες", en: "Body chart with markers" },
      { gr: "Προσαρμοσμένα πρότυπα", en: "Custom templates" },
      { gr: "Σύνταξη με AI", en: "AI drafting" },
      { gr: "Κλείδωμα σημειώσεων", en: "Note locking" },
      { gr: "Πίνακες μετρήσεων", en: "Measurement tables" },
    ],
  },
  {
    slug: "billing",
    icon: Receipt,
    color: "#16A34A",
    title: { gr: "Τιμολόγηση & Πληρωμές", en: "Billing & Invoicing" },
    tagline: {
      gr: "Τιμολόγηση χωρίς πονοκεφάλους",
      en: "Invoicing without headaches",
    },
    description: {
      gr: "Draft → Paid, ΦΠΑ, PDF, email αποστολή.",
      en: "Draft → Paid, VAT, PDF, email delivery.",
    },
    heroDescription: {
      gr: "Δημιουργήστε τιμολόγια με ένα κλικ μετά τη συνεδρία. Γραμμές υπηρεσιών, ΦΠΑ, PDF — και στείλτε απευθείας στον ασθενή.",
      en: "Create invoices with one click after a session. Service lines, VAT, PDF — and send directly to the patient.",
    },
    capabilities: [
      {
        title: { gr: "Κύκλος τιμολογίου", en: "Invoice lifecycle" },
        description: {
          gr: "Draft → Unpaid → Partial → Paid → Refunded → Void. Κάθε βήμα ξεκάθαρο.",
          en: "Draft → Unpaid → Partial → Paid → Refunded → Void. Every step clear.",
        },
      },
      {
        title: { gr: "Γραμμές υπηρεσιών & ΦΠΑ", en: "Service lines & VAT" },
        description: {
          gr: "Προσθέστε πολλαπλές υπηρεσίες ανά τιμολόγιο. Αυτόματος υπολογισμός ΦΠΑ.",
          en: "Add multiple services per invoice. Automatic VAT calculation.",
        },
      },
      {
        title: { gr: "PDF & email", en: "PDF & email" },
        description: {
          gr: "Εξαγωγή τιμολογίου σε PDF. Στείλτε απευθείας στον ασθενή μέσω email.",
          en: "Export invoice to PDF. Send directly to the patient via email.",
        },
      },
      {
        title: { gr: "Tracking πληρωμών", en: "Payment tracking" },
        description: {
          gr: "Καταγράψτε πληρωμές με μέθοδο (μετρητά, κάρτα, τραπεζικό). Πολλαπλές πληρωμές ανά τιμολόγιο.",
          en: "Record payments with method (cash, card, bank). Multiple payments per invoice.",
        },
      },
    ],
    highlights: [
      { gr: "Draft → Paid κύκλος", en: "Draft → Paid lifecycle" },
      { gr: "Γραμμές υπηρεσιών & ΦΠΑ", en: "Service lines & VAT" },
      { gr: "PDF εξαγωγή", en: "PDF export" },
      { gr: "Αποστολή με email", en: "Email delivery" },
      { gr: "EUR νόμισμα", en: "EUR currency" },
    ],
  },
  {
    slug: "communication",
    icon: MessageSquare,
    color: "#8B5CF6",
    title: { gr: "Επικοινωνία & Υπενθυμίσεις", en: "Communication & Reminders" },
    tagline: {
      gr: "Μείνετε σε επαφή, μειώστε τα no-shows",
      en: "Stay in touch, reduce no-shows",
    },
    description: {
      gr: "Email, SMS, WhatsApp, αυτόματες υπενθυμίσεις.",
      en: "Email, SMS, WhatsApp, auto reminders.",
    },
    heroDescription: {
      gr: "Στείλτε υπενθυμίσεις, μηνύματα και αναφορές απευθείας στους ασθενείς σας. Email, SMS, WhatsApp — ό,τι προτιμούν.",
      en: "Send reminders, messages, and reports directly to your patients. Email, SMS, WhatsApp — whatever they prefer.",
    },
    capabilities: [
      {
        title: { gr: "Εισερχόμενα με νήματα", en: "Threaded inbox" },
        description: {
          gr: "Κάθε ασθενής ένα thread. Ανοιχτά, σε εκκρεμότητα, επιλυμένα. Βλέπετε ολόκληρο το ιστορικό επικοινωνίας.",
          en: "One thread per patient. Open, pending, resolved. See the full communication history.",
        },
      },
      {
        title: { gr: "SMS & WhatsApp", en: "SMS & WhatsApp" },
        description: {
          gr: "Στείλτε SMS ή WhatsApp μέσω Twilio. Ιδανικό για υπενθυμίσεις και γρήγορα μηνύματα.",
          en: "Send SMS or WhatsApp via Twilio. Perfect for reminders and quick messages.",
        },
      },
      {
        title: { gr: "Αυτόματες υπενθυμίσεις", en: "Automatic reminders" },
        description: {
          gr: "Ρυθμίστε πότε στέλνονται (24h, 2h πριν). Μειώστε no-shows κατά 40%+.",
          en: "Configure when they send (24h, 2h before). Reduce no-shows by 40%+.",
        },
      },
      {
        title: { gr: "AI επιστολές", en: "AI letters" },
        description: {
          gr: "Δημιουργήστε επιστολές παραπομπής, αναφορές ή κλινικές συνόψεις με AI. Επιλέξτε τόνο, εξάγετε σε PDF.",
          en: "Generate referral letters, reports, or clinical summaries with AI. Choose tone, export to PDF.",
        },
      },
    ],
    highlights: [
      { gr: "Εισερχόμενα με νήματα", en: "Threaded inbox" },
      { gr: "Email / SMS / WhatsApp", en: "Email / SMS / WhatsApp" },
      { gr: "Αυτόματες υπενθυμίσεις", en: "Auto reminders" },
      { gr: "Επιστολές παραπομπής με AI", en: "AI referral letters" },
      { gr: "PDF εξαγωγή", en: "PDF export" },
    ],
  },
  {
    slug: "reports",
    icon: BarChart3,
    color: "#F43F5E",
    title: { gr: "Αναφορές & Στατιστικά", en: "Reports & Analytics" },
    tagline: {
      gr: "Κατανοήστε την απόδοση του ιατρείου σας",
      en: "Understand how your practice performs",
    },
    description: {
      gr: "KPIs, γραφήματα εσόδων, funnel, CSV export.",
      en: "KPIs, revenue charts, funnel, CSV export.",
    },
    heroDescription: {
      gr: "Σταματήστε να μαντεύετε. Δείτε ακριβώς πόσα κερδίζετε, πόσα ραντεβού κλείνετε, και πού χάνετε χρόνο.",
      en: "Stop guessing. See exactly how much you earn, how many appointments you book, and where you lose time.",
    },
    capabilities: [
      {
        title: { gr: "Πίνακας ελέγχου KPI", en: "Dashboard KPIs" },
        description: {
          gr: "Σημερινά ραντεβού, εκκρεμή, ολοκληρωμένα, έσοδα — σε μια ματιά.",
          en: "Today's appointments, pending, completed, revenue — at a glance.",
        },
      },
      {
        title: { gr: "Γράφημα εσόδων", en: "Revenue chart" },
        description: {
          gr: "Παρακολουθήστε τα έσοδα ανά ημέρα, εβδομάδα ή μήνα. Σύγκριση με προηγούμενες περιόδους.",
          en: "Track revenue by day, week, or month. Compare with previous periods.",
        },
      },
      {
        title: { gr: "Διαδρομή ασθενών", en: "Patient funnel" },
        description: {
          gr: "Πόσοι ασθενείς σε κάθε στάδιο: ενδιαφέρον → κρατημένο → ενεργός → ολοκληρωμένος.",
          en: "How many patients at each stage: enquiry → booked → active → discharged.",
        },
      },
      {
        title: { gr: "CSV εξαγωγή", en: "CSV export" },
        description: {
          gr: "Εξάγετε οποιοδήποτε report σε CSV για περαιτέρω ανάλυση.",
          en: "Export any report to CSV for further analysis.",
        },
      },
    ],
    highlights: [
      { gr: "Πίνακας ελέγχου KPI", en: "Dashboard KPIs" },
      { gr: "Γράφημα εσόδων", en: "Revenue charts" },
      { gr: "Διαδρομή ασθενών", en: "Patient funnel" },
      { gr: "Αξιοποίηση", en: "Utilisation tracking" },
      { gr: "Εξαγωγή CSV", en: "CSV export" },
    ],
  },
  {
    slug: "team",
    icon: Users2,
    color: "#2563EB",
    title: { gr: "Ομάδα & Πολλαπλές Τοποθεσίες", en: "Team & Multi-Location" },
    tagline: {
      gr: "Από solo practice μέχρι πολυθεσιακή κλινική",
      en: "From solo practice to multi-site clinic",
    },
    description: {
      gr: "Ρόλοι, πολλαπλές κλινικές, κοινό ημερολόγιο.",
      en: "Roles, multi-clinic, shared calendar.",
    },
    heroDescription: {
      gr: "Μεγαλώστε χωρίς να χάσετε τον έλεγχο. Προσθέστε θεραπευτές, ανοίξτε νέες τοποθεσίες, ορίστε ρόλους — χωρίς extra πολυπλοκότητα.",
      en: "Scale without losing control. Add practitioners, open new locations, set roles — without extra complexity.",
    },
    capabilities: [
      {
        title: { gr: "Ρόλοι & δικαιώματα", en: "Roles & permissions" },
        description: {
          gr: "Owner, Admin, Practitioner, Reception. Κάθε ρόλος βλέπει μόνο ό,τι χρειάζεται.",
          en: "Owner, Admin, Practitioner, Reception. Each role sees only what's needed.",
        },
      },
      {
        title: { gr: "Πολλαπλές κλινικές", en: "Multi-clinic" },
        description: {
          gr: "Πολλαπλές τοποθεσίες, ένας λογαριασμός. Εναλλαγή κλινικής για γρήγορη αλλαγή.",
          en: "Multiple locations, one account. Clinic switcher for quick changes.",
        },
      },
      {
        title: { gr: "Κοινό ημερολόγιο", en: "Shared calendar" },
        description: {
          gr: "Δείτε όλους τους θεραπευτές σε ένα ημερολόγιο. Παράλληλες στήλες ανά άτομο.",
          en: "See all practitioners in one calendar. Side-by-side columns per person.",
        },
      },
      {
        title: { gr: "Προσκλήσεις ομάδας", en: "Team invitations" },
        description: {
          gr: "Στείλτε πρόσκληση μέσω email. Ο νέος χρήστης επιλέγει κωδικό και μπαίνει στην ομάδα.",
          en: "Send invites via email. The new user picks a password and joins the team.",
        },
      },
    ],
    highlights: [
      { gr: "Ρόλοι (Ιδιοκτήτης / Διαχειριστής / Θεραπευτής / Υποδοχή)", en: "Roles (Owner / Admin / Physio / Reception)" },
      { gr: "Πολλαπλές κλινικές", en: "Multi-clinic" },
      { gr: "Κοινό ημερολόγιο", en: "Shared calendar" },
      { gr: "Προσκλήσεις ομάδας", en: "Team invitations" },
    ],
  },
  {
    slug: "insurance",
    icon: ShieldCheck,
    color: "#D97706",
    title: { gr: "Ασφαλιστικές Αξιώσεις", en: "Insurance Claims" },
    tagline: {
      gr: "ΓΕΣΥ & ΕΟΠΥΥ σε ένα σύστημα",
      en: "GESY & EOPYY in one system",
    },
    description: {
      gr: "ΓΕΣΥ (Κύπρος) & ΕΟΠΥΥ (Ελλάδα). Claims & tracking.",
      en: "GESY (Cyprus) & EOPYY (Greece). Claims & tracking.",
    },
    heroDescription: {
      gr: "Οργανώστε τις ασφαλιστικές αξιώσεις σας χωρίς χαρτούρα. Draft → Submitted → Approved → Paid. Ιστορικό παραπομπών και κωδικοί διάγνωσης.",
      en: "Organise your insurance claims without paperwork. Draft → Submitted → Approved → Paid. Referral history and diagnosis codes.",
    },
    capabilities: [
      {
        title: { gr: "Κύκλος αξιώσεων", en: "Claim lifecycle" },
        description: {
          gr: "Draft → Submitted → Approved → Rejected → Paid → Appealed. Κάθε βήμα καταγεγραμμένο.",
          en: "Draft → Submitted → Approved → Rejected → Paid → Appealed. Every step recorded.",
        },
      },
      {
        title: { gr: "ΓΕΣΥ & ΕΟΠΥΥ", en: "GESY & EOPYY" },
        description: {
          gr: "Υποστήριξη και για τα δύο συστήματα. Επιλέξτε scheme ανά αξίωση.",
          en: "Support for both systems. Select scheme per claim.",
        },
      },
      {
        title: { gr: "Κωδικοί διάγνωσης", en: "Diagnosis codes" },
        description: {
          gr: "Προσθέστε ICD-10 ή τοπικούς κωδικούς. Σύνδεση με παραπομπή.",
          en: "Add ICD-10 or local codes. Link to referral.",
        },
      },
    ],
    highlights: [
      { gr: "ΓΕΣΥ (Κύπρος)", en: "GESY (Cyprus)" },
      { gr: "ΕΟΠΥΥ (Ελλάδα)", en: "EOPYY (Greece)" },
      { gr: "Draft → Paid", en: "Draft → Paid workflow" },
      { gr: "Κωδικοί διάγνωσης", en: "Diagnosis codes" },
    ],
  },
];

export function getFeatureBySlug(slug: string): FeatureCategory | undefined {
  return featureCategories.find((f) => f.slug === slug);
}

export const allFeatureSlugs: FeatureSlug[] = featureCategories.map((f) => f.slug);

/* ------------------------------------------------------------------ */
/* Additional features (not full detail pages, but listed on hub)     */
/* ------------------------------------------------------------------ */

export interface MiniFeature {
  icon: LucideIcon;
  color: string;
  title: CP;
  body: CP;
}

export const additionalFeatures: MiniFeature[] = [
  {
    icon: Bell,
    color: "#D97706",
    title: { gr: "Υπενθυμίσεις", en: "Reminders" },
    body: {
      gr: "Αυτόματες SMS και WhatsApp υπενθυμίσεις μέσω Twilio. Μειώστε τις ακυρώσεις.",
      en: "Automatic SMS and WhatsApp reminders via Twilio. Reduce no-shows.",
    },
  },
  {
    icon: FileText,
    color: "#3B82F6",
    title: { gr: "AI Επιστολές", en: "AI Letters" },
    body: {
      gr: "Δημιουργήστε επιστολές παραπομπής, αναφορές και κλινικές συνόψεις. Επιλέξτε τόνο, εξάγετε σε PDF.",
      en: "Generate referral letters, reports, and clinical summaries. Choose tone, export to PDF.",
    },
  },
  {
    icon: ClipboardList,
    color: "#2EC4B6",
    title: { gr: "Φόρμες εισαγωγής", en: "Intake Forms" },
    body: {
      gr: "Δημόσια φόρμα εισαγωγής ασθενών. Στοιχεία, ερωτηματολόγιο, συγκατάθεση — πριν την πρώτη επίσκεψη.",
      en: "Public patient intake forms. Details, questionnaire, consent — before the first visit.",
    },
  },
  {
    icon: Target,
    color: "#F43F5E",
    title: { gr: "Στόχοι θεραπείας", en: "Care Goals" },
    body: {
      gr: "Θέστε στόχους θεραπείας ανά ασθενή. Ημερομηνία-στόχος, παρακολούθηση, σύνδεση με επεισόδιο.",
      en: "Set treatment goals per patient. Target dates, tracking, episode linking.",
    },
  },
];
