import { Link } from "react-router-dom";
import { COMPANY, IAA_ADVISER, LAST_UPDATED, OFFICIAL_NZ, SERVICE_FEE } from "../company";

export function TermsPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="wrap">
          <p className="kicker">Policies</p>
          <h1>Terms and Conditions</h1>
          <p className="legal-meta">
            Updated: {LAST_UPDATED} · {COMPANY.legalName} dba {COMPANY.dba}
          </p>
          <p className="legal-notice">
            Important notice: {COMPANY.legalName} is a privately owned application-assistance service
            with no connection to the New Zealand Government or Immigration New Zealand. You can apply
            for an NZeTA or New Zealand visa yourself through official channels without using our
            service or paying our fee.
          </p>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap">
          <article>
            <h2>1. Who we are and what this agreement covers</h2>
            <p>
              This website is operated by {COMPANY.legalName} (“we”, “us” or “the Company”), doing
              business as {COMPANY.dba}, with its business address at {COMPANY.officeAddress}.
            </p>
            <p>
              These Terms of Service (“Terms”) are a binding agreement between you (“you” or “the
              user”) and the Company. They set out the rules for using this website and any service
              you purchase through it. By browsing the site or placing an order, you confirm that you
              have read these Terms and agree to be bound by them.
            </p>

            <h2>2. What we provide</h2>
            <p>
              We offer an optional, paid assistance service that helps travellers prepare and submit
              applications related to New Zealand entry — including NZeTA and selected visa pathways.
              Depending on your order, that assistance can include step-by-step guidance, checking and
              formatting data you provide, submission support, and customer support by email and phone.
            </p>
            <p>
              We do not grant, refuse or influence NZeTA or visa decisions. Only Immigration New
              Zealand can review an application and decide whether a traveller may enter the country.
              You are always free to apply yourself at{" "}
              <a href={OFFICIAL_NZ.url} target="_blank" rel="noopener noreferrer">
                {OFFICIAL_NZ.host}
              </a>
              , paying only government fees and levies.
            </p>
            <p>
              Immigration advice — advice on which New Zealand visa to apply for, your eligibility, or
              how to present an application — is given only by, or under the direct supervision of, a
              New Zealand licensed immigration adviser registered with the Immigration Advisers
              Authority ({IAA_ADVISER.name}, licence {IAA_ADVISER.licenceNumber}), as required by the
              Immigration Advisers Licensing Act 2007.
            </p>

            <h2>3. Your eligibility to use the service</h2>
            <p>When you use this site, you confirm that:</p>
            <ul>
              <li>you are 18 or older, or are using the site with a parent or legal guardian’s consent</li>
              <li>you are entitled to submit the identity and travel details you provide</li>
              <li>everything you tell us is true, accurate and complete to the best of your knowledge</li>
              <li>you will comply with these Terms and with all laws that apply to you</li>
            </ul>
            <p>
              We may decline or withdraw the service where we reasonably suspect misuse, fraud or a
              breach of these Terms.
            </p>

            <h2>4. Your authorisation to us</h2>
            <p>
              By placing an order you give us limited authority to act for you — solely to prepare and
              submit your NZeTA or visa application, process the personal data you supply, and contact
              you about progress. We handle your information in line with our{" "}
              <Link to="/privacy">Privacy Policy</Link> and <Link to="/cookies">Cookie Policy</Link>.
            </p>

            <h2>5. Review and turnaround</h2>
            <p>
              Once we receive a completed order, our team checks that required fields are filled in and
              consistent with published entry requirements. Most files are handled within one to three
              business days, but turnaround can be affected by volume, the completeness of your
              information, technical issues and Immigration New Zealand’s own processing times.
            </p>
            <p>
              Entry decisions are made only by New Zealand authorities. We cannot speed up their
              review, influence the outcome or guarantee an approval.
            </p>

            <h2>6. Fees, payment and refunds</h2>
            <p>
              Every fee is shown clearly before you pay. Our service fee (from ${SERVICE_FEE} USD per
              traveller unless quoted otherwise) is charged for guidance, verification and submission
              work. Government fees are separate. You can always avoid our service fee by applying
              directly through official channels.
            </p>
            <p>
              Refund details are in our <Link to="/refund">Payment Refund Cancel</Link> policy.
            </p>

            <h2>7. Intellectual property</h2>
            <p>
              The text, design, graphics, branding and other material on this site belong to the
              Company or are used under licence. You may not copy or redistribute them for commercial
              purposes without written permission. Mentions of government bodies identify them only; no
              endorsement is implied.
            </p>

            <h2>8. Acceptable use</h2>
            <p>You must not:</p>
            <ul>
              <li>supply false, incomplete or misleading information</li>
              <li>use the site for any fraudulent or unlawful purpose</li>
              <li>disrupt or interfere with how the site operates</li>
              <li>scrape, copy or misuse data from the site at scale</li>
              <li>run bots or crawlers against the site without permission</li>
            </ul>

            <h2>9. Limits on our liability</h2>
            <p>
              We provide assistance and support only. Whether an NZeTA or visa is granted, and how long
              that takes, is decided solely by New Zealand authorities. To the fullest extent the law
              allows, we are not liable for indirect, incidental or consequential loss arising from
              your use of our service. Our total liability for any claim relating to a paid order is
              limited to the service fees you paid us for that order (excluding government fees).
            </p>

            <h2>10. No warranties</h2>
            <p>
              The site and our services are provided “as is” and “as available”. We give no warranty,
              express or implied, about accuracy, timeliness, fitness for a particular purpose or
              uninterrupted availability.
            </p>

            <h2>11. Suspension and termination</h2>
            <p>
              We may suspend or end your access without notice if you breach these Terms or behave in a
              way that is harmful to us or to others. You can stop using the site whenever you wish.
            </p>

            <h2>12. Governing law</h2>
            <p>
              These Terms are governed by the laws of the {COMPANY.governingLaw}, without regard to
              conflict-of-law rules. Courts located in Cook County, Illinois shall have exclusive
              jurisdiction, except where consumer protection law requires otherwise.
            </p>

            <h2>13. Changes to these Terms</h2>
            <p>
              We may revise these Terms from time to time. Changes take effect when published on this
              page. Continued use after a change means you accept the updated Terms.
            </p>

            <h2>14. Contact us</h2>
            <p>
              {COMPANY.legalName} (dba {COMPANY.dba})
              <br />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              <br />
              Office: {COMPANY.officeAddress}
              <br />
              Registered: {COMPANY.registeredAddress}
              <br />
              <Link to="/contact">Contact Us</Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
