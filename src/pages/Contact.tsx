import { MapPin, Mail, Phone, BadgeCheck, ExternalLink, Globe } from "lucide-react";
import { EnquiryForm } from "../components/EnquiryForm";
import { COMPANY, IAA_ADVISER, LAST_UPDATED } from "../company";

export function ContactPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="wrap">
          <div className="eyebrow">Get in touch</div>
          <h1 className="display">Contact {COMPANY.dba}</h1>
          <p className="legal-meta">
            {COMPANY.legalName} · New Zealand travel document assistance · Updated {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap apply-grid">
          <div>
            <h2 className="display" style={{ fontSize: "1.75rem" }}>
              Send a message
            </h2>
            <p className="section-lede">
              Use the form for NZeTA or visa questions. We reply to the email you provide, usually
              within one business day.
            </p>
            <div className="contact-cards" style={{ marginTop: "1.5rem" }}>
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
                  Business:{" "}
                  <a href={`tel:${COMPANY.businessPhone.replace(/\s/g, "")}`}>
                    {COMPANY.businessPhone}
                  </a>
                  <br />
                  Direct:{" "}
                  <a href={`tel:${COMPANY.directDial.replace(/\s/g, "")}`}>{COMPANY.directDial}</a>
                  <br />
                  Mobile:{" "}
                  <a href={`tel:${COMPANY.mobilePhone.replace(/\s/g, "")}`}>{COMPANY.mobilePhone}</a>
                </p>
              </article>
              <article className="card soft">
                <div className="eyebrow">
                  <MapPin size={12} /> Business address
                </div>
                <p>{COMPANY.officeAddress}</p>
              </article>
              <article className="card soft">
                <div className="eyebrow">
                  <MapPin size={12} /> Postal / service address
                </div>
                <p>{COMPANY.postalAddress}</p>
              </article>
              <article className="card soft">
                <div className="eyebrow">
                  <Globe size={12} /> Websites
                </div>
                <p>
                  <a href={COMPANY.website} target="_blank" rel="noopener noreferrer">
                    getmypassports.com
                  </a>
                  <br />
                  <a href={COMPANY.websiteAlt} target="_blank" rel="noopener noreferrer">
                    avenuesoverseas.com
                  </a>
                </p>
              </article>
              <article className="card soft">
                <div className="eyebrow">
                  <BadgeCheck size={12} /> IAA licence
                </div>
                <p>
                  {IAA_ADVISER.nameShort} · {IAA_ADVISER.licenceNumber}
                  <br />
                  {IAA_ADVISER.role} · {COMPANY.legalName}
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
            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
