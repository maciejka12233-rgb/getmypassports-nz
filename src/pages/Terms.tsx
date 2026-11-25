import { Link } from "react-router-dom";
import { COMPANY, IAA_ADVISER, LAST_UPDATED, OFFICIAL_NZ, SERVICE_FEE } from "../company";

export function TermsPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1 className="display">Terms of Service</h1>
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
              These Terms of Service (“Terms”) govern your use of the website and services operated by{" "}
              <strong>{COMPANY.legalName}</strong>, doing business as <strong>{COMPANY.dba}</strong>{" "}
              (“we”, “us”, “our”).
            </p>
            <p>
              Business address: {COMPANY.officeAddress}. Postal address: {COMPANY.postalAddress}.
              Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Phone:{" "}
              {COMPANY.businessPhone}.
            </p>
            <p>
              New Zealand immigration advice on this site is provided under an Immigration Advisers
              Authority licence held by {IAA_ADVISER.name} (Licence {IAA_ADVISER.licenceNumber}),{" "}
              {IAA_ADVISER.role.toLowerCase()} with {COMPANY.legalName}.{" "}
              <a href={IAA_ADVISER.registerUrl} target="_blank" rel="noopener noreferrer">
                Verify the licence
              </a>
              .
            </p>

            <h2>2. What we offer</h2>
            <p>
              We provide private, paid assistance with New Zealand travel authorizations and visa
              pathways (including NZeTA and visitor visas), including guidance, form review and
              related support. Our service fee starts from ${SERVICE_FEE} USD per traveler unless we
              quote otherwise in writing. New Zealand government fees are separate and payable to the
              relevant authorities when they apply.
            </p>
            <p>
              We are <strong>not</strong> Immigration New Zealand, the New Zealand Government, or any
              government agency. You may always apply directly via{" "}
              <a href={OFFICIAL_NZ.url} target="_blank" rel="noopener noreferrer">
                {OFFICIAL_NZ.host}
              </a>
              .
            </p>

            <h2>3. No guarantee of outcome</h2>
            <p>
              We do not guarantee that any NZeTA, visa or other application will be granted, or that
              you will be permitted to enter or remain in New Zealand. Decisions are made solely by
              New Zealand authorities. Processing times are estimates only and may change without
              notice.
            </p>

            <h2>4. Your responsibilities</h2>
            <ul>
              <li>Provide accurate, complete and truthful information for every traveler.</li>
              <li>Check passport validity, eligibility and travel dates before you book flights.</li>
              <li>Review all drafts and confirmations we send before final submission.</li>
              <li>Pay applicable government fees as required by New Zealand authorities.</li>
              <li>Comply with New Zealand immigration and border requirements.</li>
            </ul>

            <h2>5. Orders, payment and cancellations</h2>
            <p>
              Submitting an enquiry does not create a paid order. A service agreement is formed when
              you accept a quote and complete payment for our service fee. Refunds are described in
              our <Link to="/refund">Refund Policy</Link>.
            </p>

            <h2>6. Acceptable use</h2>
            <p>
              You may not misuse the site, attempt unauthorized access, submit fraudulent information,
              scrape content at scale, or use our services for any unlawful purpose.
            </p>

            <h2>7. Intellectual property</h2>
            <p>
              Site content, branding and materials are owned by us or our licensors. You may not copy
              or reuse them except as needed to use our services.
            </p>

            <h2>8. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, we are not liable for indirect, incidental,
              special, consequential or punitive damages, or for lost profits, travel costs, or
              immigration outcomes. Our total liability for any claim relating to the services is
              limited to the service fees you paid us for the relevant order (excluding government
              fees).
            </p>
            <p>
              Nothing in these Terms excludes liability that cannot be limited under applicable law.
            </p>

            <h2>9. Privacy</h2>
            <p>
              How we handle personal information is described in our{" "}
              <Link to="/privacy">Privacy Policy</Link>.
            </p>

            <h2>10. Governing law</h2>
            <p>
              These Terms are governed by the laws of {COMPANY.governingLaw}, without regard to
              conflict-of-law rules, except where mandatory consumer protection law in your country
              requires otherwise.
            </p>

            <h2>11. Changes</h2>
            <p>
              We may update these Terms from time to time. The “Last updated” date above will change
              when we do. Continued use of the site after changes means you accept the updated Terms.
            </p>

            <h2>12. Contact</h2>
            <p>
              Questions about these Terms: <Link to="/contact">Contact page</Link> or{" "}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
