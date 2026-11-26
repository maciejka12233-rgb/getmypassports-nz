import { Link } from "react-router-dom";
import { COMPANY, IAA_ADVISER, LAST_UPDATED, OFFICIAL_NZ } from "../company";

export function AboutPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="wrap">
          <p className="kicker">About Us</p>
          <h1>Who we are</h1>
          <p className="legal-meta">
            {COMPANY.legalName} · dba {COMPANY.dba} · Updated {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <p className="section-lede" style={{ maxWidth: "none", fontSize: "1.05rem" }}>
            {COMPANY.legalName} helps travellers prepare and submit New Zealand travel authorisation
            and visa applications without the guesswork. We pair a straightforward online enquiry with
            clear instructions, careful checks and human support.
          </p>
          <p className="section-lede" style={{ maxWidth: "none", marginTop: "1rem" }}>
            For New Zealand, that covers everything from the NZeTA to visitor, work, student, partner
            and residence visas — with immigration advice given only by a licensed immigration
            adviser.
          </p>
          <p className="section-lede" style={{ maxWidth: "none", marginTop: "1rem" }}>
            Accuracy, professionalism and simplicity are the foundations of everything we do — so you
            can get your application done properly, without the stress.
          </p>

          <div className="about-points">
            <article className="about-point">
              <h3>Support from start to finish</h3>
              <p>
                Our team stays with you throughout — explaining the requirements, answering questions
                and checking your details before anything is submitted.
              </p>
            </article>
            <article className="about-point">
              <h3>Service fee safeguard</h3>
              <p>
                If a technical or submission problem means your application can’t proceed, we refund
                our service fee in line with our{" "}
                <Link to="/refund">refund policy</Link>.
              </p>
            </article>
            <article className="about-point">
              <h3>Licensed immigration advice</h3>
              <p>
                Every visa file — visitor, work, student, partner or residence — is handled under a
                New Zealand licensed immigration adviser ({IAA_ADVISER.nameShort}, licence{" "}
                {IAA_ADVISER.licenceNumber}), as the Immigration Advisers Licensing Act requires.
              </p>
            </article>
            <article className="about-point">
              <h3>Official option always open</h3>
              <p>
                We are not Immigration New Zealand. You can always apply yourself at{" "}
                <a href={OFFICIAL_NZ.url} target="_blank" rel="noopener noreferrer">
                  {OFFICIAL_NZ.host}
                </a>
                , paying only government fees when they apply.
              </p>
            </article>
          </div>

          <div className="about-points" style={{ marginTop: "1rem" }}>
            <article className="about-point">
              <h3>Careful passport capture</h3>
              <p>
                We help you enter passport data accurately so the typos that cause most delays never
                make it into your file.
              </p>
            </article>
            <article className="about-point">
              <h3>Always current on the rules</h3>
              <p>
                We track changes published by Immigration New Zealand so your submission reflects the
                requirements in force on the day you apply.
              </p>
            </article>
            <article className="about-point">
              <h3>Built for any device</h3>
              <p>Phone, tablet or laptop — our enquiry flow is quick, guided and easy to finish.</p>
            </article>
            <article className="about-point">
              <h3>Business details</h3>
              <p>
                {COMPANY.legalName} (dba {COMPANY.dba})
                <br />
                Office: {COMPANY.officeAddress}
                <br />
                Registered: {COMPANY.registeredAddress}
                <br />
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </p>
            </article>
          </div>

          <p style={{ marginTop: "1.75rem" }}>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
