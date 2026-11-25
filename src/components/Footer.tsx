import { Link } from "react-router-dom";
import { COMPANY, IAA_ADVISER } from "../company";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <strong>{COMPANY.dba}</strong>
          <p>
            {COMPANY.legalName}
            <br />
            {COMPANY.officeAddress}
            <br />
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <br />
            <a href={`tel:${COMPANY.businessPhone.replace(/\s/g, "")}`}>{COMPANY.businessPhone}</a>
            {" · "}
            <a href={`tel:${COMPANY.mobilePhone.replace(/\s/g, "")}`}>{COMPANY.mobilePhone}</a>
          </p>
          <div className="footer-links">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/refund">Refunds</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <strong>New Zealand licence</strong>
          <p>
            {IAA_ADVISER.name}
            <br />
            Licence {IAA_ADVISER.licenceNumber} · {IAA_ADVISER.role}
            <br />
            <a href={IAA_ADVISER.registerUrl} target="_blank" rel="noopener noreferrer">
              Verify on the IAA register
            </a>
          </p>
        </div>
        <p className="footer-note">
          Independent private service. Not Immigration New Zealand. Visa, NZeTA and entry decisions are
          made only by New Zealand authorities. © {new Date().getFullYear()} {COMPANY.legalName}.
        </p>
      </div>
    </footer>
  );
}
