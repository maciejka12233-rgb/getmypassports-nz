import { Link } from "react-router-dom";
import { COMPANY, LAST_UPDATED } from "../company";

export function CookiesPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="wrap">
          <p className="kicker">Policies</p>
          <h1>Cookie Policy</h1>
          <p className="legal-meta">
            Last updated {LAST_UPDATED} · {COMPANY.legalName} dba {COMPANY.dba}
          </p>
        </div>
      </section>
      <section className="legal-body">
        <div className="wrap">
          <article>
            <h2>1. What this policy covers</h2>
            <p>
              This Cookie Policy explains how {COMPANY.legalName} (“we”, “us”), doing business as{" "}
              {COMPANY.dba}, uses cookies and similar technologies on this website.
            </p>

            <h2>2. What cookies are</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help
              the site remember preferences, keep sessions secure and understand how pages are used.
            </p>

            <h2>3. Cookies we may use</h2>
            <ul>
              <li>
                <strong>Essential cookies</strong> — required for basic site functions such as
                security, navigation and form submission.
              </li>
              <li>
                <strong>Preference cookies</strong> — remember choices such as language or dismissed
                notices.
              </li>
              <li>
                <strong>Analytics cookies</strong> — if enabled, help us understand traffic and improve
                content (aggregated, not used to sell your data).
              </li>
            </ul>

            <h2>4. Your choices</h2>
            <p>
              You can block or delete cookies through your browser settings. Blocking essential cookies
              may affect how the site works. Where consent is required for non-essential cookies, we
              will ask for it.
            </p>

            <h2>5. More information</h2>
            <p>
              For how we handle personal information, see our <Link to="/privacy">Privacy Policy</Link>
              . Questions: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or{" "}
              <Link to="/contact">Contact Us</Link>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
