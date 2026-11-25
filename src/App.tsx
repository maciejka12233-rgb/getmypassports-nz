import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";
import { ContactPage } from "./pages/Contact";
import { AboutPage } from "./pages/About";
import { TermsPage } from "./pages/Terms";
import { PrivacyPage } from "./pages/Privacy";
import { RefundPage } from "./pages/Refund";
import { CookiesPage } from "./pages/Cookies";
import { DisclaimerPage } from "./pages/Disclaimer";

function SpaPathRestore() {
  const navigate = useNavigate();
  useEffect(() => {
    const saved = sessionStorage.getItem("gmp-spa-path");
    if (!saved) return;
    sessionStorage.removeItem("gmp-spa-path");
    if (saved !== "/" && saved !== location.pathname + location.search + location.hash) {
      navigate(saved, { replace: true });
    }
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <SpaPathRestore />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="refund" element={<RefundPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="disclaimer" element={<DisclaimerPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
