import { Link } from "react-router-dom";
import { COMPANY, IAA_ADVISER, LAST_UPDATED, OFFICIAL_NZ } from "../company";

export function DisclaimerPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="wrap">
          <p className="kicker">Policies</p>
          <h1>Disclaimer</h1>
          <p className="legal-meta">
            Last updated {LAST_UPDATED} · {COMPANY.legalName} dba {COMPANY.dba}
          </p>
          <p className="legal-notice">
            Important: {COMPANY.legalName} is a privately owned application-assistance service with no
            connection to the New Zealand Government or Immigration New Zealand. You can apply for an
            NZeTA or New Zealand visa yourself through official channels without using our service or
            paying our fee.
          </p>
        </div>
      </section>
      <section className="legal-body">
        <div className="wrap">
          <article>
            <h2>1. Independent private service</h2>
            <p>
              This website is owned and operated by {COMPANY.legalName} (dba {COMPANY.dba}). We are not
              a government agency, and we are not endorsed by Immigration New Zealand. Official
              information and applications are available at{" "}
              <a href={OFFICIAL_NZ.url} target="_blank" rel="noopener noreferrer">
                {OFFICIAL_NZ.host}
              </a>
              .
            </p>

            <h2>2. No guarantee of outcome</h2>
            <p>
              We do not grant, refuse or influence NZeTA or visa decisions. Only New Zealand
              authorities decide applications and entry at the border. Processing times are estimates
              only.
            </p>

            <h2>3. Immigration advice</h2>
            <p>
              Immigration advice on New Zealand visa matters is provided only by, or under the
              supervision of, a licensed immigration adviser registered with the Immigration Advisers
              Authority — currently {IAA_ADVISER.name} (licence {IAA_ADVISER.licenceNumber}).{" "}
              <a href={IAA_ADVISER.registerUrl} target="_blank" rel="noopener noreferrer">
                Verify the licence
              </a>
              .
            </p>

            <h2>4. Information on this site</h2>
            <p>
              Content is for general guidance and may change when Immigration New Zealand updates its
              rules. It is not a substitute for personalised advice on your circumstances.
            </p>

            <h2>5. Your responsibility</h2>
            <p>
              You are responsible for the accuracy of information you provide, for checking passport
              validity and eligibility, and for complying with New Zealand immigration and border
              requirements.
            </p>

            <h2>6. Related policies</h2>
            <p>
              <Link to="/terms">Terms and Conditions</Link> · <Link to="/privacy">Privacy Policy</Link>{" "}
              · <Link to="/refund">Payment Refund Cancel</Link> ·{" "}
              <Link to="/cookies">Cookie Policy</Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
