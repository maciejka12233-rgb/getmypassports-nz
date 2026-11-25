import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { COMPANY, IAA_ADVISER, OFFICIAL_NZ, SERVICE_FEE } from "./company";

const navLinks = [
  { href: "#requires", label: "What NZ requires" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#costs", label: "What it costs" },
  { href: "#faq", label: "FAQs" },
  { href: "#licence", label: "Licence" },
  { href: "#contact", label: "Contact" },
] as const;

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
    title: "Your travelers",
    desc: "Passport details for everyone traveling. Live checks catch typos as you go.",
  },
  {
    n: "03",
    title: "Review and pay",
    desc: "Every line itemized before you pay — service fee, and government fees when they apply.",
  },
  {
    n: "04",
    title: "Licensed support",
    desc: "A person on our team reviews your matter. New Zealand immigration advice is provided under our IAA licence.",
  },
] as const;

const paidBenefits = [
  "A person on our team checks every answer before you proceed — under our IAA licence.",
  "Guided form with live validation so passport typos are caught early.",
  "Clear itemized fees before you pay: our service fee and any government fee for your pathway.",
  "Human support on chat and email if a field is unclear.",
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
    a: `No. ${COMPANY.dba} is operated by ${COMPANY.legalName}, an independent private company. We are not affiliated with Immigration New Zealand or the New Zealand Government. You can always apply on the official portal.`,
  },
  {
    q: "Do you have a New Zealand immigration licence?",
    a: `Yes. ${IAA_ADVISER.nameShort} (${IAA_ADVISER.title}, licence ${IAA_ADVISER.licenceNumber}) is on our team. Verify the listing on the Immigration Advisers Authority register via the link at the bottom of this page.`,
  },
  {
    q: "Do you guarantee I'll get a visa or be let in?",
    a: "No, and no service can. Visa grants, NZeTA outcomes and entry are decided only by New Zealand authorities. What we control is everything before that: accurate forms, document checks and clear next steps.",
  },
] as const;

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <header className="topbar">
        <nav className="nav wrap">
          <div className="brand-row">
            <a href="#top" className="brand">
              <span className="brand-mark">GMP</span>
              <span className="brand-text">
                <strong>{COMPANY.dba}</strong>
                <small>{COMPANY.legalName}</small>
              </span>
            </a>
            <span className="pill">
              <img src="https://flagcdn.com/w40/nz.png" alt="" />
              New Zealand
            </span>
          </div>

          <div className="nav-links desktop">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary btn-sm">
              Contact us
              <ArrowRight size={14} />
            </a>
            <button
              type="button"
              className="menu-btn mobile"
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? "×" : "≡"}
            </button>
          </div>
        </nav>
        {menuOpen ? (
          <div className="mobile-menu">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <h1 className="display">
              Travel documents for{" "}
              <span className="hl">
                New Zealand
                <img src="https://flagcdn.com/w80/nz.png" alt="" />
              </span>
            </h1>
            <p className="lede">
              Required for most travelers entering New Zealand: the right pathway (NZeTA or visitor
              visa). A person on our team checks every answer, and we guide you through the process
              under our New Zealand immigration licence.
            </p>
            <p className="price-line">
              From ${SERVICE_FEE} per traveler · government fees separate when they apply
            </p>
            <div className="hero-ctas">
              <a href="#requires" className="btn btn-primary">
                See what NZ requires
                <ArrowRight size={16} />
              </a>
              <a href="#licence" className="btn btn-ghost">
                View our IAA licence
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1469521669194-b92021ec077c?auto=format&fit=crop&w=1200&q=80"
                alt="New Zealand landscape"
                width={800}
                height={600}
              />
            </div>
            <article className="sample-card">
              <div className="sample-top">
                <span>Sample NZeTA</span>
                <span className="ok">
                  <Check size={12} /> Submitted
                </span>
              </div>
              <div className="sample-flag">
                <img src="https://flagcdn.com/w40/nz.png" alt="" />
                Visitor pathway
              </div>
              <dl>
                <div>
                  <dt>Traveler</dt>
                  <dd>JAMES O&apos;CONNOR</dd>
                </div>
                <div>
                  <dt>Arrival</dt>
                  <dd>Mon 15 Dec 2026</dd>
                </div>
                <div>
                  <dt>Ref.</dt>
                  <dd>NZ-4H8M-19K2</dd>
                </div>
              </dl>
              <p>Keep confirmation with your passport for the airline and border.</p>
            </article>
          </div>
        </section>

        <section className="wrap stats-wrap">
          <div className="stats">
            <div className="stats-grid">
              {[
                { k: "Documents", v: "NZeTA / visa", s: "pathway depends on passport" },
                { k: "Service fee", v: `$${SERVICE_FEE}`, s: "per traveler, from" },
                { k: "Government fee", v: "Varies", s: "paid to NZ authorities when due" },
                { k: "Licence", v: "IAA", s: "licensed adviser on our team" },
              ].map((item) => (
                <div key={item.k} className="stat">
                  <div className="stat-k">{item.k}</div>
                  <div className="stat-v">{item.v}</div>
                  <div className="stat-s">{item.s}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="disclaimer">
            {COMPANY.dba} ({COMPANY.legalName}) is an independent private company. We are not
            Immigration New Zealand. You can also apply directly on the official government website.{" "}
            <a href={OFFICIAL_NZ.url} target="_blank" rel="noopener noreferrer">
              {OFFICIAL_NZ.host}
            </a>
          </p>
        </section>

        <section id="requires" className="band band-white">
          <div className="wrap">
            <h2 className="display">What New Zealand requires</h2>
            <p className="section-lede">
              Most visitors need an NZeTA or visitor visa before travel. The exact pathway depends on
              your passport and purpose.
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
            <h2 className="display">Four steps, and you know all four</h2>
            <p className="section-lede">Most services show you three. The fourth one is real, so here it is.</p>
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

        <section id="costs" className="band band-white">
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
                    desc: "Chat and email before and after you apply",
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
                    <dd>Shown at checkout</dd>
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

        <section className="band">
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
                  {IAA_ADVISER.role} of {COMPANY.legalName} (dba {COMPANY.dba})
                </p>
                <p className="licence-note">
                  We hold a current Immigration Advisers Authority licence. Immigration advice for New
                  Zealand matters is provided by our licensed team member — not by an outside agent.
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

        <section id="faq" className="band band-white">
          <div className="wrap faq-grid">
            <div>
              <h2 className="display">Questions, answered straight</h2>
              <p className="section-lede">Still unsure? Reach us with the contact details below.</p>
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

        <section id="contact" className="band">
          <div className="wrap contact">
            <div>
              <h2 className="display">Contact us</h2>
              <p className="section-lede">
                {COMPANY.legalName}
                <br />
                doing business as {COMPANY.dba}
              </p>
            </div>
            <div className="contact-cards">
              <article className="card soft">
                <div className="eyebrow">
                  <MapPin size={12} /> Office address
                </div>
                <p>{COMPANY.officeAddress}</p>
              </article>
              <article className="card soft">
                <div className="eyebrow">
                  <MapPin size={12} /> Registered address
                </div>
                <p>{COMPANY.registeredAddress}</p>
              </article>
              <article className="card soft">
                <div className="eyebrow">
                  <BadgeCheck size={12} /> IAA licence
                </div>
                <p>
                  {IAA_ADVISER.nameShort} · Licence {IAA_ADVISER.licenceNumber}
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
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            <strong>{COMPANY.dba}</strong>
            <p>
              {COMPANY.legalName}
              <br />
              Office: {COMPANY.officeAddress}
              <br />
              Registered: {COMPANY.registeredAddress}
            </p>
          </div>
          <div>
            <strong>New Zealand licence</strong>
            <p>
              {IAA_ADVISER.name} · Licence {IAA_ADVISER.licenceNumber}
              <br />
              <a href={IAA_ADVISER.registerUrl} target="_blank" rel="noopener noreferrer">
                {IAA_ADVISER.registerUrl}
              </a>
            </p>
          </div>
          <p className="footer-note">
            Independent private service. Not Immigration New Zealand. Visa and entry decisions are made
            only by New Zealand authorities.
          </p>
        </div>
      </footer>

      <style>{css}</style>
    </div>
  );
}

const css = `
.page { min-height: 100vh; background: var(--bg); color: var(--ink); padding-bottom: 2rem; }
.wrap { width: min(1120px, calc(100% - 2.5rem)); margin-inline: auto; }
.topbar { position: sticky; top: 0; z-index: 40; background: rgba(255,255,255,.92); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); }
.nav { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: .85rem 0; }
.brand-row { display: flex; align-items: center; gap: .75rem; }
.brand { display: flex; align-items: center; gap: .7rem; }
.brand-mark { width: 2.35rem; height: 2.35rem; border-radius: .7rem; background: var(--deep); color: #fff; display: grid; place-items: center; font-size: .72rem; font-weight: 700; letter-spacing: .04em; }
.brand-text { display: flex; flex-direction: column; line-height: 1.15; }
.brand-text strong { font-size: .95rem; }
.brand-text small { font-size: .68rem; color: var(--ink-muted); }
.pill { display: none; align-items: center; gap: .4rem; border: 1px solid var(--line); background: var(--bg-soft); border-radius: 999px; padding: .28rem .7rem; font-size: .75rem; font-weight: 600; color: var(--ink-muted); }
.pill img { width: 1.1rem; height: .8rem; border-radius: 2px; object-fit: cover; }
.nav-links { display: none; gap: 1.1rem; font-size: .875rem; font-weight: 600; color: var(--ink-muted); }
.nav-links a:hover { color: var(--ink); }
.nav-actions { display: flex; align-items: center; gap: .5rem; }
.menu-btn { border: 0; background: transparent; font-size: 1.4rem; padding: .25rem .4rem; }
.mobile-menu { display: flex; flex-direction: column; gap: .75rem; padding: .75rem 1.25rem 1rem; border-top: 1px solid var(--line); font-weight: 600; color: var(--ink-muted); }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: .45rem; border-radius: 999px; padding: .85rem 1.25rem; font-size: .9rem; font-weight: 700; border: 0; transition: opacity .15s ease; }
.btn:hover { opacity: .92; }
.btn-sm { padding: .55rem .95rem; font-size: .82rem; }
.btn-primary { background: var(--accent); color: #fff; }
.btn-ghost { background: transparent; border: 1px solid var(--line); color: var(--ink); }
.hero { display: grid; gap: 2.5rem; padding: 3rem 0 2rem; }
.hero-copy h1 { font-size: clamp(2.3rem, 5vw, 3.4rem); line-height: 1.05; margin: 0; color: var(--ink); }
.hl { position: relative; display: inline-flex; align-items: center; gap: .45rem; }
.hl::after { content: ""; position: absolute; left: 0; right: 2.5rem; bottom: .15rem; height: .7rem; background: var(--accent-soft); z-index: -1; border-radius: 2px; }
.hl img { width: 2.4rem; height: 1.7rem; border-radius: 3px; object-fit: cover; box-shadow: 0 1px 4px rgba(0,0,0,.15); }
.lede { margin: 1.2rem 0 0; max-width: 36rem; font-size: 1.05rem; color: var(--ink-muted); }
.price-line { margin: 1rem 0 0; font-weight: 700; }
.hero-ctas { display: flex; flex-wrap: wrap; gap: .7rem; margin-top: 1.4rem; }
.hero-visual { position: relative; }
.hero-photo { overflow: hidden; border-radius: 1.75rem; box-shadow: 0 20px 50px -20px rgba(10,36,26,.4); }
.hero-photo img { aspect-ratio: 4/3; width: 100%; object-fit: cover; }
.sample-card { position: absolute; left: 1rem; right: 1rem; bottom: -1.4rem; background: #fff; border: 1px solid var(--line); border-radius: 1rem; padding: 1rem; box-shadow: 0 16px 40px -18px rgba(10,36,26,.35); }
.sample-top { display: flex; justify-content: space-between; align-items: center; font-size: .68rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--ink-muted); }
.ok { display: inline-flex; align-items: center; gap: .25rem; background: #e8f8ef; color: #146c3d; border-radius: 999px; padding: .15rem .45rem; text-transform: none; letter-spacing: 0; }
.sample-flag { display: flex; align-items: center; gap: .45rem; margin-top: .7rem; font-weight: 700; }
.sample-flag img { width: 1.2rem; height: .85rem; border-radius: 2px; object-fit: cover; }
.sample-card dl { margin: .7rem 0 0; display: grid; gap: .35rem; font-size: .78rem; color: var(--ink-muted); }
.sample-card dl div { display: flex; justify-content: space-between; gap: .75rem; }
.sample-card dd { margin: 0; font-weight: 600; color: var(--ink); }
.sample-card > p { margin: .7rem 0 0; font-size: .72rem; color: var(--ink-muted); }
.stats-wrap { padding: 2.5rem 0 1rem; }
.stats { background: #fff; border: 1px solid var(--line); border-radius: 1.25rem; padding: 1.1rem; box-shadow: 0 12px 40px -24px rgba(10,36,26,.3); }
.stats-grid { display: grid; gap: 1rem; }
.stat-k { font-size: .68rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--ink-muted); }
.stat-v { margin-top: .2rem; font-size: 1.25rem; font-weight: 800; }
.stat-s { font-size: .75rem; color: var(--ink-muted); }
.disclaimer { margin: 1rem 0 0; text-align: center; font-size: .85rem; color: var(--ink-muted); }
.disclaimer a { color: var(--accent); font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }
.band { padding: 3.5rem 0; }
.band-white { background: #fff; border-block: 1px solid var(--line); }
.section-lede { margin: .75rem 0 0; max-width: 36rem; color: var(--ink-muted); }
.cards-3, .cards-4, .compare, .costs-grid, .contact-cards, .faq-grid { display: grid; gap: 1rem; margin-top: 1.75rem; }
.card { border: 1px solid var(--line); border-radius: var(--radius); background: #fff; padding: 1.25rem; }
.card.soft { background: var(--bg-soft); }
.card h3 { margin: .45rem 0 0; font-size: 1.25rem; }
.card p { margin: .7rem 0 0; color: var(--ink-muted); font-size: .92rem; }
.eyebrow { font-size: .68rem; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: var(--accent); display: inline-flex; align-items: center; gap: .3rem; }
.eyebrow.muted, .eyebrow.light { color: var(--ink-muted); }
.eyebrow.light { color: rgba(255,255,255,.65); }
.need { margin-top: 1.1rem; padding-top: 1rem; border-top: 1px solid var(--line); }
.from-fee { margin-top: 1rem !important; font-weight: 700; color: var(--ink) !important; }
.step { position: relative; overflow: hidden; }
.step-n { position: absolute; right: -.1rem; top: -.2rem; font-size: 4rem; font-weight: 900; color: var(--accent-soft); pointer-events: none; user-select: none; }
.cost-rows { display: grid; gap: .75rem; }
.cost-row { display: flex; justify-content: space-between; gap: 1rem; background: var(--bg-soft); border: 1px solid var(--line); border-radius: 1rem; padding: 1rem 1.15rem; }
.cost-name { font-weight: 700; }
.cost-desc { margin-top: .2rem; font-size: .85rem; color: var(--ink-muted); }
.cost-price { font-weight: 700; color: var(--accent); white-space: nowrap; }
.example { background: var(--deep); color: #fff; border-radius: 1.25rem; padding: 1.5rem; }
.example h3 { margin: .4rem 0 0; font-size: 1.5rem; }
.example dl { margin: 1.25rem 0 0; display: grid; gap: .85rem; }
.example dl > div { display: flex; justify-content: space-between; gap: 1rem; padding-bottom: .85rem; border-bottom: 1px solid rgba(255,255,255,.12); font-size: .9rem; }
.example dt { font-weight: 600; }
.example .sub { margin: .15rem 0 0; color: rgba(255,255,255,.6); font-size: .8rem; }
.example dd { margin: 0; font-weight: 700; }
.example .total { border: 0; padding-bottom: 0; align-items: center; }
.example .total dd { font-size: 1.6rem; }
.example .fine { margin: 1rem 0 0; font-size: .75rem; color: rgba(255,255,255,.65); }
.compare-us { border-color: rgba(13,122,79,.28); }
.compare-label { display: flex; align-items: center; gap: .4rem; font-weight: 700; color: var(--accent); font-size: .9rem; }
.compare-label.muted { color: var(--ink-muted); }
.compare ul { list-style: none; margin: 1rem 0 0; padding: 0; display: grid; gap: .7rem; }
.compare li { display: flex; gap: .55rem; align-items: flex-start; font-size: .9rem; }
.compare li svg { flex-shrink: 0; margin-top: .1rem; color: var(--accent); }
.muted-list { color: var(--ink-muted); }
.dash { width: .7rem; height: 1px; background: var(--line); margin-top: .7rem; flex-shrink: 0; }
.text-link { display: inline-flex; align-items: center; gap: .35rem; margin-top: 1rem; font-weight: 700; color: var(--accent); font-size: .9rem; }
.licence-strip { background: #fff; border-block: 1px solid var(--line); padding: 1.75rem 0; }
.licence-inner { display: flex; flex-direction: column; gap: 1rem; }
.licence-copy { display: flex; gap: .85rem; align-items: flex-start; }
.licence-icon { width: 2.6rem; height: 2.6rem; border-radius: 999px; background: var(--accent-soft); color: var(--accent); display: grid; place-items: center; flex-shrink: 0; }
.licence-copy p { margin: .35rem 0 0; font-size: .92rem; }
.licence-note { color: var(--ink-muted) !important; font-size: .85rem !important; }
.faq-list { background: #fff; border: 1px solid var(--line); border-radius: 1.25rem; overflow: hidden; }
.faq-item { width: 100%; text-align: left; background: transparent; border: 0; border-bottom: 1px solid var(--line); padding: 1rem 1.15rem; }
.faq-item:last-child { border-bottom: 0; }
.faq-q { display: flex; justify-content: space-between; gap: 1rem; font-weight: 600; }
.faq-a { margin: .7rem 0 0; color: var(--ink-muted); font-size: .9rem; }
.contact-cards .card p { margin-top: .55rem; color: var(--ink); font-weight: 600; }
.footer { margin-top: 2rem; border-top: 1px solid var(--line); background: var(--deep); color: rgba(255,255,255,.82); padding: 2rem 0 3rem; }
.footer-inner { display: grid; gap: 1.5rem; }
.footer strong { display: block; color: #fff; margin-bottom: .4rem; }
.footer p { margin: 0; font-size: .85rem; line-height: 1.55; }
.footer a { color: #9fe0c0; word-break: break-all; }
.footer-note { opacity: .75; }
@media (min-width: 640px) {
  .pill { display: inline-flex; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .cards-3, .compare, .contact-cards { grid-template-columns: repeat(2, 1fr); }
  .sample-card { left: 1.5rem; right: auto; width: 280px; }
}
@media (min-width: 960px) {
  .desktop { display: flex !important; }
  .mobile { display: none !important; }
  .mobile-menu { display: none !important; }
  .hero { grid-template-columns: 1.05fr .95fr; align-items: center; padding-top: 4rem; }
  .stats-grid { grid-template-columns: repeat(4, 1fr); }
  .cards-3 { grid-template-columns: repeat(3, 1fr); }
  .cards-4 { grid-template-columns: repeat(4, 1fr); }
  .costs-grid, .faq-grid { grid-template-columns: .95fr 1.05fr; align-items: start; }
  .licence-inner { flex-direction: row; align-items: center; justify-content: space-between; }
  .contact-cards { grid-template-columns: repeat(3, 1fr); }
  .footer-inner { grid-template-columns: 1.2fr 1.4fr; }
}
`;
