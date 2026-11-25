import { Link } from "react-router-dom";
import { COMPANY, IAA_ADVISER, OFFICIAL_NZ } from "../company";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <div className="footer-grid-top">
            <div>
              <h3>{COMPANY.legalName}</h3>
              <p>{COMPANY.officeAddress}</p>
            </div>
            <div>
              <h3>{COMPANY.email}</h3>
              <p>
                <a href={`tel:${COMPANY.businessPhone.replace(/\s/g, "")}`}>
                  {COMPANY.businessPhone}
                </a>
                <br />
                <a href={`tel:${COMPANY.mobilePhone.replace(/\s/g, "")}`}>{COMPANY.mobilePhone}</a>
              </p>
            </div>
            <div>
              <h3>New Zealand licence</h3>
              <p>
                {IAA_ADVISER.nameShort} · {IAA_ADVISER.licenceNumber}
                <br />
                <a href={IAA_ADVISER.registerUrl} target="_blank" rel="noopener noreferrer">
                  Verify on the IAA register
                </a>
              </p>
            </div>
          </div>
          <div className="footer-links">
            <Link to="/terms">Terms and Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <Link to="/refund">Payment Refund Cancel</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div>
          <p className="footer-note">
            This website is owned and run by {COMPANY.legalName} (dba {COMPANY.dba}). We have no
            affiliation with, and are not endorsed by or acting for, the New Zealand Government or
            Immigration New Zealand. You can always apply directly at{" "}
            <a href={OFFICIAL_NZ.url} target="_blank" rel="noopener noreferrer">
              {OFFICIAL_NZ.host}
            </a>
            .
          </p>
          <p className="footer-note" style={{ marginTop: "0.85rem" }}>
            © {new Date().getFullYear()} {COMPANY.dba}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
