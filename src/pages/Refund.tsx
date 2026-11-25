import { Link } from "react-router-dom";
import { COMPANY, LAST_UPDATED } from "../company";

export function RefundPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="wrap">
          <p className="kicker">Policies</p>
          <h1>Payment Refund Cancel</h1>
          <p className="legal-meta">
            Last updated {LAST_UPDATED} · {COMPANY.legalName} dba {COMPANY.dba}
          </p>
        </div>
      </section>
      <section className="legal-body">
        <div className="wrap">
          <article>
            <h2>1. Scope</h2>
            <p>
              This policy applies to service fees paid to {COMPANY.legalName} (dba {COMPANY.dba}) for
              New Zealand travel-document assistance. It does not cover New Zealand government fees,
              which are charged by authorities and generally cannot be refunded by us.
            </p>

            <h2>2. Enquiries</h2>
            <p>
              Submitting the short enquiry form on this website does not charge you. No refund is
              needed for an unpaid enquiry.
            </p>

            <h2>3. When we refund our service fee</h2>
            <ul>
              <li>
                If you ask to cancel in writing before we have transmitted your application to New
                Zealand authorities, we will refund the unused service fee.
              </li>
              <li>
                If a technical or submission problem on our side means your application cannot
                proceed, we refund our service fee in line with this policy.
              </li>
              <li>
                If we determine we cannot assist your matter before lodging (for example clear
                ineligibility we identify early), we refund the unused portion of our service fee.
              </li>
              <li>Duplicate charges or payment errors caused by our systems will be corrected.</li>
            </ul>

            <h2>4. When service fees are generally non-refundable</h2>
            <ul>
              <li>
                After we have reviewed your materials, prepared an application, or submitted it at
                your instruction.
              </li>
              <li>
                If New Zealand authorities refuse, delay or request more information — outcomes are
                outside our control.
              </li>
              <li>If you provided incorrect information or failed to respond within agreed timelines.</li>
              <li>Change of travel plans after work has begun.</li>
            </ul>

            <h2>5. Government fees</h2>
            <p>
              Government / Immigration New Zealand fees are separate from our service fee. We cannot
              refund fees already paid to government portals. Any government refund must be sought
              from the authority that charged them, subject to their rules.
            </p>

            <h2>6. How to request a refund or cancel</h2>
            <p>
              Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> with your name, order or
              enquiry reference, and reason. We aim to respond within five business days. Approved
              refunds are returned to the original payment method where possible.
            </p>

            <h2>7. Related documents</h2>
            <p>
              <Link to="/terms">Terms and Conditions</Link> · <Link to="/privacy">Privacy Policy</Link>{" "}
              · <Link to="/disclaimer">Disclaimer</Link> · <Link to="/contact">Contact Us</Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
