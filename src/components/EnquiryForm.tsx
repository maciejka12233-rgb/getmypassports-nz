import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { COMPANY } from "../company";

type Errors = Partial<Record<"name" | "email" | "pathway" | "consent", string>>;

const pathways = [
  "NZeTA",
  "Visitor visa",
  "Working holiday",
  "Student / work / other",
  "Not sure — please advise",
] as const;

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [pathway, setPathway] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function validate() {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email.";
    if (!pathway) next.pathway = "Select a pathway.";
    if (!consent) next.consent = "Please accept the privacy notice.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);

    const subject = encodeURIComponent(`New Zealand enquiry — ${pathway}`);
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Nationality: ${nationality.trim() || "—"}`,
        `Travel date: ${travelDate || "—"}`,
        `Pathway: ${pathway}`,
        "",
        message.trim() || "(no extra details)",
      ].join("\n"),
    );

    // Opens the user's mail client; success UI still shows so the flow feels complete.
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;

    await new Promise((r) => setTimeout(r, 400));
    setSending(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="form-success">
        <h3>
          <CheckCircle2 size={18} style={{ display: "inline", verticalAlign: "-3px", marginRight: 6 }} />
          Request started
        </h3>
        <p>
          Thanks{name.trim() ? `, ${name.trim().split(/\s+/)[0]}` : ""}. If your email app opened, send
          the message to finish. You can also write us directly at{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We typically reply within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className={`form-row ${compact ? "" : "two"}`}>
        <div className="field">
          <label htmlFor="eq-name">Full name</label>
          <input
            id="eq-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name ? <div className="field-error">{errors.name}</div> : null}
        </div>
        <div className="field">
          <label htmlFor="eq-email">Email</label>
          <input
            id="eq-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email ? <div className="field-error">{errors.email}</div> : null}
        </div>
      </div>

      <div className="form-row two">
        <div className="field">
          <label htmlFor="eq-nat">Passport nationality</label>
          <input
            id="eq-nat"
            name="nationality"
            placeholder="e.g. United States"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="eq-date">Approximate travel date</label>
          <input
            id="eq-date"
            name="travelDate"
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="eq-pathway">What do you need?</label>
        <select
          id="eq-pathway"
          name="pathway"
          value={pathway}
          onChange={(e) => setPathway(e.target.value)}
        >
          <option value="">Select…</option>
          {pathways.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {errors.pathway ? <div className="field-error">{errors.pathway}</div> : null}
      </div>

      {!compact ? (
        <div className="field">
          <label htmlFor="eq-msg">Anything we should know? (optional)</label>
          <textarea
            id="eq-msg"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Travel purpose, number of travelers, questions…"
          />
        </div>
      ) : null}

      <label className="check-row">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>
          I agree that {COMPANY.dba} may contact me about this enquiry. See our{" "}
          <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms</Link>.
        </span>
      </label>
      {errors.consent ? <div className="field-error">{errors.consent}</div> : null}

      <button type="submit" className="btn btn-primary" disabled={sending}>
        {sending ? "Sending…" : "Send enquiry"}
      </button>
      <p className="form-hint">
        No payment is taken on this form. Government fees (if any) are confirmed before you proceed.
      </p>
    </form>
  );
}
