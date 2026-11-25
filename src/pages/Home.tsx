import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Timer,
} from "lucide-react";
import { EnquiryForm } from "../components/EnquiryForm";
import { COMPANY, IAA_ADVISER, OFFICIAL_NZ, SERVICE_FEE } from "../company";
import { OTHER_COMMON, WAIVER_COUNTRIES } from "../lib/waiver";
import nzHero from "../assets/nz-hero.jpg";

const pathways = [
  {
    tag: "Short visits",
    title: "NZeTA",
    body: "Pre-travel authority for visa-waiver nationals, cruise passengers, Auckland transit and many Australian permanent residents.",
  },
  {
    tag: "Up to 9 months",
    title: "Visitor Visa",
    body: "For passports outside the waiver list, longer holidays, business visits and family stays.",
  },
  {
    tag: "Work",
    title: "Work Visas",
    body: "Accredited Employer Work Visa, Working Holiday, Partner of a Worker, Post-Study Work and related options.",
  },
  {
    tag: "Study",
    title: "Student Visa",
    body: "Fee-paying and pathway student visas for courses longer than three months, plus visas for accompanying family.",
  },
  {
    tag: "Family",
    title: "Partner & Family",
    body: "Visitor, work and residence pathways for partners and dependent children of citizens, residents and visa holders.",
  },
  {
    tag: "Settle",
    title: "Residence",
    body: "Skilled Migrant Category, Green List routes, Work-to-Residence, partner and parent residence pathways.",
  },
] as const;

const steps = [
  {
    n: "1",
    title: "Share your plans",
    body: "A short form is enough. We confirm the pathway that fits your passport and purpose, and quote one clear service fee before work starts.",
  },
  {
    n: "2",
    title: "We prepare and review",
    body: "Documents gathered, fields matched to your passport and current Immigration New Zealand rules. Visa files are reviewed under our IAA licence before lodging.",
  },
  {
    n: "3",
    title: "Decision to your inbox",
    body: "Track updates by email. Approvals sit against your passport electronically — keep the confirmation handy for check-in.",
  },
] as const;

const why = [
  {
    icon: ShieldCheck,
    title: "Careful document checks",
    body: "We catch the passport typos and missing fields that cause most delays before anything is lodged.",
  },
  {
    icon: BadgeCheck,
    title: "Rules as they stand today",
    body: "Your file reflects the Immigration New Zealand requirements in force on the day it is submitted.",
  },
  {
    icon: Smartphone,
    title: "Any device, plain language",
    body: "Phone, tablet or laptop — a guided flow you can finish in one sitting.",
  },
  {
    icon: Timer,
    title: "Realistic timelines",
    body: "Before you pay, you know the usual processing window and what can slow a file down.",
  },
] as const;

const faqs = [
  {
    q: "Do I need an NZeTA or a visa?",
    a: "It depends on your passport and plans. Many visa-waiver nationals need an NZeTA for short visits. Everyone else typically needs a Visitor Visa for tourism, and separate visas for work, study or residence.",
  },
  {
    q: "How long does it all take?",
    a: "An NZeTA is often decided within hours; Immigration New Zealand says to allow up to 72 hours. Visitor and work visas usually take weeks; student and residence files can take longer. We give a realistic range before you commit.",
  },
  {
    q: "Are you part of the New Zealand Government?",
    a: `No. ${COMPANY.dba} is operated by ${COMPANY.legalName}, an independent private business. We are not affiliated with Immigration New Zealand. You can always apply directly at ${OFFICIAL_NZ.host}.`,
  },
  {
    q: "What does the licensed immigration adviser actually do?",
    a: `New Zealand law allows only licensed immigration advisers (or exempt people such as lawyers) to give immigration advice. ${IAA_ADVISER.nameShort} (IAA licence ${IAA_ADVISER.licenceNumber}) provides that advice on visa files we handle.`,
  },
  {
    q: "My passport isn't on the visa-waiver list. Can you still help?",
    a: "Yes. Visitor, work, study, family and residence pathways are available for non-waiver nationals. Tell us your situation and we outline the usual route and fees.",
  },
  {
    q: "What do I need to get started?",
    a: "For most people: a valid passport, email address, payment method when you proceed, and a clear idea of why you are going and for how long. Visa pathways may need extra documents such as a job offer or enrolment letter.",
  },
] as const;

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [passport, setPassport] = useState("");

  const countries = useMemo(
    () => [...WAIVER_COUNTRIES, ...OTHER_COMMON].sort((a, b) => a.localeCompare(b)),
    [],
  );

  const checkResult = useMemo(() => {
    if (!passport) return null;
    if (passport === "New Zealand" || passport === "Australia") {
      return {
        warn: false,
        text: `${passport} citizens travelling on that country’s passport are generally exempt from NZeTA for entering New Zealand as a visitor. Confirm your exact situation before you fly — rules can differ for dual nationals and permanent residents.`,
      };
    }
    if ((WAIVER_COUNTRIES as readonly string[]).includes(passport)) {
      return {
        warn: false,
        text: `For a short visit on a ${passport} passport, travellers usually need an NZeTA before travel. Longer stays, work or study need a different visa. This is guidance only — final rules sit with Immigration New Zealand.`,
      };
    }
    return {
      warn: true,
      text: `A ${passport} passport is typically outside the visa-waiver list for short visits, so a Visitor Visa (or another pathway) is usually required before travel. Send an enquiry and we’ll confirm the usual options for your plans.`,
    };
  }, [passport]);

  return (
    <main>
      <section className="hero-split">
        <div className="wrap hero-split-inner">
          <div>
            <span className="hero-badge">
              <i aria-hidden /> New Zealand immigration assistance
            </span>
            <h1>New Zealand entry pathways, explained clearly</h1>
            <p className="lede">
              Holiday, work, study, family or residence — we help you prepare the right application,
              with licensed immigration advice on visa files and people you can actually reach.
            </p>
            <div className="hero-chips">
              <span className="chip">
                <BadgeCheck size={14} /> Licensed immigration adviser
              </span>
              <span className="chip">Visitor · Work · Study · Residence</span>
              <span className="chip">Human support by email</span>
            </div>
            <div className="hero-ctas">
              <a href="#pathways" className="btn btn-primary">
                Learn more
              </a>
              <a href="#checker" className="btn btn-outline">
                Check what you need
              </a>
            </div>
            <p className="hero-note">
              Fixed service fee from ${SERVICE_FEE}, shown up front · You can always apply directly at{" "}
              <a href={OFFICIAL_NZ.url} target="_blank" rel="noopener noreferrer">
                {OFFICIAL_NZ.host}
              </a>
            </p>
          </div>

          <div className="hero-media">
            <div className="hero-media-frame">
              <img src={nzHero} alt="New Zealand landscape" width={900} height={1120} />
            </div>
            <div className="float-card top">
              <div className="ok">Reviewed</div>
              <strong>Visa files checked under an IAA licence before lodging.</strong>
            </div>
            <div className="float-card bottom">
              <div className="ok">Every pathway</div>
              <strong>NZeTA for waiver passports · visas when a short visit isn’t enough.</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="pathways" className="band">
        <div className="wrap">
          <p className="kicker">What we help with</p>
          <h2>One place for New Zealand entry pathways</h2>
          <p className="section-lede">
            A quick NZeTA for a holiday, a work visa for a new role, a student visa for a course, or
            residence for the long term — pick the route that fits and see what’s involved.
          </p>
          <div className="pathway-grid">
            {pathways.map((p) => (
              <article key={p.title} className="pathway-card">
                <div className="tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <Link to="/contact">
                  Talk to an adviser →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-white">
        <div className="wrap">
          <p className="kicker">How it works</p>
          <h2>Three steps, one point of contact</h2>
          <p className="section-lede">
            You don’t need to already know the rules. Tell us where you’re headed and we take it from
            there.
          </p>
          <div className="steps-grid">
            {steps.map((s) => (
              <article key={s.n} className="step-card">
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="checker" className="band">
        <div className="wrap">
          <p className="kicker">Check what you need</p>
          <h2>NZeTA, visa, or something else?</h2>
          <p className="section-lede">
            Pick the passport you’ll travel on. We’ll outline what New Zealand usually requires for a
            short visit — and point you to a visa if you’re staying longer.
          </p>
          <div className="checker">
            <label htmlFor="passport-country">Select your passport country</label>
            <select
              id="passport-country"
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
            >
              <option value="">Select your passport country…</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {checkResult ? (
              <div className={`checker-result ${checkResult.warn ? "warn" : ""}`}>
                {checkResult.text}
              </div>
            ) : null}
            <p className="hero-note" style={{ marginTop: "1rem" }}>
              Prefer to talk it through? <Link to="/contact">Contact us</Link>. Independent
              assistance — not affiliated with the New Zealand Government.
            </p>
          </div>
        </div>
      </section>

      <section className="band band-white">
        <div className="wrap">
          <p className="kicker">Why {COMPANY.dba}</p>
          <h2>Built for travellers, not jargon</h2>
          <p className="section-lede">
            Immigration rules change and the forms assume you already know them. We close that gap —
            with careful checks where they help and people where they matter.
          </p>
          <div className="why-grid">
            {why.map((w) => (
              <article key={w.title} className="why-card">
                <w.icon size={20} color="var(--accent)" />
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="band">
        <div className="wrap">
          <p className="kicker">Visiting, or staying longer?</p>
          <h2>Short trip or new chapter — the rules differ</h2>
          <p className="section-lede">
            New Zealand separates short visits from everything else. Knowing which side you’re on
            decides the form, the fee and how far ahead you should start.
          </p>
          <div className="split-two">
            <article className="split-panel">
              <div className="eyebrow">Short visits</div>
              <h3>Up to 3 months (often 6 on a UK passport), or longer on a visitor visa</h3>
              <ul>
                <li>NZeTA for many visa-waiver nationals, cruise passengers and Auckland transit</li>
                <li>Visitor Visa when a waiver doesn’t apply, or for longer stays</li>
                <li>Short courses up to 3 months and business meetings are often fine</li>
                <li>No paid work on a visitor stay</li>
              </ul>
            </article>
            <article className="split-panel">
              <div className="eyebrow">Longer stays</div>
              <h3>Work, study, family and residence</h3>
              <ul>
                <li>Work visas tied to an accredited employer, working holiday or partner</li>
                <li>Student visas for courses over 3 months</li>
                <li>Partner and child visas alongside a main applicant</li>
                <li>Residence through skills, Green List routes or family</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="apply" className="band band-white">
        <div className="wrap">
          <p className="kicker">Start here</p>
          <h2>Send a short enquiry</h2>
          <p className="section-lede">
            No payment on this step. We reply with the usual pathway and a clear fee breakdown.
          </p>
          <div className="apply-grid">
            <div>
              <ul className="benefit-ticks">
                {[
                  "Takes about a minute",
                  `Service from $${SERVICE_FEE} per traveler`,
                  `IAA licence ${IAA_ADVISER.licenceNumber} on file`,
                  "Official DIY always available",
                ].map((t) => (
                  <li key={t}>
                    <CheckCircle2 size={16} color="var(--teal)" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="licence-strip" style={{ marginTop: "1.5rem" }}>
                <div>
                  <div className="eyebrow">New Zealand immigration licence</div>
                  <p>
                    {IAA_ADVISER.name} · Licence {IAA_ADVISER.licenceNumber} · {IAA_ADVISER.role} ·{" "}
                    {COMPANY.legalName}
                  </p>
                  <p className="licence-note">
                    Immigration advice is provided under a current Immigration Advisers Authority
                    licence — not by an unlicensed third party.
                  </p>
                </div>
                <a
                  href={IAA_ADVISER.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Verify IAA licence
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <div className="card">
              <EnquiryForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="kicker">Common questions</p>
          <h2>Before you get started</h2>
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

      <section className="band band-white">
        <div className="wrap">
          <div className="cta-band">
            <h2>Tell us where you’re going. We’ll handle the how.</h2>
            <p>
              A quick NZeTA or a longer visa pathway — same team, clear fees, same people answering
              email. Explore the pathways, or send a note and we’ll come back within one business day.
            </p>
            <div className="hero-ctas">
              <a href="#pathways" className="btn btn-teal">
                Learn more
              </a>
              <Link to="/contact" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,.35)", color: "#fff", background: "transparent" }}>
                Contact us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
