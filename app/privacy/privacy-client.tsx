"use client";

import { PageShell } from "@/components/page-shell";
import { useLanguage } from "@/components/language-context";
import type { Language } from "@/lib/site-data";

export function PrivacyPageClient({ language }: { language: Language }) {
  return (
    <PageShell language={language}>
      <PrivacyContent />
    </PageShell>
  );
}

/* ---------- helpers ---------- */

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mt-10 text-xl font-bold text-[var(--color-navy)] font-[var(--font-display)]">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-base font-semibold text-[var(--color-navy)]">{title}</h3>
      <div className="mt-2 space-y-2">{children}</div>
    </div>
  );
}

/* ---------- main content ---------- */

function PrivacyContent() {
  const { language } = useLanguage();
  const isEn = language === "en";

  if (isEn) return <EnglishPrivacy />;
  return <GreekPrivacy />;
}

/* ================================================================
   ENGLISH
   ================================================================ */

function EnglishPrivacy() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-navy)] font-[var(--font-display)] animate-fade-in-up">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-[var(--color-muted)]">
        Last updated: 9 April 2026
      </p>

      <div className="mt-8 rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-8 shadow-[var(--shadow-card)]">
        {/* 1 */}
        <Section id="who-we-are" title="1. Who we are">
          <p>
            Clyro is a cloud-based practice-management platform operated by Clyro
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), registered in Limassol, Cyprus. For the purposes of
            the General Data Protection Regulation (EU) 2016/679 (&ldquo;GDPR&rdquo;), the
            Cyprus Processing of Personal Data (Protection of the Individual) Law
            125(I)/2018, and the Greek Law 4624/2019:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>When a clinic subscribes to Clyro:</strong> the clinic (or
              independent practitioner) is the <strong>Data Controller</strong> and
              Clyro acts as <strong>Data Processor</strong> on its behalf.
            </li>
            <li>
              <strong>When you visit clyroapp.com or contact us directly:</strong> Clyro
              is the <strong>Data Controller</strong> for the personal data you provide.
            </li>
          </ul>
          <p>
            Contact: <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">hello@clyroapp.com</a>
          </p>
        </Section>

        {/* 2 */}
        <Section id="data-we-collect" title="2. Data we collect">
          <SubSection title="2.1 Website visitors (clyroapp.com)">
            <ul className="list-disc space-y-1 pl-5">
              <li>Contact-form submissions: name, email, profession, message.</li>
              <li>Technical data: IP address, browser user-agent (stored with each contact submission for security purposes).</li>
              <li>Cookies: a single optional language-preference cookie (<code className="rounded bg-[var(--color-surface-soft)] px-1 text-xs">clyro-language</code>). We do not use analytics or advertising cookies.</li>
            </ul>
          </SubSection>

          <SubSection title="2.2 Platform users (my.clyroapp.com)">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Account data:</strong> name, email address, profile photo, authentication credentials (managed by Clerk).</li>
              <li><strong>Organisation &amp; clinic data:</strong> clinic name, address, working hours, rooms, equipment.</li>
              <li><strong>Patient records:</strong> names, dates of birth, contact details, medical history, consultation notes, measurements, outcome scores, attachments, referral letters.</li>
              <li><strong>Appointment data:</strong> dates, times, types, status, practitioner assignments.</li>
              <li><strong>Billing data:</strong> invoices, payment records, insurance claims. We do <em>not</em> store credit-card numbers; payment processing is handled by third-party providers.</li>
              <li><strong>Usage &amp; audit data:</strong> feature-usage events, audit logs, AI action logs.</li>
            </ul>
            <p>
              Patient health data constitutes <strong>special-category data</strong> under
              Article 9 GDPR. It is processed solely on the basis of the legal grounds
              described in Section 3 below.
            </p>
          </SubSection>
        </Section>

        {/* 3 */}
        <Section id="legal-basis" title="3. Legal basis for processing">
          <div className="overflow-x-auto">
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] text-left">
                  <th className="pb-2 pr-4 font-semibold text-[var(--color-navy)]">Purpose</th>
                  <th className="pb-2 font-semibold text-[var(--color-navy)]">Legal basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                <tr>
                  <td className="py-2 pr-4">Providing the platform to subscribing clinics</td>
                  <td className="py-2">Performance of a contract (Art. 6(1)(b))</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Processing patient health data</td>
                  <td className="py-2">Necessary for health-care provision (Art. 9(2)(h)); controller&rsquo;s obligation under applicable healthcare law</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Responding to contact-form enquiries</td>
                  <td className="py-2">Legitimate interest (Art. 6(1)(f)) &mdash; responding to prospective customer enquiries</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Security, fraud prevention, audit logging</td>
                  <td className="py-2">Legitimate interest (Art. 6(1)(f)); legal obligation (Art. 6(1)(c))</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Compliance with tax, accounting, and regulatory obligations</td>
                  <td className="py-2">Legal obligation (Art. 6(1)(c))</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* 4 */}
        <Section id="sub-processors" title="4. Sub-processors &amp; international transfers">
          <p>
            We share personal data only with the sub-processors listed below, each bound
            by a Data Processing Agreement (DPA). Where data is transferred outside the
            EEA, the transfer mechanism is noted.
          </p>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] text-left">
                  <th className="pb-2 pr-4 font-semibold text-[var(--color-navy)]">Sub-processor</th>
                  <th className="pb-2 pr-4 font-semibold text-[var(--color-navy)]">Purpose</th>
                  <th className="pb-2 pr-4 font-semibold text-[var(--color-navy)]">Location</th>
                  <th className="pb-2 font-semibold text-[var(--color-navy)]">Transfer mechanism</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                <tr>
                  <td className="py-2 pr-4">Supabase (PostgreSQL)</td>
                  <td className="py-2 pr-4">Primary database</td>
                  <td className="py-2 pr-4">Frankfurt, Germany (EU)</td>
                  <td className="py-2">N/A &mdash; within EEA</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Vercel</td>
                  <td className="py-2 pr-4">Application hosting &amp; CDN</td>
                  <td className="py-2 pr-4">EU &amp; US edge</td>
                  <td className="py-2">EU-US Data Privacy Framework; SCCs</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Clerk</td>
                  <td className="py-2 pr-4">Authentication &amp; identity</td>
                  <td className="py-2 pr-4">United States</td>
                  <td className="py-2">EU-US Data Privacy Framework; SCCs</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Cloudflare R2</td>
                  <td className="py-2 pr-4">File &amp; attachment storage</td>
                  <td className="py-2 pr-4">EU (auto-selected region)</td>
                  <td className="py-2">N/A &mdash; within EEA</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Resend</td>
                  <td className="py-2 pr-4">Transactional email</td>
                  <td className="py-2 pr-4">United States</td>
                  <td className="py-2">EU-US Data Privacy Framework; SCCs</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Twilio</td>
                  <td className="py-2 pr-4">SMS &amp; WhatsApp notifications</td>
                  <td className="py-2 pr-4">United States</td>
                  <td className="py-2">EU-US Data Privacy Framework; SCCs</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Anthropic</td>
                  <td className="py-2 pr-4">AI-assisted clinical note drafting</td>
                  <td className="py-2 pr-4">United States</td>
                  <td className="py-2">EU-US Data Privacy Framework; SCCs; zero-retention API</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Sentry</td>
                  <td className="py-2 pr-4">Error monitoring</td>
                  <td className="py-2 pr-4">United States</td>
                  <td className="py-2">EU-US Data Privacy Framework; SCCs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm">
            All patient health data at rest is stored in the Supabase database hosted in
            Frankfurt, Germany. AI-assisted features use the Anthropic API with
            zero-retention data processing &mdash; no patient data is stored by Anthropic or used to
            train models.
          </p>
        </Section>

        {/* 5 */}
        <Section id="retention" title="5. Data retention">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Patient records:</strong> retained for as long as the subscribing clinic&rsquo;s account is active, plus a grace period after cancellation. Greek law (P.D. 84/2001, Art. 14) requires a minimum 10-year retention of medical records; clinics are responsible for compliance with local retention laws.</li>
            <li><strong>Account data:</strong> retained until the user deletes their account or the organisation is terminated.</li>
            <li><strong>Contact-form submissions:</strong> retained for 12 months, then archived or deleted.</li>
            <li><strong>Audit logs:</strong> retained for 2 years for security and compliance purposes.</li>
            <li><strong>Backups:</strong> database backups follow Supabase&rsquo;s retention schedule (point-in-time recovery for 7 days).</li>
          </ul>
        </Section>

        {/* 6 */}
        <Section id="security" title="6. Security measures">
          <ul className="list-disc space-y-1 pl-5">
            <li>All data in transit is encrypted via TLS 1.2+.</li>
            <li>Data at rest is encrypted using AES-256 (Supabase managed encryption).</li>
            <li>Row-Level Security (RLS) is enabled on all database tables to enforce tenant isolation.</li>
            <li>Authentication is handled by Clerk with support for multi-factor authentication (MFA).</li>
            <li>All API endpoints are protected by authentication and rate limiting.</li>
            <li>Security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) are enforced on all responses.</li>
            <li>Regular security audits and vulnerability assessments are performed.</li>
          </ul>
        </Section>

        {/* 7 */}
        <Section id="your-rights" title="7. Your rights">
          <p>
            Under GDPR, the Cyprus Law 125(I)/2018, and the Greek Law 4624/2019, you have
            the following rights:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Access</strong> (Art. 15) &mdash; request a copy of the personal data we hold about you.</li>
            <li><strong>Rectification</strong> (Art. 16) &mdash; correct inaccurate or incomplete data.</li>
            <li><strong>Erasure</strong> (Art. 17) &mdash; request deletion of your data, subject to legal retention obligations.</li>
            <li><strong>Restriction</strong> (Art. 18) &mdash; request that we limit processing in certain circumstances.</li>
            <li><strong>Data portability</strong> (Art. 20) &mdash; receive your data in a structured, machine-readable format.</li>
            <li><strong>Objection</strong> (Art. 21) &mdash; object to processing based on legitimate interest.</li>
            <li><strong>Withdraw consent</strong> (Art. 7(3)) &mdash; where processing is based on consent, withdraw it at any time.</li>
          </ul>
          <p>
            For patient data processed on behalf of a clinic (where the clinic is the
            Controller), please direct your request to your clinic in the first instance.
            The clinic may then instruct us to action the request.
          </p>
          <p>
            To exercise your rights regarding data for which Clyro is the Controller, email{" "}
            <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">hello@clyroapp.com</a>.
            We will respond within 30 days.
          </p>
        </Section>

        {/* 8 */}
        <Section id="supervisory-authorities" title="8. Supervisory authorities">
          <p>You have the right to lodge a complaint with your national supervisory authority:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Cyprus:</strong> Office of the Commissioner for Personal Data
              Protection &mdash;{" "}
              <a href="http://www.dataprotection.gov.cy" className="underline text-[var(--color-blue-dark)]" target="_blank" rel="noopener noreferrer">
                www.dataprotection.gov.cy
              </a>
            </li>
            <li>
              <strong>Greece:</strong> Hellenic Data Protection Authority (HDPA /
              A.P.D.P.Ch.) &mdash;{" "}
              <a href="http://www.dpa.gr" className="underline text-[var(--color-blue-dark)]" target="_blank" rel="noopener noreferrer">
                www.dpa.gr
              </a>
            </li>
          </ul>
        </Section>

        {/* 9 */}
        <Section id="cookies" title="9. Cookies">
          <p>
            We use a single, strictly necessary cookie (<code className="rounded bg-[var(--color-surface-soft)] px-1 text-xs">clyro-language</code>) to
            remember your language preference. This cookie does not track you and does not
            require consent under the ePrivacy Directive (2002/58/EC) as it is strictly
            necessary for the service you have requested.
          </p>
          <p>
            We do not use any analytics, advertising, or third-party tracking cookies on
            clyroapp.com.
          </p>
        </Section>

        {/* 10 */}
        <Section id="children" title="10. Children&rsquo;s data">
          <p>
            Clyro is a business-to-business platform for healthcare professionals. We do
            not knowingly collect personal data from children under 16. Where a clinic
            records paediatric patient data, the clinic (as Controller) is responsible
            for ensuring a valid legal basis, including any required parental or guardian consent.
          </p>
        </Section>

        {/* 11 */}
        <Section id="changes" title="11. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. Material changes will be
            communicated via email to registered users and posted on this page with an
            updated &ldquo;Last updated&rdquo; date. Continued use of the service after
            changes constitutes acceptance of the revised policy.
          </p>
        </Section>

        {/* 12 */}
        <Section id="contact-us" title="12. Contact us">
          <p>
            If you have any questions about this Privacy Policy or our data practices,
            please contact us:
          </p>
          <ul className="list-none space-y-1 pl-0">
            <li><strong>Email:</strong> <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">hello@clyroapp.com</a></li>
            <li><strong>Address:</strong> Clyro, Limassol, Cyprus</li>
          </ul>
        </Section>
      </div>
    </article>
  );
}

/* ================================================================
   GREEK
   ================================================================ */

function GreekPrivacy() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
        Νομικά
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-navy)] font-[var(--font-display)] animate-fade-in-up">
        Πολιτική Απορρήτου
      </h1>
      <p className="mt-2 text-sm text-[var(--color-muted)]">
        Τελευταία ενημέρωση: 9 Απριλίου 2026
      </p>

      <div className="mt-8 rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-8 shadow-[var(--shadow-card)]">
        {/* 1 */}
        <Section id="who-we-are" title="1. Ποιοι είμαστε">
          <p>
            Το Clyro είναι μια cloud πλατφόρμα διαχείρισης ιατρείων που λειτουργεί από
            την Clyro (&laquo;εμείς&raquo;, &laquo;μας&raquo;), εγγεγραμμένη στη
            Λεμεσό, Κύπρος. Για τους σκοπούς του Γενικού Κανονισμού Προστασίας
            Δεδομένων (ΕΕ) 2016/679 (&laquo;GDPR&raquo;), του Κυπριακού Νόμου
            125(I)/2018 περί Επεξεργασίας Δεδομένων Προσωπικού Χαρακτήρα, και του
            Ελληνικού Νόμου 4624/2019:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Όταν μια κλινική εγγράφεται στο Clyro:</strong> η κλινική (ή ο
              ανεξάρτητος επαγγελματίας) είναι ο <strong>Υπεύθυνος Επεξεργασίας</strong> και
              το Clyro ενεργεί ως <strong>Εκτελών την Επεξεργασία</strong>.
            </li>
            <li>
              <strong>Όταν επισκέπτεστε το clyroapp.com ή επικοινωνείτε απευθείας:</strong> το
              Clyro είναι ο <strong>Υπεύθυνος Επεξεργασίας</strong> για τα προσωπικά
              δεδομένα που παρέχετε.
            </li>
          </ul>
          <p>
            Επικοινωνία: <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">hello@clyroapp.com</a>
          </p>
        </Section>

        {/* 2 */}
        <Section id="data-we-collect" title="2. Δεδομένα που συλλέγουμε">
          <SubSection title="2.1 Επισκέπτες ιστοσελίδας (clyroapp.com)">
            <ul className="list-disc space-y-1 pl-5">
              <li>Υποβολές φόρμας επικοινωνίας: όνομα, email, επάγγελμα, μήνυμα.</li>
              <li>Τεχνικά δεδομένα: διεύθυνση IP, user-agent προγράμματος περιήγησης (αποθηκεύονται με κάθε υποβολή για λόγους ασφαλείας).</li>
              <li>Cookies: ένα μόνο προαιρετικό cookie γλωσσικής προτίμησης (<code className="rounded bg-[var(--color-surface-soft)] px-1 text-xs">clyro-language</code>). Δεν χρησιμοποιούμε cookies analytics ή διαφήμισης.</li>
            </ul>
          </SubSection>

          <SubSection title="2.2 Χρήστες πλατφόρμας (my.clyroapp.com)">
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Δεδομένα λογαριασμού:</strong> όνομα, email, φωτογραφία προφίλ, διαπιστευτήρια αυθεντικοποίησης (μέσω Clerk).</li>
              <li><strong>Δεδομένα οργανισμού &amp; κλινικής:</strong> όνομα κλινικής, διεύθυνση, ωράριο, αίθουσες, εξοπλισμός.</li>
              <li><strong>Αρχεία ασθενών:</strong> ονόματα, ημερομηνίες γέννησης, στοιχεία επικοινωνίας, ιατρικό ιστορικό, σημειώσεις συνεδριών, μετρήσεις, βαθμολογίες αποτελεσμάτων, συνημμένα, παραπεμπτικά.</li>
              <li><strong>Δεδομένα ραντεβού:</strong> ημερομηνίες, ώρες, τύποι, κατάσταση, αναθέσεις θεραπευτών.</li>
              <li><strong>Δεδομένα τιμολόγησης:</strong> τιμολόγια, πληρωμές, ασφαλιστικές αξιώσεις. <em>Δεν</em> αποθηκεύουμε αριθμούς πιστωτικών καρτών.</li>
              <li><strong>Δεδομένα χρήσης &amp; ελέγχου:</strong> events χρήσης, audit logs, AI action logs.</li>
            </ul>
            <p>
              Τα δεδομένα υγείας ασθενών αποτελούν <strong>ειδική κατηγορία δεδομένων</strong> σύμφωνα
              με το Άρθρο 9 GDPR. Η επεξεργασία τους βασίζεται αποκλειστικά στις νομικές
              βάσεις που περιγράφονται στην Ενότητα 3.
            </p>
          </SubSection>
        </Section>

        {/* 3 */}
        <Section id="legal-basis" title="3. Νομική βάση επεξεργασίας">
          <div className="overflow-x-auto">
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] text-left">
                  <th className="pb-2 pr-4 font-semibold text-[var(--color-navy)]">Σκοπός</th>
                  <th className="pb-2 font-semibold text-[var(--color-navy)]">Νομική βάση</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                <tr>
                  <td className="py-2 pr-4">Παροχή πλατφόρμας σε εγγεγραμμένες κλινικές</td>
                  <td className="py-2">Εκτέλεση σύμβασης (Άρθ. 6(1)(β))</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Επεξεργασία δεδομένων υγείας ασθενών</td>
                  <td className="py-2">Αναγκαία για παροχή υγειονομικής περίθαλψης (Άρθ. 9(2)(η)); υποχρέωση βάσει νομοθεσίας υγείας</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Απάντηση σε ερωτήματα φόρμας επικοινωνίας</td>
                  <td className="py-2">Έννομο συμφέρον (Άρθ. 6(1)(στ))</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Ασφάλεια, πρόληψη απάτης, audit logging</td>
                  <td className="py-2">Έννομο συμφέρον (Άρθ. 6(1)(στ)); νομική υποχρέωση (Άρθ. 6(1)(γ))</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Συμμόρφωση με φορολογικές &amp; κανονιστικές υποχρεώσεις</td>
                  <td className="py-2">Νομική υποχρέωση (Άρθ. 6(1)(γ))</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* 4 */}
        <Section id="sub-processors" title="4. Υπο-εκτελούντες &amp; διεθνείς μεταφορές">
          <p>
            Μοιραζόμαστε προσωπικά δεδομένα μόνο με τους παρακάτω υπο-εκτελούντες, οι
            οποίοι δεσμεύονται από Συμφωνία Επεξεργασίας Δεδομένων (DPA). Όπου τα
            δεδομένα μεταφέρονται εκτός ΕΟΧ, σημειώνεται ο μηχανισμός μεταφοράς.
          </p>
          <div className="overflow-x-auto">
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] text-left">
                  <th className="pb-2 pr-4 font-semibold text-[var(--color-navy)]">Υπο-εκτελών</th>
                  <th className="pb-2 pr-4 font-semibold text-[var(--color-navy)]">Σκοπός</th>
                  <th className="pb-2 pr-4 font-semibold text-[var(--color-navy)]">Τοποθεσία</th>
                  <th className="pb-2 font-semibold text-[var(--color-navy)]">Μηχανισμός</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                <tr>
                  <td className="py-2 pr-4">Supabase (PostgreSQL)</td>
                  <td className="py-2 pr-4">Κύρια βάση δεδομένων</td>
                  <td className="py-2 pr-4">Φρανκφούρτη, Γερμανία (ΕΕ)</td>
                  <td className="py-2">Δ/Ε &mdash; εντός ΕΟΧ</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Vercel</td>
                  <td className="py-2 pr-4">Hosting &amp; CDN</td>
                  <td className="py-2 pr-4">ΕΕ &amp; ΗΠΑ</td>
                  <td className="py-2">EU-US DPF; SCCs</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Clerk</td>
                  <td className="py-2 pr-4">Αυθεντικοποίηση</td>
                  <td className="py-2 pr-4">ΗΠΑ</td>
                  <td className="py-2">EU-US DPF; SCCs</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Cloudflare R2</td>
                  <td className="py-2 pr-4">Αποθήκευση αρχείων</td>
                  <td className="py-2 pr-4">ΕΕ</td>
                  <td className="py-2">Δ/Ε &mdash; εντός ΕΟΧ</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Resend</td>
                  <td className="py-2 pr-4">Email συναλλαγών</td>
                  <td className="py-2 pr-4">ΗΠΑ</td>
                  <td className="py-2">EU-US DPF; SCCs</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Twilio</td>
                  <td className="py-2 pr-4">SMS &amp; WhatsApp</td>
                  <td className="py-2 pr-4">ΗΠΑ</td>
                  <td className="py-2">EU-US DPF; SCCs</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Anthropic</td>
                  <td className="py-2 pr-4">AI-υποβοηθούμενη σύνταξη σημειώσεων</td>
                  <td className="py-2 pr-4">ΗΠΑ</td>
                  <td className="py-2">EU-US DPF; SCCs; zero-retention API</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Sentry</td>
                  <td className="py-2 pr-4">Παρακολούθηση σφαλμάτων</td>
                  <td className="py-2 pr-4">ΗΠΑ</td>
                  <td className="py-2">EU-US DPF; SCCs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm">
            Όλα τα δεδομένα υγείας ασθενών αποθηκεύονται στη βάση δεδομένων Supabase στη
            Φρανκφούρτη, Γερμανία. Οι λειτουργίες AI χρησιμοποιούν το Anthropic API με
            zero-retention &mdash; κανένα δεδομένο ασθενή δεν αποθηκεύεται από την Anthropic
            ούτε χρησιμοποιείται για εκπαίδευση μοντέλων.
          </p>
        </Section>

        {/* 5 */}
        <Section id="retention" title="5. Διατήρηση δεδομένων">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Αρχεία ασθενών:</strong> διατηρούνται για όσο ο λογαριασμός της κλινικής είναι ενεργός, συν περίοδο χάριτος μετά την ακύρωση. Η ελληνική νομοθεσία (Π.Δ. 84/2001, Άρθ. 14) απαιτεί ελάχιστη 10ετή διατήρηση ιατρικών αρχείων.</li>
            <li><strong>Δεδομένα λογαριασμού:</strong> διατηρούνται μέχρι ο χρήστης διαγράψει τον λογαριασμό του.</li>
            <li><strong>Υποβολές φόρμας επικοινωνίας:</strong> διατηρούνται για 12 μήνες.</li>
            <li><strong>Audit logs:</strong> διατηρούνται για 2 χρόνια.</li>
            <li><strong>Αντίγραφα ασφαλείας:</strong> ακολουθούν το πρόγραμμα του Supabase (point-in-time recovery για 7 ημέρες).</li>
          </ul>
        </Section>

        {/* 6 */}
        <Section id="security" title="6. Μέτρα ασφαλείας">
          <ul className="list-disc space-y-1 pl-5">
            <li>Κρυπτογράφηση δεδομένων κατά τη μεταφορά μέσω TLS 1.2+.</li>
            <li>Κρυπτογράφηση δεδομένων σε αδράνεια με AES-256.</li>
            <li>Row-Level Security (RLS) σε όλους τους πίνακες της βάσης δεδομένων.</li>
            <li>Αυθεντικοποίηση μέσω Clerk με υποστήριξη πολυπαραγοντικού ελέγχου (MFA).</li>
            <li>Προστασία API endpoints με authentication και rate limiting.</li>
            <li>Security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).</li>
            <li>Τακτικοί έλεγχοι ασφαλείας και αξιολογήσεις ευπαθειών.</li>
          </ul>
        </Section>

        {/* 7 */}
        <Section id="your-rights" title="7. Τα δικαιώματά σας">
          <p>
            Σύμφωνα με τον GDPR, τον Κυπριακό Νόμο 125(I)/2018 και τον Ελληνικό Νόμο
            4624/2019, έχετε τα ακόλουθα δικαιώματα:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Πρόσβαση</strong> (Άρθ. 15) &mdash; αίτημα αντιγράφου των δεδομένων σας.</li>
            <li><strong>Διόρθωση</strong> (Άρθ. 16) &mdash; διόρθωση ανακριβών ή ελλιπών δεδομένων.</li>
            <li><strong>Διαγραφή</strong> (Άρθ. 17) &mdash; αίτημα διαγραφής, με επιφύλαξη νομικών υποχρεώσεων διατήρησης.</li>
            <li><strong>Περιορισμός</strong> (Άρθ. 18) &mdash; αίτημα περιορισμού της επεξεργασίας.</li>
            <li><strong>Φορητότητα</strong> (Άρθ. 20) &mdash; λήψη δεδομένων σε δομημένη, αναγνώσιμη μορφή.</li>
            <li><strong>Εναντίωση</strong> (Άρθ. 21) &mdash; εναντίωση στην επεξεργασία βάσει εννόμου συμφέροντος.</li>
            <li><strong>Ανάκληση συγκατάθεσης</strong> (Άρθ. 7(3)) &mdash; ανά πάσα στιγμή.</li>
          </ul>
          <p>
            Για δεδομένα ασθενών που υποβάλλονται σε επεξεργασία εκ μέρους κλινικής,
            απευθυνθείτε πρώτα στην κλινική σας. Η κλινική μπορεί στη συνέχεια να μας
            δώσει εντολή εκτέλεσης του αιτήματος.
          </p>
          <p>
            Για δεδομένα για τα οποία το Clyro είναι Υπεύθυνος Επεξεργασίας, επικοινωνήστε
            στο{" "}
            <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">hello@clyroapp.com</a>.
            Θα απαντήσουμε εντός 30 ημερών.
          </p>
        </Section>

        {/* 8 */}
        <Section id="supervisory-authorities" title="8. Εποπτικές αρχές">
          <p>Έχετε το δικαίωμα υποβολής καταγγελίας στην εθνική εποπτική αρχή:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Κύπρος:</strong> Γραφείο Επιτρόπου Προστασίας Δεδομένων
              Προσωπικού Χαρακτήρα &mdash;{" "}
              <a href="http://www.dataprotection.gov.cy" className="underline text-[var(--color-blue-dark)]" target="_blank" rel="noopener noreferrer">
                www.dataprotection.gov.cy
              </a>
            </li>
            <li>
              <strong>Ελλάδα:</strong> Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα
              (Α.Π.Δ.Π.Χ.) &mdash;{" "}
              <a href="http://www.dpa.gr" className="underline text-[var(--color-blue-dark)]" target="_blank" rel="noopener noreferrer">
                www.dpa.gr
              </a>
            </li>
          </ul>
        </Section>

        {/* 9 */}
        <Section id="cookies" title="9. Cookies">
          <p>
            Χρησιμοποιούμε ένα μόνο, απολύτως απαραίτητο cookie (<code className="rounded bg-[var(--color-surface-soft)] px-1 text-xs">clyro-language</code>) για
            την αποθήκευση της γλωσσικής προτίμησης. Αυτό το cookie δεν σας παρακολουθεί
            και δεν απαιτεί συγκατάθεση σύμφωνα με την Οδηγία ePrivacy (2002/58/ΕΚ).
          </p>
          <p>
            Δεν χρησιμοποιούμε cookies analytics, διαφήμισης ή παρακολούθησης τρίτων στο
            clyroapp.com.
          </p>
        </Section>

        {/* 10 */}
        <Section id="children" title="10. Δεδομένα ανηλίκων">
          <p>
            Το Clyro είναι πλατφόρμα B2B για επαγγελματίες υγείας. Δεν συλλέγουμε εν
            γνώσει μας δεδομένα ανηλίκων κάτω των 16 ετών. Όταν μια κλινική καταχωρεί
            παιδιατρικά δεδομένα, η κλινική (ως Υπεύθυνος Επεξεργασίας) ευθύνεται για τη
            διασφάλιση νομικής βάσης, συμπεριλαμβανομένης τυχόν γονικής συγκατάθεσης.
          </p>
        </Section>

        {/* 11 */}
        <Section id="changes" title="11. Αλλαγές σε αυτήν την πολιτική">
          <p>
            Ενδέχεται να ενημερώσουμε αυτήν την Πολιτική Απορρήτου κατά καιρούς.
            Ουσιαστικές αλλαγές θα κοινοποιούνται μέσω email στους εγγεγραμμένους χρήστες
            και θα δημοσιεύονται σε αυτήν τη σελίδα με ενημερωμένη ημερομηνία.
          </p>
        </Section>

        {/* 12 */}
        <Section id="contact-us" title="12. Επικοινωνία">
          <p>
            Εάν έχετε ερωτήσεις σχετικά με αυτήν την Πολιτική Απορρήτου, επικοινωνήστε
            μαζί μας:
          </p>
          <ul className="list-none space-y-1 pl-0">
            <li><strong>Email:</strong> <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">hello@clyroapp.com</a></li>
            <li><strong>Διεύθυνση:</strong> Clyro, Λεμεσός, Κύπρος</li>
          </ul>
        </Section>
      </div>
    </article>
  );
}
