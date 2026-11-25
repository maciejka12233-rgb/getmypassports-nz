import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { EnquiryForm } from "../components/EnquiryForm";
import { COMPANY, IAA_ADVISER, OFFICIAL_NZ, SERVICE_FEE } from "../company";
import nzHero from "../assets/nz-hero.jpg";
import nzFlag from "../assets/nz-flag.png";

const requireCards = [
  {
    badge: "Common for visa-waiver passports",
    title: "NZeTA",
    body: "New Zealand Electronic Travel Authority for eligible passport holders visiting for tourism or short business. Requested online and linked to your passport before you fly.",
    need: "Valid passport, travel plans, and payment of any New Zealand government fee that applies to your NZeTA.",
  },
  {
    badge: "When NZeTA is not enough",
    title: "Visitor visa",
    body: "Visitor visa for tourism or visiting family when an NZeTA is not suitable for your nationality or travel purpose.",
    need: "Passport, purpose of visit, supporting documents as required, plus government fees shown on the official application.",
  },
  {
    badge: "Other pathways",
    title: "Work, study & longer stays",
    body: "Working holiday, student, work and residence pathways when a short visitor stay is not what you need.",
    need: "Tell us your situation — we outline the usual options and next steps before you commit.",
  },
] as const;

const steps = [
  {
    n: "01",
    title: "Your trip",
    desc: "When you plan to arrive, your nationality, and which New Zealand pathway you need.",
  },
  {
    n: "02",
    title: "Short enquiry",
    desc: "Send a few details through the form. No payment is taken at this step.",
  },
  {
    n: "03",
    title: "Review and quote",
    desc: "We confirm the pathway, itemize our service fee and any government fees, then you decide.",
  },
  {
    n: "04",
    title: "Licensed support",
    desc: "A person on our team reviews your matter under our IAA licence.",
  },
] as const;

const paidBenefits = [
  "A person on our team checks every answer before you proceed — under our IAA licence.",
  "Guided form with live validation so passport typos are caught early.",
  "Clear itemized fees before you pay: our service fee and any government fee for your pathway.",
  "Human support by email if a field is unclear.",
  "One request for your group — not starting from scratch for every traveler.",
] as const;

const diyPoints = [
  "The official Immigration New Zealand portals, in your own time. They work.",
  "You complete every field yourself and catch every typo yourself.",
  "You track government fees, processing times and document lists alone.",
  "Portal downtime, timeouts and retries are yours to handle.",
  "Every traveler entered separately, with nobody to ask when a field is unclear.",
] as const;

const faqs = [
  {
    q: "Which document do I need for New Zealand?",
    a: "It depends on your passport and purpose — NZeTA, visitor visa, working holiday, study, work or residence pathways. Start a request and tell us your plans; we outline the usual options.",
  },
  {
    q: "Can't I just do this myself for free?",
    a: `Yes. New Zealand's official portals are on ${OFFICIAL_NZ.host} and you can apply there directly. Government fees (when they apply) are paid to New Zealand authorities either way. We are a paid private service: we guide the form, check your details, and support you through the process under our IAA licence.`,
  },
  {
    q: "What will I pay in total?",
    a: `From $${SERVICE_FEE} service fee per traveler for guided assistance and review. New Zealand government visa / NZeTA fees (if any for your pathway) are separate, paid to the authorities, and confirmed before you proceed.`,
  },
  {
    q: "Are you Immigration New Zealand?",
    a: `No. ${COMPANY.dba} is operated by ${COMPANY.legalName}, an independent private business. We are not affiliated with Immigration New Zealand or the New Zealand Government. You can always apply on the official portal.`,
  },
  {
    q: "Do you have a New Zealand immigration licence?",
    a: `Yes. ${IAA_ADVISER.nameShort} (${IAA_ADVISER.title}, licence ${IAA_ADVISER.licenceNumber}) is on our team. Verify the listing on the Immigration Advisers Authority register via the link on this page.`,
  },
  {
    q: "Do you guarantee I'll get a visa or be let in?",
    a: "No, and no service can. Visa grants, NZeTA outcomes and entry are decided only by New Zealand authorities. What we control is everything before that: accurate forms, document checks and clear next steps.",
  },
] as const;

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      {/* Full-bleed hero */}
      <section className="hero-bleed">
        <img src={nzHero} alt="" className="hero-bleed-img" width={1600} height={900} />
        <div className="hero-bleed-shade" />
        <div className="wrap hero-bleed-content">
          <p className="hero-brand">{COMPANY.dba}</p>
          <h1 className="display hero-title">
            Travel documents for New Zealand
            <img src={nzFlag} alt="" className="hero-flag" width={40} height={28} />
          </h1>
          <p className="hero-lede">
            Guided NZeTA and visitor visa help from {COMPANY.legalName}, with a licensed New Zealand
            immigration adviser providing advice under an IAA licence.
          </p>
          <div className="hero-ctas">
            <a href="#apply" className="btn btn-primary btn-lg">
              Start a short request
              <ArrowRight size={18} />
            </a>
            <a href="#licence" className="btn btn-on-dark">
              View our IAA licence
            </a>
          </div>
          <p className="hero-price">
            From ${SERVICE_FEE} per traveler · government fees separate when they apply
          </p>
        </div>
      </section>

      <section className="wrap trust-bar">
        <div className="trust-grid">
          <div className="trust-item">
            <ShieldCheck size={18} />
            <div>
              <strong>IAA licence on our team</strong>
              <span>Licence {IAA_ADVISER.licenceNumber}</span>
            </div>
          </div>
          <div className="trust-item">
            <BadgeCheck size={18} />
            <div>
              <strong>Independent private service</strong>
              <span>Not Immigration New Zealand</span>
            </div>
          </div>
          <div className="trust-item">
            <CheckCircle2 size={18} />
            <div>
              <strong>Official DIY always available</strong>
              <span>{OFFICIAL_NZ.host}</span>
            </div>
          </div>
          <div className="trust-item">
            <img src={nzFlag} alt="" width={22} height={15} />
            <div>
              <strong>{COMPANY.legalName}</strong>
              <span>Ahmedabad, India</span>
            </div>
          </div>
        </div>
        <p className="disclaimer">
          You can apply directly on the official government website at any time.{" "}
          <a href={OFFICIAL_NZ.url} target="_blank" rel="noopener noreferrer">
            {OFFICIAL_NZ.host}
          </a>
        </p>
      </section>

      <section id="requires" className="band band-white">
        <div className="wrap">
          <h2 className="display">What New Zealand requires</h2>
          <p className="section-lede">
            Most visitors need an NZeTA or visitor visa before travel. The exact pathway depends on your
            passport and purpose.
          </p>
          <div className="cards-3">
            {requireCards.map((card) => (
              <article key={card.title} className="card soft">
                <div className="eyebrow">{card.badge}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <div className="need">
                  <div className="eyebrow muted">What you&apos;ll need</div>
                  <p>{card.need}</p>
                </div>
                <p className="from-fee">From ${SERVICE_FEE} service fee</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="band">
        <div className="wrap">
          <h2 className="display">How it works</h2>
          <p className="section-lede">Four clear steps — no surprises after you enquire.</p>
          <div className="cards-4">
            {steps.map((s) => (
              <div key={s.n} className="card step">
                <span className="step-n" aria-hidden>
                  {s.n}
                </span>
                <div className="eyebrow">Step {s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="band band-white">
        <div className="wrap apply-grid">
          <div>
            <h2 className="display">Start a short request</h2>
            <p className="section-lede">
              Tell us who is traveling and which pathway you need. No payment on this step — we reply
              with next steps and a clear fee breakdown.
            </p>
            <ul className="benefit-ticks">
              {[
                "Takes about a minute",
                `Service from $${SERVICE_FEE} per traveler`,
                "Licensed IAA adviser on our team",
              ].map((t) => (
                <li key={t}>
                  <CheckCircle2 size={16} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card form-card">
            <EnquiryForm compact />
          </div>
        </div>
      </section>

      <section id="costs" className="band">
        <div className="wrap">
          <h2 className="display">What it costs</h2>
          <p className="section-lede">
            From ${SERVICE_FEE} per traveler for guided New Zealand visa assistance and review.
            Government fees (when they apply) are separate and shown before you pay.
          </p>
          <div className="costs-grid">
            <div className="cost-rows">
              {[
                {
                  name: "Standard review",
                  desc: "Specialist check included in the service fee",
                  price: "Included",
                },
                {
                  name: "Human support",
                  desc: "Email before and after you apply",
                  price: "Included",
                },
                {
                  name: "Government fee",
                  desc: "Paid to New Zealand authorities when your pathway requires it",
                  price: "Varies",
                },
              ].map((row) => (
                <div key={row.name} className="cost-row">
                  <div>
                    <div className="cost-name">{row.name}</div>
                    <div className="cost-desc">{row.desc}</div>
                  </div>
                  <div className="cost-price">{row.price}</div>
                </div>
              ))}
            </div>
            <div className="example">
              <div className="eyebrow light">Worked example</div>
              <h3>1 traveler to New Zealand</h3>
              <dl>
                <div>
                  <div>
                    <dt>Service fee</dt>
                    <dd className="sub">Guided form + review</dd>
                  </div>
                  <dd>${SERVICE_FEE}.00</dd>
                </div>
                <div>
                  <div>
                    <dt>Government fee</dt>
                    <dd className="sub">Confirmed before you pay</dd>
                  </div>
                  <dd>Shown before payment</dd>
                </div>
                <div className="total">
                  <dt>Service total from</dt>
                  <dd>${SERVICE_FEE}.00</dd>
                </div>
              </dl>
              <p className="fine">
                Government charges are not our fee. No service can guarantee a visa grant or entry —
                decisions belong to New Zealand authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band-white">
        <div className="wrap">
          <h2 className="display">What ${SERVICE_FEE} adds to the official portal</h2>
          <p className="section-lede">
            Immigration New Zealand&apos;s portals work, and you can use them yourself. Here is the
            difference, line by line.
          </p>
          <div className="compare">
            <div className="card compare-us">
              <div className="compare-label">
                <BadgeCheck size={16} /> With {COMPANY.dba}
              </div>
              <ul>
                {paidBenefits.map((t) => (
                  <li key={t}>
                    <CheckCircle2 size={16} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card soft">
              <div className="compare-label muted">{OFFICIAL_NZ.host}</div>
              <ul className="muted-list">
                {diyPoints.map((t) => (
                  <li key={t}>
                    <span className="dash" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href={OFFICIAL_NZ.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Open the official portal
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="licence" className="licence-strip">
        <div className="wrap licence-inner">
          <div className="licence-copy">
            <div className="licence-icon">
              <BadgeCheck size={22} />
            </div>
            <div>
              <div className="eyebrow">New Zealand immigration licence</div>
              <p>
                {IAA_ADVISER.name} · {IAA_ADVISER.title} · Licence {IAA_ADVISER.licenceNumber} ·{" "}
                {IAA_ADVISER.role} · {COMPANY.legalName} (dba {COMPANY.dba})
              </p>
              <p className="licence-note">
                New Zealand immigration advice is provided under a current Immigration Advisers
                Authority licence held by {IAA_ADVISER.nameShort} of {COMPANY.legalName}.
              </p>
            </div>
          </div>
          <a
            href={IAA_ADVISER.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {IAA_ADVISER.registerLabel}
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      <section id="faq" className="band">
        <div className="wrap faq-grid">
          <div>
            <h2 className="display">Questions, answered straight</h2>
            <p className="section-lede">
              Still unsure?{" "}
              <Link to="/contact" className="text-link" style={{ marginTop: 0 }}>
                Contact us
              </Link>
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => {
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
