import { useState } from "react";
import { MapPin, Mail, Phone, BadgeCheck, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { EnquiryForm } from "../components/EnquiryForm";
import { COMPANY, IAA_ADVISER, LAST_UPDATED, OFFICIAL_NZ } from "../company";

const contactFaqs = [
  {
    q: "What exactly is an NZeTA, and who has to get one?",
    a: "The New Zealand Electronic Travel Authority is Immigration New Zealand’s digital pre-travel clearance. It’s recorded against your passport and checked before boarding. Many visa-waiver nationals need one for short visits; New Zealand and Australian citizens on those passports generally do not. Every traveller — including children — needs their own approval linked to the passport they’ll carry.",
  },
  {
    q: "Is an NZeTA a visa?",
    a: "No. An NZeTA is permission to travel to New Zealand for eligible visitors. It doesn’t let you work, study for more than three months, or stay longer. Those need the relevant visa before you travel. An approved NZeTA is not a guarantee of entry — the final say rests with the officer who meets you on arrival.",
  },
  {
    q: "How far in advance should I apply?",
    a: "Ideally before you book, and certainly before you set off. Many NZeTA decisions come through within hours, but some go for further review — Immigration New Zealand says to allow up to 72 hours. Visa pathways usually need more lead time.",
  },
  {
    q: "Are you part of the New Zealand Government?",
    a: `No. ${COMPANY.legalName} is an independent private business with no connection to, or endorsement from, the New Zealand Government or Immigration New Zealand. You can always apply directly at ${OFFICIAL_NZ.host}.`,
  },
  {
    q: "Can you help with work, student or residence visas?",
    a: `Yes. Beyond NZeTA and Visitor Visa we can help with common work, student, partner and residence pathways. Immigration advice on those files is given only by a New Zealand licensed immigration adviser (${IAA_ADVISER.nameShort}, licence ${IAA_ADVISER.licenceNumber}).`,
  },
] as const;

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <section className="legal-hero">
        <div className="wrap">
          <p className="kicker">Contact Us</p>
          <h1>Get in Touch</h1>
          <p className="legal-meta">
            Need help with your NZeTA or New Zealand visa application? Our support team is on hand. ·
            Updated {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap apply-grid">
          <div>
            <div className="about-points">
              <article className="about-point">
                <h3>Hours</h3>
                <p>We’re available every day for email enquiries — weekends included where staffed.</p>
              </article>
              <article className="about-point">
                <h3>How fast we reply</h3>
                <p>Expect a reply to your message within 24 hours on business days.</p>
              </article>
            </div>

            <div className="card" style={{ marginTop: "1.25rem" }}>
              <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800 }}>Before you write</h3>
              <p style={{ margin: "0.55rem 0 0", color: "var(--ink-soft)", fontSize: "0.92rem" }}>
                Asking about an application you’ve already submitted? Include:
              </p>
              <ul style={{ margin: "0.6rem 0 0", paddingLeft: "1.1rem", color: "var(--ink-soft)", fontSize: "0.92rem" }}>
                <li>The email you applied with</li>
                <li>Your name, exactly as typed on the form</li>
                <li>Your reference number, if you have one</li>
              </ul>
            </div>

            <div className="contact-cards">
              <article className="card soft">
                <div className="eyebrow">
                  <Mail size={12} /> Email
                </div>
                <p>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </p>
              </article>
              <article className="card soft">
                <div className="eyebrow">
                  <Phone size={12} /> Phone
                </div>
                <p>
                  {COMPANY.businessPhone}
                  <br />
                  {COMPANY.directDial}
                  <br />
                  {COMPANY.mobilePhone}
                </p>
              </article>
              <article className="card soft">
                <div className="eyebrow">
                  <MapPin size={12} /> Address
                </div>
                <p>
                  {COMPANY.legalName}
                  <br />
                  {COMPANY.officeAddress}
                </p>
              </article>
              <article className="card soft">
                <div className="eyebrow">
                  <BadgeCheck size={12} /> IAA licence
                </div>
                <p>
                  {IAA_ADVISER.nameShort} · {IAA_ADVISER.licenceNumber}
                </p>
                <a
                  href={IAA_ADVISER.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Verify on the IAA register
                  <ExternalLink size={14} />
                </a>
              </article>
            </div>
          </div>

          <div className="card">
            <h3 style={{ margin: "0 0 1rem", fontSize: "1.15rem", fontWeight: 800 }}>Send a message</h3>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="band band-white">
        <div className="wrap">
          <p className="kicker">Frequently asked questions</p>
          <h2 style={{ marginTop: "0.55rem" }}>Common questions</h2>
          <div className="faq-list">
            {contactFaqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <button
                  key={f.q}
                  type="button"
                  className="faq-item"
                  onClick={() => setOpenFaq(open ? null : i)}
                >
                  <div className="faq-q">
                    <span>{f.q}</span>
                    {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  {open ? <p className="faq-a">{f.a}</p> : null}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
