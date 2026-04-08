export type Language = "gr" | "en";

export type Profession =
  | "physio"
  | "dietician"
  | "psychologist"
  | "doctor"
  | "clinic";

export type SitePage =
  | "home"
  | "profession"
  | "features"
  | "pricing"
  | "demo"
  | "integrations"
  | "faq"
  | "blog"
  | "contact"
  | "signup";

type CopyPair = Record<Language, string>;

type Card = {
  title: CopyPair;
  body: CopyPair;
};

type ListItem = {
  label: CopyPair;
  detail?: CopyPair;
};

export function normalizeLanguage(value: string | null | undefined): Language {
  return value === "en" ? "en" : "gr";
}

export const professions: Array<{
  key: Profession;
  slug: string;
  label: CopyPair;
  headline: CopyPair;
  strapline: CopyPair;
}> = [
  {
    key: "physio",
    slug: "physiotherapists",
    label: {
      gr: "Φυσιοθεραπευτές",
      en: "Physiotherapists",
    },
    headline: {
      gr: "Οργάνωσε τις συνεδρίες και τους ασθενείς σου",
      en: "Keep sessions and patient follow-up in one place.",
    },
    strapline: {
      gr: "Λιγότερο admin, πιο καθαρή ροή δουλειάς.",
      en: "Less admin. Clearer clinical flow.",
    },
  },
  {
    key: "dietician",
    slug: "dieticians",
    label: {
      gr: "Διαιτολόγοι",
      en: "Dieticians",
    },
    headline: {
      gr: "Διαχειρίσου εύκολα τους πελάτες και τα ραντεβού σου",
      en: "Manage clients, reviews, and plans without friction.",
    },
    strapline: {
      gr: "Συνεπές follow-up, γρήγορη καταγραφή, απλή εικόνα.",
      en: "Consistent follow-up, fast note-taking, simpler oversight.",
    },
  },
  {
    key: "psychologist",
    slug: "psychologists",
    label: {
      gr: "Ψυχολόγοι",
      en: "Psychologists",
    },
    headline: {
      gr: "Ένα απλό σύστημα για τις συνεδρίες σου",
      en: "A calm system for your sessions and notes.",
    },
    strapline: {
      gr: "Ιδιωτικότητα, καθαρή δομή και γρήγορη επανεκκίνηση.",
      en: "Privacy, structure, and low-friction rescheduling.",
    },
  },
  {
    key: "doctor",
    slug: "doctors",
    label: {
      gr: "Γιατροί",
      en: "Doctors",
    },
    headline: {
      gr: "Οργάνωσε το ιατρείο σου χωρίς πολυπλοκότητα",
      en: "Run your practice without unnecessary complexity.",
    },
    strapline: {
      gr: "Ραντεβού, σημειώσεις και υπενθυμίσεις σε ένα σύστημα.",
      en: "Appointments, notes, and reminders in one system.",
    },
  },
  {
    key: "clinic",
    slug: "clinics",
    label: {
      gr: "Κλινικές",
      en: "Clinics",
    },
    headline: {
      gr: "Όλη η ομάδα σου σε ένα σύστημα",
      en: "Bring the whole team into one shared workspace.",
    },
    strapline: {
      gr: "Κοινό πρόγραμμα, πολλοί χρήστες, καθαρή εικόνα.",
      en: "Shared calendar, multiple users, one clean view.",
    },
  },
];

export const marketingPages: Array<{
  key: SitePage;
  href: string;
  label: CopyPair;
}> = [
  {
    key: "home",
    href: "/",
    label: {
      gr: "Αρχική",
      en: "Home",
    },
  },
  ...professions.map((profession) => ({
    key: "profession" as const,
    href: `/${profession.slug}`,
    label: profession.label,
  })),
  {
    key: "features",
    href: "/features",
    label: {
      gr: "Δυνατότητες",
      en: "Features",
    },
  },
  {
    key: "pricing",
    href: "/pricing",
    label: {
      gr: "Τιμολόγηση",
      en: "Pricing",
    },
  },
  {
    key: "demo",
    href: "/demo",
    label: {
      gr: "Demo",
      en: "Demo",
    },
  },
  {
    key: "integrations",
    href: "/integrations",
    label: {
      gr: "Ενσωματώσεις",
      en: "Integrations",
    },
  },
  {
    key: "faq",
    href: "/faq",
    label: {
      gr: "FAQ",
      en: "FAQ",
    },
  },
  {
    key: "blog",
    href: "/blog",
    label: {
      gr: "Blog",
      en: "Blog",
    },
  },
  {
    key: "contact",
    href: "/contact",
    label: {
      gr: "Επικοινωνία",
      en: "Contact",
    },
  },
  {
    key: "signup",
    href: "/signup",
    label: {
      gr: "Εγγραφή",
      en: "Sign up",
    },
  },
];

export const pageTitles: Record<Exclude<SitePage, "home" | "profession">, CopyPair> = {
  features: { gr: "Δυνατότητες", en: "Features" },
  pricing: { gr: "Τιμολόγηση", en: "Pricing" },
  demo: { gr: "Demo", en: "Demo" },
  integrations: { gr: "Ενσωματώσεις", en: "Integrations" },
  faq: { gr: "Συχνές ερωτήσεις", en: "FAQ" },
  blog: { gr: "Blog", en: "Blog" },
  contact: { gr: "Επικοινωνία", en: "Contact" },
  signup: { gr: "Εγγραφή", en: "Sign up" },
};

export const heroCopy: Record<
  Language,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string[];
  }
> = {
  gr: {
    eyebrow: "Απλό σύστημα για επαγγελματίες υγείας",
    title: "Οργάνωσε το πρόγραμμά σου, χωρίς άγχος",
    subtitle:
      "Ραντεβού, ασθενείς και σημειώσεις σε ένα απλό σύστημα για επαγγελματίες υγείας.",
    primaryCta: "Δοκίμασέ το δωρεάν",
    secondaryCta: "Δες πώς λειτουργεί",
    trust: [
      "Σχεδιασμένο για επαγγελματίες υγείας",
      "Λειτουργεί σε κινητό, tablet και υπολογιστή",
      "Ασφαλής διαχείριση δεδομένων",
    ],
  },
  en: {
    eyebrow: "Simple practice software for health professionals",
    title: "Run your practice. Without friction.",
    subtitle:
      "Appointments, patient records, and notes in one simple system.",
    primaryCta: "Try it free",
    secondaryCta: "See how it works",
    trust: [
      "Designed for health professionals",
      "Works on mobile, tablet, and desktop",
      "Secure data handling",
    ],
  },
};

export const featureCards: Record<Language, Card[]> = {
  gr: [
    {
      title: { gr: "Ραντεβού", en: "Appointments" },
      body: {
        gr: "Καθαρό ημερολόγιο, γρήγορη μετακίνηση, ξεκάθαρη εικόνα ημέρας.",
        en: "A clear calendar with quick scheduling and easy day view.",
      },
    },
    {
      title: { gr: "Ασθενείς / Πελάτες", en: "Patients / Clients" },
      body: {
        gr: "Πλήρες ιστορικό, βασικά στοιχεία και εύκολη αναζήτηση.",
        en: "Full records, key details, and fast search.",
      },
    },
    {
      title: { gr: "Σημειώσεις", en: "Notes" },
      body: {
        gr: "Κρατήστε κλινικές σημειώσεις χωρίς να χάνετε χρόνο.",
        en: "Capture clinical notes without slowing down the visit.",
      },
    },
    {
      title: { gr: "Υπενθυμίσεις", en: "Reminders" },
      body: {
        gr: "Μείωσε τα no-shows με αυτόματες υπενθυμίσεις.",
        en: "Reduce no-shows with automatic reminders.",
      },
    },
  ],
  en: [
    {
      title: { gr: "Ραντεβού", en: "Appointments" },
      body: {
        gr: "Καθαρό ημερολόγιο, γρήγορη μετακίνηση, ξεκάθαρη εικόνα ημέρας.",
        en: "A clear calendar with quick scheduling and easy day view.",
      },
    },
    {
      title: { gr: "Ασθενείς / Πελάτες", en: "Patients / Clients" },
      body: {
        gr: "Πλήρες ιστορικό, βασικά στοιχεία και εύκολη αναζήτηση.",
        en: "Full records, key details, and fast search.",
      },
    },
    {
      title: { gr: "Σημειώσεις", en: "Notes" },
      body: {
        gr: "Κρατήστε κλινικές σημειώσεις χωρίς να χάνετε χρόνο.",
        en: "Capture clinical notes without slowing down the visit.",
      },
    },
    {
      title: { gr: "Υπενθυμίσεις", en: "Reminders" },
      body: {
        gr: "Μείωσε τα no-shows με αυτόματες υπενθυμίσεις.",
        en: "Reduce no-shows with automatic reminders.",
      },
    },
  ],
};

export const trustPoints: Record<Language, ListItem[]> = {
  gr: [
    {
      label: { gr: "Λειτουργεί σε κινητό, tablet και υπολογιστή", en: "Works on mobile, tablet, and desktop" },
    },
    {
      label: { gr: "Ασφαλής διαχείριση δεδομένων", en: "Secure data handling" },
    },
    {
      label: { gr: "Έτοιμο για την ομάδα ή το solo practice", en: "Built for solo practices and teams" },
    },
  ],
  en: [
    {
      label: { gr: "Λειτουργεί σε κινητό, tablet και υπολογιστή", en: "Works on mobile, tablet, and desktop" },
    },
    {
      label: { gr: "Ασφαλής διαχείριση δεδομένων", en: "Secure data handling" },
    },
    {
      label: { gr: "Έτοιμο για την ομάδα ή το solo practice", en: "Built for solo practices and teams" },
    },
  ],
};

export const productModules: Record<Language, ListItem[]> = {
  gr: [
    { label: { gr: "Ημερολόγιο", en: "Calendar" }, detail: { gr: "Ημέρα, εβδομάδα και γρήγορη κράτηση.", en: "Day, week, and quick booking." } },
    { label: { gr: "Προφίλ ασθενή", en: "Patient profile" }, detail: { gr: "Στοιχεία, ιστορικό και θεραπευτικά βήματα.", en: "Details, history, and care steps." } },
    { label: { gr: "Σημειώσεις", en: "Notes" }, detail: { gr: "Καθαρή καταγραφή κατά τη συνεδρία.", en: "Clean capture during the session." } },
    { label: { gr: "Υπενθυμίσεις", en: "Reminders" }, detail: { gr: "SMS και email follow-up.", en: "SMS and email follow-up." } },
    { label: { gr: "Χρεώσεις", en: "Billing" }, detail: { gr: "Ελάχιστη τριβή για πληρωμές και τιμολόγηση.", en: "Lightweight billing and payments." } },
  ],
  en: [
    { label: { gr: "Ημερολόγιο", en: "Calendar" }, detail: { gr: "Ημέρα, εβδομάδα και γρήγορη κράτηση.", en: "Day, week, and quick booking." } },
    { label: { gr: "Προφίλ ασθενή", en: "Patient profile" }, detail: { gr: "Στοιχεία, ιστορικό και θεραπευτικά βήματα.", en: "Details, history, and care steps." } },
    { label: { gr: "Σημειώσεις", en: "Notes" }, detail: { gr: "Καθαρή καταγραφή κατά τη συνεδρία.", en: "Clean capture during the session." } },
    { label: { gr: "Υπενθυμίσεις", en: "Reminders" }, detail: { gr: "SMS και email follow-up.", en: "SMS and email follow-up." } },
    { label: { gr: "Χρεώσεις", en: "Billing" }, detail: { gr: "Ελάχιστη τριβή για πληρωμές και τιμολόγηση.", en: "Lightweight billing and payments." } },
  ],
};

export const pricingPlans: Record<
  Language,
  Array<{
    name: CopyPair;
    price: CopyPair;
    description: CopyPair;
    bullets: CopyPair[];
    featured?: boolean;
  }>
> = {
  gr: [
    {
      name: { gr: "Free", en: "Free" },
      price: { gr: "0€", en: "€0" },
      description: {
        gr: "Βασικές λειτουργίες για να ξεκινήσεις.",
        en: "Core features to get started.",
      },
      bullets: [
        { gr: "Ραντεβού", en: "Appointments" },
        { gr: "Ασθενείς / Πελάτες", en: "Patients / Clients" },
      ],
    },
    {
      name: { gr: "Pro", en: "Pro" },
      price: { gr: "29€ / μήνα", en: "€29 / month" },
      description: {
        gr: "Πλήρες σύστημα για καθημερινή χρήση.",
        en: "A full system for day-to-day work.",
      },
      bullets: [
        { gr: "Υπενθυμίσεις", en: "Reminders" },
        { gr: "Σημειώσεις", en: "Notes" },
        { gr: "Billing", en: "Billing" },
      ],
      featured: true,
    },
    {
      name: { gr: "Clinic", en: "Clinic" },
      price: { gr: "Custom", en: "Custom" },
      description: {
        gr: "Για ομάδες με πολλούς χρήστες και κοινό πρόγραμμα.",
        en: "For teams with multiple users and shared scheduling.",
      },
      bullets: [
        { gr: "Πολλοί χρήστες", en: "Multiple users" },
        { gr: "Shared calendar", en: "Shared calendar" },
      ],
    },
  ],
  en: [
    {
      name: { gr: "Free", en: "Free" },
      price: { gr: "0€", en: "€0" },
      description: {
        gr: "Βασικές λειτουργίες για να ξεκινήσεις.",
        en: "Core features to get started.",
      },
      bullets: [
        { gr: "Ραντεβού", en: "Appointments" },
        { gr: "Ασθενείς / Πελάτες", en: "Patients / Clients" },
      ],
    },
    {
      name: { gr: "Pro", en: "Pro" },
      price: { gr: "29€ / μήνα", en: "€29 / month" },
      description: {
        gr: "Πλήρες σύστημα για καθημερινή χρήση.",
        en: "A full system for day-to-day work.",
      },
      bullets: [
        { gr: "Υπενθυμίσεις", en: "Reminders" },
        { gr: "Σημειώσεις", en: "Notes" },
        { gr: "Billing", en: "Billing" },
      ],
      featured: true,
    },
    {
      name: { gr: "Clinic", en: "Clinic" },
      price: { gr: "Custom", en: "Custom" },
      description: {
        gr: "Για ομάδες με πολλούς χρήστες και κοινό πρόγραμμα.",
        en: "For teams with multiple users and shared scheduling.",
      },
      bullets: [
        { gr: "Πολλοί χρήστες", en: "Multiple users" },
        { gr: "Shared calendar", en: "Shared calendar" },
      ],
    },
  ],
};

export const faqItems: Record<
  Language,
  Array<{ question: string; answer: string }>
> = {
  gr: [
    {
      question: "Είναι εύκολο στη χρήση;",
      answer: "Ναι. Είναι φτιαγμένο για γρήγορη καθημερινή χρήση χωρίς περιττή πολυπλοκότητα.",
    },
    {
      question: "Μπορώ να το χρησιμοποιήσω από κινητό;",
      answer: "Ναι. Η εμπειρία είναι responsive σε κινητό, tablet και desktop.",
    },
    {
      question: "Είναι ασφαλές;",
      answer: "Ναι, με σύγχρονες πρακτικές ασφάλειας και GDPR-first σκέψη.",
    },
  ],
  en: [
    {
      question: "Is it easy to use?",
      answer: "Yes. It is designed for fast daily use without unnecessary complexity.",
    },
    {
      question: "Can I use it on mobile?",
      answer: "Yes. The experience is responsive on mobile, tablet, and desktop.",
    },
    {
      question: "Is it secure?",
      answer: "Yes, with modern security practices and GDPR-first thinking.",
    },
  ],
};

export const integrations: Record<
  Language,
  Array<{ name: string; description: string }>
> = {
  gr: [
    { name: "Payments", description: "Πληρωμές και τιμολόγηση" },
    { name: "Messaging", description: "SMS και email υπενθυμίσεις" },
    { name: "Calendar", description: "Συγχρονισμός ροών ημερολογίου" },
    { name: "Exports", description: "Εξαγωγές δεδομένων" },
  ],
  en: [
    { name: "Payments", description: "Payments and invoicing" },
    { name: "Messaging", description: "SMS and email reminders" },
    { name: "Calendar", description: "Scheduling sync" },
    { name: "Exports", description: "Data exports" },
  ],
};

export const blogCategories: Record<Language, string[]> = {
  gr: ["Practice management", "Profession-specific", "Growth"],
  en: ["Practice management", "Profession-specific", "Growth"],
};

export const signupFields: Record<
  Language,
  { name: string; email: string; password: string; profession: string; trust: string[] }
> = {
  gr: {
    name: "Όνομα",
    email: "Email",
    password: "Κωδικός",
    profession: "Επάγγελμα",
    trust: ["Δεν χρειάζεται κάρτα", "Έτοιμο σε 2 λεπτά"],
  },
  en: {
    name: "Name",
    email: "Email",
    password: "Password",
    profession: "Profession",
    trust: ["No card required", "Ready in 2 minutes"],
  },
};

export const contactCopy: Record<Language, { title: string; subtitle: string; cta: string }> = {
  gr: {
    title: "Μίλα με την ομάδα",
    subtitle: "Θέλεις να δεις το Clyro για το δικό σου ιατρείο ή κλινική; Κλείσε σύντομο intro.",
    cta: "Κλείσε demo",
  },
  en: {
    title: "Talk to the team",
    subtitle: "Want to see Clyro for your own practice or clinic? Book a short intro.",
    cta: "Book a demo",
  },
};

export function resolveProfessionBySlug(slug: string): Profession | null {
  return professions.find((profession) => profession.slug === slug)?.key ?? null;
}

export function getProfessionCopy(profession: Profession, language: Language) {
  return (
    professions.find((item) => item.key === profession)?.label[language] ??
    professions[0].label[language]
  );
}

export function getProfessionCard(profession: Profession) {
  return professions.find((item) => item.key === profession) ?? professions[0];
}

export function resolveMarketingState(args: {
  pathProfession?: Profession | null;
  queryProfession?: string | null;
  queryLanguage?: string | null;
  cookieProfession?: string | null;
  cookieLanguage?: string | null;
}) {
  const language = normalizeLanguage(args.queryLanguage ?? args.cookieLanguage ?? "gr");
  const profession =
    args.pathProfession ??
    resolveProfessionBySlug(args.queryProfession ?? "") ??
    resolveProfessionBySlug(args.cookieProfession ?? "") ??
    "physio";

  return {
    language,
    profession,
  };
}
