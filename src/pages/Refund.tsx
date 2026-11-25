import { Link } from "react-router-dom";
import { COMPANY, LAST_UPDATED } from "../company";

export function RefundPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1 className="display">Refund Policy</h1>
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
              This Refund Policy applies to service fees paid to {COMPANY.legalName} (dba{" "}
              {COMPANY.dba}) for New Zealand travel-document assistance. It does not cover New Zealand
              government fees, which are charged by authorities and generally non-refundable by us.
            </p>

            <h2>2. Enquiries</h2>
            <p>
              Submitting the short enquiry form on this website does not charge you. No refund is
              needed for an unpaid enquiry.
            </p>

            <h2>3. When we refund our service fee</h2>
            <ul>
              <li>
                If we have not yet started substantive work on your paid order and you cancel in
                writing, we will refund the unused service fee.
              </li>
              <li>
                If we determine we cannot assist your matter (for example, clear ineligibility we
                identify before submission), we will refund the unused portion of our service fee.
              </li>
              <li>
                If a payment error or duplicate charge occurs due to our systems, we will correct it.
              </li>
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

            <h2>6. How to request a refund</h2>
            <p>
              Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> with your name, order or
              enquiry reference, and reason. We aim to respond within five business days. Approved
              refunds are returned to the original payment method where possible.
            </p>

            <h2>7. Related documents</h2>
            <p>
              <Link to="/terms">Terms of Service</Link> · <Link to="/privacy">Privacy Policy</Link> ·{" "}
              <Link to="/contact">Contact</Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
