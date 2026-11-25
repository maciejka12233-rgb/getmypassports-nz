import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { COMPANY } from "../company";

const policyLinks = [
  { to: "/terms", label: "Terms and Conditions" },
  { to: "/refund", label: "Payment Refund Cancel" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/cookies", label: "Cookie Policy" },
  { to: "/disclaimer", label: "Disclaimer" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <>
      <div className="top-notice">Independent immigration assistance service</div>
      <header className="topbar">
        <nav className="nav wrap">
          <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">GMP</span>
            <span className="brand-text">
              <strong>{COMPANY.dba}</strong>
              <small>Immigration Professionals</small>
            </span>
          </Link>

          <div className="nav-links desktop">
            <a href={onHome ? "#pathways" : "/#pathways"}>Learn More</a>
            <a href={onHome ? "#requirements" : "/#requirements"}>Requirements</a>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>
              About Us
            </NavLink>
            <div
              className={`nav-dropdown ${policiesOpen ? "open" : ""}`}
              onMouseEnter={() => setPoliciesOpen(true)}
              onMouseLeave={() => setPoliciesOpen(false)}
            >
              <button type="button" aria-expanded={policiesOpen}>
                Policies <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown-panel">
                {policyLinks.map((l) => (
                  <Link key={l.to} to={l.to}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Contact Us
            </NavLink>
          </div>

          <div className="nav-actions">
            <Link to={onHome ? "/#apply" : "/contact"} className="btn btn-primary btn-sm">
              Learn More
            </Link>
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
            <a href={onHome ? "#pathways" : "/#pathways"} onClick={() => setMenuOpen(false)}>
              Learn More
            </a>
            <a href={onHome ? "#requirements" : "/#requirements"} onClick={() => setMenuOpen(false)}>
              Requirements
            </a>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <span>Policies</span>
            {policyLinks.map((l) => (
              <Link key={l.to} to={l.to} className="sub" onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        ) : null}
      </header>
    </>
  );
}
