"use client";

import { PageShell } from "@/components/page-shell";
import { useLanguage } from "@/components/language-context";
import type { Language } from "@/lib/site-data";

export function TermsPageClient({ language }: { language: Language }) {
  return (
    <PageShell language={language}>
      <TermsContent />
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

/* ---------- main content ---------- */

function TermsContent() {
  const { language } = useLanguage();
  if (language === "en") return <EnglishTerms />;
  return <GreekTerms />;
}

/* ================================================================
   ENGLISH
   ================================================================ */

function EnglishTerms() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-navy)] font-[var(--font-display)] animate-fade-in-up">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-[var(--color-muted)]">
        Last updated: 9 April 2026
      </p>

      <div className="mt-8 rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-8 shadow-[var(--shadow-card)]">
        {/* 1 */}
        <Section id="acceptance" title="1. Acceptance of terms">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding
            agreement between you (&ldquo;Customer&rdquo;, &ldquo;you&rdquo;) and Clyro,
            Limassol, Cyprus (&ldquo;Clyro&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
            governing your access to and use of the Clyro practice-management platform
            available at my.clyroapp.com (the &ldquo;Service&rdquo;).
          </p>
          <p>
            By creating an account or using the Service, you agree to be bound by these
            Terms and our{" "}
            <a href="/privacy" className="underline text-[var(--color-blue-dark)]">
              Privacy Policy
            </a>
            . If you do not agree, do not use the Service.
          </p>
        </Section>

        {/* 2 */}
        <Section id="definitions" title="2. Definitions">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>&ldquo;Organisation&rdquo;</strong> means the legal entity (clinic, practice, or individual practitioner) that subscribes to the Service.</li>
            <li><strong>&ldquo;User&rdquo;</strong> means any individual authorised by an Organisation to access the Service.</li>
            <li><strong>&ldquo;Patient Data&rdquo;</strong> means any personal data or health data relating to patients entered into the Service by Users.</li>
            <li><strong>&ldquo;Platform&rdquo;</strong> means the Clyro web application, APIs, and associated infrastructure.</li>
          </ul>
        </Section>

        {/* 3 */}
        <Section id="eligibility" title="3. Eligibility">
          <p>
            The Service is designed for licensed healthcare professionals and clinics
            operating in Cyprus and Greece. By registering, you represent that you are
            at least 18 years old and have the legal authority to bind the Organisation
            to these Terms. You are responsible for ensuring that your use of the Service
            complies with all applicable healthcare regulations in your jurisdiction.
          </p>
        </Section>

        {/* 4 */}
        <Section id="account" title="4. Accounts &amp; security">
          <ul className="list-disc space-y-1 pl-5">
            <li>You must provide accurate and complete registration information.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You must notify us immediately at <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">hello@clyroapp.com</a> of any unauthorised access to your account.</li>
            <li>We strongly recommend enabling multi-factor authentication (MFA) for all users.</li>
            <li>You are responsible for all activity that occurs under your account.</li>
          </ul>
        </Section>

        {/* 5 */}
        <Section id="service-description" title="5. Service description">
          <p>
            Clyro provides a cloud-based electronic patient record (EPR) and clinic
            management platform, including but not limited to: appointment scheduling,
            patient records, clinical notes, billing, messaging, reporting, and
            AI-assisted features. The Service is provided on an &ldquo;as available&rdquo;
            basis.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of the
            Service with reasonable notice. We will provide at least 30 days&rsquo; notice
            for material changes that affect core functionality.
          </p>
        </Section>

        {/* 6 */}
        <Section id="data-ownership" title="6. Data ownership &amp; processing">
          <p>
            <strong>You own your data.</strong> All Patient Data and Organisation data
            entered into the Service remains the property of the Organisation. Clyro does
            not claim any ownership over your data.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Controller &amp; Processor roles:</strong> the Organisation is the
              Data Controller for Patient Data under GDPR. Clyro acts as Data Processor,
              processing Patient Data solely on the Organisation&rsquo;s instructions and
              in accordance with our{" "}
              <a href="/privacy" className="underline text-[var(--color-blue-dark)]">
                Privacy Policy
              </a>.
            </li>
            <li>
              <strong>Data Processing Agreement:</strong> by accepting these Terms, you
              also accept our Data Processing Agreement (DPA), which forms an integral
              part of these Terms. The DPA covers the processing scope, security
              measures, sub-processor obligations, and breach notification procedures
              required under GDPR Article 28. A copy of the DPA is available on
              request at{" "}
              <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">
                hello@clyroapp.com
              </a>.
            </li>
            <li>
              <strong>Data portability:</strong> you may export your data at any time
              through the platform&rsquo;s export features. Upon account termination, we will
              provide data export access for 30 days before deletion.
            </li>
            <li>
              <strong>AI features:</strong> AI-assisted features (e.g., clinical note
              drafting) use the Anthropic API with zero-retention processing. No Patient
              Data is stored by Anthropic or used to train AI models.
            </li>
          </ul>
        </Section>

        {/* 7 */}
        <Section id="acceptable-use" title="7. Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Use the Service for any purpose other than legitimate healthcare practice management.</li>
            <li>Share account credentials with unauthorised individuals.</li>
            <li>Attempt to access data belonging to other Organisations.</li>
            <li>Reverse-engineer, decompile, or disassemble any part of the Service.</li>
            <li>Use the Service to store or transmit malicious code.</li>
            <li>Use automated scripts to access the Service without our written consent.</li>
            <li>Resell, sublicense, or distribute access to the Service.</li>
            <li>Use AI-assisted features to generate false or fabricated clinical records.</li>
          </ul>
          <p>
            Violation of these terms may result in immediate suspension or termination of
            your account.
          </p>
        </Section>

        {/* 8 */}
        <Section id="subscriptions" title="8. Subscriptions &amp; billing">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Free tier:</strong> Clyro offers a free tier with limited usage allowances. The free tier is subject to fair-use limits and may be modified with 30 days&rsquo; notice.</li>
            <li><strong>Paid plans:</strong> paid subscriptions are billed monthly or annually as selected during checkout. Prices are displayed in EUR and include applicable VAT.</li>
            <li><strong>Usage-based charges:</strong> certain features (AI drafting, SMS, WhatsApp) may incur per-use charges beyond included allowances. Current rates are displayed in the platform&rsquo;s pricing section.</li>
            <li><strong>Top-up packs:</strong> additional usage credits may be purchased as top-up packs. Unused credits from top-up packs do not expire while the subscription is active.</li>
            <li><strong>Renewals:</strong> subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period.</li>
            <li><strong>Refunds:</strong> we do not offer refunds for partial billing periods. If you cancel mid-period, you retain access until the end of the paid period.</li>
            <li><strong>Price changes:</strong> we may adjust pricing with at least 30 days&rsquo; written notice. Price changes take effect at the next renewal date.</li>
          </ul>
        </Section>

        {/* 9 */}
        <Section id="availability" title="9. Service availability &amp; support">
          <ul className="list-disc space-y-1 pl-5">
            <li>We target 99.9% uptime but do not guarantee uninterrupted service.</li>
            <li>Scheduled maintenance will be communicated at least 48 hours in advance where practicable.</li>
            <li>Support is available via email at <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">hello@clyroapp.com</a>, Monday to Friday, 09:00&ndash;18:00 EET.</li>
            <li>We will make commercially reasonable efforts to resolve critical issues within 24 hours.</li>
          </ul>
        </Section>

        {/* 10 */}
        <Section id="ip" title="10. Intellectual property">
          <p>
            All intellectual property rights in the Service (including source code,
            design, branding, and documentation) are and remain the exclusive property
            of Clyro. These Terms do not grant you any rights to our intellectual
            property except the limited right to use the Service as described herein.
          </p>
          <p>
            You grant Clyro a limited, non-exclusive licence to use your Organisation&rsquo;s
            name and logo solely for the purpose of identifying you as a customer (e.g.,
            on a customer list), unless you opt out by notifying us in writing.
          </p>
        </Section>

        {/* 11 */}
        <Section id="liability" title="11. Limitation of liability">
          <p>
            <strong>To the maximum extent permitted by applicable law:</strong>
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
              without warranties of any kind, whether express or implied, including but
              not limited to implied warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </li>
            <li>
              Clyro&rsquo;s total aggregate liability arising out of or in connection
              with these Terms shall not exceed the total fees paid by you in the
              12 months preceding the claim.
            </li>
            <li>
              Clyro shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of profits, data, or
              business opportunities.
            </li>
            <li>
              <strong>Clinical decisions:</strong> the Service (including AI-assisted
              features) is a tool to support clinical workflow. It does not provide
              medical advice, diagnosis, or treatment recommendations. All clinical
              decisions remain the sole responsibility of the treating healthcare
              professional. Clyro accepts no liability for clinical outcomes.
            </li>
          </ul>
          <p>
            Nothing in these Terms excludes or limits liability for fraud, gross
            negligence, death or personal injury caused by our negligence, or any other
            liability that cannot be excluded by law.
          </p>
        </Section>

        {/* 12 */}
        <Section id="indemnification" title="12. Indemnification">
          <p>
            You agree to indemnify and hold Clyro harmless from any claims, damages,
            losses, or expenses (including reasonable legal fees) arising from: (a) your
            breach of these Terms; (b) your violation of any applicable law or
            regulation; (c) any third-party claim relating to your use of the Service
            or the data you enter into it.
          </p>
        </Section>

        {/* 13 */}
        <Section id="termination" title="13. Termination">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>By you:</strong> you may cancel your subscription and close your account at any time through the platform settings or by emailing <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">hello@clyroapp.com</a>.</li>
            <li><strong>By us:</strong> we may suspend or terminate your access immediately if you breach these Terms, fail to pay fees, or if required by law. For non-urgent breaches, we will provide 14 days&rsquo; written notice and an opportunity to cure.</li>
            <li><strong>Effect of termination:</strong> upon termination, your right to use the Service ceases. We will make your data available for export for 30 days following termination. After this period, we will delete your data in accordance with our retention policy, subject to any legal obligations to retain certain records.</li>
          </ul>
        </Section>

        {/* 14 */}
        <Section id="force-majeure" title="14. Force majeure">
          <p>
            Neither party shall be liable for delays or failures in performance
            resulting from circumstances beyond its reasonable control, including but not
            limited to natural disasters, war, terrorism, pandemics, government
            actions, power failures, internet outages, or third-party service failures.
          </p>
        </Section>

        {/* 15 */}
        <Section id="changes" title="15. Changes to these terms">
          <p>
            We may update these Terms from time to time. Material changes will be
            communicated via email at least 30 days before they take effect. Continued
            use of the Service after the effective date constitutes acceptance of the
            revised Terms. If you do not agree with the changes, you may terminate your
            account before the effective date.
          </p>
        </Section>

        {/* 16 */}
        <Section id="governing-law" title="16. Governing law &amp; disputes">
          <p>
            These Terms are governed by and construed in accordance with the laws of the
            Republic of Cyprus, without regard to its conflict-of-law provisions.
          </p>
          <p>
            Any dispute arising out of or in connection with these Terms shall first be
            attempted to be resolved through good-faith negotiation. If unresolved within
            30 days, the dispute shall be submitted to the exclusive jurisdiction of the
            courts of Limassol, Cyprus.
          </p>
          <p>
            For customers based in Greece, nothing in these Terms affects your
            mandatory consumer protection rights under Greek law (Law 2251/1994 as
            amended).
          </p>
        </Section>

        {/* 17 */}
        <Section id="severability" title="17. Severability">
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that
            provision shall be limited or eliminated to the minimum extent necessary, and
            the remaining provisions shall continue in full force and effect.
          </p>
        </Section>

        {/* 18 */}
        <Section id="entire-agreement" title="18. Entire agreement">
          <p>
            These Terms, together with the Privacy Policy and the Data Processing
            Agreement, constitute the entire agreement between you and Clyro regarding
            the Service and supersede all prior agreements and understandings, whether
            written or oral.
          </p>
        </Section>

        {/* 19 */}
        <Section id="contact" title="19. Contact us">
          <p>
            If you have any questions about these Terms, please contact us:
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

function GreekTerms() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-blue-dark)]">
        Νομικά
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-navy)] font-[var(--font-display)] animate-fade-in-up">
        Όροι Χρήσης
      </h1>
      <p className="mt-2 text-sm text-[var(--color-muted)]">
        Τελευταία ενημέρωση: 9 Απριλίου 2026
      </p>

      <div className="mt-8 rounded-[var(--radius-card)] border border-white/70 bg-white/90 p-8 shadow-[var(--shadow-card)]">
        {/* 1 */}
        <Section id="acceptance" title="1. Αποδοχή όρων">
          <p>
            Αυτοί οι Όροι Χρήσης (&laquo;Όροι&raquo;) αποτελούν νομικά δεσμευτική
            συμφωνία μεταξύ εσάς (&laquo;Πελάτης&raquo;, &laquo;εσείς&raquo;) και της
            Clyro, Λεμεσός, Κύπρος (&laquo;Clyro&raquo;, &laquo;εμείς&raquo;,
            &laquo;μας&raquo;) που διέπει την πρόσβαση και χρήση της πλατφόρμας
            διαχείρισης ιατρείων Clyro στο my.clyroapp.com (η &laquo;Υπηρεσία&raquo;).
          </p>
          <p>
            Δημιουργώντας λογαριασμό ή χρησιμοποιώντας την Υπηρεσία, αποδέχεστε αυτούς
            τους Όρους και την{" "}
            <a href="/privacy" className="underline text-[var(--color-blue-dark)]">
              Πολιτική Απορρήτου
            </a>
            . Εάν δεν συμφωνείτε, μη χρησιμοποιείτε την Υπηρεσία.
          </p>
        </Section>

        {/* 2 */}
        <Section id="definitions" title="2. Ορισμοί">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>&laquo;Οργανισμός&raquo;</strong> σημαίνει τη νομική οντότητα (κλινική, ιατρείο ή ανεξάρτητος επαγγελματίας) που εγγράφεται στην Υπηρεσία.</li>
            <li><strong>&laquo;Χρήστης&raquo;</strong> σημαίνει κάθε άτομο εξουσιοδοτημένο από τον Οργανισμό να έχει πρόσβαση στην Υπηρεσία.</li>
            <li><strong>&laquo;Δεδομένα Ασθενών&raquo;</strong> σημαίνει κάθε προσωπικό δεδομένο ή δεδομένο υγείας ασθενών που καταχωρείται στην Υπηρεσία από Χρήστες.</li>
            <li><strong>&laquo;Πλατφόρμα&raquo;</strong> σημαίνει τη web εφαρμογή Clyro, τα APIs και τη σχετική υποδομή.</li>
          </ul>
        </Section>

        {/* 3 */}
        <Section id="eligibility" title="3. Επιλεξιμότητα">
          <p>
            Η Υπηρεσία σχεδιάστηκε για αδειοδοτημένους επαγγελματίες υγείας και
            κλινικές στην Κύπρο και την Ελλάδα. Εγγραφόμενοι, δηλώνετε ότι είστε
            τουλάχιστον 18 ετών και έχετε τη νομική εξουσία να δεσμεύσετε τον Οργανισμό
            με αυτούς τους Όρους. Είστε υπεύθυνοι να διασφαλίσετε ότι η χρήση της
            Υπηρεσίας συμμορφώνεται με την ισχύουσα νομοθεσία υγείας.
          </p>
        </Section>

        {/* 4 */}
        <Section id="account" title="4. Λογαριασμοί &amp; ασφάλεια">
          <ul className="list-disc space-y-1 pl-5">
            <li>Πρέπει να παρέχετε ακριβή και πλήρη στοιχεία εγγραφής.</li>
            <li>Είστε υπεύθυνοι για τη διατήρηση της εμπιστευτικότητας των διαπιστευτηρίων σας.</li>
            <li>Πρέπει να μας ενημερώσετε αμέσως στο <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">hello@clyroapp.com</a> για οποιαδήποτε μη εξουσιοδοτημένη πρόσβαση.</li>
            <li>Συνιστούμε ανεπιφύλακτα την ενεργοποίηση πολυπαραγοντικού ελέγχου (MFA).</li>
            <li>Είστε υπεύθυνοι για κάθε δραστηριότητα στον λογαριασμό σας.</li>
          </ul>
        </Section>

        {/* 5 */}
        <Section id="service-description" title="5. Περιγραφή υπηρεσίας">
          <p>
            Το Clyro παρέχει μια cloud πλατφόρμα ηλεκτρονικού αρχείου ασθενών (EPR) και
            διαχείρισης κλινικής, συμπεριλαμβανομένων: προγραμματισμού ραντεβού, αρχείων
            ασθενών, κλινικών σημειώσεων, τιμολόγησης, μηνυμάτων, αναφορών και
            AI-υποβοηθούμενων λειτουργιών.
          </p>
          <p>
            Διατηρούμε το δικαίωμα τροποποίησης, αναστολής ή διακοπής οποιουδήποτε
            μέρους της Υπηρεσίας με εύλογη ειδοποίηση. Θα παρέχουμε τουλάχιστον 30
            ημέρες ειδοποίηση για ουσιαστικές αλλαγές.
          </p>
        </Section>

        {/* 6 */}
        <Section id="data-ownership" title="6. Ιδιοκτησία δεδομένων &amp; επεξεργασία">
          <p>
            <strong>Τα δεδομένα σας ανήκουν σε εσάς.</strong> Όλα τα Δεδομένα Ασθενών
            και δεδομένα Οργανισμού παραμένουν ιδιοκτησία του Οργανισμού. Το Clyro δεν
            διεκδικεί ιδιοκτησία επί των δεδομένων σας.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Ρόλοι Υπευθύνου &amp; Εκτελούντος:</strong> ο Οργανισμός είναι ο
              Υπεύθυνος Επεξεργασίας για τα Δεδομένα Ασθενών σύμφωνα με τον GDPR. Το
              Clyro ενεργεί ως Εκτελών την Επεξεργασία.
            </li>
            <li>
              <strong>Συμφωνία Επεξεργασίας Δεδομένων:</strong> αποδεχόμενοι αυτούς τους
              Όρους, αποδέχεστε επίσης τη Συμφωνία Επεξεργασίας Δεδομένων (DPA), η οποία
              αποτελεί αναπόσπαστο μέρος αυτών. Αντίγραφο διατίθεται κατόπιν αιτήματος
              στο{" "}
              <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">
                hello@clyroapp.com
              </a>.
            </li>
            <li>
              <strong>Φορητότητα δεδομένων:</strong> μπορείτε να εξάγετε τα δεδομένα σας
              ανά πάσα στιγμή. Μετά τη λήξη λογαριασμού, παρέχεται πρόσβαση εξαγωγής
              για 30 ημέρες.
            </li>
            <li>
              <strong>Λειτουργίες AI:</strong> οι AI-υποβοηθούμενες λειτουργίες
              χρησιμοποιούν το Anthropic API με zero-retention. Κανένα Δεδομένο Ασθενή
              δεν αποθηκεύεται ή χρησιμοποιείται για εκπαίδευση μοντέλων.
            </li>
          </ul>
        </Section>

        {/* 7 */}
        <Section id="acceptable-use" title="7. Αποδεκτή χρήση">
          <p>Συμφωνείτε να μην:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Χρησιμοποιείτε την Υπηρεσία για σκοπό πέρα από τη νόμιμη διαχείριση ιατρείου.</li>
            <li>Μοιράζεστε διαπιστευτήρια με μη εξουσιοδοτημένα άτομα.</li>
            <li>Επιχειρείτε πρόσβαση σε δεδομένα άλλων Οργανισμών.</li>
            <li>Αντιστρέφετε, αποσυμπιλείτε ή αποσυναρμολογείτε τμήματα της Υπηρεσίας.</li>
            <li>Χρησιμοποιείτε την Υπηρεσία για αποθήκευση ή μετάδοση κακόβουλου κώδικα.</li>
            <li>Χρησιμοποιείτε αυτοματοποιημένα scripts χωρίς τη γραπτή μας συγκατάθεση.</li>
            <li>Μεταπωλείτε ή διανέμετε πρόσβαση στην Υπηρεσία.</li>
            <li>Χρησιμοποιείτε AI λειτουργίες για δημιουργία ψευδών κλινικών αρχείων.</li>
          </ul>
          <p>
            Παραβίαση αυτών των όρων μπορεί να οδηγήσει σε άμεση αναστολή ή
            τερματισμό του λογαριασμού σας.
          </p>
        </Section>

        {/* 8 */}
        <Section id="subscriptions" title="8. Συνδρομές &amp; τιμολόγηση">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Δωρεάν πλάνο:</strong> το Clyro προσφέρει δωρεάν πλάνο με περιορισμένα όρια χρήσης, υπό εύλογους περιορισμούς.</li>
            <li><strong>Πληρωμένα πλάνα:</strong> χρεώνονται μηνιαία ή ετησίως. Οι τιμές εμφανίζονται σε EUR συμπεριλαμβανομένου ΦΠΑ.</li>
            <li><strong>Χρεώσεις χρήσης:</strong> ορισμένες λειτουργίες (AI, SMS, WhatsApp) ενδέχεται να χρεώνονται ανά χρήση πέραν του δωρεάν ορίου.</li>
            <li><strong>Πακέτα Top-up:</strong> πρόσθετα credits που δεν λήγουν ενώ η συνδρομή είναι ενεργή.</li>
            <li><strong>Ανανεώσεις:</strong> οι συνδρομές ανανεώνονται αυτόματα εκτός αν ακυρωθούν τουλάχιστον 24 ώρες πριν τη λήξη.</li>
            <li><strong>Επιστροφές:</strong> δεν προσφέρουμε επιστροφές για μερικές περιόδους χρέωσης.</li>
            <li><strong>Αλλαγές τιμών:</strong> με ειδοποίηση τουλάχιστον 30 ημερών. Ισχύουν από την επόμενη ανανέωση.</li>
          </ul>
        </Section>

        {/* 9 */}
        <Section id="availability" title="9. Διαθεσιμότητα &amp; υποστήριξη">
          <ul className="list-disc space-y-1 pl-5">
            <li>Στοχεύουμε σε 99.9% uptime αλλά δεν εγγυόμαστε αδιάλειπτη υπηρεσία.</li>
            <li>Προγραμματισμένη συντήρηση θα κοινοποιείται 48 ώρες νωρίτερα.</li>
            <li>Υποστήριξη μέσω email στο <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">hello@clyroapp.com</a>, Δευτέρα-Παρασκευή, 09:00-18:00 EET.</li>
            <li>Εμπορικά εύλογες προσπάθειες επίλυσης κρίσιμων ζητημάτων εντός 24 ωρών.</li>
          </ul>
        </Section>

        {/* 10 */}
        <Section id="ip" title="10. Πνευματική ιδιοκτησία">
          <p>
            Όλα τα δικαιώματα πνευματικής ιδιοκτησίας στην Υπηρεσία (πηγαίος κώδικας,
            σχεδιασμός, branding, τεκμηρίωση) παραμένουν αποκλειστική ιδιοκτησία της
            Clyro. Αυτοί οι Όροι δεν σας παρέχουν δικαιώματα πνευματικής ιδιοκτησίας
            εκτός του περιορισμένου δικαιώματος χρήσης.
          </p>
          <p>
            Παρέχετε στο Clyro περιορισμένη, μη αποκλειστική άδεια χρήσης του ονόματος
            και λογοτύπου του Οργανισμού σας αποκλειστικά για αναγνώριση ως πελάτη, εκτός
            αν μας ενημερώσετε γραπτώς.
          </p>
        </Section>

        {/* 11 */}
        <Section id="liability" title="11. Περιορισμός ευθύνης">
          <p>
            <strong>Στο μέγιστο βαθμό που επιτρέπεται από το εφαρμοστέο δίκαιο:</strong>
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Η Υπηρεσία παρέχεται &laquo;ως έχει&raquo; χωρίς εγγυήσεις οποιουδήποτε
              είδους.
            </li>
            <li>
              Η συνολική ευθύνη της Clyro δεν υπερβαίνει τα τέλη που καταβλήθηκαν τους
              τελευταίους 12 μήνες.
            </li>
            <li>
              Η Clyro δεν ευθύνεται για έμμεσες, τυχαίες, ειδικές ή αποθετικές ζημίες.
            </li>
            <li>
              <strong>Κλινικές αποφάσεις:</strong> η Υπηρεσία (συμπεριλαμβανομένων των
              AI λειτουργιών) είναι εργαλείο υποστήριξης κλινικής ροής εργασίας. Δεν
              παρέχει ιατρικές συμβουλές. Όλες οι κλινικές αποφάσεις παραμένουν
              αποκλειστική ευθύνη του θεράποντος.
            </li>
          </ul>
          <p>
            Τίποτα σε αυτούς τους Όρους δεν αποκλείει ή περιορίζει ευθύνη για απάτη,
            βαριά αμέλεια, ή ευθύνη που δεν μπορεί να αποκλειστεί νομικά.
          </p>
        </Section>

        {/* 12 */}
        <Section id="indemnification" title="12. Αποζημίωση">
          <p>
            Συμφωνείτε να αποζημιώσετε και να απαλλάξετε το Clyro από αξιώσεις, ζημίες,
            απώλειες ή έξοδα που προκύπτουν από: (α) παραβίαση αυτών των Όρων, (β)
            παραβίαση νομοθεσίας, (γ) αξιώσεις τρίτων σχετικά με τη χρήση της Υπηρεσίας.
          </p>
        </Section>

        {/* 13 */}
        <Section id="termination" title="13. Τερματισμός">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Από εσάς:</strong> μπορείτε να ακυρώσετε τη συνδρομή σας οποτεδήποτε μέσω ρυθμίσεων ή email στο <a href="mailto:hello@clyroapp.com" className="underline text-[var(--color-blue-dark)]">hello@clyroapp.com</a>.</li>
            <li><strong>Από εμάς:</strong> μπορεί να αναστείλουμε ή τερματίσουμε την πρόσβαση αν παραβιάσετε τους Όρους. Για μη επείγουσες παραβιάσεις, θα δοθεί ειδοποίηση 14 ημερών.</li>
            <li><strong>Μετά τον τερματισμό:</strong> τα δεδομένα σας θα είναι διαθέσιμα για εξαγωγή 30 ημέρες. Μετά, θα διαγραφούν σύμφωνα με την πολιτική μας διατήρησης.</li>
          </ul>
        </Section>

        {/* 14 */}
        <Section id="force-majeure" title="14. Ανωτέρα βία">
          <p>
            Κανένα μέρος δεν ευθύνεται για καθυστερήσεις λόγω συνθηκών πέρα από τον
            εύλογο έλεγχό του, συμπεριλαμβανομένων φυσικών καταστροφών, πολέμων,
            πανδημιών, κυβερνητικών ενεργειών, διακοπών ρεύματος ή internet.
          </p>
        </Section>

        {/* 15 */}
        <Section id="changes" title="15. Αλλαγές στους όρους">
          <p>
            Ενδέχεται να ενημερώσουμε αυτούς τους Όρους. Ουσιαστικές αλλαγές
            κοινοποιούνται μέσω email τουλάχιστον 30 ημέρες νωρίτερα. Η συνέχιση χρήσης
            μετά την ημερομηνία ισχύος αποτελεί αποδοχή. Εάν διαφωνείτε, μπορείτε να
            τερματίσετε τον λογαριασμό σας.
          </p>
        </Section>

        {/* 16 */}
        <Section id="governing-law" title="16. Εφαρμοστέο δίκαιο &amp; επίλυση διαφορών">
          <p>
            Αυτοί οι Όροι διέπονται από τους νόμους της Κυπριακής Δημοκρατίας.
          </p>
          <p>
            Κάθε διαφορά θα επιχειρηθεί πρώτα να επιλυθεί μέσω καλόπιστης
            διαπραγμάτευσης. Εάν δεν επιλυθεί εντός 30 ημερών, υπάγεται στην
            αποκλειστική δικαιοδοσία των δικαστηρίων Λεμεσού, Κύπρος.
          </p>
          <p>
            Για πελάτες στην Ελλάδα, κανένας όρος δεν επηρεάζει τα υποχρεωτικά
            δικαιώματα προστασίας καταναλωτή σύμφωνα με τον Ν. 2251/1994.
          </p>
        </Section>

        {/* 17 */}
        <Section id="severability" title="17. Μερική ακυρότητα">
          <p>
            Εάν οποιαδήποτε διάταξη κριθεί ανεφάρμοστη, θα περιοριστεί ή εξαλειφθεί
            στον ελάχιστο απαραίτητο βαθμό. Οι υπόλοιπες διατάξεις παραμένουν σε πλήρη
            ισχύ.
          </p>
        </Section>

        {/* 18 */}
        <Section id="entire-agreement" title="18. Πλήρης συμφωνία">
          <p>
            Αυτοί οι Όροι, μαζί με την Πολιτική Απορρήτου και τη Συμφωνία Επεξεργασίας
            Δεδομένων, αποτελούν την πλήρη συμφωνία μεταξύ εσάς και του Clyro σχετικά
            με την Υπηρεσία.
          </p>
        </Section>

        {/* 19 */}
        <Section id="contact" title="19. Επικοινωνία">
          <p>
            Εάν έχετε ερωτήσεις σχετικά με αυτούς τους Όρους:
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
