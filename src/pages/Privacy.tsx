import { Link } from "react-router-dom";
import { COMPANY, IAA_ADVISER, LAST_UPDATED } from "../company";

export function PrivacyPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="wrap">
          <p className="kicker">Policies</p>
          <h1>Privacy Policy</h1>
          <p className="legal-meta">
            Last updated {LAST_UPDATED} · {COMPANY.legalName} dba {COMPANY.dba}
          </p>
        </div>
      </section>
      <section className="legal-body">
        <div className="wrap">
          <article>
            <h2>1. Who we are</h2>
            <p>
              This Privacy Policy explains how <strong>{COMPANY.legalName}</strong> (“we”, “us”), doing
              business as <strong>{COMPANY.dba}</strong>, collects and uses personal information when
              you use this website and related New Zealand travel-document services.
            </p>
            <p>
              Business address: {COMPANY.officeAddress}. Email:{" "}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Phone: {COMPANY.businessPhone}.
            </p>

            <h2>2. Information we collect</h2>
            <ul>
              <li>
                <strong>Identity & travel data</strong> you submit (name, nationality, travel dates,
                pathway interest, passport-related details when needed to assist an application).
              </li>
              <li>
                <strong>Contact data</strong> such as email address, phone number and message content.
              </li>
              <li>
                <strong>Technical data</strong> such as IP address, browser type, device type and basic
                usage logs.
              </li>
              <li>
                <strong>Payment data</strong> if you later pay for a service (processed by our payment
                provider; we do not store full card numbers).
              </li>
            </ul>

            <h2>3. How we use information</h2>
            <ul>
              <li>To respond to enquiries and provide NZeTA / visa assistance.</li>
              <li>
                To review application details under our IAA-licensed adviser ({IAA_ADVISER.nameShort}).
              </li>
              <li>To process payments, send confirmations and provide support.</li>
              <li>To operate, secure and improve the website.</li>
              <li>To comply with law and defend legal claims.</li>
            </ul>

            <h2>4. Legal bases</h2>
            <p>
              We process information as needed to take steps at your request before a contract, to
              perform a contract for paid services, to pursue legitimate interests (site security,
              service improvement, fraud prevention), and where required by law. Where consent is
              required, we will ask for it.
            </p>

            <h2>5. Sharing</h2>
            <p>We may share information with:</p>
            <ul>
              <li>Service providers (hosting, email, analytics, payment processors) under contract.</li>
              <li>
                New Zealand authorities or official portals when needed to submit or support an
                application you asked us to handle.
              </li>
              <li>Professional advisers or authorities when legally required.</li>
            </ul>
            <p>We do not sell your personal information.</p>

            <h2>6. International transfers</h2>
            <p>
              We are based in India and may process information in India, New Zealand, Australia and
              other countries where our providers operate. Where required, we use appropriate
              safeguards for cross-border transfers.
            </p>

            <h2>7. Retention</h2>
            <p>
              We keep enquiry and service records only as long as needed for the purposes above,
              typically for the duration of the matter plus a reasonable period for legal, tax and
              dispute purposes, then delete or anonymize where practicable.
            </p>

            <h2>8. Security</h2>
            <p>
              We use reasonable administrative and technical measures to protect personal information.
              No method of transmission or storage is 100% secure.
            </p>

            <h2>9. Your choices</h2>
            <p>
              Depending on where you live, you may have rights to access, correct, delete or restrict
              certain information, or to object to certain processing. Email{" "}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> to make a request. We may need to
              verify your identity.
            </p>

            <h2>10. Children</h2>
            <p>
              The site is not directed at children under 16. If you believe a child provided
              information, contact us and we will take appropriate steps.
            </p>

            <h2>11. Cookies</h2>
            <p>
              See our <Link to="/cookies">Cookie Policy</Link> for details on cookies and similar
              technologies.
            </p>

            <h2>12. Changes</h2>
            <p>
              We may update this Policy. The “Last updated” date will change when we do. Material
              changes may be highlighted on the site.
            </p>

            <h2>13. Contact</h2>
            <p>
              Privacy questions: <Link to="/contact">Contact Us</Link> or{" "}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Related:{" "}
              <Link to="/terms">Terms</Link> · <Link to="/refund">Refunds</Link> ·{" "}
              <Link to="/disclaimer">Disclaimer</Link>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
