import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "../company";

const homeAnchors = [
  { href: "/#requires", label: "What NZ requires" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#apply", label: "Apply" },
  { href: "/#faq", label: "FAQs" },
] as const;

const pageLinks = [
  { to: "/contact", label: "Contact" },
  { to: "/terms", label: "Terms" },
  { to: "/privacy", label: "Privacy" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <header className="topbar">
      <nav className="nav wrap">
        <div className="brand-row">
          <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">GMP</span>
            <span className="brand-text">
              <strong>{COMPANY.dba}</strong>
              <small>{COMPANY.legalName}</small>
            </span>
          </Link>
          <span className="pill">
            <img src="https://flagcdn.com/w40/nz.png" alt="" />
            New Zealand
          </span>
        </div>

        <div className="nav-links desktop">
          {onHome
            ? homeAnchors.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))
            : null}
          {pageLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? "active" : undefined)}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <Link to={onHome ? "/#apply" : "/contact"} className="btn btn-primary btn-sm">
            {onHome ? "Start request" : "Contact"}
            <ArrowRight size={14} />
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
          {onHome
            ? homeAnchors.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              ))
            : null}
          {pageLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/refund" onClick={() => setMenuOpen(false)}>
            Refund policy
          </Link>
        </div>
      ) : null}
    </header>
  );
}
